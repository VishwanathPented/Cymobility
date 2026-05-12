import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Sdv() {
  const path = '/services/sdv-security-advisory/';
  return (
    <>
      <Seo
        title="Software-Defined Vehicle (SDV) Cybersecurity Advisory | CyMobility"
        description="SDV cybersecurity advisory — service-oriented architecture, central compute, zonal ECUs, vehicle-cloud integration. Securing next-generation automotive architectures."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'SDV Security Advisory', path },
          ]),
          serviceJsonLd({ name: 'SDV Security Advisory', description: 'Strategic cybersecurity advisory for Software-Defined Vehicle architectures.', path }),
        ]}
      />
      <PageHero
        eyebrow="SDV advisory"
        title="Software-Defined Vehicle Security Advisory"
        subtitle="The SDV is the most significant architectural transition in automotive history — and it breaks the assumptions traditional automotive cybersecurity was built on. We design cybersecurity in from the start."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'SDV Security Advisory' }]}
        ctas={[{ label: 'Request an SDV Engagement', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>The Software-Defined Vehicle represents the most significant architectural transition in automotive history. Traditional vehicles with dozens of fixed-function ECUs are giving way to architectures built around central compute platforms, zonal ECUs, service-oriented software stacks, and tight vehicle-to-cloud integration. With this transformation comes a fundamental change in the cybersecurity threat model.</p>
          <p>CyMobility's SDV Security Advisory practice exists to help OEMs and Tier-1 suppliers navigate this transition — designing cybersecurity into SDV architectures from the start, rather than retrofitting it once vulnerabilities surface.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="The shift">Why SDV changes automotive cybersecurity</H2>
        <Prose>
          <p>Traditional automotive cybersecurity was built around the assumption of relatively static architectures: an ECU with fixed software, communicating over a known protocol, with discrete update events. SDV architecture breaks every one of those assumptions.</p>
          <ul>
            <li><strong>Software changes continuously.</strong> Functions are deployed, updated and retired throughout vehicle life. Each change is a new attack surface to evaluate.</li>
            <li><strong>Functions are decoupled from hardware.</strong> A central compute platform may host functions that previously ran on dedicated ECUs. Cybersecurity boundaries that were physical become logical — and logical boundaries are harder to enforce.</li>
            <li><strong>Vehicle-to-cloud is continuous.</strong> SDV functions frequently depend on cloud services. The vehicle is no longer a self-contained system; it is one node in a distributed application architecture.</li>
            <li><strong>Third-party software is mainstream.</strong> SDV platforms increasingly host third-party applications — each is a new trust boundary.</li>
            <li><strong>Update cadence is high.</strong> Functions may receive multiple updates per year, each requiring cybersecurity re-evaluation under SUMS / UN R156 frameworks.</li>
          </ul>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Coverage">What we advise on</H2>
        <Grid cols={3}>
          <Card title="SDV cybersecurity architecture">Service-oriented architecture security, central compute platform hardening, zonal ECU design, hypervisor security, container and microservice security, secure inter-domain communication.</Card>
          <Card title="Vehicle-to-cloud security">API security, mutual authentication, token lifecycle management, secure delivery of cloud-hosted functions, cloud platform hardening, vehicle telemetry data governance.</Card>
          <Card title="Third-party application governance">Application security models, sandboxing, permissions, secure update delivery, application authentication, marketplace governance.</Card>
          <Card title="Continuous deployment cybersecurity">DevSecOps for SDV — integrating security testing, vulnerability scanning, and TARA refresh into CI pipelines.</Card>
          <Card title="SUMS for SDV">SUMS designed for high-frequency, function-level updates — rather than the monolithic update cadence of traditional vehicles.</Card>
          <Card title="Cybersecurity at function level">Per-function TARA, threat modelling and verification — necessary when functions are deployed independently and updated asynchronously.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Engagement models">How we engage</H2>
        <Grid cols={4}>
          <Card title="SDV cybersecurity strategy">Multi-week engagement producing a documented SDV cybersecurity strategy aligned to platform roadmap and target markets.</Card>
          <Card title="Architecture review">In-depth technical review of proposed or existing SDV architecture with specific cybersecurity recommendations.</Card>
          <Card title="Programme advisory retainer">Embedded senior expertise supporting your SDV programme on an ongoing basis — typically 1–3 days per week of senior consultant time.</Card>
          <Card title="SDV-specific TARA">Threat analysis and risk assessment tailored to SDV characteristics: continuous deployment, third-party applications, vehicle-cloud distribution.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="Design cybersecurity in. Don't retrofit it."
        secondaryCta={{ label: 'Download SDV Cybersecurity Reference', to: '/contact' }}
      />
    </>
  );
}
