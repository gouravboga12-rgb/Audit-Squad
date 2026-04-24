import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, TrendingUp, Award, ArrowRight } from 'lucide-react';

const CareersOverview = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-accent" size={24} />,
      title: "Practical Training",
      desc: "Learn stock audits directly on live projects."
    },
    {
      icon: <TrendingUp className="text-accent" size={24} />,
      title: "Industry Exposure",
      desc: "Work alongside experienced senior auditors."
    },
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Article-ship",
      desc: "Perfect for CA/CMA students seeking training."
    }
  ];

  return (
    <section className="section-padding bg-background-alt overflow-hidden">
      <div className="max-w-custom px-6">
        <div className="bg-primary rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h4 className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-4">Careers at Audit Squad</h4>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Join our <span className="text-accent">Earn & Learn</span> Program
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg">
                We believe careers should be pathways to growth. Gain hands-on experience in real-time stock audits while building your professional future.
              </p>
              
              <Link 
                to="/careers" 
                className="btn-primary bg-accent text-primary hover:bg-white px-8 py-4 rounded-2xl font-black flex items-center justify-center lg:justify-start gap-2 group w-fit"
              >
                Learn More & Apply
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-1 gap-6" data-aos="fade-left">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <div className="group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersOverview;
