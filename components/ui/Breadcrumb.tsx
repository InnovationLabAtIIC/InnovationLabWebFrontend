'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export interface BreadcrumbItem {
  /** Display text for the breadcrumb item */
  label: string;
  /** URL or path for the breadcrumb item */
  href?: string;
  /** Whether this item is the current page */
  isCurrent?: boolean;
  /** Custom icon for the breadcrumb item */
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Custom className for styling */
  className?: string;
  /** Whether to show home icon for first item */
  showHomeIcon?: boolean;
  /** Maximum number of items to show before collapsing */
  maxItems?: number;
  /** Custom onClick handler for breadcrumb items */
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  size = 'md',
  className = '',
  showHomeIcon = false,
  maxItems,
  onItemClick,
}) => {
  const sizeClasses = {
    sm: 'text-sm py-1',
    md: 'text-base py-2',
    lg: 'text-lg py-3',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  // Handle item collapsing
  const processedItems = React.useMemo(() => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    const firstItem = items[0];
    const lastItems = items.slice(-(maxItems - 2));
    const collapsedCount = items.length - maxItems + 1;

    return [
      firstItem,
      {
        label: `... (${collapsedCount} more)`,
        isCurrent: false,
      },
      ...lastItems,
    ];
  }, [items, maxItems]);

  const handleItemClick = (item: BreadcrumbItem, index: number, event: React.MouseEvent) => {
    if (onItemClick) {
      event.preventDefault();
      onItemClick(item, index);
    }
  };

  const renderSeparator = () => {
    return separator || (
      <ChevronRightIcon className={`${iconSizes[size]} text-gray-400 dark:text-gray-500 mx-2`} />
    );
  };

  const renderItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    const isClickable = (item.href || onItemClick) && !item.isCurrent;
    const ItemComponent = isClickable ? motion.a : motion.span;

    return (
      <li key={`${item.label}-${index}`} className="flex items-center">
        <ItemComponent
          href={isClickable ? item.href : undefined}
          onClick={isClickable ? (e) => handleItemClick(item, index, e) : undefined}
          className={`
            flex items-center space-x-1
            ${item.isCurrent 
              ? 'text-gray-900 dark:text-gray-100 font-medium cursor-default' 
              : isClickable 
                ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
                : 'text-gray-500 dark:text-gray-400 cursor-default'
            }
            ${isClickable ? 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded' : ''}
          `}
          whileHover={isClickable ? { scale: 1.02 } : {}}
          whileTap={isClickable ? { scale: 0.98 } : {}}
        >
          {/* Show home icon for first item if enabled */}
          {index === 0 && showHomeIcon ? (
            <HomeIcon className={iconSizes[size]} />
          ) : item.icon ? (
            <span>{item.icon}</span>
          ) : null}
          
          <span>{item.label}</span>
        </ItemComponent>

        {/* Separator */}
        {!isLast && (
          <span className="flex items-center">
            {renderSeparator()}
          </span>
        )}
      </li>
    );
  };

  return (
    <nav 
      className={`${sizeClasses[size]} ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap">
        {processedItems.map((item, index) => 
          renderItem(item, index, index === processedItems.length - 1)
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
