"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  label, 
  error, 
  className = "", 
  ...props 
}) => {
  const { theme } = useTheme();
  const baseStyles = "w-4 h-4 rounded border-2 focus:ring-2 focus:ring-offset-0 focus:outline-none transition-colors duration-200";
  const themeStyles = theme === 'dark' 
    ? "border-gray-600 bg-gray-700 checked:bg-blue-500 checked:border-blue-500 focus:ring-blue-500/50" 
    : "border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:ring-blue-500/50";

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className={`${baseStyles} ${themeStyles} ${className}`}
        {...props}
      />
      {label && (
        <label 
          htmlFor={props.id} 
          className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Checkbox; 