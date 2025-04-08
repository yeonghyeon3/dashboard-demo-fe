import React from 'react';
import styles from './IconBase.module.css';
import {
  ICON_STYLES,
  ICON_SIZES,
  BADGE_COLORS
} from './constants'

export const IconBase = ({ 
  type,
  weight = ICON_STYLES.SOLID,  // solid, regular, brands
  size = ICON_SIZES.MD,      // sm, md, lg, xl
  className = '',
  onClick,
  withBadge = false,
  badgeContent,
  badgeColor = BADGE_COLORS.PRIMARY,  // primary, danger, warning, success
  disabled = false,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <div className={`${styles.iconWrapper} ${disabled ? styles.disabled : ''}`}>
      <i 
        className={`
          ${weight} 
          ${type} 
          ${styles.icon}
          ${styles[size]}
          ${className}
        `}
        onClick={handleClick}
        {...props}
      />
      {withBadge && badgeContent && (
        <span className={`${styles.badge} ${styles[`badge-${badgeColor}`]}`}>
          {badgeContent}
        </span>
      )}
    </div>
  );
};