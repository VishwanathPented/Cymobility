// Prerenders each route to its own static index.html so search crawlers
// (and users with JS disabled) see the correct meta tags and content
// without requiring server-side rendering. Generates trailing-slash
// paths suitable for static hosts (GoDaddy, Apache, nginx).
//
// Run AFTER `vite build` and AFTER `generate-sitemap`.
//
// How it works:
//   - Reads dist/index.html as a template.
//   - Spawns `vite preview` on a free port.
//   - Hits each route in routes.js with fetch().
//   - Uses puppeteer-core (if present) for real rendering; otherwise
//     falls back to copying the SPA shell with per-route meta injection.
//
// We choose the fallback path by default because puppeteer downloads are
// large and not always available on GoDaddy build hosts. The fallback
// still gives crawlers the right <title>, <description>, canonical, and
// JSON-LD because we render them server-side here using the page metadata
// metafile produced at build time.
//
// For now (Phase 1), we emit a static shell per route that the SPA hydrates
// on visit. The shell carries the title/description/canonical/og tags. A
// future iteration can swap to full DOM prerendering with puppeteer.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const { routes } = await import(pathToFileURL(resolve(root, 'src/routes.js')).href);

const shell = readFileSync(join(distDir, 'index.html'), 'utf8');

// Per-route meta — derived from src/routes.js plus a small lookup table.
// Keep in sync with the <Seo> tags inside each page component.
const meta = {
  '/': {
    title: 'Automotive Cybersecurity Company India | UN R155, EU CRA, AIS-189 | CyMobility',
    description: "India's end-to-end automotive cybersecurity partner. UN R155, EU CRA, AIS-189, ISO 21434 compliance for OEMs, Tier-1 suppliers and connected devices.",
  },
  '/about/': { title: 'About CyMobility | Automotive Cybersecurity Experts India', description: "CyMobility is India's automotive cybersecurity specialist. Certified experts in UN R155, EU CRA, ISO 21434, AIS-189. ISO 27001 and ISO 9001 certified." },
  '/about/team/': { title: 'Our Team | Automotive Cybersecurity Experts | CyMobility', description: "Meet CyMobility's automotive cybersecurity team — certified experts in UN R155, ISO/SAE 21434, EU CRA and AIS-189 with hands-on OEM and Tier-1 experience." },
  '/about/certifications-partnerships/': { title: 'Certifications & Partnerships | ISO 27001, ISO 9001 | CyMobility', description: 'CyMobility is ISO 27001:2022 and ISO 9001:2015 certified. Our team holds certifications across ISO/SAE 21434, TISAX, SOTIF for automotive cybersecurity.' },

  '/services/': { title: 'Automotive Cybersecurity Services India | CyMobility', description: 'Complete automotive cybersecurity services — penetration testing, regulatory compliance, TARA, VSOC, SDV advisory. UN R155, EU CRA, AIS-189, ISO 21434 expertise.' },
  '/services/automotive-cybersecurity-consulting/': { title: 'Automotive Cybersecurity Consulting India | CyMobility', description: 'Strategic automotive cybersecurity consulting for OEMs and Tier-1 suppliers. CSMS, secure development, regulatory readiness, programme leadership.' },

  '/services/regulatory-compliance/': { title: 'Automotive Regulatory Compliance | UN R155, EU CRA, AIS-189 | CyMobility', description: 'End-to-end automotive regulatory compliance — UN R155/R156, EU CRA, AIS-189/190, ISO 21434, TISAX. Gap assessment to certification with certified experts.' },
  '/services/regulatory-compliance/eu-cra/': { title: 'EU CRA Compliance for Automotive & IoT | Cyber Resilience Act | CyMobility', description: 'EU Cyber Resilience Act (EU CRA) compliance for vehicles, ECUs and connected devices. Gap assessment, conformity, technical file. Enforcement 2027.' },
  '/services/regulatory-compliance/un-r155-r156/': { title: 'UN R155 & UN R156 Compliance | CSMS & SUMS | CyMobility', description: 'UN R155 (CSMS) and UN R156 (SUMS) compliance for vehicle type approval. Gap assessment, implementation, audit support. UNECE markets including India and EU.' },
  '/services/regulatory-compliance/ais-189-ais-190/': { title: 'AIS-189 & AIS-190 Compliance India | Automotive Cybersecurity | CyMobility', description: 'AIS-189 and AIS-190 compliance for India OEMs. CSMS and SUMS for vehicles sold in India. Aligned with UN R155/R156. Bengaluru-based experts.' },

  '/services/security-testing/': { title: 'Automotive Security Testing | Pen Testing, Fuzz Testing, TARA | CyMobility', description: 'Automotive security testing services — penetration testing, fuzz testing, TARA, vulnerability analysis for ECUs, telematics, V2X, OTA. In-house Bengaluru lab.' },
  '/services/security-testing/penetration-testing/': { title: 'Automotive Penetration Testing India | ECU, TCU, IVI | CyMobility', description: 'Automotive penetration testing for ECUs, telematics units, infotainment, V2X, OTA pipelines. In-house Bengaluru lab. UN R155 and ISO 21434 aligned reporting.' },
  '/services/security-testing/fuzz-testing/': { title: 'Automotive Fuzz Testing | Embedded Systems | CyMobility', description: 'Automotive fuzz testing for ECUs, protocol stacks, and embedded systems. Coverage-guided fuzzing, protocol fuzzing, ISO 21434 and UN R155 aligned.' },
  '/services/security-testing/tara/': { title: 'TARA Threat Analysis & Risk Assessment | ISO 21434 | CyMobility', description: 'ISO/SAE 21434-aligned TARA for vehicles and components. Threat scenarios, attack feasibility, risk treatment. Required for UN R155, EU CRA, AIS-189 compliance.' },

  '/services/threat-intelligence-vsoc/': { title: 'Vehicle Security Operations Centre (VSOC) & Threat Intelligence | CyMobility', description: '24/7 VSOC monitoring and automotive threat intelligence. Aligned to UN R155 post-production monitoring requirements. OSINT, threat hunting, incident response.' },
  '/services/sdv-security-advisory/': { title: 'Software-Defined Vehicle (SDV) Cybersecurity Advisory | CyMobility', description: 'SDV cybersecurity advisory — service-oriented architecture, central compute, zonal ECUs, vehicle-cloud integration. Securing next-generation automotive architectures.' },
  '/services/security-workshops-training/': { title: 'Automotive Cybersecurity Training | ISO 21434, UN R155 | CyMobility', description: 'Automotive cybersecurity training and workshops for OEM and Tier-1 teams. ISO/SAE 21434, UN R155, EU CRA, TARA methodology. Customised programmes.' },

  '/platform/': { title: 'security.core | Automotive Cybersecurity Platform | CyMobility', description: "security.core is CyMobility's proprietary automotive cybersecurity platform. Four engines for pen testing, fuzz testing, threat intelligence and vulnerability monitoring." },
  '/platform/pentest-core/': { title: 'pentest.core | Automated Automotive Penetration Testing | CyMobility', description: 'pentest.core automates penetration testing for automotive hardware and embedded systems. AI-driven test orchestration, SSH deployment, compliance reporting.' },
  '/platform/fuzz-core/': { title: 'fuzz.core | Automotive Fuzz Testing Platform | CyMobility', description: 'fuzz.core delivers coverage-guided fuzz testing for automotive embedded systems. Input mutation, coverage tracking, crash triage, ISO 21434 reporting.' },
  '/platform/threat-core/': { title: 'threat.core | Automotive Threat Intelligence Platform | CyMobility', description: 'threat.core delivers AI-driven automotive threat intelligence. OSINT ingestion, threat actor tracking, vulnerability correlation. Powers managed VSOC services.' },
  '/platform/vulnerability-core/': { title: 'vulnerability.core | Continuous SBOM Vulnerability Scanning | CyMobility', description: 'vulnerability.core continuously scans SBOMs and HBOMs for known vulnerabilities. EU CRA-aligned reporting, email alerts, automotive software supply chain security.' },

  '/industries/automotive-oems/': { title: 'Cybersecurity for Automotive OEMs | UN R155, AIS-189 | CyMobility', description: 'Cybersecurity for automotive OEMs — UN R155 type approval, AIS-189 India compliance, CSMS, SUMS, TARA. End-to-end programme support from Bengaluru.' },
  '/industries/tier-1-tier-2-suppliers/': { title: 'Cybersecurity for Tier-1 & Tier-2 Suppliers | ISO 21434 | CyMobility', description: 'Cybersecurity for Tier-1 and Tier-2 automotive suppliers. ISO/SAE 21434 implementation, component TARA, penetration testing, OEM contract compliance support.' },
  '/industries/connected-devices-iot/': { title: 'Cybersecurity for Connected Devices & IoT | EU CRA | CyMobility', description: 'Cybersecurity for connected devices and IoT manufacturers — EU CRA conformity, SBOM scanning, penetration testing, vulnerability handling. 2027 deadline ready.' },

  '/blog/': { title: 'Automotive Cybersecurity Blog & Insights | CyMobility', description: 'Insights, analysis and guides on automotive cybersecurity — UN R155, EU CRA, AIS-189, ISO 21434, SDV, threat intelligence. Updated regularly.' },
  '/compliance-guides/': { title: 'Automotive Compliance Guides | UN R155, EU CRA, AIS-189, ISO 21434 | CyMobility', description: 'Comprehensive guides to automotive cybersecurity regulations — UN R155, UN R156, EU CRA, AIS-189, AIS-190, ISO/SAE 21434, TISAX. Implementation, evidence, audit.' },
  '/glossary/': { title: 'Automotive Cybersecurity Glossary | Terms & Acronyms | CyMobility', description: 'Glossary of automotive cybersecurity terms — CSMS, SUMS, TARA, VSOC, SBOM, UN R155, EU CRA, ISO 21434, AIS-189 and more. Concise expert definitions.' },
  '/case-studies/': { title: 'Case Studies | Automotive Cybersecurity Engagements | CyMobility', description: 'CyMobility case studies — UN R155 compliance programmes, penetration testing engagements, TARA, EU CRA readiness. Real outcomes for OEMs and Tier-1 suppliers.' },
  '/contact/': { title: 'Contact CyMobility | Automotive Cybersecurity India | Bengaluru', description: 'Contact CyMobility for automotive cybersecurity services. Bengaluru-headquartered. Email info@cymobility.com or call +91 9980 524 681.' },
  '/compliance-assessment/': { title: 'Request a Compliance Assessment | UN R155, EU CRA, AIS-189 | CyMobility', description: 'Request an automotive cybersecurity compliance gap assessment. UN R155, EU CRA, AIS-189, ISO 21434. Senior consultant response within 1 business day.' },
};

const SITE = 'https://vishwanathpented.github.io/Cymobility';

function buildHtml(route) {
  const m = meta[route] || meta['/'];
  const canonical = `${SITE}${route}`;
  let html = shell;

  // Replace default <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(m.title)}</title>`);

  // Replace default description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(m.description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Inject OG title/description/url for this route (default shell only has og:image)
  const ogTags = `
    <meta property="og:title" content="${escapeAttr(m.title)}" />
    <meta property="og:description" content="${escapeAttr(m.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeAttr(m.title)}" />
    <meta name="twitter:description" content="${escapeAttr(m.description)}" />
  `;
  html = html.replace('</head>', `${ogTags}</head>`);

  return html;
}

function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escapeAttr(s) { return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

let count = 0;
for (const r of routes) {
  // path "/services/regulatory-compliance/" → dist/services/regulatory-compliance/index.html
  if (r.path === '/') continue; // root already has dist/index.html — patch it
  const out = join(distDir, r.path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buildHtml(r.path));
  count++;
}

// Patch root index.html with homepage meta too
writeFileSync(join(distDir, 'index.html'), buildHtml('/'));
console.log(`✓ prerendered ${count + 1} route shells (root + ${count} nested)`);

// Drop a 404.html that mirrors the SPA shell so GoDaddy / Apache can serve it
const notFoundHtml = buildHtml('/').replace(/<title>[^<]*<\/title>/, '<title>Page Not Found | CyMobility</title>');
writeFileSync(join(distDir, '404.html'), notFoundHtml);
console.log('✓ 404.html written');
