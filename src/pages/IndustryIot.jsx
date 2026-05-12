import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function IndustryIot() {
  return (
    <>
      <Seo
        title="Cybersecurity for Connected Devices & IoT | EU CRA | CyMobility"
        description="Cybersecurity for connected devices and IoT manufacturers — EU CRA conformity, SBOM scanning, penetration testing, vulnerability handling. 2027 deadline ready."
        path="/industries/connected-devices-iot/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries/' },
          { name: 'Connected Devices & IoT', path: '/industries/connected-devices-iot/' },
        ])}
      />
      <PageHero
        eyebrow="Industries · Connected devices & IoT"
        title="EU CRA Conformity for Connected Devices and IoT Manufacturers"
        subtitle="EU CRA enforcement begins 11 December 2027. The most consequential cybersecurity regulation in the world for connected products. CyMobility delivers full conformity programmes for IoT manufacturers."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries' }, { name: 'Connected Devices & IoT' }]}
        ctas={[{ label: 'Request an EU CRA Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>EU CRA enforcement begins 11 December 2027. From that date, every "product with digital elements" sold in the EU — and that includes virtually every connected device, IoT gateway, smart home product, industrial controller, and connected accessory — must demonstrate cybersecurity conformity or face fines reaching €15 million or 2.5% of global annual turnover.</p>
          <p>For IoT and connected device manufacturers, this is the most significant cybersecurity regulation in the world. Unlike automotive — where vehicles are governed primarily by UN R155 and the EU GSR — most IoT products have no sector-specific framework that pre-empts EU CRA. The essential cybersecurity requirements apply in full.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Scope">Products in EU CRA scope</H2>
        <Grid cols={3}>
          <Card title="Consumer IoT">Smart home products (cameras, locks, doorbells, thermostats, appliances), wearables, connected toys, connected health devices.</Card>
          <Card title="Industrial IoT and OT">Sensors, gateways, PLCs, industrial routers, edge computing devices, building automation.</Card>
          <Card title="Networking equipment">Routers, switches, access points, firewalls (consumer and SMB segments).</Card>
          <Card title="Connected mobility accessories">Aftermarket telematics, OBD dongles, connected fleet products, charging equipment, connected motorcycle accessories.</Card>
          <Card title="Software-only products">Operating systems, firmware, applications shipped as components of in-scope products.</Card>
        </Grid>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>If a product processes data, connects to a network, or includes embedded software for non-trivial functions, it is likely in scope unless explicitly excluded.</p>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Conformity routes">EU CRA product classes</H2>
        <Grid cols={3}>
          <Card title="Default class">Most consumer and general IoT products. Manufacturers can self-assess conformity. Internal control of production. EU Declaration of Conformity required. Technical file maintained.</Card>
          <Card title="Class I (important products)">Higher-risk categories — networking products, identity management. Self-assessment permitted if harmonised standards are fully applied; otherwise notified body involvement (Module B + C).</Card>
          <Card title="Class II (critical products)">Highest-risk categories. Mandatory notified body conformity assessment (Module H — full quality assurance, or equivalent).</Card>
        </Grid>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>CyMobility helps you determine which class your products fall into and design the most efficient conformity route.</p>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Programme">Our five-phase EU CRA programme</H2>
        <Grid cols={5}>
          <Card title="1. Scope & classification">Catalogue portfolio, determine EU CRA applicability, classify in-scope products (default/Class I/Class II), prepare portfolio compliance roadmap.</Card>
          <Card title="2. Gap assessment">Detailed assessment per in-scope product against EU CRA essential requirements. Prioritised remediation plan per product.</Card>
          <Card title="3. Technical activities">SBOM generation and ongoing vulnerability monitoring (vulnerability.core), penetration testing (pentest.core and our lab), cybersecurity risk assessment, security update process implementation.</Card>
          <Card title="4. Documentation & conformity">Technical file preparation, EU Declaration of Conformity, CE marking integration, notified body engagement where required.</Card>
          <Card title="5. Sustained compliance">Continuous vulnerability monitoring, security update delivery, incident reporting capability (24-hour vulnerability reporting to ENISA), support period management.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Why CyMobility for IoT">Automotive-grade rigour applied to IoT</H2>
        <Grid cols={2}>
          <Card title="Automotive-grade rigour applied to IoT">CyMobility's automotive cybersecurity practice operates at the highest methodological rigour — driven by UN R155 and ISO/SAE 21434 expectations. We bring that rigour to IoT engagements.</Card>
          <Card title="Full-stack capability">SBOM scanning, penetration testing, technical documentation, notified body liaison — every activity EU CRA conformity requires.</Card>
          <Card title="Right-sized for IoT manufacturers">Many IoT manufacturers are mid-sized or growth-stage companies for whom enterprise consulting pricing is unworkable. Project-based engagements and platform subscriptions scale.</Card>
          <Card title="Continuous monitoring built in">vulnerability.core delivers continuous monitoring that EU CRA's post-market obligations require — for the full support period, automatically.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="EU CRA enforcement is 11 December 2027 — preparation starts now"
        secondaryCta={{ label: 'Download EU CRA Readiness Checklist for IoT', to: '/contact' }}
      />
    </>
  );
}
