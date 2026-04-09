
import React from 'react';

const ComingSoonBadge = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 shadow-sm ${className}`}>
      Coming Soon
    </span>
  );
};

export default ComingSoonBadge;
