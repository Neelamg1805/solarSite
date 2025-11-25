import React from 'react';

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  title = 'Investing in a Better Future',
  subtitle = 'Leading Solar Energy Solutions',
}) => {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Solar panels on building"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Logo Overlay */}
            <div className="mb-8 opacity-90">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-yellow-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
                    Sunvatsa
                  </h1>
                  <p className="text-sm md:text-base text-yellow-300 font-medium">
                    {title}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              Transform your energy future with innovative solar solutions. 
              Join thousands of satisfied customers who have made the switch to clean, renewable energy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Quote
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
