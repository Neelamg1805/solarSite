import React from 'react';

interface Certification {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'IndianOil',
    logo: 'https://via.placeholder.com/150x80/FF6600/FFFFFF?text=IndianOil',
    alt: 'IndianOil Logo',
  },
  {
    id: '2',
    name: 'NTPC',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=NTPC',
    alt: 'NTPC Logo',
  },
  {
    id: '3',
    name: 'BRAITHWAITE',
    logo: 'https://via.placeholder.com/150x80/000000/FFFFFF?text=BRAITHWAITE',
    alt: 'Braithwaite Logo',
  },
  {
    id: '4',
    name: 'CII',
    logo: 'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=CII',
    alt: 'CII Logo',
  },
];

const isoCertifications = [
  { id: '1', name: 'ISO 9001: 2015' },
  { id: '2', name: 'ISO 14001: 2015' },
  { id: '3', name: 'ISO 45001: 2018' },
  { id: '4', name: 'ISO 50001: 2018' },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section>
      <div>
        {/* Section Title */}
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Empanelment and certifications
        </h2> */}

        {/* Certification Logos */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-32"
            >
              <img
                src={cert.logo}
                alt={cert.alt}
                className="max-w-full max-h-20 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}

        {/* ISO Certifications */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isoCertifications.map((iso) => (
            <div
              key={iso.id}
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-gray-900 font-semibold text-lg">{iso.name}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

