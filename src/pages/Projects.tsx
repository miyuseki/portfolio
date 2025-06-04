import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Healpass',
    description: '健康管理アプリ',
    image: '/images/Healpass.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demo: 'https://protopedia.net/prototype/6090'
  },
  {
    title: 'Mon Dev Co',
    description: 'ASMツール',
    image: '/images/Mon_Dev_Co.jpg',
    tags: ['React', 'Firebase', 'Material-UI'],
    demo: 'https://protopedia.net/prototype/6731'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text prompts. Uses OpenAI\'s DALL-E API and React for the frontend.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getProjectStyle = (index: number) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    if (diff === 0) {
      return 'left-1/2 -translate-x-1/2 scale-100 opacity-100 z-20';
    } else if (diff === 1) {
      return 'left-3/4 -translate-x-1/2 scale-90 opacity-50 z-10';
    } else if (diff === projects.length - 1) {
      return 'left-1/4 -translate-x-1/2 scale-90 opacity-50 z-10';
    } else {
      return 'hidden';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute top-0 transition-all duration-500 ease-in-out ${getProjectStyle(index)}`}
                style={{ width: '60%' }}
              >
                <AnimatedSection animation="fade-in">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-sm bg-white/20 text-white rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;