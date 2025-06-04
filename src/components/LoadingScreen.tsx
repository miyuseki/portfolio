import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-aurora bg-opacity-900 transition-opacity duration-1000 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <div className="relative">
        {/* Central loading icon */}
        <div className="animate-bounce">
          <Heart className="w-12 h-12 text-primary-400 animate-pulse" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 -translate-x-full -translate-y-full">
          <div className="w-3 h-3 bg-primary-300 rounded-full animate-sparkle" style={{ animationDelay: '0.2s' }} />
        </div>
        <div className="absolute top-0 right-0 translate-x-full -translate-y-full">
          <div className="w-3 h-3 bg-primary-300 rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }} />
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-full translate-y-full">
          <div className="w-3 h-3 bg-primary-300 rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }} />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-full translate-y-full">
          <div className="w-3 h-3 bg-primary-300 rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-primary-700 font-playfair text-lg">Loading...</p>
          <div className="mt-2 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;