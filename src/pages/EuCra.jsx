import Seo, { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import FAQ from '../components/page/FAQ.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const FAQS = [
  { q: 'When does EU CRA enforcement begin?',
    a: 'Full enforcement begins 11 December 2027. Vulnerability and incident reporting obligations apply earlier — from 11 September 2026.' },
  { q: 'What are the penalties for EU CRA non-compliance?',
    a: 'Penalties for non-compliance with essential cybersecurity requirements can reach €15 million or 2.5% of global annual turnover, whichever is higher. Lower tiers apply to less severe breaches.' },
  { q: 'Does EU CRA apply to vehicles?',
    a: 'Vehicles are subject to a complex interaction between EU CRA and existing automotive legislation (UN R155, EU GSR). Many vehicle-level cybersecurity obligations remain governed by UN R155. However, standalone automotive products and aftermarket components frequently fall in scope of EU CRA.' },
  { q: 'Do we need a notified body to assess EU CRA conformity?',
    a: 'It depends on product class. Default-category products can self-assess. Class I products may self-assess if harmonised standards are followed, otherwise require notified body involvement. Class II products always require notified body conformity assessment.' },
  { q: 'What is an SBOM and is it required by EU CRA?',
    a: 'A Software Bill of Materials (SBOM) is a structured inventory of every software component, library and dependency in a product. EU CRA requires manufacturers to maintain an SBOM and use it to identify and address vulnerabilities throughout the support period.' },
  { q: 'How long do we need to provide security updates under EU CRA?',
    a: 'For the expected product lifetime, with a default minimum of five years for many categories. Manufacturers must publicly state the support period and provide free security updates throughout it.' },
];

export default function EuCra() {
  const path = '/services/regulatory-compliance/eu-cra/';
  return (
    <>
      <Seo
        title="EU CRA Compliance for Automotive & IoT | Cyber Resilience Act | CyMobility"
        description="EU Cyber Resilience Act (EU CRA) compliance for vehicles, ECUs and connected devices. Gap assessment, conformity, technical file. Enforcement 2027."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
            { name: 'EU CRA', path },
          ]),
          faqJsonLd(FAQS),
          serviceJsonLd({
            name: 'EU CRA Compliance',
            description: 'End-to-end EU Cyber Resilience Act compliance — scope, classification, conformity assessment, technical file, vulnerability handling.',
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="EU Cyber Resilience Act"
        title="EU CRA Compliance for Connected Products"
        subtitle="Regulation (EU) 2024/2847. Enforcement 11 December 2027. Fines up to €15M or 2.5% of global turnover. Every product with digital elements sold in the EU must demonstrate conformity."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
          { name: 'EU CRA' },
        ]}
        pills={['Vehicles', 'ECUs', 'Telematics', 'IoT Gateways', 'Industrial Controllers']}
        ctas={[{ label: 'Request an EU CRA Gap Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>The European Union's Cyber Resilience Act (EU CRA) — Regulation (EU) 2024/2847 — is the most significant cybersecurity regulation in the world for connected products. Adopted in October 2024 and entering main application on 11 December 2027, EU CRA requires every product with digital elements sold in the EU to demonstrate cybersecurity conformity. That includes vehicles, ECUs, telematics units, infotainment systems, IoT gateways, industrial controllers, smart home devices and consumer electronics.</p>
          <p>Non-compliance is expensive: fines can reach €15 million or 2.5% of global annual turnover, whichever is higher. Products that cannot demonstrate conformity cannot legally be placed on the EU market.</p>
          <p>CyMobility helps manufacturers — automotive, IoT and industrial — achieve EU CRA conformity well before the enforcement deadline.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Scope">Who must comply with EU CRA</H2>
        <Prose>
          <p>EU CRA applies to manufacturers, importers, and distributors of any "product with digital elements" placed on the EU market. In automotive and connected device contexts, this includes:</p>
          <ul>
            <li>Vehicle platforms (in scope alongside UN R155, with overlap addressed by EU CRA's relationship with sector-specific legislation)</li>
            <li>ECUs and electronic control modules</li>
            <li>Telematics units and connected gateways</li>
            <li>Aftermarket OBD devices and dongles</li>
            <li>Consumer-grade and industrial IoT devices</li>
            <li>Software components shipped as part of, or for use with, the above</li>
          </ul>
          <p>Critically, EU CRA covers products even when the digital element is incidental — if a product processes data, connects to a network, or includes embedded software, it is in scope unless explicitly excluded.</p>
        </Prose>
      </Section>

      <Section>
        <H2 eyebrow="What it requires">Essential cybersecurity requirements</H2>
        <Grid cols={2}>
          <Card title="Secure by design and by default">
            Products must be designed with cybersecurity as a built-in property. Default configurations must be secure. Attack surfaces minimised. Authentication appropriate to risk. Vulnerabilities addressable through updates.
          </Card>
          <Card title="Vulnerability handling">
            Operate a vulnerability disclosure process. Monitor for vulnerabilities. Deliver security updates for the support period. Report actively exploited vulnerabilities to ENISA within 24 hours of awareness.
          </Card>
          <Card title="Conformity assessment">
            Depending on product class (default, Class I, Class II — the latter critical products), follow specified conformity assessment procedures: self-assessment, EU-type examination, or full quality assurance.
          </Card>
          <Card title="Technical documentation">
            Prepare and maintain technical documentation evidencing conformity, including a Software Bill of Materials (SBOM), cybersecurity risk assessment, design and implementation evidence, and vulnerability handling procedures.
          </Card>
          <Card title="CE marking & Declaration of Conformity">
            Conforming products must bear CE marking and be accompanied by an EU Declaration of Conformity stating EU CRA compliance.
          </Card>
          <Card title="Post-market obligations">
            Provide security updates throughout the support period (typically expected lifetime, minimum 5 years for many categories) and inform users of incidents and vulnerabilities.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Timeline">Key dates</H2>
        <Prose>
          <table>
            <thead><tr><th>Date</th><th>Milestone</th></tr></thead>
            <tbody>
              <tr><td>23 October 2024</td><td>EU CRA published in Official Journal</td></tr>
              <tr><td>11 December 2024</td><td>EU CRA entered into force</td></tr>
              <tr><td>11 September 2026</td><td>Reporting obligations for actively exploited vulnerabilities and severe incidents apply</td></tr>
              <tr><td>11 December 2027</td><td>Full application — all in-scope products placed on the EU market must conform</td></tr>
            </tbody>
          </table>
          <p>For most manufacturers, the practical preparation window is now. Conformity assessment, SBOM generation, vulnerability handling and technical documentation cannot be assembled in the last weeks before enforcement.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Our service">A four-phase EU CRA programme</H2>
        <Grid cols={4}>
          <Card title="1. Scope & Gap Assessment">Catalogue products, identify which fall in scope, classify them (default/Class I/Class II), and map current posture against EU CRA requirements. Prioritised gap remediation roadmap.</Card>
          <Card title="2. Process Implementation">Vulnerability handling, security update delivery, incident reporting, SBOM management, technical documentation control.</Card>
          <Card title="3. Technical Activities">Cybersecurity risk assessment, SBOM extraction and ongoing scanning, vulnerability testing (pen testing, fuzz), product hardening recommendations.</Card>
          <Card title="4. Conformity & Documentation">Technical file assembly, conformity assessment (self or notified body), EU Declaration of Conformity.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Sector context">EU CRA for automotive vs. IoT manufacturers</H2>
        <Prose>
          <p><strong>For automotive manufacturers:</strong> EU CRA interacts with the existing automotive regulatory framework (UN R155, UN R156, EU GSR) in complex ways. The CRA explicitly provides for sector-specific legislation to take precedence where it provides equivalent or stricter requirements — meaning many vehicle-level cybersecurity obligations remain governed primarily by UN R155 and the EU's General Safety Regulation. However, EU CRA can apply to standalone automotive products sold separately from a type-approved vehicle: aftermarket telematics modules, OBD dongles, replacement infotainment units, charging equipment and connected accessories.</p>
          <p><strong>For IoT and connected device manufacturers:</strong> EU CRA is the single most consequential cybersecurity regulation. Unlike automotive, there is no sector-specific framework that pre-empts EU CRA for general consumer or industrial IoT — meaning EU CRA's essential requirements apply in full. CyMobility supports IoT manufacturers across the full conformity journey: product classification, gap assessment, SBOM generation, vulnerability handling process design, penetration testing, technical file preparation, and notified body liaison where required.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center">Frequently asked questions</H2>
        <FAQ items={FAQS} />
      </Section>

      <CTABanner
        title="EU CRA enforcement is 11 December 2027 — preparation starts now"
        secondaryCta={{ label: 'Download EU CRA Readiness Checklist', to: '/contact' }}
      />
    </>
  );
}
