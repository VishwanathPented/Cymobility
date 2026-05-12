import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team | Automotive Cybersecurity Experts | CyMobility"
        description="Meet CyMobility's automotive cybersecurity team — certified experts in UN R155, ISO/SAE 21434, EU CRA and AIS-189 with hands-on OEM and Tier-1 experience."
        path="/about/team/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
          { name: 'Team', path: '/about/team/' },
        ])}
      />
      <PageHero
        eyebrow="Our team"
        title="The Team Behind CyMobility"
        subtitle="Certified consultants and engineers operating at the intersection of automotive engineering, cybersecurity, and regulatory law."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }, { name: 'Team' }]}
      />

      <Section>
        <Prose>
          <p>Automotive cybersecurity is not a function you can hire generically. It requires people who understand embedded hardware, vehicle networks, software architecture, and the regulatory language of UNECE, the European Commission, and India's Automotive Industry Standards Committee — and who can move fluently between all four.</p>
          <p>CyMobility's team is built around that intersection. Our consultants and engineers hold certifications across ISO/SAE 21434, ISO 27001, ISO 9001, TISAX, and SOTIF, and bring direct experience from Indian and global OEMs, Tier-1 suppliers, test laboratories, and standards bodies.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Practice areas">Where our specialists work</H2>
        <Grid cols={2}>
          <Card title="Cybersecurity Engineering">
            Penetration testers, fuzz testing specialists, hardware security researchers and embedded systems engineers leading our lab operations.
          </Card>
          <Card title="Regulatory & Compliance Practice">
            Certified lead engineers and auditors specialising in UN R155/R156, EU CRA, ISO/SAE 21434, AIS-189/190 and TISAX.
          </Card>
          <Card title="Platform Engineering">
            Software, AI/ML and infrastructure engineers building and maintaining the security.core platform and its four engines.
          </Card>
          <Card title="Threat Intelligence & VSOC Analysts">
            OSINT specialists, threat researchers, and incident response analysts staffing our Vehicle Security Operations Centre.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Hiring">Join CyMobility</H2>
        <Prose>
          <p>CyMobility hires automotive cybersecurity specialists, embedded systems researchers, and compliance experts on an ongoing basis. If you are an experienced professional in any of these domains, write to <a href="mailto:careers@cymobility.com">careers@cymobility.com</a>.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Work with our team"
        secondaryCta={{ label: 'See open roles', to: '/contact' }}
      />
    </>
  );
}
