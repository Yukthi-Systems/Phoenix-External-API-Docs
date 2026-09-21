// Writes static/postman/collection.json.sha256 in `sha256sum` format so the
// published hash always matches the collection that gets deployed.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DOWNLOAD_NAME = "Phoenix-Admin-API.postman_collection.json";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "static", "postman");
const hash = createHash("sha256")
  .update(readFileSync(join(dir, "collection.json")))
  .digest("hex");

writeFileSync(join(dir, "collection.json.sha256"), `${hash}  ${DOWNLOAD_NAME}\n`);
console.log(`postman collection sha256: ${hash}`);
