import { Link } from 'react-router-dom';
import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';
import { Shield, TestTube2, Cpu, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <Seo
        title="About CyMobility | Automotive Cybersecurity Experts India"
        description="CyMobility is India's automotive cybersecurity specialist. Certified experts in UN R155, EU CRA, ISO 21434, AIS-189. ISO 27001 and ISO 9001 certified."
        path="/about/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ])}
      />
      <PageHero
        eyebrow="About CyMobility"
        title="India's Automotive Cybersecurity Specialists"
        subtitle="India-headquartered. Globally compliant. Built to help vehicle manufacturers, component suppliers, and connected device makers achieve regulatory compliance across every market they serve."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About' }]}
      />

      <Section>
        <Prose>
          <p>CyMobility is an India-headquartered automotive cybersecurity company built for a single purpose: to help vehicle manufacturers, component suppliers, and connected device makers achieve regulatory compliance, secure their products, and protect their customers across every market they serve.</p>
          <p>We operate at the intersection of three demanding worlds — automotive engineering, cybersecurity, and regulatory law. Our team brings deep, hands-on experience across each, and our work spans the full product lifecycle: from initial threat analysis and secure-by-design consulting through penetration testing, fuzz testing, compliance certification, and post-deployment vehicle security operations.</p>

          <h3>Our Mission</h3>
          <p>To make automotive cybersecurity accessible, accountable, and audit-ready for every manufacturer operating in India and the global automotive value chain. We believe compliance shouldn't be a last-minute scramble before type approval — it should be engineered into the product from day one. Everything we do is built around that conviction.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="What we do">Six core service lines, end-to-end</H2>
        <Grid cols={3}>
          <Card title="Regulatory Compliance" to="/services/regulatory-compliance">
            End-to-end support for UN R155, UN R156, EU CRA, ISO/SAE 21434, ISO 26262, AIS-189/190, TISAX, SOTIF and EU RED. Gap assessment through audit support to certification sign-off.
          </Card>
          <Card title="Security Testing & Vulnerability Analysis" to="/services/security-testing">
            In-house penetration testing of ECUs, telematics, infotainment, V2X, OTA and gateway controllers. Automated and manual fuzz testing for embedded systems.
          </Card>
          <Card title="TARA & Risk Assessment" to="/services/security-testing/tara">
            ISO/SAE 21434-aligned Threat Analysis and Risk Assessment, conducted during architecture and design phases to surface risks before they become production defects.
          </Card>
          <Card title="Threat Intelligence & VSOC" to="/services/threat-intelligence-vsoc">
            24/7 Vehicle Security Operations Centre with OSINT collection, threat actor analysis, and incident response for connected vehicle fleets.
          </Card>
          <Card title="SDV Security Advisory" to="/services/sdv-security-advisory">
            Strategic cybersecurity consulting for Software-Defined Vehicle architectures, service-oriented architecture, central compute, zonal ECUs and cloud-vehicle integration.
          </Card>
          <Card title="Security Workshops & Training" to="/services/security-workshops-training">
            Customised training programmes for OEM and Tier-1 cybersecurity, engineering, and compliance teams.
          </Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Why CyMobility">Four reasons manufacturers choose us</H2>
        <Grid cols={2}>
          <Card icon={<Shield size={22} />} title="India-first, globally compliant">
            One of the very few automotive cybersecurity companies in India with certified expertise across both Indian domestic regulations (AIS-189, AIS-190) and global mandates (UN R155, UN R156, EU CRA, ISO/SAE 21434).
          </Card>
          <Card icon={<TestTube2 size={22} />} title="In-house penetration testing lab">
            Our Bengaluru laboratory is equipped for end-to-end hardware and embedded systems testing. We do not outsource — faster turnaround, tighter confidentiality, direct accountability.
          </Card>
          <Card icon={<Cpu size={22} />} title="Proprietary security.core platform">
            Four purpose-built engines covering automated penetration testing, fuzz testing, threat intelligence, and continuous vulnerability monitoring. Not just consultants — a technology partner.
          </Card>
          <Card icon={<Award size={22} />} title="Operational maturity">
            ISO 9001:2015 certified for quality management and ISO 27001:2022 certified for information security management. Documented processes, signed NDAs, and confidentiality protocols.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Our approach">Shift left. Cover the full lifecycle.</H2>
        <Prose>
          <p><strong>Shift left.</strong> Security must be embedded in the earliest phases of product development. TARA before architecture freeze. Secure-by-design before component release. Pen testing before integration. The later a vulnerability is found, the more it costs to fix — and the more likely it is to delay type approval.</p>
          <p><strong>Cover the full lifecycle.</strong> Compliance is not a single audit. It is a continuous obligation from concept through end-of-life. We support every phase: planning, development, integration, type approval, production, in-service monitoring, and software updates.</p>
          <p><strong>Document for auditors.</strong> Every deliverable we produce is structured for regulatory acceptance — UN R155 type approval submissions, EU CRA technical files, ISO/SAE 21434 work products. Reports written for cybersecurity auditors, not just engineers.</p>
          <p><strong>Technology-agnostic but standards-aligned.</strong> We work across CAN, CAN FD, FlexRay, Ethernet AVB/TSN, LIN and SOME/IP. We test on AUTOSAR Classic and Adaptive, Linux, Android Automotive, QNX and bare-metal RTOS. Aligned with every relevant standard — but never locking clients into a single tool or vendor.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center">Who we serve</H2>
        <Prose>
          <p>Our clients include Indian and global automotive OEMs preparing for type approval under UN R155 and AIS-189; Tier-1 and Tier-2 suppliers building secure-by-design components for compliance-mandated OEM contracts; and connected device manufacturers — from telematics units to industrial IoT gateways — preparing for EU CRA conformity.</p>
          <p>See our industry pages: <Link to="/industries/automotive-oems">Automotive OEMs</Link>, <Link to="/industries/tier-1-tier-2-suppliers">Tier-1 & Tier-2 Suppliers</Link>, <Link to="/industries/connected-devices-iot">Connected Devices & IoT</Link>.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Work with India's automotive cybersecurity specialists"
        body="Start with a compliance gap assessment, or meet the team behind CyMobility."
        secondaryCta={{ label: 'Meet the Team', to: '/about/team' }}
      />
    </>
  );
}
