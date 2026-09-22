import { useState, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./jsonviewer.module.css";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

function isExpandable(value: unknown): value is JsonValue[] | Record<string, JsonValue> {
  return value !== null && typeof value === "object";
}

function entriesOf(value: JsonValue[] | Record<string, JsonValue>): [string, JsonValue][] {
  if (Array.isArray(value)) {
    return value.map((v, i) => [String(i), v]);
  }
  return Object.entries(value);
}

function Punctuation({ children }: { children: ReactNode }) {
  return <span className={styles.punct}>{children}</span>;
}

function PrimitiveValue({ value }: { value: JsonValue }) {
  if (value === null) {
    return <span className={styles.null}>null</span>;
  }
  switch (typeof value) {
    case "string":
      return <span className={styles.string}>"{value}"</span>;
    case "number":
      return <span className={styles.number}>{value}</span>;
    case "boolean":
      return <span className={styles.boolean}>{String(value)}</span>;
    default:
      return <span className={styles.string}>{String(value)}</span>;
  }
}

function JsonNode({
  label,
  value,
  depth,
  isLast,
}: {
  label?: string;
  value: JsonValue;
  depth: number;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(depth < 3);

  if (!isExpandable(value)) {
    return (
      <div className={styles.row}>
        <span className={styles.rowSpacer} />
        {label !== undefined && (
          <>
            <span className={styles.key}>"{label}"</span>
            <Punctuation>: </Punctuation>
          </>
        )}
        <PrimitiveValue value={value} />
        {!isLast && <Punctuation>,</Punctuation>}
      </div>
    );
  }

  const isArray = Array.isArray(value);
  const entries = entriesOf(value);
  const openBrace = isArray ? "[" : "{";
  const closeBrace = isArray ? "]" : "}";

  if (entries.length === 0) {
    return (
      <div className={styles.row}>
        <span className={styles.rowSpacer} />
        {label !== undefined && (
          <>
            <span className={styles.key}>"{label}"</span>
            <Punctuation>: </Punctuation>
          </>
        )}
        <Punctuation>
          {openBrace}
          {closeBrace}
        </Punctuation>
        {!isLast && <Punctuation>,</Punctuation>}
      </div>
    );
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          <svg
            className={clsx(styles.chevron, expanded && styles.chevronOpen)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
        {label !== undefined && (
          <>
            <span className={styles.key}>"{label}"</span>
            <Punctuation>: </Punctuation>
          </>
        )}
        <Punctuation>{openBrace}</Punctuation>
        {!expanded && (
          <>
            <span className={styles.preview}>
              {isArray
                ? `${entries.length} item${entries.length === 1 ? "" : "s"}`
                : entries.map(([k]) => k).join(", ")}
            </span>
            <Punctuation>{closeBrace}</Punctuation>
            {!isLast && <Punctuation>,</Punctuation>}
          </>
        )}
      </div>

      {expanded && (
        <div className={styles.children}>
          {entries.map(([k, v], idx) => (
            <JsonNode
              key={k}
              label={isArray ? undefined : k}
              value={v}
              depth={depth + 1}
              isLast={idx === entries.length - 1}
            />
          ))}
        </div>
      )}

      {expanded && (
        <div className={styles.row}>
          <span className={styles.rowSpacer} />
          <Punctuation>{closeBrace}</Punctuation>
          {!isLast && <Punctuation>,</Punctuation>}
        </div>
      )}
    </div>
  );
}

export function JsonViewer({ value }: { value: unknown }): ReactNode {
  return (
    <div className={styles.tree}>
      <JsonNode value={value as JsonValue} depth={0} isLast />
    </div>
  );
}

export default JsonViewer;
