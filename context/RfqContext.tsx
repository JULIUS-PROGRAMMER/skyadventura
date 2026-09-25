'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MedicalProduct, RfqItem, MEDICAL_CATALOG } from '@/data/medical-catalog';

type Currency = 'ZMW' | 'USD';

interface RfqContextType {
  items: RfqItem[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  addItem: (product: MedicalProduct, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearRfq: () => void;
  totalItemsCount: number;
  subtotal: number;
  formatPrice: (amountInZmw: number, amountInUsd: number) => string;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  activeSpecProduct: MedicalProduct | null;
  openSpecModal: (product: MedicalProduct) => void;
  closeSpecModal: () => void;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqItem[]>([
    // Seed with one item initially so the user can immediately see the RFQ builder in action
    { product: MEDICAL_CATALOG[0], quantity: 2 },
    { product: MEDICAL_CATALOG[4], quantity: 1 }
  ]);
  const [currency, setCurrency] = useState<Currency>('ZMW');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSpecProduct, setActiveSpecProduct] = useState<MedicalProduct | null>(null);

  const addItem = (product: MedicalProduct, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearRfq = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const price = currency === 'ZMW' ? item.product.priceZMW : item.product.priceUSD;
    return sum + price * item.quantity;
  }, 0);

  const formatPrice = (amountInZmw: number, amountInUsd: number) => {
    if (currency === 'ZMW') {
      return `ZMW ${amountInZmw.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }
    return `$${amountInUsd.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const openSpecModal = (product: MedicalProduct) => {
    setActiveSpecProduct(product);
  };

  const closeSpecModal = () => {
    setActiveSpecProduct(null);
  };

  return (
    <RfqContext.Provider
      value={{
        items,
        currency,
        setCurrency,
        addItem,
        removeItem,
        updateQuantity,
        clearRfq,
        totalItemsCount,
        subtotal,
        formatPrice,
        isDrawerOpen,
        setIsDrawerOpen,
        activeSpecProduct,
        openSpecModal,
        closeSpecModal,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within an RfqProvider');
  }
  return context;
}
