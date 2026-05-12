import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function IndustrySuppliers() {
  return (
    <>
      <Seo
        title="Cybersecurity for Tier-1 & Tier-2 Suppliers | ISO 21434 | CyMobility"
        description="Cybersecurity for Tier-1 and Tier-2 automotive suppliers. ISO/SAE 21434 implementation, component TARA, penetration testing, OEM contract compliance support."
        path="/industries/tier-1-tier-2-suppliers/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries/' },
          { name: 'Tier-1 & Tier-2 Suppliers', path: '/industries/tier-1-tier-2-suppliers/' },
        ])}
      />
      <PageHero
        eyebrow="Industries · Suppliers"
        title="Cybersecurity for Tier-1 & Tier-2 Suppliers"
        subtitle="Caught between two pressures: OEM customers mandating ISO/SAE 21434 evidence, and EU CRA enforcement extending conformity obligations to connected components. CyMobility builds the capability your customers demand."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries' }, { name: 'Tier-1 & Tier-2 Suppliers' }]}
        ctas={[{ label: 'Request a Supplier Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Tier-1 and Tier-2 automotive suppliers are caught between two pressures. On one side, OEM customers are mandating ISO/SAE 21434 evidence as a precondition for new business — and increasingly auditing supplier cybersecurity practices directly. On the other, EU CRA enforcement in 2027 will impose cybersecurity conformity obligations on suppliers shipping connected components or aftermarket products into the EU.</p>
          <p>For most suppliers, automotive cybersecurity is a relatively new capability. The expertise is scarce, the methodology is unfamiliar, and the documentation requirements are demanding. CyMobility specialises in helping suppliers build the cybersecurity capability that OEM customers require, in the timeframes those customers demand.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="The challenge">Supplier obligations are now mandatory</H2>
        <Prose>
          <p>UN R155 type approval is held by the OEM, not the supplier. But the OEM cannot demonstrate compliance without aligned cybersecurity practices throughout its supply chain. The practical consequence is that OEM customers are now imposing on suppliers requirements that include:</p>
          <ul>
            <li>ISO/SAE 21434 process implementation and evidence</li>
            <li>Component-level TARA for supplied parts</li>
            <li>Penetration testing reports for cybersecurity-relevant components</li>
            <li>Cybersecurity-related work products integrated with delivery documentation</li>
            <li>TISAX certification or equivalent assessment readiness (for VDA-aligned OEMs)</li>
            <li>SBOM provision for supplied software</li>
            <li>Vulnerability disclosure and patch management commitments</li>
          </ul>
          <p>For most suppliers, none of these existed five years ago. All of them are now contractually required for new business.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Why CyMobility">Right-sized for supplier scope</H2>
        <Grid cols={2}>
          <Card title="Right-sized for suppliers">Engagements scoped and priced for the realities of supplier organisations — from one-off projects to retainer-based ongoing support.</Card>
          <Card title="ISO/SAE 21434 specialism">Our compliance practice is built around ISO/SAE 21434 — the standard that underpins almost every supplier obligation.</Card>
          <Card title="Component-level testing capability">In-house penetration testing lab equipped specifically for component testing — ECUs, sensors, modules, gateway units — at supplier scope.</Card>
          <Card title="OEM-fluent documentation">Work products structured for direct submission to your OEM customer cybersecurity reviews.</Card>
          <Card title="India-local for India-based suppliers">Indian Tier-1 and Tier-2 suppliers gain advantages from a Bengaluru-based partner: faster scheduling, lower cost, tighter confidentiality.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Engagements">Common supplier projects</H2>
        <Grid cols={3}>
          <Card title="ISO/SAE 21434 implementation">End-to-end implementation — cybersecurity management, organisation, risk management, concept, product development, validation, production, operations and maintenance.</Card>
          <Card title="Component-level TARA">ISO/SAE 21434-aligned TARA for supplied components, suitable for delivery to OEM customers as part of their UN R155 evidence package.</Card>
          <Card title="Penetration testing for OEM evidence">Pen testing of cybersecurity-relevant supplied components, with reports structured for OEM customer reviews.</Card>
          <Card title="TISAX assessment readiness">Gap assessment against TISAX, remediation, direct assessor engagement support — relevant for suppliers serving VDA-member OEMs.</Card>
          <Card title="OEM questionnaire response">Support in responding to OEM-issued cybersecurity due diligence questionnaires, supplier audits, info security assessments.</Card>
          <Card title="Supplier cybersecurity capability build">Programmatic build of in-house capability — training, process establishment, tooling selection, hiring guidance.</Card>
          <Card title="EU CRA for connected components">For suppliers shipping connected components or aftermarket products into the EU, full EU CRA conformity programme support.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Engagement models">Flexible engagement shapes</H2>
        <Grid cols={4}>
          <Card title="Discrete projects">TARA, penetration testing, gap assessments and other defined-scope projects with clear deliverables.</Card>
          <Card title="Retainer support">Ongoing senior cybersecurity expertise available to engineering and programme teams, structured as a defined block of days per month.</Card>
          <Card title="Implementation programmes">Multi-month engagements building specific capabilities (ISO/SAE 21434, EU CRA, TISAX readiness).</Card>
          <Card title="Managed services">Continuous services — vulnerability monitoring, fuzz testing in CI, component-level pen testing aligned to release cadence.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="Build the cybersecurity capability your OEM customers demand"
        secondaryCta={{ label: 'Download Supplier Readiness Checklist', to: '/contact' }}
      />
    </>
  );
}
