import React from 'react';
import Image from 'next/image';
import Typography from '@/components/ui/Typography'; // Adjust path if necessary

const OurProgramsSection: React.FC = () => {
  const programs = [
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
        {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
    {
      image: '/OurProg.jpg',
      title: 'Summer Enrichment',
      description: 'A 12-week program designed to help early-stage startups develop their ideas into viable businesses through mentorship, workshops, and networking.',
      link: '#'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Typography variant="h4" weight="bold" className="!text-gray-800">Our Programs</Typography>
            <Typography variant="body1" className="!text-gray-700">Discover our specialized programs designed to accelerate innovation across different domains and stages.</Typography>
          </div>
          <a href="#" className="text-blue-600 hover:underline flex items-center">
            <Typography variant="body2" className="!text-blue-600">View All Programs</Typography>
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {programs.map((program, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={program.image} alt={program.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <Typography variant="h5" weight="bold" className="!text-gray-800 mb-2">{program.title}</Typography>
                <Typography variant="body2" className="!text-gray-700 text-sm mb-4">{program.description}</Typography>
                <a href={program.link} className="text-blue-600 hover:underline flex items-center text-sm">
                  <Typography variant="body2" className="!text-blue-600">Learn More</Typography>
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProgramsSection; 