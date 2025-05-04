"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface EyeCloseIconProps {
  className?: string;
}

const EyeCloseIcon: React.FC<EyeCloseIconProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'stroke-gray-300' : 'stroke-gray-600';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconColor} ${className} transition-colors duration-200`}
    >
      <path
        d="M9.88 9.88C9.23 10.53 8.8 11.4 8.8 12.35C8.8 14.45 10.45 16.1 12.55 16.1C13.5 16.1 14.37 15.67 15.02 15.02M17.94 17.94C16.23 19.03 14.21 19.65 12 19.65C8.13 19.65 4.69 17.18 2.89 13.35C3.94 11.15 5.59 9.5 7.79 8.45L17.94 17.94ZM3.42 3.42L20.58 20.58M12 5.65C15.87 5.65 19.31 8.12 21.11 11.95C20.06 14.15 18.41 15.8 16.21 16.85L6.06 7.36C7.77 6.27 9.79 5.65 12 5.65Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
};

export default EyeCloseIcon;