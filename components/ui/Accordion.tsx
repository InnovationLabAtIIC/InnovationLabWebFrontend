'use client';

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (itemId: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps {
  /** Whether multiple items can be open at once */
  allowMultiple?: boolean;
  /** Default open items (array of item IDs) */
  defaultOpenItems?: string[];
  /** Custom className for styling */
  className?: string;
  /** Children accordion items */
  children: React.ReactNode;
  /** Variant style */
  variant?: 'default' | 'bordered' | 'separated';
}

export interface AccordionItemProps {
  /** Unique identifier for the item */
  id: string;
  /** Header content (title) */
  title: string;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Custom className for styling */
  className?: string;
  /** Children content */
  children: React.ReactNode;
  /** Custom icon (replaces chevron) */
  icon?: React.ReactNode;
}

export interface AccordionHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Custom className for styling */
  className?: string;
}

export interface AccordionContentProps {
  /** Content to display */
  children: React.ReactNode;
  /** Custom className for styling */
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  allowMultiple = false,
  defaultOpenItems = [],
  className = '',
  children,
  variant = 'default',
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  );

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      
      return newSet;
    });
  };

  const variantClasses = {
    default: 'space-y-0',
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden',
    separated: 'space-y-2',
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={`${variantClasses[variant]} ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  disabled = false,
  className = '',
  children,
  icon,
}) => {
  const context = useContext(AccordionContext);
  
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const { openItems, toggleItem } = context;
  const isOpen = openItems.has(id);

  const handleToggle = () => {
    if (!disabled) {
      toggleItem(id);
    }
  };

  return (
    <div className={`${className}`}>
      <motion.button
        type="button"
        onClick={handleToggle}
        className={`
          w-full px-4 py-3 text-left 
          flex items-center justify-between
          border-b border-gray-200 dark:border-gray-700
          transition-colors duration-200
          ${disabled 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 focus:bg-gray-50 dark:focus:bg-gray-800/50'
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
        `}
        whileHover={!disabled ? { backgroundColor: 'rgba(0,0,0,0.02)' } : {}}
        disabled={disabled}
      >
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {title}
        </span>
        
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`font-semibold text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </div>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`text-gray-600 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  );
};

export default Accordion;
export { AccordionItem, AccordionHeader, AccordionContent };
