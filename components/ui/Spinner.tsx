'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SpinnerProps {
  /** Size of the spinner */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Color variant of the spinner */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'white';
  /** Type of spinner animation */
  type?: 'spin' | 'pulse' | 'dots' | 'bars' | 'ring';
  /** Custom className for styling */
  className?: string;
  /** Label text to display below spinner */
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  type = 'spin',
  className = '',
  label,
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const variantClasses = {
    primary: 'text-blue-600 border-blue-600',
    secondary: 'text-gray-600 border-gray-600',
    success: 'text-green-600 border-green-600',
    warning: 'text-yellow-600 border-yellow-600',
    error: 'text-red-600 border-red-600',
    info: 'text-cyan-600 border-cyan-600',
    white: 'text-white border-white',
  };

  const dotSizes = {
    xs: 'w-1 h-1',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  const renderSpinner = () => {
    switch (type) {
      case 'spin':
        return (
          <motion.div
            className={`
              ${sizeClasses[size]} 
              border-2 border-gray-300 dark:border-gray-600 
              border-t-current rounded-full
              ${variantClasses[variant]}
            `}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );

      case 'pulse':
        return (
          <motion.div
            className={`
              ${sizeClasses[size]} 
              rounded-full bg-current
              ${variantClasses[variant]}
            `}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`
                  ${dotSizes[size]} 
                  rounded-full bg-current
                  ${variantClasses[variant]}
                `}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1 items-end">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`
                  w-1 bg-current rounded-sm
                  ${variantClasses[variant]}
                `}
                style={{
                  height: size === 'xs' ? '8px' : 
                          size === 'sm' ? '12px' : 
                          size === 'md' ? '16px' : 
                          size === 'lg' ? '20px' : '24px'
                }}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        );

      case 'ring':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className={`
                absolute inset-0 
                border-2 border-transparent 
                border-t-current border-r-current 
                rounded-full
                ${variantClasses[variant]}
              `}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className={`
                absolute inset-1 
                border-2 border-transparent 
                border-b-current border-l-current 
                rounded-full
                ${variantClasses[variant]}
              `}
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const labelSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {renderSpinner()}
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`
            mt-2 ${labelSizes[size]} 
            text-gray-600 dark:text-gray-400 
            font-medium
          `}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
};

export default Spinner;
