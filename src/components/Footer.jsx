import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { name: 'About CyMobility', to: '/about' },
      { name: 'Team', to: '/about/team' },
      { name: 'Certifications & Partnerships', to: '/about/certifications-partnerships' },
      { name: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Regulatory Compliance', to: '/services/regulatory-compliance' },
      { name: 'Security Testing', to: '/services/security-testing' },
      { name: 'Threat Intelligence & VSOC', to: '/services/threat-intelligence-vsoc' },
      { name: 'SDV Security Advisory', to: '/services/sdv-security-advisory' },
      { name: 'TARA & Risk Assessment', to: '/services/security-testing/tara' },
      { name: 'Workshops & Training', to: '/services/security-workshops-training' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { name: 'Platform Overview', to: '/platform' },
      { name: 'pentest.core', to: '/platform/pentest-core' },
      { name: 'fuzz.core', to: '/platform/fuzz-core' },
      { name: 'threat.core', to: '/platform/threat-core' },
      { name: 'vulnerability.core', to: '/platform/vulnerability-core' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', to: '/blog' },
      { name: 'Compliance Guides', to: '/compliance-guides' },
      { name: 'Glossary', to: '/glossary' },
      { name: 'Case Studies', to: '/case-studies' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src="/logos/logo1.png" alt="CyMobility" style={{ width: '200px', height: 'auto' }} />
            </Link>
            <p className={styles.desc}>
              Ground Floor, PVR Towers, 1341, Venkateshwara Nagar Main Road,
              MCECHS Layout, Dr. Shivaram Karanth Nagar, Jakkuru,
              Bengaluru, Karnataka 560064, India
            </p>
            <p className={styles.contactLine}><Phone size={14} /> +91 9980 524 681 / +91 9711 966 681</p>
            <p className={styles.contactLine}><Mail size={14} /> info@cymobility.com</p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/company/cymobility/" aria-label="LinkedIn" className={styles.socialIcon}>
                <Globe size={18} />
              </a>
              <a href="mailto:info@cymobility.com" aria-label="Email" className={styles.socialIcon}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className={styles.title}>{col.title}</h4>
              <ul className={styles.links}>
                {col.links.map((l) => (
                  <li key={l.to}><Link to={l.to} className={styles.link}>{l.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} CyMobility. All Rights Reserved. ·{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> ·{' '}
          <Link to="/terms-of-use">Terms of Use</Link> ·{' '}
          <Link to="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
