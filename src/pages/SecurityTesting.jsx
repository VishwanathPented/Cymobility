import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function SecurityTesting() {
  const path = '/services/security-testing/';
  return (
    <>
      <Seo
        title="Automotive Security Testing | Pen Testing, Fuzz Testing, TARA | CyMobility"
        description="Automotive security testing services — penetration testing, fuzz testing, TARA, vulnerability analysis for ECUs, telematics, V2X, OTA. In-house Bengaluru lab."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Security Testing', path },
          ]),
          serviceJsonLd({ name: 'Automotive Security Testing', description: 'Penetration testing, fuzz testing, TARA, vulnerability analysis for automotive systems and components from an in-house Bengaluru lab.', path }),
        ]}
      />
      <PageHero
        eyebrow="Security testing"
        title="Security Testing & Vulnerability Analysis"
        subtitle="You cannot certify what you have not tested. From our in-house Bengaluru lab: penetration testing of vehicle systems and components, fuzz testing of embedded software, vulnerability scanning, TARA-aligned verification."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'Security Testing' }]}
        ctas={[{ label: 'Request a Testing Engagement', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>You cannot certify what you have not tested. Cybersecurity compliance — under UN R155, EU CRA, AIS-189 or ISO/SAE 21434 — fundamentally depends on demonstrating that your products have been subjected to rigorous, methodical security testing and that identified vulnerabilities have been addressed.</p>
          <p>CyMobility's in-house Bengaluru laboratory delivers the full spectrum of automotive security testing: penetration testing of vehicle systems and components, fuzz testing of embedded software, vulnerability scanning of source code and binaries, and TARA-aligned verification activities. Every engagement produces documentation structured for regulatory acceptance.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Why in-house">Why testing in our own lab matters</H2>
        <Prose>
          <p>Most automotive cybersecurity firms in India outsource physical pen testing to offshore vendors or to shared third-party laboratories. This creates four problems: extended turnaround times as engagements wait for capacity at shared facilities; reduced confidentiality as intellectual property travels across multiple organisations; loss of accountability when issues arise mid-engagement; and limited ability to iterate on findings collaboratively with the test team.</p>
          <p>CyMobility operates its own physical laboratory in Bengaluru with hardware, instrumentation and engineering capacity dedicated to client engagements. This means faster scheduling, tighter confidentiality, single-team accountability, and direct working relationships between your engineers and ours.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Our service lines">Four kinds of security testing</H2>
        <Grid cols={2}>
          <Card title="Penetration Testing" to="/services/security-testing/penetration-testing">
            Manual and automated penetration testing of automotive systems and components — from individual ECUs to full vehicle architectures. Covers hardware attack surfaces, communication interfaces, software vulnerabilities, protocol implementations.
          </Card>
          <Card title="Fuzz Testing" to="/services/security-testing/fuzz-testing">
            Automated injection of malformed, unexpected and randomised inputs to surface crashes, memory corruption, protocol violations and security-relevant defects. Targeted at communication interfaces, parsers, and protocol stacks.
          </Card>
          <Card title="TARA — Threat Analysis & Risk Assessment" to="/services/security-testing/tara">
            ISO/SAE 21434-aligned TARA for vehicles and components, conducted during architecture, design and development phases. Threat scenarios, attack feasibility ratings, risk evaluations, treatment recommendations.
          </Card>
          <Card title="Vulnerability Analysis & Scanning">
            Static and dynamic analysis of automotive software — SBOM extraction, known-vulnerability scanning of binaries and source code, secure code review, ongoing monitoring of in-service software against newly disclosed CVEs.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="What we test">Full attack surface coverage</H2>
        <Prose>
          <p>CyMobility's lab is equipped to test the full vehicle attack surface:</p>
          <ul>
            <li><strong>Electronic Control Units (ECUs)</strong> — All categories: powertrain, chassis, body, infotainment, ADAS, gateway. Hardware attack surfaces (JTAG, UART, SPI, I2C debug interfaces, side-channel attacks), firmware extraction and analysis, secure boot bypass, memory corruption.</li>
            <li><strong>Vehicle communication networks</strong> — CAN, CAN FD, FlexRay, LIN, Automotive Ethernet (100BASE-T1, 1000BASE-T1), TSN. Protocol implementation testing, MAC bypass, gateway segmentation, IDS effectiveness.</li>
            <li><strong>Telematics Units (TCUs)</strong> — Cellular (2G/3G/4G/5G), Bluetooth, Wi-Fi, GNSS spoofing resilience, modem firmware analysis, backend API testing, certificate validation.</li>
            <li><strong>Infotainment & IVI systems</strong> — Android Automotive, Linux IVI, QNX head units, CarPlay/Android Auto interfaces, USB/SD attack vectors, browser sandbox security.</li>
            <li><strong>ADAS & autonomous driving systems</strong> — Sensor input manipulation (camera, LiDAR, radar), perception stack testing, V2X (DSRC, C-V2X) message authentication and replay protection.</li>
            <li><strong>OTA update pipelines</strong> — Update authentication, signature validation, rollback protection, secure delivery channels, key management.</li>
            <li><strong>Gateway controllers</strong> — Network segmentation, firewall rule validation, cross-network filtering, diagnostic interface security.</li>
            <li><strong>V2X & V2G communication</strong> — DSRC, C-V2X, ISO 15118 (Plug & Charge), MACsec, certificate handling.</li>
            <li><strong>Cloud & mobile app interfaces</strong> — APIs, authentication, token handling, mobile reverse engineering, backend authorisation flaws.</li>
          </ul>
        </Prose>
      </Section>

      <Section>
        <H2 eyebrow="Compliance mapping">Aligned to every framework</H2>
        <Prose>
          <p>CyMobility security testing maps explicitly to:</p>
          <ul>
            <li>ISO/SAE 21434 work products (cybersecurity verification, validation, attack feasibility rating)</li>
            <li>UN R155 vehicle type approval evidence requirements</li>
            <li>AIS-189 testing requirements for India type approval</li>
            <li>EU CRA technical file documentation</li>
            <li>TISAX assessment evidence</li>
            <li>OEM-specific cybersecurity test specifications</li>
          </ul>
        </Prose>
      </Section>

      <CTABanner
        title="Testing is the most direct evidence of cybersecurity posture"
        secondaryCta={{ label: 'Explore security.core Platform', to: '/platform' }}
      />
    </>
  );
}
