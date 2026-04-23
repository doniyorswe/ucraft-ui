import React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Button component props interface
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'icon';

  /**
   * Show loading state with spinner
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display on the left side of button text
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of button text
   */
  rightIcon?: React.ReactNode;

  /**
   * Render as different HTML element or component
   * @default 'button'
   */
  as?: React.ElementType;
}

/**
 * Button component with multiple variants, sizes, and loading states
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" size="sm" leftIcon={<Icon />}>With icon</Button>
 *
 * <Button variant="danger" loading>Loading...</Button>
 * ```
 */
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
      as: Component = 'button',
      type = 'button',
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

    const isButton = Component === 'button';
    const isDisabled = loading || disabled;

    const sizes = {
      sm: 'h-7 px-3 text-sm rounded',
      md: 'h-8 px-4 text-base rounded-md',
      lg: 'h-9 px-6 text-lg rounded-lg',
      icon: 'h-8 w-8 rounded-md',
    };

    const baseClasses =
      'inline-flex items-center justify-center gap-1.5 transition-colors disabled:cursor-default [&_svg]:size-4';

    return (
      <Component
        ref={ref}
        className={twMerge(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
        {...(isButton ? { disabled: isDisabled } : {})}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          props.onClick?.(e);
        }}
      >
        {loading && (
          <span>
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
        {leftIcon && !loading && <span className='mt-0.5'>{leftIcon}</span>}
        {loading && size === 'icon' ? null : props.children}
        {rightIcon && !loading && <span className='mt-0.5'>{rightIcon}</span>}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export { Button };
