import React from 'react';

// Import Sections
import ContactSection from '../components/sections/ContactSection';
import MapSection from '../components/sections/MapSection';

const Contact = () => {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-40 lg:pb-24 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/15 to-transparent skew-x-12 transform translate-x-32 hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]"></div>
        
        <div className="max-w-custom px-6 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-3 lg:mb-4" data-aos="fade-up">Ready to Start?</h4>
            <h1 className="text-3xl lg:text-7xl font-black mb-4 lg:mb-8 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Let's <span className="text-gradient-light">Connect</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-medium max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              Whether you have a question or are ready to schedule your first audit, our team is standing by to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <MapSection />
    </div>
  );
};

export default Contact;
