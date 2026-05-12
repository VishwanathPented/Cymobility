// Single source of truth for all routes — used by App.jsx router AND the sitemap generator.
export const routes = [
  { path: '/', file: 'pages/Home.jsx', priority: 1.0, changefreq: 'weekly' },
  { path: '/about/', file: 'pages/About.jsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/about/team/', file: 'pages/Team.jsx', priority: 0.6, changefreq: 'monthly' },
  { path: '/about/certifications-partnerships/', file: 'pages/Certifications.jsx', priority: 0.7, changefreq: 'monthly' },

  { path: '/services/', file: 'pages/ServicesOverview.jsx', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/automotive-cybersecurity-consulting/', file: 'pages/Consulting.jsx', priority: 0.8, changefreq: 'monthly' },

  { path: '/services/regulatory-compliance/', file: 'pages/RegulatoryCompliance.jsx', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/regulatory-compliance/eu-cra/', file: 'pages/EuCra.jsx', priority: 0.95, changefreq: 'monthly' },
  { path: '/services/regulatory-compliance/un-r155-r156/', file: 'pages/UnR155.jsx', priority: 0.95, changefreq: 'monthly' },
  { path: '/services/regulatory-compliance/ais-189-ais-190/', file: 'pages/Ais189.jsx', priority: 0.95, changefreq: 'monthly' },

  { path: '/services/security-testing/', file: 'pages/SecurityTesting.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/services/security-testing/penetration-testing/', file: 'pages/PenetrationTesting.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/services/security-testing/fuzz-testing/', file: 'pages/FuzzTesting.jsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/security-testing/tara/', file: 'pages/Tara.jsx', priority: 0.85, changefreq: 'monthly' },

  { path: '/services/threat-intelligence-vsoc/', file: 'pages/Vsoc.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/services/sdv-security-advisory/', file: 'pages/Sdv.jsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/security-workshops-training/', file: 'pages/Training.jsx', priority: 0.7, changefreq: 'monthly' },

  { path: '/platform/', file: 'pages/PlatformOverview.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/platform/pentest-core/', file: 'pages/PentestCore.jsx', priority: 0.75, changefreq: 'monthly' },
  { path: '/platform/fuzz-core/', file: 'pages/FuzzCore.jsx', priority: 0.75, changefreq: 'monthly' },
  { path: '/platform/threat-core/', file: 'pages/ThreatCore.jsx', priority: 0.75, changefreq: 'monthly' },
  { path: '/platform/vulnerability-core/', file: 'pages/VulnerabilityCore.jsx', priority: 0.75, changefreq: 'monthly' },

  { path: '/industries/automotive-oems/', file: 'pages/IndustryOems.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/industries/tier-1-tier-2-suppliers/', file: 'pages/IndustrySuppliers.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/industries/connected-devices-iot/', file: 'pages/IndustryIot.jsx', priority: 0.85, changefreq: 'monthly' },

  { path: '/blog/', file: 'pages/Blog.jsx', priority: 0.7, changefreq: 'weekly' },
  { path: '/compliance-guides/', file: 'pages/ComplianceGuides.jsx', priority: 0.85, changefreq: 'monthly' },
  { path: '/glossary/', file: 'pages/Glossary.jsx', priority: 0.6, changefreq: 'monthly' },
  { path: '/case-studies/', file: 'pages/CaseStudies.jsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact/', file: 'pages/Contact.jsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/compliance-assessment/', file: 'pages/ComplianceAssessment.jsx', priority: 0.95, changefreq: 'monthly' },
];
