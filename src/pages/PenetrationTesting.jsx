import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function PenetrationTesting() {
  const path = '/services/security-testing/penetration-testing/';
  return (
    <>
      <Seo
        title="Automotive Penetration Testing India | ECU, TCU, IVI | CyMobility"
        description="Automotive penetration testing for ECUs, telematics units, infotainment, V2X, OTA pipelines. In-house Bengaluru lab. UN R155 and ISO 21434 aligned reporting."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Security Testing', path: '/services/security-testing/' },
            { name: 'Penetration Testing', path },
          ]),
          serviceJsonLd({ name: 'Automotive Penetration Testing', description: 'Penetration testing of ECUs, TCUs, IVI, V2X, OTA pipelines. UN R155 and ISO/SAE 21434 aligned.', path }),
        ]}
      />
      <PageHero
        eyebrow="Penetration testing"
        title="Automotive Penetration Testing"
        subtitle="Simulates the actions of a real attacker against a vehicle, component or system. The most direct evidence of security posture — explicitly required for UN R155, ISO/SAE 21434, and EU CRA conformity."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Security Testing', path: '/services/security-testing/' },
          { name: 'Penetration Testing' },
        ]}
        ctas={[{ label: 'Request a Penetration Test', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Penetration testing simulates the actions of a real attacker against a vehicle, component or system to identify vulnerabilities that automated tools and code review will miss. For automotive cybersecurity, it is the most direct evidence of security posture — and it is explicitly required for UN R155 type approval, ISO/SAE 21434 verification, and EU CRA conformity for in-scope products.</p>
          <p>CyMobility delivers automotive penetration testing from our in-house laboratory in Bengaluru. Our team includes certified offensive security specialists (CEH, OSCP, OSCE) with deep experience across embedded systems, automotive protocols, hardware reverse engineering, and vehicle network architectures.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Scope">What we pen test</H2>
        <Prose>
          <p><strong>ECU-level penetration testing.</strong> Hardware attack surface analysis (JTAG, UART, SPI, I2C, BDM), firmware extraction from flash and EEPROM, secure boot and chain-of-trust validation, memory protection unit configuration review, exploitation of memory corruption vulnerabilities, side-channel and fault injection assessment.</p>
          <p><strong>Communication bus penetration testing.</strong> CAN, CAN FD, FlexRay, LIN, Automotive Ethernet — message injection, replay attacks, ID spoofing, denial of service, fuzzing of protocol stacks, and (where the architecture mandates them) testing of message authentication, IDS and network segmentation.</p>
          <p><strong>Telematics Control Unit (TCU) testing.</strong> Cellular interface security (baseband attacks, modem firmware analysis), backend API testing, certificate pinning bypass, SIM and eSIM provisioning, Bluetooth and Wi-Fi attack surface, GNSS spoofing resilience.</p>
          <p><strong>Infotainment and head-unit testing.</strong> Android Automotive (system services, package manager, vehicle property HAL), Linux IVI stack, QNX hypervisor analysis, USB and SD card attack vectors, browser exploitation, mobile projection (CarPlay, Android Auto) interfaces.</p>
          <p><strong>ADAS, AD and sensor systems.</strong> Adversarial input testing for camera-based perception, LiDAR and radar manipulation, V2X message authentication, secure storage of cryptographic material on sensor ECUs.</p>
          <p><strong>OTA update pipelines.</strong> End-to-end testing from update build to vehicle installation — signature validation, key management, secure delivery, rollback protection, update authorisation workflow.</p>
          <p><strong>Gateway controllers.</strong> Network segmentation enforcement, firewall and message filtering rules, diagnostic interface security (UDS, DoIP), tester authorisation flows.</p>
          <p><strong>Backend, cloud and mobile applications.</strong> REST and gRPC API security, authentication and authorisation flaw discovery, mobile reverse engineering, OAuth and token handling.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Methodology">Six-step engagement methodology</H2>
        <Grid cols={3}>
          <Card title="1. Scope & threat model">Define targets, attack scenarios, depth of testing (black/grey/white-box), tooling constraints, rules of engagement.</Card>
          <Card title="2. Reconnaissance & analysis">Gather documentation, firmware, schematics and source code. Architecture analysis to identify fruitful attack surfaces.</Card>
          <Card title="3. Vulnerability identification & exploitation">Execute test plan via manual analysis, custom tooling, and security.core automated platform.</Card>
          <Card title="4. Verification & impact analysis">For each finding: determine exploitability, impact, precise reproduction conditions.</Card>
          <Card title="5. Reporting">Structured report with executive summary, methodology, findings with PoC evidence, CVSS + ISO 21434 attack feasibility ratings, remediation, compliance mapping.</Card>
          <Card title="6. Remediation review">Re-testing of fixed vulnerabilities to confirm remediation.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 eyebrow="Lab & tooling">In-house Bengaluru capability</H2>
        <Prose>
          <p>CyMobility's penetration testing lab is equipped for end-to-end automotive testing including dedicated hardware for ECU bring-up and analysis (CAN/CAN FD/FlexRay/Ethernet tooling, logic analysers, oscilloscopes, JTAG and SWD adapters, chip programmers), software analysis environments (Ghidra, IDA Pro, Binary Ninja, custom disassembly chains for ARM, Tricore, RH850, PowerPC and RISC-V automotive cores), and our proprietary pentest.core engine for automated test execution and reporting. We are tool-agnostic — using whatever combination of commercial, open-source and proprietary tooling produces the best outcome.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Engagement models">How clients engage us</H2>
        <Grid cols={4}>
          <Card title="Single-system pen test">Targeted test of one ECU, TCU, IVI or gateway. Typical duration 3–8 weeks.</Card>
          <Card title="Vehicle-level pen test">Full vehicle attack surface assessment for UN R155 type approval evidence. 6–16 weeks.</Card>
          <Card title="Continuous pen testing">Ongoing pen testing aligned to release cadence — particularly useful for SDV programmes.</Card>
          <Card title="Red team engagements">Adversary-emulation against products and ecosystem (vehicle + backend + mobile + dealer infra).</Card>
        </Grid>
      </Section>

      <CTABanner
        title="From scope to certified report — in one lab"
        secondaryCta={{ label: 'Explore pentest.core Platform', to: '/platform/pentest-core' }}
      />
    </>
  );
}
