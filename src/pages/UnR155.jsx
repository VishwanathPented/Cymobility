import Seo, { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import FAQ from '../components/page/FAQ.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const FAQS = [
  { q: 'Is UN R155 mandatory for all new vehicles?',
    a: 'UN R155 is mandatory for vehicles seeking type approval in UNECE contracting parties that have acceded to the regulation. For most major markets (EU, Japan, South Korea, UK), it has been mandatory since July 2022 for new vehicle types and since July 2024 for all vehicle types.' },
  { q: 'What is the difference between UN R155 and ISO/SAE 21434?',
    a: 'UN R155 is a regulation — a legal mandate enforced by Approval Authorities for type approval. ISO/SAE 21434 is an international engineering standard providing the methodology to meet UN R155\'s technical requirements. Compliance with ISO/SAE 21434 is the most direct path to demonstrating UN R155 conformity.' },
  { q: 'What is a CSMS?',
    a: 'CSMS stands for Cybersecurity Management System. It is the organisational framework — including governance, processes, roles, and documentation — that a vehicle manufacturer must establish and maintain to comply with UN R155.' },
  { q: 'What is a SUMS?',
    a: 'SUMS stands for Software Update Management System. It is the organisational framework for managing vehicle software updates, mandated by UN R156.' },
  { q: 'How long does UN R155 CSMS implementation take?',
    a: 'For an OEM starting from a low baseline, full CSMS implementation typically takes 12–18 months including process design, roll-out, supplier alignment and audit readiness. CyMobility\'s gap assessment phase (3–6 weeks) is the necessary first step to scope the actual timeline.' },
  { q: 'Do UN R155 and UN R156 apply in India?',
    a: 'India has implemented AIS-189 and AIS-190 — domestic standards directly aligned with UN R155 and UN R156. Vehicles sold in India must comply with the AIS standards. Vehicles exported from India to UNECE markets must comply with UN R155 / R156 directly.' },
];

export default function UnR155() {
  const path = '/services/regulatory-compliance/un-r155-r156/';
  return (
    <>
      <Seo
        title="UN R155 & UN R156 Compliance | CSMS & SUMS | CyMobility"
        description="UN R155 (CSMS) and UN R156 (SUMS) compliance for vehicle type approval. Gap assessment, implementation, audit support. UNECE markets including India and EU."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
            { name: 'UN R155 / R156', path },
          ]),
          faqJsonLd(FAQS),
          serviceJsonLd({
            name: 'UN R155 and UN R156 Compliance',
            description: 'End-to-end UN R155 CSMS and UN R156 SUMS compliance for vehicle type approval in UNECE markets.',
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="UN R155 / R156"
        title="Vehicle Type Approval — Cybersecurity Management System & Software Update Management System"
        subtitle="Mandatory for vehicle type approval in all UNECE markets. Without an approved CSMS and SUMS, vehicles cannot receive type approval. Without type approval, vehicles cannot be sold."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
          { name: 'UN R155 / R156' },
        ]}
        ctas={[{ label: 'Request a UN R155 Gap Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>UN R155 (Cyber Security and Cyber Security Management System) and its companion regulation UN R156 (Software Update and Software Update Management System) are mandatory for vehicle type approval in all UNECE markets. Adopted by UNECE WP.29 in 2020, they have been mandatory for new vehicle types since July 2022 and for all vehicle types since July 2024 in most aligned markets — and India's AIS-189 and AIS-190 mirror these regulations for the Indian domestic market.</p>
          <p>CyMobility delivers UN R155 and UN R156 compliance end-to-end — from initial gap assessment through CSMS and SUMS implementation to type approval submission support.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="UN R155">What the regulation requires</H2>
        <Prose>
          <p>UN R155 mandates that vehicle manufacturers establish, implement and maintain a Cybersecurity Management System (CSMS) covering the full vehicle lifecycle. The CSMS must be approved by a designated Approval Authority (or its Technical Service) and recertified periodically. The CSMS must address:</p>
          <ul>
            <li><strong>Cybersecurity governance and organisation</strong> — Defined roles, responsibilities, governance forums, escalation paths and accountability across development, production, and post-production phases.</li>
            <li><strong>Risk management</strong> — A documented process for identifying, analysing, evaluating and treating cybersecurity risks throughout the vehicle lifecycle. ISO/SAE 21434 is the implicit methodology framework.</li>
            <li><strong>Threat Analysis and Risk Assessment (TARA)</strong> — Conducted for each vehicle type, identifying assets, threats, attack feasibility, and risk treatment.</li>
            <li><strong>Verification and validation</strong> — Demonstrating that cybersecurity requirements are met through testing — including penetration testing, fuzz testing, and other appropriate methods.</li>
            <li><strong>Continuous monitoring and response</strong> — Post-production monitoring, vulnerability management, incident response, and information sharing within the cybersecurity community.</li>
            <li><strong>Supplier management</strong> — Cybersecurity appropriately managed across the supply chain. Tier-1 and Tier-2 suppliers must demonstrate aligned cybersecurity practices.</li>
          </ul>
        </Prose>
      </Section>

      <Section>
        <H2 eyebrow="UN R156">Software Update Management System</H2>
        <Prose>
          <p>UN R156 governs the management and execution of software updates for vehicles. It mandates an approved Software Update Management System (SUMS) covering:</p>
          <ul>
            <li><strong>Software identification.</strong> Each software-updatable component must have unique identifiers and version tracking.</li>
            <li><strong>Update authorisation.</strong> A documented process for authorising software updates before deployment, including impact assessment on safety, cybersecurity, type approval compliance.</li>
            <li><strong>Integrity and authenticity.</strong> Cryptographic protection of software updates to ensure integrity and authenticity.</li>
            <li><strong>Update delivery.</strong> Secure delivery of software updates — over-the-air (OTA) or through workshops — with rollback capability if updates fail.</li>
            <li><strong>Record-keeping.</strong> Documentation of every update, including which vehicles received which version, when, and the outcome.</li>
          </ul>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Our service">Six-phase delivery approach</H2>
        <Grid cols={3}>
          <Card title="1. Scoping & Gap Assessment">Map vehicle architectures, processes and documentation against UN R155 and UN R156. Output: detailed gap report. Typical duration: 3–6 weeks for an OEM.</Card>
          <Card title="2. CSMS & SUMS Design">Organisation, processes, governance forums, work products, document control, supplier requirements. Outputs: CSMS manual, SUMS manual, process descriptions, templates.</Card>
          <Card title="3. CSMS & SUMS Implementation">Roll-out support: training teams, embedding processes in existing PLM, configuring tooling, aligning supplier interfaces.</Card>
          <Card title="4. Vehicle Type Approval">For each vehicle type: TARA, verification activities (pen testing, fuzz testing), type approval submission documentation.</Card>
          <Card title="5. Approval Authority Engagement">Submission to KBA, RDW, NTA or equivalent. Respond to authority queries, prepare for on-site audit.</Card>
          <Card title="6. Sustained Compliance">Periodic CSMS audits, vehicle type extensions, in-service monitoring, ongoing cybersecurity activities.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Supply chain">UN R155 for Tier-1 and Tier-2 suppliers</H2>
        <Prose>
          <p>While UN R155 and UN R156 are vehicle-level regulations approved against the OEM, the compliance burden cascades down the supply chain. Tier-1 and Tier-2 suppliers must demonstrate aligned cybersecurity practices — typically through ISO/SAE 21434 evidence — to support their OEM customers' UN R155 submissions.</p>
          <p>CyMobility supports suppliers with ISO/SAE 21434 implementation, supplier cybersecurity questionnaire responses, TARA at component level, penetration testing of supplied components, and integration with OEM CSMS interfaces.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center">Frequently asked questions</H2>
        <FAQ items={FAQS} />
      </Section>

      <CTABanner
        title="Type approval starts with a UN R155 gap assessment"
        secondaryCta={{ label: 'Download UN R155 Implementation Guide', to: '/contact' }}
      />
    </>
  );
}
