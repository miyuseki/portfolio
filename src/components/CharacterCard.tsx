import React from 'react';
import { motion } from 'framer-motion';

interface CharacterCardProps {
  image: string;
  nameJp: string;
  nameEn: string;
  application: string;
  description: string;
  skills: string[];
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  nameJp,
  nameEn,
  application,
  description,
  skills,
}) => {
  return (
    <motion.div
      className="notebook-card mx-2 bg-[#FFFFF0] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Notebook rings */}
      <div className="flex justify-center space-x-4 py-2 border-b border-[#E5E5E5]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full bg-primary-200 border-2 border-primary-300"
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-[250px] h-[250px] mx-auto mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={nameJp}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-playfair text-primary-700">{nameJp}</h3>
            <p className="text-sm text-gray-500">{nameEn}</p>
          </div>

          <div className="border-t border-b border-[#E5E5E5] py-3">
            <h4 className="text-sm font-medium text-primary-600 mb-1">Application</h4>
            <p className="text-gray-700">{application}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary-600 mb-1">Description</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary-600 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-primary-50 text-primary-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;