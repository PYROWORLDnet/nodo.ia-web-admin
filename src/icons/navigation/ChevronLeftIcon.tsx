"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ChevronLeftIconProps {
  className?: string;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'stroke-gray-400' : 'stroke-gray-500';

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconColor} ${className}`}
    >
      <path
        d="M15 18L9 12L15 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeftIcon; 