import React, {type ReactNode} from 'react';
import styles from './Footer.module.css';

function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandTitle}>V3 External API</h3>
            <p className={styles.brandTagline}>
              High-performance REST API for email infrastructure
            </p>
          </div>

          <div className={styles.footerLinks}>
            <a href="/docs/intro">Documentation</a>
            <a href="/docs/api/domains">API Reference</a>
            <a href="/postman/collection.json" download>Postman Collection</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} V3 External API
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);