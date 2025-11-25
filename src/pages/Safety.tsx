import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export const Safety: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const safetyImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  ];

  const safetyFundamentals = [
    'Permit to work',
    'Excavation',
    'Motorized Vehicles',
    'Management of Change',
    'Working at heights',
    'Tool Box Talk',
    'Lockout and Tag out',
    'Confined space entry in special situations',
  ];

  const complianceDocuments = [
    'Structural Stability Certification',
    'Erection all-risk policy',
    'Employees\' State Insurance Corporation (ESIC) policy',
    'Medical fitness certification of all workers',
    'Fit to work on heights certification',
    'Contract Labor License (If more than 20 workers)',
  ];

  return (
    <div>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full">
            {/* Left Side - Workers Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Safety workers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right Side - Safety Equipment */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Safety equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">Safety</h1>
          </div>
        </div>

        {/* Geometric Overlays */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 opacity-20 transform rotate-45 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-800 opacity-20 transform rotate-45 translate-x-20 translate-y-20"></div>
      </section>

      {/* Our Commitment to Safety Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Safety commitment"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Commitment to Safety
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Sunvatsa Energy, safety is our top priority during all{' '}
                  <span className="text-orange-500 font-semibold">solar installations</span>. 
                  We conduct real-time assessment and implement safe practices to ensure the 
                  well-being of our team and partners. Our commitment extends to{' '}
                  <span className="text-orange-500 font-semibold">rooftop solar</span> projects, 
                  where we maintain the highest safety standards.
                </p>
                <p>
                  Our <span className="text-orange-500 font-semibold">team</span> is equipped 
                  with personal protective equipment (PPE) and undergoes regular safety training. 
                  We work closely with our <span className="text-orange-500 font-semibold">partners</span> 
                  to ensure compliance with all safety regulations and best practices in the industry.
                </p>
                <p>
                  For rooftop solar installations, we implement strict safety procedures, including 
                  medical checkups for our installation team and compliance with onsite installation 
                  standards. Our comprehensive safety protocols ensure that every project is completed 
                  safely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Fundamentals Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Safety Fundamentals */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sunvatsa's safety fundamentals apply to operations with specific conditions and requirements.
              </h2>
              
              <ul className="space-y-4">
                {safetyFundamentals.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Compliance Documents */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Compliance documents must be completed and approved before starting projects.
              </h2>
              
              <ul className="space-y-4">
                {complianceDocuments.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Water Leakage Test Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Roof Water Leakage Test:
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This method assesses the resistance of exterior metal roof panel systems to water 
                  penetration when water is applied to the outer surface. It applies to any pitched 
                  roof and focuses on detecting water penetration related to the roof field, including 
                  structural connections.
                </p>
                <p>
                  During the test, the roof's exterior is evenly sprayed with water at a rate of 200 
                  liters per square meter per hour for 15 minutes. The interior is then inspected, 
                  and the results are documented in the format provided below.
                </p>
              </div>

              {/* Test Checklist */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Date</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Site</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Roof Attachment System</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Roof Type</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Roof water leakage test"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Images Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety in Action
            </h2>
            <p className="text-lg text-gray-600">
              Our team follows strict safety protocols on every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Safety practice ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {safetyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? 'bg-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
              Smartest Way to Generate Electricity
            </h2>
            <a
              href="/contact"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

