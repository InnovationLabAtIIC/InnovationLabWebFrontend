'use client'

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typography from './Typography';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Input variant */
  variant?: 'default' | 'filled' | 'outlined' | 'underlined';
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Icon to display at the start of input */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of input */
  endIcon?: React.ReactNode;
  /** Whether the input is full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Input Component
 * 
 * A flexible input component with multiple variants, validation states,
 * and accessibility features built-in.
 * 
 * @component
 * @example
 * // Basic input
 * <Input 
 *   label="Email"
 *   placeholder="Enter your email"
 *   type="email"
 * />
 * 
 * @example
 * // Input with validation
 * <Input 
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 *   variant="outlined"
 * />
 * 
 * @example
 * // Input with icons
 * <Input 
 *   label="Search"
 *   placeholder="Search..."
 *   startIcon={<SearchIcon />}
 *   endIcon={<ClearIcon />}
 *   variant="filled"
 * />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  variant = 'default',
  size = 'md',
  error,
  helperText,
  startIcon,
  endIcon,
  fullWidth = false,
  className = '',
  id,
  disabled = false,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const variantClasses = {
    default: 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500',
    filled: 'border-0 bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500',
    outlined: 'border-2 border-gray-300 dark:border-gray-600 bg-transparent focus:border-blue-500 focus:ring-0',
    underlined: 'border-0 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent rounded-none focus:border-blue-500 focus:ring-0'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };

  const baseClasses = [
    'w-full',
    'rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus:ring-1',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder:text-gray-400 dark:placeholder:text-gray-500',
    variantClasses[variant],
    sizeClasses[size],
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    startIcon ? 'pl-10' : '',
    endIcon ? 'pr-10' : '',
    className
  ].filter(Boolean).join(' ');

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-2`}>
      {label && (
        <motion.label
          htmlFor={inputId}
          className={`
            block text-sm font-medium transition-colors duration-200
            ${error 
              ? 'text-red-600 dark:text-red-400' 
              : isFocused 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300'
            }
          `}
          animate={{
            color: error 
              ? '#DC2626' 
              : isFocused 
                ? '#2563EB' 
                : '#374151'
          }}
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={baseClasses}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        
        {endIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
            {endIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Typography 
            variant="caption" 
            color={error ? 'error' : 'tertiary'}
            className="mt-1"
          >
            {error || helperText}
          </Typography>
        </motion.div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
