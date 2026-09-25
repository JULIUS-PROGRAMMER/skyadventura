'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Truck, ShieldCheck, MapPin, AlertCircle, FileCheck } from 'lucide-react';
import { SAMPLE_REQUISITIONS, RequisitionRecord } from '@/data/medical-catalog';

export default function RequisitionTracker() {
  const [searchId, setSearchId] = useState('ZM-MED-8814');
  const [activeRecord, setActiveRecord] = useState<RequisitionRecord | null>(SAMPLE_REQUISITIONS[0]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const query = searchId.trim().toUpperCase();
    const found = SAMPLE_REQUISITIONS.find(
      r => r.id.toUpperCase() === query || r.id.toUpperCase().includes(query)
    );

    if (found) {
      setActiveRecord(found);
    } else {
      // If user typed custom or generated RFQ, generate a simulated active order
      setActiveRecord({
        id: query || 'EM-TENDER-2026',
        facilityName: 'Healthcare Center Facility',
        facilityCity: 'Lusaka / Regional Center',
        district: 'Zambia Health Network',
        status: 'warehouse_staging',
        statusLabel: 'Order Verified · Pre-Delivery Calibration in Progress',
        estimatedArrival: 'Estimated 48h from Confirmation',
        itemSummary: 'Medical Machinery & Consumables Package',
        engineerAssigned: 'Eng. Chileshe Mwewa (Biomedical Dept)',
        temperatureControlled: true,
        coldChainReading: '+4.0°C Verified',
        zamraComplianceRef: 'ZAMRA/WH/2026-VAL-09'
      });
    }
  };

  const getStageIndex = (status: RequisitionRecord['status']) => {
    switch (status) {
      case 'regulatory_cleared': return 1;
      case 'warehouse_staging': return 2;
      case 'in_transit': return 3;
      case 'installed_commissioned': return 4;
      default: return 2;
    }
  };

  const currentStage = activeRecord ? getStageIndex(activeRecord.status) : 1;

  return (
    <section id="tracking" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
            Nationwide Logistics & Consignment Verification
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Track Hospital Dispatch & Regulatory Clearance
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Inspect live shipment status, ZAMRA wholesale verification references, and biomedical calibration milestones
            for pending hospital requisitions and Ministry tenders.
          </p>
        </div>

        {/* Search Bar & Quick Samples */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
                placeholder="Enter Consignment ID (e.g. ZM-MED-8814, NDL-REG-3042)"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors whitespace-nowrap"
            >
              Verify Consignment
            </button>
          </form>

          {/* Clean typographic sample selectors (Zero-pill discipline) */}
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <span>Recent Dispatches:</span>
            {SAMPLE_REQUISITIONS.map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  setSearchId(r.id);
                  setActiveRecord(r);
                }}
                className="text-teal-700 hover:underline font-mono text-[11px]"
              >
                {r.id} ({r.facilityCity})
              </button>
            ))}
          </div>
        </div>

        {/* Active Record Detail */}
        {activeRecord && (
          <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Top Overview */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="text-xs font-mono text-slate-400">Consignment Reference</div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{activeRecord.id}</h3>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {activeRecord.facilityName} · {activeRecord.district}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Equipment Consignment: <strong className="text-slate-800">{activeRecord.itemSummary}</strong>
                </div>
              </div>

              <div className="sm:text-right space-y-1 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 font-semibold rounded-lg border border-teal-200">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{activeRecord.statusLabel}</span>
                </div>
                <div className="text-slate-500">
                  Estimated Delivery / Sign-Off: <strong className="text-slate-700">{activeRecord.estimatedArrival}</strong>
                </div>
              </div>
            </div>

            {/* 4-Stage Visual Milestones Pipeline */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
                Procurement & Fulfillment Progress
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                {/* Step 1 */}
                <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                  currentStage >= 1 ? 'bg-white border-teal-500 shadow-2xs' : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">1. Regulatory Clearance</span>
                    <CheckCircle2 className={`w-4 h-4 ${currentStage >= 1 ? 'text-teal-600' : 'text-slate-300'}`} />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    ZAMRA import permit verified. WHO GDP dossier signed.
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                  currentStage >= 2 ? 'bg-white border-teal-500 shadow-2xs' : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">2. Calibration & Staging</span>
                    <CheckCircle2 className={`w-4 h-4 ${currentStage >= 2 ? 'text-teal-600' : 'text-slate-300'}`} />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Fluke biomedical electrical safety and sensor validation at Washama Rd.
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                  currentStage >= 3 ? 'bg-white border-teal-500 shadow-2xs' : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">3. Reefer Dispatch</span>
                    <CheckCircle2 className={`w-4 h-4 ${currentStage >= 3 ? 'text-teal-600' : 'text-slate-300'}`} />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Active temperature logging in transit with GPS route monitoring.
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                  currentStage >= 4 ? 'bg-white border-teal-500 shadow-2xs' : 'bg-slate-100 border-slate-200 text-slate-400'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">4. Clinical Sign-Off</span>
                    <CheckCircle2 className={`w-4 h-4 ${currentStage >= 4 ? 'text-teal-600' : 'text-slate-300'}`} />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    On-site installation, hospital staff training & warranty activation.
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Verification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <div className="text-slate-400">Assigned Biomedical Lead</div>
                <div className="font-semibold text-slate-900 mt-0.5">{activeRecord.engineerAssigned}</div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <div className="text-slate-400">Cold-Chain Status</div>
                <div className="font-semibold text-teal-700 mt-0.5">
                  {activeRecord.coldChainReading || 'Standard Ambient Dry Cargo'}
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <div className="text-slate-400">ZAMRA Wholesale Dossier Ref</div>
                <div className="font-mono font-semibold text-slate-800 mt-0.5">
                  {activeRecord.zamraComplianceRef}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
