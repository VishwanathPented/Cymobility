import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, FileCheck, Radar, CarFront, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const servicesList = [
  {
    icon: <Radar size={28} />,
    image: "/service_soc.png",
    title: "Security Monitoring and Incident Response",
    description: "Cloud-based vehicle security operations center providing real-time monitoring and threat intelligence for connected fleets."
  },
  {
    icon: <Crosshair size={28} />,
    image: "/service_pentest.png",
    title: "Automotive Penetration Testing",
    description: "Rigorous offensive testing on ECUs, infotainment systems, telematics, and V2X communications."
  },
  {
    icon: <FileCheck size={28} />,
    image: "/service_soc.png",
    title: "Compliance & Auditing",
    description: "Ensure adherence to UN R155/R156 and ISO/SAE 21434 standards with comprehensive automated auditing."
  },
  {
    icon: <ShieldAlert size={28} />,
    image: "/service_vehicle.png",
    title: "Security Assessment & Risk Analysis",
    description: "Identify and prioritize potential attack vectors early in the development lifecycle to design secure architectures."
  },
  {
    icon: <CarFront size={28} />,
    image: "/service_vehicle.png",
    title: "Vehicle Security",
    description: "In-vehicle network protection (CAN, Automotive Ethernet) and secure boot implementation."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Solutions</span>
          <h2 className={styles.title}>Comprehensive Automotive <br/> Cyber Protection</h2>
          <p className={styles.subtitle}>
            A unified platform to secure connected vehicles, fleets, and mobility APIs from sophisticated cyber attacks.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.cardImageWrapper}>
                <img src={service.image} alt={service.title} className={styles.cardImage} />
              </div>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.cardLink}>
                Learn more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
