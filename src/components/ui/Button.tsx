import type { ReactNode } from 'react';

interface ButtonProps {
  buttonText?: string;
  type?: any;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export default function Button({
  buttonText,
  type = 'button',
  icon,
  iconPosition = 'left',
  className,
}: ButtonProps) {
  return (
    <button type={type} className={className}>
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {buttonText}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </button>
  );
}
