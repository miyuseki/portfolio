import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from './ui/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className = '',
}) => {
  return (
    <div className={`project-card rounded-lg overflow-hidden shadow-soft bg-white border border-primary-100 ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-2 text-primary-700">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <Button size="sm" variant="primary" className="ml-auto">
              <ExternalLink className="w-4 h-4 mr-1" />
              View Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;