import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const MENUS = {
  Services: [
    {
      heading: 'Compliance',
      items: [
        { name: 'Regulatory Compliance', to: '/services/regulatory-compliance' },
        { name: 'UN R155 / R156', to: '/services/regulatory-compliance/un-r155-r156' },
        { name: 'EU CRA', to: '/services/regulatory-compliance/eu-cra' },
        { name: 'AIS-189 / AIS-190', to: '/services/regulatory-compliance/ais-189-ais-190' },
      ],
    },
    {
      heading: 'Testing & Risk',
      items: [
        { name: 'Security Testing', to: '/services/security-testing' },
        { name: 'Penetration Testing', to: '/services/security-testing/penetration-testing' },
        { name: 'Fuzz Testing', to: '/services/security-testing/fuzz-testing' },
        { name: 'TARA', to: '/services/security-testing/tara' },
      ],
    },
    {
      heading: 'Operations & Advisory',
      items: [
        { name: 'Threat Intelligence & VSOC', to: '/services/threat-intelligence-vsoc' },
        { name: 'SDV Security Advisory', to: '/services/sdv-security-advisory' },
        { name: 'Workshops & Training', to: '/services/security-workshops-training' },
        { name: 'Cybersecurity Consulting', to: '/services/automotive-cybersecurity-consulting' },
      ],
    },
  ],
  Platform: [
    {
      heading: 'security.core',
      items: [
        { name: 'Platform Overview', to: '/platform' },
        { name: 'pentest.core', to: '/platform/pentest-core' },
        { name: 'fuzz.core', to: '/platform/fuzz-core' },
        { name: 'threat.core', to: '/platform/threat-core' },
        { name: 'vulnerability.core', to: '/platform/vulnerability-core' },
      ],
    },
  ],
  Industries: [
    {
      heading: 'Sectors',
      items: [
        { name: 'Automotive OEMs', to: '/industries/automotive-oems' },
        { name: 'Tier-1 & Tier-2 Suppliers', to: '/industries/tier-1-tier-2-suppliers' },
        { name: 'Connected Devices & IoT', to: '/industries/connected-devices-iot' },
      ],
    },
  ],
  Resources: [
    {
      heading: 'Insights',
      items: [
        { name: 'Blog', to: '/blog' },
        { name: 'Compliance Guides', to: '/compliance-guides' },
        { name: 'Case Studies', to: '/case-studies' },
        { name: 'Glossary', to: '/glossary' },
      ],
    },
  ],
  About: [
    {
      heading: 'Company',
      items: [
        { name: 'About CyMobility', to: '/about' },
        { name: 'Team', to: '/about/team' },
        { name: 'Certifications & Partnerships', to: '/about/certifications-partnerships' },
        { name: 'Contact', to: '/contact' },
      ],
    },
  ],
};

const TOP_LINKS = Object.keys(MENUS);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null); // desktop hover dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // mobile accordion
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
    setExpanded(null);
  }, [location.pathname]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src="/logos/logo.png" alt="CyMobility" className={styles.logoImg} />
          </Link>

          <div className={styles.links}>
            {TOP_LINKS.map((label) => (
              <div
                key={label}
                className={styles.dropdownWrapper}
                onMouseEnter={() => setOpen(label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className={`${styles.link} ${styles.dropdownTrigger}`} aria-expanded={open === label}>
                  {label} <ChevronDown size={14} className={`${styles.chevron} ${open === label ? styles.chevronOpen : ''}`} />
                </button>
                <AnimatePresence>
                  {open === label && (
                    <motion.div
                      className={styles.megaPanel}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className={styles.megaGrid}>
                        {MENUS[label].map((col) => (
                          <div key={col.heading} className={styles.megaCol}>
                            <p className={styles.megaHeading}>{col.heading}</p>
                            {col.items.map((it) => (
                              <Link key={it.to} to={it.to} className={styles.megaItem}>
                                {it.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <NavLink to="/contact" className={styles.loginBtn}>Contact</NavLink>
            <NavLink to="/compliance-assessment" className={styles.ctaBtn}>Request Assessment</NavLink>
          </div>

          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className={styles.drawerHeader}>
                <img src="/logos/logo1.png" alt="CyMobility" style={{ width: '140px' }} />
                <button onClick={() => setMobileOpen(false)} className={styles.closeBtn} aria-label="Close menu">
                  <X size={26} />
                </button>
              </div>
              <div className={styles.drawerLinks}>
                {TOP_LINKS.map((label) => (
                  <div key={label} className={styles.drawerGroup}>
                    <button
                      className={styles.drawerGroupBtn}
                      onClick={() => setExpanded(expanded === label ? null : label)}
                    >
                      {label}
                      <ChevronRight
                        size={16}
                        style={{ transform: expanded === label ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}
                      />
                    </button>
                    {expanded === label && (
                      <div className={styles.drawerSub}>
                        {MENUS[label].flatMap((c) => c.items).map((it) => (
                          <Link key={it.to} to={it.to} className={styles.drawerLink}>
                            {it.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.drawerActions}>
                <Link to="/contact" className={styles.drawerContact}>Contact</Link>
                <Link to="/compliance-assessment" className={styles.drawerCta}>Request Assessment</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
