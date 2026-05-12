import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function IndustryOems() {
  return (
    <>
      <Seo
        title="Cybersecurity for Automotive OEMs | UN R155, AIS-189 | CyMobility"
        description="Cybersecurity for automotive OEMs — UN R155 type approval, AIS-189 India compliance, CSMS, SUMS, TARA. End-to-end programme support from Bengaluru."
        path="/industries/automotive-oems/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries/' },
          { name: 'Automotive OEMs', path: '/industries/automotive-oems/' },
        ])}
      />
      <PageHero
        eyebrow="Industries · OEMs"
        title="Cybersecurity for Automotive OEMs"
        subtitle="Without a documented, audited, certified Cybersecurity Management System — and the technical work products to evidence it — vehicles cannot be sold. CyMobility helps OEMs build, certify, and sustain the capability that approval depends on."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries' }, { name: 'Automotive OEMs' }]}
        ctas={[{ label: 'Initiate an OEM Assessment', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>For automotive OEMs, cybersecurity is no longer a back-office concern. It is a precondition for type approval. UN R155 governs vehicle type approval in every UNECE market. AIS-189 mandates the same in India. EU CRA extends compliance obligations to standalone vehicle products. ISO/SAE 21434 underpins everything as the technical methodology framework.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="The mandate">What every new vehicle programme now requires</H2>
        <Prose>
          <ul>
            <li>A documented Cybersecurity Management System (CSMS) approved under UN R155 (and AIS-189), defining organisation, processes, governance and accountability across the lifecycle.</li>
            <li>A documented Software Update Management System (SUMS) approved under UN R156 (and AIS-190), governing how software updates are authorised, integrity-protected, delivered and recorded.</li>
            <li>Vehicle-level Threat Analysis and Risk Assessment (TARA) for each vehicle type, identifying assets, threats, attack feasibility, impact, and risk treatment decisions.</li>
            <li>Verification activities — penetration testing, fuzz testing, and other appropriate methods — demonstrating cybersecurity requirements have been met.</li>
            <li>Post-production monitoring, vulnerability handling, and incident response capability covering operational life.</li>
            <li>Supplier cybersecurity management — evidence that Tier-1 and Tier-2 suppliers implement aligned cybersecurity practices.</li>
          </ul>
          <p>Failure on any one of these dimensions is a blocker to type approval. Programmes underestimating any dimension typically discover the gap during type approval submission — when remediation is most expensive and timeline impact is severest.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Why CyMobility for OEMs">Four reasons</H2>
        <Grid cols={2}>
          <Card title="End-to-end programme support">
            From initial CSMS gap assessment to type approval submission and post-approval sustained compliance, CyMobility delivers every activity OEM cybersecurity programmes require.
          </Card>
          <Card title="India + global expertise">
            One of the few automotive cybersecurity firms covering both AIS-189/190 (India) and UN R155/R156 (UNECE). One partner across every market.
          </Card>
          <Card title="In-house testing capability">
            Our Bengaluru penetration testing laboratory eliminates outsourcing dependencies and accelerates compliance testing.
          </Card>
          <Card title="Auditor-ready documentation">
            Every deliverable structured for direct submission to ARAI, iCAT, KBA, RDW, NTA and others, and to ISO/SAE 21434 auditors.
          </Card>
          <Card title="Programme leadership">
            For OEMs without an established cybersecurity function, CyMobility can embed senior practitioners as interim cybersecurity programme leads through certification.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="How we work">Four phases of OEM engagement</H2>
        <Grid cols={4}>
          <Card title="1. Gap assessment">Structured review of current cybersecurity posture, applicable regulations and product roadmap. Output: prioritised remediation roadmap with scoping, schedule and cost estimates.</Card>
          <Card title="2. Programme establishment">CSMS and SUMS design, documentation, governance forum design, and roll-out across engineering, programme management, supplier management and compliance.</Card>
          <Card title="3. Vehicle type approval support">Vehicle-level TARA, penetration testing, work product preparation, type approval submission preparation, direct authority engagement support.</Card>
          <Card title="4. Sustained compliance">Periodic re-audits, vehicle type extensions, supplier management refresh, vulnerability monitoring, threat intelligence, incident response.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Common engagements">Recent OEM project shapes</H2>
        <Grid cols={3}>
          <Card title="UN R155 CSMS implementation">For an OEM preparing for first type approval.</Card>
          <Card title="AIS-189 readiness">For Indian OEMs targeting domestic market launches.</Card>
          <Card title="Combined AIS-189 / UN R155">For Indian OEMs exporting to UNECE markets.</Card>
          <Card title="Vehicle-level pen testing">For type approval evidence packages.</Card>
          <Card title="Vehicle-level TARA">For new platform programmes.</Card>
          <Card title="SDV cybersecurity strategy">For next-generation vehicle programmes.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="From CSMS to type approval — one partner"
        secondaryCta={{ label: 'Download OEM Programme Guide', to: '/contact' }}
      />
    </>
  );
}
