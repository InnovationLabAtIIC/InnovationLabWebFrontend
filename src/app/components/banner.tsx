import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { Typography } from '@/components/ui';

interface ScatteredImage {
  src: string;
  style: string;
  tape: string;
  tapePos: string;
}

interface HeroApiResponse {
  id: string;
  url: string;
  type: string;
  title: string;
  subTitle: string;
  caption: string;
  current: boolean;
  version: number;
  parentId: string | null;
  createdAt: string;
  scheduledStart: string | null;
  scheduledEnd: string | null;
}

// Fallback images in case API fails
const fallbackImages: ScatteredImage[] = [
  // Top left
  { src: '/image.png', style: 'top-[20px] left-[5vw] md:top-[70px] md:left-[111px] rotate-[8deg]', tape: 'bg-yellow-400', tapePos: 'top-0 left-0' },
  // Top center left
  { src: '/image.png', style: 'top-[10px] left-[35vw] md:top-[150px] md:left-[231px] rotate-[-12deg]', tape: 'bg-purple-500', tapePos: 'top-0 right-0' },
  // Top center right
  { src: '/image.png', style: 'top-[10px] right-[35vw] md:top-[70px] md:right-[231px] rotate-[12deg]', tape: 'bg-orange-500', tapePos: 'top-0 left-0' },
  // Top right
  { src: '/image.png', style: 'top-[20px] right-[5vw] md:top-[150px] md:right-[111px] rotate-[-8deg]', tape: 'bg-purple-500', tapePos: 'top-0 left-0' },
  // Bottom left
  { src: '/image.png', style: 'bottom-[80px] left-[10vw] md:bottom-[190px] md:left-[111px] rotate-[13deg]', tape: 'bg-red-500', tapePos: 'top-0 left-0' },
  // Bottom right
  { src: '/image.png', style: 'bottom-[80px] right-[10vw] md:bottom-[190px] md:right-[111px] rotate-[13deg]', tape: 'bg-green-500', tapePos: 'top-0 left-0' },
  // Bottom center left
  { src: '/image.png', style: 'bottom-[10vh] left-[28vw] md:top-[670px] md:left-[570px] rotate-[-15deg]', tape: 'bg-yellow-400', tapePos: 'top-0 left-0' },
  // Bottom center right
  { src: '/image.png', style: 'bottom-[10vh] right-[28vw] md:top-[710px] md:left-[720px] rotate-[15deg]', tape: 'bg-purple-500', tapePos: 'top-0 right-0' },
];

const Hero: FC = () => {
  const [scatteredImages, setScatteredImages] = useState<ScatteredImage[]>(fallbackImages);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        console.log('Fetching from:', `${apiUrl}/api/v1/Banner`);
        
        const response = await fetch(`${apiUrl}/api/v1/Banner`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: HeroApiResponse[] = await response.json();
        console.log('API Response:', data);
        
        // Find the current banner or use the first one
        const currentBanner = data.find(banner => banner.current) || data[0];
        console.log('Selected banner:', currentBanner);
        
        // Use the API image URL to create scattered images with the same positioning
        if (currentBanner && currentBanner.url) {
          const apiImages: ScatteredImage[] = fallbackImages.map((fallbackImg, index) => ({
            ...fallbackImg,
            src: currentBanner.url // Use the API image URL for all scattered images
          }));
          console.log('Created scattered images:', apiImages);
          setScatteredImages(apiImages);
        } else {
          console.warn('API returned invalid data, using fallback images');
          setScatteredImages(fallbackImages);
        }
      } catch (err) {
        console.error('Error fetching hero images:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch images');
        setScatteredImages(fallbackImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  return (
    // Wrapping the Hero section with a white background
    <div className="bg-white">
      <section 
        className="relative min-h-[110vh] flex flex-col items-center justify-center bg-[#2346a0] overflow-hidden px-4 md:px-[131px]"
        aria-label="Hero section"
      >
        {/* Scattered Images Container */}
        <div className="absolute inset-0" aria-hidden="true">
          {!isLoading && scatteredImages.map((img, index) => (
            <div
              key={`scattered-image-${index}`}
              className={`absolute w-[120px] h-[140px] md:w-[177px] md:h-[200px] ${img.style} z-10`}
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            >
              <div 
                className={`absolute w-5 h-5 md:w-7 md:h-7 ${img.tape} rounded-sm ${img.tapePos} -translate-y-1/2 -translate-x-1/2 z-20`}
                aria-hidden="true"
              />
              <Image
                src={img.src}
                alt={`Decorative image ${index + 1}`}
                fill
                className="object-cover rounded-xl border-4 border-white"
                priority={index < 2}
                onLoad={() => console.log(`Image ${index + 1} loaded:`, img.src)}
                onError={(e) => console.error(`Image ${index + 1} failed to load:`, img.src, e)}
              />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center text-center mx-auto max-w-screen-lg px-2 md:px-4 -translate-y-5 transform">
          <div className="space-y-6">
            <Typography 
              variant="overline" 
              color="white" 
              weight="semibold"
              className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full inline-block shadow"
              animated
            >
              Where Ideas Get Shape
            </Typography>
            
            <header className="space-y-4">
              <Typography 
                variant="h1" 
                color="white" 
                weight="bold"
                align="center"
                animated
                className="leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
              >
                Empowering the Next{' '}
                <span className="block">Generations of Innovators.</span>
              </Typography>
            </header>

            <div className="mt-8">
              <button 
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base"
                type="button"
                aria-label="Explore our programs"
              >
                <Typography 
                  variant="button" 
                  color="white" 
                  weight="semibold"
                  className="flex items-center justify-center"
                >
                  Explore Programs &rarr;
                </Typography>
              </button>
            </div>
          </div>
        </div>

        {/* V-shaped bottom decoration */}
        <div className="absolute left-0 right-0 bottom-0 w-full h-[80px] md:h-[120px] pointer-events-none z-30">
          <svg width="100%" height="100%" viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-full">
            {/* Updated fill color to white */}
            <polygon points="0,0 500,120 1000,0 1000,120 0,120" fill="white" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;
