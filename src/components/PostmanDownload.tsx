import useBaseUrl from "@docusaurus/useBaseUrl";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./PostmanDownload.module.css";

const FILE_NAME = "Phoenix-Admin-API.postman_collection.json";

type Status = "idle" | "verifying" | "verified" | "failed";

async function sha256Hex(data: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// The .sha256 file is in `sha256sum` format: "<hex>  <filename>".
// Returns "" for anything that isn't a SHA-256 (e.g. an SPA fallback serving
// index.html when the file is missing).
function parseHash(text: string): string {
  const hash = text.trim().split(/\s+/)[0].toLowerCase();
  return /^[0-9a-f]{64}$/.test(hash) ? hash : "";
}

export default function PostmanDownload({
  buttonClassName,
  iconClassName,
}: {
  buttonClassName: string;
  iconClassName: string;
}) {
  const collectionUrl = useBaseUrl("/postman/collection.json");
  const hashUrl = useBaseUrl("/postman/collection.json.sha256");
  const [expected, setExpected] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch(hashUrl, { cache: "no-store" })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      .then((text) => setExpected(parseHash(text) || null))
      .catch(() => setExpected(null));
  }, [hashUrl]);

  async function handleDownload(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (status === "verifying") return;
    setStatus("verifying");
    setError(null);
    try {
      if (!crypto?.subtle) {
        throw new Error("Hash verification needs a secure (HTTPS) context.");
      }
      const [fileRes, hashRes] = await Promise.all([
        fetch(collectionUrl, { cache: "no-store" }),
        fetch(hashUrl, { cache: "no-store" }),
      ]);
      if (!fileRes.ok || !hashRes.ok) {
        throw new Error("Could not fetch the collection or its checksum.");
      }
      const buffer = await fileRes.arrayBuffer();
      const want = parseHash(await hashRes.text());
      if (!want) {
        throw new Error("The published checksum is unavailable or invalid.");
      }
      const got = await sha256Hex(buffer);
      if (got !== want) {
        throw new Error("Checksum mismatch. The file was not saved.");
      }
      setExpected(want);

      const blobUrl = URL.createObjectURL(
        new Blob([buffer], { type: "application/json" }),
      );
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      setStatus("verified");
    } catch (err) {
      setStatus("failed");
      setError(err instanceof Error ? err.message : "Verification failed.");
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function copyHash() {
    if (!expected) return;
    navigator.clipboard
      ?.writeText(expected)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  }

  const label =
    status === "verifying"
      ? "Verifying…"
      : status === "verified"
        ? "Verified ✓ Download again"
        : "Download Postman Collection";

  return (
    <>
      <a
        href={collectionUrl}
        download={FILE_NAME}
        className={buttonClassName}
        onClick={handleDownload}
        aria-busy={status === "verifying"}
      >
        <svg
          className={iconClassName}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
        <span>{label}</span>
      </a>

      <div className={styles.verify}>
        {error && (
          <p className={styles.error} role="alert">
            {error}{" "}
            <a href={collectionUrl} download={FILE_NAME}>
              Download without verification
            </a>
          </p>
        )}
        <button
          type="button"
          className={styles.verifyLink}
          onClick={() => setOpen(true)}
        >
          Verify hash
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className={styles.backdrop}
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="postman-verify-title"
            >
              <div className={styles.modalHeader}>
                <h2 id="postman-verify-title" className={styles.modalTitle}>
                  Verify the collection
                </h2>
                <button
                  ref={closeRef}
                  type="button"
                  className={styles.close}
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <p className={styles.label}>Expected SHA-256</p>
              {expected ? (
                <div className={styles.hashRow}>
                  <code className={styles.hash}>{expected}</code>
                  <button type="button" className={styles.copy} onClick={copyHash}>
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              ) : (
                <p className={styles.error}>Checksum is currently unavailable.</p>
              )}

              <ol className={styles.steps}>
                <li>
                  Download <code>{FILE_NAME}</code>. The download button already
                  checks this for you; these steps let you confirm it yourself.
                </li>
                <li>
                  Compute the file's SHA-256 in a terminal, in the folder you
                  saved it to:
                  <span className={styles.os}>Windows (PowerShell)</span>
                  <pre className={styles.pre}>{`Get-FileHash ${FILE_NAME} -Algorithm SHA256`}</pre>
                  <span className={styles.os}>macOS</span>
                  <pre className={styles.pre}>{`shasum -a 256 ${FILE_NAME}`}</pre>
                  <span className={styles.os}>Linux</span>
                  <pre className={styles.pre}>{`sha256sum ${FILE_NAME}`}</pre>
                </li>
                <li>
                  Compare the output with the hash above. Every character must
                  match (case doesn't matter).
                </li>
                <li>
                  If it doesn't match, don't import the file. Download it again,
                  and report it if the mismatch persists.
                </li>
              </ol>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
