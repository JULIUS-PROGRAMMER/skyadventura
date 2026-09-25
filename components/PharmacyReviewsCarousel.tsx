'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  BadgeCheck,
  Pause,
  Play
} from 'lucide-react';

interface Review {
  id: string;
  pharmacyName: string;
  location: string;
  province: string;
  pharmacist: string;
  role: string;
  reviewText: string;
  tag: string;
  orderType: string;
  stars: number;
}

const reviews: Review[] = [
  {
    id: 'lusaka-premier',
    pharmacyName: 'Lusaka Premier Chemist',
    location: 'Woodlands, Lusaka',
    province: 'Lusaka Province',
    pharmacist: 'Dr. Catherine Mwewa, BPharm',
    role: 'Superintendent Pharmacist',
    reviewText: 'Skyadventura has completely solved our chronic medication stockouts in Lusaka. Same-day delivery on orders placed before 11:00 AM combined with a guaranteed 24-month remaining shelf-life on all POMs means our retail counter dispensary runs without interruption. Truly the most dependable wholesale partner in Zambia.',
    tag: 'Zero Stockout Guarantee',
    orderType: 'Prescription POMs & Cardiovascular Lines',
    stars: 5,
  },
  {
    id: 'copperbelt-care',
    pharmacyName: 'Copperbelt Care Pharmacy',
    location: 'Broadway, Ndola',
    province: 'Copperbelt Province',
    pharmacist: 'Mr. Kondwani Phiri',
    role: 'Managing Pharmacist & Branch Lead',
    reviewText: 'Procuring cold-chain insulin and pediatric vaccines used to be high-risk for our Copperbelt branches. Skyadventura’s temperature-logged refrigerated transport and instant WhatsApp batch clearance give us total peace of mind. Every delivery arrives strictly between 2°C and 8°C with verified temperature audit logs.',
    tag: 'Unbroken Cold-Chain 2°C–8°C',
    orderType: 'Insulins, Vaccines & Biologics',
    stars: 5,
  },
  {
    id: 'victoria-falls',
    pharmacyName: 'Victoria Falls Community Dispensary',
    location: 'Livingstone Center',
    province: 'Southern Province',
    pharmacist: 'Mrs. Thandiwe Banda',
    role: 'Chief Dispensing Chemist',
    reviewText: 'Operating in Livingstone, rapid provincial logistics was our biggest hurdle with other wholesalers. Skyadventura dispatches our weekly antibiotic, analgesic, and OTC orders with speed and direct counter handover. Their transparent wholesale pricing has directly improved our dispensary margins.',
    tag: '24-Hour Provincial Turnaround',
    orderType: 'Fast-Moving OTCs & Antibiotics',
    stars: 5,
  },
  {
    id: 'mukuba-health',
    pharmacyName: 'Mukuba Health Care Pharmacy',
    location: 'Parklands, Kitwe',
    province: 'Copperbelt Province',
    pharmacist: 'Dr. Joseph Chilufya',
    role: 'Lead Clinical Pharmacist',
    reviewText: 'ZAMRA compliance audits used to demand days of manual paperwork tracking. With Skyadventura, every single consignment arrives with digital manufacturer Certificates of Analysis (CoA) and verified batch serialization. Their flexible 30-day trade credit also protected our cash flow during peak seasons.',
    tag: '100% ZAMRA Audit-Ready CoA',
    orderType: 'Injectables & Chronic Therapeutics',
    stars: 5,
  },
  {
    id: 'eastern-mart',
    pharmacyName: 'Eastern Province Health Mart',
    location: 'Great East Road, Chipata',
    province: 'Eastern Province',
    pharmacist: 'Mr. Patrick Zulu',
    role: 'Procurement & Operations Director',
    reviewText: 'The WhatsApp procurement desk is phenomenal. We paste our stock list in the morning, receive proforma quotes with batch expiry dates within two hours, and have our orders packed according to WHO Good Distribution Practices. They treat independent community pharmacies with immense respect.',
    tag: 'Rapid WhatsApp Procurement',
    orderType: 'Full Retail Pharmacy Restock',
    stars: 5,
  },
];

export default function PharmacyReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5500);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section 
      aria-label="Retail Pharmacy Customer Reviews"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient lighting decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <BadgeCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>COMMUNITY PHARMACY REPUTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              Trusted by Retail Pharmacies Across Zambia
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Read how independent chemists and regional pharmacy networks rely on Skyadventura for stock continuity, cold-chain rigor, and transparent margins.
            </p>
          </div>

          {/* Autoplay & Controls Bar */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition-all text-xs flex items-center gap-1.5"
              title={isPaused ? "Resume autoplay" : "Pause autoplay"}
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-teal-400" />
                  <span className="hidden sm:inline">Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-teal-400" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 hover:border-teal-500/50 transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-slate-200" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 hover:border-teal-500/50 transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-slate-200" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-7 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative">
          
          <Quote className="w-16 h-16 text-teal-500/15 absolute top-6 right-6 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Review Text and Stars */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Star Rating & Highlight Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeReview.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-400">·</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>{activeReview.tag}</span>
                </span>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed font-display">
                &ldquo;{activeReview.reviewText}&rdquo;
              </blockquote>

              {/* Pharmacist & Facility Metadata */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeReview.pharmacist}
                  </h4>
                  <p className="text-xs text-teal-400 font-medium">
                    {activeReview.role}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 justify-end">
                    <Building2 className="w-4 h-4 text-teal-400" />
                    <span>{activeReview.pharmacyName}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 justify-end mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{activeReview.location} ({activeReview.province})</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Verified Partner Info Box */}
            <div className="lg:col-span-4 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4 text-teal-400" />
                <span>Verified Retail Partner</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500 block">Facility Name:</span>
                  <strong className="text-white font-semibold text-sm">{activeReview.pharmacyName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Location:</span>
                  <span className="text-slate-200">{activeReview.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Requisition Line:</span>
                  <span className="text-teal-300 font-medium">{activeReview.orderType}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                <span>Active Wholesale Account · 100% ZAMRA Compliant</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Interactive Thumbnail Selector Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {reviews.map((rev, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={rev.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-teal-950/70 border-teal-500/80 shadow-md ring-1 ring-teal-500/40'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className={`font-mono font-bold ${isActive ? 'text-teal-400' : 'text-slate-500'}`}>
                    0{index + 1}
                  </span>
                  <span className="text-amber-400 text-[10px]">★ 5.0</span>
                </div>
                <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {rev.pharmacyName}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">
                  {rev.location}
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Dots Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-teal-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
