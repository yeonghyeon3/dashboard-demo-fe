import React from 'react';
import styles from './Table.module.css';

const Table = ({ 
  headers, 
  data, 
  className,
  onRowClick,
  isSelectable = false,
  isStriped = false,
  isBordered = true,
  isCompact = false
}) => {
  return (
      <table className={`
        ${styles.table}
        ${isStriped ? styles.striped : ''}
        ${isBordered ? styles.bordered : ''}
        ${isCompact ? styles.compact : ''}
      `}>
        <thead className={styles.tableHeader}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={`${styles.tableHeaderCell}`}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`
                ${styles.tableRow}
                ${isSelectable ? styles.selectable : ''}
              `}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex} className={`${styles.tableCell}`}>
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table