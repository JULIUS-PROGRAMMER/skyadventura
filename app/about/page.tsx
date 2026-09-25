'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  PhoneCall, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Building2,
  FileText,
  BadgeCheck,
  Target,
  Eye,
  HeartHandshake,
  CalendarCheck,
  ThermometerSnowflake,
  Factory,
  Warehouse,
  Truck,
  RotateCcw,
  Quote,
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  const handleDownloadProfile = () => {
    const profileText = `SKY ADVENTURA MEDICAL LIMITED - CORPORATE PROFILE
=====================================================
Zambia Medicines Regulatory Authority (ZAMRA) Licensed Wholesaler
Central Logistics Depot: Mungwi Road, Industrial Area, Lusaka, Zambia
Contact: +260 96 686 0962 | sales@skyadventura.com

ABOUT US:
Sky Adventura Medical Ltd is a premier pharmaceutical and medical systems distributor in Zambia. 
We bridge global pharmaceutical manufacturers with local community retail pharmacies, hospitals, 
and healthcare centers through authentic, batch-certified therapeutics, cold-chain integrity, and rapid delivery.

CORE CAPABILITIES:
- 100% ZAMRA Approved Wholesaling
- Good Distribution Practice (WHO-GDP) Validated Cold-Chain
- Prescription Medicines (POM) & Fast-Moving OTC Distribution
- Emergency Hospital ICU Restocking & Biomedical SLA Contracts
- Dedicated Lusaka Distribution Hub with Backup Redundant Power

REGULATORY ACCREDITATION:
- ZAMRA Wholesaling & Distribution License
- Certificate of Analysis (COA) Traceability for all Batches
- Engineering Institution of Zambia (EIZ) Biomedical Compliance
`;

    const blob = new Blob([profileText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sky_Adventura_Medical_Corporate_Profile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white">
      {/* =========================================================
          HERO SECTION (with Warehouse Image Overlay & Badges)
         ========================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Background Image: Black African pharmaceutical team in modern Lusaka warehouse */}
        <div className="absolute inset-0">
          <Image
            src="/images/african_pharma_warehouse_1790334240182.jpg"
            alt="Black African pharmaceutical professionals inspecting inventory inside Sky Adventura medicine distribution warehouse in Lusaka Zambia"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layer gradient overlay to ensure visual richness and sharp text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-950/30 to-slate-950/85" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines, Copy, and CTAs */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>About Sky Adventura Medical Ltd · Lusaka, Zambia</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Strengthening Zambia’s Retail Pharmacy Network Through Dependable Medicine Supply.
              </h1>

              {/* Subheadline / Body Copy */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
                Bridging the gap between global pharmaceutical manufacturers and local community pharmacies with authentic, batch-certified therapeutics, cold-chain integrity, and rapid regional distribution.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-md transition-all font-bold"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Speak with Pharmacist Desk</span>
                </Link>

                <button
                  type="button"
                  onClick={handleDownloadProfile}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl backdrop-blur-sm shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Download Corporate Profile (PDF)</span>
                </button>
              </div>

            </div>

            {/* Right Column: Floating Stat / Image Badge Box */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="w-full max-w-md bg-slate-900/85 backdrop-blur-md border border-teal-500/40 p-6 sm:p-7 rounded-2xl shadow-2xl space-y-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-500/50 flex items-center justify-center text-teal-400 shadow-inner">
                    <BadgeCheck className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    {/* Floating Stat Badge Label */}
                    <div className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-none">
                      100% ZAMRA Approved
                    </div>
                    {/* Floating Stat Badge Sub-label */}
                    <div className="text-xs font-medium text-teal-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>Central Logistics Hub | Lusaka, Zambia</span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-800 my-2" />

                {/* Trust Verification Checklist */}
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>WHO-GDP validated cold-chain & staging facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Mungwi Road distribution center with emergency dispatch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Batch traceability & manufacturer Certificate of Analysis</span>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 1: Who We Are (Our Story & Role) + Pharmacy Image
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Bridging Global Pharma Innovation with Local Community Pharmacies
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Skyadventura Medical Ltd. was founded to resolve a critical challenge in Zambia’s healthcare ecosystem: supply chain bottlenecks and inconsistent inventory for retail pharmacies.
                </p>
                <p>
                  We understand that for a community chemist or retail pharmacy, stockouts mean missed revenue and compromised patient care. As a specialized B2B wholesale distributor, we act as a direct, reliable bridge between certified global pharmaceutical manufacturers and local retail counters. We eliminate secondary brokers to guarantee medicine authenticity, optimal shelf-life, and transparent wholesale margins.
                </p>
              </div>

              {/* Quick Highlight Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-teal-700">Zero Secondary Brokers</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direct manufacturer lines</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-teal-700">Optimal Shelf-Life</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">18–24 months guaranteed</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-teal-700">Stock Continuity</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Rapid retail restock</div>
                </div>
              </div>
            </div>

            {/* Right Image Container (Pharmacy with Black people inside) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <div className="relative h-[340px] sm:h-[400px] w-full">
                  <Image
                    src="/images/african_pharmacy_counter_1790334751441.jpg"
                    alt="Black African female pharmacist consulting with customer inside a modern retail pharmacy store in Lusaka Zambia"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Empowering Local Community Chemists</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Supporting retail pharmacies, community dispensaries, and clinics across Lusaka and all 10 provinces.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: Mission, Vision & Values (3-Card Layout)
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>OUR GUIDING PRINCIPLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Mission, Vision & Core Values
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              The institutional pillars steering Skyadventura&apos;s commitment to Zambia&apos;s pharmaceutical distribution.
            </p>
          </div>

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
        </div>
      </section>

      {/* =========================================================
          SECTION 3: Our 4 Pillars of Operational Excellence
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>OPERATIONAL RIGOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Our 4 Pillars of Operational Excellence
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Every process at Skyadventura is calibrated to preserve clinical efficacy, ensure regulatory compliance, and support retail partner profitability.
            </p>
          </div>

          {/* 2x2 Grid with Badges/Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Pillar 1 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Strict ZAMRA Regulatory Adherence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                100% compliant with Zambia Medicines Regulatory Authority standards. Every wholesale order includes batch-specific Certificates of Analysis (CoA) for effortless pharmacy audit compliance.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Guaranteed Shelf-Life Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Active inventory rotation ensures a minimum of 18 to 24 months remaining shelf life on all standard prescription (POM) and over-the-counter (OTC) stock.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Dedicated Cold-Chain Logistics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Temperature-controlled warehousing in Lusaka and climate-monitored transport containers maintaining strict 2°C to 8°C parameters for vaccines, insulins, and biologicals.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-500 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Direct Manufacturer Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We partner directly with certified WHO-GMP global pharmaceutical manufacturers, removing secondary brokers to safeguard authenticity and maximize retail trade margins.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: Infrastructure & Supply Reach (The Lusaka Hub)
         ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Warehouse className="w-3.5 h-3.5 text-teal-600" />
              <span>INFRASTRUCTURE & LOGISTICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Centralized Warehousing with Nationwide Distribution
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Built to support both independent chemists in Lusaka and multi-branch retail networks across all 10 provinces.
            </p>
          </div>

          {/* Key Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Lusaka Central Warehouse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Climate-controlled distribution center located in Lusaka’s Light Industrial Area.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Same-Day Dispatch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local Lusaka pharmacy orders placed before 11:00 AM are packed and dispatched the same day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Nationwide Route Logistics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheduled climate-monitored deliveries serving retail partners across all 10 provinces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Batch Traceability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time lot tracking and automated recall protection from warehouse entry to store delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 5: Quality Assurance Commitment (High-Trust Callout Box)
         ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-slate-800">
            {/* Background subtle glow */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Quality & Compliance Guarantee</span>
              </div>

              <div className="relative">
                <Quote className="w-12 h-12 text-teal-500/20 absolute -top-4 -left-4 -z-10" />
                <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed font-display">
                  &ldquo;At Skyadventura, patient safety starts with supply chain integrity. Every tablet, syrup, and cold-chain vial passing through our facility undergoes strict intake inspection, temperature monitoring, and batch verification. We adhere strictly to WHO Good Distribution Practices (GDP) to ensure the medicines on your shelves retain 100% therapeutic efficacy.&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs">
                <div className="text-teal-400 font-semibold tracking-wide">
                  — Licensed Pharmacist-in-Charge, Skyadventura Medical Ltd.
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-slate-300">
                  <BadgeCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Verified WHO Good Distribution Practices (GDP)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: Pre-Footer Conversion Box (Mid-Page CTA)
         ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-md text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <span>B2B TRADE PARTNERSHIP</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-display tracking-tight">
              Ready to Elevate Your Retail Pharmacy Restocking?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of retail chemists across Zambia who rely on Skyadventura for authentic stock, transparent trade pricing, and rapid delivery.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-sm transition-all font-bold"
              >
                <span>Apply for a Wholesale Trade Account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="https://wa.me/260966860962?text=Hello%20Skyadventura%2C%20I%20would%20like%20to%20chat%20with%20the%20Pharmacist%20Desk%20regarding%20wholesale%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>Chat with Pharmacist Desk on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
