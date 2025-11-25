import React, { useState } from 'react';
import solarPanelImage from '../../public/beautiful-alternative-energy-plant-with-solar-panels (1).jpg';
import solarPanelImage2 from '../../public/solar-panels-2458717_640.jpg';
import solarPanelImage3 from '../../public/panel-9864247_640.webp';
import solarPanelImage4 from '../../public/panel-6816102_640.jpg';
import solarPanelImage5 from '../../public/solar-panels-2458717_640.jpg';
import solarPanelImage6 from '../../public/photovoltaic-system-2742302_1280.jpg';
import solarPanelImage7 from '../../public/energy-139366_640.jpg';
import solarPanelImage8 from '../../public/photovoltaic-2138992_1280.jpg';

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Solar Canopy Installation',
    imageUrl: solarPanelImage,
    description: 'Solar panels installed as canopies over parking area',
  },
  {
    id: '2',
    title: 'Rooftop Solar Array',
    imageUrl: solarPanelImage2,
    description: 'Solar panels on corrugated metal rooftop',
  },
  {
    id: '3',
    title: 'Ground-Mounted Solar Farm',
    imageUrl: solarPanelImage3,
    description: 'Ground-mounted solar array in open field',
  },
  {
    id: '4',
    title: 'Large Scale Solar Farm',
    imageUrl: solarPanelImage4,
    description: 'Vast solar farm with numerous rows of panels',
  },
  {
    id: '5',
    title: 'Industrial Solar Installation',
    imageUrl: solarPanelImage5,
    description: 'Large-scale industrial solar project',
  },
  {
    id: '6',
    title: 'Residential Solar Setup',
    imageUrl: solarPanelImage6,
    description: 'Modern residential solar panel installation',
  },
  {
    id: '7',
    title: 'Commercial Rooftop Project',
    imageUrl: solarPanelImage7,
    description: 'Large commercial building with solar panels',
  },
  {
    id: '8',
    title: 'Solar Park Development',
    imageUrl: solarPanelImage8,
    description: 'Extensive solar park with multiple arrays',
  },
];

export const ProjectsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerView);

  const handleNext = () => {
    if (startIndex + itemsPerView < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setStartIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Horizontal Line and Label */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <span className="mx-4 text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              OUR COMPANY'S RECENT SOLAR PROJECTS
            </span>
            <div className="w-16 h-0.5 bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Case Studies
          </h2>

          {/* More Detail Button */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            More Detail
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
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerView >= projects.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 h-64 md:h-80">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    {project.description && (
                      <p className="text-sm text-gray-200">{project.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: Math.min(5, projects.length - itemsPerView + 1) }).map((_, index) => {
            const slideIndex = index;
            const isActive = slideIndex === Math.floor(startIndex / 1);
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

