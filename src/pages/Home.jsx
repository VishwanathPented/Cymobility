import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Shield, Globe, Flag, Cpu, Radio, Bot, Music, Wifi, Network, Cloud,
  TestTube2, AlertTriangle, Radar, BookOpen, Cog
} from 'lucide-react';
import Seo, { breadcrumbJsonLd, faqJsonLd } from '../components/Seo.jsx';
import { Section, H2, Grid, Card } from '../components/page/Section.jsx';
import FAQ from '../components/page/FAQ.jsx';
import CTABanner from '../components/page/CTABanner.jsx';
import styles from './home.module.css';

// Attack surface hotspots overlaid on the hero car image.
// Positions are percentages relative to the heroFrame container so the
// dots track the image at every viewport size.
const HOTSPOTS = [
  { code: 'A1', name: 'TCU',     top: '38%', left: '24%', labelPos: 'left' },
  { code: 'A2', name: 'Gateway', top: '52%', left: '50%', labelPos: 'right' },
  { code: 'A3', name: 'IVI',     top: '30%', left: '62%', labelPos: 'right' },
  { code: 'A4', name: 'ADAS',    top: '64%', left: '32%', labelPos: 'left' },
  { code: 'A5', name: 'OBD',     top: '76%', left: '70%', labelPos: 'right' },
  { code: 'A6', name: 'V2X',     top: '20%', left: '46%', labelPos: 'right' },
];

// Decorative SVG network — pulsing lines + nodes drifting behind the hero.
const NETWORK_LINES = [
  { x1: 90,  y1: 120, x2: 320, y2: 260 },
  { x1: 320, y1: 260, x2: 560, y2: 180 },
  { x1: 560, y1: 180, x2: 820, y2: 340 },
  { x1: 820, y1: 340, x2: 1080, y2: 230 },
  { x1: 200, y1: 540, x2: 460, y2: 660 },
  { x1: 460, y1: 660, x2: 740, y2: 540 },
  { x1: 740, y1: 540, x2: 1020, y2: 700 },
  { x1: 90,  y1: 380, x2: 320, y2: 260 },
  { x1: 560, y1: 180, x2: 460, y2: 660 },
];

const NETWORK_NODES = [
  { cx: 90, cy: 120 }, { cx: 320, cy: 260 }, { cx: 560, cy: 180 },
  { cx: 820, cy: 340 }, { cx: 1080, cy: 230 }, { cx: 200, cy: 540 },
  { cx: 460, cy: 660 }, { cx: 740, cy: 540 }, { cx: 1020, cy: 700 },
  { cx: 90, cy: 380 },
];

// Live-feeling metrics for the stats strip. The values reinforce
// the "always-on operations" feel.
const STATS = [
  { code: '01', value: '247', suffix: '/day', label: 'THREAT INDICATORS PROCESSED' },
  { code: '02', value: '12',  suffix: '+',    label: 'OEMS & TIER-1 CLIENTS' },
  { code: '03', value: '9',   suffix: '',     label: 'REGULATIONS COVERED' },
  { code: '04', value: '0',   suffix: '',     label: 'INCIDENTS UNREPORTED' },
  { code: '05', value: '24/7',suffix: '',     label: 'VSOC COVERAGE' },
];

const LOGOS = [
  'Mahindra', 'Tata Motors', 'TÜV SÜD', 'UNO Minda', 'Spark Minda', 'Devise Electronics',
  'FEV', 'ignitarium', 'Vector', 'Actalent', 'itemis', 'LG', 'Pi Square Technologies',
  'RNTBCI', 'SBD', 'Kalyani', 'AXISCADES', 'Microtech FuSa Solutions', 'OMNEX',
  'Secure Elements', 'TRANCE',
];

// Terminal block — illustrative compliance verification trace for the homepage.
// Rendered with monospace styling and a per-line stagger animation.
const TERMINAL_LINES = (s) => [
  <><span className={s.termPrompt}>$</span> <span className={s.termCmd}>cymobility</span> verify <span className={s.termFlag}>--regulation</span> un-r155 <span className={s.termFlag}>--target</span> oem-platform-x</>,
  <span className={s.termDim}>[09:42:18] orchestrator started · session#a3f2c1</span>,
  '',
  <><span className={s.termOk}>✓</span> CSMS established        <span className={s.termDim}>ISO/SAE 21434 §5  ·  governance + RACI</span></>,
  <><span className={s.termOk}>✓</span> TARA documented         <span className={s.termDim}>WP-15-01 → WP-15-08  ·  attack-feasibility rated</span></>,
  <><span className={s.termOk}>✓</span> Pen-test evidence       <span className={s.termDim}>3 ECUs · gateway · TCU · IVI head-unit</span></>,
  <><span className={s.termOk}>✓</span> Fuzz campaigns          <span className={s.termDim}>CAN-FD parser · UDS stack · 0 unique crashes</span></>,
  <><span className={s.termOk}>✓</span> SUMS configured         <span className={s.termDim}>UN R156 §7.2  ·  rollback + signature chain</span></>,
  <><span className={s.termOk}>✓</span> Supplier evidence       <span className={s.termDim}>14/14 Tier-1 ISO 21434 attestations on file</span></>,
  <><span className={s.termWarn}>!</span> Continuous monitoring  <span className={s.termDim}>VSOC live · 3 medium CVEs queued for triage</span></>,
  '',
  <span className={s.termDim}>────────────────────────────────────────────────────</span>,
  <><span className={s.termOk}>[ OK ]</span> <span className={s.termHeading}>Vehicle type approval evidence: READY</span></>,
  <span className={s.termDim}>Submit to KBA / ARAI · expected review window 6–10 weeks</span>,
];

const FAQS = [
  { q: 'What regulations does CyMobility help manufacturers comply with?',
    a: 'CyMobility provides compliance support across UN R155/R156, EU Cyber Resilience Act (EU CRA), ISO/SAE 21434, ISO 26262, AIS-189/190 (India), TISAX, and SOTIF. We cover both Indian domestic mandates and European/global regulations — making us the right partner for manufacturers operating across markets.' },
  { q: 'Do you work with Tier-1 and Tier-2 suppliers, or only OEMs?',
    a: 'CyMobility works with the full automotive value chain — OEMs, Tier-1 suppliers, Tier-2 component manufacturers, and connected device companies. Our security testing and ISO/SAE 21434 consulting services are specifically designed to support suppliers who need to demonstrate compliance as part of their OEM contracts.' },
  { q: 'What is a compliance gap assessment and how long does it take?',
    a: 'A compliance gap assessment is a structured review of your current cybersecurity posture against the requirements of a specific regulation — for example, UN R155 or EU CRA. CyMobility maps your existing processes, identifies gaps, and delivers a prioritised remediation roadmap. Most initial assessments are completed within 2–4 weeks depending on product complexity.' },
  { q: 'Does CyMobility cover both Indian and European cybersecurity regulations?',
    a: 'Yes. CyMobility is one of the few automotive cybersecurity companies in India with certified expertise across both domestic regulations (AIS-189/190) and global/European mandates (UN R155/R156, EU CRA, ISO/SAE 21434). This makes us uniquely positioned for Indian OEMs and Tier-1s that export to European markets.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Company India | UN R155, EU CRA, AIS-189 | CyMobility"
        description="India's end-to-end automotive cybersecurity partner. UN R155, EU CRA, AIS-189, ISO 21434 compliance for OEMs, Tier-1 suppliers and connected devices."
        path="/"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
          faqJsonLd(FAQS),
        ]}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="cyber-grid" />
        <div className={`container ${styles.heroInner}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroLeft}
          >
            <p className={`${styles.heroEyebrow} mono`}>
              <span className="status-dot" /> AUTOMOTIVE.CYBERSECURITY · INDIA + GLOBAL
            </p>
            <h1 className={styles.heroTitle}>
              Secure Every Vehicle.<br />
              <span className="text-gradient">Comply With Every Regulation.</span>
            </h1>
            <p className={styles.heroLead}>
              India's end-to-end automotive cybersecurity partner — delivering security testing,
              regulatory compliance, and threat monitoring for OEMs, Tier-1 suppliers, and
              connected device manufacturers.
            </p>
            <div className={styles.heroPills}>
              {['UN R155/R156', 'EU CRA', 'ISO/SAE 21434', 'AIS-189/190', 'TISAX', 'SOTIF'].map((p) => (
                <span key={p} className={`${styles.heroPill} mono`}>{p}</span>
              ))}
            </div>
            <div className={styles.heroCtas}>
              <Link to="/compliance-assessment" className={styles.primaryBtn}>
                Initiate a Compliance Assessment <ArrowRight size={16} />
              </Link>
              <Link to="/platform" className={styles.ghostBtn}>Explore Our Platform</Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className={styles.heroFrame}>
              <span className={`${styles.cornerBracket} ${styles.cornerTL}`} />
              <span className={`${styles.cornerBracket} ${styles.cornerTR}`} />
              <span className={`${styles.cornerBracket} ${styles.cornerBL}`} />
              <span className={`${styles.cornerBracket} ${styles.cornerBR}`} />

              {/* Frame label */}
              <div className={styles.frameLabel}>
                <span className="status-dot" />
                <span className={`mono ${styles.frameLabelText}`}>ATTACK SURFACE MAP · oem-platform-x</span>
              </div>

              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}hero_car.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}hero_car.png`}
                  alt="Connected vehicle cybersecurity — CyMobility India"
                  className={styles.heroImg}
                  width="1024"
                  height="1024"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>

              {/* Pulsing hotspots over attack surfaces */}
              {HOTSPOTS.map((h, i) => (
                <div
                  key={h.code}
                  className={styles.hotspot}
                  style={{ top: h.top, left: h.left, animationDelay: `${i * 0.3}s` }}
                >
                  <span className={styles.hotspotRing} />
                  <span className={styles.hotspotDot} />
                  <span className={`mono ${styles.hotspotLabel}`} data-pos={h.labelPos}>
                    <span className={styles.hotspotCode}>{h.code}</span>{h.name}
                  </span>
                </div>
              ))}

              <div className={styles.scanLine} />
            </div>
            <div className={styles.heroChip1}>
              <span className="status-dot" data-status="ok" />
              <span className={styles.chipLabel}>csms.status</span>
              <span className={styles.chipValue}>APPROVED</span>
            </div>
            <div className={styles.heroChip2}>
              <span className="status-dot" data-status="warn" />
              <span className={styles.chipLabel}>cve.feed</span>
              <span className={styles.chipValue}>CVE-2026-1421</span>
            </div>
          </motion.div>
        </div>

        {/* Animated background SVG network — pulsing connection lines */}
        <svg className={styles.heroNetwork} aria-hidden="true" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="netLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(85,221,221,0)" />
              <stop offset="50%" stopColor="rgba(85,221,221,0.45)" />
              <stop offset="100%" stopColor="rgba(85,221,221,0)" />
            </linearGradient>
          </defs>
          {NETWORK_LINES.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="url(#netLine)" strokeWidth="1"
              style={{ animationDelay: `${i * 0.4}s` }}
              className={styles.netLine}
            />
          ))}
          {NETWORK_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r="2"
              fill="rgba(170,238,238,0.7)"
              style={{ animationDelay: `${i * 0.2}s` }}
              className={styles.netNode}
            />
          ))}
        </svg>
      </section>

      {/* Stats dashboard — live-feeling metrics strip */}
      <section className={styles.statsStrip}>
        <div className="cyber-grid-dense" />
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCell}>
                <div className={styles.statTop}>
                  <span className="status-dot" />
                  <span className={`mono ${styles.statCode}`}>{s.code}</span>
                </div>
                <div className={styles.statValue}>{s.value}<span className={styles.statSuffix}>{s.suffix}</span></div>
                <div className={`mono ${styles.statLabel}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className={styles.trustBar}>
        <div className="container">
          <p className={styles.trustLabel}>Trusted by India's Leading Automotive Manufacturers</p>
          <div className={styles.trustMarquee}>
            <div className={styles.trustTrack}>
              {[...LOGOS, ...LOGOS].map((n, i) => (
                <span key={i} className={styles.trustItem}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory urgency */}
      <Section dark>
        <H2 align="center" eyebrow="Regulatory urgency" code="01">
          The Regulatory Deadline Is Here. Is Your Product Ready?
        </H2>
        <Grid cols={3}>
          <Card icon={<Globe size={22} />} title="UN R155 / R156" to="/services/regulatory-compliance/un-r155-r156">
            Mandatory for all new vehicle type approvals in UNECE markets. OEMs must demonstrate
            an approved Cybersecurity Management System (CSMS) and Software Update Management
            System (SUMS) — or risk losing type approval entirely.
          </Card>
          <Card icon={<Shield size={22} />} title="EU Cyber Resilience Act" to="/services/regulatory-compliance/eu-cra">
            Enforcement begins 2027. Every connected product sold in the EU — vehicles, ECUs,
            telematics units, IoT gateways — must demonstrate cybersecurity conformity or face
            fines of up to €15 million or 2.5% of global annual turnover.
          </Card>
          <Card icon={<Flag size={22} />} title="AIS-189 / AIS-190 (India)" to="/services/regulatory-compliance/ais-189-ais-190">
            India's automotive cybersecurity mandate — aligned with UN R155 — requires OEMs to
            demonstrate CSMS compliance for vehicles sold domestically. AIS-190 extends this to
            software update security (SUMS).
          </Card>
        </Grid>
        <p className={styles.regStrip}>
          <strong>Regulations we help you comply with:</strong>{' '}
          UN R155 · UN R156 · EU CRA · AIS-189 · AIS-190 · ISO/SAE 21434 · ISO 26262 · TISAX · SOTIF
        </p>
      </Section>

      {/* What we secure */}
      <Section alt>
        <H2 align="center" eyebrow="What we secure" code="02">Every Attack Surface. Fully Covered.</H2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: 720, margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Modern vehicles and connected devices are as software-defined as they are mechanical.
          CyMobility secures every layer — from silicon to cloud.
        </p>
        <div className={styles.assetGrid}>
          {[
            ['Vehicle Platforms', <Shield size={20} />],
            ['ECUs', <Cpu size={20} />],
            ['Telematics Units', <Radio size={20} />],
            ['ADAS Systems', <Bot size={20} />],
            ['Infotainment', <Music size={20} />],
            ['V2X Communication', <Wifi size={20} />],
            ['Gateway Controllers', <Network size={20} />],
            ['OTA Update Systems', <Cog size={20} />],
            ['IoT Devices', <Radar size={20} />],
            ['Cloud & APIs', <Cloud size={20} />],
          ].map(([name, icon]) => (
            <div key={name} className={styles.assetItem}>{icon}<span>{name}</span></div>
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section dark>
        <H2 align="center" eyebrow="Who we serve" code="03">
          Built for Every Player in the Automotive Value Chain
        </H2>
        <Grid cols={3}>
          <Card
            icon={<Cog size={22} />}
            title="For Automotive OEMs"
            to="/industries/automotive-oems"
            pills={['UN R155/R156', 'CSMS', 'AIS-189']}
          >
            Type approval is on the line. We help OEMs achieve CSMS and SUMS certification under
            UN R155/R156 and AIS-189 — from initial TARA through to compliance sign-off.
          </Card>
          <Card
            icon={<Network size={22} />}
            title="For Tier-1 & Tier-2 Suppliers"
            to="/industries/tier-1-tier-2-suppliers"
            pills={['ISO/SAE 21434', 'TARA', 'Pen Testing']}
          >
            Your OEM customers are demanding ISO/SAE 21434 compliance down the supply chain. We
            embed secure-by-design into your component development before it becomes a
            contractual blocker.
          </Card>
          <Card
            icon={<Radar size={22} />}
            title="For Connected Devices & IoT"
            to="/industries/connected-devices-iot"
            pills={['EU CRA', 'SBOM Scanning', 'IoT Security']}
          >
            EU CRA enforcement starts 2027. If your product connects to a network and ships to
            Europe, compliance is mandatory. We deliver gap assessments and full conformity
            reporting.
          </Card>
        </Grid>
      </Section>

      {/* Services grid */}
      <Section alt>
        <H2 align="center" eyebrow="What we do" code="04">
          End-to-End Automotive Cybersecurity — Testing, Compliance, Monitoring
        </H2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: 700, margin: '0 auto 2rem' }}>
          One partner for the full cybersecurity lifecycle. No gaps, no handoffs.
        </p>
        <Grid cols={3}>
          <Card icon={<Shield size={22} />} title="Regulatory Compliance" to="/services/regulatory-compliance">
            UN R155/R156, EU CRA, ISO/SAE 21434, AIS-189/190 and TISAX — guided by certified experts.
          </Card>
          <Card icon={<TestTube2 size={22} />} title="Security Testing & Vulnerability Analysis" to="/services/security-testing">
            In-house pen testing lab for ECUs, telematics, V2X, OTA and infotainment systems. AI-powered reporting.
          </Card>
          <Card icon={<Radar size={22} />} title="Threat Intelligence & VSOC" to="/services/threat-intelligence-vsoc">
            24/7 Vehicle Security Operations Centre with real-time OSINT monitoring and incident response.
          </Card>
          <Card icon={<Cog size={22} />} title="SDV Security Advisory" to="/services/sdv-security-advisory">
            Cybersecurity strategy for Software-Defined Vehicles — securing the architectures of next-generation mobility.
          </Card>
          <Card icon={<AlertTriangle size={22} />} title="TARA & Risk Assessment" to="/services/security-testing/tara">
            ISO/SAE 21434-aligned Threat Analysis and Risk Assessment — identifying risks before production.
          </Card>
          <Card icon={<BookOpen size={22} />} title="Security Workshops & Training" to="/services/security-workshops-training">
            Customised cybersecurity training for OEM and Tier-1 engineering and compliance teams.
          </Card>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '1.6rem' }}>
          <Link to="/services" className={styles.inlineLink}>View All Services →</Link>
          <span style={{ margin: '0 1rem', color: 'var(--text-muted)' }}>·</span>
          <Link to="/platform" className={styles.inlineLink}>Explore security.core →</Link>
        </div>
      </Section>

      {/* Platform teaser */}
      <Section dark>
        <H2 align="center" eyebrow="security.core platform" code="05">
          One Platform. Four Engines. Full Cybersecurity Lifecycle.
        </H2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: 760, margin: '0 auto 2rem' }}>
          Introducing security.core — CyMobility's proprietary automotive cybersecurity platform.
          Purpose-built to test, detect, monitor, and respond. All from a single dashboard.
        </p>
        <Grid cols={4}>
          <Card title={<><span className="mono">pentest</span>.core</>} to="/platform/pentest-core">
            AI-powered automated pen testing for hardware and embedded systems. SSH deployment, output capture, pass/fail analysis, AI-generated compliance reports.
          </Card>
          <Card title={<><span className="mono">fuzz</span>.core</>} to="/platform/fuzz-core">
            Uncovers crashes, memory leaks, and security weaknesses before production. Coverage-guided fuzzing and grammar-aware mutation.
          </Card>
          <Card title={<><span className="mono">threat</span>.core</>} to="/platform/threat-core">
            Real-time collection, analysis and visualisation of cybersecurity threats. OSINT processing and actionable intelligence dashboards.
          </Card>
          <Card title={<><span className="mono">vulnerability</span>.core</>} to="/platform/vulnerability-core">
            Automated SBOM/HBOM-based scanner. Continuously monitors components for known vulnerabilities. EU CRA-aligned reporting.
          </Card>
        </Grid>
      </Section>

      {/* Audit pipeline — terminal demonstration */}
      <section className={styles.terminalSection}>
        <div className="cyber-grid-dense" />
        <div className="container">
          <div className={styles.terminalIntro}>
            <p className={`${styles.termEyebrow} mono`}><span className="status-dot" /> AUDIT.PIPELINE</p>
            <h2 className={styles.termTitle}>From TARA to type approval — one verified pipeline</h2>
            <p className={styles.termLead}>
              Every CyMobility engagement produces auditable, machine-checkable evidence. Below: a
              representative trace of the compliance verification our team and the security.core
              platform run before every UN R155 submission.
            </p>
          </div>

          <motion.div
            className={styles.terminal}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.terminalBar}>
              <span className={styles.terminalDot} data-dot="r" />
              <span className={styles.terminalDot} data-dot="y" />
              <span className={styles.terminalDot} data-dot="g" />
              <span className={styles.terminalTitle}>cymobility — verify oem-platform-x — un-r155</span>
            </div>
            <div className={styles.terminalBody}>
              {TERMINAL_LINES(styles).map((line, i) => (
                <motion.div
                  key={i}
                  className={styles.termLine}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.15 + i * 0.06 }}
                >
                  {line || ' '}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Section alt>
        <H2 align="center" eyebrow="Client trust" code="06">Trusted by Teams That Can't Afford to Get It Wrong</H2>
        <Grid cols={2}>
          <blockquote className={styles.quote}>
            <p>"CyMobility helped us navigate the UN R155 compliance requirements with a level of technical depth and regulatory precision we hadn't found elsewhere. Their in-house testing capability and ISO 21434 expertise made a direct difference to our type approval timeline."</p>
            <footer>— Head of Cybersecurity Engineering, Leading Indian Automotive OEM</footer>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"The security.core platform gave our team real visibility into our ECU vulnerabilities during development — not after production. That shift alone has saved significant rework costs and given us confidence in our ISO/SAE 21434 audit."</p>
            <footer>— Cybersecurity Lead, Tier-1 Automotive Supplier</footer>
          </blockquote>
        </Grid>
      </Section>

      {/* Why CyMobility */}
      <Section dark>
        <H2 align="center" eyebrow="Why CyMobility" code="07">What Makes CyMobility Different</H2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: 720, margin: '0 auto 2rem' }}>
          We don't just advise — we test, certify, monitor, and stand beside you through every compliance milestone.
        </p>
        <Grid cols={4}>
          <Card title="In-House Pen Testing Lab" icon={<TestTube2 size={22} />}>
            Dedicated hardware and embedded systems lab — faster turnaround, tighter confidentiality, AI-powered reporting. No outsourcing.
          </Card>
          <Card title="End-to-End Lifecycle" icon={<Cog size={22} />}>
            From TARA and secure-by-design through pen testing, compliance certification, and post-deployment VSOC monitoring. One partner. No gaps.
          </Card>
          <Card title="Certified Regulatory Expertise" icon={<BookOpen size={22} />}>
            Certified experts across ISO/SAE 21434, ISO 26262, SOTIF and TISAX — with hands-on UN R155/R156, EU CRA, AIS-189/190 and EU RED experience.
          </Card>
          <Card title="India-First, Globally Compliant" icon={<Flag size={22} />}>
            The only automotive cybersecurity company covering AIS-189/190 and EU/global regulations under one roof — built for manufacturers operating across markets.
          </Card>
        </Grid>
        <div className={styles.isoBadges}>
          <span className={styles.isoBadge}>ISO 9001:2015</span>
          <span className={styles.isoBadge}>ISO 27001:2022</span>
          <Link to="/about/certifications-partnerships" className={styles.inlineLink}>View our full certifications →</Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section alt>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <H2 align="center">Frequently Asked Questions</H2>
          <FAQ items={FAQS} />
        </div>
      </Section>

      <CTABanner
        title="Your Compliance Journey Starts Here"
        body="Whether you're preparing for EU CRA enforcement, achieving UN R155 type approval, meeting India's AIS-189 mandate, or securing your vehicle platform against evolving cyber threats — CyMobility delivers the expertise, tooling, and certification support you need."
        secondaryCta={{ label: 'Download Company Profile', to: '/contact' }}
      />
    </>
  );
}
