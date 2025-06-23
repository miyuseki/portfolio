import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import CircularProgress from '../components/CircularProgress';
import { Code, Palette, Database, Globe, Layers, Wrench } from 'lucide-react';
import CharacterCarousel from './CharacterCarousel';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; percentage: number; color: string }>;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories: SkillCategory[] = [
    {
      id: 'all',
      name: 'All Skill',
      icon: <Globe className="w-5 h-5 text-primary-500" />,
      skills: [
        { name: 'JavaScript', percentage: 60, color: 'yellow' },
        { name: 'TypeScript', percentage: 40, color: 'blue' },
        { name: 'SQL', percentage: 60, color: 'teal' },
        { name: 'Java', percentage: 60, color: 'red' },
        { name: 'HTML/CSS', percentage: 70, color: 'orange' },
        { name: 'React', percentage: 50, color: 'blue' },
        { name: 'Tailwind CSS', percentage: 60, color: 'teal' },
        { name: 'Node.js', percentage: 40, color: 'green' },
        { name: 'Laravel', percentage: 60, color: 'red' },
        { name: 'Adobe Illustrator', percentage: 80, color: 'purple' },
        { name: 'Adobe Photoshop', percentage: 75, color: 'purple' },
        { name: 'Figma', percentage: 80, color: 'pink' },
        { name: 'Git/GitHub', percentage: 70, color: 'gray' },
        { name: 'AWS', percentage: 30, color: 'orange' },
        { name: 'Notion', percentage: 75, color: 'teal' },
      ],
    },
    {
      id: 'language',
      name: 'Language',
      icon: <Code className="w-5 h-5 text-primary-500" />,
      skills: [
        { name: 'JavaScript', percentage: 60, color: 'yellow' },
        { name: 'TypeScript', percentage: 40, color: 'blue' },
        { name: 'SQL', percentage: 60, color: 'teal' },
        { name: 'Java', percentage: 60, color: 'red' },
        { name: 'HTML/CSS', percentage: 70, color: 'orange' },
      ],
    },
    {
      id: 'framework',
      name: 'Framework',
      icon: <Layers className="w-5 h-5 text-primary-500" />,
      skills: [
        { name: 'React', percentage: 50, color: 'blue' },
        { name: 'Tailwind CSS', percentage: 60, color: 'teal' },
        { name: 'Node.js', percentage: 40, color: 'green' },
        { name: 'Laravel', percentage: 60, color: 'red' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Other',
      icon: <Wrench className="w-5 h-5 text-primary-500" />,
      skills: [
        { name: 'Figma', percentage: 95, color: 'pink' },
        { name: 'Adobe Illustrator', percentage: 80, color: 'purple' },
        { name: 'Adobe Photoshop', percentage: 75, color: 'purple' },
        { name: 'Git/GitHub', percentage: 70, color: 'gray' },
        { name: 'AWS', percentage: 30, color: 'orange' },
        { name: 'Notion', percentage: 75, color: 'teal' },
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive look at my technical abilities and expertise"
        />

        <div className="max-w-2xl mx-auto">
          {/* Category Tabs */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                    }`}
                  aria-selected={activeCategory === category.id}
                  role="tab"
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Skills Grid */}
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
            {categories
              .find((cat) => cat.id === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 flex flex-col items-center w-full"
                >
                  <CircularProgress
                    percentage={skill.percentage}
                    label={skill.name}
                    animationDelay={index * 200}
                    color={skill.color}
                  />
                </div>
              ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;