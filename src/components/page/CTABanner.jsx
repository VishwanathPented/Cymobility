import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import styles from './page.module.css';

export default function CTABanner({
  title = 'Your Compliance Journey Starts Here',
  body,
  primaryCta = { label: 'Initiate a Compliance Assessment', to: '/compliance-assessment' },
  secondaryCta,
  showContact = true,
}) {
  return (
    <section className={styles.ctaBanner}>
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          {body && <p className={styles.ctaBody}>{body}</p>}
          <div className={styles.ctaActions}>
            <Link to={primaryCta.to} className={styles.ctaPrimary}>
              {primaryCta.label} <ArrowRight size={16} />
            </Link>
            {secondaryCta && (
              <Link to={secondaryCta.to} className={styles.ctaSecondary}>{secondaryCta.label}</Link>
            )}
          </div>
          {showContact && (
            <p className={styles.ctaContact}>
              <a href="mailto:info@cymobility.com"><Mail size={14} /> info@cymobility.com</a>
              <a href="tel:+919980524681"><Phone size={14} /> +91 9980 524 681</a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
