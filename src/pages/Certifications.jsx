import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const LOGOS = [
  'Mahindra', 'Tata Motors', 'TÜV SÜD', 'UNO Minda', 'Spark Minda', 'Devise Electronics',
  'FEV', 'ignitarium', 'Vector', 'Actalent', 'itemis', 'LG', 'Pi Square Technologies',
  'RNTBCI', 'SBD', 'Kalyani', 'AXISCADES', 'Microtech FuSa Solutions', 'OMNEX',
  'Secure Elements', 'TRANCE',
];

export default function Certifications() {
  return (
    <>
      <Seo
        title="Certifications & Partnerships | ISO 27001, ISO 9001 | CyMobility"
        description="CyMobility is ISO 27001:2022 and ISO 9001:2015 certified. Our team holds certifications across ISO/SAE 21434, TISAX, SOTIF for automotive cybersecurity."
        path="/about/certifications-partnerships/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
          { name: 'Certifications & Partnerships', path: '/about/certifications-partnerships/' },
        ])}
      />
      <PageHero
        eyebrow="Certifications & partnerships"
        title="Documented competence and operational maturity"
        subtitle="Formal certifications at both the organisational level and across our individual engineering and compliance teams."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }, { name: 'Certifications & Partnerships' }]}
      />

      <Section>
        <H2 eyebrow="Organisational certifications">ISO 9001:2015 and ISO 27001:2022</H2>
        <Prose>
          <p><strong>ISO 9001:2015 — Quality Management System.</strong> CyMobility's quality management system is independently certified to ISO 9001:2015. Every engagement, deliverable, and process is governed by documented procedures, measurable quality criteria, and continuous improvement protocols. For OEM and Tier-1 procurement teams, this is the baseline of operational accountability.</p>
          <p><strong>ISO 27001:2022 — Information Security Management System.</strong> CyMobility's information security management system is independently certified to ISO 27001:2022 (the latest revision). Given the sensitivity of automotive intellectual property — source code, vehicle architectures, vulnerability findings — this certification governs how we handle, store, transmit and destroy client information; how we screen and train personnel; how we secure our lab and production environments; and how we respond to security incidents.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Team certifications">Individuals certified across the standards we work with</H2>
        <Grid cols={2}>
          <Card title="ISO/SAE 21434">Certified automotive cybersecurity engineers and lead engineers.</Card>
          <Card title="ISO 26262">Functional safety practitioners (relevant for safety-security co-engineering).</Card>
          <Card title="ISO 27001">Lead auditors and lead implementers.</Card>
          <Card title="TISAX">Assessors and auditors for German automotive supply chain security.</Card>
          <Card title="SOTIF (ISO 21448)">Safety of the Intended Functionality specialists.</Card>
          <Card title="CEH, OSCP, OSCE">Offensive security certifications held by our penetration testing team.</Card>
          <Card title="CISSP, CISM, CRISC">Information security leadership credentials.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Coverage matrix">Standards & regulations we cover</H2>
        <Prose>
          <table>
            <thead>
              <tr><th>Regulation / Standard</th><th>Region</th><th>CyMobility Coverage</th></tr>
            </thead>
            <tbody>
              <tr><td>UN R155</td><td>UNECE markets</td><td>Full — gap assessment, CSMS implementation, type approval support</td></tr>
              <tr><td>UN R156</td><td>UNECE markets</td><td>Full — SUMS implementation and audit support</td></tr>
              <tr><td>ISO/SAE 21434</td><td>Global</td><td>Full — process establishment, work products, audit</td></tr>
              <tr><td>ISO 26262</td><td>Global</td><td>Safety-security co-engineering</td></tr>
              <tr><td>ISO 21448 (SOTIF)</td><td>Global</td><td>SOTIF analysis and integration with cybersecurity</td></tr>
              <tr><td>EU CRA</td><td>European Union</td><td>Full — gap assessment, conformity, technical file</td></tr>
              <tr><td>EU RED</td><td>European Union</td><td>Radio Equipment Directive cybersecurity articles</td></tr>
              <tr><td>AIS-189</td><td>India</td><td>Full — CSMS implementation, type approval support</td></tr>
              <tr><td>AIS-190</td><td>India</td><td>Full — SUMS implementation</td></tr>
              <tr><td>TISAX</td><td>Germany / EU automotive</td><td>Assessment readiness and audit support</td></tr>
            </tbody>
          </table>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Client trust">Trusted by leading manufacturers</H2>
        <Prose>
          <p>We are trusted by leading automotive OEMs, Tier-1 suppliers, and connected device manufacturers across India and global markets. Our client portfolio includes:</p>
          <p style={{ lineHeight: 2 }}>{LOGOS.join(' · ')}</p>
        </Prose>
      </Section>

      <CTABanner
        title="Engage with a certified automotive cybersecurity partner"
        secondaryCta={{ label: 'Download Company Profile', to: '/contact' }}
      />
    </>
  );
}
