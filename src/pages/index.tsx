import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

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
    <Layout title="Home" description="V3 External API Documentation">
      <div className={styles.hero}>
        <div className={styles.gradientBlur1} />
        <div className={styles.gradientBlur2} />

        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.pulse} />
            <span className={styles.pulseDot} />
            Version 3.0 Live
          </div>

          <h1 className={styles.title}>
            Build faster with
            <br />
            our External API
          </h1>

          <p className={styles.subtitle}>
            Programmatically manage Domains, Cautions, Disclaimers, and
            Departments with our robust, secure, and high-performance REST API.
          </p>

          <div className={styles.buttons}>
            <a href="/docs/intro" className={styles.primaryBtn}>
              Read the Docs
              <span className={styles.arrow}>→</span>
            </a>
            <a
              href="/postman/collection.json"
              download="V3-External-API.postman_collection.json"
              className={styles.secondaryBtn}
            >
              Download Postman Collection
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={`${styles.statDot} ${styles.green}`} />
              <span>99.9% Uptime</span>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statDot} ${styles.blue}`} />
              <span>&lt;10ms Response</span>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statDot} ${styles.violet}`} />
              <span>RESTful Architecture</span>
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
              description="Intuitive API design with clear documentation, interactive examples, and code samples."
            />
            <FeatureCard
              icon="🔐"
              title="Enterprise Security"
              description="Written in Rust for memory safety, with robust authentication and data protection mechanisms."
            />
            <FeatureCard
              icon="🚀"
              title="High Performance"
              description="Optimized endpoints with sub-millisecond latency and 99.9% uptime guarantee."
            />
          </div>
        </div>
      </div>

      <div className={styles.endpoints}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>API Endpoints</h2>
          <p className={styles.sectionSubtitle}>
            Complete REST API for email infrastructure management
          </p>

          <div className={styles.endpointGrid}>
            {[
              {
                name: "Health",
                desc: "System monitoring",
                path: "/docs/api/health",
              },
              {
                name: "Self API Check",
                desc: "API verification",
                path: "/docs/api/self-checks",
              },
              {
                name: "Domain Management",
                desc: "Manage email domains",
                path: "/docs/api/domains",
              },
              {
                name: "Mailbox Management",
                desc: "Manage user mailboxes",
                path: "/docs/api/mailboxes",
              },
              {
                name: "Caution Management",
                desc: "Handle email cautions",
                path: "/docs/api/cautions",
              },
              {
                name: "Disclaimer Management",
                desc: "Set up email disclaimers",
                path: "/docs/api/disclaimers",
              },
              {
                name: "Department Management",
                desc: "Manage Departments for mailboxes",
                path: "/docs/api/departments",
              },
              {
                name: "Filter Policy",
                desc: "Email filtering rules",
                path: "/docs/api/filter-policies",
              },
              {
                name: "General Policy",
                desc: "Overall email policies",
                path: "/docs/api/general-policies",
              },
              {
                name: "Attachment Policy",
                desc: "Manage attachment rules",
                path: "/docs/api/attachment-policies",
              },
              {
                name: "Restriction Policy",
                desc: "Set IP and Geo restrictions",
                path: "/docs/api/restriction-policies",
              },
              {
                name: "Forwarding Policy",
                desc: "Email forwarding rules",
                path: "/docs/api/forwarding-policies",
              },
              {
                name: "Distribution Policy",
                desc: "Manage email distribution",
                path: "/docs/api/distribution-policies",
              },
            ].map((endpoint, idx) => (
              <a
                key={idx}
                href={`${endpoint.path}`}
                className={styles.endpointCard}
              >
                <div>
                  <h3>{endpoint.name}</h3>
                  <p>{endpoint.desc}</p>
                </div>
                <span className={styles.endpointArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
