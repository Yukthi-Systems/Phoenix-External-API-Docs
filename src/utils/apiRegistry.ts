import postmanCollection from "@site/static/postman/collection.json";

export interface ParamItem {
  key: string;
  value: string;
  description?: string;
}

export interface EndpointDetails {
  method: string;
  path: string;
  auth: boolean;
  pathParams: ParamItem[];
  queryParams: ParamItem[];
  headers: ParamItem[];
  defaultBody: string | null;
}

interface PostmanRequestItem {
  name: string;
  method: string;
  pathSegments: string[];
  query: { key: string; value: string }[];
  headers: { key: string; value: string }[];
  bodyRaw: string | null;
}

// Flatten all items recursively from Postman collection
function flattenCollectionItems(items: any[]): PostmanRequestItem[] {
  const result: PostmanRequestItem[] = [];

  function traverse(list: any[]) {
    for (const item of list) {
      if (item.request) {
        const req = item.request;
        const method = (req.method || "GET").toUpperCase();
        const pathSegments: string[] = req.url?.path || [];
        const query = (req.url?.query || []).map((q: any) => ({
          key: q.key || "",
          value: q.value || "",
        }));
        const headers = (req.header || []).map((h: any) => ({
          key: h.key || "",
          value: h.value || "",
        }));
        const bodyRaw = req.body?.mode === "raw" ? req.body.raw : null;

        result.push({
          name: item.name,
          method,
          pathSegments,
          query,
          headers,
          bodyRaw,
        });
      }
      if (Array.isArray(item.item)) {
        traverse(item.item);
      }
    }
  }

  traverse(items);
  return result;
}

// Cached flattened items
let cachedPostmanItems: PostmanRequestItem[] | null = null;

function getPostmanItems(): PostmanRequestItem[] {
  if (!cachedPostmanItems) {
    try {
      cachedPostmanItems = flattenCollectionItems(postmanCollection.item || []);
    } catch {
      cachedPostmanItems = [];
    }
  }
  return cachedPostmanItems;
}

/**
 * Normalizes a path like "/mailbox/list/{domain_name}" into clean segments:
 * ["mailbox", "list", "{domain_name}"]
 */
function toSegments(path: string): string[] {
  return path
    .split("/")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Finds matching Postman item by comparing HTTP method and path segments.
 * Doc segments like "{domain_name}" match any segment in the postman path.
 */
function findPostmanMatch(
  method: string,
  docPathSegments: string[]
): PostmanRequestItem | null {
  const items = getPostmanItems();
  const normalizedMethod = method.toUpperCase();

  for (const item of items) {
    if (item.method !== normalizedMethod) continue;
    if (item.pathSegments.length !== docPathSegments.length) continue;

    let matches = true;
    for (let i = 0; i < docPathSegments.length; i++) {
      const docSeg = docPathSegments[i];
      const postmanSeg = item.pathSegments[i];

      // If doc segment is a placeholder like {domain_name} or :param
      if (
        (docSeg.startsWith("{") && docSeg.endsWith("}")) ||
        docSeg.startsWith(":")
      ) {
        continue;
      }

      if (docSeg.toLowerCase() !== postmanSeg.toLowerCase()) {
        matches = false;
        break;
      }
    }

    if (matches) {
      return item;
    }
  }

  return null;
}

/**
 * Fallback sensible default value for common parameter names
 */
function getParamFallbackValue(paramName: string): string {
  const name = paramName.toLowerCase();
  if (name.includes("email")) return "jane.doe@example.com";
  if (name.includes("domain")) return "example.com";
  if (name.includes("prefix")) return "jane.doe";
  if (name.includes("id")) return "7f9c2a10-4e3b-4c8a-9d2e-6b1f0a3c5d7e";
  if (name === "limit") return "10";
  if (name === "offset") return "0";
  return "example_val";
}

/**
 * Main function used by the TryItOutConsole to get all initial parameters,
 * headers, and request body for an endpoint.
 */
export function getEndpointDetails(
  method: string,
  path: string,
  auth: boolean = true
): EndpointDetails {
  const docSegments = toSegments(path);
  const matchedItem = findPostmanMatch(method, docSegments);

  // Extract path parameters from doc path (e.g. {domain_name}, {email_id})
  const pathParams: ParamItem[] = [];
  docSegments.forEach((seg, idx) => {
    if (
      (seg.startsWith("{") && seg.endsWith("}")) ||
      seg.startsWith(":")
    ) {
      const paramName = seg.replace(/^[{:]/, "").replace(/}$/, "");
      // If we matched a postman item, use the actual segment from postman as default!
      const postmanVal = matchedItem?.pathSegments[idx];
      const defaultValue =
        postmanVal && !postmanVal.startsWith("{")
          ? postmanVal
          : getParamFallbackValue(paramName);

      pathParams.push({
        key: paramName,
        value: defaultValue,
      });
    }
  });

  // Query parameters: from postman item or common pagination if /list
  const queryParams: ParamItem[] = [];
  if (matchedItem && matchedItem.query.length > 0) {
    matchedItem.query.forEach((q) => {
      queryParams.push({
        key: q.key,
        value: q.value,
      });
    });
  } else if (path.includes("/list")) {
    queryParams.push({ key: "limit", value: "10" });
    queryParams.push({ key: "offset", value: "0" });
  }

  // Headers
  const headers: ParamItem[] = [];
  const normalizedMethod = method.toUpperCase();
  if (["POST", "PUT", "PATCH"].includes(normalizedMethod)) {
    headers.push({ key: "Content-Type", value: "application/json" });
  }

  // Default body
  let defaultBody: string | null = null;
  if (matchedItem?.bodyRaw) {
    try {
      // Prettify if valid JSON
      const parsed = JSON.parse(matchedItem.bodyRaw);
      defaultBody = JSON.stringify(parsed, null, 2);
    } catch {
      defaultBody = matchedItem.bodyRaw;
    }
  } else if (["POST", "PUT", "PATCH"].includes(normalizedMethod)) {
    defaultBody = "{\n  \n}";
  }

  return {
    method: normalizedMethod,
    path,
    auth,
    pathParams,
    queryParams,
    headers,
    defaultBody,
  };
}
