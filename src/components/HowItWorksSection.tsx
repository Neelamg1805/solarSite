import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  cta?: {
    text: string;
    link: string;
  };
  position: 'left' | 'right';
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Free in-home consultation',
    description:
      'A SolarSquare consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.',
    icon: (
      <div className="relative">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <svg className="w-6 h-6 absolute -bottom-1 -right-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>
    ),
    cta: {
      text: 'Schedule a free consultation',
      link: '#contact',
    },
    position: 'left',
  },
  {
    id: 2,
    title: 'Personalised solar proposal & dedicated manager',
    description:
      'Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project.',
    icon: (
      <div className="relative">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <svg className="w-5 h-5 absolute -top-1 -right-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
    position: 'right',
  },
  {
    id: 3,
    title: 'Paperwork and subsidy assistance',
    description:
      'End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.',
    icon: (
      <div className="relative">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <svg className="w-5 h-5 absolute -top-1 -right-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      </div>
    ),
    position: 'left',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The solar switch made simple
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Switching to solar can seem daunting, but we've got you covered. Here's how it works
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  step.position === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    step.position === 'left' ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}
                >
                  <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-blue-700/50">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>
                    {step.cta && (
                      <a
                        href={step.cta.link}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 hover:bg-blue-300 text-blue-900 font-semibold rounded-lg transition-colors duration-300"
                      >
                        {step.cta.text}
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
                    )}
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full border-4 border-blue-900 z-10">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-blue-400">
                    {step.icon}
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden mb-6 flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full border-4 border-blue-900">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-blue-400">
                    {step.icon}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

