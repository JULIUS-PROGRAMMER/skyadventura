export interface MedicalProduct {
  id: string;
  name: string;
  category: 'electromedical' | 'imaging' | 'furniture' | 'laboratory' | 'coldchain';
  categoryLabel: string;
  modelNumber: string;
  certification: string;
  priceZMW: number;
  priceUSD: number;
  description: string;
  keySpecs: { label: string; value: string }[];
  applications: string[];
  warrantyYears: number;
  inStock: boolean;
  leadTime: string;
  image: string;
  oemPartner: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Systems' },
  { id: 'electromedical', label: 'Electro-Medical & ICU' },
  { id: 'imaging', label: 'Diagnostic Imaging' },
  { id: 'furniture', label: 'Hospital Infrastructure' },
  { id: 'laboratory', label: 'Clinical Laboratory' },
  { id: 'coldchain', label: 'Cold-Chain & Storage' },
] as const;

export const MEDICAL_CATALOG: MedicalProduct[] = [
  {
    id: 'em-mon-800',
    name: 'ICU Multi-Parameter Vital Signs Patient Monitor 12.1"',
    category: 'electromedical',
    categoryLabel: 'Electro-Medical & ICU',
    modelNumber: 'EM-MON-800 Pro',
    certification: 'CE 0123 / ISO 13485 / ZAMRA Approved',
    priceZMW: 78500,
    priceUSD: 2950,
    description: 'High-acuity bedside monitor configured with 7-lead ECG, digital Masimo SpO2, non-invasive blood pressure (NIBP), dual-channel temperature, and end-tidal CO2 interface for critical care wards.',
    keySpecs: [
      { label: 'Display', value: '12.1" Anti-glare TFT Touchscreen (800x600)' },
      { label: 'Parameters', value: 'ECG, SpO2, NIBP, Resp, 2-Temp, PR (Opt: 2-IBP, EtCO2)' },
      { label: 'Battery Backup', value: '4.5 Hours continuous runtime (Li-ion)' },
      { label: 'Networking', value: 'HL7 & Central Nursing Station CMS Ethernet/Wi-Fi' },
      { label: 'Waveforms', value: 'Up to 8 simultaneous real-time traces' }
    ],
    applications: ['Intensive Care Units', 'Operating Theatres', 'Emergency Departments', 'Post-Anesthesia Care'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Immediate Dispatch from Lusaka Hub (24-48h)',
    image: '/images/hero_medical_equipment_1790234754560.jpg',
    oemPartner: 'Mindray / Contec Biosystems Global'
  },
  {
    id: 'em-vent-pro',
    name: 'Turbine-Driven Invasive & Non-Invasive ICU Ventilator',
    category: 'electromedical',
    categoryLabel: 'Electro-Medical & ICU',
    modelNumber: 'EM-VENT-900 Turbo',
    certification: 'CE 0197 / ISO 13485 / WHO Recommended',
    priceZMW: 420000,
    priceUSD: 15800,
    description: 'Autonomous high-performance ICU ventilator with integrated ultra-quiet internal turbine. Operates independently of centralized hospital gas supply, making it ideal for both tertiary hospitals and district facilities.',
    keySpecs: [
      { label: 'Patient Range', value: 'Neonatal (from 0.5kg), Pediatric, and Adult' },
      { label: 'Drive Mechanism', value: 'High-speed blower turbine (no wall air compressor needed)' },
      { label: 'Ventilation Modes', value: 'VCV, PCV, SIMV, PSV, PRVC, DuoLevel, APRV, CPAP/NIV' },
      { label: 'Tidal Volume', value: '20 mL – 2000 mL (2 mL – 300 mL neonatal option)' },
      { label: 'Battery Support', value: 'Dual hot-swappable batteries, up to 6 hours continuous' }
    ],
    applications: ['Tertiary ICU', 'Emergency Medical Transport', 'District Hospital Step-Down', 'Surgical Recovery'],
    warrantyYears: 3,
    inStock: true,
    leadTime: 'Stock available in Lusaka (48h commissioning)',
    image: '/images/hero_medical_equipment_1790234754560.jpg',
    oemPartner: 'Hamilton / Aeonmed Clinical'
  },
  {
    id: 'em-ecg-1200',
    name: '12-Channel Electrocardiograph with Glasgow Interpretation',
    category: 'electromedical',
    categoryLabel: 'Electro-Medical & ICU',
    modelNumber: 'EM-ECG-1200 Plus',
    certification: 'CE 0123 / ISO 9001 / ZAMRA Approved',
    priceZMW: 46000,
    priceUSD: 1750,
    description: 'Simultaneous 12-lead acquisition system equipped with clinically proven Glasgow automatic diagnosis algorithm, thermal high-speed array recorder, and USB/SD export capabilities.',
    keySpecs: [
      { label: 'Display', value: '8" Color LCD with touchscreen interface' },
      { label: 'Sampling Rate', value: '1000 Hz with digital baseline drift filter' },
      { label: 'Printing Paper', value: '210mm/216mm Z-fold or roll paper' },
      { label: 'Memory', value: '1,000 ECG patient records internal storage' },
      { label: 'Connectivity', value: 'Direct DICOM / PDF export via USB / LAN' }
    ],
    applications: ['Cardiology Wards', 'Outpatient Clinics', 'Mobile Health Screenings', 'Pre-operative Screening'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Immediate Stock (24h Delivery)',
    image: '/images/hero_medical_equipment_1790234754560.jpg',
    oemPartner: 'Bionet / Edan Instruments'
  },
  {
    id: 'em-defib-500',
    name: 'Biphasic Defibrillator Monitor with AED & Pacing',
    category: 'electromedical',
    categoryLabel: 'Electro-Medical & ICU',
    modelNumber: 'EM-DEFIB-500 Biphasic',
    certification: 'CE 0123 / ISO 13485 / AHA Guidelines',
    priceZMW: 125000,
    priceUSD: 4700,
    description: 'Ruggedized biphasic truncated exponential defibrillator delivering 1 to 360 Joules. Features manual defibrillation, AED voice guidance mode, external transcutaneous pacing, and 3/5-lead ECG monitoring.',
    keySpecs: [
      { label: 'Energy Range', value: '1J to 360J (Manual), 200J Biphasic (AED mode)' },
      { label: 'Charging Speed', value: 'Less than 5 seconds to 200 Joules' },
      { label: 'Pacing Mode', value: 'Demand and Fixed pacing with configurable rate/current' },
      { label: 'Paddles', value: 'Multi-function adult paddles with integrated pediatric adapters' },
      { label: 'Data Log', value: '100 patient event recording with voice review' }
    ],
    applications: ['Ambulance & Crash Teams', 'Emergency Rooms', 'Cardiac Care Units', 'Cath Labs'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Immediate Stock in Lusaka',
    image: '/images/hero_medical_equipment_1790234754560.jpg',
    oemPartner: 'Zoll / Mindray Medical'
  },
  {
    id: 'em-us-color4d',
    name: 'Trolley-Mounted Color Doppler 4D Diagnostic Ultrasound System',
    category: 'imaging',
    categoryLabel: 'Diagnostic Imaging',
    modelNumber: 'EM-US-COLOR4D Pro',
    certification: 'CE 0123 / FDA Cleared / ZAMRA Approved',
    priceZMW: 380000,
    priceUSD: 14300,
    description: 'Comprehensive shared-service diagnostic ultrasound delivering crystal-clear 2D, 3D, and real-time 4D volumetric imaging with elastography and advanced cardiac strain packages.',
    keySpecs: [
      { label: 'Monitor', value: '21.5" High-definition LED articulating arm + 13.3" Touch Panel' },
      { label: 'Probe Sockets', value: '4 Active transducer ports with electronic switching' },
      { label: 'Probes Included', value: 'Convex 3.5MHz, Linear 7.5MHz, Transvaginal 6.5MHz' },
      { label: 'Imaging Modes', value: 'B, M, CFM, PDI, PW, CW, 4D Volumetric, Tissue Doppler' },
      { label: 'Export', value: 'Full DICOM 3.0, PACS integration, 500GB SSD' }
    ],
    applications: ['Obstetrics & Gynecology', 'Radiology Centers', 'Cardiology Diagnostics', 'Vascular & Small Parts'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Lusaka Showroom Demo Unit / 48h Delivery',
    image: '/images/diagnostics_ultrasound_1790234773275.jpg',
    oemPartner: 'SonoScape / Chison Medical'
  },
  {
    id: 'em-us-pocket',
    name: 'Dual-Head Wireless Handheld Point-of-Care Ultrasound (POCUS)',
    category: 'imaging',
    categoryLabel: 'Diagnostic Imaging',
    modelNumber: 'EM-POCUS-DUAL',
    certification: 'CE / ISO 13485 / IP67 Water Resistant',
    priceZMW: 85000,
    priceUSD: 3200,
    description: 'Ultra-portable pocket ultrasound probe featuring dual transducers (Phased Array + Convex or Linear) communicating wirelessly to iOS/Android tablets for immediate bedside triaging.',
    keySpecs: [
      { label: 'Weight', value: '210 grams with ergonomic drop-resistant body' },
      { label: 'Transducer', value: 'Dual Head (Convex 3.2MHz / Linear 7.5MHz)' },
      { label: 'Connection', value: '5GHz Wi-Fi direct connection to iPad/Android' },
      { label: 'Battery', value: '3.5 Hours continuous scanning, wireless inductive charging' },
      { label: 'Presets', value: 'Cardiac, Abdominal, Lung FAST, Vascular, Musculoskeletal' }
    ],
    applications: ['Rural Health Outreach', 'Emergency Department Triage', 'ICU Vascular Access', 'Ambulance Transport'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Stock Available (24h Dispatch)',
    image: '/images/diagnostics_ultrasound_1790234773275.jpg',
    oemPartner: 'Clarius / Butterfly iQ Partnered'
  },
  {
    id: 'em-bed-icu5',
    name: '5-Function Motorized Intensive Care Hospital Bed with Trendelenburg',
    category: 'furniture',
    categoryLabel: 'Hospital Infrastructure',
    modelNumber: 'EM-BED-ICU5 Elegance',
    certification: 'CE / ISO 9001 / IEC 60601-2-52',
    priceZMW: 62000,
    priceUSD: 2350,
    description: 'Heavy-duty electric ICU bed featuring Linak Denmark medical actuators, nurse central supervisory panel, split fold-down ABS side rails with built-in angle gauges, and manual emergency CPR release.',
    keySpecs: [
      { label: 'Safe Working Load', value: '250 kg (550 lbs)' },
      { label: 'Actuators', value: '4 Linak linear motors with battery backup' },
      { label: 'Adjustments', value: 'Backrest (0-75°), Knee (0-45°), Height (450-800mm), Trendelenburg (±16°)' },
      { label: 'Mattress Base', value: 'X-ray translucent backrest with cassette tray slot' },
      { label: 'Castors', value: '150mm Central locking system with steering wheel' }
    ],
    applications: ['Intensive Care Units', 'High Dependency Units', 'Post-Op Recovery', 'VIP Private Suites'],
    warrantyYears: 3,
    inStock: true,
    leadTime: 'Batch in Lusaka Warehouse (Immediate Dispatch)',
    image: '/images/hospital_ward_infrastructure_1790234785855.jpg',
    oemPartner: 'Lojer / Fazzini Hospital Furniture'
  },
  {
    id: 'em-bed-mat',
    name: 'Multi-Position Hydraulic Obstetric Delivery Bed',
    category: 'furniture',
    categoryLabel: 'Hospital Infrastructure',
    modelNumber: 'EM-BED-MAT70',
    certification: 'CE / ISO 13485 / WHO Maternal Care Standard',
    priceZMW: 48000,
    priceUSD: 1800,
    description: 'Ergonomic maternal labor, delivery, and recovery (LDR) bed featuring hydraulic height control, hideaway leg section, adjustable lithotomy stirrups, and seamless antimicrobial washable mattress.',
    keySpecs: [
      { label: 'Operation', value: 'Hydraulic foot pump elevation + gas-spring backrest' },
      { label: 'Leg Section', value: 'Sliding undercarriage platform for rapid delivery conversion' },
      { label: 'Basin', value: 'Telescopic stainless steel waste receptacle' },
      { label: 'Accessories', value: 'Padded calf crutches, hand grips, stainless IV pole' }
    ],
    applications: ['Maternity Wings', 'Labor & Delivery Wards', 'District Obstetric Clinics'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'In Stock Lusaka',
    image: '/images/hospital_ward_infrastructure_1790234785855.jpg',
    oemPartner: 'Sky Adventura OEM Fabrication'
  },
  {
    id: 'em-light-led8',
    name: 'Ceiling-Mounted Shadowless Dual-Dome LED Surgical Lamp',
    category: 'furniture',
    categoryLabel: 'Hospital Infrastructure',
    modelNumber: 'EM-LIGHT-LED8 Twin',
    certification: 'CE / ISO 13485 / Medical Grade III',
    priceZMW: 110000,
    priceUSD: 4150,
    description: 'Twin-arm laminar airflow compliant surgical luminaire delivering 160,000 + 120,000 Lux with German Osram medical LEDs, adjustable color temperature (3,500K - 5,000K), and detachable sterilizable handle.',
    keySpecs: [
      { label: 'Illumination', value: 'Dome A: 160,000 Lux; Dome B: 120,000 Lux' },
      { label: 'Color Rendering (Ra)', value: '≥ 97 for natural tissue discrimination' },
      { label: 'LED Lifespan', value: '> 60,000 Hours maintenance-free' },
      { label: 'Endoscopy Mode', value: 'Subtle green ambient light mode included' }
    ],
    applications: ['Major Operating Theatres', 'Trauma Centers', 'Orthopedic Surgery Suites'],
    warrantyYears: 3,
    inStock: true,
    leadTime: 'Lusaka Installation Engineers On-Site in 48h',
    image: '/images/hospital_ward_infrastructure_1790234785855.jpg',
    oemPartner: 'KLS Martin / Mindray Lighting'
  },
  {
    id: 'em-lab-chem240',
    name: 'Fully Automated Random Access Clinical Biochemistry Analyzer',
    category: 'laboratory',
    categoryLabel: 'Clinical Laboratory',
    modelNumber: 'EM-LAB-CHEM240',
    certification: 'CE / IVD Directive 98/79/EC / ISO 15189',
    priceZMW: 260000,
    priceUSD: 9800,
    description: 'Benchtop clinical chemistry workstation providing constant throughput of 200 photometric tests/hour (up to 330 with ISE). Features continuous reagent refrigeration and 80 reaction cuvette positions.',
    keySpecs: [
      { label: 'Throughput', value: '200 tests/hour constant speed, 24-hour uninterrupted' },
      { label: 'Reagent Carousel', value: '40 reagent positions with 2°C - 8°C on-board cooling' },
      { label: 'Sample Carousel', value: '40 sample positions including urgent STAT priorities' },
      { label: 'Cuvette Wash', value: 'Automatic 8-step cuvette washing station' },
      { label: 'Water Usage', value: 'Less than 5 Liters per hour pure deionized water' }
    ],
    applications: ['Clinical Chemistry Laboratories', 'Hospital Pathology Wards', 'Regional Referral Centers'],
    warrantyYears: 2,
    inStock: true,
    leadTime: 'Stock in Lusaka with Initial Reagent Starter Pack',
    image: '/images/diagnostics_ultrasound_1790234773275.jpg',
    oemPartner: 'Dirui / Rayto Life Sciences'
  },
  {
    id: 'em-cold-sdd115',
    name: 'WHO PQS Solar Direct Drive (SDD) Vaccine Refrigerator 115L',
    category: 'coldchain',
    categoryLabel: 'Cold-Chain & Storage',
    modelNumber: 'EM-COLD-SDD115 Green',
    certification: 'WHO PQS Certified (E003/112) / ZAMRA Compliant',
    priceZMW: 145000,
    priceUSD: 5450,
    description: 'Battery-free solar direct drive vaccine storage refrigerator engineered specifically for rural Zambian clinics and health posts with unstable or zero electrical grid supply. Retains +2°C to +8°C for 72+ hours of complete autonomy.',
    keySpecs: [
      { label: 'Vaccine Capacity', value: '115 Liters net vaccine storage volume' },
      { label: 'Autonomy Period', value: '78 Hours holdover at +43°C ambient temperature' },
      { label: 'Power Input', value: '100% Direct Solar PV Panels (No lead-acid batteries)' },
      { label: 'Refrigerant', value: 'CFC-free R600a eco-friendly hydrocarbon' },
      { label: 'Monitoring', value: 'Integrated WHO PQS 30-day electronic temperature logger' }
    ],
    applications: ['Rural Health Posts (EPI Programs)', 'District Vaccine Stores', 'MOH Immunization Centers'],
    warrantyYears: 3,
    inStock: true,
    leadTime: 'Direct Warehouse Stock Lusaka (Complete Solar Kit)',
    image: '/images/coldchain_pharmaceutical_storage_1790234797874.jpg',
    oemPartner: 'B Medical Systems / Vestfrost Solutions'
  },
  {
    id: 'em-cold-ult86',
    name: 'Ultra-Low Temperature -86°C Biomedical Deep Freezer 528L',
    category: 'coldchain',
    categoryLabel: 'Cold-Chain & Storage',
    modelNumber: 'EM-ULT-FREEZE86',
    certification: 'CE / ISO 13485 / Energy Star Certified',
    priceZMW: 295000,
    priceUSD: 11100,
    description: 'Dual-independent cascade refrigeration system designed for vital mRNA vaccine storage, biological samples, and pharmaceutical APIs. Features VIP vacuum insulation panels and microprocessor backup.',
    keySpecs: [
      { label: 'Temperature Range', value: '-40°C down to -86°C (0.1°C precision)' },
      { label: 'Capacity', value: '528 Liters (Holds up to 40,000 standard 2mL cryovials)' },
      { label: 'Alarm System', value: 'Audible/visual alarms + SMS alert module for temperature drift' },
      { label: 'Insulation', value: 'Vacuum Insulation Panels (VIP) with dual silicone door gaskets' },
      { label: 'Backup Interface', value: 'CO2 / LN2 emergency injection backup port' }
    ],
    applications: ['National Vaccine Warehouses', 'Medical Research Institutes', 'Blood Transfusion Centers'],
    warrantyYears: 3,
    inStock: true,
    leadTime: 'Lusaka Cold-Hub Staged Unit (48h Transport)',
    image: '/images/coldchain_pharmaceutical_storage_1790234797874.jpg',
    oemPartner: 'Haier Biomedical / Thermo Fisher'
  }
];

export interface RfqItem {
  product: MedicalProduct;
  quantity: number;
}

export interface RequisitionRecord {
  id: string;
  facilityName: string;
  facilityCity: string;
  district: string;
  status: 'regulatory_cleared' | 'warehouse_staging' | 'in_transit' | 'installed_commissioned';
  statusLabel: string;
  estimatedArrival: string;
  itemSummary: string;
  engineerAssigned: string;
  temperatureControlled: boolean;
  coldChainReading?: string;
  zamraComplianceRef: string;
}

export const SAMPLE_REQUISITIONS: RequisitionRecord[] = [
  {
    id: 'ZM-MED-8814',
    facilityName: 'Lusaka Apex Teaching Hospital',
    facilityCity: 'Lusaka',
    district: 'Lusaka Province',
    status: 'in_transit',
    statusLabel: 'Temperature-Controlled Fleet in Transit',
    estimatedArrival: 'Today, 14:30 CAT',
    itemSummary: '4x ICU Multi-Parameter Monitors, 2x Turbine Ventilators',
    engineerAssigned: 'Eng. Chileshe Mwewa (Lead Biomedical Eng)',
    temperatureControlled: true,
    coldChainReading: '+4.1°C (Within GDP Threshold)',
    zamraComplianceRef: 'ZAMRA/WH/2026-LUS-089'
  },
  {
    id: 'NDL-REG-3042',
    facilityName: 'Ndola Central Referral Hospital',
    facilityCity: 'Ndola',
    district: 'Copperbelt Province',
    status: 'warehouse_staging',
    statusLabel: 'Staging & Fluke Calibration at Washama Hub',
    estimatedArrival: 'Tomorrow, 09:00 CAT',
    itemSummary: '1x Color Doppler 4D Ultrasound, 6x Motorized ICU Beds',
    engineerAssigned: 'Eng. Natasha Banda (Diagnostic Systems)',
    temperatureControlled: false,
    zamraComplianceRef: 'ZAMRA/WH/2026-COP-114'
  },
  {
    id: 'LIV-DIST-9011',
    facilityName: 'Livingstone District General Hospital',
    facilityCity: 'Livingstone',
    district: 'Southern Province',
    status: 'installed_commissioned',
    statusLabel: 'Commissioned & Clinical Sign-Off Complete',
    estimatedArrival: 'Completed Sept 22, 2026',
    itemSummary: '2x WHO Solar Direct Drive Vaccine Freezers, 1x ECG Machine',
    engineerAssigned: 'Eng. Kelvin Phiri (Cold-Chain Specialist)',
    temperatureControlled: true,
    coldChainReading: '+3.5°C Stable',
    zamraComplianceRef: 'ZAMRA/WH/2026-STH-047'
  }
];
