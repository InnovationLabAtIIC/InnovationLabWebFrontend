// Component Library Type Definitions
// This file contains all shared types and interfaces for the IVLAB UI component library

import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';

// === COMMON TYPES ===

/** Standard color variants used across components */
export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'accent'
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info'
  | 'white' 
  | 'muted';

/** Standard size variants used across components */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Standard position variants for floating elements */
export type PositionVariant = 'top' | 'bottom' | 'left' | 'right';

/** Base props that most components share */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** React children */
  children?: ReactNode;
  /** Unique identifier */
  id?: string;
}

// === BUTTON TYPES ===

export type ButtonVariant = 
  | 'primary' | 'secondary' | 'outline' | 'ghost' 
  | 'success' | 'warning' | 'error' | 'info';

export type ButtonSize = SizeVariant;

// === CARD TYPES ===

export type CardVariant = 
  | 'default' | 'bordered' | 'shadow' | 'floating' | 'gradient';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

// === INPUT TYPES ===

export type InputVariant = 'default' | 'filled' | 'outlined' | 'underlined';

export type InputSize = 'sm' | 'md' | 'lg';

// === BADGE TYPES ===

export type BadgeVariant = ColorVariant | 'default' | 'outline';

export type BadgeSize = 'sm' | 'md' | 'lg';

// === MODAL TYPES ===

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// === TOOLTIP TYPES ===

export type TooltipPosition = PositionVariant;

// === MAGNETIC BUTTON TYPES ===

export type MagneticButtonVariant = 'dark' | 'light' | 'outline' | 'gradient';

export type MagneticButtonSize = 'sm' | 'md' | 'lg';

// === ANIMATION TYPES ===

/** Standard animation variants for framer-motion */
export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

/** Common transition configurations */
export interface TransitionConfig {
  duration?: number;
  ease?: string | number[];
  delay?: number;
}

// === EVENT HANDLER TYPES ===

export type ClickHandler = () => void;
export type MouseEventHandler = (event: React.MouseEvent) => void;
export type FocusEventHandler = (event: React.FocusEvent) => void;
export type ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent) => void;

// === UTILITY TYPES ===

/** Extract component props type from a React component */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/** Make certain properties required */
export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** Make certain properties optional */
export type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// === THEME TYPES ===

/** Color palette configuration */
export interface ColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  white: string;
  muted: string;
}

/** Typography scale configuration */
export interface TypographyScale {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  button: string;
  caption: string;
  overline: string;
}

/** Spacing scale configuration */
export interface SpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

/** Component theme configuration */
export interface ComponentTheme {
  colors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// === RESPONSIVE TYPES ===

/** Breakpoint configuration */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** Responsive value type */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

// === ACCESSIBILITY TYPES ===

/** ARIA role attributes */
export type AriaRole = 
  | 'button' | 'dialog' | 'tooltip' | 'tab' | 'tabpanel'
  | 'menu' | 'menuitem' | 'navigation' | 'banner' | 'main'
  | 'article' | 'section' | 'aside' | 'header' | 'footer';

/** Common ARIA attributes */
export interface AriaAttributes {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-disabled'?: boolean;
  'aria-pressed'?: boolean;
  'aria-selected'?: boolean;
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
  role?: AriaRole;
}

// === FORM TYPES ===

/** Form field validation state */
export interface ValidationState {
  isValid: boolean;
  error?: string;
  warning?: string;
  success?: string;
}

/** Form field configuration */
export interface FormFieldConfig {
  label?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  validation?: ValidationState;
}

// === LAYOUT TYPES ===

/** Flex alignment options */
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Flex justify options */
export type FlexJustify = 
  | 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

/** Grid column span options */
export type GridSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Default export for convenience
export default ComponentTheme;
