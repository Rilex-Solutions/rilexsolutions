import React from 'react';
import { useScrollAnimation } from '../../utils/useScrollAnimation';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 4)}` : '';
  const animationClass = `${animation} ${delayClass} ${isVisible ? 'visible' : ''}`;

  return (
    <div 
      ref={elementRef} 
      className={`${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;