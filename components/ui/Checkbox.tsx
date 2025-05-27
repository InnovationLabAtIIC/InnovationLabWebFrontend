'use client'

import React from 'react';
import { motion } from 'framer-motion';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Callback when checkbox state changes */
  onChange?: (checked: boolean) => void;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Checkbox size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Checkbox color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Label for the checkbox */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Additional CSS classes */
  className?: string;
  /** HTML name attribute */
  name?: string;
  /** HTML value attribute */
  value?: string;
}

/**
 * Checkbox Component
 * 
 * A customizable checkbox component with animations and multiple variants.
 * Supports indeterminate state and various styling options.
 * 
 * @component
 * @example
 * // Basic usage
 * <Checkbox checked={isSelected} onChange={setIsSelected} />
 * 
 * @example
 * // With label and helper text
 * <Checkbox 
 *   checked={acceptTerms}
 *   onChange={setAcceptTerms}
 *   label="I accept the terms and conditions"
 *   helperText="Please read our terms before proceeding"
 *   variant="success"
 * />
 * 
 * @example
 * // Indeterminate state
 * <Checkbox 
 *   indeterminate={true}
 *   label="Select all items"
 * />
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  indeterminate = false,
  size = 'md',
  disabled = false,
  variant = 'primary',
  label,
  helperText,
  className = '',
  name,
  value
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const variantClasses = {
    primary: 'border-blue-600 bg-blue-600',
    success: 'border-green-600 bg-green-600',
    warning: 'border-yellow-500 bg-yellow-500',
    error: 'border-red-600 bg-red-600'
  };

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const isCheckedOrIndeterminate = checked || indeterminate;

  const checkboxClasses = [
    sizeClasses[size],
    'rounded border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
    isCheckedOrIndeterminate 
      ? variantClasses[variant] 
      : 'border-gray-300 bg-white hover:border-gray-400',
    disabled 
      ? 'opacity-50 cursor-not-allowed' 
      : 'cursor-pointer focus:ring-blue-500',
    'flex items-center justify-center'
  ].join(' ');

  const CheckIcon = () => (
    <motion.svg
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </motion.svg>
  );

  const IndeterminateIcon = () => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="w-2 h-0.5 bg-white rounded"
    />
  );

  const CheckboxElement = (
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        className="sr-only"
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
      />
      <div className={checkboxClasses} onClick={handleChange}>
        {indeterminate ? (
          <IndeterminateIcon />
        ) : checked ? (
          <CheckIcon />
        ) : null}
      </div>
    </div>
  );

  if (label || helperText) {
    return (
      <div className={`flex items-start space-x-3 ${className}`}>
        <div className="flex-shrink-0 pt-0.5">
          {CheckboxElement}
        </div>
        <div className="flex-1 min-w-0">
          {label && (
            <label 
              className={`text-sm font-medium ${
                disabled ? 'text-gray-400' : 'text-gray-700'
              } cursor-pointer`}
              onClick={handleChange}
            >
              {label}
            </label>
          )}
          {helperText && (
            <p className="mt-1 text-xs text-gray-500">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }

  return <div className={className}>{CheckboxElement}</div>;
};

export default Checkbox;
