import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';
import { ChevronToggleIcon } from '@/shared/ui/icons';

export const NavigationItem = ({ 
  icon: Icon,
  label,
  to,
  children,
  depth = 0,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = Boolean(children);

  const handleToggle = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`
        ${styles.item}
        ${depth == 0 ? styles.lv1 : ''}
        ${isExpanded ? styles.expanded : ''}
        ${className || ''}
      `}
    >
      <div className={styles.itemWrapper}>
        {to ? (
          <Link 
            to={to}
            className={styles.itemContent}
          >
            {Icon && <Icon className={styles.icon} />}
            <span className={styles.label}>{label}</span>
          </Link>
        ) : (
          <div className={styles.itemContent}>
            {Icon && <Icon className={styles.icon} />}
            <span className={styles.label}>{label}</span>
          </div>
        )}
        
        {hasChildren && (
          <button 
            className={styles.toggleButton}
            onClick={handleToggle}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? '접기' : '펼치기'}`}
          >
            <ChevronToggleIcon size="MD" isOpen={isExpanded} />
          </button>
        )}
      </div>

      {hasChildren && (
        <div 
          className={`${styles.childrenContainer} ${isExpanded ? styles.expanded : ''}`}
          style={{
            '--depth': depth + 1
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};