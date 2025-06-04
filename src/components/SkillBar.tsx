import React, { useEffect, useState, useRef } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  color = 'primary',
  delay = 0,
}) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  const getGradientClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-to-r from-primary-400 to-primary-600';
      case 'secondary':
        return 'bg-gradient-to-r from-secondary-400 to-secondary-600';
      case 'pastel':
        return 'bg-gradient-to-r from-pastel-pink to-pastel-lavender';
      default:
        return 'bg-gradient-to-r from-primary-400 to-primary-600';
    }
  };

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${getGradientClass()}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;