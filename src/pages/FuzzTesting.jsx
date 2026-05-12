import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function FuzzTesting() {
  const path = '/services/security-testing/fuzz-testing/';
  return (
    <>
      <Seo
        title="Automotive Fuzz Testing | Embedded Systems | CyMobility"
        description="Automotive fuzz testing for ECUs, protocol stacks, and embedded systems. Coverage-guided fuzzing, protocol fuzzing, ISO 21434 and UN R155 aligned."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Security Testing', path: '/services/security-testing/' },
            { name: 'Fuzz Testing', path },
          ]),
          serviceJsonLd({ name: 'Automotive Fuzz Testing', description: 'Coverage-guided and grammar-aware fuzz testing for automotive embedded systems and protocol stacks.', path }),
        ]}
      />
      <PageHero
        eyebrow="Fuzz testing"
        title="Automotive Fuzz Testing"
        subtitle="Automated injection of malformed, unexpected or randomised inputs surfaces the bugs that nothing else catches. ISO/SAE 21434-aligned. Delivered with our fuzz.core platform and industry-standard fuzzers."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Security Testing', path: '/services/security-testing/' },
          { name: 'Fuzz Testing' },
        ]}
        ctas={[{ label: 'Request a Fuzz Engagement', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Fuzz testing — the automated injection of malformed, unexpected or randomised inputs into a system — surfaces crashes, memory corruption, parser errors and protocol violations that manual code review and traditional testing reliably miss. For automotive software, where memory-safety bugs in C / C++ code can become exploitable vulnerabilities or safety-critical defects, fuzz testing is increasingly recognised as a baseline activity under ISO/SAE 21434.</p>
          <p>CyMobility delivers fuzz testing across automotive embedded systems — from ECU firmware and protocol stacks to AUTOSAR Basic Software, Linux IVI stacks, and Android Automotive components. Engagements use our fuzz.core platform combined with industry-standard fuzzing tools.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Why fuzz">Why fuzz test automotive systems</H2>
        <Prose>
          <p>Automotive software is increasingly large, complex and dependent on third-party components. AUTOSAR stacks include hundreds of modules; modern infotainment systems run multi-million-line operating systems; communication protocols include layered parsers handling untrusted inputs. Bugs at any layer can be exploitable — and many are not surfaced by functional testing alone.</p>
          <p>Fuzz testing catches the bugs that nothing else catches. Unhandled inputs that cause buffer overflows. Off-by-one errors in length calculations. State machine violations that drive systems into undefined states. Integer overflows in arithmetic on attacker-controlled values. These are the bugs that, when found by attackers rather than testers, become the next automotive CVE.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Targets">What we fuzz test</H2>
        <Grid cols={2}>
          <Card title="Communication protocol stacks">
            CAN, CAN FD, FlexRay, LIN, automotive Ethernet (UDP, TCP, SOME/IP, DDS, AVB), V2X protocols (DSRC, C-V2X), diagnostic protocols (UDS, DoIP, J1939), key exchange protocols, proprietary in-vehicle protocols.
          </Card>
          <Card title="Parsers and codecs">
            XML, JSON, ASN.1, ProtoBuf parsers; audio and video codecs in IVI; image processing pipelines in ADAS; configuration file parsers in ECUs.
          </Card>
          <Card title="AUTOSAR components">
            Classic AUTOSAR Basic Software stacks (COM, NM, PduR, DCM, DEM, CryptoStack) and Adaptive AUTOSAR foundation components.
          </Card>
          <Card title="Operating system interfaces">
            Linux and Android Automotive system calls, IPC mechanisms, kernel modules and drivers.
          </Card>
          <Card title="API surfaces">
            REST and gRPC backends, mobile app APIs, telematics provider interfaces.
          </Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Methodology">Our fuzz testing process</H2>
        <Grid cols={5}>
          <Card title="1. Target analysis">Understand input formats, attack surfaces, existing testability. Identify harnesses, instrument the target, define coverage objectives.</Card>
          <Card title="2. Harness development">Where standard harnesses do not exist (the norm for proprietary automotive software), build custom fuzzing harnesses.</Card>
          <Card title="3. Fuzzing execution">Coverage-guided fuzzers (AFL++, libFuzzer, honggfuzz) and grammar-aware fuzzers as appropriate. Bug triage and de-duplication. fuzz.core manages corpus, coverage, crashes.</Card>
          <Card title="4. Triage & root cause">Each unique crash analysed for exploitability, root cause, remediation guidance.</Card>
          <Card title="5. Reporting & remediation">Final report with unique findings, severity, root cause, remediation. Re-testing of fixes.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Compliance">Mapping to regulatory frameworks</H2>
        <Prose>
          <p>Fuzz testing is increasingly recognised under ISO/SAE 21434 as an appropriate verification method, particularly for components handling untrusted inputs. Our deliverables map directly to ISO/SAE 21434 cybersecurity verification work products, UN R155 vehicle type approval evidence, EU CRA technical documentation, and TISAX assessment evidence.</p>
        </Prose>
      </Section>

      <CTABanner
        title="Continuous fuzzing belongs in your CI"
        secondaryCta={{ label: 'Explore fuzz.core Platform', to: '/platform/fuzz-core' }}
      />
    </>
  );
}
