import { useTheme } from '@/context/ThemeContext';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const IconWrapper = ({ children, className = "" }: IconWrapperProps) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'fill-white/90' : 'fill-gray-800';
  
  return (
    <div className={`${iconColor} ${className}`}>
      {children}
    </div>
  );
}; 