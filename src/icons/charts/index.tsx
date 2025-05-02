import { useTheme } from '@/context/ThemeContext';

const IconWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'fill-white/90' : 'fill-gray-800';
  
  return (
    <div className={`${iconColor} ${className}`}>
      {children}
    </div>
  );
};

export const PieChartIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99L22 12.99c-.47-4.74-4.24-8.5-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
    </svg>
  </IconWrapper>
); 