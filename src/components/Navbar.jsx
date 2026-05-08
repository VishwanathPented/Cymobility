import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const solutions = [
  { name: 'Automotive Penetration Testing', href: '#services' },
  { name: 'Security Assessment & Risk Analysis', href: '#services' },
  { name: 'Security Monitoring & Incident Response', href: '#services' },
  { name: 'Compliance & Auditing', href: '#services' },
  { name: 'Vehicle Security', href: '#services' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 60);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Active section detection
      const sections = ['home', 'about', 'services', 'process', 'careers', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollTop >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Scroll Progress Bar */}
        <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />

        <div className={styles.inner}>

          {/* Logo */}
          <a href="#" className={styles.logo}>
            <img
              src="/logos/logo.png"
              alt="CyMobility"
              className={`${styles.logoImg} ${scrolled ? styles.logoScrolled : ''}`}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className={styles.links}>
            {/* Solutions dropdown */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={`${styles.link} ${styles.dropdownTrigger} ${activeSection === 'services' ? styles.activeLink : ''}`}>
                Solutions <ChevronDown size={14} className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {solutions.map((s) => (
                      <a key={s.name} href={s.href} className={styles.dropdownItem}>
                        {s.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#about" className={`${styles.link} ${activeSection === 'about' ? styles.activeLink : ''}`}>About</a>
            <a href="#process" className={`${styles.link} ${activeSection === 'process' ? styles.activeLink : ''}`}>How It Works</a>
            <a href="#careers" className={`${styles.link} ${activeSection === 'careers' ? styles.activeLink : ''}`}>Careers</a>
            <a href="#contact" className={`${styles.link} ${activeSection === 'contact' ? styles.activeLink : ''}`}>Blogs</a>
          </div>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a href="#contact" className={styles.loginBtn}>Contact Us</a>
            <a href="#contact" className={styles.ctaBtn}>Request Demo</a>
          </div>

          {/* Mobile Hamburger */}
          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className={styles.drawerHeader}>
                <img src="/logos/logo1.png" alt="CyMobility" style={{ width: '140px', height: 'auto' }} />
                <button onClick={() => setMobileOpen(false)} className={styles.closeBtn} aria-label="Close menu">
                  <X size={26} />
                </button>
              </div>
              <div className={styles.drawerLinks}>
                <p className={styles.drawerGroupLabel}>Solutions</p>
                {solutions.map((s) => (
                  <a key={s.name} href={s.href} className={styles.drawerLink} onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </a>
                ))}
                <div className={styles.drawerDivider} />
                <a href="#about" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>About</a>
                <a href="#process" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>How It Works</a>
                <a href="#careers" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Careers</a>
                <a href="#contact" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Blogs</a>
              </div>
              <div className={styles.drawerActions}>
                <a href="#contact" className={styles.drawerContact} onClick={() => setMobileOpen(false)}>Contact Us</a>
                <a href="#contact" className={styles.drawerCta} onClick={() => setMobileOpen(false)}>Request Demo</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
