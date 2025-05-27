'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressProps {
  /** Current progress value (0-100) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Size variant of the progress bar */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Color variant of the progress bar */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Whether to show the percentage text */
  showLabel?: boolean;
  /** Custom label text (overrides percentage) */
  label?: string;
  /** Whether the progress bar is indeterminate (loading animation) */
  indeterminate?: boolean;
  /** Custom className for styling */
  className?: string;
  /** Whether to show a striped pattern */
  striped?: boolean;
  /** Whether to animate the stripes */
  animated?: boolean;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  label,
  indeterminate = false,
  className = '',
  striped = false,
  animated = false,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const variantClasses = {
    primary: 'bg-blue-600 dark:bg-blue-500',
    secondary: 'bg-gray-600 dark:bg-gray-500',
    success: 'bg-green-600 dark:bg-green-500',
    warning: 'bg-yellow-600 dark:bg-yellow-500',
    error: 'bg-red-600 dark:bg-red-500',
    info: 'bg-cyan-600 dark:bg-cyan-500',
  };

  const labelSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className={`${labelSizeClasses[size]} font-medium text-gray-700 dark:text-gray-300`}>
            {label || `${Math.round(percentage)}%`}
          </span>
          {!label && (
            <span className={`${labelSizeClasses[size]} text-gray-500 dark:text-gray-400`}>
              {value}/{max}
            </span>
          )}
        </div>
      )}
      
      <div 
        className={`
          w-full ${sizeClasses[size]} 
          bg-gray-200 dark:bg-gray-700 
          rounded-full overflow-hidden
          relative
        `}
      >
        {indeterminate ? (
          <motion.div
            className={`
              absolute inset-y-0 w-1/3 ${variantClasses[variant]} rounded-full
              ${striped ? 'bg-stripes' : ''}
            `}
            animate={{
              x: ['-100%', '300%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ) : (
          <motion.div
            className={`
              ${sizeClasses[size]} ${variantClasses[variant]} rounded-full
              relative overflow-hidden
              ${striped ? 'bg-stripes' : ''}
              ${animated && striped ? 'animate-stripes' : ''}
            `}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ 
              duration: 0.5,
              ease: 'easeOut'
            }}
          >            {striped && (
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 8px,
                    rgba(255,255,255,0.2) 8px,
                    rgba(255,255,255,0.2) 16px
                  )`
                }}
              />
            )}
          </motion.div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 0;
          }
        }
        
        .animate-stripes {
          animation: stripes 1s linear infinite;
        }
        
        .bg-stripes {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.2) 8px,
            rgba(255,255,255,0.2) 16px
          );
        }
      `}</style>
    </div>
  );
};

export default Progress;
