'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Testimonial1 from '../../placeholder-person-1.jpeg';
import { apiService } from '@/services/api';
import { Testimonial as TestimonialType } from '@/types/api';

interface LocalTestimonial {
  imageSrc: typeof Testimonial1;
  name: string;
  title: string;
  quote: string;
}

// Fallback testimonial data if API fails
const fallbackTestimonialData: LocalTestimonial[] = [
  {
    imageSrc: Testimonial1,
    name: "John Doe",
    title: "Innovation Lab Lead, Coordinator",
    quote: "Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque facilisis sed ac viverra tellus elit. Laoreet auctor pellentesque tempus vitae suspendisse potenti. Vivamus ut non mi pulvinar."
  },
  {
    imageSrc: Testimonial1,
    name: "Jane Smith",
    title: "Startup Founder, Program Alumnus",
    quote: "The mentorship and resources provided were invaluable. The Innovation Lab truly helped bring my vision to life and connect with like-minded individuals."
  },
  {
    imageSrc: Testimonial1,
    name: "Alex Johnson",
    title: "Industry Partner",
    quote: "Collaborating with the Innovation Lab has been a fantastic experience, bridging the gap between academia and real-world industry challenges effectively."
  },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await apiService.getTestimonials();
        setTestimonials(response.data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Render testimonials from API or fallback data
  const renderTestimonials = () => {
    if (testimonials.length > 0) {
      return testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              {testimonial.image_uri ? (
                <Image 
                  src={testimonial.image_uri} 
                  alt={testimonial.name} 
                  layout="fill" 
                  objectFit="cover" 
                />
              ) : (
                <Image 
                  src={Testimonial1} 
                  alt={testimonial.name} 
                  layout="fill" 
                  objectFit="cover" 
                />
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-blue-600">
                {testimonial.designation || ''}
                {testimonial.designation && testimonial.organization && ', '}
                {testimonial.organization || ''}
              </p>
            </div>
          </div>
          <p className="text-gray-600 italic leading-relaxed text-sm">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>
      ));
    } else {
      return fallbackTestimonialData.map((testimonial, index) => (
        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image 
                src={testimonial.imageSrc} 
                alt={testimonial.name} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-blue-600">{testimonial.title}</p>
            </div>
          </div>
          <p className="text-gray-600 italic leading-relaxed text-sm">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>
      ));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">What People Say About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from participants, partners, and community members about their experiences with Innovation Lab.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderTestimonials()}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection; 