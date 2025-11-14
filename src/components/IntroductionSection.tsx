import React from 'react';

interface IntroductionSectionProps {
  imageUrl?: string;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  imageUrl = 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
}) => {
  const features = [
    "India's Leading Renewable Energy Company",
    "Sustainable Energy Solutions for a Greener Tomorrow",
    "Transforming Renewable Energy with Solar Power",
    "Best Solar EPC Companies in India",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Solar panels on rooftop"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              {/* Orange Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl max-w-[180px]">
                <div className="text-4xl md:text-5xl font-bold mb-1">12+</div>
                <div className="text-sm md:text-base font-medium">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Orange Line and Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-1 bg-orange-500 rounded"></div>
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                OUR INTRODUCTION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Solar Panel Company in India
            </h2>

            {/* Feature List with Icons */}
            <ul className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Description Paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
              Solluz Energy is a top player in the Indian solar panel business, offering sustainable 
              energy solutions that help create a greener tomorrow. We provide top-tier installation 
              and maintenance services, transforming renewable energy with solar power. As one of the 
              best Solar EPC companies in India, we are committed to ecological progress and helping 
              businesses and individuals make the switch to clean energy.
            </p>

            {/* CTA Button and Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Have any questions?</div>
                  <a
                    href="tel:+917827110601"
                    className="text-base md:text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                  >
                    +91-7827110601
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

