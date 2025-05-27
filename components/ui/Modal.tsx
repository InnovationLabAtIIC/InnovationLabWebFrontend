'use client'

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Typography from './Typography';
import Button from './Button';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Whether clicking outside closes modal */
  closeOnOverlayClick?: boolean;
  /** Whether pressing escape closes modal */
  closeOnEscape?: boolean;
  /** Additional CSS classes for modal content */
  className?: string;
}

/**
 * Modal Component
 * 
 * A flexible modal dialog component with overlay, animations, and
 * accessibility features built-in. Supports multiple sizes and
 * customizable behavior.
 * 
 * @component
 * @example
 * // Basic modal
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose}
 *   title="Confirm Action"
 * >
 *   <Typography variant="body1">
 *     Are you sure you want to continue?
 *   </Typography>
 * </Modal>
 * 
 * @example
 * // Large modal with custom content
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose}
 *   size="lg"
 *   closeOnOverlayClick={false}
 * >
 *   <CustomModalContent />
 * </Modal>
 * 
 * @example
 * // Full screen modal
 * <Modal 
 *   isOpen={isOpen} 
 *   onClose={handleClose}
 *   size="full"
 *   title="Full Screen View"
 * >
 *   <LargeContentComponent />
 * </Modal>
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-none w-full h-full m-0'
  };

  const modalClasses = [
    'relative bg-white dark:bg-gray-800 rounded-lg shadow-xl',
    'max-h-[90vh] overflow-hidden',
    size === 'full' ? 'w-full h-full rounded-none' : sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const CloseIcon = () => (
    <svg 
      className="h-6 w-6" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  );

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={modalClasses}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                {title && (
                  <Typography 
                    id="modal-title"
                    variant="h4" 
                    weight="semibold"
                    className="text-gray-900 dark:text-white"
                  >
                    {title}
                  </Typography>
                )}
                
                {showCloseButton && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                    aria-label="Close modal"
                  >
                    <CloseIcon />
                  </Button>
                )}
              </div>
            )}

            {/* Content */}
            <div className={`${size === 'full' ? 'flex-1 overflow-auto' : 'max-h-[calc(90vh-120px)] overflow-auto'} p-6`}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

/**
 * ModalHeader Component
 * 
 * Header section for modal content with consistent styling.
 */
export const ModalHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

/**
 * ModalBody Component
 * 
 * Main content area for modal.
 */
export const ModalBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

/**
 * ModalFooter Component
 * 
 * Footer section for modal with actions.
 */
export const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3 ${className}`}>
    {children}
  </div>
);

export default Modal;
