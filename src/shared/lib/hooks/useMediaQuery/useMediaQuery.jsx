import { useState, useEffect } from 'react';
import { BREAKPOINTS } from './breakpoints';

export const useMediaQuery = (query) => {
  // query 타입 체크
  const mediaQuery = typeof query === 'string' ? query : BREAKPOINTS[query];
  
  const getMatches = (query) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(mediaQuery));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // 초기값 설정
    setMatches(mediaQueryList.matches);

    // 리스너 등록
    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return matches;
};

// 편의를 위한 추가 훅들
export const useIsMobile = () => useMediaQuery(BREAKPOINTS.MOBILE);
export const useIsTablet = () => useMediaQuery(BREAKPOINTS.TABLET);
export const useIsDesktop = () => useMediaQuery(BREAKPOINTS.DESKTOP);
export const useIsDarkMode = () => useMediaQuery(BREAKPOINTS.DARK_MODE);