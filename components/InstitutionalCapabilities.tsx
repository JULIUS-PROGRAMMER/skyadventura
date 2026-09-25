'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Pill, 
  ShoppingBag, 
  ThermometerSnowflake, 
  Truck, 
  FileCheck2, 
  CreditCard,
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  category: string;
  image: string;
  photoAlt: string;
  icon: React.ElementType;
  bullets: string[];
}

const services: ServiceCard[] = [
  {
    id: 'pom-supply',
    title: 'Prescription Medicines (POM) Supply',
    category: 'ZAMRA Scheduled POM',
    image: '/images/warehouse_medicine_boxes_1790270797620.jpg',
    photoAlt: 'Organized pharmaceutical warehouse storage with medicine boxes',
    icon: Pill,
    bullets: [
      'Direct sourcing of registered prescription pharmaceuticals, antibiotics, and critical injectables.',
      'Authentic manufacturer serialization and zero-tolerance anti-counterfeit pedigree verification.',
      'Full ZAMRA Good Wholesaling Practices (GWP) compliance across all bulk warehouse batches.'
    ]
  },
  {
    id: 'otc-distribution',
    title: 'Fast-Moving OTC Distribution',
    category: 'Consumer Healthcare',
    image: '/images/stocked_pharmacy_shelves_1790270809917.jpg',
    photoAlt: 'Stocked modern retail pharmacy shelves with OTC healthcare cartons',
    icon: ShoppingBag,
    bullets: [
      'Extensive inventory of high-demand OTC treatments, analgesics, wellness, and pediatric lines.',
      'High fill rates ensuring community chemists and retail clinics avoid stock-out disruptions.',
      'Volume-tiered institutional wholesale pricing maximizing retail pharmacy dispensing margins.'
    ]
  },
  {
    id: 'cold-chain-integrity',
    title: 'Cold-Chain Integrity',
    category: 'Temperature Regulated (2°C - 8°C)',
    image: '/images/coldchain_transport_vehicle_1790270821652.jpg',
    photoAlt: 'Interior of climate-controlled transport vehicle with digital monitoring',
    icon: ThermometerSnowflake,
    bullets: [
      'Active climate-controlled transport fleet maintaining continuous 2°C to 8°C temperature control.',
      'Digital GSM data loggers providing verifiable dispatch-to-delivery temperature audit trails.',
      'Dual-redundant backup power systems at our Lusaka depot for uncompromised biological storage.'
    ]
  },
  {
    id: 'express-restocking',
    title: 'Express Store Restocking',
    category: 'Doorstep Logistics',
    image: '/images/black_express_restock_1790341472452.jpg',
    photoAlt: 'Black African courier specialist delivering sealed pharmaceutical cartons to a Black retail pharmacist in Lusaka',
    icon: Truck,
    bullets: [
      'Rapid same-day Lusaka metro dispatch and scheduled 24-hour provincial replenishment.',
      'Flexible minimum order quantities tailored to protect retail pharmacy working capital.',
      'Direct pharmacy counter handoff with digital electronic proof-of-delivery (e-POD).'
    ]
  },
  {
    id: 'regulatory-documentation',
    title: 'Regulatory Batch Documentation',
    category: 'Quality Assurance',
    image: '/images/black_regulatory_qa_1790341497586.jpg',
    photoAlt: 'Black African female quality assurance pharmacist reviewing ZAMRA Certificates of Analysis and batch records',
    icon: FileCheck2,
    bullets: [
      'Manufacturer Certificates of Analysis (COA) and batch test certificates issued with each order.',
      'Complete end-to-end traceability from port-of-entry customs clearance to retail facility.',
      'Dedicated compliance team supporting institutional tenders, hospital audits, and ZAMRA filings.'
    ]
  },
  {
    id: 'trade-credit',
    title: 'Flexible Trade Credit',
    category: 'Commercial Solutions',
    image: '/images/black_trade_credit_1790341484975.jpg',
    photoAlt: 'Black African pharmacist in white coat reviewing digital trade credit ledger and orders on tablet',
    icon: CreditCard,
    bullets: [
      'Tailored 30 to 60-day commercial credit lines for verified healthcare providers and retail pharmacies.',
      'Transparent monthly ledger reconciliations and itemized electronic statement invoicing.',
      'Working capital financing solutions to support seasonal peak orders and tender fulfillment.'
    ]
  }
];

export default function InstitutionalCapabilities() {
  return (
    <section 
      id="institutional-services" 
      className="py-16 sm:py-20 bg-slate-100/80 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Institutional Pharmaceutical Distribution</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            Institutional Capabilities & Supply Solutions
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Patterned after global Good Distribution Practice (GDP) standards, Sky Adventura Medical Limited 
            supplies hospitals, clinics, and community retail pharmacies with authentic pharmaceuticals, 
            guaranteed cold-chain stability, and dependable credit terms across Zambia.
          </p>
        </div>

        {/* 3x2 Grid of Rectangular Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all duration-300 flex flex-col overflow-hidden scroll-mt-28 relative"
              >
                {/* Anchor targets for category deep-links */}
                {service.id === 'pom-supply' && (
                  <>
                    <span id="antibiotics-antimicrobials" className="absolute -top-28 pointer-events-none" />
                    <span id="chronic-care" className="absolute -top-28 pointer-events-none" />
                  </>
                )}
                {service.id === 'otc-distribution' && (
                  <>
                    <span id="pediatric-formulations" className="absolute -top-28 pointer-events-none" />
                    <span id="vitamins-wellness" className="absolute -top-28 pointer-events-none" />
                  </>
                )}
                {service.id === 'cold-chain-integrity' && (
                  <span id="cold-chain" className="absolute -top-28 pointer-events-none" />
                )}
                {service.id === 'express-restocking' && (
                  <span id="pharmacy-disposables" className="absolute -top-28 pointer-events-none" />
                )}

                {/* Photograph Banner (approx. 160px height) */}
                <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.photoAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-teal-300 text-[11px] font-semibold tracking-wide border border-teal-500/30">
                      <IconComponent className="w-3 h-3 text-teal-400" />
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Short Service Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* 2-3 Concise Bullet Points */}
                    <ul className="mt-3.5 space-y-2.5 text-xs text-slate-600">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-teal-700">
                    <a 
                      href={`https://wa.me/260966860962?text=${encodeURIComponent(`Hello Sky Adventura Medical, I would like to inquire about ${service.title} wholesale supply.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline text-teal-700 font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
