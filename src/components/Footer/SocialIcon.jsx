import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const iconMap = {
  Facebook,
  Twitter,
  Instagram,
};

const SocialIcon = ({ platform, icon }) => {
  const IconComponent = iconMap[icon];
  
  if (!IconComponent) return null;
  
  return (
    <IconComponent 
      className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
      aria-label={`Follow us on ${platform}`}
    />
  );
};

export default SocialIcon;