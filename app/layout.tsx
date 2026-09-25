import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'SKYADVENTURAmed | Wholesale Medicine & Pharmaceutical Distribution Zambia',
  description: 'ZAMRA-licensed wholesale pharmaceutical distributor supplying retail pharmacies across Zambia with authentic prescription drugs, fast-moving OTCs, and cold-chain therapeutics.',
  openGraph: {
    title: 'SKYADVENTURAmed | Wholesale Medicine & Pharmaceutical Distribution Zambia',
    description: 'ZAMRA-licensed wholesale pharmaceutical distributor based in Lusaka, Zambia supplying retail pharmacies across all 10 provinces.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYADVENTURAmed | Wholesale Medicine & Pharmaceutical Distribution Zambia',
    description: 'ZAMRA-licensed wholesale pharmaceutical distributor in Zambia.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
