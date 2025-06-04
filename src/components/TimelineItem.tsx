import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  position: 'top' | 'bottom';
  icon?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  position,
  icon,
}) => {
  return (
    <div className={`timeline-item relative px-4 py-2 flex flex-col items-center ${position === 'top' ? 'justify-end' : 'justify-start'}`}
      style={{ minHeight: '180px' }}
    >
      {position === 'top' && (
        <div className="mb-8"></div>
      )}
      <div className="bg-white rounded-lg p-4 shadow-soft border border-primary-100 ribbon max-w-xs mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-400 z-10">
          {icon}
        </div>
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-200 ${position === 'top' ? 'top-full' : 'bottom-full'
          }`}></div>
        <span className="text-xs font-medium text-primary-500 block mb-1">{date}</span>
        <h4 className="text-base font-playfair font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
      {position === 'bottom' && (
        <div className="mt-8"></div>
      )}
    </div>
  );
};

export default TimelineItem;