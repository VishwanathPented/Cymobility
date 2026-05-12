import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const PILLAR_ARTICLES = [
  { t: 'UN R155 Implementation Guide: From Gap to Type Approval in 12 Months', d: 'A walkthrough of the activities, work products and timelines required to move from a UN R155 gap assessment to type approval — with the milestones that most OEMs underestimate.' },
  { t: 'EU CRA for Automotive Manufacturers: What Changes in 2027', d: 'How EU CRA interacts with UN R155 and the EU GSR for vehicle manufacturers — and where standalone automotive products fall in scope of the CRA in full.' },
  { t: "AIS-189 Explained: India's Automotive Cybersecurity Mandate", d: 'A practitioner explanation of AIS-189 and AIS-190, their alignment with UN R155/R156, and the implications for Indian OEMs preparing for type certification.' },
  { t: 'ISO/SAE 21434 vs UN R155 vs EU CRA: The Differences That Matter', d: 'Standard vs regulation. Engineering methodology vs legal mandate. What each framework actually requires — and where they overlap.' },
  { t: 'Building a Vehicle Security Operations Centre: Architecture and Operations', d: 'A reference architecture for VSOC operations covering OSINT ingestion, threat actor tracking, SBOM correlation, and incident response under UN R155 obligations.' },
  { t: 'TARA Methodology for Automotive: An ISO 21434 Walkthrough', d: 'Step by step through the ISO/SAE 21434 TARA work products — from item definition to risk treatment.' },
  { t: 'Software-Defined Vehicle Cybersecurity: A Reference Architecture', d: 'Service-oriented architecture security, central compute hardening, zonal ECU design, vehicle-to-cloud integration — a reference architecture for SDV cybersecurity.' },
  { t: 'Penetration Testing for ECUs: Methodology, Tooling and Compliance Mapping', d: 'Hardware attack surfaces, firmware extraction, secure boot validation — and the compliance mapping that turns pen test reports into type approval evidence.' },
  { t: 'EU CRA SBOM Requirements: What Manufacturers Must Maintain', d: 'The SBOM obligations of EU CRA — what to produce, how to maintain it through the support period, and how to use it for vulnerability awareness.' },
  { t: 'Tier-1 Supplier Cybersecurity: Meeting OEM Contract Requirements', d: 'What OEM cybersecurity questionnaires ask for, what evidence they expect, and how Tier-1 suppliers can build the capability before the next contract review.' },
];

const CATEGORIES = [
  { name: 'Regulatory Compliance', desc: 'Long-form analysis of UN R155, UN R156, EU CRA, AIS-189, AIS-190, ISO/SAE 21434, TISAX and adjacent regulations.' },
  { name: 'Threat Intelligence', desc: 'Analysis of newly disclosed automotive cybersecurity vulnerabilities, threat actor activity, and emerging attack research.' },
  { name: 'Technical Deep Dives', desc: 'Engineering-focused content on penetration testing, fuzz testing, TARA methodology, SDV cybersecurity architecture, and embedded systems security.' },
  { name: 'Industry Perspectives', desc: 'Coverage of automotive cybersecurity from OEM, Tier-1, Tier-2 and IoT manufacturer perspectives. Procurement guidance, executive briefings, programme management.' },
  { name: 'CyMobility News', desc: 'Company announcements, certifications, partnership launches, conference appearances.' },
];

export default function Blog() {
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Blog & Insights | CyMobility"
        description="Insights, analysis and guides on automotive cybersecurity — UN R155, EU CRA, AIS-189, ISO 21434, SDV, threat intelligence. Updated regularly."
        path="/blog/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Automotive Cybersecurity Insights"
        subtitle="The CyMobility blog covers the regulations, threats, technologies and practices shaping automotive cybersecurity — written by practitioners working at the front line."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog' }]}
      />

      <Section>
        <H2 eyebrow="Coming soon">Pillar articles in our 2026 content roadmap</H2>
        <Prose>
          <p>The following pillar articles are being commissioned for publication. Each is written for a specific buyer audience — OEM leadership, Tier-1 cybersecurity teams, IoT product managers — and engineered to rank for high-value commercial keywords. Subscribe to the monthly briefing to be notified as articles publish.</p>
        </Prose>
        <Grid cols={2}>
          {PILLAR_ARTICLES.map((a) => (
            <Card key={a.t} title={a.t}>{a.d}</Card>
          ))}
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Categories">The blog is organised into five tracks</H2>
        <Grid cols={3}>
          {CATEGORIES.map((c) => <Card key={c.name} title={c.name}>{c.desc}</Card>)}
        </Grid>
      </Section>

      <CTABanner
        title="Subscribe to the monthly automotive cybersecurity briefing"
        body="Regulatory updates, threat intelligence highlights, and the most-read CyMobility content — once a month."
        primaryCta={{ label: 'Subscribe', to: '/contact' }}
        secondaryCta={{ label: 'Explore Compliance Guides', to: '/compliance-guides' }}
        showContact={false}
      />
    </>
  );
}
