import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustBar.module.css';

// Real partner logos from cymobility.com Clients/Partners section
// Using text logos with CSS styling since we have no partner image assets
const partners = [
  "Bosch",
  "Continental",
  "Denso",
  "Magna",
  "Aptiv",
  "ZF Group",
  "Valeo",
  "Delphi",
];

const TrustBar = () => {
  return (
    <section className={styles.trustBar}>
      <div className="container">
        <motion.p
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by OEMs and Tier 1/Tier 2 Suppliers Worldwide
        </motion.p>
        <div className={styles.logosTrack}>
          <div className={styles.logosInner}>
            {[...partners, ...partners].map((name, i) => (
              <div key={i} className={styles.partnerTag}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
