import React from 'react';
import { MessageCircle } from 'lucide-react';

// Import Sections
import ServicesDetailed from '../components/sections/ServicesDetailed';

const Services = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-40 lg:pb-24 text-white relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-custom px-6 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-3 lg:mb-4" data-aos="fade-up">Precision Tools</h4>
            <h1 className="text-3xl lg:text-7xl font-black mb-4 lg:mb-8 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Our <span className="text-gradient-light">Premium Solutions</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-medium max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              Advanced audit and verification services tailored to provide 100% accuracy and complete operational visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <ServicesDetailed />

      {/* Trust Banner */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-accent rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-secondary rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">Ready to Start Your Audit?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Join 100+ businesses that trust Audit Squad for their critical inventory and asset management needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <a href={whatsappUrl} className="btn-whatsapp text-lg px-8">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
            <a href="tel:7995147799" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              Call Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
