'use client';

import { useEffect, useState } from 'react';

export default function MobileLayoutStabilizer({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        // Fix for mobile viewport height issues
        const setVH = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          setViewportHeight(`${window.innerHeight}px`);
        };
        
        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
        
        return () => {
          window.removeEventListener('resize', setVH);
          window.removeEventListener('orientationchange', setVH);
        };
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Add mobile-specific body classes
      document.body.classList.add('mobile-device');
      document.documentElement.classList.add('mobile-device');
      
      // Prevent iOS bounce scroll
      document.body.style.overscrollBehavior = 'none';
      document.documentElement.style.overscrollBehavior = 'none';
      
      return () => {
        document.body.classList.remove('mobile-device');
        document.documentElement.classList.remove('mobile-device');
        document.body.style.overscrollBehavior = '';
        document.documentElement.style.overscrollBehavior = '';
      };
    }
  }, [isMobile]);

  return (
    <div 
      className={`${isMobile ? 'mobile-optimized' : ''}`}
      style={isMobile ? { minHeight: viewportHeight } : {}}
    >
      {children}
    </div>
  );
}
