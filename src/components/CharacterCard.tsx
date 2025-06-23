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
      className="notebook-card mx-2 bg-[#FFFFF0] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 w-[700px]"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Notebook rings */}
      <div className="flex justify-center space-x-2 py-1 border-b border-[#E5E5E5]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary-200 border border-primary-300"
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="w-[120px] h-[120px] mx-auto mb-2 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={nameJp}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <div className="text-center">
            <h3 className="text-lg font-playfair text-primary-700">{nameJp}</h3>
            <p className="text-xs text-gray-500">{nameEn}</p>
          </div>

          <div className="border-t border-b border-[#E5E5E5] py-1">
            <h4 className="text-xs font-medium text-primary-600 mb-1">Application</h4>
            <p className="text-gray-700 text-xs">{application}</p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-primary-600 mb-1">Description</h4>
            <p className="text-gray-700 text-xs leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-primary-600 mb-1">Skills</h4>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-[10px] rounded-full bg-primary-50 text-primary-600"
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