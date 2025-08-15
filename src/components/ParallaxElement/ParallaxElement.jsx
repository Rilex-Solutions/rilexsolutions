import React from 'react';
import { useParallax } from '../../utils/useScrollAnimation';

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}) => {
  const offset = useParallax(speed);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return (
    <div 
      className={`parallax ${className}`}
      style={{ transform: getTransform() }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;