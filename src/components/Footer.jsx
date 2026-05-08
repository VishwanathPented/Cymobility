import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <img src={`${import.meta.env.BASE_URL}logos/logo1.png`} alt="CyMobility" style={{ width: '200px', height: 'auto' }} />
            </a>
            <p className={styles.desc} style={{ fontSize: '0.9rem' }}>
              CyMobility, Ground Floor, PVR TOWERS, 1341, Venkateshwara Nagar Main Road, MCECHS Layout, Dr.Shivaram Karanth Nagar, Jakkuru, Bengaluru, Karnataka 560064
              <br/><br/>
              Phone: +91 9980 524 681 / +91 9711 966 681<br/>
              Email: info@cymobility.com
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}><Globe size={18} /></a>
              <a href="https://www.linkedin.com/company/cymobility/" className={styles.socialIcon}><MessageCircle size={18} /></a>
              <a href="mailto:info@cymobility.com" className={styles.socialIcon}><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.title}>Company</h4>
            <ul className={styles.links}>
              <li><a href="#about" className={styles.link}>About Us</a></li>
              <li><a href="#services" className={styles.link}>Solutions</a></li>
              <li><a href="#careers" className={styles.link}>Careers</a></li>
              <li><a href="#contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.title}>Solutions</h4>
            <ul className={styles.links}>
              <li><a href="#services" className={styles.link}>Automotive Penetration Testing</a></li>
              <li><a href="#services" className={styles.link}>Security Assessment & Risk Analysis</a></li>
              <li><a href="#services" className={styles.link}>Security Monitoring & Incident Response</a></li>
              <li><a href="#services" className={styles.link}>Compliance & Auditing</a></li>
              <li><a href="#services" className={styles.link}>Vehicle Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} CyMobility. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
