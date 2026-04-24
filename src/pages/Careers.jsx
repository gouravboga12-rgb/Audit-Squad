import React from 'react';
import { Briefcase, GraduationCap, TrendingUp, DollarSign, Award, CheckCircle2 } from 'lucide-react';
import CareerForm from '../components/sections/CareerForm';

const Careers = () => {
  const benefits = [
    {
      icon: <GraduationCap className="text-accent" size={24} />,
      title: "Practical Training",
      description: "Learn the art of stock audits, bin management, variance reporting, and multi-location inventory tracking directly on live projects."
    },
    {
      icon: <TrendingUp className="text-accent" size={24} />,
      title: "Industry Exposure",
      description: "Work alongside experienced auditors and see how automation blends with expert insights to deliver reliable results."
    },
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Skill Development",
      description: "Build technical precision, analytical thinking, and client-friendly communication skills that set you apart in the job market."
    },
    {
      icon: <DollarSign className="text-accent" size={24} />,
      title: "Financial Independence",
      description: "Earn while you learn, so you can support yourself while investing in your career growth."
    },
    {
      icon: <Briefcase className="text-accent" size={24} />,
      title: "Career Pathway",
      description: "Successful participants can transition into full-time roles with Audit Squad or leverage their expertise across industries."
    }
  ];

  const whatYouWillLearn = [
    "Real-time inventory audit processes",
    "Automation tools for efficient auditing",
    "Compliance-ready reporting methods",
    "Strategies to overcome common inventory pain points"
  ];

  const whoCanApply = [
    "Students and fresh graduates eager to gain practical experience",
    "CA / CMA students looking for professional Article-ship",
    "Professionals looking to upskill in inventory management",
    "Anyone passionate about accuracy, efficiency, and operational excellence"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-12 lg:pt-40 lg:pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent skew-x-12 transform translate-x-32 hidden lg:block animate-pulse"></div>
        
        <div className="max-w-custom px-6 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-3 animate-fade-in">Career Opportunities</h4>
            <h1 className="text-4xl lg:text-7xl font-black mb-6 lg:mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Earn <span className="text-accent">&</span> Learn
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-medium animate-fade-in mb-10" style={{ animationDelay: '0.2s' }}>
              “Earn today. Learn for tomorrow. Grow with Audit Squad.”
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#apply-section" 
                className="inline-flex items-center justify-center bg-accent text-primary px-10 py-4 text-lg rounded-2xl font-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-accent/20"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-custom px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">More Than Just a Job</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                At Audit Squad, we believe careers should be more than just jobs—they should be pathways to growth. That’s why we’ve designed our <span className="text-primary font-bold">Earn and Learn Program</span>, a unique opportunity to gain hands-on experience in real-time stock audits and inventory management while building your professional future.
              </p>
              <div className="flex items-center gap-4 p-5 bg-background-alt rounded-2xl border-l-4 border-accent">
                <p className="font-bold text-primary italic text-lg">
                  "Transform your career with real-world expertise in inventory audits."
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-xl"></div>
              <div className="relative bg-white p-8 lg:p-12 rounded-[2rem] shadow-premium border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg">🌟</span>
                  Why Join Earn and Learn?
                </h3>
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{benefit.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-padding bg-background-alt">
        <div className="max-w-custom px-6 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What You’ll <span className="text-gradient">Learn</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Our curriculum is designed to give you a 360-degree view of the audit industry.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {whatYouWillLearn.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 flex items-center gap-5 group hover:shadow-premium transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                <CheckCircle2 size={20} className="text-accent group-hover:text-white" />
              </div>
              <span className="text-lg font-bold text-primary">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Application Section */}
      <section id="apply-section" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-custom px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Form Side */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-5xl font-black text-primary mb-4">Who Can <span className="text-accent">Apply?</span></h2>
                <p className="text-text-secondary text-lg mb-8">We are looking for individuals who strive for excellence and want to build a career in a high-growth industry.</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {whoCanApply.map((item, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-2xl border transition-all duration-300 ${
                        item.includes('Article-ship') 
                          ? 'bg-accent/10 border-accent shadow-lg shadow-accent/5 scale-[1.02]' 
                          : 'bg-background-alt border-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.includes('Article-ship') ? 'bg-accent' : 'bg-primary/30'}`}></div>
                        <span className={`text-sm font-bold ${item.includes('Article-ship') ? 'text-primary' : 'text-primary/70'}`}>
                          {item}
                        </span>
                      </div>
                      {item.includes('Article-ship') && (
                        <div className="mt-2 ml-5">
                          <span className="bg-accent text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Highly Recommended</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-2">Application Form</h3>
                <p className="text-text-secondary text-sm">Fill out the details below to start your application.</p>
              </div>
              <CareerForm />
            </div>

            {/* Info Side */}
            <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-32" data-aos="fade-left">
              <div className="bg-primary rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-6">Need a Quick Chat?</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Have questions about the program before applying? Reach out to our HR team directly on WhatsApp for instant assistance.
                </p>
                <a 
                  href="https://wa.me/917995147799?text=Hello,%20I%20have%20some%20questions%20regarding%20the%20Earn%20and%20Learn%20Program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-lg py-4 rounded-2xl"
                >
                  Chat with HR
                </a>
              </div>

              <div className="p-8 lg:p-10 bg-background-alt rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-primary mb-6">Application Process</h4>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Submit Form", desc: "Fill in your details and express your interest." },
                    { step: "02", title: "Document Review", desc: "Our team reviews your profile and background." },
                    { step: "03", title: "Interview", desc: "A brief interaction to understand your goals." },
                    { step: "04", title: "Onboarding", desc: "Welcome to the Earn & Learn Program!" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-accent font-black text-xl leading-none">{item.step}</span>
                      <div>
                        <h5 className="font-bold text-primary text-sm mb-1">{item.title}</h5>
                        <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
