"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  className = "",
  ...props
}) => {
  const { theme } = useTheme();
  const baseStyles = "block text-sm font-medium mb-1";
  const themeStyles = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';

  return (
    <label
      className={`${baseStyles} ${themeStyles} ${className}`}
      {...props}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1">*</span>
      )}
    </label>
  );
};

export default Label; 