import { useTheme } from '@/context/ThemeContext';
import React from "react";

const IconWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'fill-white/90' : 'fill-gray-800';
  
  return (
    <div className={`${iconColor} ${className}`}>
      {children}
    </div>
  );
};

export { IconWrapper };

  export { AnalyticsIcon } from './AnalyticsIcon';
  export { BoxCubeIcon } from './BoxCubeIcon';
  export { BoxIcon } from './BoxIcon';
  export { ChevronLeftIcon } from './ChevronLeftIcon';
  export { CreditCardIcon } from './CreditCardIcon';
  export { GridIcon } from './GridIcon';
  export { HistoryIcon } from './HistoryIcon';
  export { ReceiptIcon } from './ReceiptIcon';
