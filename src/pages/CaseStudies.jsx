import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

const CASES = [
  {
    title: 'UN R155 CSMS Implementation for an Indian Passenger Vehicle OEM',
    meta: 'OEM (passenger vehicles) · India + UNECE export · End-to-end UN R155 / AIS-189 programme',
    challenge: 'A leading Indian passenger vehicle OEM was preparing for the launch of a new platform targeted at both the Indian domestic market (requiring AIS-189 compliance) and select UNECE export markets (requiring UN R155 type approval). The cybersecurity function was relatively new, the platform was already in advanced development, and the type approval timeline was non-negotiable. The core challenge was building UN R155-grade Cybersecurity Management System capability — including TARA, supplier governance, post-production monitoring and SUMS — within a programme that had already committed to architectural decisions made without cybersecurity input.',
    approach: 'CyMobility delivered a three-phase engagement. Phase 1 was a structured gap assessment against UN R155 and AIS-189 requirements, mapping current state, gaps and remediation priorities. Phase 2 was CSMS and SUMS design and roll-out — process documentation, organisational governance, supplier interface design, training. Phase 3 was direct support for the vehicle type approval submission, including vehicle-level TARA, penetration testing of cybersecurity-relevant ECUs, evidence packaging, and Approval Authority engagement. A senior CyMobility consultant was embedded with the client cybersecurity team throughout, providing day-to-day technical and programmatic leadership.',
    outcome: 'The client achieved both AIS-189 type certification for the Indian market and UN R155 type approval for the target UNECE markets on the original platform launch schedule. The CSMS established is now reused across subsequent vehicle programmes, materially reducing per-programme compliance cost. The supplier cybersecurity governance framework has cascaded to dozens of Tier-1 suppliers.',
  },
  {
    title: 'Component Penetration Testing for a Tier-1 Telematics Supplier',
    meta: 'Tier-1 supplier (telematics) · India HQ supplying global OEMs · Pen testing for OEM contract evidence',
    challenge: 'A global telematics supplier with engineering centres in India was supplying connected gateway modules to a major European OEM. As part of the OEM\'s UN R155 supplier cybersecurity governance, the client was required to provide penetration test evidence for the supplied component, structured to the OEM\'s specific cybersecurity test specification. The challenge: deliver pen test results that satisfied the OEM\'s documentation standards, and complete the engagement on a compressed timeline driven by the OEM\'s type approval submission deadline.',
    approach: 'CyMobility scoped the engagement to focus on the cybersecurity-critical attack surfaces of the gateway module: cellular interfaces, backend API authentication, cryptographic key handling, secure boot validation, diagnostic interface security, and inter-network segmentation. Testing was conducted in our Bengaluru laboratory using both manual analysis and our pentest.core platform. Findings were triaged with the client\'s engineering team weekly, allowing remediation to begin in parallel with ongoing testing rather than after engagement closure. The final report was structured to match the OEM customer\'s evidence specification exactly.',
    outcome: 'The engagement completed on time. Multiple findings were identified during testing, several remediated and retested before report submission. The client\'s component was accepted into the OEM\'s type approval submission without follow-up requests for additional cybersecurity evidence. The client has subsequently re-engaged CyMobility for two additional component pen test campaigns.',
  },
  {
    title: 'EU CRA Readiness for a Connected Industrial IoT Manufacturer',
    meta: 'Industrial IoT (gateways and sensors) · India HQ shipping globally · EU CRA gap assessment + conformity programme',
    challenge: 'An industrial IoT manufacturer with a portfolio of connected gateway and sensor products was preparing for the December 2027 EU CRA enforcement deadline. The product portfolio included multiple product lines with different cybersecurity baselines, and the manufacturer had no central cybersecurity function. The challenge was determining which products fell in scope of EU CRA, classifying each in-scope product correctly, and building the technical and process capability required for conformity — within a budget and timeline appropriate to a mid-sized manufacturer.',
    approach: 'Phase 1 catalogued the product portfolio, determined EU CRA applicability for each product, classified each in-scope product, and prepared a portfolio compliance roadmap. Phase 2 was a detailed gap assessment per in-scope product. Phase 3 was technical and process implementation: SBOM generation and continuous monitoring (vulnerability.core), penetration testing of priority products, secure development lifecycle, vulnerability handling process. Phase 4 was technical file preparation and conformity assessment readiness, including notified body engagement for Class I products. Throughout, vulnerability.core delivered continuous monitoring against the portfolio\'s SBOMs.',
    outcome: 'The client is on track for full EU CRA conformity ahead of the December 2027 deadline. Multiple in-scope products are fully prepared with conformity assessments either complete or scheduled. Continuous monitoring through vulnerability.core has surfaced vulnerabilities affecting the portfolio in the engagement period, all remediated through the established vulnerability handling process. The client has continued the relationship with CyMobility through a sustained compliance retainer.',
  },
];

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies | Automotive Cybersecurity Engagements | CyMobility"
        description="CyMobility case studies — UN R155 compliance programmes, penetration testing engagements, TARA, EU CRA readiness. Real outcomes for OEMs and Tier-1 suppliers."
        path="/case-studies/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies/' },
        ])}
      />
      <PageHero
        eyebrow="Case studies"
        title="Real Cybersecurity Engagements, Real Outcomes"
        subtitle="Representative engagements across automotive OEMs, Tier-1 suppliers, and connected device manufacturers. Client names are anonymised where confidentiality requires; engagement details have been generalised but reflect actual project scope and outcomes."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Case Studies' }]}
      />

      {CASES.map((c, i) => (
        <Section key={c.title} alt={i % 2 === 1}>
          <H2 eyebrow={`Case ${i + 1}`}>{c.title}</H2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            {c.meta}
          </p>
          <Prose>
            <h3>Challenge</h3>
            <p>{c.challenge}</p>
            <h3>Approach</h3>
            <p>{c.approach}</p>
            <h3>Outcome</h3>
            <p>{c.outcome}</p>
          </Prose>
        </Section>
      ))}

      <CTABanner
        title="Discuss your cybersecurity engagement"
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </>
  );
}
