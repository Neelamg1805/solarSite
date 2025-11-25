import React from 'react';
import benefitsImage from '../../public/photovoltaic-2138992_1280.jpg';

const benefits = [
  'Discover the Benefits of Solar Panel Solutions',
  'Why Solar Panels Are Worth Your Investment',
  'Transform Your Energy Usage with Solar Benefits',
  'Best Solar Panel Company in India',
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-1 bg-yellow-400 rounded"></div>
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                OUR BENEFITS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Choose Sunvatsa Energy for Your Solar Solution?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Going solar delivers multiple benefits which include reduced electric bills as well as 
              environmental preservation value and self-sufficiency from power supply.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-900"
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
                  <span className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={benefitsImage}
                alt="Industrial solar installation"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={benefitsImage}
                alt="Rooftop solar panels"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

