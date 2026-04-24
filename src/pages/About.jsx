import React from 'react';

// Import Sections
import AboutOverview from '../components/sections/AboutOverview';
import VisionMission from '../components/sections/VisionMission';
import CoreValues from '../components/sections/CoreValues';
import HowItWorks from '../components/sections/HowItWorks';


const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-40 lg:pb-24 text-white relative overflow-hidden">
        {/* Advanced Background Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent skew-x-12 transform translate-x-32 hidden lg:block animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] border border-white/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] border-[1px] border-accent/40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-custom px-6 relative z-10">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-3" data-aos="fade-up">Established 2025</h4>
            <h1 className="text-3xl lg:text-6xl font-black mb-4 lg:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Defining the <span className="text-gradient-light">Future of Audit</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-medium max-w-xl" data-aos="fade-up" data-aos-delay="200">
              We are a team of precision-focused experts redefining inventory management through automation, integrity, and absolute transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <AboutOverview />


      {/* Vision & Mission */}
      <VisionMission />

      {/* Core Values */}
      <CoreValues />

      {/* How It Works */}
      <HowItWorks />
    </div>
  );
};

export default About;
