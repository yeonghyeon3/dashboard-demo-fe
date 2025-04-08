import React from 'react';
import styles from './DashboardGrid.module.css';

export const DashboardGrid = ({ children, layout = 'default' }) => {
  return (
    <div className={`${styles.dashboardGrid} ${styles[`layout${layout}`]}`}>
      {children}
    </div>
  );
};