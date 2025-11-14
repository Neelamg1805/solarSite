import React, { useState } from 'react';

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
];

export const ClienteleSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  const handleNext = () => {
    if (currentIndex + itemsPerView < clients.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Our Clientele
        </h2>

        {/* Client Logos */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerView >= clients.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center">
            {visibleClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-32"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-gray-900 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

