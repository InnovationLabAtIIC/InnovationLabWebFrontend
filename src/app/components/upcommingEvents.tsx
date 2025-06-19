import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Typography from '@/components/ui/Typography'; // Adjust path if necessary

const UpcomingEventsSection: React.FC = () => {
  const events = [
    {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
    {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
    {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
    {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
     {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
    {
      image: '/Event.jpg',
      title: 'IICQuest 3.0',
      date: 'June 11, 2025',
      location: 'Itahari International College',
      description: 'Lorem ipsum dolor sit amet consectetur. Facilisis sed a ac viverra tellus elit.',
      link: '#'
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Typography variant="h4" weight="bold" className="!text-gray-800">Upcoming Events</Typography>
            <Typography variant="body1" className="!text-gray-700">Join us for workshops, talks, and networking opportunities designed to inspire and connect.</Typography>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center">
            <FaCalendarAlt className="mr-2" />
            <Typography variant="button" className="!text-white">View Calendar</Typography>
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {events.map((event, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40 w-full">
                <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <Typography variant="h5" weight="bold" className="!text-gray-800 mb-2">{event.title}</Typography>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <FaCalendarAlt className="mr-1" />
                  <Typography variant="body2" className="!text-gray-600">{event.date}</Typography>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <FaMapMarkerAlt className="mr-1" />
                  <Typography variant="body2" className="!text-gray-600">{event.location}</Typography>
                </div>
                <Typography variant="body2" className="!text-gray-700 text-sm mb-4">{event.description}</Typography>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm flex items-center justify-center">
                  <Typography variant="button" className="!text-white">Register Now &rarr;</Typography>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-gray-100 transition">
            <Typography variant="button" className="!text-blue-600">View All Events &rarr;</Typography>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 