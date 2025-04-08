import React from 'react';
import styles from './Card.module.css';

export const Card = ({ 
  title, 
  children, 
  className = '', 
  width = '100%',
  height = 'auto',
  headerRight,
  size,
  ...props
}) => {

  const shouldRenderHeader = title || headerRight

  return (
    <div 
     className={`${styles.card} ${styles[size]} ${className}`}
     style={{ width, height, ...props}}
    >
     {shouldRenderHeader && (
        <div className={styles.cardHeader}>
          {title && <span className={styles.cardTitle}>{title}</span>}
          {headerRight && (
            <div className={styles.headerRight}>
              {headerRight}
            </div>
          )}
        </div>
      )}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};
