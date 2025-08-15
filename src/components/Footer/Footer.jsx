import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../constants';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-cyan-900/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-8 transform -skew-x-6">
              LET'S CHAT
            </h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">Phone</h4>
              <p className="text-gray-300">{COMPANY_INFO.phone}</p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">Email</h4>
              <p className="text-gray-300">{COMPANY_INFO.email}</p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold mb-2">Social</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon 
                    key={social.platform}
                    platform={social.platform}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-cyan-400 opacity-30"></div>
    </footer>
  );
};

export default Footer;