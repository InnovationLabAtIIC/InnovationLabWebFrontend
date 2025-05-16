import Image from 'next/image';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.855 3.291A1.125 1.125 0 019 15.534V8.466c0-.863.934-1.419 1.669-.983l5.856 3.291z" clipRule="evenodd" />
  </svg>
);

const eventHighlightsData = [
  {
    thumbnailSrc: "/placeholder-highlight-1.jpg",
    videoUrl: "#", 
    altText: "Highlight from past event 1"
  },
  {
    thumbnailSrc: "/placeholder-highlight-2.jpg",
    videoUrl: "#",
    altText: "Highlight from past event 2"
  },
  {
    thumbnailSrc: "/placeholder-highlight-3.jpg",
    videoUrl: "#",
    altText: "Highlight from past event 3"
  },
];

const EventHighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Event Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments from our innovative events and take a glimpse at our past and upcoming events that bring innovation to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {eventHighlightsData.map((highlight, index) => (
            <a
              key={index}
              href={highlight.videoUrl}
              target="_blank" //
              rel="noopener noreferrer"
              className="relative block w-full h-64 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image src={highlight.thumbnailSrc} alt={highlight.altText} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <PlayIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightsSection; 