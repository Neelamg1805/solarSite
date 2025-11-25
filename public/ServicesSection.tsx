import React from 'react';''
const openAccessImage = '/photovoltaic-2138992_1280.jpg';
const installationImage = '/solar-panel-7518786_640.jpg';
const maintenanceImage = '/panel-6816102_640.jpg';
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    id: 'open-access',
    title: 'Open Access Solar',
    description:
      'Under Open Access, Solar business operators can directly receive renewable power produced by their source. The system offers additional benefits to businesses while reducing costs and providing a cleaner energy solution.',
    imageUrl: openAccessImage,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 'installation',
    title: 'Solar Installation',
    description:
      'The company provides comprehensive installations of solar panel systems to all its customers. The components operate optimally for industrial and business applications, which produce outstanding operational results and efficiency.',
    imageUrl: installationImage,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
        />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    title: 'Operations & Maintenance',
    description:
      'A skilled team under our organization delivers comprehensive operations and maintenance (O&M) services. Our organization enhances the operational longevity of solar energy systems and boosts their robustness.',
    imageUrl: maintenanceImage,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 "  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm md:text-base font-semibold text-orange-500 uppercase tracking-wider">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Our Across India Solar Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Orange Icon Overlay */}
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                {/* Orange Line */}
                <div className="w-12 h-1 bg-orange-500 rounded mb-4"></div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

