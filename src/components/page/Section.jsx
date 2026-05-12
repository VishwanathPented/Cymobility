import styles from './page.module.css';

export function Section({ children, alt = false, narrow = false, id }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.sectionAlt : ''}`}>
      <div className={narrow ? styles.containerNarrow : 'container'}>{children}</div>
    </section>
  );
}

export function H2({ children, eyebrow, align = 'left' }) {
  return (
    <header className={`${styles.h2Block} ${align === 'center' ? styles.h2Center : ''}`}>
      {eyebrow && <p className={styles.h2Eyebrow}>{eyebrow}</p>}
      <h2 className={styles.h2}>{children}</h2>
    </header>
  );
}

export function Lead({ children }) {
  return <p className={styles.lead}>{children}</p>;
}

export function Prose({ children }) {
  return <div className={styles.prose}>{children}</div>;
}

export function Grid({ cols = 3, children }) {
  return <div className={styles.grid} data-cols={cols}>{children}</div>;
}

export function Card({ title, icon, children, to, pills }) {
  const inner = (
    <>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {pills && (
        <div className={styles.cardPills}>
          {pills.map((p) => <span key={p} className={styles.cardPill}>{p}</span>)}
        </div>
      )}
      <div className={styles.cardBody}>{children}</div>
    </>
  );
  if (to) {
    return <a href={to} className={`${styles.card} ${styles.cardLink}`}>{inner}<span className={styles.cardArrow}>→</span></a>;
  }
  return <div className={styles.card}>{inner}</div>;
}
