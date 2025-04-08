import React from 'react';
import styles from './Button.module.css';

export const Button = ({ 
  size = 'md',          // sm, md, lg
  variant,  // primary, secondary, outline, ghost
  icon,                 // 아이콘 컴포넌트
  iconPosition = 'left', // left, right
  children,             // 텍스트 또는 다른 컴포넌트
  className,            // 추가 클래스
  disabled = false,     // 비활성화 상태
  loading = false,      // 로딩 상태
  ...props             // 나머지 props (onClick 등)
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[size]}
        ${styles[variant]}
        ${disabled ? styles.disabled : ''}
        ${loading ? styles.loading : ''}
        ${className || ''}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className={styles.iconLeft}>{icon}</span>
          )}
          {children && <span className={styles.text}>{children}</span>}
          {icon && iconPosition === 'right' && (
            <span className={styles.iconRight}>{icon}</span>
          )}
        </>
      )}
    </button>
  );
};