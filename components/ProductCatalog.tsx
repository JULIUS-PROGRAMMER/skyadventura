'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, Plus, Check, Eye, Download, Shield, Sparkles, LayoutGrid, TableProperties } from 'lucide-react';
import { MEDICAL_CATALOG, CATEGORIES, MedicalProduct } from '@/data/medical-catalog';
import { useRfq } from '@/context/RfqContext';

export default function ProductCatalog() {
  const { addItem, formatPrice, openSpecModal, items } = useRfq();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return MEDICAL_CATALOG.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.modelNumber.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.applications.some(app => app.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (product: MedicalProduct) => {
    addItem(product, 1);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1500);
  };

  const getQuantityInRfq = (productId: string) => {
    const found = items.find(i => i.product.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="catalog" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-semibold text-teal-700 tracking-wider uppercase mb-1">
              Nationwide Inventory Catalog · Lusaka Showroom & Warehouses
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Medical Machinery, Diagnostics & Hospital Systems
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Authentic medical equipment sourced directly from premier global manufacturers. Every system conforms to
              Zambia Medicines Regulatory Authority (ZAMRA) standards and comes with certified on-site installation and calibration.
            </p>
          </div>

          {/* Quick View Mode Toggle */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                viewMode === 'table'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Technical Matrix</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="py-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search model, ventilator, ECG..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center bg-white rounded-xl border border-slate-200">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-800">No systems match your filter criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search term or switching to &ldquo;All Systems&rdquo;</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Mode 1: Card Grid */}
        {viewMode === 'grid' && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => {
              const qtyInDraft = getQuantityInRfq(product.id);
              const isRecentlyAdded = addedAnimationId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col overflow-hidden group"
                >
                  {/* Visual Header */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 text-[11px] font-medium text-slate-700 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs border border-slate-200/50">
                      {product.modelNumber}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 text-[10px] font-semibold text-teal-900 bg-teal-50/95 backdrop-blur-xs px-2 py-0.5 rounded border border-teal-200/60">
                      {product.certification.split('/')[0].trim()}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-teal-700 font-medium">
                        {product.categoryLabel}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                        {product.keySpecs.slice(0, 2).map((spec, idx) => (
                          <div key={idx} className="flex justify-between text-slate-600">
                            <span className="text-slate-400">{spec.label}:</span>
                            <span className="font-medium text-slate-800 truncate max-w-[60%] text-right">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Footer Actions */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[11px] text-slate-400 block">Unit Tender Price</span>
                          <span className="text-base font-extrabold text-slate-900 tabular-nums">
                            {formatPrice(product.priceZMW, product.priceUSD)}
                          </span>
                        </div>

                        <button
                          onClick={() => openSpecModal(product)}
                          className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-teal-700 font-medium transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Specs</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAdd(product)}
                          className={`w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
                            isRecentlyAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-teal-700 hover:bg-teal-800 text-white'
                          }`}
                        >
                          {isRecentlyAdded ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Added to RFQ Draft</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              <span>
                                {qtyInDraft > 0 ? `Add Another (In RFQ: ${qtyInDraft})` : 'Add to RFQ Requisition'}
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Technical Comparison Matrix Table */}
        {viewMode === 'table' && filteredProducts.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50 text-slate-700 font-semibold">
                  <tr>
                    <th className="py-3 px-4 text-left">Equipment Name & Model</th>
                    <th className="py-3 px-4 text-left">Category</th>
                    <th className="py-3 px-4 text-left">Certification</th>
                    <th className="py-3 px-4 text-left">OEM Partner</th>
                    <th className="py-3 px-4 text-left">Key Spec</th>
                    <th className="py-3 px-4 text-right">Price</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredProducts.map(product => {
                    const qtyInDraft = getQuantityInRfq(product.id);
                    return (
                      <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{product.name}</div>
                          <div className="text-slate-400 font-mono text-[11px]">{product.modelNumber}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {product.categoryLabel}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-slate-700 font-medium">
                            {product.certification}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {product.oemPartner}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate">
                          {product.keySpecs[0]?.label}: {product.keySpecs[0]?.value}
                        </td>
                        <td className="py-3.5 px-4 text-right font-bold text-slate-900 tabular-nums">
                          {formatPrice(product.priceZMW, product.priceUSD)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => openSpecModal(product)}
                              className="p-1.5 text-slate-500 hover:text-teal-700 hover:bg-slate-100 rounded"
                              title="View Datasheet"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleAdd(product)}
                              className="px-2.5 py-1 text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white rounded transition-colors"
                            >
                              {qtyInDraft > 0 ? `+1 (${qtyInDraft})` : 'Add RFQ'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
