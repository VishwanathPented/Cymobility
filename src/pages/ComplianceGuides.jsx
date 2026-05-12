import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function ComplianceGuides() {
  return (
    <>
      <Seo
        title="Automotive Compliance Guides | UN R155, EU CRA, AIS-189, ISO 21434 | CyMobility"
        description="Comprehensive guides to automotive cybersecurity regulations — UN R155, UN R156, EU CRA, AIS-189, AIS-190, ISO/SAE 21434, TISAX. Implementation, evidence, audit."
        path="/compliance-guides/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Compliance Guides', path: '/compliance-guides/' },
        ])}
      />
      <PageHero
        eyebrow="Compliance guides"
        title="Implementation Guides for Every Major Automotive Regulation"
        subtitle="Substantive regulatory writing — implementation guides, comparative analyses, requirement walkthroughs, evidence templates — designed for engineering leadership, compliance specialists, and programme managers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Compliance Guides' }]}
      />

      <Section>
        <Prose>
          <p>Automotive cybersecurity regulation is fragmented, fast-moving, and unforgiving. UN R155, UN R156, EU CRA, AIS-189, AIS-190, ISO/SAE 21434, TISAX, SOTIF, EU RED — each imposes specific obligations, each interacts with the others, and each requires distinct evidence to satisfy auditors and Approval Authorities.</p>
          <p>The CyMobility compliance guides hub aggregates our most substantial regulatory writing. Use it as a baseline reference; engage us when you need to translate the guidance into a specific compliance programme.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Regulations covered">Comprehensive guides</H2>
        <Grid cols={2}>
          <Card title="UN Regulation 155 — Cybersecurity Management System" to="/services/regulatory-compliance/un-r155-r156">
            Scope, applicability, CSMS requirements, vehicle type approval, supplier obligations, sustained compliance, and interaction with ISO/SAE 21434.
          </Card>
          <Card title="UN Regulation 156 — Software Update Management" to="/services/regulatory-compliance/un-r155-r156">
            SUMS implementation, OTA security, software identification, integrity and authenticity, delivery and rollback, record-keeping.
          </Card>
          <Card title="EU Cyber Resilience Act" to="/services/regulatory-compliance/eu-cra">
            The most comprehensive regulation affecting connected products. Scope, classification, conformity assessment, technical file, vulnerability handling, security updates, ENISA reporting.
          </Card>
          <Card title="AIS-189 — India Automotive Cybersecurity Standard" to="/services/regulatory-compliance/ais-189-ais-190">
            CSMS for the Indian market, alignment with UN R155, ARAI / iCAT engagement, evidence packaging, dual-jurisdiction compliance for export OEMs.
          </Card>
          <Card title="AIS-190 — India Software Update Management" to="/services/regulatory-compliance/ais-189-ais-190">
            SUMS for the Indian market, OTA and workshop-based updates, alignment with UN R156.
          </Card>
          <Card title="ISO/SAE 21434 — Cybersecurity Engineering">
            Process structure, work products, organisational requirements, lifecycle activities, supplier management, integration with ISO 26262, audit preparation.
          </Card>
          <Card title="ISO 26262 — Functional Safety">
            Safety-security co-engineering. How ISO 26262 intersects with ISO/SAE 21434 cybersecurity engineering.
          </Card>
          <Card title="ISO 21448 (SOTIF) — Safety of the Intended Functionality">
            Where SOTIF analysis intersects with cybersecurity, particularly around sensor systems and AI/ML components.
          </Card>
          <Card title="TISAX — Trusted Information Security Assessment Exchange">
            Scope of TISAX, assessment levels (AL 1, 2, 3), participant requirements, ENX portal, assessor liaison.
          </Card>
          <Card title="EU RED Cybersecurity Articles">
            Radio Equipment Directive's cybersecurity provisions (Articles 3.3 d/e/f) and the interaction with EU CRA.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Comparative resources">Downloadable working documents</H2>
        <Grid cols={2}>
          <Card title="Regulation Comparison Matrix">Side-by-side comparison of UN R155, EU CRA, AIS-189 and ISO/SAE 21434 across scope, applicability, evidence requirements, audit and certification, and timelines.</Card>
          <Card title="Indian OEM Compliance Roadmap">A combined AIS-189 + UN R155 implementation roadmap for Indian OEMs exporting to UNECE markets.</Card>
          <Card title="Tier-1 Supplier Cybersecurity Checklist">Practical checklist of cybersecurity expectations imposed by OEM customers, mapped to ISO/SAE 21434 work products.</Card>
          <Card title="EU CRA Conformity Decision Tree">Visual flowchart for determining EU CRA applicability and classification for connected products.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="From guidance to programme — start with a compliance assessment"
        secondaryCta={{ label: 'Subscribe for Regulatory Updates', to: '/contact' }}
      />
    </>
  );
}
