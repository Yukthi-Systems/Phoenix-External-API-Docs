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
    <>
      <Layout title="Home" description="V3 External API Documentation">
        <div className={`${styles.hero}  homepage`}>
          <div className={styles.gradientBlur1} />
          <div className={styles.gradientBlur2} />
          <div className={styles.gradientBlur3} />

          <div className={styles.container}>
            <div className={styles.badge}>
              <span className={styles.pulse} />
              <span className={styles.pulseDot} />
              Version 3.0 Live
            </div>

            <h1 className={styles.title}>
              Build faster with
              <br />
              <span className={styles.titleGradient}>our External API</span>
            </h1>

            <p className={styles.subtitle}>
              Programmatically manage Domains, Cautions, Disclaimers, and
              Departments with our robust, secure, and high-performance REST
              API.
            </p>

            <div className={styles.buttons}>
              <a href="/docs/intro" className={styles.primaryBtn}>
                <span>Read the Docs</span>
                <span className={styles.arrow}>→</span>
              </a>
              <a
                href="/postman/collection.json"
                download="V3-External-API.postman_collection.json"
                className={styles.secondaryBtn}
              >
                <svg
                  className={styles.btnIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Download Postman Collection</span>
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={`${styles.statDot} ${styles.green}`} />
                <span>99.9% Uptime</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <div className={`${styles.statDot} ${styles.blue}`} />
                <span>&lt;10ms Response</span>
              </div>
              <div className={styles.statDivider} />
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
                description="Intuitive API design with clear documentation, interactive examples, and comprehensive code samples in multiple languages."
              />
              <FeatureCard
                icon="🔐"
                title="Enterprise Security"
                description="Built with Rust for memory safety. Robust authentication, encryption, and data protection mechanisms ensure your data stays secure."
              />
              <FeatureCard
                icon="🚀"
                title="High Performance"
                description="Optimized endpoints with sub-10ms latency, intelligent caching, and 99.9% uptime SLA guarantee for mission-critical operations."
              />
            </div>
          </div>
        </div>

        <div className={styles.endpoints}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>API Endpoints</h2>
              <p className={styles.sectionSubtitle}>
                Complete REST API for email infrastructure management
              </p>
            </div>

            <div className={styles.endpointGrid}>
              {[
                {
                  name: "Health",
                  desc: "System monitoring and status",
                  path: "/docs/api/health",
                  category: "System",
                },
                {
                  name: "Self API Check",
                  desc: "Verify API functionality",
                  path: "/docs/api/self-checks",
                  category: "System",
                },
                {
                  name: "Domain Management",
                  desc: "Create and manage email domains",
                  path: "/docs/api/domains",
                  category: "Core",
                },
                {
                  name: "Mailbox Management",
                  desc: "Handle user mailboxes",
                  path: "/docs/api/mailboxes",
                  category: "Core",
                },
                {
                  name: "Caution Management",
                  desc: "Configure email cautions",
                  path: "/docs/api/cautions",
                  category: "Security",
                },
                {
                  name: "Disclaimer Management",
                  desc: "Set up email disclaimers",
                  path: "/docs/api/disclaimers",
                  category: "Content",
                },
                {
                  name: "Department Management",
                  desc: "Organize mailboxes by department",
                  path: "/docs/api/departments",
                  category: "Organization",
                },
                {
                  name: "Filter Policy",
                  desc: "Configure email filtering rules",
                  path: "/docs/api/filter-policies",
                  category: "Policy",
                },
                {
                  name: "General Policy",
                  desc: "Set overall email policies",
                  path: "/docs/api/general-policies",
                  category: "Policy",
                },
                {
                  name: "Attachment Policy",
                  desc: "Control attachment handling",
                  path: "/docs/api/attachment-policies",
                  category: "Policy",
                },
                {
                  name: "Restriction Policy",
                  desc: "Define IP and geographic restrictions",
                  path: "/docs/api/restriction-policies",
                  category: "Security",
                },
                {
                  name: "Forwarding Policy",
                  desc: "Manage email forwarding rules",
                  path: "/docs/api/forwarding-policies",
                  category: "Routing",
                },
                {
                  name: "Distribution Policy",
                  desc: "Handle email distribution lists",
                  path: "/docs/api/distribution-policies",
                  category: "Routing",
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

 
        
`}
      </style>
    </>
  );
}
