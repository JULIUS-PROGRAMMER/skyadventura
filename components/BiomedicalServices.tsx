'use client';

import React, { useState } from 'react';
import { Wrench, Shield, CheckCircle, Clock, Award, PhoneCall, Calendar, Check } from 'lucide-react';

export default function BiomedicalServices() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [facility, setFacility] = useState('');
  const [equipmentType, setEquipmentType] = useState('ventilator');
  const [urgency, setUrgency] = useState('scheduled');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setSubmitted(false);
    }, 2000);
  };

  const services = [
    {
      title: 'Fluke-Certified Calibration & Safety Testing',
      description: 'Periodic biomedical calibration verifying electrical leakage, pressure accuracy, flow rates, and energy delivery according to IEC 60601 standards.',
      timing: 'Semi-annual / Annual Contracts',
      equipment: 'Defibrillators, Ventilators, Infusion Pumps, Patient Monitors'
    },
    {
      title: '24/7 ICU & Operating Theatre Breakdown Response',
      description: 'Rapid on-site emergency troubleshooting for mission-critical life support systems with immediate replacement loaner units dispatched from Lusaka.',
      timing: 'Under 4 hours within Lusaka / Under 12 hours nationwide',
      equipment: 'Anaesthesia Workstations, Ventilators, Dialysis Units'
    },
    {
      title: 'Clinical User & Biomedical Engineering Training',
      description: 'Comprehensive hands-on certified workshops for doctors, anaesthetists, nurses, and hospital technicians on system operation and maintenance protocols.',
      timing: 'Included with every major equipment installation',
      equipment: 'Ultrasound Systems, Biochemistry Analyzers, Surgical Units'
    },
    {
      title: 'OEM Genuine Spare Parts Depot (Lusaka)',
      description: 'Direct consignment warehouse stocking replacement PCB boards, transducer probes, sensors, valves, batteries, and clinical consumables at Washama Rd.',
      timing: 'Immediate dispatch / Same-day courier',
      equipment: 'All catalogued equipment lines'
    }
  ];

  return (
    <section id="biomedical" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
              Biomedical Engineering & Technical Services Division
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Certified On-Site Installation, Calibration & Preventative Care
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Unlike overseas brokers who leave hospitals without local technical backup, Sky Adventura employs a full-time
              team of certified biomedical engineers and pharmacists based permanently in Lusaka.
            </p>
          </div>

          <button
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors whitespace-nowrap self-start lg:self-auto"
          >
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>Book Engineering Calibration</span>
          </button>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-slate-900">
                  {srv.title}
                </h3>
                <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded shrink-0">
                  {srv.timing}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {srv.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <Wrench className="w-3.5 h-3.5 text-slate-400" />
                <span>Scope: <strong className="text-slate-700 font-medium">{srv.equipment}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-teal-700" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Registered Biomedical Engineers in Lusaka & Copperbelt
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Every technician is certified by the Engineering Institution of Zambia (EIZ) and factory-trained by global OEM partners.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+260978842190"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-teal-700" />
              <span>Emergency Bioméd: +260 97 884-2190</span>
            </a>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">
                Book Biomedical Service / Calibration
              </h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <Check className="w-10 h-10 text-teal-600 mx-auto" />
                <div className="font-bold text-slate-900 text-sm">Service Request Logged</div>
                <p className="text-xs text-slate-600">
                  Our lead biomedical engineer at Washama Hub will contact your facility within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Hospital / Clinic Facility Name
                  </label>
                  <input
                    type="text"
                    required
                    value={facility}
                    onChange={e => setFacility(e.target.value)}
                    placeholder="e.g. Ndola Regional Hospital"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Equipment System Category
                  </label>
                  <select
                    value={equipmentType}
                    onChange={e => setEquipmentType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="ventilator">ICU Ventilator / Anaesthesia Station</option>
                    <option value="defibrillator">Biphasic Defibrillator / Patient Monitor</option>
                    <option value="ultrasound">Color Doppler Ultrasound / Imaging</option>
                    <option value="autoclave">Autoclave / Sterilization Unit</option>
                    <option value="coldchain">Vaccine Cold Room / SDD Refrigerator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">
                    Service Priority Level
                  </label>
                  <select
                    value={urgency}
                    onChange={e => setUrgency(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="scheduled">Scheduled Routine Calibration (Annual/Semi-Annual)</option>
                    <option value="urgent">Urgent Breakdown (ICU / Operating Theatre Down)</option>
                    <option value="commissioning">New Facility Installation & User Training</option>
                  </select>
                </div>

                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg shadow-2xs"
                  >
                    Submit Service Dispatch Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
