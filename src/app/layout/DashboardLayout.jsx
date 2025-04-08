import { Outlet } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import styles from "./DashboardLayout.module.css"
import { useMediaQuery } from "../../shared/lib/hooks/useMediaQuery/useMediaQuery"

import Header from "../../shared/ui/Header"
import NavigationSection from "../../widgets/navigation/NavigationSection"

export const DashboardLayout = () => {

  const [isNavPinned, setIsNavPinned] = useState(false);
  const isMobile = useMediaQuery('MOBILE');
  const [isHovered, setIsHovered] = useState(false);
  const isMouseInNav = useRef(false);

  // 마우스 트리거 영역 설정
  const handleMouseMove = (e) => {
    if (isNavPinned || isMobile || isMouseInNav.current) return;
    const TRIGGER_AREA_PX = 30;
    setIsHovered(e.clientX <= TRIGGER_AREA_PX);
  };

  const handleNavMouseEnter = () => {
    if (!isNavPinned && !isMobile) {
      isMouseInNav.current = true;
      setIsHovered(true);
    }
  };

  const handleNavMouseLeave = () => {
    if (!isNavPinned && !isMobile) {
      isMouseInNav.current = false;
      setIsHovered(false);
    }
  }; 

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile, isNavPinned]);

  return (
    <div className={`
      ${styles.container} 
      ${isNavPinned && !isMobile ? styles.navPinned : ''}
    `}>
      {/* 오버레이 (모바일에서만) */}
      {isMobile && isNavPinned && (
        <div 
          className={styles.overlay}
          onClick={() => setIsNavPinned(false)}
        />
      )}
      <div 
        className={`
          ${styles.navArea}
          ${isNavPinned ? styles.pinned : ''}
          ${isHovered ? styles.hovered : ''}
          ${isMobile ? styles.mobile : ''}
      `}
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
      >
        <NavigationSection/>
      </div>
      <main className={styles.main}>
        <Header 
          onMenuClick={() => setIsNavPinned(!isNavPinned)}
          isNavPinned={isNavPinned}
        />
        <Outlet />
      </main>
    </div>
  )
}