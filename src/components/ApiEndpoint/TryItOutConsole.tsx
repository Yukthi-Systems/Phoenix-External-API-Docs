import React, { useState, useMemo, type ReactNode } from "react";
import clsx from "clsx";
import { useApiConfig } from "@site/src/context/ApiConfigContext";
import { getEndpointDetails } from "@site/src/utils/apiRegistry";
import {
  PlayIcon,
  SettingsIcon,
  KeyIcon,
  CopyIcon,
  CheckIcon,
  RefreshCwIcon,
} from "@site/src/components/Icons";
import styles from "./tryitout.module.css";
import endpointStyles from "./styles.module.css";

interface TryItOutConsoleProps {
  method: string;
  path: string;
  auth?: boolean;
}

interface ResponseState {
  status: number;
  statusText: string;
  durationMs: number;
  headers: Record<string, string>;
  body: string;
  isJson: boolean;
}

const METHOD_CLASS: Record<string, string> = {
  GET: endpointStyles.get,
  POST: endpointStyles.post,
  PUT: endpointStyles.put,
  PATCH: endpointStyles.patch,
  DELETE: endpointStyles.delete,
};

export function TryItOutConsole({
  method,
  path,
  auth = true,
}: TryItOutConsoleProps): ReactNode {
  const { baseUrl, apiKey, hasApiKey, openModal } = useApiConfig();

  const handleOpenConfig = () => {
    openModal();
  };

  const endpointDetails = useMemo(
    () => getEndpointDetails(method, path, auth),
    [method, path, auth]
  );

  const [pathParamValues, setPathParamValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    endpointDetails.pathParams.forEach((p) => {
      initial[p.key] = p.value;
    });
    return initial;
  });

  const [queryParamValues, setQueryParamValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    endpointDetails.queryParams.forEach((q) => {
      initial[q.key] = q.value;
    });
    return initial;
  });

  const [bodyText, setBodyText] = useState<string>(
    endpointDetails.defaultBody || ""
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ResponseState | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"body" | "headers">("body");

  const interpolatedPath = useMemo(() => {
    let result = path;
    for (const [key, val] of Object.entries(pathParamValues)) {
      result = result.replace(`{${key}}`, encodeURIComponent(val || `{${key}}`));
      result = result.replace(`:${key}`, encodeURIComponent(val || `:${key}`));
    }
    return result;
  }, [path, pathParamValues]);

  const queryString = useMemo(() => {
    const entries = Object.entries(queryParamValues).filter(([_, val]) => val !== "");
    if (entries.length === 0) return "";
    const params = new URLSearchParams();
    entries.forEach(([key, val]) => params.append(key, val));
    return `?${params.toString()}`;
  }, [queryParamValues]);

  const fullRequestUrl = useMemo(() => {
    const cleanBase = baseUrl.trim().replace(/\/+$/, "");
    const cleanPath = interpolatedPath.startsWith("/") ? interpolatedPath : `/${interpolatedPath}`;
    return cleanBase ? `${cleanBase}${cleanPath}${queryString}` : `<API_URL>${cleanPath}${queryString}`;
  }, [baseUrl, interpolatedPath, queryString]);

  const handlePrettifyJson = () => {
    try {
      const parsed = JSON.parse(bodyText);
      setBodyText(JSON.stringify(parsed, null, 2));
      setJsonError(null);
    } catch {
      setJsonError("Malformed JSON");
    }
  };

  const handleResetBody = () => {
    setBodyText(endpointDetails.defaultBody || "");
    setJsonError(null);
  };

  const handleSendRequest = async () => {
    if (!baseUrl.trim()) {
      setNetworkError("Please set your API URL first.");
      handleOpenConfig();
      return;
    }

    setIsLoading(true);
    setResponse(null);
    setNetworkError(null);

    const hasBody = ["POST", "PUT", "PATCH"].includes(method.toUpperCase());
    if (hasBody && bodyText.trim()) {
      try {
        JSON.parse(bodyText);
        setJsonError(null);
      } catch (err: any) {
        setJsonError(`Invalid JSON: ${err.message}`);
        setIsLoading(false);
        return;
      }
    }

    const headers: Record<string, string> = {};
    if (hasBody) {
      headers["Content-Type"] = "application/json";
    }
    if (auth && apiKey) {
      headers["x-api-key"] = apiKey;
    }

    const startTime = performance.now();

    try {
      const res = await fetch(fullRequestUrl, {
        method: method.toUpperCase(),
        headers,
        body: hasBody && bodyText.trim() ? bodyText : undefined,
      });

      const durationMs = Math.round(performance.now() - startTime);

      const resHeaders: Record<string, string> = {};
      res.headers.forEach((value, name) => {
        resHeaders[name] = value;
      });

      const rawText = await res.text();
      let formattedBody = rawText;
      let isJson = false;

      try {
        const json = JSON.parse(rawText);
        formattedBody = JSON.stringify(json, null, 2);
        isJson = true;
      } catch {
        isJson = false;
      }

      setResponse({
        status: res.status,
        statusText: res.statusText || (res.ok ? "OK" : "Error"),
        durationMs,
        headers: resHeaders,
        body: formattedBody,
        isJson,
      });
    } catch (err: any) {
      setNetworkError(`Request failed: ${err.message}. Please verify the API URL and your network connection.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResponse = () => {
    if (!response?.body) return;
    navigator.clipboard.writeText(response.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasBody = ["POST", "PUT", "PATCH"].includes(method.toUpperCase());

  return (
    <div className={styles.consoleContainer}>
      {/* Top Environment & Auth Bar */}
      <div className={styles.topBar}>
        <div className={styles.environmentGroup}>
          <span>API:</span>
          <code className={styles.hostPill}>{baseUrl || "Not set"}</code>
          <button
            type="button"
            className={styles.textActionBtn}
            onClick={handleOpenConfig}
            title="Edit API URL & Key"
          >
            <SettingsIcon />
            <span>Edit</span>
          </button>
        </div>

        {auth && (
          <div className={styles.authIndicator}>
            {hasApiKey ? (
              <span className={styles.keyActive}>
                <KeyIcon /> Key active
              </span>
            ) : (
              <button
                type="button"
                className={styles.keyMissingBtn}
                onClick={handleOpenConfig}
              >
                <KeyIcon /> Set API Key
              </button>
            )}
          </div>
        )}
      </div>

      {/* Target URL Preview */}
      <div className={styles.urlBar}>
        <span className={clsx(styles.urlMethod, METHOD_CLASS[method.toUpperCase()] || endpointStyles.get)}>
          {method}
        </span>
        <span className={styles.urlTarget}>{fullRequestUrl}</span>
      </div>

      {/* Console Input Body */}
      <div className={styles.consoleBody}>
        {/* Path Parameters */}
        {endpointDetails.pathParams.length > 0 && (
          <div className={styles.paramSection}>
            <div className={styles.sectionHeading}>
              <span>Path Parameters</span>
            </div>
            <div className={styles.fieldGrid}>
              {endpointDetails.pathParams.map((param) => (
                <div key={param.key} className={styles.fieldRow}>
                  <label className={styles.fieldName} htmlFor={`path-${param.key}`}>
                    {param.key}
                  </label>
                  <input
                    id={`path-${param.key}`}
                    type="text"
                    className={styles.fieldInput}
                    value={pathParamValues[param.key] || ""}
                    placeholder={param.value}
                    onChange={(e) =>
                      setPathParamValues((prev) => ({ ...prev, [param.key]: e.target.value }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Query Parameters */}
        {endpointDetails.queryParams.length > 0 && (
          <div className={styles.paramSection}>
            <div className={styles.sectionHeading}>
              <span>Query Parameters</span>
            </div>
            <div className={styles.fieldGrid}>
              {endpointDetails.queryParams.map((query) => (
                <div key={query.key} className={styles.fieldRow}>
                  <label className={styles.fieldName} htmlFor={`query-${query.key}`}>
                    {query.key}
                  </label>
                  <input
                    id={`query-${query.key}`}
                    type="text"
                    className={styles.fieldInput}
                    value={queryParamValues[query.key] || ""}
                    placeholder={query.value}
                    onChange={(e) =>
                      setQueryParamValues((prev) => ({ ...prev, [query.key]: e.target.value }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Request Body (JSON) */}
        {hasBody && (
          <div className={styles.bodySection}>
            <div className={styles.sectionHeading}>
              <span>Request Body</span>
              <div className={styles.bodyActions}>
                <button
                  type="button"
                  className={styles.utilityBtn}
                  onClick={handlePrettifyJson}
                  title="Format JSON"
                >
                  Format
                </button>
                <button
                  type="button"
                  className={styles.utilityBtn}
                  onClick={handleResetBody}
                  title="Reset to example"
                >
                  <RefreshCwIcon /> Reset
                </button>
              </div>
            </div>
            <textarea
              className={styles.textareaBox}
              value={bodyText}
              onChange={(e) => {
                setBodyText(e.target.value);
                setJsonError(null);
              }}
              placeholder="{}"
              spellCheck="false"
            />
            {jsonError && <span className={styles.syntaxWarning}>{jsonError}</span>}
          </div>
        )}

        {/* Execution Bar */}
        <div className={styles.buttonBar}>
          {auth && !hasApiKey && (
            <span style={{ fontSize: "0.75rem", color: "#fbbf24" }}>
              Missing API key. Request may return 401.
            </span>
          )}
          <button
            type="button"
            className={styles.executeBtn}
            onClick={handleSendRequest}
            disabled={isLoading}
          >
            {isLoading ? <RefreshCwIcon className={styles.spinIcon} /> : <PlayIcon />}
            <span>{isLoading ? "Executing..." : "Execute"}</span>
          </button>
        </div>
      </div>

      {/* Network Alert */}
      {networkError && (
        <div className={styles.alertCard}>
          <div className={styles.alertTitle}>Request Error</div>
          <div>{networkError}</div>
        </div>
      )}

      {/* Response Panel */}
      {response && (
        <div className={styles.resultWrapper}>
          <div className={styles.resultHeader}>
            <div className={styles.resultMeta}>
              <span
                className={clsx(
                  styles.statusTag,
                  response.status < 300
                    ? styles.tag2xx
                    : response.status < 400
                    ? styles.tag3xx
                    : response.status < 500
                    ? styles.tag4xx
                    : styles.tag5xx
                )}
              >
                {response.status} {response.statusText}
              </span>
              <span className={styles.latencyTag}>{response.durationMs}ms</span>
            </div>

            <div className={styles.resultActions}>
              <button
                type="button"
                className={styles.utilityBtn}
                onClick={() =>
                  setActiveTab(activeTab === "body" ? "headers" : "body")
                }
              >
                {activeTab === "body" ? "Headers" : "Body"}
              </button>
              {activeTab === "body" && (
                <button
                  type="button"
                  className={styles.utilityBtn}
                  onClick={handleCopyResponse}
                >
                  {copied ? (
                    <>
                      <CheckIcon /> Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon /> Copy
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <div className={styles.resultBox}>
            {activeTab === "body" ? (
              <pre className={styles.resultCode}>
                <code>{response.body || "(Empty Response)"}</code>
              </pre>
            ) : (
              <pre className={styles.resultCode}>
                <code>
                  {Object.entries(response.headers)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join("\n") || "(No Headers Received)"}
                </code>
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TryItOutConsole;
