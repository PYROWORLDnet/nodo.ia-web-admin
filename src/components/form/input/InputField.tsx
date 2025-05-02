"use client";

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  type = "text",
  className = "",
  ...props
}) => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles = "w-full px-4 py-2 rounded-lg border-2 focus:ring-2 focus:ring-offset-0 focus:outline-none transition-colors duration-200";
  const themeStyles = theme === 'dark'
    ? "border-2 border-[var(--color-gray-800)] bg-[#000000] text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/50"
    : "border-var(--color-gray-800) bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/50";

  const errorStyles = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
    : "";

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={props.id} 
          className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`
            ${baseStyles}
            ${themeStyles}
            ${errorStyles}
            ${icon ? 'pl-10' : ''}
            ${isPassword ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default InputField; 