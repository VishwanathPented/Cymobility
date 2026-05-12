import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function PlatformOverview() {
  return (
    <>
      <Seo
        title="security.core | Automotive Cybersecurity Platform | CyMobility"
        description="security.core is CyMobility's proprietary automotive cybersecurity platform. Four engines for pen testing, fuzz testing, threat intelligence and vulnerability monitoring."
        path="/platform/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform/' },
        ])}
      />
      <PageHero
        eyebrow="security.core platform"
        title="One Platform. Four Engines. Full Cybersecurity Lifecycle."
        subtitle="CyMobility's proprietary automotive cybersecurity platform — purpose-built to deliver the technical activities that compliance, certification, and continuous security require."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Platform' }]}
        ctas={[{ label: 'Request a Platform Demo', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>security.core is CyMobility's proprietary automotive cybersecurity platform — purpose-built to deliver the technical activities that compliance, certification, and continuous security require. Where most automotive cybersecurity firms rely entirely on services delivery, CyMobility combines services with proprietary technology — giving clients faster turnaround, integrated reporting, and access to capability that scales beyond consultant hours.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="The four engines">Specialised modules for every activity</H2>
        <Grid cols={2}>
          <Card title="pentest.core — Automated Penetration Testing" to="/platform/pentest-core">
            AI-powered automated penetration testing for hardware and embedded systems. Test orchestration, SSH-based deployment to target devices, capture and analysis of test outputs, automated pass/fail determination, and AI-generated compliance reports.
          </Card>
          <Card title="fuzz.core — Intelligent Fuzz Testing" to="/platform/fuzz-core">
            Coverage-guided and grammar-aware fuzzing for automotive embedded software. Automated input mutation, coverage tracking, crash collection and triage, with reporting structured for ISO/SAE 21434 work products.
          </Card>
          <Card title="threat.core — AI-Driven Threat Intelligence" to="/platform/threat-core">
            Real-time collection, processing and visualisation of cybersecurity threats relevant to the automotive ecosystem. OSINT ingestion, threat actor tracking, vulnerability correlation against your SBOM, actionable intelligence dashboards.
          </Card>
          <Card title="vulnerability.core — Continuous Vulnerability Monitoring" to="/platform/vulnerability-core">
            Automated SBOM and HBOM-based scanner that continuously monitors software and hardware components for known vulnerabilities. EU CRA-aligned reporting, email alerts, integration into release governance.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Why a platform">Speed, consistency, continuity</H2>
        <Grid cols={3}>
          <Card title="Speed">Manual execution of pen tests, fuzz campaigns, and threat monitoring is slow. Platform automation accelerates routine activities by an order of magnitude — letting human specialists focus on work that genuinely requires expert judgment.</Card>
          <Card title="Consistency">Automated tooling executes the same procedure the same way every time. For regulatory compliance, where methodology consistency matters, this is a significant advantage.</Card>
          <Card title="Continuity">Threat monitoring, vulnerability scanning and CI-integrated fuzz testing only deliver value when they run continuously. Services-only models cannot deliver continuous activity economically. Platform capability can.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Deployment">Three models</H2>
        <Grid cols={3}>
          <Card title="Managed service">CyMobility operates the platform on your behalf and delivers outcomes — pen test reports, threat intelligence briefings, vulnerability alerts. Standard option.</Card>
          <Card title="Platform subscription">You access the platform directly. CyMobility provides onboarding, training and ongoing support. Suitable for OEMs operating their own VSOC or in-house testing teams.</Card>
          <Card title="Hybrid">Common: CyMobility-managed VSOC on threat.core combined with client-operated vulnerability.core for in-house release governance.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Integration">Works with your existing stack</H2>
        <Prose>
          <p>security.core integrates with the tools your engineering and security organisations already use:</p>
          <ul>
            <li>PLM and ALM platforms (SystemWeaver, Polarion, Windchill, Codebeamer)</li>
            <li>SIEM and SOAR (Splunk, Azure Sentinel, Chronicle, IBM QRadar)</li>
            <li>Code repositories and CI systems (Git, GitHub, GitLab, Jenkins, Bitbucket)</li>
            <li>Automotive test environments (HIL/SIL platforms)</li>
            <li>Ticketing systems (Jira, ServiceNow)</li>
          </ul>
        </Prose>
      </Section>

      <CTABanner
        title="See the platform in action"
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </>
  );
}
