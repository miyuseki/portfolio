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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
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