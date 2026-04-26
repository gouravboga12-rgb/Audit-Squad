import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle2, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_audit.png';

// Import Sections
import AboutOverview from '../components/sections/AboutOverview';
import VisionMission from '../components/sections/VisionMission';
import CoreValues from '../components/sections/CoreValues';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesDetailed from '../components/sections/ServicesDetailed';
import ContactSection from '../components/sections/ContactSection';
import MapSection from '../components/sections/MapSection';
import CareersOverview from '../components/sections/CareersOverview';

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

  const homeClients = [
    { name: "The Souled Store", image: "/assets/clients/souled_store.png" },
    { name: "PIAGGIO", image: "/assets/clients/piaggio.png" },
    { name: "BAJAJ", image: "/assets/clients/bajaj.png" },
    { name: "Royal Enfield", image: "/assets/clients/royal_enfield.png" },
    { name: "YAMAHA", image: "/assets/clients/yamaha.png" },
    { name: "HONDA", image: "/assets/clients/honda.png" },
    { name: "UK MULTI CROP", image: "/assets/clients/uk_multi_crop.png" },
    { name: "SUPERKICKS", image: "/assets/clients/superkicks.png" },
    { name: "Soch", image: "/assets/clients/soch.png" },
    { name: "Suzuki", image: "/assets/clients/suzuki.png" },
  ];

  // Typewriter effect state
  const twPart1 = "Simplifying Inventory Audits with ";
  const twPart2 = "Accuracy & Automation";
  const twFull = twPart1 + twPart2;
  const [typedCount, setTypedCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animsReady, setAnimsReady] = useState(false);

  useEffect(() => {
    // Small initial delay before typing starts
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedCount(prev => {
          if (prev >= twFull.length) {
            clearInterval(interval);
            // Hide cursor then reveal tagline + buttons
            setTimeout(() => setShowCursor(false), 600);
            setTimeout(() => setAnimsReady(true), 700);
            return prev;
          }
          return prev + 1;
        });
      }, 45);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-custom px-6 relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
          <div>
            {/* Typewriter heading */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-5 lg:mb-6 leading-tight min-h-[1em]">
              {typedCount <= twPart1.length
                ? twPart1.slice(0, typedCount)
                : twPart1}
              {typedCount > twPart1.length && (
                <span className="text-gradient">
                  {twPart2.slice(0, typedCount - twPart1.length)}
                </span>
              )}
              {showCursor && (
                <span className="animate-cursor text-primary">&nbsp;</span>
              )}
            </h1>

            {/* Tagline — fades up after typing completes */}
            <div
              className={`mb-8 lg:mb-10 ${animsReady ? 'animate-fade-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.05s' }}
            >
              <p className="text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed mb-4">
                We help businesses streamline{" "}
                <span className="font-bold text-primary bg-accent/10 px-1.5 py-0.5 rounded-md">inventory</span>,{" "}
                <span className="font-bold text-primary bg-accent/10 px-1.5 py-0.5 rounded-md">asset tracking</span>, and{" "}
                <span className="font-bold text-primary bg-accent/10 px-1.5 py-0.5 rounded-md">compliance</span>{" "}
                with expert audit solutions and cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Inventory Audit", "Asset Tracking", "Compliance"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/5 text-primary border border-primary/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons — pop up one after another */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <a
                href={whatsappUrl}
                className={`btn-primary flex items-center gap-2 group py-2.5 px-5 lg:py-3 lg:px-6 text-sm lg:text-base ${animsReady ? 'animate-pop-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:7995147799"
                className={`btn-secondary py-2.5 px-5 lg:py-3 lg:px-6 text-sm lg:text-base ${animsReady ? 'animate-pop-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.25s' }}
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="hidden md:block" data-aos="zoom-in">
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
        <div className="max-w-custom px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
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
                <h4 className="text-3xl lg:text-5xl font-bold mb-2 text-white">10+</h4>
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

      {/* Careers Overview Section */}
      <CareersOverview />

      {/* Our Clients Scrolling Marquee */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-custom px-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
            <div>
              <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Our Partners</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Empowering <span className="text-gradient">Industry Leaders</span>
              </h2>
            </div>
            <Link
              to="/clients"
              className="btn-primary py-3 px-8 text-sm flex items-center gap-2 group"
            >
              View Case Studies
              <Award size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Gradient Masks for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-20 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex overflow-hidden group">
            <div className="animate-scroll flex gap-8 lg:gap-12 py-4">
              {[...homeClients, ...homeClients].map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px] lg:min-w-[220px] p-6 lg:p-8 rounded-2xl bg-background-alt border border-gray-100 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="h-12 lg:h-16 w-full flex items-center justify-center mb-3">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain transition-all duration-500"
                    />
                  </div>
                  <p className="text-[10px] lg:text-xs font-bold text-primary/60 text-center uppercase tracking-widest leading-tight">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
