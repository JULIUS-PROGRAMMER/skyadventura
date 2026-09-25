'use client';

import React from 'react';
import { MapPin, Phone, ShieldCheck, DollarSign } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function TopUtilityBar() {
  const { currency, setCurrency } = useRfq();

  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap text-slate-300">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Mungwi Road, Light Industrial Area, Lusaka, Zambia</span>
          </div>
          <span className="hidden md:inline text-slate-600" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span><a href="tel:+260966860962" className="text-white hover:text-teal-300 hover:underline font-medium">+260 96 686 0962</a></span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-teal-300">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>ZAMRA Licensed Wholesaler</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>WHO-GDP Compliant</span>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded border border-slate-700">
            <button
              onClick={() => setCurrency('ZMW')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currency === 'ZMW'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Display in Zambian Kwacha"
            >
              ZMW (K)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                currency === 'USD'
                  ? 'bg-teal-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Display in US Dollars"
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
