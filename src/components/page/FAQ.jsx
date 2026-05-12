import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './page.module.css';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.faqList}>
      {items.map((it, i) => (
        <div key={i} className={`${styles.faqItem} ${open === i ? styles.faqOpen : ''}`}>
          <button className={styles.faqQ} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{it.q}</span>
            <ChevronDown size={20} className={styles.faqChevron} />
          </button>
          {open === i && <div className={styles.faqA}>{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
