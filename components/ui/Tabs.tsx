'use client';

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  variant: 'default' | 'pills' | 'underline' | 'bordered';
  size: 'sm' | 'md' | 'lg';
}

const TabsContext = createContext<TabsContextType | null>(null);

export interface TabsProps {
  /** Default active tab ID */
  defaultTab?: string;
  /** Callback fired when active tab changes */
  onChange?: (tabId: string) => void;
  /** Variant style of the tabs */
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  /** Size of the tabs */
  size?: 'sm' | 'md' | 'lg';
  /** Custom className for styling */
  className?: string;
  /** Children tab components */
  children: React.ReactNode;
  /** Whether tabs should be full width */
  fullWidth?: boolean;
}

export interface TabListProps {
  /** Custom className for styling */
  className?: string;
  /** Children tab components */
  children: React.ReactNode;
}

export interface TabProps {
  /** Unique identifier for the tab */
  id: string;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Custom className for styling */
  className?: string;
  /** Children content (tab label) */
  children: React.ReactNode;
  /** Icon to display in the tab */
  icon?: React.ReactNode;
}

export interface TabPanelsProps {
  /** Custom className for styling */
  className?: string;
  /** Children tab panel components */
  children: React.ReactNode;
}

export interface TabPanelProps {
  /** Tab ID this panel corresponds to */
  tabId: string;
  /** Custom className for styling */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  defaultTab = '',
  onChange,
  variant = 'default',
  size = 'md',
  className = '',
  children,
  fullWidth = false,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange, variant, size }}>
      <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabList: React.FC<TabListProps> = ({ className = '', children }) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabList must be used within a Tabs component');
  }

  const { variant } = context;

  const variantClasses = {
    default: 'border-b border-gray-200 dark:border-gray-700',
    pills: 'bg-gray-100 dark:bg-gray-800 p-1 rounded-lg',
    underline: 'border-b border-gray-200 dark:border-gray-700',
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50',
  };

  return (
    <div className={`flex ${variantClasses[variant]} ${className}`} role="tablist">
      {children}
    </div>
  );
};

const Tab: React.FC<TabProps> = ({
  id,
  disabled = false,
  className = '',
  children,
  icon,
}) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('Tab must be used within a Tabs component');
  }

  const { activeTab, setActiveTab, variant, size } = context;
  const isActive = activeTab === id;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(id);
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const variantClasses = {
    default: `
      ${isActive 
        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' 
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
      }
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      transition-all duration-200
    `,
    pills: `
      rounded-md ${isActive 
        ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
      }
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      transition-all duration-200
    `,
    underline: `
      relative ${isActive 
        ? 'text-blue-600 dark:text-blue-400' 
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
      }
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      transition-all duration-200
    `,
    bordered: `
      border-r border-gray-200 dark:border-gray-700 last:border-r-0
      ${isActive 
        ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400' 
        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      transition-all duration-200
    `,
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        flex items-center space-x-2
        font-medium
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      
      {variant === 'underline' && isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
          layoutId="activeTabIndicator"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

const TabPanels: React.FC<TabPanelsProps> = ({ className = '', children }) => {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({
  tabId,
  className = '',
  children,
}) => {
  const context = useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabPanel must be used within a Tabs component');
  }

  const { activeTab } = context;
  const isActive = activeTab === tabId;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={tabId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={className}
          role="tabpanel"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tabs;
export { TabList, Tab, TabPanels, TabPanel };
