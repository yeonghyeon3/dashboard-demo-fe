import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

// Context for managing dropdown state
const DropdownContext = createContext();

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={styles.dropdown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <button 
      className={`${styles.trigger} ${isOpen ? styles.active : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      {children}
    </button>
  );
};

export const DropdownContent = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  const contentRef = useRef(null);
  const [alignment, setAlignment] = useState('left');

  useEffect(() => {
    const updateAlignment = () => {
      if (isOpen && contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowWidth = document.documentElement.clientWidth;

        if (rect.right + 10 > windowWidth) {
          setAlignment('right');
        } else {
          setAlignment('left');
        }
      }
    };

    updateAlignment();

    window.addEventListener('resize', updateAlignment);

    return () => {
      window.removeEventListener('resize', updateAlignment);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={contentRef}
      className={`${styles.content} ${styles[alignment]}`}
      style={{ maxWidth: `calc(100vw - 2rem)` }}
    >
      {children}
    </div>
  );
};

export const DropdownItem = ({ children, onClick, disabled }) => {
  const { setIsOpen } = useContext(DropdownContext);

  const handleClick = () => {
    onClick?.();
    setIsOpen(false);
  };

  return (
    <button
      className={`${styles.item} ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const DropdownSeparator = () => {
  return <div className={styles.separator} />;
};