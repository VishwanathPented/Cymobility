import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import LeadForm from '../components/page/LeadForm.jsx';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CyMobility',
  image: 'https://cymobility.com/logos/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, PVR Towers, 1341, Venkateshwara Nagar Main Road, MCECHS Layout, Dr. Shivaram Karanth Nagar, Jakkuru',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560064',
    addressCountry: 'IN',
  },
  telephone: '+91-9980-524-681',
  email: 'info@cymobility.com',
  url: 'https://cymobility.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact CyMobility | Automotive Cybersecurity India | Bengaluru"
        description="Contact CyMobility for automotive cybersecurity services. Bengaluru-headquartered. Email info@cymobility.com or call +91 9980 524 681."
        path="/contact/"
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact/' },
          ]),
          LOCAL_BUSINESS,
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Get in Touch With CyMobility"
        subtitle="Whether you have a defined cybersecurity programme to scope, a single penetration test to commission, or a strategic conversation about regulatory readiness — we are easy to reach."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]}
      />

      <Section>
        <div className="split-2 split-2--lead-right">
          <div>
            <H2 eyebrow="Reach us directly">Headquarters — Bengaluru</H2>
            <Prose>
              <p style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}><MapPin size={18} style={{ flexShrink: 0, marginTop: 4 }} />
                <span>Ground Floor, PVR Towers<br />1341, Venkateshwara Nagar Main Road<br />MCECHS Layout, Dr. Shivaram Karanth Nagar<br />Jakkuru, Bengaluru, Karnataka 560064, India</span>
              </p>
              <p style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Phone size={18} /> +91 9980 524 681 / +91 9711 966 681</p>
              <p style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Mail size={18} /> <a href="mailto:info@cymobility.com">info@cymobility.com</a></p>
              <p style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Globe size={18} /> <a href="https://www.linkedin.com/company/cymobility/">linkedin.com/company/cymobility</a></p>
              <h3>Business hours</h3>
              <p>Monday to Friday, 9:00 to 18:00 IST. Out-of-hours support available to existing managed-services and VSOC clients.</p>
              <h3>Specialist mailboxes</h3>
              <ul>
                <li>General enquiries — <a href="mailto:info@cymobility.com">info@cymobility.com</a></li>
                <li>Careers — <a href="mailto:careers@cymobility.com">careers@cymobility.com</a></li>
                <li>Press & media — <a href="mailto:press@cymobility.com">press@cymobility.com</a></li>
              </ul>
            </Prose>
          </div>
          <div>
            <LeadForm variant="contact" />
          </div>
        </div>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Looking for something specific?">Other ways to engage</H2>
        <Grid cols={3}>
          <Card title="Compliance Gap Assessment" to="/compliance-assessment">
            Structured intake form for regulated engagements — UN R155, EU CRA, AIS-189, ISO/SAE 21434.
          </Card>
          <Card title="Platform Demo" to="/platform">
            See the security.core platform in action — pentest.core, fuzz.core, threat.core, vulnerability.core.
          </Card>
          <Card title="Careers" to="/about/team">
            Open roles for automotive cybersecurity specialists, embedded researchers and compliance experts.
          </Card>
        </Grid>
      </Section>
    </>
  );
}
