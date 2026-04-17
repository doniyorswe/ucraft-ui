import React from 'react';
import { twMerge } from 'tailwind-merge';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading,
      disabled,
      leftIcon,
      rightIcon,
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
      icon: 'h-8 w-8 rounded-md',
    };

    const baseClasses =
      'inline-flex items-center justify-center transition-colors disabled:cursor-default [&_svg]:size-4';

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
      >
        {loading && (
          <span className='mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-loader-circle h-4 w-4 animate-spin'
            >
              <path d='M21 12a9 9 0 1 1-6.219-8.56' />
            </svg>
          </span>
        )}
        {leftIcon && <span className='mr-1.5'>{leftIcon}</span>}
        {props.children}
        {rightIcon && <span className='ml-1.5'>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
