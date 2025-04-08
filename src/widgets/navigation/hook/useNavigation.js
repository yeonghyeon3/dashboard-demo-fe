// @widgets/navigation/lib/hooks/useNavigation.js
import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = (items = []) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  const isActiveRoute = useCallback((path) => {
    return location.pathname === path;
  }, [location]);

  return {
    collapsed,
    toggleCollapse,
    isActiveRoute
  };
};