'use client'

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Typography from './Typography';

// Type definitions
export type ButtonVariant = 
  | 'primary' | 'secondary' | 'outline' | 'ghost' 
  | 'success' | 'warning' | 'error' | 'info';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'size'> {
  /** Button visual variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Icon to display before text */
  startIcon?: React.ReactNode;
  /** Icon to display after text */
  endIcon?: React.ReactNode;
}

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Includes hover animations and loading states.
 * 
 * @component
 * @example
 * // Basic usage
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * @example
 * // With loading state
 * <Button variant="primary" loading disabled>
 *   Submitting...
 * </Button>
 * 
 * @example
 * // With icons
 * <Button 
 *   variant="outline" 
 *   size="lg"
 *   startIcon={<PlusIcon />}
 *   endIcon={<ArrowIcon />}
 * >
 *   Add Item
 * </Button>
 * 
 * @example
 * // Full width button
 * <Button variant="success" fullWidth>
 *   Full Width Button
 * </Button>
 */
const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  ...props 
}) => {
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white border-transparent',
    secondary: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-500 text-gray-800 border-transparent',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 bg-transparent',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 bg-transparent border-transparent',
    success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white border-transparent',
    warning: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-white border-transparent',
    error: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white border-transparent',
    info: 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500 text-white border-transparent'
  };
  
  const sizeClasses: Record<ButtonSize, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };
  
  const baseClasses = [
    'inline-flex items-center justify-center',
    'rounded-lg font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-opacity-50',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    'border'
  ];

  const classes = [
    ...baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : '',
    className
  ].filter(Boolean).join(' ');

  const isDisabled = disabled || loading;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <motion.button
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {!loading && startIcon && <span className="mr-2">{startIcon}</span>}
      
      <span className="flex items-center">
        {typeof children === 'string' ? (
          <Typography 
            variant="button" 
            color={
              variant === 'primary' || 
              variant === 'success' || 
              variant === 'warning' || 
              variant === 'error' || 
              variant === 'info' 
                ? 'white' 
                : undefined
            }
            className="!m-0 !text-inherit !font-inherit !tracking-inherit !uppercase-none lowercase"
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </span>
      
      {!loading && endIcon && <span className="ml-2">{endIcon}</span>}
    </motion.button>
  );
};

export default Button;
