'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Typography from './Typography';

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the badge should be rounded */
  rounded?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether the badge is removable */
  removable?: boolean;
  /** Remove handler */
  onRemove?: () => void;
}

/**
 * Badge Component
 * 
 * A small status descriptor for UI elements. Perfect for showing counts,
 * status indicators, or labels.
 * 
 * @component
 * @example
 * // Basic badge
 * <Badge variant="primary">New</Badge>
 * 
 * @example
 * // Status badge
 * <Badge variant="success" size="sm">Active</Badge>
 * 
 * @example
 * // Removable badge
 * <Badge 
 *   variant="secondary" 
 *   removable 
 *   onRemove={handleRemove}
 * >
 *   Tag
 * </Badge>
 * 
 * @example
 * // Count badge
 * <Badge variant="error" rounded>3</Badge>
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
  onClick,
  removable = false,
  onRemove
}) => {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
    outline: 'bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-base'
  };

  const baseClasses = [
    'inline-flex items-center font-medium',
    'transition-all duration-200',
    rounded ? 'rounded-full' : 'rounded-md',
    variantClasses[variant],
    sizeClasses[size],
    onClick ? 'cursor-pointer hover:opacity-80' : '',
    className
  ].filter(Boolean).join(' ');

  const RemoveIcon = () => (
    <svg 
      className="ml-1 h-3 w-3 cursor-pointer hover:bg-black/10 rounded-full" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      onClick={(e) => {
        e.stopPropagation();
        onRemove?.();
      }}
    >
      <path 
        fillRule="evenodd" 
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  return (
    <motion.span
      className={baseClasses}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <span>{children}</span>
      {removable && <RemoveIcon />}
    </motion.span>
  );
};

export default Badge;