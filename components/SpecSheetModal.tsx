'use client';

import React from 'react';
import Image from 'next/image';
import { X, Check, ShieldCheck, Download, Plus, ShoppingBag, Wrench, Clock, FileCheck2 } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';
import { MedicalProduct } from '@/data/medical-catalog';

export default function SpecSheetModal() {
  const { activeSpecProduct, closeSpecModal, addItem, formatPrice } = useRfq();

  if (!activeSpecProduct) return null;

  const handleAddToRfq = () => {
    addItem(activeSpecProduct, 1);
  };

  const handleDownloadDossier = () => {
    // Generate a clean text file summary download simulating the official OEM specification sheet
    const content = `SKY ADVENTURA LTD - TECHNICAL SPECIFICATION DOSSIER
Address: Plot 5147 Washama Rd, Lite Industrial Area, Lusaka, Zambia
Regulator: Zambia Medicines Regulatory Authority (ZAMRA) Licensed

PRODUCT: ${activeSpecProduct.name}
MODEL NUMBER: ${activeSpecProduct.modelNumber}
CERTIFICATION: ${activeSpecProduct.certification}
OEM PARTNER: ${activeSpecProduct.oemPartner}
WARRANTY: ${activeSpecProduct.warrantyYears} Years Comprehensive Biomedical Support

KEY TECHNICAL SPECIFICATIONS:
${activeSpecProduct.keySpecs.map(s => `- ${s.label}: ${s.value}`).join('\n')}

CLINICAL APPLICATIONS:
${activeSpecProduct.applications.map(a => `- ${a}`).join('\n')}

LOGISTICS & DISPATCH:
- Lead Time: ${activeSpecProduct.leadTime}
- Delivery: Direct to facility with biomedical engineer commissioning and clinical staff training.

CONTACT SKY ADVENTURA:
Phone: +260 (211) 289-440 | Email: procurement@skyadventura.net
Web: https://www.skyadventura.net/
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SkyAdventura_${activeSpecProduct.modelNumber.replace(/\s+/g, '_')}_SpecSheet.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase">
              {activeSpecProduct.categoryLabel} · Technical Datasheet
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              {activeSpecProduct.name}
            </h2>
          </div>
          <button
            onClick={closeSpecModal}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Preview */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                <Image
                  src={activeSpecProduct.image}
                  alt={activeSpecProduct.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Catalog Code:</span>
                  <span className="font-semibold text-slate-900">{activeSpecProduct.modelNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">OEM Manufacturer:</span>
                  <span className="font-medium text-slate-800">{activeSpecProduct.oemPartner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Regulatory Cert:</span>
                  <span className="font-medium text-teal-700">{activeSpecProduct.certification}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-semibold text-slate-800">{activeSpecProduct.warrantyYears} Years (Zambia On-Site)</span>
                </div>
              </div>
            </div>

            {/* Description & Technical Table */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Clinical Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeSpecProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Engineering Specifications
                </h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
                  <table className="min-w-full divide-y divide-slate-200">
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {activeSpecProduct.keySpecs.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                          <td className="px-3 py-2 font-medium text-slate-700 w-1/3 border-r border-slate-100">
                            {spec.label}
                          </td>
                          <td className="px-3 py-2 text-slate-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Designated Clinical Departments
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                  {activeSpecProduct.applications.map((app, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">
                      <Check className="w-3 h-3 text-teal-600" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lusaka Service Guarantee Banner */}
          <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-100 flex items-start gap-3 text-xs text-teal-900">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Sky Adventura Zambia Technical Assurance:</span> Every unit supplied is calibrated
              by certified biomedical engineers prior to hospital handover. Includes complete ZAMRA regulatory documentation,
              operator user manual, and 24/7 emergency repair support.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs text-slate-500">Official Tender Unit Price</div>
            <div className="text-xl font-bold text-slate-900 tabular-nums">
              {formatPrice(activeSpecProduct.priceZMW, activeSpecProduct.priceUSD)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadDossier}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Download Spec Sheet</span>
            </button>

            <button
              onClick={() => {
                handleAddToRfq();
                closeSpecModal();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Quotation Draft</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
