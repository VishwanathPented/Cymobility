import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function PageHero({ eyebrow, title, subtitle, pills, ctas, breadcrumbs }) {
  return (
    <section className={styles.pageHero}>
      <div className="cyber-grid" />
      <div className="container">
        {breadcrumbs && (
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((c, i) => (
              <span key={c.path || c.name}>
                {i > 0 && <span className={styles.crumbSep}>/</span>}
                {c.path && i < breadcrumbs.length - 1 ? (
                  <Link to={c.path}>{c.name}</Link>
                ) : (
                  <span aria-current="page">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className={`${styles.eyebrow} mono`}>
            <span className="status-dot" />{eyebrow}
          </p>
        )}
        <motion.h1
          className={styles.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        {pills && pills.length > 0 && (
          <div className={styles.pills}>
            {pills.map((p) => <span key={p} className={`${styles.pill} mono`}>{p}</span>)}
          </div>
        )}
        {ctas && ctas.length > 0 && (
          <div className={styles.heroCtas}>
            {ctas.map((c, i) => (
              <Link key={c.to} to={c.to} className={i === 0 ? styles.btnPrimary : styles.btnGhost}>
                {c.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
