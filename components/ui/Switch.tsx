'use client'

import React from 'react';
import { motion } from 'framer-motion';

export interface SwitchProps {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Callback when switch state changes */
  onChange?: (checked: boolean) => void;
  /** Switch size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Switch color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Label for the switch */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Switch Component
 * 
 * A toggle switch component with smooth animations and multiple variants.
 * Perfect for settings and boolean inputs.
 * 
 * @component
 * @example
 * // Basic usage
 * <Switch checked={isEnabled} onChange={setIsEnabled} />
 * 
 * @example
 * // With label and custom variant
 * <Switch 
 *   checked={notifications}
 *   onChange={setNotifications}
 *   label="Enable notifications"
 *   variant="success"
 *   size="lg"
 * />
 */
const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  size = 'md',
  disabled = false,
  variant = 'primary',
  label,
  className = ''
}) => {
  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4'
    },
    md: {
      track: 'w-10 h-5',
      thumb: 'w-4 h-4',
      translate: 'translate-x-5'
    },
    lg: {
      track: 'w-12 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-6'
    }
  };

  const variantClasses = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-red-600'
  };

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const trackClasses = [
    sizeClasses[size].track,
    'relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
    checked ? variantClasses[variant] : 'bg-gray-300',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    disabled ? '' : 'focus:ring-blue-500'
  ].join(' ');

  const thumbClasses = [
    sizeClasses[size].thumb,
    'inline-block bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out',
    checked ? sizeClasses[size].translate : 'translate-x-0.5'
  ].join(' ');

  const SwitchElement = (
    <button
      type="button"
      className={trackClasses}
      onClick={handleToggle}
      disabled={disabled}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <motion.span
        className={thumbClasses}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
    </button>
  );

  if (label) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {SwitchElement}
        <span className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </span>
      </div>
    );
  }

  return <div className={className}>{SwitchElement}</div>;
};

export default Switch;
