import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function ThreatCore() {
  return (
    <>
      <Seo
        title="threat.core | Automotive Threat Intelligence Platform | CyMobility"
        description="threat.core delivers AI-driven automotive threat intelligence. OSINT ingestion, threat actor tracking, vulnerability correlation. Powers managed VSOC services."
        path="/platform/threat-core/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform/' },
          { name: 'threat.core', path: '/platform/threat-core/' },
        ])}
      />
      <PageHero
        eyebrow="threat.core"
        title="AI-Driven Automotive Threat Intelligence"
        subtitle="Ingests, processes and correlates threat signal from across the open internet, automotive ISACs, vulnerability databases, and underground sources — producing actionable intelligence tailored to your products."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform/' },
          { name: 'threat.core' },
        ]}
        ctas={[{ label: 'Request a Demo', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>threat.core is CyMobility's threat intelligence engine, purpose-built for the automotive ecosystem. It ingests, processes and correlates threat signal from across the open internet, automotive ISACs, vulnerability databases, and underground sources — producing actionable intelligence tailored to your specific products and threat landscape.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Capabilities">What threat.core delivers</H2>
        <Grid cols={2}>
          <Card title="OSINT ingestion">Automated collection from open-source intelligence feeds — security disclosures, conference research, vulnerability databases (NVD, OSV, CISA KEV), automotive industry sources, curated underground monitoring.</Card>
          <Card title="Threat actor tracking">Persistent profiles of threat actors targeting automotive and connected mobility — their TTPs, tooling, and recent activity.</Card>
          <Card title="Vulnerability correlation">When a new CVE is disclosed, threat.core correlates it against your SBOM to immediately identify which of your products are affected.</Card>
          <Card title="Real-time visualisation">Dashboards covering active threats, severity trending, exposure by product line, vulnerability status, incident timelines.</Card>
          <Card title="FastAPI backend, extensible architecture">REST APIs for integration with your SIEM, ticketing system, or executive reporting tools.</Card>
          <Card title="Alerting">Configurable alerts on threats matching your portfolio, escalating from email notifications to incident-level escalation.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Use cases">Where threat.core fits</H2>
        <Grid cols={3}>
          <Card title="Managed VSOC">Powering CyMobility's managed VSOC service.</Card>
          <Card title="In-house VSOC">In-house VSOC operations for OEMs with their own analysts.</Card>
          <Card title="SIEM integration">Integration into existing SIEM platforms for unified security operations.</Card>
          <Card title="Regulatory evidence">Regulatory reporting evidence (UN R155 monitoring obligations, EU CRA vulnerability awareness).</Card>
          <Card title="Executive automation">Executive briefing automation.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Integration">Works with your stack</H2>
        <Prose>
          <p>threat.core integrates with major SIEM platforms (Splunk, Azure Sentinel, Chronicle, IBM QRadar), ticketing systems (Jira, ServiceNow, Zendesk), and communication channels (Slack, Microsoft Teams, email).</p>
        </Prose>
      </Section>

      <CTABanner
        title="Real-time automotive threat intelligence"
        secondaryCta={{ label: 'Explore VSOC Services', to: '/services/threat-intelligence-vsoc' }}
      />
    </>
  );
}
