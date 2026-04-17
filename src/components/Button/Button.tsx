import React from 'react';
import { twMerge } from 'tailwind-merge';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        'bg-primary text-primary-foreground hover:opacity-90 active:opacity-80 disabled:opacity-50',
      secondary:
        'bg-secondary text-secondary-foreground hover:opacity-80 disabled:opacity-50',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50',
      danger:
        'bg-destructive text-destructive-foreground hover:opacity-90 active:opacity-80 disabled:opacity-50',
    };

    const sizes = {
      sm: 'h-7 px-3 text-sm rounded',
      md: 'h-8 px-4 text-base rounded-md',
      lg: 'h-9 px-6 text-lg rounded-lg',
    };

    const baseClasses =
      'inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed';

    return (
      <button
        ref={ref}
        className={twMerge(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
        disabled={loading || disabled}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
