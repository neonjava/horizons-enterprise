
import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext(null);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'INR';
  });

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const getCurrencySymbol = () => {
    return currency === 'INR' ? '₹' : '$';
  };

  const convertPrice = (priceInUSD) => {
    if (currency === 'USD') {
      return Number(priceInUSD).toFixed(2);
    }
    // Base USD * 80 approx for the requested INR tiers (9.99 * 80 = ~799)
    return Math.round(Number(priceInUSD) * 80).toLocaleString('en-IN');
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, getCurrencySymbol, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined || context === null) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
