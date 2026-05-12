import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import PageHero from '../components/page/PageHero.jsx';
import { Section } from '../components/page/Section.jsx';
import CTABanner from '../components/page/CTABanner.jsx';
import styles from './glossary.module.css';

const ENTRIES = {
  A: [
    ['Adaptive AUTOSAR', 'A variant of the AUTOSAR standard designed for high-performance, service-oriented automotive computing platforms — used in central compute, infotainment and ADAS systems.'],
    ['ADAS', 'Advanced Driver-Assistance Systems. Vehicle features that automate, augment or enhance driving tasks (e.g. lane-keeping, adaptive cruise control, automatic emergency braking).'],
    ['AIS-189', "India's automotive cybersecurity standard, aligned with UN Regulation 155. Mandates a Cybersecurity Management System for vehicles sold in India."],
    ['AIS-190', "India's automotive software update management standard, aligned with UN Regulation 156. Mandates a Software Update Management System for vehicles with software-update capability."],
    ['Approval Authority', 'The governmental body responsible for vehicle type approval in a given jurisdiction (e.g. KBA in Germany, RDW in the Netherlands, ARAI in India).'],
    ['ARAI', "Automotive Research Association of India. One of India's principal vehicle type approval and testing authorities."],
    ['Attack Feasibility', 'A rating, used in TARA, of how feasible it is for a threat actor to execute a particular attack path. Considers required expertise, equipment, time, knowledge and window of opportunity.'],
    ['AUTOSAR', 'AUTomotive Open System ARchitecture. A worldwide development partnership defining standardised automotive software architecture. Two variants: Classic (deterministic, safety-critical ECUs) and Adaptive (service-oriented, high-performance computing).'],
  ],
  C: [
    ['CAN / CAN FD', 'Controller Area Network. The dominant in-vehicle communication bus standard. CAN FD (Flexible Data-Rate) is the higher-throughput evolution.'],
    ['Class I / Class II (EU CRA)', 'Product classifications under EU CRA defining the level of cybersecurity risk and the required conformity assessment route.'],
    ['CSMS', 'Cybersecurity Management System. The organisational framework required under UN R155 (and AIS-189) for managing cybersecurity across the vehicle lifecycle.'],
    ['CSPRNG', 'Cryptographically Secure Pseudo-Random Number Generator. Required for cryptographic operations in automotive secure systems.'],
    ['CVE', 'Common Vulnerabilities and Exposures. A publicly available identifier system for cybersecurity vulnerabilities.'],
  ],
  D: [
    ['DoIP', 'Diagnostics over Internet Protocol. ISO 13400 standard for vehicle diagnostic communication over Ethernet.'],
    ['DSRC', 'Dedicated Short-Range Communications. A V2X communication standard, increasingly being superseded by C-V2X in many markets.'],
  ],
  E: [
    ['ECU', 'Electronic Control Unit. The embedded computer controlling a specific vehicle function (e.g. engine ECU, brake ECU, gateway ECU).'],
    ['ENISA', 'European Union Agency for Cybersecurity. The body to which manufacturers report actively-exploited vulnerabilities under EU CRA.'],
    ['EU CRA', 'European Union Cyber Resilience Act (Regulation (EU) 2024/2847). EU regulation mandating cybersecurity conformity for products with digital elements sold in the EU. Enforcement begins December 2027.'],
    ['EU RED', 'EU Radio Equipment Directive (Directive 2014/53/EU). Includes cybersecurity articles (3.3 d, e, f) for radio equipment.'],
  ],
  F: [
    ['FlexRay', 'High-speed deterministic in-vehicle communication protocol used for safety-critical applications.'],
    ['Fuzz Testing', 'Automated software testing technique that injects malformed, unexpected or random inputs into a system to surface defects including security vulnerabilities.'],
  ],
  G: [
    ['Gateway ECU', 'Central ECU responsible for routing communications between different in-vehicle networks and enforcing segmentation between them.'],
    ['Grey-box Testing', 'Penetration testing methodology where the tester has partial knowledge of the system under test (e.g. some documentation, some source code).'],
  ],
  H: [
    ['HARA', 'Hazard Analysis and Risk Assessment. A functional safety analysis methodology defined by ISO 26262, parallel to cybersecurity\'s TARA.'],
    ['HBOM', 'Hardware Bill of Materials. Structured inventory of hardware components in a product.'],
    ['HIL', 'Hardware-in-the-Loop. Test methodology where real hardware (e.g. an ECU) is connected to simulated environment models.'],
  ],
  I: [
    ['iCAT', 'International Centre for Automotive Technology. An Indian automotive type approval and testing authority.'],
    ['IDPS', 'Intrusion Detection and Prevention System. In-vehicle component that monitors network traffic for anomalies and (in prevention mode) blocks them.'],
    ['ISO 21434', 'Road Vehicles Cybersecurity Engineering. The international standard providing the technical methodology framework for automotive cybersecurity.'],
    ['ISO 21448', 'Safety of the Intended Functionality (SOTIF). Standard addressing hazards arising from intended functionality including ADAS and AD.'],
    ['ISO 26262', 'Road Vehicles Functional Safety. International standard for functional safety of electrical/electronic systems in road vehicles.'],
    ['ISO 27001', 'Information Security Management Systems. CyMobility holds ISO 27001:2022 certification.'],
  ],
  J: [['JTAG', 'Joint Test Action Group. Standard interface for in-circuit testing and debugging of integrated circuits. Common hardware attack surface in pen testing.']],
  K: [
    ['KBA', 'Kraftfahrt-Bundesamt. The German federal motor transport authority and type approval body.'],
    ['Kill Switch', 'A safety or security feature enabling remote disablement of a vehicle function. A common cybersecurity concern as kill switches must be protected from unauthorised activation.'],
  ],
  L: [['LIN', 'Local Interconnect Network. Low-cost in-vehicle communication bus used for non-critical applications.']],
  O: [
    ['OBD', 'On-Board Diagnostics. Standardised diagnostic interface in vehicles (most commonly OBD-II in passenger vehicles).'],
    ['OEM', 'Original Equipment Manufacturer. In automotive, refers to vehicle manufacturers (e.g. Tata Motors, Mahindra, Volkswagen).'],
    ['OSINT', 'Open Source Intelligence. Intelligence gathered from publicly available sources, central to VSOC operations.'],
    ['OTA', 'Over-The-Air. Software update mechanism that delivers updates to vehicles wirelessly without requiring workshop visits.'],
  ],
  P: [
    ['Penetration Testing', 'Authorised simulated attack on a system, conducted to identify vulnerabilities that could be exploited by real threat actors.'],
    ['Pen Test', 'Common abbreviation for penetration testing.'],
  ],
  R: [
    ['RDW', 'Rijksdienst voor het Wegverkeer. The Netherlands\' type approval authority.'],
    ['Red Team', 'Adversary-emulation exercise that tests an organisation\'s defences against realistic attack scenarios.'],
  ],
  S: [
    ['SBOM', 'Software Bill of Materials. Structured inventory of every software component, library and dependency in a product. Required under EU CRA.'],
    ['SDV', 'Software-Defined Vehicle. Automotive architecture paradigm centred on central compute platforms, zonal ECUs, and service-oriented software stacks.'],
    ['SIEM', 'Security Information and Event Management. Platform for security event collection, correlation, and analysis.'],
    ['SIL', 'Software-in-the-Loop. Test methodology where software is tested against simulated environments without physical hardware.'],
    ['SOME/IP', 'Scalable service-Oriented MiddlewarE over IP. A service-oriented communication protocol used in Adaptive AUTOSAR.'],
    ['SOTIF', 'Safety of the Intended Functionality. See ISO 21448.'],
    ['SUMS', 'Software Update Management System. The organisational framework required under UN R156 (and AIS-190) for managing vehicle software updates.'],
  ],
  T: [
    ['TARA', 'Threat Analysis and Risk Assessment. The foundational cybersecurity analysis activity required under ISO/SAE 21434, UN R155 and AIS-189.'],
    ['TCU', 'Telematics Control Unit. ECU responsible for the vehicle\'s cellular, Wi-Fi and remote connectivity functions.'],
    ['TISAX', 'Trusted Information Security Assessment Exchange. The German automotive industry\'s information security assessment framework.'],
    ['Type Approval', 'The process by which a vehicle (or vehicle component) is certified by a regulatory authority as meeting all applicable regulations before being placed on the market.'],
  ],
  U: [
    ['UDS', 'Unified Diagnostic Services. ISO 14229 standard for automotive diagnostic communication.'],
    ['UN R155', 'UN Regulation 155. Mandates cybersecurity management systems for vehicle type approval in UNECE markets.'],
    ['UN R156', 'UN Regulation 156. Mandates software update management systems for vehicles with software-update capability.'],
    ['UNECE', 'United Nations Economic Commission for Europe. The body responsible for UN vehicle regulations (including UN R155 and UN R156).'],
  ],
  V: [
    ['V2X', 'Vehicle-to-Everything communication. Includes V2V, V2I, V2N and V2P.'],
    ['VSOC', 'Vehicle Security Operations Centre. Specialised SOC for monitoring connected vehicles and the automotive ecosystem for cybersecurity threats.'],
    ['Vulnerability', 'A weakness in a system that could be exploited by a threat actor to compromise cybersecurity.'],
  ],
  W: [
    ['White-box Testing', 'Penetration testing methodology where the tester has full knowledge of the system under test (source code, design documentation, etc.).'],
    ['WP-15-XX', 'ISO/SAE 21434 work products in the cybersecurity risk assessment (TARA) section. WP-15-01 through WP-15-08 cover item definition through risk treatment.'],
  ],
  Z: [['Zonal ECU', 'In an SDV architecture, an ECU that aggregates connectivity for a physical zone of the vehicle (rather than for a specific function), reducing wiring harness complexity.']],
};

const LETTERS = Object.keys(ENTRIES);

export default function Glossary() {
  return (
    <>
      <Seo
        title="Automotive Cybersecurity Glossary | Terms & Acronyms | CyMobility"
        description="Glossary of automotive cybersecurity terms — CSMS, SUMS, TARA, VSOC, SBOM, UN R155, EU CRA, ISO 21434, AIS-189 and more. Concise expert definitions."
        path="/glossary/"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Glossary', path: '/glossary/' },
        ])}
      />
      <PageHero
        eyebrow="Glossary"
        title="Automotive Cybersecurity Glossary"
        subtitle="A working vocabulary of automotive cybersecurity — concise definitions of the terms, acronyms and concepts you will encounter across regulation, engineering and operations."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Glossary' }]}
      />

      <Section>
        <nav className={styles.indexBar} aria-label="Glossary index">
          {LETTERS.map((l) => (
            <a key={l} href={`#letter-${l}`} className={styles.indexLink}>{l}</a>
          ))}
        </nav>
        {LETTERS.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className={styles.letterBlock}>
            <h2 className={styles.letter}>{letter}</h2>
            <dl className={styles.dl}>
              {ENTRIES[letter].map(([term, def]) => (
                <div key={term} className={styles.entry}>
                  <dt>{term}</dt>
                  <dd>{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </Section>

      <CTABanner
        title="From definitions to delivery"
        secondaryCta={{ label: 'Explore Compliance Guides', to: '/compliance-guides' }}
      />
    </>
  );
}
