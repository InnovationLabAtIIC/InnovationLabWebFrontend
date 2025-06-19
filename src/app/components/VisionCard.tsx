import React from 'react';
import { FaBullseye } from 'react-icons/fa';
import { Typography } from '@/components/ui';

const VisionCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-t-8 border-b-8 border-green-500 w-full max-w-[476px] flex flex-col">
      {/* Icon and Title Container */}
      <div className="flex items-center mb-2">
        <div 
          className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-green-500 mr-3"
          aria-hidden="true"
        >
          <FaBullseye className="w-6 h-6 text-green-500" />
        </div>
        <Typography 
          variant="h3" 
          weight="bold"
          className="text-[28px] text-black"
        >
          Our Vision
        </Typography>
      </div>

      {/* Description */}
      <Typography 
        variant="body2" 
        className="mb-2 leading-[24px] text-black"
      >
        To become a globally recognized hub for innovation that transforms ideas into sustainable solutions, driving positive social, economic, and environmental impact.
      </Typography>

      {/* Vision Points List */}
      <ul className="list-none space-y-1">
        {[
          'Create a self-sustaining ecosystem of innovation and entrepreneurship.',
          'Position our region as a leading innovation hub in Asia.',
          'Develop solutions that contribute to the UN Sustainable Development Goals.'
        ].map((point, index) => (
          <li key={index} className="flex items-start">
            <Typography 
              variant="body2" 
              className="leading-[24px] flex items-start text-black"
            >
              <span className="text-green-500 mr-2" aria-hidden="true">•</span>
              {point}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisionCard; 