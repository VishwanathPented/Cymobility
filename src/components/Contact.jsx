import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.grid}`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Get in <span className="text-gradient">Touch</span></h2>
            <p className={styles.subtitle}>
              Ready to secure your automotive innovations? Contact our team of experts today.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                className={styles.input} 
                required 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.input} 
                required 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea 
                id="message" 
                className={styles.textarea} 
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          className={styles.mapContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Abstract Cyber Map Representation */}
          <div className={styles.mapGraphic}></div>
          <div className={styles.radarContainer}>
            <div className={styles.radarSweep}></div>
          </div>
          <div className={styles.mapOverlay}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px', maxWidth: '300px', textAlign: 'left' }}>
                <MapPin className="text-gradient" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>CyMobility, Ground Floor, PVR TOWERS, 1341, Venkateshwara Nagar, Bengaluru, Karnataka 560064</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <Mail className="text-gradient" />
                <span>info@cymobility.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone className="text-gradient" />
                <span>+91 9980 524 681</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
