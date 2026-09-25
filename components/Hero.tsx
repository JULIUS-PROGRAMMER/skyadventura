'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Activity, Building2, Thermometer, Check } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function Hero() {
  const { setIsDrawerOpen } = useRfq();

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Claims */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker (Zero-pill discipline, unboxed quiet text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-400">
              <span>Lusaka Central Hub</span>
              <span aria-hidden="true">·</span>
              <span>Southern Africa Clinical Supply</span>
              <span aria-hidden="true">·</span>
              <span>ZAMRA Reg. Wholesaler</span>
            </div>

            {/* Display Headline with text-wrap balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance font-display">
              Advancing Healthcare Systems Across Zambia with Certified Medical Technology
            </h1>

            {/* Subheading: Concrete and factual */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Sky Adventura is the nationwide distributor of CE and ISO-certified electro-medical machinery,
              diagnostic imaging, hospital ward infrastructure, and WHO-GDP compliant cold-chain pharmaceuticals. Serving public
              tertiary hospitals, private healthcare networks, and regional clinics from Plot 5147 Washama Road, Lusaka.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>Browse Medical Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#quote-builder"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Build Institutional RFQ</span>
              </a>
            </div>

            {/* Claim-to-Proof Adjacency: Quantitative Rigor (Tabular figures, unboxed) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">1,240+</div>
                <div className="text-xs text-slate-400 mt-0.5">Clinical Installations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400 tabular-nums">48h</div>
                <div className="text-xs text-slate-400 mt-0.5">Nationwide Dispatch</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">ZAMRA & GDP Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400 tabular-nums">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Biomedical Engineering</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Live Facility Telemetry Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 group">
              {/* High-Impact 16:9 / 4:3 Visual Asset with Fallback */}
              <div className="relative aspect-[4/3] w-full bg-slate-950">
                <Image
                  src="/images/hero_medical_equipment_1790234754560.jpg"
                  alt="High-tech hospital surgical suite and intensive care medical equipment delivered by Sky Adventura Zambia"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  referrerPolicy="no-referrer"
                />
                {/* Measured Scrim for Media Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              </div>

              {/* Live Facility Card Floating Bottom */}
              <div className="p-5 bg-slate-900/95 border-t border-slate-700/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">
                      Washama Rd Distribution Hub
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 tabular-nums">Lusaka, Zambia</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/50">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Thermometer className="w-3.5 h-3.5 text-teal-400" />
                      <span>Cold Room Telemetry</span>
                    </div>
                    <div className="font-semibold text-emerald-400 tabular-nums text-sm">
                      +3.8°C <span className="text-xs text-slate-400 font-normal">Optimal (2-8°C)</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/50">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                      <Truck className="w-3.5 h-3.5 text-teal-400" />
                      <span>Hospital Deliveries</span>
                    </div>
                    <div className="font-semibold text-white tabular-nums text-sm">
                      14 Active <span className="text-xs text-teal-400 font-normal">On Route</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>WHO Good Distribution Practices</span>
                  </div>
                  <span className="text-slate-500">·</span>
                  <a href="#tracking" className="text-teal-400 hover:text-teal-300 font-medium hover:underline">
                    Track Consignment &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
