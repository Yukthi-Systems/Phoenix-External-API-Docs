import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import PostmanDownload from "../components/PostmanDownload";
import styles from "./index.module.css";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className={styles.checkItem}>
      <span className={styles.checkIcon}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Layout title="Home" description="Admin API Documentation">
        <div className={`${styles.hero}  homepage`}>
          <div className={styles.gradientBlur1} />
          <div className={styles.gradientBlur2} />
          <div className={styles.gradientBlur3} />

          <div className={styles.container}>
            

            <h1 className={styles.title}>
              Build faster with
              <br />
              <span className={styles.titleGradient}>the Admin API</span>
            </h1>

            <p className={styles.subtitle}>
              A Rust-powered REST API for managing and integrating platform services, 
              built with API key authentication and a growing set of endpoints.
            </p>

            <div className={styles.buttons}>
              <a href="/docs/intro" className={styles.primaryBtn}>
                <span>Read the Docs</span>
                <span className={styles.arrow}>→</span>
              </a>
              <PostmanDownload
                buttonClassName={styles.secondaryBtn}
                iconClassName={styles.btnIcon}
              />
              <a
                href="https://github.com/Yukthi-Systems/Phoenix-External-API"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <span>API Source on GitHub</span>
              </a>
              <a
                href="https://github.com/Yukthi-Systems/Phoenix-External-API-Docs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <span>Docs Source on GitHub</span>
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={`${styles.statDot} ${styles.green}`} />
                <span>Built with Rust</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <div className={`${styles.statDot} ${styles.blue}`} />
                <span>API Key Auth</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <div className={`${styles.statDot} ${styles.violet}`} />
                <span>RESTful Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.quickstart}>
          <div className={styles.container}>
            <div className={styles.quickstartGrid}>
              <div className={styles.quickstartCopy}>
                <span className={styles.eyebrow}>Quick start</span>
                <h2 className={styles.quickstartTitle}>
                  One header. JSON in, JSON out.
                </h2>
                <p className={styles.quickstartText}>
                  Every request is authenticated with a single{" "}
                  <code className={styles.inlineCode}>x-api-key</code> header.
                  No OAuth dance, no session cookies — just a key scoped to
                  your organization.
                </p>
                <ul className={styles.checkList}>
                  <CheckItem>Predictable, paginated JSON responses</CheckItem>
                  <CheckItem>Consistent error shapes across every endpoint</CheckItem>
                  <CheckItem>Code samples in cURL, Node.js, and Python</CheckItem>
                </ul>
                <a href="/docs/authentication" className={styles.quickstartLink}>
                  <span>Read the Authentication guide</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>

              <div className={styles.codeWindow}>
                <div className={styles.codeWindowBar}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                  <span className={styles.codeWindowLabel}>bash</span>
                </div>
                <pre className={styles.codeBlock}>
                  <code>
                    <span className={styles.tokMuted}>curl</span> --location{" "}
                    <span className={styles.tokString}>
                      '&lt;BASE_URL&gt;/department/list?limit=10&amp;offset=0'
                    </span>
                    {" \\\n"}
                    {"  "}--header{" "}
                    <span className={styles.tokString}>
                      'x-api-key: &lt;API_KEY&gt;'
                    </span>
                  </code>
                </pre>
                <div className={styles.codeWindowDivider}>
                  <span className={styles.statusTag200}>200 OK</span>
                  <span className={styles.codeWindowDividerLine} />
                </div>
                <pre className={styles.codeBlock}>
                  <code>
                    {"{\n"}
                    {"  "}<span className={styles.tokKey}>"items"</span>: [{"\n"}
                    {"    "}{"{\n"}
                    {"      "}<span className={styles.tokKey}>"department_id"</span>: <span className={styles.tokString}>"00000000-..."</span>,{"\n"}
                    {"      "}<span className={styles.tokKey}>"department_name"</span>: <span className={styles.tokString}>"Engineering"</span>{"\n"}
                    {"    "}{"}\n"}
                    {"  "}],{"\n"}
                    {"  "}<span className={styles.tokKey}>"total"</span>: <span className={styles.tokNumber}>1</span>,{"\n"}
                    {"  "}<span className={styles.tokKey}>"current_page"</span>: <span className={styles.tokNumber}>1</span>{"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <FeatureCard
                icon="⚡"
                title="Developer Experience"
                description="Intuitive API design with clear documentation and code samples in cURL, Node.js, and Python."
              />
              <FeatureCard
                icon="🔐"
                title="Built with Rust"
                description="Memory-safe by design, with API key authentication scoped to your organization's data."
              />
              <FeatureCard
                icon="🚀"
                title="Actively Developed"
                description="A growing set of endpoints with Redis-backed caching. Currently in early-stage development — request and response shapes may still change."
              />
            </div>
          </div>
        </div>

        <div className={styles.endpoints}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>API Endpoints</h2>
              <p className={styles.sectionSubtitle}>
                A growing REST API for email infrastructure, in early-stage development
              </p>
            </div>

            <div className={styles.endpointGrid}>
              {[
                {
                  name: "API Health",
                  desc: "Verify the API, database, and cache are reachable",
                  path: "/docs/api/health",
                  category: "System",
                },
                {
                  name: "Self",
                  desc: "Inspect your API key's organization and permissions",
                  path: "/docs/api/self",
                  category: "Auth",
                },
                {
                  name: "Organization",
                  desc: "Read your organization's quota and enabled services",
                  path: "/docs/api/organization",
                  category: "Core",
                },
                {
                  name: "Domains",
                  desc: "List domains and update domain settings",
                  path: "/docs/api/domains",
                  category: "Core",
                },
                {
                  name: "Identities",
                  desc: "Manage identities and reset passwords",
                  path: "/docs/api/identities",
                  category: "Core",
                },
                {
                  name: "Departments",
                  desc: "Full CRUD for organizing identities",
                  path: "/docs/api/departments",
                  category: "Core",
                },
                {
                  name: "Mailboxes",
                  desc: "Create, list, update, delete, and resize mailbox storage quotas",
                  path: "/docs/api/mailbox",
                  category: "Core",
                },
              ].map((endpoint, idx) => (
                <a
                  key={idx}
                  href={`${endpoint.path}`}
                  className={styles.endpointCard}
                >
                  <div className={styles.endpointContent}>
                    <div className={styles.endpointHeader}>
                      <h3 className={styles.endpointTitle}>{endpoint.name}</h3>
                      {/* <span className={styles.endpointCategory}>{endpoint.category}</span> */}
                    </div>
                    <p className={styles.endpointDesc}>{endpoint.desc}</p>
                  </div>
                  <span className={styles.endpointArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Ready to start building?</h2>
              <p className={styles.ctaSubtitle}>
                Grab the Postman collection to explore every endpoint, or jump
                straight into the docs for a step-by-step walkthrough.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/docs/intro" className={styles.ctaPrimaryBtn}>
                  <span>Get Started</span>
                  <span className={styles.arrow}>→</span>
                </a>
                <PostmanDownload
                  buttonClassName={styles.ctaSecondaryBtn}
                  iconClassName={styles.btnIcon}
                />
              </div>
            </div>
          </div>
        </div>

      </Layout>

      <style>
        {`
 
 @media (min-width: 1024px){

 .navbar {
  position: absolute;
  background: transparent;
  box-shadow: none;
  border: none;
  width: 100%;
  max-width: 1024px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.navbar__inner {
  padding: 1.5rem 0;
}
 }

 .navbar__search {
 display: none !important;
}
        
`}
      </style>
    </>
  );
}
