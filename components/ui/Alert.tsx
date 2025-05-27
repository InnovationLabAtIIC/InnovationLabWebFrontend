'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export interface AlertProps {
  /** Type/variant of the alert */
  variant?: 'success' | 'warning' | 'error' | 'info';
  /** Title of the alert */
  title?: string;
  /** Description text */
  description?: string;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Whether to show the icon */
  showIcon?: boolean;
  /** Custom icon to display (overrides default variant icon) */
  icon?: React.ReactNode;
  /** Custom className for styling */
  className?: string;
  /** Callback fired when alert is dismissed */
  onDismiss?: () => void;
  /** Children content */
  children?: React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to use filled background style */
  filled?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  description,
  dismissible = false,
  showIcon = true,
  icon,
  className = '',
  onDismiss,
  children,
  size = 'md',
  filled = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };
  const icons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
  };

  const IconComponent = icons[variant];

  const variantClasses = {
    success: filled 
      ? 'bg-green-100 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
      : 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/10 dark:border-green-800/50 dark:text-green-400',
    warning: filled
      ? 'bg-yellow-100 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300'
      : 'bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900/10 dark:border-yellow-800/50 dark:text-yellow-400',
    error: filled
      ? 'bg-red-100 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
      : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/10 dark:border-red-800/50 dark:text-red-400',
    info: filled
      ? 'bg-blue-100 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300'
      : 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/10 dark:border-blue-800/50 dark:text-blue-400',
  };

  const iconColors = {
    success: 'text-green-500 dark:text-green-400',
    warning: 'text-yellow-500 dark:text-yellow-400',
    error: 'text-red-500 dark:text-red-400',
    info: 'text-blue-500 dark:text-blue-400',
  };

  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-5 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            border rounded-lg
            ${className}
          `}
          role="alert"
        >
          <div className="flex items-start">            {showIcon && (
              <div className="flex-shrink-0">
                {icon ? (
                  React.isValidElement(icon) ? icon : <span>{icon}</span>
                ) : (
                  <IconComponent className={`${iconSizes[size]} ${iconColors[variant]}`} />
                )}
              </div>
            )}

            <div className={`flex-1 ${showIcon ? 'ml-3' : ''}`}>
              {title && (
                <h3 className={`font-semibold mb-1 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
                  {title}
                </h3>
              )}
              
              {description && (
                <div className={`${title ? 'mt-1' : ''} ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'} opacity-90`}>
                  {description}
                </div>
              )}
              
              {children && (
                <div className={`${(title || description) ? 'mt-2' : ''}`}>
                  {children}
                </div>
              )}
            </div>

            {dismissible && (
              <div className="flex-shrink-0 ml-4">
                <motion.button
                  type="button"
                  onClick={handleDismiss}
                  className={`
                    inline-flex rounded-md p-1.5 
                    ${iconColors[variant]}
                    hover:bg-black/5 dark:hover:bg-white/5
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current
                    transition-colors duration-200
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className={iconSizes[size]} />
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
