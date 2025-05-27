"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
 * 
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'body1'|'body2'|'button'|'caption'|'overline'} props.variant - Typography variant
 * @param {React.ReactNode} props.children - Content to render
 * @param {'primary'|'secondary'|'tertiary'|'accent'|'success'|'warning'|'error'|'info'|'white'|'muted'} props.color - Text color
 * @param {'thin'|'extralight'|'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'|'black'} props.weight - Font weight
 * @param {'left'|'center'|'right'|'justify'} props.align - Text alignment
 * @param {boolean} props.animated - Whether to apply enter animation
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.props - Additional HTML attributes
 * @returns {JSX.Element} Typography component
 */
const Typography = ({ 
  variant = 'body1', 
  children, 
  color = 'primary',
  weight = 'normal',
  align = 'left',
  animated = false,
  className = '',
  ...props 
}) => {

  const variantClassMap = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h5: 'text-lg md:text-xl lg:text-2xl font-medium',
    h6: 'text-base md:text-lg lg:text-xl font-medium',
    subtitle1: 'text-lg font-medium',
    subtitle2: 'text-base font-medium',
    body1: 'text-base',
    body2: 'text-sm',
    button: 'text-base font-medium uppercase text-white font-semibold',
    caption: 'text-xs',
    overline: 'text-xs uppercase tracking-wider'
  };

  const colorClassMap = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    tertiary: 'text-gray-500',
    accent: 'text-blue-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-cyan-600',
    white: 'text-white',
    muted: 'text-gray-400'
  };

  const weightClassMap = {
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

  const alignClassMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  // Combine all classes
  const classes = [
    variantClassMap[variant] || variantClassMap.body1,
    colorClassMap[color] || colorClassMap.primary,
    variant.startsWith('h') ? '' : weightClassMap[weight] || weightClassMap.normal,
    alignClassMap[align] || alignClassMap.left,
    className
  ].join(' ');

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  const Element = getElement();

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