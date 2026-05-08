import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, BookOpen, ArrowRight, ShieldCheck, Users, Cpu } from 'lucide-react';
import styles from './Careers.module.css';

const perks = [
  {
    icon: <TrendingUp size={28} />,
    title: "Rapid Growth",
    description: "Join a fast-growing startup where your contributions directly impact our trajectory and your career progression."
  },
  {
    icon: <Globe size={28} />,
    title: "Global Impact",
    description: "Work on cutting-edge technologies that protect millions of connected vehicles worldwide."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Continuous Learning",
    description: "Stay ahead of the curve with dedicated time for research, conferences, and certifications."
  }
];

const openRoles = [
  { title: "Senior Automotive Penetration Tester", type: "Full-time", location: "Bengaluru", icon: <ShieldCheck size={18} /> },
  { title: "Security Research Engineer", type: "Full-time", location: "Bengaluru", icon: <Cpu size={18} /> },
  { title: "Automotive Cybersecurity Analyst", type: "Full-time", location: "Remote / Bengaluru", icon: <Users size={18} /> },
];

const Careers = () => {
  return (
    <section className={styles.careers} id="careers">
      {/* Hero banner using existing image */}
      <div className={styles.heroBanner}>
        <img src="/about_shield.png" alt="Careers at CyMobility" className={styles.bannerBg} />
        <div className={styles.bannerOverlay}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.bannerContent}
          >
            <span className={styles.badge}>Careers</span>
            <h2 className={styles.bannerTitle}>Join the <span className={styles.highlight}>Mission</span></h2>
            <p className={styles.bannerSubtitle}>
              We're looking for passionate security researchers and engineers to help us secure the future of mobility.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        {/* Perks */}
        <div className={styles.perksGrid}>
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{perk.icon}</div>
              <h3 className={styles.perkTitle}>{perk.title}</h3>
              <p className={styles.perkDesc}>{perk.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Roles */}
        <motion.div
          className={styles.rolesSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.rolesTitle}>Open Positions</h3>
          <div className={styles.rolesList}>
            {openRoles.map((role, index) => (
              <motion.a
                key={index}
                href="#contact"
                className={styles.roleCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.roleIcon}>{role.icon}</div>
                <div className={styles.roleInfo}>
                  <h4 className={styles.roleTitle}>{role.title}</h4>
                  <div className={styles.roleMeta}>
                    <span className={styles.roleTag}>{role.type}</span>
                    <span className={styles.roleTag}>{role.location}</span>
                  </div>
                </div>
                <ArrowRight size={20} className={styles.roleArrow} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
