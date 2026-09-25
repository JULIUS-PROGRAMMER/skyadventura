'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 focus-visible:outline-teal-600"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-black text-lg shadow-sm shrink-0">
              +
            </span>
            <span className="font-display tracking-tight text-xl font-extrabold text-slate-900 leading-tight">
              Sky<br />
              <span className="text-teal-600">Adventura</span>
            </span>
          </Link>

          {/* Zone 2: 4 clean text navigation links (Home, Services, About Us, Contact Us) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1 transition-colors relative ${
                    active
                      ? 'text-teal-700 font-semibold border-b-2 border-teal-600'
                      : 'text-slate-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/260966860962?text=Hello%20Skyadventura%20Medical%2C%20I%20would%20like%20to%20request%20a%20wholesale%20quotation%20(RFQ)%20for%20our%20pharmacy."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
              <span>RFQ via WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg transition-colors ${
                    active
                      ? 'bg-teal-50 text-teal-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="https://wa.me/260966860962?text=Hello%20Skyadventura%20Medical%2C%20I%20would%20like%20to%20request%20a%20wholesale%20quotation%20(RFQ)%20for%20our%20pharmacy."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Request Quotation (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

