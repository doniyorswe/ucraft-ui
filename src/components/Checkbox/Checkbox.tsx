import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  wrapperProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      onCheckedChange,
      label,
      wrapperProps,
      checked: controlledChecked,
      defaultChecked = false,
      size = 'md',
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
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          className='h-0 w-0 overflow-hidden'
          ref={ref}
          {...props}
        />
        <span
          className={twMerge(
            'relative inline-flex items-center justify-center rounded-sm border transition-all duration-200 ease-in-out',
            sizes[size],
            checked
              ? 'border-primary bg-primary'
              : 'border-gray-300 bg-white hover:border-gray-400'
          )}
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
      </label>
    );
  }
);
