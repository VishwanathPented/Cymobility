import { useState } from 'react';
import styles from './leadform.module.css';

// Configure via VITE_FORM_ENDPOINT in .env (Formspree, Web3Forms, Netlify, etc.)
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/REPLACE_WITH_FORM_ID';

export default function LeadForm({ variant = 'assessment' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('ok');
        e.currentTarget.reset();
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className={styles.success}>
        <h3>Thank you — your request has been received.</h3>
        <p>A senior CyMobility consultant will respond within one business day to schedule your scoping conversation. For urgent enquiries, email <a href="mailto:info@cymobility.com">info@cymobility.com</a>.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={variant === 'contact' ? 'New contact enquiry — cymobility.com' : 'New compliance assessment request — cymobility.com'} />
      <input type="hidden" name="form_variant" value={variant} />

      <div className={styles.row}>
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className={styles.row}>
        <Field label="Phone number" name="phone" type="tel" required={variant === 'assessment'} />
        <Field label="Organisation" name="organisation" required />
      </div>
      <div className={styles.row}>
        <Field label="Role / job title" name="role" />
        <Field label="Country" name="country" required={variant === 'assessment'} />
      </div>

      {variant === 'assessment' && (
        <>
          <Select label="Type of organisation" name="org_type" required options={[
            'OEM', 'Tier-1 Supplier', 'Tier-2 Supplier', 'Connected Device Manufacturer', 'Consulting', 'Other'
          ]} />
          <CheckboxGroup
            label="Primary regulation(s) of interest"
            name="regulations"
            options={['UN R155', 'UN R156', 'EU CRA', 'AIS-189', 'AIS-190', 'ISO/SAE 21434', 'TISAX', 'EU RED', 'SOTIF', 'Other']}
          />
          <Select label="Target timeline" name="timeline" required options={[
            'Within 3 months', '3–6 months', '6–12 months', '12+ months', 'No specific deadline'
          ]} />
        </>
      )}

      {variant === 'contact' && (
        <Select label="Subject" name="subject" options={[
          'General enquiry', 'Service enquiry', 'Partnership', 'Press', 'Careers', 'Other'
        ]} />
      )}

      <Textarea
        label={variant === 'assessment' ? 'Describe your products and current state' : 'Message'}
        name="message"
        required
        rows={5}
      />

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>I consent to CyMobility processing this information to respond to my enquiry, per the <a href="/privacy-policy">privacy policy</a>.</span>
      </label>

      {variant === 'assessment' && (
        <label className={styles.consent}>
          <input type="checkbox" name="newsletter" />
          <span>Send me CyMobility's monthly regulatory briefing (optional).</span>
        </label>
      )}

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : variant === 'assessment' ? 'Submit Request' : 'Send Message'}
      </button>

      {status === 'err' && (
        <p className={styles.err}>
          Something went wrong. Please email us directly at <a href="mailto:info@cymobility.com">info@cymobility.com</a>.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = 'text', required }) {
  return (
    <label className={styles.field}>
      <span>{label}{required && <em>*</em>}</span>
      <input type={type} name={name} required={required} />
    </label>
  );
}

function Select({ label, name, options, required }) {
  return (
    <label className={styles.field}>
      <span>{label}{required && <em>*</em>}</span>
      <select name={name} required={required} defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Textarea({ label, name, rows = 4, required }) {
  return (
    <label className={styles.field}>
      <span>{label}{required && <em>*</em>}</span>
      <textarea name={name} rows={rows} required={required} />
    </label>
  );
}

function CheckboxGroup({ label, name, options }) {
  return (
    <fieldset className={styles.checkGroup}>
      <legend>{label}</legend>
      <div className={styles.checkGrid}>
        {options.map((o) => (
          <label key={o} className={styles.check}>
            <input type="checkbox" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
