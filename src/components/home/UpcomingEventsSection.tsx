'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Event1 from '../../placeholder-hero-1.jpeg';
import { apiService } from '@/services/api';
import { Event as EventType } from '@/types/api';
import { format } from 'date-fns';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008z" /></svg>;
const LocationPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>;

// Fallback event data for when API fails
const fallbackEventData = [
  {
    imageSrc: Event1,
    title: "IICQuest 3.0",
    date: "June 11, 2025",
    location: "Itahari International College",
    description: "Lorem ipsum dolor sit amet consectetur. Sed morbi neque facilisis sed ac viverra tellus elit.",
    registerLink: "/events/iicquest-3/register",
  },
  {
    imageSrc: Event1,
    title: "Creative Clash Finals",
    date: "July 20, 2025",
    location: "Online Event",
    description: "Witness the culmination of innovative projects as teams battle for the top spot in Creative Clash.",
    registerLink: "/events/creative-clash-finals/register",
  },
  {
    imageSrc: Event1,
    title: "GPPC National Showcase",
    date: "August 5, 2025",
    location: "Main Auditorium",
    description: "The best of GPPC projects from across the nation present their impactful solutions.",
    registerLink: "/events/gppc-showcase/register",
  },
   {
    imageSrc: Event1,
    title: "Innovation Fair 2025",
    date: "September 15, 2025",
    location: "College Grounds",
    description: "Explore a wide array of student-led innovations, workshops, and tech demos.",
    registerLink: "/events/innovation-fair-2025/register",
  },
];

const UpcomingEventsSection = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await apiService.getEvents({ 
          type: 'upcoming',
          limit: 4,
          sort_by: 'start_time',
          sort_order: 'asc'
        });
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Format the date
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  const renderEvents = () => {
    if (events.length > 0) {
      return events.map((event) => (
        <div key={event.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative w-full h-48">
            <Image 
              src={event.cover_image_url || Event1} 
              alt={event.title} 
              layout="fill" 
              objectFit="cover" 
              placeholder={event.cover_image_url ? undefined : 'blur'}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{event.title}</h3>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <CalendarIcon /> <span className="ml-1">{formatDate(event.start_time)}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <LocationPinIcon /> <span>{event.location}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
            <Link href={`/events/${event.id}/register`} className="mt-auto inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300">
              Register Now <ArrowRightIcon />
            </Link>
          </div>
        </div>
      ));
    } else {
      return fallbackEventData.map((event, index) => (
        <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="relative w-full h-48">
            <Image src={event.imageSrc} alt={event.title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{event.title}</h3>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <CalendarIcon /> <span className="ml-1">{event.date}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <LocationPinIcon /> <span>{event.location}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
            <Link href={event.registerLink} className="mt-auto inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-md transition duration-300">
              Register Now <ArrowRightIcon />
            </Link>
          </div>
        </div>
      ));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
            <p className="text-gray-600 max-w-xl">
              Join us for workshops, talks, and networking opportunities designed to inspire and connect.
            </p>
          </div>
          <Link href="/events/calendar" className="hidden sm:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300">
            <CalendarIcon /> View Calendar
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderEvents()}
          </div>
        )}
        
        <div className="text-center mt-12 sm:hidden"> {/* Mobile View Calendar Button */}
          <Link href="/events/calendar" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300">
            <CalendarIcon /> View Calendar
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link href="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
            View All Events <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 