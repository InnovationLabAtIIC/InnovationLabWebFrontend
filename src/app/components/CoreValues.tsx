import { IconType } from 'react-icons';
import { FiZap, FiUsers, FiActivity, FiGlobe } from 'react-icons/fi';
import { Typography } from '@/components/ui';

interface ValueCardProps {
  icon: IconType;
  iconBg: string;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, iconBg, title, description }: ValueCardProps) => (
  <div
    className="flex flex-col items-start bg-white shadow-md rounded-lg p-6 space-y-4 w-full sm:w-[270px] lg:w-auto"
  >
    <div className="flex flex-row items-center w-full mb-2 gap-2">
      <div
        className="flex justify-center items-center p-4 rounded-full aspect-square"
        style={{ width: 48, height: 48, background: iconBg }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <Typography variant="h6" weight="bold" className="!text-black">
        {title}
      </Typography>
    </div>
    <Typography variant="body2" className="!text-black leading-[1.4] text-left w-full break-words whitespace-pre-line" style={{wordBreak: 'break-word'}}>
      {description}
    </Typography>
  </div>
);

const values = [
  {
    icon: FiZap,
    iconBg: '#0066FF', // blue
    title: 'Innovation',
    description: 'We believe in pushing boundaries and exploring new frontiers to create solutions that matter.'
  },
  {
    icon: FiUsers,
    iconBg: '#5045E8', // purple
    title: 'Collaboration',
    description: 'We bring together diverse perspectives and expertise to solve complex challenges through teamwork.'
  },
  {
    icon: FiActivity,
    iconBg: '#A259FF', // violet
    title: 'Impact',
    description: 'We measure our success by the meaningful difference our innovations make in the world.'
  },
  {
    icon: FiGlobe,
    iconBg: '#22C55E', // green
    title: 'Sustainability',
    description: 'We prioritize solutions that support environmental stewardship and long-term social good.'
  },
];

const CoreValues = () => {
  return (
    <section className="w-full bg-[#21409A] flex justify-center py-8 px-2 sm:py-12 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl items-stretch justify-center mx-auto px-2 sm:px-4 md:px-8">
        {/* Left: Title and Subtitle */}
        <div
          className="flex flex-col justify-center items-center gap-2 w-full max-w-[579px] bg-[#06F] px-4 sm:px-8 overflow-hidden h-full"
        >
          <Typography variant="h2" weight="bold" align="center" className="!text-white mb-2 text-2xl sm:text-3xl md:text-4xl break-words">
            Our Core Values
          </Typography>
          <Typography variant="subtitle1" align="center" className="!text-white opacity-90 text-base sm:text-lg break-words">
            The principles that guide our work and shape our community.
          </Typography>
        </div>
        {/* Right: Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[570px] h-full content-between">
          {values.map((value, idx) => (
            <ValueCard key={idx} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues; 