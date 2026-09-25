'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export default function ContactFacility() {
  const [name, setName] = useState('');
  const [facility, setFacility] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('quote_request');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setFacility('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Facility Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
                Headquarters & Logistics Hub
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                Visit Our Lusaka Facility & Showroom
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Hospital procurement committees, clinicians, and biomedical engineers are welcome to test demo systems,
                inspect batch cold-storage rooms, and review regulatory dossiers in person.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Physical Warehouse & Showroom</div>
                  <div className="text-slate-600 mt-0.5">
                    Plot 5147 Washama Road, Lite Industrial Area<br />
                    Lusaka 10101, Zambia
                  </div>
                  <div className="text-teal-700 text-[11px] font-medium mt-1">
                    Secondary Logistics: Plot 5132 Chandwe Musonda Road, Lusaka
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Direct Telephones & Hotline</div>
                  <div className="text-slate-600 mt-0.5">
                    Landline: <a href="tel:+260211289440" className="hover:underline text-slate-800 font-medium">+260 (211) 289-440</a><br />
                    Mobile / WhatsApp: <a href="tel:+260978842190" className="hover:underline text-slate-800 font-medium">+260 97 884-2190</a><br />
                    ICU Emergency Breakdown: <span className="text-teal-800 font-semibold">+260 96 612-4400</span> (24/7)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Electronic Inquiries & Tenders</div>
                  <div className="text-slate-600 mt-0.5">
                    General Inquiries: <a href="mailto:info@skyadventura.net" className="text-teal-700 hover:underline">info@skyadventura.net</a><br />
                    Formal Tenders & RFQs: <a href="mailto:procurement@skyadventura.net" className="text-teal-700 hover:underline">procurement@skyadventura.net</a><br />
                    Biomedical Engineering: <a href="mailto:biomedical@skyadventura.net" className="text-teal-700 hover:underline">biomedical@skyadventura.net</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">Depot Hours & Loading Bays</div>
                  <div className="text-slate-600 mt-0.5">
                    Monday – Friday: 08:00 – 17:00 CAT<br />
                    Saturday: 08:30 – 13:00 CAT (Emergency Dispatch Only)<br />
                    Sunday & Public Holidays: On-Call for Critical Hospital Requisitions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message & Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Send Direct Requisition Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our procurement specialists respond to all medical equipment inquiries within 4 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-teal-50/70 rounded-xl border border-teal-200 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <h4 className="text-base font-bold text-teal-900">
                    Inquiry Received by Sky Adventura Desk
                  </h4>
                  <p className="text-xs text-teal-700 max-w-md mx-auto leading-relaxed">
                    Thank you, your communication has been routed to our Lusaka procurement manager.
                    A representative will contact you via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-teal-800 bg-white border border-teal-200 rounded-lg hover:bg-teal-50"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Dr. Mutale Kangwa"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Hospital / Institution *</label>
                      <input
                        type="text"
                        required
                        value={facility}
                        onChange={e => setFacility(e.target.value)}
                        placeholder="e.g. Lusaka Diagnostic Clinic"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Official Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e.g. mutale@hospital.zm"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Contact Telephone (+260) *</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="e.g. +260 97 123 4567"
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Inquiry Purpose</label>
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="quote_request">Equipment Quotation & Formal Tender</option>
                      <option value="biomedical_calibration">Biomedical Maintenance & Calibration Contract</option>
                      <option value="cold_chain">Pharmaceutical Cold-Chain Requisition</option>
                      <option value="showroom_visit">Schedule Showroom Inspection at Washama Rd</option>
                      <option value="other">Other Clinical Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">Detailed Message / Specifications</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Specify requested equipment models, clinical department requirements, or delivery location..."
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Lusaka Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
