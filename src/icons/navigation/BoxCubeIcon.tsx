import { IconWrapper } from './IconWrapper';

interface BoxCubeIconProps {
  className?: string;
}

export const BoxCubeIcon = ({ className = "" }: BoxCubeIconProps) => (
  <IconWrapper className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.07-.34.11-.52.11-.18 0-.36-.04-.52-.11l-7.9-4.44c-.32-.17-.53-.5-.53-.88v-8.98c0-.38.21-.71.53-.88l7.9-4.44c.16-.07.34-.11.52-.11.18 0 .36.04.52.11l7.9 4.44c.32.17.53.5.53.88v8.98z" />
    </svg>
  </IconWrapper>
); 