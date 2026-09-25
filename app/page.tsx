'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  Pill, 
  Activity, 
  ThermometerSnowflake, 
  HeartPulse, 
  Package, 
  Clock, 
  Truck, 
  FileCheck2, 
  CreditCard, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  BadgeCheck, 
  Quote, 
  Send,
  Building2,
  Sparkles,
  Target,
  Eye,
  HeartHandshake
} from 'lucide-react';
import PharmacyReviewsCarousel from '@/components/PharmacyReviewsCarousel';

export default function Home() {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [pharmacyName, setPharmacyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [itemsNeeded, setItemsNeeded] = useState('');
  const [whatsappRfqUrl, setWhatsappRfqUrl] = useState('');

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const rfqText = `Hello Skyadventura Medical,\n\n*WHOLESALE MEDICINE RFQ*\n----------------------------\n*Pharmacy / Facility:* ${pharmacyName}\n*Purchaser / Contact:* ${contactPerson}\n*Phone Number:* ${phone}\n\n*Required Medicines / Stock List:*\n${itemsNeeded}\n\nPlease confirm stock availability, verify 18+ months shelf-life, and provide wholesale quotation.`;
    
    const waUrl = `https://wa.me/260966860962?text=${encodeURIComponent(rfqText)}`;
    setWhatsappRfqUrl(waUrl);
    setRfqSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className="bg-white text-slate-800">
      {/* =========================================================
          1. HERO SECTION (Split-Screen Layout)
         ========================================================= */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide shadow-xs">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>ZAMRA-Licensed Wholesale Distributor · Lusaka, Zambia</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Your Certified B2B Partner for Seamless Wholesale Medicine Distribution in Zambia.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Supplying retail pharmacies across Zambia with ZAMRA-approved prescription drugs, fast-moving OTCs, and cold-chain therapeutics delivered with guaranteed shelf-life and batch traceability.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href="https://wa.me/260966860962?text=Hello%20Skyadventura%20Medical%2C%20I%20would%20like%20to%20request%20a%20bulk%20wholesale%20medicine%20quote%20for%20our%20pharmacy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg shadow-teal-900/30 transition-all font-bold group"
                >
                  <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Request Bulk Quote via WhatsApp</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl transition-all font-semibold"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </Link>
              </div>

              {/* Quick Trust Checklist */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Direct WHO-GMP Sourcing</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>18+ Months Shelf-Life Policy</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Fast Metro & Provincial Dispatch</span>
                </div>
              </div>

            </div>

            {/* Right Column: Framed Photo of Lusaka Logistics Hub with Black Professionals */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <div className="relative h-[380px] sm:h-[450px] w-full">
                  <Image
                    src="/images/zambian_pharma_hub_1790336951132.jpg"
                    alt="Black African pharmacists inspecting stock inside Skyadventura modern pharmaceutical warehouse hub in Lusaka Zambia"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>

                {/* Floating Hub Information Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                      <span className="text-xs font-bold text-teal-400 tracking-wide uppercase">
                        Central Logistics Depot
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Mungwi Rd, Lusaka</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    High-density pharmaceutical warehousing with active intake verification, batch serialization, and unbroken GDP cold-chain preservation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. LIVE OPERATIONAL STATS BAR
         ========================================================= */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 sm:py-8 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="border-l-2 border-teal-500 pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white tabular-nums">
                1,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Active Pharmaceutical SKUs
              </div>
            </div>

            <div className="border-l-2 border-teal-500 pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-teal-400 tabular-nums">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                ZAMRA & GDP Compliant
              </div>
            </div>

            <div className="border-l-2 border-teal-500 pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white tabular-nums">
                &lt; 24 Hours
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Local Lusaka Delivery Turnaround
              </div>
            </div>

            <div className="border-l-2 border-teal-500 pl-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-teal-400 tabular-nums">
                10 Provinces
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Nationwide Logistics Reach
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. ABOUT US PREVIEW: MISSION, VISION & CORE VALUES
         ========================================================= */}
      <section id="about-us-preview" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>ABOUT SKYADVENTURA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Mission, Vision & Core Values
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded to resolve supply bottlenecks for retail pharmacies in Zambia, we are guided by strict regulatory adherence, transparent wholesale pricing, and unwavering partner commitment.
            </p>
          </div>

          {/* 3-Card Grid: Mission, Vision & Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 01: Our Mission */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-teal-600/40">01</span>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <Target className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Our Mission
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower retail pharmacy operators across Zambia by delivering authentic, high-quality pharmaceutical products through a transparent, efficient, and regulatory-compliant supply chain.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Empowering Retail Operators</span>
              </div>
            </div>

            {/* Card 02: Our Vision */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-teal-600/40">02</span>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Our Vision
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  To become Zambia’s primary and most trusted B2B pharmaceutical wholesale partner, recognized for cold-chain integrity, fast regional distribution, and unwavering support for retail healthcare providers.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Trusted National Wholesale Partner</span>
              </div>
            </div>

            {/* Card 03: Our Core Values */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-teal-600/40">03</span>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Our Core Values
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">Regulatory Rigor:</strong> Zero compromises on ZAMRA standards.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">Supply Integrity:</strong> Guaranteed batch traceability.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">Partner Commitment:</strong> Prioritizing retail pharmacy profitability and stock continuity.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Zero Compromises on Standards</span>
              </div>
            </div>

          </div>

          {/* ONE BIG BUTTON BELOW TO VIEW ABOUT US PAGE */}
          <div className="pt-12 sm:pt-14 text-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-900/25 hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Explore Our Story & Full Operational Pillars</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES & CATALOGUE PREVIEW (3 Cards from Services Page + Big CTA)
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>SERVICES & CATALOGUE PREVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Institutional Capabilities & Distribution Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our core wholesale delivery solutions patterned after global Good Distribution Practice (GDP) standards for Zambian healthcare providers.
            </p>
          </div>

          {/* 3 Preview Cards with Photograph Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: POM Supply */}
            <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/warehouse_medicine_boxes_1790270797620.jpg"
                  alt="Organized pharmaceutical warehouse storage with medicine boxes"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-teal-300 text-[11px] font-semibold tracking-wide border border-teal-500/30">
                    <Pill className="w-3 h-3 text-teal-400" />
                    ZAMRA Scheduled POM
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-teal-700 transition-colors">
                    Prescription Medicines (POM) Supply
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Direct sourcing of registered prescription pharmaceuticals, antibiotics, and critical injectables.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Authentic manufacturer serialization and zero-tolerance anti-counterfeit pedigree verification.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Full ZAMRA Good Wholesaling Practices (GWP) compliance across all bulk warehouse batches.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <a
                    href="https://wa.me/260966860962?text=Hello%20Sky%20Adventura%2C%20I%20would%20like%20to%20inquire%20about%20POM%20Prescription%20Medicines%20wholesale%20supply."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-700 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: OTC Distribution */}
            <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/stocked_pharmacy_shelves_1790270809917.jpg"
                  alt="Stocked modern retail pharmacy shelves with OTC healthcare cartons"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-teal-300 text-[11px] font-semibold tracking-wide border border-teal-500/30">
                    <Activity className="w-3 h-3 text-teal-400" />
                    Consumer Healthcare
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-teal-700 transition-colors">
                    Fast-Moving OTC Distribution
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Extensive inventory of high-demand OTC treatments, analgesics, wellness, and pediatric lines.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>High fill rates ensuring community chemists and retail clinics avoid stock-out disruptions.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Volume-tiered institutional wholesale pricing maximizing retail pharmacy dispensing margins.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <a
                    href="https://wa.me/260966860962?text=Hello%20Sky%20Adventura%2C%20I%20would%20like%20to%20inquire%20about%20OTC%20Fast-Moving%20Medicines%20wholesale%20supply."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-700 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Cold-Chain Integrity */}
            <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/coldchain_transport_vehicle_1790270821652.jpg"
                  alt="Interior of climate-controlled transport vehicle with digital monitoring"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-teal-300 text-[11px] font-semibold tracking-wide border border-teal-500/30">
                    <ThermometerSnowflake className="w-3 h-3 text-teal-400" />
                    Temperature Regulated (2°C - 8°C)
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-teal-700 transition-colors">
                    Cold-Chain Integrity
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Active climate-controlled transport fleet maintaining continuous 2°C to 8°C temperature control.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Digital GSM data loggers providing verifiable dispatch-to-delivery temperature audit trails.</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Dual-redundant backup power systems at our Lusaka depot for uncompromised biological storage.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <a
                    href="https://wa.me/260966860962?text=Hello%20Sky%20Adventura%2C%20I%20would%20like%20to%20inquire%20about%20Cold-Chain%20Vaccines%20and%20Biologics."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-700 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ONE BIG BUTTON BELOW TO VIEW SERVICES PAGE */}
          <div className="pt-12 sm:pt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-900/25 hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Explore All Wholesale Services & Capabilities</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. OPERATIONAL WORKFLOW: HOW RETAIL RESTOCKING WORKS
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>PROCUREMENT SEQUENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              How Retail Restocking Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              A transparent procurement sequence designed to make wholesale restocking fast, traceable, and straightforward for retail pharmacy buyers.
            </p>
          </div>

          {/* Workflow Steps 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 01 */}
            <div className="relative bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-600 text-white uppercase">
                    Step 01
                  </span>
                  <span className="text-slate-400 text-xs">Submission</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Order Submission
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Send your stock list via our online RFQ builder, email, or direct WhatsApp procurement desk.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-medium text-slate-500 italic">
                Submit restock list via WhatsApp or RFQ portal.
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-600 text-white uppercase">
                    Step 02
                  </span>
                  <span className="text-slate-400 text-xs">&lt; 2hr Turnaround</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Batch & Price Clearance
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our licensed pharmacists verify batch availability, guarantee 18+ months shelf-life, attach digital Certificates of Analysis (CoA), and return a wholesale quotation within 2 hours.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-medium text-slate-500 italic">
                Licensed team verifies stock, attaches CoA, & provides quote.
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-teal-600 text-white uppercase">
                    Step 03
                  </span>
                  <span className="text-slate-400 text-xs">Direct Delivery</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Climate-Controlled Delivery
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Goods are packed following WHO Good Distribution Practice (GDP) protocols and delivered directly to your store.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs font-medium text-slate-500 italic">
                Packed under GDP standards and delivered to your counter.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          5. WHY RETAIL PHARMACIES PARTNER WITH SKYADVENTURA
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>VALUE PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Why Retail Pharmacies Partner With Skyadventura
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed to eliminate the operational headaches that retail chemists face: stockout risks, short expirations, unverified brokers, and restrictive payment terms.
            </p>
          </div>

          {/* 4 Pillars Table/Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-teal-500 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Pillar 01</span>
                  <h3 className="text-lg font-bold text-slate-900">100% ZAMRA Compliance</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                <strong className="text-slate-900 font-semibold">Benefit for Retail Pharmacy:</strong> Zero compliance risk. Every batch is registered, inspected, and fully traceable with digital documentation provided for audit readiness.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-teal-500 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Pillar 02</span>
                  <h3 className="text-lg font-bold text-slate-900">Guaranteed Shelf-Life</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                <strong className="text-slate-900 font-semibold">Benefit for Retail Pharmacy:</strong> We enforce a strict minimum 18 to 24 months remaining shelf-life policy on dispatched stock to prevent inventory write-offs.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-teal-500 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Pillar 03</span>
                  <h3 className="text-lg font-bold text-slate-900">Direct Manufacturer Sourcing</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                <strong className="text-slate-900 font-semibold">Benefit for Retail Pharmacy:</strong> Direct relationships with WHO-GMP certified manufacturers eliminate unverified middlemen, protecting your margins and patient safety.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-teal-500 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Pillar 04</span>
                  <h3 className="text-lg font-bold text-slate-900">Trade Credit Options</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                <strong className="text-slate-900 font-semibold">Benefit for Retail Pharmacy:</strong> Structured monthly settlement accounts and flexible trade credit terms available for verified, recurring pharmacy partners.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          6. REGULATORY TRUST & COUNTERFEIT PROTECTION CALLOUT
         ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-slate-800">
            {/* Soft background ambient gradient */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4 text-teal-400" />
                <span>ZAMRA Compliance & Batch Authenticity Guarantee</span>
              </div>

              <div className="relative">
                <Quote className="w-12 h-12 text-teal-500/20 absolute -top-4 -left-4 -z-10" />
                <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed font-display">
                  &ldquo;In pharmaceutical distribution, supply chain integrity saves lives. Skyadventura operates under full Zambia Medicines Regulatory Authority (ZAMRA) licensing and adheres strictly to Good Distribution Practices (GDP). Every wholesale dispatch includes a verified Certificate of Analysis (CoA) and full batch serialization.&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs">
                <div className="text-teal-400 font-semibold tracking-wide">
                  — Quality Assurance Desk, Skyadventura Medical Ltd.
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Licensed Wholesaler License No. ZAMRA/WHL/2024</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. AUTOMATIC CAROUSEL SLIDER: PHARMACY CUSTOMER REVIEWS
         ========================================================= */}
      <PharmacyReviewsCarousel />

      {/* =========================================================
          8. QUICK RFQ / WHATSAPP PROCUREMENT DESK (Contact Block)
         ========================================================= */}
      <section id="procurement-desk" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              <span>DIRECT PROCUREMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Quick RFQ & WhatsApp Procurement Desk
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Order medicines directly, check stock availability, or open a wholesale credit account. Our Lusaka pharmacist desk responds within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Quick Restock Builder Form */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Fast Wholesale Quotation Request
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Paste your restock list or tell us which therapeutic lines your pharmacy needs.
              </p>

              {rfqSubmitted ? (
                <div className="p-6 sm:p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">RFQ Generated & Routed to WhatsApp!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Your restock order for <strong>{pharmacyName || 'your pharmacy'}</strong> is ready. WhatsApp has been opened to connect directly with our Lusaka wholesale pharmacist desk (+260 96 686 0962).
                    </p>
                  </div>
                  
                  {whatsappRfqUrl && (
                    <div className="pt-2">
                      <a
                        href={whatsappRfqUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue to WhatsApp Chat (+260 96 686 0962)</span>
                      </a>
                    </div>
                  )}

                  <div>
                    <button
                      type="button"
                      onClick={() => setRfqSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-medium underline pt-2"
                    >
                      Submit another restock RFQ
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRfqSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pharmacy / Facility Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={pharmacyName}
                        onChange={(e) => setPharmacyName(e.target.value)}
                        placeholder="e.g. Lusaka Care Pharmacy"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pharmacist / Purchaser Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+260 96 686 0962"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Stock List or Products Required *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={itemsNeeded}
                      onChange={(e) => setItemsNeeded(e.target.value)}
                      placeholder="Paste your stock restock list here (e.g., Amoxicillin 500mg - 50 tins, Paracetamol syrup - 100 bottles, Insulin glargine 100IU - 20 pens)..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-900/20 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send RFQ Directly to WhatsApp (+260 96 686 0962)</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500">
                    Your restock list will open directly in WhatsApp to chat with our licensed dispensary desk.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Instant WhatsApp Procurement Desk */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Callout Card */}
              <div className="bg-slate-950 text-white p-7 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">Fast Track</span>
                    <h4 className="text-lg font-bold text-white">Instant WhatsApp Procurement</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Need immediate stock confirmation, batch photos, or express dispatch? Chat directly with our licensed dispensary coordinator.
                </p>

                <a
                  href="https://wa.me/260966860962?text=Hello%20Skyadventura%2C%20I%20would%20like%20to%20place%20a%20wholesale%20order%20for%20our%20pharmacy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Order (+260 96 686 0962)</span>
                </a>
              </div>

              {/* Depot Information Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3.5 text-xs text-slate-600">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Lusaka Wholesale Depot
                </h4>
                
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Mungwi Road, Light Industrial Area, Lusaka, Zambia</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <a href="tel:+260966860962" className="hover:underline text-slate-900 font-semibold">
                    +260 96 686 0962
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                  <a href="mailto:sales@skyadventura.com" className="hover:underline text-slate-900 font-semibold">
                    sales@skyadventura.com
                  </a>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 13:00 | Sun: Closed</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
