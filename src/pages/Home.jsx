import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/hero_audit.png';

// Import Sections
import AboutOverview from '../components/sections/AboutOverview';
import VisionMission from '../components/sections/VisionMission';
import CoreValues from '../components/sections/CoreValues';
import HowItWorks from '../components/sections/HowItWorks';
import FounderSection from '../components/sections/FounderSection';
import ServicesDetailed from '../components/sections/ServicesDetailed';
import ContactSection from '../components/sections/ContactSection';
import MapSection from '../components/sections/MapSection';

const Home = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const whyChooseUs = [
    "Automation-driven accuracy",
    "Expert audit team",
    "Industry compliance",
    "Fast turnaround"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="max-w-custom px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-5 lg:mb-6 leading-tight">
              Simplifying Inventory Audits with <span className="text-gradient">Accuracy & Automation</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 lg:mb-10 max-w-lg leading-relaxed">
              We help businesses streamline inventory, asset tracking, and compliance with expert audit solutions and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappUrl} className="btn-primary flex items-center gap-2 group py-3 px-6">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                Chat on WhatsApp
              </a>
              <a href="tel:7995147799" className="btn-secondary py-3 px-6">
                Call Now
              </a>
            </div>
          </div>
          <div className="hidden lg:block" data-aos="zoom-in">
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={heroImg} 
                alt="Audit in action" 
                className="relative rounded-[2rem] shadow-premium border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div data-aos="fade-right">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Why Businesses Trust <span className="text-accent">Audit Squad</span></h2>
            <div className="space-y-4 lg:space-y-5">
              {whyChooseUs.map((point, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-5 group">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 transform group-hover:rotate-6">
                    <CheckCircle2 className="text-accent group-hover:text-white" size={20} />
                  </div>
                  <span className="text-xl lg:text-2xl font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 lg:mt-10 p-6 lg:p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <p className="italic text-lg lg:text-xl text-gray-300 leading-relaxed">"We combine automation with expert audit insights to ensure your inventory is accurate, reliable, and compliant."</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:gap-8" data-aos="fade-left">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl text-center border border-white/10 hover:bg-white/20 transition-all">
                <h4 className="text-3xl lg:text-5xl font-bold mb-2 text-accent">99.9%</h4>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">Accuracy Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl text-center border border-white/10 hover:bg-white/20 transition-all">
                <h4 className="text-3xl lg:text-5xl font-bold mb-2 text-white">500+</h4>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">Audits Completed</p>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8 pt-12 lg:pt-16">
              <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl text-center border border-white/10 hover:bg-white/20 transition-all">
                <h4 className="text-3xl lg:text-5xl font-bold mb-2 text-white">100+</h4>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">Corporate Clients</p>
              </div>
              <div className="bg-secondary p-8 lg:p-10 rounded-2xl text-center shadow-xl transform hover:scale-105 transition-all">
                <h4 className="text-3xl lg:text-5xl font-bold mb-2 text-white">24/7</h4>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white/70">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Who We Are) */}
      <AboutOverview />

      {/* Detailed Services (from Services Page) */}
      <div className="bg-background-alt py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-custom px-6 text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 lg:mb-5">Our <span className="text-gradient">Premium Services</span></h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-xl mx-auto">Comprehensive audit and asset management solutions tailored for modern enterprises.</p>
        </div>
        <ServicesDetailed />
      </div>

      {/* Vision & Mission (from About Page) */}
      <VisionMission />

      {/* Core Values (from About Page) */}
      <CoreValues />

      {/* How It Works (Timeline from About Page) */}
      <HowItWorks />

      {/* Founder Section (from About Page) */}
      <FounderSection />

      {/* Contact Section (from Contact Page) */}
      <div id="contact-section">
        <ContactSection />
      </div>

      {/* Map Section (from Contact Page) */}
      <MapSection />

      {/* CTA Banner */}
      <section className="section-padding bg-accent/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary p-10 lg:p-16 rounded-[2rem] text-center text-white shadow-2xl relative overflow-hidden" data-aos="flip-up">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full blur-3xl -ml-24 -mb-24"></div>
          
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 relative z-10">Get your audit done quickly and accurately</h2>
          <p className="text-lg text-white/80 mb-8 lg:mb-10 max-w-xl mx-auto relative z-10">Ready to transform your inventory management? Our experts are just a click away.</p>
          <div className="flex justify-center relative z-10">
            <a href={whatsappUrl} className="btn-whatsapp px-8 py-4 text-lg">
              <MessageCircle size={24} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
