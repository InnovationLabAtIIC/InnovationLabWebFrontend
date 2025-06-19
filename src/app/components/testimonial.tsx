import React from 'react';
import Image from 'next/image';
import Typography from '@/components/ui/Typography'; // Import Typography component

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
     {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
     {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
     {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
  {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
    {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
     {
      image: '/santosh.jpeg',
      name: 'Santosh Parajuli',
      title: 'Innovation Lab Lead, Coordinator',
      text: '"Lorem ipsum dolor sit amet consectetur. Malesuada sed pretium cursus arcu gravida ac cras neque. Sed morbi neque pharetra tempus vitae suspendisse vulputate posuere. Laoreet auctor pellentesque gravida sed fermentum. Vivamus sit non mi pulvinar."',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Typography variant="h4" weight="bold" className="!text-gray-800 mb-2">What People Say About Us</Typography>
          <Typography variant="body1" className="!text-gray-700">Hear from participants, partners, and community members about their experiences with Innovation Lab.</Typography>
        </div>
        <div className="flex justify-center">
          <div className="flex overflow-x-auto space-x-8 pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.image} alt={testimonial.name} layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <Typography variant="h5" weight="bold" className="!text-gray-800">{testimonial.name}</Typography>
                    <Typography variant="body2" className="!text-gray-600">{testimonial.title}</Typography>
                  </div>
                </div>
                <Typography variant="body2" className="!text-gray-700 text-sm italic">{testimonial.text}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 