'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InstitutionalCapabilities from '@/components/InstitutionalCapabilities';
import { 
  ShieldCheck, 
  Award, 
  ThermometerSnowflake, 
  ArrowRight, 
  MessageSquare,
  FileText
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Background Warehouse Photo Banner */}
        <div className="absolute inset-0">
          <Image
            src="/images/pharma_warehouse_hero_1790272393578.jpg"
            alt="Sky Adventura pharmaceutical warehouse distribution facility with high-density shelving and medicine boxes"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Professional gradient overlay balancing image visibility with text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-950/30 to-slate-950/80" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Trust Badge Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>ZAMRA Compliant</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-xs">
                <Award className="w-3.5 h-3.5 text-teal-400" />
                <span>GDP Certified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-xs">
                <ThermometerSnowflake className="w-3.5 h-3.5 text-teal-400" />
                <span>Nationwide Cold-Chain</span>
              </div>
            </div>

            {/* Main Heading (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Your Certified B2B Partner for Seamless Wholesale Medicine Distribution in Zambia
            </h1>

            {/* Short Subheading */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Supplying retail pharmacies across Zambia with ZAMRA-approved prescription drugs, fast-moving OTCs, and cold-chain therapeutics delivered with guaranteed shelf-life and batch traceability.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Open Wholesale Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://wa.me/260966860962?text=Hello%20Sky%20Adventura%2C%20I%20would%20like%20to%20inquire%20about%20wholesale%20pharmaceutical%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-lg backdrop-blur-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>WhatsApp Distribution Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Institutional Capabilities Cards */}
      <InstitutionalCapabilities />
    </div>
  );
}
