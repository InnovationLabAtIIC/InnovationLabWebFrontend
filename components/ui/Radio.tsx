'use client'

import React from 'react';
import { motion } from 'framer-motion';

export interface RadioProps {
  /** Radio value */
  value: string;
  /** Currently selected value */
  selectedValue?: string;
  /** Callback when radio is selected */
  onChange?: (value: string) => void;
  /** Radio name attribute (for grouping) */
  name: string;
  /** Radio size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the radio is disabled */
  disabled?: boolean;
  /** Radio color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Label for the radio */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Additional CSS classes */
  className?: string;
}

export interface RadioGroupProps {
  /** Current selected value */
  value?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Group name */
  name: string;
  /** Radio options */
  options: Array<{
    value: string;
    label: string;
    helperText?: string;
    disabled?: boolean;
  }>;
  /** Radio size */
  size?: 'sm' | 'md' | 'lg';
  /** Radio color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Radio Component
 * 
 * A customizable radio button component with animations and multiple variants.
 * 
 * @component
 * @example
 * // Basic usage
 * <Radio 
 *   value="option1"
 *   selectedValue={selectedOption}
 *   onChange={setSelectedOption}
 *   name="options"
 *   label="Option 1"
 * />
 */
const Radio: React.FC<RadioProps> = ({
  value,
  selectedValue,
  onChange,
  name,
  size = 'md',
  disabled = false,
  variant = 'primary',
  label,
  helperText,
  className = ''
}) => {
  const isSelected = selectedValue === value;

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const variantClasses = {
    primary: 'border-blue-600',
    success: 'border-green-600',
    warning: 'border-yellow-500',
    error: 'border-red-600'
  };

  const dotVariantClasses = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-red-600'
  };

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const radioClasses = [
    sizeClasses[size],
    'rounded-full border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
    isSelected 
      ? variantClasses[variant] 
      : 'border-gray-300 hover:border-gray-400',
    disabled 
      ? 'opacity-50 cursor-not-allowed' 
      : 'cursor-pointer focus:ring-blue-500',
    'flex items-center justify-center bg-white'
  ].join(' ');

  const RadioElement = (
    <div className="relative">
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        className="sr-only"
      />
      <div className={radioClasses} onClick={handleChange}>
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
            className={`w-2 h-2 rounded-full ${dotVariantClasses[variant]}`}
          />
        )}
      </div>
    </div>
  );

  if (label || helperText) {
    return (
      <div className={`flex items-start space-x-3 ${className}`}>
        <div className="flex-shrink-0 pt-0.5">
          {RadioElement}
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

  return <div className={className}>{RadioElement}</div>;
};

/**
 * RadioGroup Component
 * 
 * A container component for managing multiple radio buttons as a group.
 * 
 * @component
 * @example
 * // Basic usage
 * <RadioGroup
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   name="payment-method"
 *   options={[
 *     { value: 'credit', label: 'Credit Card' },
 *     { value: 'debit', label: 'Debit Card' },
 *     { value: 'paypal', label: 'PayPal' }
 *   ]}
 * />
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  name,
  options,
  size = 'md',
  variant = 'primary',
  direction = 'vertical',
  className = ''
}) => {
  const containerClasses = [
    'space-y-3',
    direction === 'horizontal' ? 'flex flex-wrap gap-6' : 'space-y-3',
    className
  ].join(' ');

  return (
    <div className={containerClasses}>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          selectedValue={value}
          onChange={onChange}
          name={name}
          label={option.label}
          helperText={option.helperText}
          disabled={option.disabled}
          size={size}
          variant={variant}
          className={direction === 'horizontal' ? 'space-y-0' : ''}
        />
      ))}
    </div>
  );
};

export default Radio;
