import React from 'react';
import { Heart, ExternalLink, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-gradient-aurora py-8 border-t border-primary-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-playfair font-semibold text-primary-700 mb-2">
              Let's Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/miyuseki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://protopedia.net/prototyper/trz_hi82" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="protopedia"
              >
                 <span className="sr-only">Protopedia</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#ff8daa" />
                        <text x="6" y="15" fontSize="12" fontWeight="bold" fill="white">P</text>
                      </svg>
              </a>
              <a 
                href="https://aiel.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="lab"
              >
                <span className="sr-only">AIEL Lab</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#d8b4f8" />
                        <text x="6" y="15" fontSize="12" fontWeight="bold" fill="white">L</text>
                      </svg>
              </a>
             
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 mb-1">
              Made with <Heart className="inline-block w-4 h-4 text-primary-500 align-middle" /> and creativity
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
        <div className="w-full h-full border-2 border-primary-300 rounded-full"></div>
      </div>
      <div className="absolute top-8 right-12 w-16 h-16 opacity-10">
        <div className="w-full h-full border-2 border-primary-300 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;