import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 font-display">404 - Page Not Found</h1>
      <p className="mt-3 text-sm text-slate-600 max-w-md">
        The requested medical resource or page could not be located.
      </p>
      <Link
        href="/"
        className="mt-6 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
