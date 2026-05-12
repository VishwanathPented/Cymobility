import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const Certifications = lazy(() => import('./pages/Certifications.jsx'));

const ServicesOverview = lazy(() => import('./pages/ServicesOverview.jsx'));
const Consulting = lazy(() => import('./pages/Consulting.jsx'));

const RegulatoryCompliance = lazy(() => import('./pages/RegulatoryCompliance.jsx'));
const EuCra = lazy(() => import('./pages/EuCra.jsx'));
const UnR155 = lazy(() => import('./pages/UnR155.jsx'));
const Ais189 = lazy(() => import('./pages/Ais189.jsx'));

const SecurityTesting = lazy(() => import('./pages/SecurityTesting.jsx'));
const PenetrationTesting = lazy(() => import('./pages/PenetrationTesting.jsx'));
const FuzzTesting = lazy(() => import('./pages/FuzzTesting.jsx'));
const Tara = lazy(() => import('./pages/Tara.jsx'));

const Vsoc = lazy(() => import('./pages/Vsoc.jsx'));
const Sdv = lazy(() => import('./pages/Sdv.jsx'));
const Training = lazy(() => import('./pages/Training.jsx'));

const PlatformOverview = lazy(() => import('./pages/PlatformOverview.jsx'));
const PentestCore = lazy(() => import('./pages/PentestCore.jsx'));
const FuzzCore = lazy(() => import('./pages/FuzzCore.jsx'));
const ThreatCore = lazy(() => import('./pages/ThreatCore.jsx'));
const VulnerabilityCore = lazy(() => import('./pages/VulnerabilityCore.jsx'));

const IndustryOems = lazy(() => import('./pages/IndustryOems.jsx'));
const IndustrySuppliers = lazy(() => import('./pages/IndustrySuppliers.jsx'));
const IndustryIot = lazy(() => import('./pages/IndustryIot.jsx'));

const Blog = lazy(() => import('./pages/Blog.jsx'));
const ComplianceGuides = lazy(() => import('./pages/ComplianceGuides.jsx'));
const Glossary = lazy(() => import('./pages/Glossary.jsx'));
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const ComplianceAssessment = lazy(() => import('./pages/ComplianceAssessment.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/certifications-partnerships" element={<Certifications />} />

          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/automotive-cybersecurity-consulting" element={<Consulting />} />

          <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/services/regulatory-compliance/eu-cra" element={<EuCra />} />
          <Route path="/services/regulatory-compliance/un-r155-r156" element={<UnR155 />} />
          <Route path="/services/regulatory-compliance/ais-189-ais-190" element={<Ais189 />} />

          <Route path="/services/security-testing" element={<SecurityTesting />} />
          <Route path="/services/security-testing/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/services/security-testing/fuzz-testing" element={<FuzzTesting />} />
          <Route path="/services/security-testing/tara" element={<Tara />} />

          <Route path="/services/threat-intelligence-vsoc" element={<Vsoc />} />
          <Route path="/services/sdv-security-advisory" element={<Sdv />} />
          <Route path="/services/security-workshops-training" element={<Training />} />

          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/platform/pentest-core" element={<PentestCore />} />
          <Route path="/platform/fuzz-core" element={<FuzzCore />} />
          <Route path="/platform/threat-core" element={<ThreatCore />} />
          <Route path="/platform/vulnerability-core" element={<VulnerabilityCore />} />

          <Route path="/industries/automotive-oems" element={<IndustryOems />} />
          <Route path="/industries/tier-1-tier-2-suppliers" element={<IndustrySuppliers />} />
          <Route path="/industries/connected-devices-iot" element={<IndustryIot />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/compliance-guides" element={<ComplianceGuides />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compliance-assessment" element={<ComplianceAssessment />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
