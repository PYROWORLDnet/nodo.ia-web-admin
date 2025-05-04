"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface EyeIconProps {
  className?: string;
}

const EyeIcon: React.FC<EyeIconProps> = ({ className = "" }) => {
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
        d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <path
        d="M2.036 12.322C1.967 12.115 1.967 11.885 2.036 11.678C3.423 7.51 7.36 4.5 12 4.5C16.64 4.5 20.577 7.51 21.964 11.678C22.033 11.885 22.033 12.115 21.964 12.322C20.577 16.49 16.64 19.5 12 19.5C7.36 19.5 3.423 16.49 2.036 12.322Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
};

export default EyeIcon; 