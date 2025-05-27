'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Name to generate initials from */
  name?: string;
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Shape of the avatar */
  shape?: 'circle' | 'square' | 'rounded';
  /** Custom className for styling */
  className?: string;
  /** Fallback icon or content when image fails to load */
  fallback?: React.ReactNode;
  /** Whether to show online status indicator */
  online?: boolean;
  /** Custom status indicator */
  statusIndicator?: React.ReactNode;
  /** Custom status color */
  statusColor?: 'green' | 'yellow' | 'red' | 'gray';
  /** Whether avatar is clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Loading state */
  loading?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  className = '',
  fallback,
  online,
  statusIndicator,
  statusColor = 'green',
  clickable = false,
  onClick,
  loading = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
    '2xl': 'w-5 h-5',
  };

  const statusColors = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500',
  };

  const generateInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const showImage = src && !imageError;
  const showInitials = name && !showImage;
  const showFallback = !showImage && !showInitials;

  const avatarContent = () => {
    if (loading || imageLoading) {
      return (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse">
          <div className="w-1/2 h-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      );
    }

    if (showImage) {
      return (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      );
    }

    if (showInitials) {
      return (
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
          {generateInitials(name)}
        </div>
      );
    }

    if (showFallback) {
      return fallback || (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
          <UserIcon className="w-1/2 h-1/2" />
        </div>
      );
    }

    return null;
  };

  const AvatarComponent = clickable ? motion.button : motion.div;

  return (
    <div className={`relative inline-block ${className}`}>
      <AvatarComponent
        className={`
          ${sizeClasses[size]}
          ${shapeClasses[shape]}
          overflow-hidden
          border-2 border-gray-200 dark:border-gray-700
          transition-all duration-200
          ${clickable 
            ? 'cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' 
            : ''
          }
        `}
        onClick={clickable ? onClick : undefined}
        whileHover={clickable ? { scale: 1.05 } : {}}
        whileTap={clickable ? { scale: 0.95 } : {}}
        type={clickable ? 'button' : undefined}
      >
        {avatarContent()}
      </AvatarComponent>

      {/* Status indicator */}
      {(online !== undefined || statusIndicator) && (
        <div className="absolute -bottom-0.5 -right-0.5">
          {statusIndicator || (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`
                ${statusSizes[size]}
                ${online ? statusColors[statusColor] : statusColors.gray}
                border-2 border-white dark:border-gray-900
                rounded-full
              `}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
