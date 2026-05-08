import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      {/* Background Graphic Element */}
      <div className={styles.bgGraphic}></div>

      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Secure the Future of <br />
            <span className={styles.highlight}>Connected Mobility</span>
          </h1>
          <p className={styles.subtitle}>
            Purpose-built cybersecurity and data management platform for connected vehicles, smart mobility, and automotive infrastructure.
          </p>
          <div className={styles.actions}>
            <a href="#services" className="btn btn-primary">
              Explore Platform <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Book a Demo
            </a>
          </div>

          {/* Scroll down indicator */}
          <motion.a
            href="#about"
            className={styles.scrollIndicator}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll down"
          >
            <span className={styles.scrollLine}></span>
          </motion.a>
        </motion.div>

        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.dashboardMockup}>
            <img src={`${import.meta.env.BASE_URL}hero_car.png`} alt="Connected Car Cybersecurity" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            
            {/* Abstract floating elements */}
            <motion.div 
              className={styles.floatingElement1}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.alertIcon}>⚠️</span> Critical Alert Detected
            </motion.div>
            <motion.div 
              className={styles.floatingElement2}
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.shieldIcon}>🛡️</span> System Secured
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
