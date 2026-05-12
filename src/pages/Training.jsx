import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Training() {
  const path = '/services/security-workshops-training/';
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Training | ISO 21434, UN R155 | CyMobility"
        description="Automotive cybersecurity training and workshops for OEM and Tier-1 teams. ISO/SAE 21434, UN R155, EU CRA, TARA methodology. Customised programmes."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Security Workshops & Training', path },
          ]),
          serviceJsonLd({ name: 'Security Workshops & Training', description: 'Customised automotive cybersecurity training programmes for OEMs, suppliers and IoT manufacturers.', path }),
        ]}
      />
      <PageHero
        eyebrow="Workshops & training"
        title="Cybersecurity Training Built by Working Practitioners"
        subtitle="Customised programmes for OEMs, Tier-1 suppliers and connected device manufacturers — from technical practitioner training to executive briefings. Tailored to the audience, the products, and the regulatory context."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Workshops & Training' }]}
        ctas={[{ label: 'Request a Training Programme', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Cybersecurity capability is a function of the people who deliver it. Process documentation and tooling matter, but they cannot substitute for engineers, compliance specialists, and leaders who understand the regulatory landscape, the technical methodology, and the practical realities of automotive cybersecurity.</p>
          <p>CyMobility delivers customised cybersecurity training programmes for OEMs, Tier-1 suppliers and connected device manufacturers — from technical practitioner training through to executive briefings. Every programme is tailored to the audience, the products, and the regulatory context.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Topics">Training topics</H2>
        <Grid cols={3}>
          <Card title="ISO/SAE 21434 fundamentals">Standard structure, work products, lifecycle activities, integration with ISO 26262. For engineering, compliance and programme management.</Card>
          <Card title="UN R155 / UN R156 implementation">CSMS and SUMS design, type approval submission, Approval Authority engagement, supplier interface management. For cybersecurity leadership and compliance teams.</Card>
          <Card title="EU CRA for connected products">Scope determination, classification, conformity assessment routes, technical file structure, vulnerability handling, post-market obligations.</Card>
          <Card title="AIS-189 / AIS-190 for India OEMs">India-specific regulatory context, Approval Authority engagement, alignment with UN R155/R156.</Card>
          <Card title="TARA methodology">Hands-on TARA training including item definition, asset identification, threat scenario development, attack feasibility rating, risk treatment. For cybersecurity engineers and architects.</Card>
          <Card title="Automotive penetration testing fundamentals">Vehicle attack surface, ECU testing methodology, CAN/Ethernet protocol testing, embedded systems reverse engineering. For security engineers and test specialists.</Card>
          <Card title="SDV cybersecurity architecture">Service-oriented architecture security, central compute and zonal ECU design, vehicle-cloud integration. For vehicle architects and platform teams.</Card>
          <Card title="Executive cybersecurity briefings">Regulatory landscape, business risk, organisational readiness. For C-suite, board members, and senior engineering leadership.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Delivery">How we deliver</H2>
        <Grid cols={4}>
          <Card title="On-site workshops">Multi-day intensive workshops at your engineering centre, with hands-on exercises tailored to your products.</Card>
          <Card title="Virtual instructor-led">Live online training across multiple sessions, suitable for distributed teams.</Card>
          <Card title="Hybrid programmes">Self-paced foundational content combined with live instructor-led advanced sessions.</Card>
          <Card title="Custom curricula">Multi-track curricula tailored to roles (engineer, architect, programme manager, compliance lead, executive).</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Why our training">Built by practitioners</H2>
        <Prose>
          <p>CyMobility training is delivered by working practitioners — the same consultants and engineers who lead client compliance programmes and penetration tests. This means training content is grounded in current regulatory practice, current attack research, and current OEM expectations — not in textbook scenarios.</p>
          <p>Every programme includes hands-on exercises (TARA worksheets, attack path development, regulatory mapping exercises) and uses real automotive examples (sanitised) rather than abstract theoretical cases.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Build cybersecurity capability that compounds"
        secondaryCta={{ label: 'Download Training Catalogue', to: '/contact' }}
      />
    </>
  );
}
