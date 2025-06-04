import React from 'react';

const LaceRibbonBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main ribbon structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[120%] relative">
          {/* Center bow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-32 bg-gradient-to-b from-white via-[#FFE4E1] to-white rounded-[100%] shadow-soft transform -rotate-45 absolute -left-32 -top-8" />
            <div className="w-64 h-32 bg-gradient-to-b from-white via-[#FFE4E1] to-white rounded-[100%] shadow-soft transform rotate-45 absolute -right-32 -top-8" />
            <div className="w-48 h-48 bg-gradient-to-b from-white via-[#FFE4E1] to-white rounded-full shadow-soft absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Flowing ribbons */}
          <div className="absolute inset-0">
            {/* Left side ribbons */}
            <div className="absolute left-0 top-0 w-1/2 h-full">
              <div className="absolute w-full h-[200%] bg-gradient-to-br from-white via-[#FFE4E1] to-transparent opacity-90 transform -rotate-15 origin-top-right" />
              <div className="absolute w-full h-[180%] bg-gradient-to-br from-white via-[#FFE4E1] to-transparent opacity-80 transform -rotate-30 origin-top-right" />
            </div>

            {/* Right side ribbons */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <div className="absolute w-full h-[200%] bg-gradient-to-bl from-white via-[#FFE4E1] to-transparent opacity-90 transform rotate-15 origin-top-left" />
              <div className="absolute w-full h-[180%] bg-gradient-to-bl from-white via-[#FFE4E1] to-transparent opacity-80 transform rotate-30 origin-top-left" />
            </div>
          </div>

          {/* Lace overlay */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6679496/pexels-photo-6679496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-repeat opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default LaceRibbonBackground;