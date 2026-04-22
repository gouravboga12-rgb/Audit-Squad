import React from 'react';
import { Award } from 'lucide-react';
import teamImg from '../../assets/audit_team_expertise.png';

const AboutOverview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 transform skew-x-12 translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-custom grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        <div data-aos="fade-right">
          <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-3">Who We Are</h4>
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-5 lg:mb-6 leading-tight">
            Empowering Businesses with <span className="text-gradient">Reliable Data Insights</span>
          </h2>
          <div className="space-y-4 text-text-secondary text-sm lg:text-base leading-relaxed">
            <p>
              Audit Squad helps businesses ensure their inventory is accurate, reliable, and compliant by combining automation with expert audit insights.
            </p>
            <p className="border-l-4 border-accent pl-5 lg:pl-6 py-2 bg-accent/5 rounded-r-xl italic">
              As a brand under **Invtrack Analytics and Solutions Private Limited**, we have established ourselves as a trusted partner for manufacturing, automobile, and warehousing enterprises across India.
            </p>
            <p>
              Our mission is to simplify and enhance audit processes using technology and expertise, allowing business owners to focus on growth while we handle the complexities of compliance.
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="relative group">
            <div className="absolute -inset-4 lg:-inset-6 bg-secondary/20 rounded-[2rem] lg:rounded-[3rem] blur-xl lg:blur-2xl group-hover:bg-secondary/30 transition-all duration-700"></div>
              <img 
                src={teamImg} 
                alt="Our Expert Team" 
                className="relative rounded-[2rem] lg:rounded-[2.5rem] shadow-premium border-4 border-white transition-transform duration-700 group-hover:scale-[1.02] w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover" 
              />
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 lg:p-10 rounded-2xl lg:rounded-[2rem] shadow-premium hidden md:block border border-gray-100 transform hover:-translate-y-2 transition-all">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-accent/20 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Award className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-primary">10+ Years</h4>
                  <p className="text-text-secondary font-bold uppercase tracking-wider text-[10px] lg:text-xs">Industry Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
