'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, ShieldCheck, Stethoscope, HeartPulse, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function ClinicalSolutions() {
  const { setIsDrawerOpen } = useRfq();

  const solutions = [
    {
      title: 'Turnkey Intensive Care & High Dependency Units',
      category: 'Critical Care Infrastructure',
      description: 'Comprehensive setup of adult, pediatric, and neonatal ICU suites. Includes turbine-independent ventilators, central nursing station telemetry, motorized 5-function ICU beds, and backup UPS power stabilization.',
      image: '/images/hospital_ward_infrastructure_1790234785855.jpg',
      features: [
        'Central telemetry monitoring up to 32 beds',
        'Independent turbine ventilation without piped medical air',
        'Linak-actuated multi-position electric beds with CPR release',
        'Invasive arterial pressure & capnography diagnostics'
      ],
      metrics: '42+ ICU Units Installed Across Zambia'
    },
    {
      title: 'Advanced Diagnostic Imaging & Women’s Health',
      category: 'Radiology & Ultrasound Suites',
      description: 'High-resolution color Doppler ultrasound, handheld wireless POCUS systems, and high-frequency C-arm mobile fluoroscopy. Engineered for high diagnostic accuracy in obstetrics, cardiology, and general imaging.',
      image: '/images/diagnostics_ultrasound_1790234773275.jpg',
      features: [
        'Crystal clear 2D/3D/4D volumetric obstetrics',
        'High-density probes: Convex, Linear, Cardiac & Transvaginal',
        'DICOM 3.0 export and PACS hospital network integration',
        'Certified user training for sonographers and clinical staff'
      ],
      metrics: '310+ Active Diagnostic Systems Supported'
    },
    {
      title: 'Pharmaceutical Cold-Chain & Vaccine Depots',
      category: 'WHO-GDP Cold Logistics',
      description: 'Solar Direct Drive (SDD) battery-free refrigerators for rural healthcare centers and -86°C ultra-low freezers for central pharmaceutical stores, maintaining unbroken temperature integrity across all Zambian terrains.',
      image: '/images/coldchain_pharmaceutical_storage_1790234797874.jpg',
      features: [
        'WHO PQS certified solar direct drive vaccine refrigerators',
        'Continuous GSM wireless temperature loggers with SMS alarms',
        'Ultra-low -86°C freezers for biologicals and mRNA storage',
        'Insulated WHO cold boxes and vaccine carriers'
      ],
      metrics: '100% Cold-Chain Integrity Guarantee'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
            Clinical Solutions & Hospital Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Tailored Equipment Systems for Public & Private Health Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Sky Adventura delivers end-to-end clinical infrastructure: from technical needs assessment and equipment specification,
            to importation, local biomedical calibration, and continuous preventive maintenance contracts.
          </p>
        </div>

        {/* Asymmetric Showcase Cards */}
        <div className="space-y-12">
          {solutions.map((sol, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors`}
              >
                {/* Visual Asset Container */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 group">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-slate-800 bg-white/95 backdrop-blur-xs rounded shadow-2xs">
                      {sol.category}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                    {sol.metrics}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="#quote-builder"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
                    >
                      <span>Inquire About This Solution</span>
                      <ArrowRight className="w-4 h-4" />
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
