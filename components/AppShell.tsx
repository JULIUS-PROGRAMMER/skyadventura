'use client';

import React from 'react';
import { RfqProvider } from '@/context/RfqContext';
import TopUtilityBar from '@/components/TopUtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqDrawer from '@/components/RfqDrawer';
import SpecSheetModal from '@/components/SpecSheetModal';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <RfqProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-500 selection:text-white">
        <TopUtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RfqDrawer />
        <SpecSheetModal />
      </div>
    </RfqProvider>
  );
}
