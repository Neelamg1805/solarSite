import React, { useState, useEffect } from 'react';

interface Client {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'TB',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=TB',
    alt: 'TB Logo',
  },
  {
    id: '2',
    name: 'PATH',
    logo: 'https://via.placeholder.com/150x80/000000/FFFFFF?text=PATH',
    alt: 'PATH Logo',
  },
  {
    id: '3',
    name: 'RITES',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=RITES',
    alt: 'RITES Logo',
  },
  {
    id: '4',
    name: 'NTPC',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=NTPC',
    alt: 'NTPC Logo',
  },
  {
    id: '5',
    name: 'NBCC',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=NBCC',
    alt: 'NBCC Logo',
  },
  {
    id: '6',
    name: 'BHEL',
    logo: 'https://via.placeholder.com/150x80/FF6B00/FFFFFF?text=BHEL',
    alt: 'BHEL Logo',
  },
  {
    id: '7',
    name: 'IOCL',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=IOCL',
    alt: 'IOCL Logo',
  },
];

export const ClienteleSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const calculateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    calculateItemsPerView();
    const handleResize = () => {
      calculateItemsPerView();
      setCurrentIndex(0); // Reset index on resize to prevent issues
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, clients.length - itemsPerView);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      const maxIndex = Math.max(0, clients.length - itemsPerView);
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-orange-500 rounded"></div>
            <span className="mx-3 text-sm md:text-base font-semibold text-orange-500 uppercase tracking-wider">
              OUR CLIENTELE
            </span>
            <div className="w-12 h-1 bg-orange-500 rounded"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            We are proud to partner with leading organizations across various sectors, delivering 
            sustainable solar energy solutions that drive success.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Previous clients"
          >
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Next clients"
          >
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center px-8 md:px-12">
            {visibleClients.map((client) => (
              <div
                key={client.id}
                className="group relative flex items-center justify-center p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-32 md:h-40 border border-gray-100 hover:border-orange-200"
              >
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Logo */}
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="relative z-10 max-w-full max-h-16 md:max-h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Orange Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-10">
          {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => {
            const dotIndex = Math.floor(currentIndex / itemsPerView);
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`rounded-full transition-all duration-300 ${
                  dotIndex === index
                    ? 'bg-orange-500 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-orange-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-500">100+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-500">150+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Projects Completed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-500">12+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

