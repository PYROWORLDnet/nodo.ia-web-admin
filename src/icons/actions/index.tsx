import { useTheme } from '@/context/ThemeContext';
import IconWrapper from '@/components/ui/icon/IconWrapper';

export const PlusIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  </IconWrapper>
);

export const FileIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
    </svg>
  </IconWrapper>
);

export const ArrowUpIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </svg>
  </IconWrapper>
);

export const ArrowDownIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
    </svg>
  </IconWrapper>
);

export const MoreDotIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  </IconWrapper>
); 