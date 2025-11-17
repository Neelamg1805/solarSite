import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  type: string;
  imageUrl: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Sparsh Global School, Greater Noida (U.P.)',
    location: 'Greater Noida, Uttar Pradesh',
    capacity: '430 kWp',
    type: 'Rooftop Solar Project',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    title: 'Pasupati Spinning & Weaving Mills Ltd, Kala Amb, Himachal Pradesh.',
    location: 'Kala Amb, Himachal Pradesh',
    capacity: '2872.38 kWp',
    type: 'Solar Project',
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Satyug Darshan Trust, Faridabad, Haryana',
    location: 'Faridabad, Haryana',
    capacity: '500 kWp',
    type: 'Solar Project',
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'Airports Authority of India',
    location: 'Deoghar, Jharkhand',
    capacity: 'Carport + Rooftop',
    type: 'Solar Installation',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'GESL Spinners Pvt. Ltd.',
    location: 'Kanpur, Uttar Pradesh',
    capacity: 'RCC',
    type: 'Solar Installation',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '6',
    title: 'Kings International Ltd.',
    location: 'Deoghar, Jharkhand',
    capacity: 'Carport + Rooftop',
    type: 'Solar Installation',
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export const Projects: React.FC = () => {
  return (
    <div>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Solar Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl md:text-2xl text-white">Helping you save energy and keep the lights on</p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Video Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Capacity Badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {project.capacity}
                  </div>
                  {/* SOLLUZ Logo */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900">
                    SOLLUZ
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.capacity} {project.type}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Solluz Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
            Why Choose Solluz Energy for Your Solar Projects?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Expertise & Experience
                </h3>
                <p className="text-lg text-gray-700">
                  With <span className="font-bold">12 years of experience</span> in solar technology, 
                  we ensure <span className="font-bold">high-quality solutions</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Customised Solutions
                </h3>
                <p className="text-lg text-gray-700">
                  We design solar systems based on your <span className="font-bold">specific needs</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Reliable & Certified Products
                </h3>
                <p className="text-lg text-gray-700">
                  We use <span className="font-bold">top-tier solar panels</span> and equipment for 
                  long-lasting performance.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  End-to-End Services
                </h3>
                <p className="text-lg text-gray-700">
                  From <span className="text-orange-500 font-semibold">consultation</span> to{' '}
                  <span className="text-orange-500 font-semibold">maintenance</span>, we handle 
                  everything for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Affordable & Transparent Pricing
                </h3>
                <p className="text-lg text-gray-700">
                  Our <span className="font-bold">pricing is competitive</span>, with{' '}
                  <span className="font-bold">no hidden costs</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Solar Revolution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join the Solar Revolution Today!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Investing in solar projects is one of the <span className="font-bold">smartest choices</span> 
            you can make for a sustainable and <span className="font-bold">cost-effective</span> future. 
            At Solluz Energy, we are committed to providing <span className="font-bold">top-notch solar</span> 
            solutions that benefit both <span className="font-bold">individuals</span> and{' '}
            <span className="font-bold">businesses</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Let's build a greener world together! <span className="text-orange-500 font-semibold">Contact us</span> 
            today to start your <span className="font-bold">solar project journey</span>.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solluz Energy Solar Projects
            </h2>
            <p className="text-gray-600">Explore our projects across India and beyond</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1234567890123!2d77.1234567!3d28.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Solluz Energy Project Locations"
              className="w-full"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            This map was made with Google My Maps. Create your own.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
              Smartest Way to Generate Electricity
            </h2>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

