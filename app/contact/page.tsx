'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Building2,
  ShieldCheck,
  FileCheck2,
  Sparkles,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

export default function ContactPage() {
  const [pharmacyName, setPharmacyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('Lusaka');
  const [orderType, setOrderType] = useState('Prescription Only Medicines (POM)');
  const [itemsNeeded, setItemsNeeded] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rfqMessage = `Hello Skyadventura Medical,\n\n*NEW WHOLESALE RFQ & RESTOCK INQUIRY*\n────────────────────────────\n*Facility / Pharmacy:* ${pharmacyName}\n*Contact Person:* ${contactPerson}\n*Phone / WhatsApp:* ${phone}\n*Province:* ${province}\n*Therapeutic Category:* ${orderType}\n\n*Required Stock / Order List:*\n${itemsNeeded}\n\n────────────────────────────\nPlease confirm stock availability, verify 18+ months remaining shelf-life, attach batch Certificate of Analysis (CoA), and return a wholesale proforma quotation.`;

    const generatedUrl = `https://wa.me/260966860962?text=${encodeURIComponent(rfqMessage)}`;
    setWhatsappUrl(generatedUrl);
    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(generatedUrl, '_blank');
    }
  };

  const handleReset = () => {
    setPharmacyName('');
    setContactPerson('');
    setPhone('');
    setItemsNeeded('');
    setSubmitted(false);
  };

  return (
    <div className="bg-white min-h-[70vh]">
      {/* =========================================================
          1. CONTACT HERO SECTION WITH SPLIT IMAGE
         ========================================================= */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & Procurement Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Lusaka Logistics Depot & Pharmacist Desk · Zambia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Direct Wholesale Medicine Supply & RFQ Desk
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Connect directly with licensed dispensary coordinators at our central Lusaka facility. Submit your restock lists via WhatsApp for rapid batch verification, guaranteed 18+ months shelf-life, and same-day dispatch.
              </p>

              {/* Fast Direct Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href="https://wa.me/260966860962?text=Hello%20Skyadventura%20Medical%2C%20I%20would%20like%20to%20inquire%20about%20wholesale%20medicine%20supply%20for%20our%20pharmacy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-950/30 transition-all font-bold group"
                >
                  <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp (+260 96 686 0962)</span>
                </a>

                <a
                  href="#rfq-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl transition-all font-semibold"
                >
                  <span>Fill Wholesale RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </a>
              </div>

              {/* Quick Trust Verification */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>&lt; 2hr Proforma Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>100% ZAMRA Licensed Batches</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>All 10 Provinces Served</span>
                </div>
              </div>
            </div>

            {/* Right Column: Split Image (Pharmacist & High-Density Medicine Storage Bay) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <div className="relative h-[340px] sm:h-[420px] w-full">
                  <Image
                    src="/images/contact_split_hero_1790341460265.jpg"
                    alt="Split composition: Black African pharmacist consulting inventory on tablet alongside clean Lusaka medicine distribution warehouse shelves"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>

                {/* Floating Hub Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                      <span className="text-xs font-bold text-teal-400 tracking-wide uppercase">
                        Procurement & Quality Desk
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Mungwi Rd, Lusaka</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Direct access to licensed Zambian pharmacists, immediate batch availability checks, and scheduled cold-chain delivery.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. QUICK CONTACT CHANNELS (4 Responsive Cards)
         ========================================================= */}
      <section className="py-12 lg:py-16 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Facility */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-md hover:border-teal-500/80 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Central Distribution Depot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Mungwi Road, Light Industrial Area, Lusaka, Zambia
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mungwi+Road%2C+Lusaka%2C+Zambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors group"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-md hover:border-teal-500/80 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
                  <Phone className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Dispensary Direct Line
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Speak directly with our wholesale order desk for urgent medicine supplies.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100">
                <a
                  href="tel:+260966860962"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 stroke-[2]" />
                  <span>+260 96 686 0962</span>
                </a>
              </div>
            </div>

            {/* Card 3: WhatsApp Desk */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-md hover:border-emerald-500/80 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
                  <MessageSquare className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Instant WhatsApp RFQ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Fastest route for stock confirmation, batch photos, and quotation clearance.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100">
                <a
                  href="https://wa.me/260966860962?text=Hello%20Skyadventura%20Medical%2C%20I%20would%20like%20to%20inquire%20about%20wholesale%20medicine%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Card 4: Operating Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-md hover:border-teal-500/80 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
                  <Clock className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Operating Hours
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-medium mt-2 leading-relaxed">
                  Mon – Fri: 08:00 – 17:00<br />Sat: 08:00 – 13:00
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-medium border border-amber-200/60">
                  Closed on Sundays & Public Holidays
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHOLESALE RFQ ROUTED THROUGH WHATSAPP & DEPOT MAP
         ========================================================= */}
      <section id="rfq-section" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>DIRECT WHATSAPP RFQ DESK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Request a Wholesale Medicine Quotation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Fill in your facility details and paste your stock list below. Your requisition will be automatically structured into an official RFQ and routed straight to our licensed WhatsApp dispatch desk (+260 96 686 0962).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: RFQ Form Routed Through WhatsApp */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              
              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">RFQ Generated & Routed to WhatsApp!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Your restock order for <strong>{pharmacyName || 'your pharmacy'}</strong> has been converted into a verified wholesale requisition and sent directly to our Lusaka pharmacist desk (+260 96 686 0962).
                    </p>
                  </div>

                  {whatsappUrl && (
                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-950/20 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue Chat in WhatsApp (+260 96 686 0962)</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="text-xs text-slate-500 hover:text-slate-800 font-medium underline cursor-pointer"
                    >
                      Submit another wholesale RFQ
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRfqSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pharmacy / Health Facility Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={pharmacyName}
                        onChange={(e) => setPharmacyName(e.target.value)}
                        placeholder="e.g. Copperbelt Care Pharmacy"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                        placeholder="e.g. Dr. Kondwani Phiri"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number (WhatsApp Active) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+260 96 686 0962"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Delivery Province *
                      </label>
                      <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                      >
                        <option value="Lusaka">Lusaka Province (Same-Day Dispatch)</option>
                        <option value="Copperbelt">Copperbelt Province (Ndola / Kitwe)</option>
                        <option value="Central">Central Province (Kabwe)</option>
                        <option value="Southern">Southern Province (Livingstone / Choma)</option>
                        <option value="Eastern">Eastern Province (Chipata)</option>
                        <option value="North-Western">North-Western Province (Solwezi)</option>
                        <option value="Northern">Northern Province (Kasama)</option>
                        <option value="Luapula">Luapula Province (Mansa)</option>
                        <option value="Muchinga">Muchinga Province (Chinsali)</option>
                        <option value="Western">Western Province (Mongu)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Therapeutic Category *
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                    >
                      <option value="Prescription Only Medicines (POM)">Prescription Only Medicines (POM)</option>
                      <option value="Fast-Moving OTCs & Analgesics">Fast-Moving OTCs & Analgesics</option>
                      <option value="Cold-Chain Vaccines & Biologics">Cold-Chain Vaccines & Biologics (2°C - 8°C)</option>
                      <option value="Antibiotics & Antimicrobials">Antibiotics & Antimicrobials</option>
                      <option value="Pediatric & Liquid Formulations">Pediatric & Liquid Formulations</option>
                      <option value="Pharmacy Disposables & Packaging">Pharmacy Disposables & Packaging</option>
                      <option value="Multiple Product Mix / Full Restock">Multiple Product Mix / Full Restock</option>
                    </select>
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
                      placeholder="Paste your stock restock list here (e.g., Amoxicillin 500mg - 50 tins, Paracetamol syrup - 100 bottles, Metformin 500mg - 80 packs, Insulin Glargine - 30 pens)..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Route RFQ Directly to WhatsApp (+260 96 686 0962)</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Submitting compiles your restock list and opens WhatsApp to immediately connect with our licensed pharmacist desk.
                    </p>
                  </div>

                </form>
              )}

            </div>

            {/* Right Column: Google Map, Directions & Facility Hours */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display tracking-tight">
                  Lusaka Distribution Depot
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Located in Lusaka&apos;s prime Light Industrial Area along Mungwi Road for rapid metropolitan dispatch and provincial route staging.
                </p>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xs bg-slate-100 aspect-[16/11] w-full">
                <iframe
                  title="Sky Adventura Medical Facility - Mungwi Road Lusaka"
                  src="https://maps.google.com/maps?q=-15.3988288,28.2588183&hl=en&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="absolute bottom-2 right-2 z-10">
                  <a
                    href="https://www.google.com/maps/@-15.3988288,28.2588183,590m/data=!3m1!1e3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-xs hover:bg-white text-slate-800 text-[11px] font-semibold rounded-lg shadow-sm border border-slate-300/80 transition-colors"
                  >
                    <span>View Satellite Map</span>
                    <ExternalLink className="w-3 h-3 text-teal-600" />
                  </a>
                </div>
              </div>

              {/* Address and Contact Details */}
              <div className="space-y-4 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Warehouse & Dispatch Address:</strong>
                    <span>Mungwi Road, Light Industrial Area, Lusaka, Zambia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Procurement Phone & WhatsApp:</strong>
                    <a href="tel:+260966860962" className="text-teal-700 hover:underline font-bold">
                      +260 96 686 0962
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Order Dispatch Schedules:</strong>
                    <span>Lusaka Same-Day: Orders before 11:00 AM | Provincial: Scheduled Daily</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
