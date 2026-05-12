import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Consulting() {
  const path = '/services/automotive-cybersecurity-consulting/';
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Consulting India | CyMobility"
        description="Strategic automotive cybersecurity consulting for OEMs and Tier-1 suppliers. CSMS, secure development, regulatory readiness, programme leadership."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Cybersecurity Consulting', path },
          ]),
          serviceJsonLd({ name: 'Automotive Cybersecurity Consulting', description: 'Strategic automotive cybersecurity consulting for OEMs and suppliers — CSMS, secure development, programme leadership.', path }),
        ]}
      />
      <PageHero
        eyebrow="Cybersecurity consulting"
        title="Strategy, CSMS, Programme Leadership"
        subtitle="Most automotive cybersecurity programmes don't fail because of technical incompetence — they fail because the organisation lacks a strategy. We close the strategic gap."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Cybersecurity Consulting' }]}
        ctas={[{ label: 'Request a Consulting Engagement', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Most automotive cybersecurity programmes do not fail because of technical incompetence. They fail because the organisation lacks a strategy — no clear mapping of which regulations apply to which products, no defined Cybersecurity Management System, no documented processes, no accountable owners. CyMobility's consulting practice exists to fix that.</p>
          <p>We work directly with engineering leadership, programme managers, and compliance officers to design, build and operate the cybersecurity organisation your products require — from initial strategy through to certification readiness.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="When you need consulting">Common triggers</H2>
        <Prose>
          <p>You are building or shipping a connected vehicle or component, and one or more of the following is true:</p>
          <ul>
            <li>You have a UN R155, EU CRA, or AIS-189 deadline approaching.</li>
            <li>Your OEM customer has asked for ISO/SAE 21434 compliance evidence and you do not have it.</li>
            <li>Your cybersecurity activities are fragmented across teams with no central ownership.</li>
            <li>You cannot answer the question "what is our CSMS?" with documented evidence.</li>
            <li>You are entering a new market (Europe, India, Japan) and need to map the regulatory obligations.</li>
            <li>You are launching a Software-Defined Vehicle programme and have no cybersecurity architecture yet.</li>
          </ul>
          <p>In any of these cases, the gap is strategic, not just technical. We close it.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Engagement scope">What our consulting engagements cover</H2>
        <Grid cols={3}>
          <Card title="Cybersecurity strategy & roadmap">Document products, markets, applicable regulations, current and target state. 12–24 month roadmap with prioritised initiatives, owners and budgets.</Card>
          <Card title="CSMS design & implementation">Cybersecurity Management System aligned to UN R155 and ISO/SAE 21434. Processes, roles, governance forums, KPIs, document control.</Card>
          <Card title="SUMS design & implementation">Software Update Management System aligned to UN R156 and AIS-190. Update authorisation, integrity, distribution, audit logging.</Card>
          <Card title="Secure development lifecycle">Integrate cybersecurity into V-model, agile or hybrid product development. Gates, work products, traceability across requirements, design, implementation, verification.</Card>
          <Card title="Regulatory mapping">Map specific products (vehicle, ECU, telematics, IoT gateway) against every applicable regulation across every target market.</Card>
          <Card title="Programme leadership">Embedded senior consultant as interim Head of Cybersecurity or programme lead for the duration of certification.</Card>
          <Card title="Audit readiness">Mock audits, gap remediation, evidence package preparation, direct support during external audits.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Our approach">Senior practitioners, transparent delivery</H2>
        <Prose>
          <p>CyMobility consulting is delivered by certified senior practitioners — not by junior consultants overseen from a partner office. Every engagement is led by a named individual who is accountable to the client from kickoff to closure. We operate transparently with weekly status reporting, written deliverables, and access to our broader technical team (penetration testers, TARA specialists, platform engineers) when the engagement requires it.</p>
        </Prose>
      </Section>

      <CTABanner
        title="The right strategy turns compliance into a competitive advantage"
        secondaryCta={{ label: 'Explore Regulatory Compliance', to: '/services/regulatory-compliance' }}
      />
    </>
  );
}
