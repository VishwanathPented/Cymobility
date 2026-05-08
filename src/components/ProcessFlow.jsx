import React from 'react';
import { motion } from 'framer-motion';
import { Eye, SearchCode, ShieldAlert, ClipboardCheck } from 'lucide-react';
import styles from './ProcessFlow.module.css';

const steps = [
  {
    icon: <Eye size={24} />,
    title: "Continuous Monitoring",
    description: "Our vSOC ingests telematics, IT, and OT data in real-time, leveraging AI to detect anomalies across millions of connected vehicles.",
    image: "/service_soc.png",
  },
  {
    icon: <SearchCode size={24} />,
    title: "Threat Analysis",
    description: "Advanced analytics and digital twin technology correlate events to accurately identify cyber-attacks, reducing false positives.",
    image: "/service_pentest.png",
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Incident Response",
    description: "Automated playbooks and expert analysts provide immediate mitigation strategies to contain and neutralize threats.",
    image: "/service_vehicle.png",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Compliance & Auditing",
    description: "Generate automated reports to ensure continuous adherence to UNECE WP.29 R155 and ISO/SAE 21434 standards.",
    image: "/about_shield.png",
  }
];

const ProcessFlow = () => {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.title}>The Lifecycle of Protection</h2>
          <p className={styles.subtitle}>
            A continuous loop of monitoring, detection, and response to keep your automotive ecosystem secure.
          </p>
        </motion.div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.stepImageWrapper}>
                <img src={step.image} alt={step.title} className={styles.stepImage} />
                <div className={styles.stepImageOverlay}></div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>0{index + 1}</div>
                <div className={styles.stepIconWrapper}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
