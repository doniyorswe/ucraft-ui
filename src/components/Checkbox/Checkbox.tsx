import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Checkbox component props interface
 * @interface CheckboxProps
 * @extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>
 */
export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /**
   * Callback function when checkbox state changes
   * @param checked - Current checked state
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Label text to display next to the checkbox
   */
  label?: string;

  /**
   * Additional props for the wrapper label element
   */
  wrapperProps?: React.LabelHTMLAttributes<HTMLLabelElement>;

  /**
   * Checkbox size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Checkbox component with customizable sizes, labels, and state management
 *
 * Supports both controlled and uncontrolled usage patterns with smooth animations.
 *
 * @example
 * ```tsx
 * // Uncontrolled checkbox
 * <Checkbox label="Accept terms" onCheckedChange={(checked) => console.log(checked)} />
 *
 * // Controlled checkbox
 * const [checked, setChecked] = useState(false);
 * <Checkbox
 *   label="Accept terms"
 *   checked={checked}
 *   onCheckedChange={setChecked}
 *   size="lg"
 * />
 *
 * // Default checked
 * <Checkbox label="Subscribe" defaultChecked={true} />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      onCheckedChange,
      label,
      wrapperProps,
      checked: controlledChecked,
      defaultChecked = false,
      size = 'md',
      className,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const sizes = {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
      props.onChange?.(e);
    };

    return (
      <label
        {...wrapperProps}
        className={twMerge(
          'flex cursor-pointer items-center gap-2',
          wrapperProps?.className
        )}
      >
        <span
          className={twMerge(
            'relative inline-flex items-center justify-center rounded-sm border transition-all duration-200 ease-in-out',
            sizes[size],
            checked
              ? 'border-primary bg-primary'
              : 'border-gray-300 bg-white hover:border-gray-400',
            className
          )}
          role='checkbox'
          aria-checked={checked}
          aria-disabled={props.disabled}
          aria-label={label}
        >
          <span
            className={twMerge(
              'absolute inset-0 flex items-center justify-center transition-all duration-200 ease-in-out',
              checked ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            )}
          >
            <svg
              className='h-3 w-3 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </span>
        </span>
        {label && <span className='select-none'>{label}</span>}

        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          ref={ref}
          {...props}
          className='h-0 w-0 overflow-hidden'
          aria-label={label}
          title={label}
        />
      </label>
    );
  }
);
