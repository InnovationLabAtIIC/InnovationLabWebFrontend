'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import Typography from "./Typography";

export interface MagneticButtonProps {
  /** Button content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Button variant for styling */
  variant?: 'dark' | 'light' | 'outline' | 'gradient';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * MagneticButton Component
 * 
 * An interactive button that follows the mouse cursor when hovered,
 * creating a magnetic effect with smooth spring animations.
 * 
 * @component
 * @example
 * // Basic usage
 * <MagneticButton>Hover me</MagneticButton>
 * 
 * @example
 * // With custom styling and click handler
 * <MagneticButton 
 *   variant="gradient"
 *   size="lg"
 *   onClick={handleClick}
 *   className="shadow-lg"
 * >
 *   Click me
 * </MagneticButton>
 * 
 * @param {MagneticButtonProps} props - Component props
 * @returns {JSX.Element} MagneticButton component
 * @author Manjeyy Gautam
 */
function MagnetButton({
    children = "Button",
    className = "",
    onClick,
    variant = 'dark',
    size = 'md'
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 500 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const rotateX = useTransform(y, [-5, 5], [10, -10]);
    const rotateY = useTransform(x, [-5, 5], [-10, 10]);

    const handleMouseMove = (e: MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.x + rect.width / 2;
            const centerY = rect.y + rect.height / 2;

            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const variantClasses = {
        dark: 'bg-black text-white hover:bg-gray-800',
        light: 'bg-white text-black hover:bg-gray-100 border border-gray-200',
        outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
        gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
    };

    const sizeClasses = {
        sm: 'px-6 py-3 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg'
    };    return (
        <motion.button
            ref={ref}
            className={[
                sizeClasses[size],
                variantClasses[variant],
                'rounded-full',
                'transition-colors duration-200',
                'font-medium',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-2',
                'focus:ring-blue-500',
                className
            ].filter(Boolean).join(' ')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                x,
                y,
                rotateX,
                rotateY,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >            <span className="text-inherit font-inherit">
                {children}
            </span>
        </motion.button>
    );
}

/**
 * MagneticButton Wrapper Component
 * 
 * Provides a centered container for the MagneticButton component.
 */
export default function MagneticButton({ 
    children, 
    className = "",
    onClick,
    variant = 'dark',
    size = 'md'
}: MagneticButtonProps) {
    return (
        <div className="flex items-center justify-center">
            <MagnetButton 
                variant={variant}
                size={size}
                onClick={onClick}
                className={className}
            >
                {children}
            </MagnetButton>
        </div>
    );
}
