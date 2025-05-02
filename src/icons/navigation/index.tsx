import { useTheme } from '@/context/ThemeContext';
import React from "react";
import { ReceiptIcon } from "./ReceiptIcon";
import { HistoryIcon } from "./HistoryIcon";

export const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'fill-[#ffffff]' : 'fill-[#000000]';

  return (
    <div className={`${iconColor} ${className || ""}`}>
      {children}
    </div>
  );
};

export { ReceiptIcon, HistoryIcon };

export const GridIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
    </svg>
  </IconWrapper>
);

export const BoxIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
    </svg>
  </IconWrapper>
);

export const BoxCubeIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.07-.34.11-.52.11-.18 0-.36-.04-.52-.11l-7.9-4.44c-.32-.17-.53-.5-.53-.88v-8.98c0-.38.21-.71.53-.88l7.9-4.44c.16-.07.34-.11.52-.11.18 0 .36.04.52.11l7.9 4.44c.32.17.53.5.53.88v8.98z" />
    </svg>
  </IconWrapper>
);

export const CreditCardIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export { default as ChevronLeftIcon } from './ChevronLeftIcon'; 