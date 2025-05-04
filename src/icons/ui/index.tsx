import IconWrapper from '@/components/ui/icon/IconWrapper';

export const UserIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  </IconWrapper>
);

export const HorizontaLDots = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  </IconWrapper>
);

export const GroupIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
    </svg>
  </IconWrapper>
);

export const BoxIconLine = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
    </svg>
  </IconWrapper>
);

export const ClickThroughRateIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='dark:fill-white fill-black'>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
    </svg>
  </IconWrapper>
);

export { default as EyeCloseIcon } from './EyeCloseIcon';
export { default as EyeIcon } from './EyeIcon';

export const MoreDotIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const ArrowUpIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const ArrowDownIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const SearchIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const TagIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const MapIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM15 19L9 16.89V5L15 7.11V19Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const ClickIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3.5C9 4.33 8.33 5 7.5 5C6.67 5 6 4.33 6 3.5C6 2.67 6.67 2 7.5 2C8.33 2 9 2.67 9 3.5ZM16.5 5C17.33 5 18 4.33 18 3.5C18 2.67 17.33 2 16.5 2C15.67 2 15 2.67 15 3.5C15 4.33 15.67 5 16.5 5ZM12 5.5C12 6.33 11.33 7 10.5 7C9.67 7 9 6.33 9 5.5C9 4.67 9.67 4 10.5 4C11.33 4 12 4.67 12 5.5ZM7.5 8C6.67 8 6 8.67 6 9.5C6 10.33 6.67 11 7.5 11C8.33 11 9 10.33 9 9.5C9 8.67 8.33 8 7.5 8ZM16.5 8C15.67 8 15 8.67 15 9.5C15 10.33 15.67 11 16.5 11C17.33 11 18 10.33 18 9.5C18 8.67 17.33 8 16.5 8ZM12 11.5C12 12.33 11.33 13 10.5 13C9.67 13 9 12.33 9 11.5C9 10.67 9.67 10 10.5 10C11.33 10 12 10.67 12 11.5ZM7.5 14C6.67 14 6 14.67 6 15.5C6 16.33 6.67 17 7.5 17C8.33 17 9 16.33 9 15.5C9 14.67 8.33 14 7.5 14ZM16.5 14C15.67 14 15 14.67 15 15.5C15 16.33 15.67 17 16.5 17C17.33 17 18 16.33 18 15.5C18 14.67 17.33 14 16.5 14ZM12 17.5C12 18.33 11.33 19 10.5 19C9.67 19 9 18.33 9 17.5C9 16.67 9.67 16 10.5 16C11.33 16 12 16.67 12 17.5Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const MoneyIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.08 7.23 11.23 8.5 11.82C10.79 12.41 11.5 13.1 11.5 14.1C11.5 15 10.81 15.9 9 15.9C7.03 15.9 6.2 14.9 6.1 13H4C4.1 15.1 5.5 16.5 7.5 16.9V19H10.5V16.85C12.5 16.5 14 15.15 14 13.1C14 11.43 12.9 10.5 11.8 10.9Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
);

export const StarIcon = ({ className = "" }) => (
  <IconWrapper variant="secondary" className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
    </svg>
  </IconWrapper>
); 