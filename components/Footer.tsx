'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-md bg-teal-600 flex items-center justify-center text-white font-black text-base shadow-xs shrink-0">
                +
              </span>
              <span className="font-display font-extrabold text-xl text-white tracking-tight leading-tight">
                Sky<br />
                <span className="text-teal-400">Adventura</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Nationwide distributor of electro-medical systems, diagnostics, hospital infrastructure, and WHO-GDP
              certified pharmaceuticals across Zambia and Southern Africa.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Zambia Medicines Regulatory Authority (ZAMRA) Licensed Wholesaler</div>
              <div>WHO Good Distribution Practices (GDP) Validated Facility</div>
            </div>
          </div>

          {/* Main 4 Pages Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Portfolio */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
              Product Portfolio
            </h4>
            <div className="h-px w-full bg-slate-800 my-2" />
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <Link
                  href="/services#pom-supply"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Prescription Medicines (POM)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#otc-distribution"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Fast-Moving OTCs & Analgesics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cold-chain-integrity"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Cold-Chain Vaccines & Biologics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#antibiotics-antimicrobials"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Antibiotics & Antimicrobials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#chronic-care"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Chronic Care & Cardiovascular</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pediatric-formulations"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Pediatric & Liquid Formulations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pharmacy-disposables"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Pharmacy Disposables & Packaging</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#vitamins-wellness"
                  className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-teal-400 leading-none group-hover:translate-x-0.5 transition-transform">•</span>
                  <span className="group-hover:underline">Vitamins & Wellness Supplements</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Logistics Depot Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
              Lusaka Facility
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Mungwi Road, Industrial Area, Lusaka, Zambia</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+260966860962" className="hover:underline text-slate-300 font-medium">+260 96 686 0962</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/260966860962?text=Hello%20Sky%20Adventura%20Medical%2C%20I%20would%20like%20to%20inquire%20about%20medical%20supplies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-emerald-300 font-medium"
                >
                  WhatsApp: +260 96 686 0962
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:sales@skyadventura.com" className="hover:underline text-slate-300 font-medium">sales@skyadventura.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sky Adventura Ltd. All rights reserved. Registered in the Republic of Zambia.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-300">ZAMRA Dossiers</Link>
            <span>·</span>
            <Link href="/services" className="hover:text-slate-300">Service Standards</Link>
            <span>·</span>
            <Link href="/contact" className="text-teal-400 hover:underline">Hospital Tender Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

