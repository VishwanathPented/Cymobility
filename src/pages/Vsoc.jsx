import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Vsoc() {
  const path = '/services/threat-intelligence-vsoc/';
  return (
    <>
      <Seo
        title="Vehicle Security Operations Centre (VSOC) & Threat Intelligence | CyMobility"
        description="24/7 VSOC monitoring and automotive threat intelligence. Aligned to UN R155 post-production monitoring requirements. OSINT, threat hunting, incident response."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Threat Intelligence & VSOC', path },
          ]),
          serviceJsonLd({ name: 'Threat Intelligence and VSOC', description: '24/7 Vehicle Security Operations Centre and automotive threat intelligence service.', path }),
        ]}
      />
      <PageHero
        eyebrow="Threat intelligence · VSOC"
        title="24/7 Vehicle Security Operations Centre"
        subtitle="UN R155, EU CRA, AIS-189 and ISO/SAE 21434 all impose ongoing post-production obligations. Monitor, analyse, respond — at scale, around the clock."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Threat Intelligence & VSOC' }]}
        ctas={[{ label: 'Request VSOC Service', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>UN R155, EU CRA, AIS-189 and ISO/SAE 21434 are not one-time certifications. Each imposes ongoing post-production obligations: monitor for new threats, respond to vulnerabilities, share information with the cybersecurity community, and demonstrate that your products remain secure across their full service life.</p>
          <p>CyMobility's Threat Intelligence and Vehicle Security Operations Centre (VSOC) services exist to fulfil those obligations. We deliver continuous monitoring of the threat landscape affecting your products, real-time analysis of vulnerabilities and exploitation activity, and incident response capability — alongside the documented reporting that regulators expect.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Why now">VSOC is no longer optional</H2>
        <Prose>
          <p>UN R155 Annex 5 lists explicit post-production cybersecurity activities that manufacturers must perform: monitor for threats and vulnerabilities, conduct analysis, respond appropriately, and exchange information. EU CRA mandates that manufacturers report actively-exploited vulnerabilities to ENISA within 24 hours of awareness and respond to incidents.</p>
          <p>These obligations require continuous capability — not just a process document. They require analysts watching, tooling collecting, and a response pipeline ready to activate. For most OEMs and connected device manufacturers, building this capability from scratch is impractical. Outsourcing it to a specialist VSOC provider is the standard model — and CyMobility delivers exactly that.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="What we monitor">Coverage</H2>
        <Grid cols={3}>
          <Card title="Threat actor activity">Automotive-targeted threat actors, TTPs, emerging campaigns. Dark web and underground forum monitoring for vehicle exploits, stolen keys, aftermarket bypass tools.</Card>
          <Card title="Vulnerability intelligence">New CVEs affecting automotive software components, open-source libraries, AUTOSAR stacks, infotainment platforms — mapped against your SBOM.</Card>
          <Card title="Exploit research">Academic, industry, and conference-disclosed automotive attack research. Translation of theoretical research into concrete risk assessments for your portfolio.</Card>
          <Card title="OEM & ecosystem activity">Public disclosures from peer OEMs, ISACs, regulators, standards bodies. Indirect indicators (recalls, software updates, regulatory notices).</Card>
          <Card title="Product-specific attack surface">Custom monitoring of mentions, exploits and IoCs related to your vehicle platforms, ECUs, telematics services and connected device portfolio.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Service components">What VSOC delivers</H2>
        <Grid cols={3}>
          <Card title="24/7 monitoring">Continuous observation of threat feeds, OSINT, your in-service vehicle telemetry, and your SBOM-mapped vulnerability landscape.</Card>
          <Card title="Triage & analysis">Filtering of high-volume signal into actionable intelligence. Severity assessment, applicability analysis, exploitability evaluation.</Card>
          <Card title="Briefing & reporting">Weekly briefings, monthly executive reports, immediate alerts for critical issues. Structured for governance forums and regulatory reporting.</Card>
          <Card title="Incident response">Technical analysis, containment recommendations, communications support, regulatory notification assistance.</Card>
          <Card title="Regulatory liaison">Support with ENISA reporting (EU CRA), CSMS audit evidence (UN R155), Approval Authority queries.</Card>
          <Card title="Powered by threat.core" to="/platform/threat-core">CyMobility's proprietary AI-driven threat intelligence engine. Real-time OSINT, threat actor tracking, vulnerability correlation, dashboards.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="Continuous monitoring. Documented response. Regulator-ready evidence."
        secondaryCta={{ label: 'Explore threat.core Platform', to: '/platform/threat-core' }}
      />
    </>
  );
}
