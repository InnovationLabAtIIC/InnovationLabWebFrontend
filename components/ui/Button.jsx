'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Typography from './Typography';

/**
 * Simple button component with different variants and states
 * 
 * @param {Object} props - The component props
 * @param {string} props.variant - Button variant: 'primary', 'outline', 'text', 'secondary'
 * @param {string} props.size - Button size: 'small', 'medium', 'large'
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional classes
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element} The Button component
 */
const Button = ({ 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children, 
  className = '',
  onClick = () => {},
  ...props 
}) => {
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    text: 'text-blue-600 hover:bg-blue-50'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3'
  };
  
  const classes = [
    'rounded-md transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.medium,
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {typeof children === 'string' ? (
        <Typography 
          variant="button" 
          color={variant === 'primary' ? 'white' : undefined}
          className="flex items-center justify-center"
        >
          {children}
        </Typography>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
