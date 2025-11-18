import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const coreValues = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safety',
    description: 'Safety is core value over which no business objective can have a higher priority.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Care',
    description: 'Care for Stakeholders, our Environment, Customers and Stakeholders- Both existing and potential, our community and our people (our employees and partners).',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Agility',
    description: 'Speed, Responsiveness and being Proactive, achieved through Collaboration and Empowering Employees.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learning',
    description: 'Building future ready skill sets through learning & training. Maximize usage of e-learning platform.',
  },
];

const hexagonValues = [
  { label: 'TRUST', icon: '🤝' },
  { label: 'CREATIVITY', icon: '💡' },
  { label: 'TEAMWORK', icon: '👥' },
  { label: 'GOALS', icon: '🎯' },
  { label: 'GROWTH', icon: '📈' },
  { label: 'RESPONSIBILITY', icon: '⚖️' },
];

export const About: React.FC = () => {
  return (
    <div>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About Solluz Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Hexagonal Values Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {hexagonValues.map((value, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-900/80 backdrop-blur-sm border-2 border-orange-500/50 flex flex-col items-center justify-center text-white transition-all duration-300 group-hover:bg-orange-500/90 group-hover:border-orange-400 group-hover:scale-110">
                  <span className="text-2xl md:text-3xl mb-1">{value.icon}</span>
                  <span className="text-xs md:text-sm font-semibold text-center px-2">{value.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center z-10">
            Vision Mission & Values
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Solluz Energy
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At Solluz Energy, we are dedicated to sustainable energy solutions, empowering businesses 
            and communities towards a carbon-neutral future. Our commitment to{' '}
            <span className="text-orange-500 font-semibold">solar power technologies</span> drives 
            innovation and excellence in every project we undertake.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Vision
          </h2>
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
            "To be a global leader in sustainable energy solutions, driving the transition towards a 
            carbon-neutral future through innovative solar power technologies and responsible engineering practices."
          </blockquote>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We envision a world where clean, renewable energy is accessible to everyone, creating a 
            sustainable future for generations to come. Our{' '}
            <span className="text-orange-500 font-semibold">team</span> of experts is passionate 
            about harnessing the power of the sun to provide efficient, reliable energy solutions 
            that contribute to a healthier planet.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Our Mission
          </h2>
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic text-center mb-12">
            "To deliver cost-effective and reliable solar power systems while maintaining the highest 
            standards of safety, quality, and sustainability, thereby contributing to the global clean 
            energy transition."
          </blockquote>

          <div className="space-y-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Provide Cost-Effective Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the importance of affordability in energy solutions. Our systems are 
                designed to deliver maximum value while minimizing costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ensure Reliability
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our solar power systems are built to last, ensuring consistent energy production and 
                performance over time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Commit to Safety and Quality
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We adhere to the highest standards in safety and quality control, ensuring that our 
                systems not only perform efficiently but are also safe for our clients and the environment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Promote Sustainability
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our practices prioritize environmental responsibility, helping to reduce carbon footprints 
                and promote a cleaner, greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Us in the Clean Energy Revolution
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As we continue to innovate and expand our offerings, we invite you to join us on this 
            journey towards a sustainable energy future. Together, we can make a significant impact 
            on the global clean energy transition.
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

