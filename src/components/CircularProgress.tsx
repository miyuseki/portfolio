import React, { useEffect, useState, useRef } from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label: string;
  animationDelay?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = 'primary',
  label,
  animationDelay = 0,
}) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setProgress(percentage);
          }, animationDelay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [percentage, animationDelay]);

  const getGradientColors = () => {
    switch (color) {
      case 'yellow':
        return ['#FEF9C3', '#FDE68A'];
      case 'blue':
        return ['#DBEAFE', '#60A5FA'];
      case 'green':
        return ['#D1FAE5', '#34D399'];
      case 'pink':
        return ['#FCE7F3', '#F472B6'];
      case 'purple':
        return ['#E9D5FF', '#A78BFA'];
      case 'orange':
        return ['#FFEDD5', '#FBBF24'];
      case 'teal':
        return ['#CCFBF1', '#2DD4BF'];
      case 'gray':
        return ['#F3F4F6', '#9CA3AF'];
      case 'red':
        return ['#FECACA', '#F87171'];
      default:
        return ['#F3F4F6', '#60A5FA']; // fallback: gray to blue
    }
  };

  const [gradientStart, gradientEnd] = getGradientColors();
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="mr-10 relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        aria-label={`${label}: ${percentage}%`}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 240, 245, 0.7)"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-out bg-gradient-to-r ${gradientStart} ${gradientEnd}`}
          style={{
            stroke: `url(#gradient-${label.replace(/\s+/g, '-')})`,
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient
            id={`gradient-${label.replace(/\s+/g, '-')}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-playfair font-semibold text-primary-700">
          {Math.round(progress)}%
        </span>
        <span className="text-sm text-gray-600 mt-1">{label}</span>
      </div>
    </div>
  );
};

export default CircularProgress;