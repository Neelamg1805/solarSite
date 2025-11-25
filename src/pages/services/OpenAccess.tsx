import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { ScrollToTop } from '../../components/ScrollToTop';

const serviceMenuItems = [
  { label: 'Open Access Solutions through Off-Site Installations', path: '/services/open-access', active: true },
  { label: 'Solar Installation', path: '/services/installation' },
  { label: 'Operations & Maintenance', path: '/services/maintenance' },
  { label: 'Solar Plant Audit', path: '/services/audit' },
  { label: 'Green Ammonia & Hydrogen', path: '/services/green-energy' },
  { label: 'Project Management & Consultancy', path: '/services/consultancy' },
];

export const OpenAccess: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Open Access Solar Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">OPEN ACCESS PARKS</h1>
            <p className="text-xl md:text-2xl text-white">Helping you save energy and keep the lights on</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Service Menu */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                <nav className="space-y-2">
                  {serviceMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <svg
                          className={`w-4 h-4 ${location.pathname === item.path ? 'text-white' : 'text-orange-500'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Hero Content Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left - Orange CTA Block */}
                <div className="bg-orange-500 rounded-lg p-8 md:p-12 flex flex-col justify-between text-white">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Renewable & Solar Panel Solutions
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                      Solar Open Access Installation Services At Your Door Step
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Right - Main Heading */}
                <div className="flex items-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Open Access Solutions through Off-Site Installations
                  </h2>
                </div>
              </div>

              {/* Why Should I Opt for Open Access */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why should I opt for Open Access?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Corporates are increasingly sourcing power from{' '}
                  <span className="text-orange-500 font-semibold">renewable energy</span> due to 
                  global commitments like RE100. While{' '}
                  <span className="text-orange-500 font-semibold">rooftop or distributed solar</span> 
                  is a great starting point, many clients lack sufficient space to{' '}
                  <span className="text-orange-500 font-semibold">install a power plant</span> for 
                  their full energy needs.
                </p>
              </div>

              {/* How Can I Do It */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  How can I do it?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-orange-500 font-semibold">Grid-connected or 'Open Access' 
                  solar power through offsite Solar Farms</span> is the solution for large-scale power 
                  needs (up to 100%). Through a{' '}
                  <span className="text-orange-500 font-semibold">Long Term Power Purchase Agreement 
                  (typically 10-25 Years)</span>, the developer injects power from{' '}
                  <span className="text-orange-500 font-semibold">Solar / Solar+Wind hybrid parks</span> 
                  and it's offset against client consumption from local DISCOM.
                </p>
              </div>

              {/* Types of Open Access Projects */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Types of Open Access projects?
                </h3>

                <div className="space-y-6">
                  {/* Third Party Open Access */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Third Party Open Access
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is a Power Sale model where the developer sells power to the consumer 
                      through a Power Purchase Agreement (PPA). The consumer benefits from lower 
                      tariffs without any upfront investment.
                    </p>
                  </div>

                  {/* Captive Open Access */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Captive Open Access
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In this model, the consumer invests in the solar project, and Sunvatsa provides 
                      comprehensive support including{' '}
                      <span className="text-orange-500 font-semibold">Operations and Maintenance</span>. 
                      The consumer owns the asset and benefits from maximum savings.
                    </p>
                  </div>

                  {/* Group Captive Open Access */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      Group Captive Open Access
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is a variant of the Captive Model where multiple corporate buyers come 
                      together to form a Special Purpose Vehicle (SPV). Each participant holds equity 
                      in proportion to their power consumption, typically 26% equity for 51% power 
                      consumption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits of Open Access */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Benefits of Open Access?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sourcing{' '}
                  <span className="text-orange-500 font-semibold">renewable energy achieves</span> 
                  substantial savings on power cost, offsets carbon emissions, and provides lower 
                  tariffs (30-50% less than grid rates) for 20-25 years. It's an ideal solution for 
                  businesses committed to sustainability and cost reduction.
                </p>
              </div>

              {/* Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Solar installation worker"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Solar panel installation"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
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

