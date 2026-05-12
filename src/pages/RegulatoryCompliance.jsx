import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function RegulatoryCompliance() {
  const path = '/services/regulatory-compliance/';
  return (
    <>
      <Seo
        title="Automotive Regulatory Compliance | UN R155, EU CRA, AIS-189 | CyMobility"
        description="End-to-end automotive regulatory compliance — UN R155/R156, EU CRA, AIS-189/190, ISO 21434, TISAX. Gap assessment to certification with certified experts."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Regulatory Compliance', path },
          ]),
          serviceJsonLd({
            name: 'Automotive Regulatory Compliance',
            description: 'End-to-end automotive regulatory compliance across UN R155/R156, EU CRA, AIS-189/190, ISO/SAE 21434, TISAX.',
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="Regulatory compliance"
        title="From Gap to Certification — Across Every Major Automotive Regulation"
        subtitle="One partner. Indian (AIS-189/190) and global (UN R155/R156, EU CRA, ISO/SAE 21434, TISAX) coverage. Certified individuals, auditor-ready documentation, end-to-end technical activities."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Regulatory Compliance' }]}
        ctas={[{ label: 'Request a Gap Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Automotive cybersecurity has shifted from optional good practice to mandatory regulatory obligation. UN R155 governs type approval in all 60+ UNECE markets. The EU Cyber Resilience Act will fine manufacturers up to €15 million for non-compliance starting in 2027. India's AIS-189 and AIS-190 standards mirror UN R155 and apply to vehicles sold domestically. ISO/SAE 21434 is the technical standard underpinning all of them, and OEMs are pushing it down the supply chain as a contractual requirement.</p>
          <p>CyMobility provides end-to-end compliance support across every one of these mandates. We are one of the very few automotive cybersecurity companies in India with certified expertise across both Indian domestic and EU/global regulations — making us the right partner for manufacturers that need to comply once and ship everywhere.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Regulations we cover">Every mandate in scope</H2>
        <Grid cols={3}>
          <Card title="UN R155 — Cyber Security Management System" to="/services/regulatory-compliance/un-r155-r156">
            Mandatory for new vehicle type approval in UNECE markets since July 2022 (new types) and July 2024 (all types). Requires an approved Cybersecurity Management System (CSMS) covering the full vehicle lifecycle.
          </Card>
          <Card title="UN R156 — Software Update Management" to="/services/regulatory-compliance/un-r155-r156">
            Companion regulation to UN R155, mandatory for vehicles with software-update capability. Requires an approved Software Update Management System (SUMS) covering update authorisation, integrity, distribution, audit.
          </Card>
          <Card title="EU Cyber Resilience Act" to="/services/regulatory-compliance/eu-cra">
            Conformity for every product with digital elements sold in the EU — vehicles, ECUs, telematics, IoT gateways, industrial controllers. Enforcement begins late 2027. Fines reach €15M or 2.5% of global turnover.
          </Card>
          <Card title="AIS-189 — India Automotive Cybersecurity Standard" to="/services/regulatory-compliance/ais-189-ais-190">
            India's domestic automotive cybersecurity standard, aligned to UN R155. Applies to vehicles sold in India. Requires CSMS implementation, TARA, and demonstration of cybersecurity in vehicle design.
          </Card>
          <Card title="AIS-190 — India Software Update Management" to="/services/regulatory-compliance/ais-189-ais-190">
            Companion to AIS-189, aligned to UN R156. Mandates SUMS for vehicles with over-the-air or workshop-based software update capability.
          </Card>
          <Card title="ISO/SAE 21434 — Cybersecurity Engineering">
            The international engineering standard for automotive cybersecurity. Defines a process framework for cybersecurity risk management, secure-by-design, TARA, V&V, post-production monitoring. The foundation underpinning UN R155, EU CRA and AIS-189 compliance.
          </Card>
          <Card title="TISAX — Trusted Information Security Assessment Exchange">
            The German automotive industry standard for information security, mandated by VDA-member OEMs for their supply chain. CyMobility supports TISAX readiness assessment, gap remediation and assessor liaison.
          </Card>
          <Card title="SOTIF — Safety of the Intended Functionality (ISO 21448)">
            Complementary safety standard relevant for ADAS, AD and SDV cybersecurity. Integrated safety-security analysis where SOTIF, ISO 26262 and ISO/SAE 21434 intersect.
          </Card>
          <Card title="EU RED — Radio Equipment Directive Cybersecurity">
            EU regulation governing radio equipment cybersecurity (Articles 3.3 d/e/f). Applies to wireless connected products including vehicles, telematics modules, key fobs and connected IoT.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="How we deliver">A phased compliance methodology</H2>
        <Grid cols={5}>
          <Card title="1. Gap Assessment">Map current posture against the target regulation. Output: structured gap report with prioritised remediation roadmap. 2–4 weeks.</Card>
          <Card title="2. Process & Documentation">Design and document processes, work products, governance — CSMS for UN R155, SUMS for UN R156, technical file for EU CRA.</Card>
          <Card title="3. Technical Activities">TARA, penetration testing, fuzz testing, vulnerability scanning — the work products required to evidence compliance.</Card>
          <Card title="4. Audit & Submission">Mock audits, evidence packaging, auditor briefings, on-site or remote support through external audit or type approval submission.</Card>
          <Card title="5. Sustained Compliance">Post-certification support for re-audits, software updates, new vehicle variants, incident response — aligned with continuous monitoring obligations.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Why CyMobility">What sets our compliance practice apart</H2>
        <Prose>
          <p><strong>Dual jurisdiction expertise.</strong> Few automotive cybersecurity firms cover both Indian (AIS-189/190) and EU/global (UN R155/R156, EU CRA, ISO/SAE 21434) regulations. CyMobility does. For Indian manufacturers exporting to UNECE markets, this means one partner, one set of documentation, and consistent compliance across every jurisdiction.</p>
          <p><strong>Certified individuals.</strong> Our compliance team holds personal certifications across ISO/SAE 21434, ISO 27001, TISAX and SOTIF. We send certified practitioners, not generalists.</p>
          <p><strong>End-to-end coverage.</strong> We do not just write reports. We deliver every technical activity that compliance requires — TARA, pen testing, fuzz testing, SBOM scanning — from in-house capability. No subcontracting.</p>
          <p><strong>Auditor-fluent documentation.</strong> Our deliverables are structured for direct submission to type approval authorities, conformity assessment bodies, and ISO auditors.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Compliance, end to end"
        body="From a UN R155 gap assessment to an EU CRA technical file to an AIS-189 type approval submission — one partner, every market."
        secondaryCta={{ label: 'Download Regulation Comparison Guide', to: '/contact' }}
      />
    </>
  );
}
