import React from 'react';
import VisionCard from './VisionCard';
import MissionCard from './MissionCard';
import { Typography } from '@/components/ui';

const VisionMissionSection: React.FC = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-white"
      aria-label="Vision and Mission"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 justify-items-center">
          <div className="w-full max-w-[476px]">
            <VisionCard />
          </div>
          <div className="w-full max-w-[476px]">
            <MissionCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection; 