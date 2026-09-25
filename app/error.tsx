'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error cleanly
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h2 className="text-2xl font-bold text-slate-900 font-display">Something went wrong</h2>
      <p className="mt-2 text-xs text-slate-600">
        An unexpected error occurred while loading this healthcare portal view.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-sm"
      >
        Try again
      </button>
    </div>
  );
}
