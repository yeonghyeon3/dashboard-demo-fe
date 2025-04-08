import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = ({ title, children }) => {

  return (
    <>
      {/* 사이드바 */}
      <nav 
        className={`
          ${styles.navigation}
        `}
      >
        <div className={styles.navHeader}>
          {title}
        </div>
        <div className={styles.navContent}>
          {children}
        </div>
      </nav>
    </>
  );
};