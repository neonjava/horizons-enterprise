
import React from 'react';

const CurrencyToggle = ({ currency, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="px-4 py-2.5 text-sm font-bold rounded-lg bg-card border border-border text-foreground hover:bg-secondary transition-colors"
    >
      {currency === 'INR' ? 'INR ₹' : 'USD $'}
    </button>
  );
};

export default CurrencyToggle;
