import Seo, { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import FAQ from '../components/page/FAQ.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const FAQS = [
  { q: 'What is AIS-189?',
    a: "AIS-189 is India's automotive cybersecurity standard for vehicles, published by the Automotive Industry Standards Committee. It is directly aligned with UN Regulation 155 and mandates that vehicle manufacturers establish a Cybersecurity Management System (CSMS) covering the full vehicle lifecycle." },
  { q: 'What is AIS-190?',
    a: "AIS-190 is India's automotive software update management standard, aligned with UN Regulation 156. It mandates a Software Update Management System (SUMS) for vehicles with software-update capability." },
  { q: 'Is AIS-189 the same as UN R155?',
    a: 'AIS-189 is directly aligned with UN R155 and follows the same structure and requirements. They are not identical regulations, but compliance approaches and documentation developed for one apply with minimal adaptation to the other.' },
  { q: 'When did AIS-189 / AIS-190 become mandatory?',
    a: 'AIS-189 and AIS-190 have been published and are increasingly being made mandatory for vehicle type approval in India in line with the schedule set by the Ministry of Road Transport and Highways. Manufacturers introducing new vehicle types should treat compliance as immediate.' },
  { q: 'Do AIS-189 and AIS-190 apply to Tier-1 suppliers?',
    a: 'AIS-189 and AIS-190 are vehicle-level standards, certified at the OEM level. However, OEMs cannot demonstrate compliance without aligned cybersecurity practices in their supply chain — meaning Tier-1 and Tier-2 suppliers must support compliance, typically through ISO/SAE 21434 evidence and component-level TARA.' },
  { q: 'Can one programme cover both AIS-189 and UN R155 compliance?',
    a: 'Yes. Because AIS-189 is directly aligned with UN R155, a well-designed compliance programme can satisfy both simultaneously. CyMobility specialises in dual-jurisdiction compliance programmes for Indian manufacturers exporting to UNECE markets.' },
];

export default function Ais189() {
  const path = '/services/regulatory-compliance/ais-189-ais-190/';
  return (
    <>
      <Seo
        title="AIS-189 & AIS-190 Compliance India | Automotive Cybersecurity | CyMobility"
        description="AIS-189 and AIS-190 compliance for India OEMs. CSMS and SUMS for vehicles sold in India. Aligned with UN R155/R156. Bengaluru-based experts."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
            { name: 'AIS-189 / AIS-190', path },
          ]),
          faqJsonLd(FAQS),
          serviceJsonLd({
            name: 'AIS-189 and AIS-190 Compliance',
            description: "End-to-end AIS-189 (CSMS) and AIS-190 (SUMS) compliance for vehicles sold in India. Aligned with UN R155/R156.",
            path,
          }),
        ]}
      />
      <PageHero
        eyebrow="AIS-189 / AIS-190"
        title="India's Automotive Cybersecurity Mandate"
        subtitle="Domestic standards aligned with UN R155 and UN R156. The compliance baseline expected of vehicles sold in India — and the framework that pays dividends for UNECE exports."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Regulatory Compliance', path: '/services/regulatory-compliance/' },
          { name: 'AIS-189 / AIS-190' },
        ]}
        ctas={[{ label: 'Request an AIS-189 Gap Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>AIS-189 ("Cyber Security and Management System") and AIS-190 ("Software Update and Software Update Management System") are India's domestic automotive cybersecurity standards, published by the Automotive Industry Standards Committee under the Ministry of Road Transport and Highways. Both standards are directly aligned with UN Regulation 155 and UN Regulation 156 — meaning compliance approaches developed for one framework apply to the other with minimal adaptation.</p>
          <p>CyMobility is one of the very few automotive cybersecurity companies in India with hands-on capability across both AIS-189/190 and UN R155/R156 — making us the natural partner for Indian manufacturers preparing for domestic compliance and global export simultaneously.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="AIS-189">What it requires</H2>
        <Prose>
          <p>AIS-189 mirrors UN R155 in structure and substance. It requires vehicle manufacturers to establish, implement and maintain a Cybersecurity Management System (CSMS) covering the full vehicle lifecycle. Specifically:</p>
          <ul>
            <li><strong>Organisational cybersecurity capability.</strong> Defined roles, accountabilities, governance, and resources across development, production, and in-service phases.</li>
            <li><strong>Risk management process.</strong> Documented methodology for identifying, evaluating and treating cybersecurity risks.</li>
            <li><strong>Vehicle-level TARA.</strong> Conducted for each vehicle type seeking certification, identifying assets, threats, attack feasibility, impact, and risk treatment.</li>
            <li><strong>Verification and validation.</strong> Demonstrating cybersecurity requirements are met through appropriate testing including penetration testing.</li>
            <li><strong>Post-production monitoring.</strong> Continuous monitoring for cyber threats and vulnerabilities affecting in-service vehicles.</li>
            <li><strong>Supplier management.</strong> Evidence that cybersecurity is appropriately managed across the supply chain.</li>
          </ul>
        </Prose>
      </Section>

      <Section>
        <H2 eyebrow="AIS-190">Software Update Management System</H2>
        <Prose>
          <p>AIS-190 mirrors UN R156, mandating a Software Update Management System (SUMS) for any vehicle with software-update capability — whether over-the-air, via workshop tooling, or otherwise. Requirements include software inventory and identification, update authorisation, cryptographic integrity and authenticity, secure delivery and rollback, and record-keeping for the lifetime of the vehicle.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Strategic context">Why dual compliance matters</H2>
        <Prose>
          <p>For Indian OEMs, AIS-189 and AIS-190 represent the convergence of two pressures: a growing domestic regulatory expectation, and an export imperative. Indian manufacturers that sell into UNECE markets (the EU, Japan, the UK, South Korea, the Middle East, etc.) must already demonstrate UN R155 / R156 compliance — and the alignment between AIS and UN standards means investments in compliance pay dividends across both markets.</p>
          <p>The right approach is to design a single compliance programme that satisfies both AIS and UN regulations simultaneously, rather than running parallel programmes. CyMobility specialises in exactly this — building compliance once, deploying across markets.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Our service">A phased approach for India OEMs</H2>
        <Grid cols={5}>
          <Card title="1. Gap Assessment">Map vehicle architectures, existing processes and documentation against AIS-189 and AIS-190. Prioritised remediation roadmap aligned to type approval schedule.</Card>
          <Card title="2. CSMS & SUMS Design">Process descriptions, governance, work products, document control, supplier interface specifications.</Card>
          <Card title="3. Implementation Support">Training, process roll-out, supplier engagement, tooling configuration, PLM integration.</Card>
          <Card title="4. Type Approval Support">Vehicle-level TARA, penetration testing, work product preparation, direct support through certification audit.</Card>
          <Card title="5. Sustained Compliance">Periodic audits, vehicle type extensions, in-service monitoring, software update governance.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Authorities">Working with Indian approval bodies</H2>
        <Prose>
          <p>CyMobility's compliance team is familiar with the Indian regulatory ecosystem, including ARAI (Automotive Research Association of India), iCAT (International Centre for Automotive Technology), CIRT (Central Institute of Road Transport) and other testing agencies. We support direct engagement with these bodies during type approval activities, prepare documentation in formats they expect, and brief our clients on what to expect during audits.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center">Frequently asked questions</H2>
        <FAQ items={FAQS} />
      </Section>

      <CTABanner
        title="One programme. AIS-189 + UN R155. Every market."
        secondaryCta={{ label: 'Download AIS-189 vs UN R155 Comparison', to: '/contact' }}
      />
    </>
  );
}
