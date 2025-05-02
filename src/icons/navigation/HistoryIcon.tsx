import { IconWrapper } from './index';

export function HistoryIcon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8V12L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.05 11C3.27 6.61 7.06 3.13 11.5 3C16.19 2.87 20 6.54 20 11.22C20 15.9 16.19 19.57 11.5 19.57C7.43 19.57 3.98 16.45 3.05 12.57"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
} 