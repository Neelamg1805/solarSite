import React from 'react';
import { Hero } from '../components/Hero';
import { IntroductionSection } from '../components/IntroductionSection';
import { ServicesSection } from '../../public/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { ClienteleSection } from '../components/ClienteleSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export const Home: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Hero
        title="INVESTING IN A BETTER FUTURE"
        subtitle="Leading Solar Energy Solutions"
        backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Introduction Section */}
      <IntroductionSection
        imageUrl="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Clientele Section */}
      <ClienteleSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

