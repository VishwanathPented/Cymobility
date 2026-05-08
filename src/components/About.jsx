import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const StatCounter = ({ value, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        const target = parseInt(value);
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(current);
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statValue}>
        <span className="text-gradient">{count}</span>{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.grid}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Company</span>
          <h2 className={styles.title}>Securing the Next Era of Mobility</h2>
          <p className={styles.description}>
            With over 15 years of experience in automotive product design, testing, and cybersecurity, CyMobility serves OEMs and Tier 1/Tier 2 suppliers across key global markets.
          </p>
          <p className={styles.description}>
            We build strong, collaborative partnerships across the entire value chain to deliver best-in-class cybersecurity solutions.
          </p>
          
          <div className={styles.stats}>
            <StatCounter value="15" label="Years Experience" />
            <StatCounter value="50" label="Global Partners" />
            <StatCounter value="100" label="Threats Blocked Daily" suffix="K+" />
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}about_shield.png`} 
            alt="Automotive Cybersecurity Shield" 
            className={styles.image}
          />
          <div className={styles.decorativeBox}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
