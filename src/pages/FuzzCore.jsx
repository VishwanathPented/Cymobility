import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function FuzzCore() {
  return (
    <>
      <Seo
        title="fuzz.core | Automotive Fuzz Testing Platform | CyMobility"
        description="fuzz.core delivers coverage-guided fuzz testing for automotive embedded systems. Input mutation, coverage tracking, crash triage, ISO 21434 reporting."
        path="/platform/fuzz-core/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform/' },
          { name: 'fuzz.core', path: '/platform/fuzz-core/' },
        ])}
      />
      <PageHero
        eyebrow="fuzz.core"
        title="Intelligent Fuzz Testing for Automotive Embedded Systems"
        subtitle="Coverage-guided fuzzing, grammar-aware input generation, structured crash analysis — with reporting tailored to ISO/SAE 21434 and UN R155 evidence requirements."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform/' },
          { name: 'fuzz.core' },
        ]}
        ctas={[{ label: 'Request a Demo', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>fuzz.core is CyMobility's fuzz testing engine, designed specifically for automotive embedded software. It combines coverage-guided fuzzing, grammar-aware input generation, and structured crash analysis with reporting tailored to ISO/SAE 21434 and UN R155 evidence requirements.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Capabilities">What fuzz.core does</H2>
        <Grid cols={2}>
          <Card title="Coverage-guided fuzzing">Built on industry-standard coverage-guided fuzzing engines (AFL++, libFuzzer-equivalent instrumentation), with intelligent corpus management and minimisation.</Card>
          <Card title="Grammar-aware fuzzing">For protocol parsers and structured-input components, grammar-based fuzz input generation substantially improves coverage of valid-but-edge-case inputs.</Card>
          <Card title="Input mutation">Configurable mutation strategies — bit-flip, arithmetic, dictionary insertion, splice, custom mutators for automotive-specific formats.</Card>
          <Card title="Coverage tracking">Per-input and aggregate coverage metrics. Visualisation of code reach and identification of unfuzzed regions.</Card>
          <Card title="Crash collection, de-duplication, triage">Automatic collection of crashes with stack-trace-based de-duplication, exploitability analysis, debugger integration for triage.</Card>
          <Card title="CI integration">fuzz.core runs as a continuous activity in CI pipelines — surfacing fuzz-discovered bugs on every commit.</Card>
          <Card title="Structured reporting">Campaign reports including coverage achievement, unique crashes, root causes, remediation — formatted for ISO/SAE 21434 verification work products.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Targets">What fuzz.core fuzzes</H2>
        <Prose>
          <p>fuzz.core supports fuzzing of:</p>
          <ul>
            <li>Communication protocol implementations (CAN, FlexRay, Ethernet, V2X, UDS, DoIP)</li>
            <li>Parsers and codecs (XML, JSON, ASN.1, ProtoBuf, custom binary formats)</li>
            <li>AUTOSAR Classic and Adaptive components</li>
            <li>Linux and Android Automotive system services</li>
            <li>Proprietary in-vehicle protocols</li>
          </ul>
        </Prose>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Use cases">Where teams use fuzz.core</H2>
        <Grid cols={3}>
          <Card title="Initial fuzz campaigns">Initial fuzz campaigns on new code modules.</Card>
          <Card title="Continuous CI fuzzing">Continuous fuzz testing in CI pipelines.</Card>
          <Card title="Pre-release protocol testing">Pre-release fuzz testing of communication protocol implementations.</Card>
          <Card title="Type approval evidence">Type approval evidence generation.</Card>
          <Card title="Fix verification">Verification of fuzz-discovered vulnerability fixes.</Card>
        </Grid>
      </Section>

      <CTABanner
        title="Catch the bugs nothing else catches"
        secondaryCta={{ label: 'Explore Fuzz Testing Services', to: '/services/security-testing/fuzz-testing' }}
      />
    </>
  );
}
