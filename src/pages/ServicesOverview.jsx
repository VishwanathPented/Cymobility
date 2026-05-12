import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function ServicesOverview() {
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Services India | CyMobility"
        description="Complete automotive cybersecurity services — penetration testing, regulatory compliance, TARA, VSOC, SDV advisory. UN R155, EU CRA, AIS-189, ISO 21434 expertise."
        path="/services/"
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
          ]),
          serviceJsonLd({
            name: 'Automotive Cybersecurity Services',
            description: 'End-to-end automotive cybersecurity — consulting, regulatory compliance (UN R155, EU CRA, AIS-189, ISO 21434), security testing, TARA, VSOC, SDV advisory, and training.',
            path: '/services/',
          }),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Automotive Cybersecurity Services — End to End"
        subtitle="One team. Six service lines. Every phase of the cybersecurity lifecycle — documented to regulatory standards."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]}
        ctas={[{ label: 'Request a Compliance Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>CyMobility delivers the full spectrum of automotive cybersecurity services from a single team. Whether you need a UN R155 gap assessment, hands-on penetration testing of an ECU, a TARA for a new vehicle programme, or 24/7 vehicle security operations monitoring, we cover every phase of the cybersecurity lifecycle — and document everything to regulatory standards.</p>
          <h3>Why engage CyMobility for cybersecurity services</h3>
          <p>OEMs and Tier-1 suppliers typically work with multiple cybersecurity vendors: one for compliance consulting, another for penetration testing, a third for VSOC monitoring, a fourth for training. Every handoff introduces gaps. Every gap introduces risk. CyMobility eliminates handoffs by delivering every service line from one accountable team — with shared documentation, integrated reporting, and a single point of contact through certification.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Our six service lines">What we deliver</H2>
        <Grid cols={3}>
          <Card title="Regulatory Compliance" to="/services/regulatory-compliance">
            Full programme support for UN R155/R156, EU CRA, AIS-189/190, ISO/SAE 21434 and TISAX. From initial gap assessment through CSMS and SUMS implementation, audit preparation, and certification sign-off.
          </Card>
          <Card title="Security Testing & Vulnerability Analysis" to="/services/security-testing">
            In-house pen testing of ECUs, telematics units, infotainment systems, V2X interfaces, gateway controllers and OTA pipelines. Automated and manual fuzz testing. Vulnerability scanning of binaries and source code.
          </Card>
          <Card title="TARA — Threat Analysis & Risk Assessment" to="/services/security-testing/tara">
            ISO/SAE 21434-aligned TARA delivered in architecture and design phases. Asset identification, threat scenarios, attack feasibility rating, risk treatment recommendations, traceable documentation for type approval.
          </Card>
          <Card title="Threat Intelligence & VSOC" to="/services/threat-intelligence-vsoc">
            24/7 Vehicle Security Operations Centre. Real-time OSINT collection, threat actor monitoring, vulnerability intelligence, incident response. Aligned to UN R155 monitoring requirements.
          </Card>
          <Card title="SDV Security Advisory" to="/services/sdv-security-advisory">
            Strategic cybersecurity consulting for Software-Defined Vehicle architectures. SOA security, central compute hardening, zonal ECU design, vehicle-to-cloud integration, secure-by-design for SDV pipelines.
          </Card>
          <Card title="Security Workshops & Training" to="/services/security-workshops-training">
            Custom training programmes for cybersecurity, engineering and compliance teams. ISO/SAE 21434, UN R155, EU CRA, TARA methodology, automotive pen testing.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Engagement models">How we structure engagements</H2>
        <Grid cols={2}>
          <Card title="Programme-based engagements">
            End-to-end ownership of a defined cybersecurity programme (e.g. UN R155 compliance for a vehicle platform), with milestones, deliverables and fixed scope.
          </Card>
          <Card title="Project-based engagements">
            Discrete projects with clear deliverables — penetration test of a telematics unit, TARA for a new ADAS feature, EU CRA gap assessment.
          </Card>
          <Card title="Managed services">
            Continuous services such as VSOC monitoring, vulnerability scanning, or threat intelligence feeds, delivered on subscription.
          </Card>
          <Card title="Embedded experts">
            Senior CyMobility specialists embedded inside your engineering or compliance team for the duration of a programme — typically for OEM cybersecurity programme leadership.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="How we work">A proven phased approach</H2>
        <Prose>
          <p>Every CyMobility engagement follows the same proven phases. First we run a scoping workshop to understand your products, regulatory obligations, and timelines. We then deliver a scoped proposal with a clear engagement model, deliverable list, and milestone schedule. Through execution we maintain weekly status reporting, integrated documentation, and direct access to our technical leads. At closure we deliver auditor-ready documentation, knowledge transfer, and an optional retainer for ongoing support.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Start with a compliance gap assessment"
        secondaryCta={{ label: 'Explore the Platform', to: '/platform' }}
      />
    </>
  );
}
