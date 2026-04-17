import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", ...props }, ref) => {
    const sizes = {
      sm: "h-7 px-3 text-sm rounded",
      md: "h-8 px-4 text-base rounded-md",
      lg: "h-9 px-6 text-lg rounded-lg",
    };

    const baseClasses =
      "w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(baseClasses, sizes[size])}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
