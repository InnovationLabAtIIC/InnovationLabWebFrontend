"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Type definitions
export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'button' | 'caption' | 'overline';

export type TypographyColor = 
  | 'primary' | 'secondary' | 'tertiary' | 'accent'
  | 'success' | 'warning' | 'error' | 'info'
  | 'white' | 'muted';

export type TypographyWeight = 
  | 'thin' | 'extralight' | 'light' | 'normal'
  | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  /** Typography variant that determines the HTML element and base styling */
  variant?: TypographyVariant;
  /** Content to render */
  children: React.ReactNode;
  /** Text color */
  color?: TypographyColor;
  /** Font weight */
  weight?: TypographyWeight;
  /** Text alignment */
  align?: TypographyAlign;
  /** Whether to apply enter animation */
  animated?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional HTML attributes */
  [key: string]: any;
}

/**
 * Typography Component
 * 
 * A flexible typography component that provides consistent text styling across the application.
 * Supports multiple variants, colors, weights, alignments, and animations.
 * 
 * @component
 * @example
 * // Basic usage
 * <Typography variant="h1">Main Heading</Typography>
 * 
 * @example
 * // With custom styling
 * <Typography 
 *   variant="body1" 
 *   color="secondary" 
 *   weight="medium"
 *   align="center"
 *   animated
 * >
 *   Body text with animation
 * </Typography>
 * 
 * @example
 * // With custom classes
 * <Typography variant="caption" className="text-blue-500 underline">
 *   Custom styled caption
 * </Typography>
 */
const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body1', 
  children, 
  color = 'primary',
  weight = 'normal',
  align = 'left',
  animated = false,
  className = '',
  ...props 
}) => {

  const variantClassMap: Record<TypographyVariant, string> = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
    h5: 'text-lg md:text-xl lg:text-2xl font-medium leading-normal',
    h6: 'text-base md:text-lg lg:text-xl font-medium leading-normal',
    subtitle1: 'text-lg font-medium leading-relaxed',
    subtitle2: 'text-base font-medium leading-relaxed',
    body1: 'text-base leading-relaxed',
    body2: 'text-sm leading-relaxed',
    button: 'text-base font-medium uppercase tracking-wide',
    caption: 'text-xs leading-normal',
    overline: 'text-xs uppercase tracking-wider font-medium'
  };

  const colorClassMap: Record<TypographyColor, string> = {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-300',
    tertiary: 'text-gray-500 dark:text-gray-400',
    accent: 'text-blue-600 dark:text-blue-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
    info: 'text-cyan-600 dark:text-cyan-400',
    white: 'text-white',
    muted: 'text-gray-400 dark:text-gray-500'
  };

  const weightClassMap: Record<TypographyWeight, string> = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const alignClassMap: Record<TypographyAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  // Combine all classes
  const classes = [
    variantClassMap[variant] || variantClassMap.body1,
    colorClassMap[color] || colorClassMap.primary,
    // Don't override font weight for headings unless explicitly specified
    variant.startsWith('h') && weight === 'normal' ? '' : weightClassMap[weight] || '',
    alignClassMap[align] || alignClassMap.left,
    className
  ].filter(Boolean).join(' ');
  const getElement = () => {
    switch (variant) {
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'h5': return 'h5';
      case 'h6': return 'h6';
      case 'subtitle1':
      case 'subtitle2': return 'h6';
      case 'button': return 'span';
      case 'caption':
      case 'overline': return 'span';
      default: return 'p';
    }
  };

  const textAnimation = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };
  const Element = getElement() as keyof React.JSX.IntrinsicElements;

  if (animated) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="overflow-hidden"
      >
        <Element className={classes} {...props}>
          {children}
        </Element>
      </motion.div>
    );
  }

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
};

export default Typography;
