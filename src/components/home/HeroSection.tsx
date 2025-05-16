'use client';

import { useState, useEffect } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import HeroImage1 from '../../placeholder-hero-1.jpeg';
import { apiService } from '@/services/api';
import { Banner } from '@/types/api';

// Placeholder for arrow icon
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

interface CollageImage {
  src: string | StaticImageData;
  alt: string;
  position: string;
}

const HeroSection = () => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await apiService.getHeroBanner();
        setBanner(response.data);
      } catch (err) {
        console.error('Error fetching banner:', err);
        setError('Failed to load banner');
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const placeholderImages: CollageImage[] = [
    { src: HeroImage1, alt: "Students collaborating", position: "top-10 left-10 md:left-20 lg:left-32" },
    { src: HeroImage1, alt: "Team meeting", position: "top-20 right-10 md:right-20 lg:right-32" },
    { src: HeroImage1, alt: "Student presenting", position: "bottom-12 left-16 md:left-32 lg:left-48" },
    { src: HeroImage1, alt: "Innovative workspace", position: "bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2" },
    { src: HeroImage1, alt: "Group discussion", position: "bottom-16 right-16 md:right-32 lg:right-48" },
  ];

  return (
    <section className="relative bg-blue-800 text-white py-20 md:py-32 overflow-hidden min-h-[70vh] md:min-h-[80vh]">
      {/* Striped Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0" style={{ left: `${i * 10}%`, width: '5%', background: 'rgba(255, 255, 255, 0.1)' }}></div>
        ))}
      </div>

      {/* Banner from API if video type */}
      {!loading && banner && banner.type === 'video' && (
        <div className="absolute inset-0 z-0">
          <video
            src={banner.url}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Images - Positioned around the pentagon */}
      {placeholderImages.map((img, index) => (
        <div key={index} className={`absolute z-10 w-32 h-40 md:w-40 md:h-56 lg:w-48 lg:h-64 ${img.position} bg-white p-1 shadow-xl rounded-lg`}>
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            placeholder={typeof img.src === 'string' ? undefined : 'blur'}
          />
        </div>
      ))}

      {/* Foreground content - Pentagon Shaped */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center justify-center h-full"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <div className="py-8 md:py-12">
          <div className="inline-block bg-yellow-400 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Where Ideas Get Shape
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {banner?.title || "Empowering the Next"}<br />
            {banner?.subtitle || "Generations of Innovators."}
          </h1>
          {banner?.caption && (
            <p className="text-lg mb-6 max-w-lg mx-auto">{banner.caption}</p>
          )}
          <Link href="/programs" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300">
            Explore Programs
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 