import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section, H2, Prose, Grid, Card } from '../components/page/Section.jsx';
import LeadForm from '../components/page/LeadForm.jsx';
import { Mail, Phone, Shield } from 'lucide-react';

export default function ComplianceAssessment() {
  return (
    <>
      <Seo
        title="Request a Compliance Assessment | UN R155, EU CRA, AIS-189 | CyMobility"
        description="Request an automotive cybersecurity compliance gap assessment. UN R155, EU CRA, AIS-189, ISO 21434. Senior consultant response within 1 business day."
        path="/compliance-assessment/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Compliance Assessment', path: '/compliance-assessment/' },
        ])}
      />
      <PageHero
        eyebrow="Compliance assessment"
        title="Request a Compliance Gap Assessment"
        subtitle="Tell us about your product and the regulations that matter. Within one business day, a senior CyMobility consultant will respond with a proposed scoping conversation."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Compliance Assessment' }]}
      />

      <Section>
        <div className="split-2 split-2--lead-left">
          <div>
            <H2 eyebrow="The form">Tell us about your engagement</H2>
            <Prose>
              <p>The more specific your request, the more useful our first response. Useful information to include:</p>
              <ul>
                <li>The product or product line in scope (e.g. specific vehicle platform, specific ECU, specific connected device line)</li>
                <li>The regulations of interest (UN R155, EU CRA, AIS-189, ISO/SAE 21434, TISAX, EU RED, other)</li>
                <li>The current state of your cybersecurity programme (greenfield, partial implementation, audit prep, sustained compliance)</li>
                <li>Your target timeline (type approval date, EU CRA enforcement deadline, OEM contract milestone)</li>
                <li>Markets you operate in or export to</li>
                <li>Whether the engagement is exploratory, formally budgeted, or contractually mandated</li>
              </ul>
              <h3>Alternative contact channels</h3>
              <p>If the form is not the right channel, you can reach the leadership team directly:</p>
              <p><Mail size={16} style={{ verticalAlign: 'middle' }} /> <a href="mailto:info@cymobility.com">info@cymobility.com</a></p>
              <p><Phone size={16} style={{ verticalAlign: 'middle' }} /> +91 9980 524 681 / +91 9711 966 681</p>
              <h3>Trust and confidentiality</h3>
              <p><Shield size={16} style={{ verticalAlign: 'middle' }} /> CyMobility operates ISO 27001:2022 certified information security management. All client engagements are governed by signed mutual non-disclosure agreements before any sensitive information is shared.</p>
            </Prose>
          </div>
          <div>
            <LeadForm variant="assessment" />
          </div>
        </div>
      </Section>

      <Section alt>
        <H2 align="center" eyebrow="The process">How the engagement progresses</H2>
        <Grid cols={5}>
          <Card title="1. Request">You submit the form describing your product, regulatory context, and timeline.</Card>
          <Card title="2. Scoping conversation">A senior consultant responds within one business day to schedule a 45–60 minute scoping call.</Card>
          <Card title="3. Proposal">Within five business days we deliver a written proposal: scope, methodology, deliverables, timeline, team, cost.</Card>
          <Card title="4. Engagement kickoff">Following proposal acceptance, the engagement kicks off — typically within two weeks.</Card>
          <Card title="5. Gap assessment">First deliverable is a structured gap assessment with prioritised roadmap — typically 2–4 weeks after kickoff.</Card>
        </Grid>
      </Section>
    </>
  );
}
