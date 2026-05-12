import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, Grid, Card } from '../components/page/Section.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | CyMobility"
        description="The page you were looking for is not available."
        path="/"
        noindex
      />
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        subtitle="The page you were looking for has moved or no longer exists. Try one of these instead."
        ctas={[{ label: 'Back to Home', to: '/' }]}
      />
      <Section>
        <Grid cols={3}>
          <Card title="Regulatory Compliance" to="/services/regulatory-compliance">UN R155, EU CRA, AIS-189, ISO/SAE 21434 — every major regulation, end to end.</Card>
          <Card title="security.core Platform" to="/platform">Four engines for pen testing, fuzzing, threat intelligence, and vulnerability monitoring.</Card>
          <Card title="Contact CyMobility" to="/contact">Email, phone or the form — we'll respond within one business day.</Card>
        </Grid>
        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Looking for a specific regulation? Try the <Link to="/compliance-guides">Compliance Guides</Link> or the <Link to="/glossary">Glossary</Link>.
        </p>
      </Section>
    </>
  );
}
