import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";


