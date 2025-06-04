import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-2 text-primary-700 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary-400"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 font-mincho">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;