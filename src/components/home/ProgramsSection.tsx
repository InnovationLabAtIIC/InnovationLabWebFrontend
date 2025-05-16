import Image from 'next/image';
import Link from 'next/link';
import Program1 from '../../placeholder-hero-1.jpeg';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const programData = [
  {
    imageSrc: Program1,
    title: "Summer Enrichment",
    description: "A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.",
    learnMoreLink: "/programs/summer-enrichment",
  },
  {
    imageSrc: Program1,
    title: "Creative Clash",
    description: "An intensive ideathon where students collaborate to solve real-world problems using innovative tech solutions in a competitive environment.",
    learnMoreLink: "/programs/creative-clash",
  },
  {
    imageSrc: Program1,
    title: "GPPC",
    description: "Global Project Presentation Competition fostering critical thinking and presentation skills on global issues and sustainable development.",
    learnMoreLink: "/programs/gppc",
  },
   {
    imageSrc: Program1,
    title: "ICQuest 3.0",
    description: "A quest for innovation, challenging participants to ideate, develop, and present solutions to pressing contemporary challenges.",
    learnMoreLink: "/programs/icquest",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Programs</h2>
            <p className="text-gray-600 max-w-xl">
              Discover our specialized programs designed to accelerate innovation across different domains and stages.
            </p>
          </div>
          <Link href="/programs" className="hidden sm:inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
            View All Programs <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image src={program.imageSrc} alt={program.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{program.description}</p>
                <Link href={program.learnMoreLink} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
                  Learn More <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:hidden"> 
            <Link href="/programs" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
                View All Programs <ArrowRightIcon />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 