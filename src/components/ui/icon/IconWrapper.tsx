"use client";

import React from 'react';
interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

const IconWrapper: React.FC<IconWrapperProps> = ({ 
  children, 
  className = "",
  variant = 'default'
}) => {

  const getIconColor = () => {
    switch (variant) {
      case 'primary':
        return 'text-brand-500 dark:text-brand-400';
      case 'secondary':
        return 'text-gray-600 dark:text-gray-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className={`${getIconColor()} transition-colors duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper; 