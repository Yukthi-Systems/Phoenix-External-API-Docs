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
              <span>&lt;100ms Response</span>
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
              description="Manage cautions and disclaimers to ensure compliance across your organization."
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
                name: "Domains",
                desc: "Domain management",
                path: "/docs/api/domains",
              },
              {
                name: "Cautions",
                desc: "Email cautions",
                path: "/docs/api/cautions",
              },
              {
                name: "Disclaimers",
                desc: "Email disclaimers",
                path: "/docs/api/disclaimers",
              },
              {
                name: "Departments",
                desc: "Organization structure",
                path: "/docs/api/departments",
              },
              {
                name: "Self Checks",
                desc: "API verification",
                path: "/docs/api/self-checks",
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
