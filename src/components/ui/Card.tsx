'use client'

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  /** Card content */
  children: React.ReactNode;
  /** Card variant for different styles */
  variant?: 'default' | 'bordered' | 'shadow' | 'floating' | 'gradient';
  /** Card padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the card should be interactive (hover effects) */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card Component
 * 
 * A flexible container component with multiple variants and interactive states.
 * Perfect for displaying content in organized, visually appealing blocks.
 * 
 * @component
 * @example
 * // Basic card
 * <Card>
 *   <Typography variant="h3">Card Title</Typography>
 *   <Typography variant="body1">Card content goes here.</Typography>
 * </Card>
 * 
 * @example
 * // Interactive card with custom styling
 * <Card 
 *   variant="floating"
 *   interactive
 *   padding="lg"
 *   className="max-w-md"
 * >
 *   <CardContent />
 * </Card>
 * 
 * @example
 * // Gradient card
 * <Card variant="gradient" padding="xl">
 *   <Typography variant="h2" color="white">
 *     Featured Content
 *   </Typography>
 * </Card>
 */
const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    bordered: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600',
    shadow: 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700',
    floating: 'bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 shadow-blue-500/10',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };

  const baseClasses = [
    'rounded-lg',
    'transition-all duration-200 ease-in-out',
    variantClasses[variant],
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');

  const motionProps = interactive ? {
    whileHover: { 
      scale: 1.02,
      y: -4,
      transition: { duration: 0.2 }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  } : {};

  return (
    <motion.div
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * CardHeader Component
 * 
 * Header section for cards with consistent spacing and typography.
 */
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

/**
 * CardContent Component
 * 
 * Main content area for cards.
 */
export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

/**
 * CardFooter Component
 * 
 * Footer section for cards with actions or additional information.
 */
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;