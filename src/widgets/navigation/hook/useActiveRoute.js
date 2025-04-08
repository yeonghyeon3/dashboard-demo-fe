// @widgets/navigation/lib/hooks/useActiveRoute.js
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useActiveRoute = (path) => {
  const location = useLocation();

  return useMemo(() => {
    const isExact = location.pathname === path;
    const isParent = location.pathname.startsWith(`${path}/`);
    
    return {
      isActive: isExact || isParent,
      isExactMatch: isExact
    };
  }, [location.pathname, path]);
};