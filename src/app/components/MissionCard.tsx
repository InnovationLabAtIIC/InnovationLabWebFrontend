import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Typography } from '@/components/ui';

const MissionCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-t-8 border-b-8 border-blue-500 w-full max-w-[476px] flex flex-col">
      {/* Icon and Title Container */}
      <div className="flex items-center mb-2">
        <div 
          className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-blue-500 mr-3"
          aria-hidden="true"
        >
          <FaLightbulb className="w-6 h-6 text-blue-500" />
        </div>
        <Typography 
          variant="h3" 
          weight="bold"
          className="text-[28px] text-black"
        >
          Our Mission
        </Typography>
      </div>

      {/* Description */}
      <Typography 
        variant="body2" 
        className="mb-2 leading-[24px] text-black"
      >
        To create an inclusive, collaborative environment that empowers innovators to develop solutions to local and global challenges through technology, research, and entrepreneurship.
      </Typography>

      {/* Mission Points List */}
      <ul className="list-none space-y-1">
        {[
          'Foster innovation through multidisciplinary collaborations.',
          'Accelerate the development and adoption of breakthrough technologies.',
          'Bridge the gap between academic research and industry implementation.'
        ].map((point, index) => (
          <li key={index} className="flex items-start">
            <Typography 
              variant="body2" 
              className="leading-[24px] flex items-start text-black"
            >
              <span className="text-blue-500 mr-2" aria-hidden="true">•</span>
              {point}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionCard; 