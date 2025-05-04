"use client";

import { IconWrapper } from './IconWrapper';

interface ChevronLeftIconProps {
  className?: string;
}

export const ChevronLeftIcon = ({ className = "" }: ChevronLeftIconProps) => (
  <IconWrapper className={className}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  </IconWrapper>
);

export default ChevronLeftIcon; 