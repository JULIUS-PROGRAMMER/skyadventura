'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function RfqDrawer() {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    items,
    removeItem,
    updateQuantity,
    clearRfq,
    subtotal,
    currency,
    formatPrice
  } = useRfq();

  if (!isDrawerOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-slate-900 text-base">
              Hospital RFQ Requisition Draft
            </h3>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <div className="text-sm font-semibold text-slate-700">Your quotation draft is empty</div>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Select equipment from our catalog to calculate tender pricing and generate a formal institutional quotation.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="mt-2 px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
              >
                Browse Equipment Catalog
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span>{items.length} Equipment Models Selected</span>
                <button
                  onClick={clearRfq}
                  className="text-red-600 hover:text-red-700 font-medium hover:underline"
                >
                  Clear All
                </button>
              </div>

              {items.map(item => {
                const itemTotalZmw = item.product.priceZMW * item.quantity;
                const itemTotalUsd = item.product.priceUSD * item.quantity;

                return (
                  <div
                    key={item.product.id}
                    className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="text-[11px] font-mono text-slate-400">
                          {item.product.modelNumber}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-200 rounded-md bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-slate-900 font-bold tabular-nums min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <span className="font-bold text-slate-900 tabular-nums">
                          {formatPrice(itemTotalZmw, itemTotalUsd)}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          {formatPrice(item.product.priceZMW, item.product.priceUSD)} each
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* Footer with Subtotal & Proceed to Formal RFQ */}
        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Estimated Equipment Subtotal:</span>
                <span className="font-bold text-slate-900 tabular-nums text-sm">
                  {currency === 'ZMW'
                    ? `ZMW ${subtotal.toLocaleString('en-US')}`
                    : `$${subtotal.toLocaleString('en-US')}`}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-teal-700">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Includes OEM Standard Warranty & Pre-Delivery Calibration</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="#quote-builder"
                onClick={() => setIsDrawerOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all"
              >
                <span>Proceed to Formal Tender RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-full text-center py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Continue Selecting Systems
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
