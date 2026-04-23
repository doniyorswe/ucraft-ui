import { forwardRef } from 'react';
import { twMerge, type ClassNameValue } from 'tailwind-merge';

/**
 * Input component props interface
 * @interface InputProps
 * @extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>
 */
export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /**
   * Input size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Input component with customizable sizes and styling
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" size="md" />
 *
 * <Input
 *   type="email"
 *   size="lg"
 *   className="custom-class"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', ...props }, ref) => {
    const sizes = {
      sm: 'h-7 px-3 text-sm rounded',
      md: 'h-8 px-4 text-base rounded-md',
      lg: 'h-9 px-6 text-lg rounded-lg',
    };

    const baseClasses: ClassNameValue =
      'w-full rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(baseClasses, sizes[size], props.className)}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
