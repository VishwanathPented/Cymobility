import Seo, { breadcrumbJsonLd, serviceJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';

export default function Tara() {
  const path = '/services/security-testing/tara/';
  return (
    <>
      <Seo
        title="TARA Threat Analysis & Risk Assessment | ISO 21434 | CyMobility"
        description="ISO/SAE 21434-aligned TARA for vehicles and components. Threat scenarios, attack feasibility, risk treatment. Required for UN R155, EU CRA, AIS-189 compliance."
        path={path}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services/' },
            { name: 'Security Testing', path: '/services/security-testing/' },
            { name: 'TARA', path },
          ]),
          serviceJsonLd({ name: 'TARA — Threat Analysis and Risk Assessment', description: 'ISO/SAE 21434 TARA for vehicles and components. Asset identification, threat scenarios, attack feasibility, risk treatment.', path }),
        ]}
      />
      <PageHero
        eyebrow="TARA"
        title="Threat Analysis and Risk Assessment"
        subtitle="The foundational activity of automotive cybersecurity. Mandated under ISO/SAE 21434 for every item — and required evidence under UN R155, AIS-189 and EU CRA."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: 'Security Testing', path: '/services/security-testing/' },
          { name: 'TARA' },
        ]}
        ctas={[{ label: 'Request a TARA Engagement', to: '/compliance-assessment' }]}
      />

      <Section>
        <Prose>
          <p>Threat Analysis and Risk Assessment (TARA) is the foundational activity of automotive cybersecurity. Under ISO/SAE 21434, TARA is mandated for every item — every vehicle, every cybersecurity-relevant component — and the outputs of TARA drive every downstream cybersecurity decision: which assets to protect, which countermeasures to implement, which tests to run, which residual risks to accept.</p>
          <p>Under UN R155, TARA is a required evidence element for vehicle type approval. Under AIS-189, the same is true for the Indian market. Under EU CRA, cybersecurity risk assessment is a core technical file element. Get TARA wrong and the entire compliance programme rests on a flawed foundation.</p>
          <p>CyMobility delivers TARA according to ISO/SAE 21434 methodology — rigorous, documented, and directly accepted by Approval Authorities and conformity assessment bodies.</p>
        </Prose>
      </Section>

      <Section alt>
        <H2 eyebrow="Timing">When to conduct TARA</H2>
        <Prose>
          <p>TARA must be conducted in the concept and development phases — well before production. Specifically, TARA should be initiated during the conceptualisation phase of the item, refined during architectural design, updated after major design changes, and revisited periodically through the operational phase as the threat landscape evolves.</p>
          <p>Conducting TARA late — after major architectural commitments have been made — significantly increases the cost of any required mitigations. Conducting it on time, in parallel with safety analysis (HARA, FMEA), produces a coherent integrated risk picture and minimises rework.</p>
        </Prose>
      </Section>

      <Section>
        <H2 align="center" eyebrow="Methodology">The nine-step ISO 21434 TARA</H2>
        <Grid cols={3}>
          <Card title="1. Item definition">Define the scope of the analysis — the vehicle, system or component under review, its operational environment, interfaces, and assumptions.</Card>
          <Card title="2. Asset identification">Identify the cybersecurity assets — data, functions, and resources whose compromise would have meaningful impact. Each asset characterised by its cybersecurity properties (CIA + authenticity).</Card>
          <Card title="3. Threat scenarios">Structured enumeration of threats using attack trees, STRIDE, EVITA or equivalent.</Card>
          <Card title="4. Impact rating">Evaluate Safety, Financial, Operational and Privacy impact using the ISO 21434 SFOP rating scale.</Card>
          <Card title="5. Attack path analysis">Identify the attack paths through which each threat could be realised — chained attack steps from initial access to objective.</Card>
          <Card title="6. Attack feasibility">Rate feasibility based on required expertise, equipment, time, knowledge of the system, and window of opportunity.</Card>
          <Card title="7. Risk value">Combine impact and attack feasibility into a risk value per threat scenario.</Card>
          <Card title="8. Risk treatment">Avoid, reduce, share, or retain. Map treatments to specific cybersecurity goals and requirements.</Card>
          <Card title="9. Documentation">Structured TARA documentation aligned to ISO/SAE 21434 work products — directly usable as type approval evidence.</Card>
        </Grid>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="Levels">TARA at different abstraction levels</H2>
        <Grid cols={2}>
          <Card title="Vehicle-level TARA">Required for UN R155 and AIS-189 vehicle type approval. Identifies threats against the vehicle as a whole and at major subsystem boundaries.</Card>
          <Card title="Item-level TARA (ECU, system)">Required for component-level cybersecurity work products. Used by Tier-1 and Tier-2 suppliers to demonstrate ISO/SAE 21434 conformance for OEM contracts.</Card>
          <Card title="Feature-level TARA">Conducted for specific functions or features (e.g. remote start, automated parking, OTA update). Useful when adding cybersecurity-relevant features to an existing platform.</Card>
          <Card title="Programme-level TARA refresh">Periodic re-execution as the threat landscape evolves, new attack techniques emerge, or major design changes are introduced.</Card>
        </Grid>
      </Section>

      <Section>
        <H2 eyebrow="Deliverables">ISO/SAE 21434 work products you receive</H2>
        <Prose>
          <p>CyMobility TARA deliverables include the complete set of ISO/SAE 21434 TARA work products:</p>
          <ul>
            <li>WP-15-01: Item definition</li>
            <li>WP-15-02: Cybersecurity assets and their cybersecurity properties</li>
            <li>WP-15-03: Threat scenarios</li>
            <li>WP-15-04: Impact ratings</li>
            <li>WP-15-05: Attack paths</li>
            <li>WP-15-06: Attack feasibility ratings</li>
            <li>WP-15-07: Risk values</li>
            <li>WP-15-08: Risk treatment decisions</li>
          </ul>
          <p>All documentation is produced in formats acceptable to Approval Authorities (KBA, RDW, NTA, ARAI, iCAT and others) and to conformity assessment bodies for EU CRA.</p>
        </Prose>
      </Section>

      <CTABanner
        title="A well-executed TARA is the foundation of every compliance programme"
        secondaryCta={{ label: 'Explore Regulatory Compliance', to: '/services/regulatory-compliance' }}
      />
    </>
  );
}
