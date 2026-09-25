'use client';

import React, { useState } from 'react';
import { useRfq } from '@/context/RfqContext';
import { MEDICAL_CATALOG, MedicalProduct } from '@/data/medical-catalog';
import {
  FileText,
  Building,
  CheckCircle2,
  Printer,
  Download,
  Plus,
  Trash2,
  ShieldCheck,
  Truck,
  Sparkles,
  Info,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function QuotationCalculator() {
  const { items, addItem, updateQuantity, removeItem, currency, formatPrice, clearRfq } = useRfq();

  // Form State
  const [facilityName, setFacilityName] = useState('Lusaka Apex Medical Centre');
  const [facilityType, setFacilityType] = useState('private_hospital');
  const [officerName, setOfficerName] = useState('Dr. Mwamba Chanda');
  const [officerTitle, setOfficerTitle] = useState('Head of Clinical Procurement');
  const [email, setEmail] = useState('procurement@apexmed.zm');
  const [phone, setPhone] = useState('+260 97 744 1920');
  const [district, setDistrict] = useState('Lusaka');
  const [notes, setNotes] = useState('Requisition for upcoming surgical and intensive care wing expansion.');

  // Configuration options
  const [warrantyTier, setWarrantyTier] = useState<'standard' | 'amc3' | 'turnkey'>('amc3');
  const [logisticsTier, setLogisticsTier] = useState<'standard' | 'cold_fleet'>('standard');
  const [taxMode, setTaxMode] = useState<'exempt' | 'standard'>('exempt');

  // Generated Quote state
  const [generatedQuote, setGeneratedQuote] = useState<{
    quoteNumber: string;
    date: string;
    validUntil: string;
    subtotal: number;
    warrantyAmount: number;
    logisticsAmount: number;
    taxAmount: number;
    total: number;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Math calculations
  const rawSubtotal = items.reduce((sum, item) => {
    const price = currency === 'ZMW' ? item.product.priceZMW : item.product.priceUSD;
    return sum + price * item.quantity;
  }, 0);

  const warrantyMultiplier = warrantyTier === 'amc3' ? 0.08 : warrantyTier === 'turnkey' ? 0.14 : 0;
  const warrantyCost = rawSubtotal * warrantyMultiplier;

  const logisticsCost =
    logisticsTier === 'cold_fleet'
      ? currency === 'ZMW' ? 9500 : 360
      : 0;

  const preTax = rawSubtotal + warrantyCost + logisticsCost;
  const taxRate = taxMode === 'standard' ? 0.16 : 0.0;
  const taxCost = preTax * taxRate;
  const grandTotal = preTax + taxCost;

  const handleQuickAdd = (productId: string) => {
    if (!productId) return;
    const prod = MEDICAL_CATALOG.find(p => p.id === productId);
    if (prod) {
      addItem(prod, 1);
    }
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert('Please select at least one medical system for your quotation.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const quoteNum = `EM-RFQ-2026-${randomNum}`;
      const today = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      const validDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      setGeneratedQuote({
        quoteNumber: quoteNum,
        date: today,
        validUntil: validDate,
        subtotal: rawSubtotal,
        warrantyAmount: warrantyCost,
        logisticsAmount: logisticsCost,
        taxAmount: taxCost,
        total: grandTotal
      });
      setIsSubmitting(false);

      // Smooth scroll to generated document
      const docEl = document.getElementById('generated-quote-sheet');
      if (docEl) {
        docEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <section id="quote-builder" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
            Institutional Procurement Desk · Request for Quotation (RFQ)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Institutional Quotation & Tender Calculator
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Configure hospital equipment packages, warranty SLAs, and temperature-controlled logistics.
            Generate an official proforma quotation recognized for public procurement and private hospital budgeting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Requisition Builder & Line Items */}
          <form onSubmit={handleGenerateQuote} className="lg:col-span-7 space-y-8">
            {/* Facility & Buyer Profile */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-teal-700" />
                <span>1. Healthcare Facility & Requisition Officer</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Facility / Hospital Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={facilityName}
                    onChange={e => setFacilityName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Facility Classification *
                  </label>
                  <select
                    value={facilityType}
                    onChange={e => setFacilityType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="moh_tertiary">Ministry of Health / Tertiary Referral</option>
                    <option value="private_hospital">Private Hospital / Clinic Network</option>
                    <option value="diagnostic_center">Specialized Diagnostic Lab / Imaging Wing</option>
                    <option value="ngo_mission">Faith-Based Mission / NGO Facility</option>
                    <option value="district_health">District Hospital / Health Post</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Officer / Clinician Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={officerName}
                    onChange={e => setOfficerName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Official Title / Department
                  </label>
                  <input
                    type="text"
                    value={officerTitle}
                    onChange={e => setOfficerTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Phone / WhatsApp (+260) *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-700 font-medium mb-1">
                    Delivery Location / District (Zambia) *
                  </label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    placeholder="e.g. Lusaka, Ndola, Kitwe, Livingstone, Chipata, Solwezi"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Selected Medical Machinery */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-700" />
                  <span>2. Medical Machinery & Systems Line Items ({items.length})</span>
                </h3>

                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearRfq}
                    className="text-xs text-red-600 hover:text-red-700 font-medium hover:underline"
                  >
                    Remove All
                  </button>
                )}
              </div>

              {/* Items List */}
              {items.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-xl border border-dashed border-slate-300 space-y-2">
                  <p className="text-xs text-slate-600">
                    No equipment currently in your quotation draft.
                  </p>
                  <a
                    href="#catalog"
                    className="inline-block px-3.5 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100"
                  >
                    Select Systems from Catalog
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(item => {
                    const lineZmw = item.product.priceZMW * item.quantity;
                    const lineUsd = item.product.priceUSD * item.quantity;

                    return (
                      <div
                        key={item.product.id}
                        className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">{item.product.name}</div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {item.product.modelNumber} · {item.product.certification.split('/')[0]}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 self-end sm:self-auto">
                          <div className="flex items-center border border-slate-200 rounded-md">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 font-bold tabular-nums text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right min-w-[100px]">
                            <div className="font-bold text-slate-900 tabular-nums">
                              {formatPrice(lineZmw, lineUsd)}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {formatPrice(item.product.priceZMW, item.product.priceUSD)}/ea
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quick Add Selector */}
              <div className="pt-2 flex items-center gap-2">
                <select
                  defaultValue=""
                  onChange={e => {
                    handleQuickAdd(e.target.value);
                    e.target.value = '';
                  }}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                >
                  <option value="" disabled>+ Quick add another equipment from catalog...</option>
                  {MEDICAL_CATALOG.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.modelNumber}) — {formatPrice(p.priceZMW, p.priceUSD)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* SLA, Warranty & Logistics Options */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>3. Service Level Agreement (SLA) & Engineering Support</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <label
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    warrantyTier === 'standard'
                      ? 'bg-white border-teal-600 ring-1 ring-teal-600 shadow-2xs'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="warranty"
                    value="standard"
                    checked={warrantyTier === 'standard'}
                    onChange={() => setWarrantyTier('standard')}
                    className="sr-only"
                  />
                  <div className="font-bold text-slate-900">Standard OEM Warranty</div>
                  <div className="text-[11px] text-slate-500 mt-1">1-Year Warranty, Pre-Delivery Calibration included.</div>
                  <div className="text-teal-700 font-semibold mt-2">Complimentary (0%)</div>
                </label>

                <label
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    warrantyTier === 'amc3'
                      ? 'bg-white border-teal-600 ring-1 ring-teal-600 shadow-2xs'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="warranty"
                    value="amc3"
                    checked={warrantyTier === 'amc3'}
                    onChange={() => setWarrantyTier('amc3')}
                    className="sr-only"
                  />
                  <div className="font-bold text-slate-900">3-Yr Comprehensive AMC</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Semi-annual Fluke calibration, preventative parts, and 24h breakdown SLA.
                  </div>
                  <div className="text-teal-700 font-semibold mt-2">+8% Contract</div>
                </label>

                <label
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    warrantyTier === 'turnkey'
                      ? 'bg-white border-teal-600 ring-1 ring-teal-600 shadow-2xs'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="warranty"
                    value="turnkey"
                    checked={warrantyTier === 'turnkey'}
                    onChange={() => setWarrantyTier('turnkey')}
                    className="sr-only"
                  />
                  <div className="font-bold text-slate-900">Turnkey Commissioning</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    On-site staff certification, 5-year parts guarantee, priority 24/7 hotline.
                  </div>
                  <div className="text-teal-700 font-semibold mt-2">+14% Contract</div>
                </label>
              </div>

              {/* Logistics & Tax Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Logistics & Fleet Transport:
                  </label>
                  <select
                    value={logisticsTier}
                    onChange={e => setLogisticsTier(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800"
                  >
                    <option value="standard">Standard Insured Delivery (Lusaka & Central Hub)</option>
                    <option value="cold_fleet">
                      Dedicated Cold-Chain / Inter-Provincial Refrigerated Fleet (+{currency === 'ZMW' ? 'K9,500' : '$360'})
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Tax Treatment (Zambia Revenue Authority):
                  </label>
                  <select
                    value={taxMode}
                    onChange={e => setTaxMode(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800"
                  >
                    <option value="exempt">Zero-Rated / Tax Exempt (Designated Medical Equipment)</option>
                    <option value="standard">Standard Commercial VAT (16%)</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 disabled:bg-slate-300 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? (
                <span>Generating Formal Dossier...</span>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Generate Official Proforma Quotation</span>
                </>
              )}
            </button>
          </form>

          {/* Right: Real-time Quotation Ledger / Output */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                    Official Quotation Summary
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {facilityName || 'Draft Healthcare Quotation'}
                  </div>
                </div>
                <span className="text-xs text-slate-400 tabular-nums">
                  {items.reduce((s, i) => s + i.quantity, 0)} Units
                </span>
              </div>

              {/* Math breakdown */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Equipment Line Items Subtotal:</span>
                  <span className="font-semibold text-white tabular-nums">
                    {currency === 'ZMW' ? `ZMW ${rawSubtotal.toLocaleString()}` : `$${rawSubtotal.toLocaleString()}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Biomedical Warranty & SLA:</span>
                  <span className="font-semibold text-teal-400 tabular-nums">
                    {warrantyCost > 0
                      ? currency === 'ZMW' ? `+ZMW ${warrantyCost.toLocaleString()}` : `+$${warrantyCost.toLocaleString()}`
                      : 'Included (0.00)'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Logistics & Insured Transit:</span>
                  <span className="font-semibold text-teal-400 tabular-nums">
                    {logisticsCost > 0
                      ? currency === 'ZMW' ? `+ZMW ${logisticsCost.toLocaleString()}` : `+$${logisticsCost.toLocaleString()}`
                      : 'Complimentary Lusaka Hub'}
                  </span>
                </div>

                <div className="flex justify-between border-t border-slate-800 pt-2">
                  <span className="text-slate-400">VAT (ZRA Medical Zero-Rating):</span>
                  <span className="font-semibold text-slate-300 tabular-nums">
                    {taxCost > 0
                      ? currency === 'ZMW' ? `ZMW ${taxCost.toLocaleString()}` : `$${taxCost.toLocaleString()}`
                      : '0.00 (Zero-Rated Medical Equipment)'}
                  </span>
                </div>

                <div className="flex items-baseline justify-between border-t border-slate-700 pt-3 text-sm">
                  <span className="font-bold text-white">Estimated Grand Total:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-teal-400 tabular-nums">
                      {currency === 'ZMW' ? `ZMW ${grandTotal.toLocaleString()}` : `$${grandTotal.toLocaleString()}`}
                    </span>
                    <div className="text-[10px] text-slate-400">
                      Prices in {currency === 'ZMW' ? 'Zambian Kwacha (ZMW)' : 'United States Dollars (USD)'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Official compliance stamp card */}
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2 text-teal-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sky Adventura Zambia Procurement Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Quotation generated conforms to Zambia Medicines Regulatory Authority wholesale regulations.
                  Equipment is supplied with calibration certificates signed by our registered biomedical engineering department.
                </p>
                <div className="text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">Physical Inspection Depot:</span> Plot 5147 Washama Rd, Lite Industrial Area, Lusaka.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Formal Document Sheet (Appears after submission or click) */}
        {generatedQuote && (
          <div id="generated-quote-sheet" className="mt-16 bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-300 shadow-xl max-w-4xl mx-auto text-slate-900">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
              {/* Document Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
                <div>
                  <div className="text-2xl font-black font-display tracking-tight text-slate-900 leading-tight">
                    Sky<br />
                    <span className="text-teal-700">Adventura</span> Equipments
                  </div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Plot 5147 Washama Road, Lite Industrial Area, Lusaka, Zambia<br />
                    ZAMRA License: ZAMRA/WHL/2026/0411 · TPIN: 1004928190<br />
                    Tel: +260 (211) 289-440 · Email: info@skyadventura.net · Web: www.skyadventura.net
                  </div>
                </div>

                <div className="sm:text-right space-y-1 text-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Official Proforma Quotation
                  </div>
                  <div className="text-lg font-black text-slate-900 font-mono">
                    {generatedQuote.quoteNumber}
                  </div>
                  <div className="text-slate-600">
                    Date Issued: <span className="font-semibold text-slate-900">{generatedQuote.date}</span>
                  </div>
                  <div className="text-slate-600">
                    Validity: <span className="font-semibold text-slate-900">{generatedQuote.validUntil} (30 Days)</span>
                  </div>
                </div>
              </div>

              {/* Client & Requisition Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div>
                  <div className="text-slate-400 font-semibold uppercase tracking-wider mb-1">
                    Client Requisitioned To:
                  </div>
                  <div className="text-sm font-bold text-slate-900">{facilityName}</div>
                  <div className="text-slate-700 font-medium">{officerName} — {officerTitle}</div>
                  <div className="text-slate-600">{email} · {phone}</div>
                  <div className="text-slate-600">Destination: {district}, Zambia</div>
                </div>

                <div>
                  <div className="text-slate-400 font-semibold uppercase tracking-wider mb-1">
                    Fulfillment Hub & Engineering:
                  </div>
                  <div className="text-slate-800 font-semibold">Sky Adventura Lusaka Showroom & Logistics Hub</div>
                  <div className="text-slate-600">Biomedical Engineering Dept: Eng. C. Mwewa</div>
                  <div className="text-slate-600">Support Level: {warrantyTier === 'amc3' ? '3-Year AMC with Calibration' : warrantyTier === 'turnkey' ? 'Turnkey Commissioning' : '1-Year OEM'}</div>
                  <div className="text-slate-600">Transit: {logisticsTier === 'cold_fleet' ? 'Dedicated Cold-Chain Fleet' : 'Standard Insured Hospital Delivery'}</div>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-xs">
                  <thead className="bg-slate-100 text-slate-800 font-bold">
                    <tr>
                      <th className="py-2.5 px-3 text-left">Item / Description</th>
                      <th className="py-2.5 px-3 text-left">Catalog Ref</th>
                      <th className="py-2.5 px-3 text-center">Qty</th>
                      <th className="py-2.5 px-3 text-right">Unit Price</th>
                      <th className="py-2.5 px-3 text-right">Total Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {items.map((it, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3">
                          <div className="font-bold text-slate-900">{it.product.name}</div>
                          <div className="text-[11px] text-slate-500">{it.product.certification}</div>
                        </td>
                        <td className="py-2.5 px-3 font-mono text-slate-600">{it.product.modelNumber}</td>
                        <td className="py-2.5 px-3 text-center font-bold">{it.quantity}</td>
                        <td className="py-2.5 px-3 text-right tabular-nums">
                          {formatPrice(it.product.priceZMW, it.product.priceUSD)}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold tabular-nums">
                          {formatPrice(it.product.priceZMW * it.quantity, it.product.priceUSD * it.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Summary */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-4 border-t border-slate-200 text-xs">
                <div className="space-y-1 text-slate-600 max-w-sm">
                  <div className="font-bold text-slate-800">Banking & Settlement Information:</div>
                  <div>Bank: Stanbic Bank Zambia Limited</div>
                  <div>Account Name: Sky Adventura Ltd</div>
                  <div>Branch: Lusaka Main Corporate Branch</div>
                  <div>SWIFT / Sort Code: SBICZMKL / 040002</div>
                </div>

                <div className="w-full sm:w-64 space-y-1.5 text-right">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold tabular-nums">
                      {currency === 'ZMW' ? `ZMW ${generatedQuote.subtotal.toLocaleString()}` : `$${generatedQuote.subtotal.toLocaleString()}`}
                    </span>
                  </div>
                  {generatedQuote.warrantyAmount > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Service SLA:</span>
                      <span className="font-semibold tabular-nums">
                        {currency === 'ZMW' ? `ZMW ${generatedQuote.warrantyAmount.toLocaleString()}` : `$${generatedQuote.warrantyAmount.toLocaleString()}`}
                      </span>
                    </div>
                  )}
                  {generatedQuote.logisticsAmount > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Logistics Freight:</span>
                      <span className="font-semibold tabular-nums">
                        {currency === 'ZMW' ? `ZMW ${generatedQuote.logisticsAmount.toLocaleString()}` : `$${generatedQuote.logisticsAmount.toLocaleString()}`}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>VAT (0% Medical):</span>
                    <span className="font-semibold tabular-nums">
                      {currency === 'ZMW' ? `ZMW ${generatedQuote.taxAmount.toLocaleString()}` : `$${generatedQuote.taxAmount.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-300">
                    <span>Total Amount:</span>
                    <span className="text-teal-800 tabular-nums">
                      {currency === 'ZMW' ? `ZMW ${generatedQuote.total.toLocaleString()}` : `$${generatedQuote.total.toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Seal and Signatures */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-teal-600 flex items-center justify-center text-[9px] font-bold text-teal-800 text-center leading-tight uppercase p-1">
                    Sky Adventura Certified
                  </div>
                  <div className="text-slate-500">
                    Authorized Procurement Officer Signature<br />
                    <span className="text-slate-800 font-semibold">Sky Adventura Ltd · Lusaka Hub</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg shadow-2xs"
                  >
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>Print Quotation</span>
                  </button>

                  <a
                    href="mailto:procurement@skyadventura.net?subject=Formal%20RFQ%20Order%20Confirmation"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-2xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Submit to Procurement Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
