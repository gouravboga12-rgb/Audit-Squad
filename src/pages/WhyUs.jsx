import React from 'react';
import { CheckCircle2, XCircle, MessageCircle, BarChart3, Zap, Shield, Target, TrendingUp, Users, Globe, Layers } from 'lucide-react';

const WhyUs = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I'd like to know more about what makes Audit Squad different.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const comparisonPoints = [
    {
      title: "Technology + Expertise",
      others: "Rely heavily on manual processes and spreadsheets",
      auditSquad: "Combines smart automation with expert auditors for faster, more accurate results",
      icon: <Zap size={24} />
    },
    {
      title: "Accuracy You Can Trust",
      others: "Higher chances of human error and inconsistent data",
      auditSquad: "Automated systems + validation layers ensure highly reliable, error-free audits",
      icon: <Shield size={24} />
    },
    {
      title: "Audits Without Disruption",
      others: "Audits slow down operations and create workflow interruptions",
      auditSquad: "Seamless integration with your processes—minimal impact on daily business",
      icon: <Layers size={24} />
    },
    {
      title: "Insights, Not Just Reports",
      others: "Deliver basic audit reports with limited value",
      auditSquad: "Provides actionable insights, risk analysis, and clear recommendations",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Compliance-First Approach",
      others: "Reactive compliance checks",
      auditSquad: "Proactive, structured processes that keep you always audit-ready",
      icon: <Target size={24} />
    },
    {
      title: "Scalable for Any Business",
      others: "Struggle with multi-location or complex inventory systems",
      auditSquad: "Designed for scalability—from single warehouse to multi-location operations",
      icon: <Globe size={24} />
    },
    {
      title: "Speed Without Compromise",
      others: "Longer audit cycles due to manual work",
      auditSquad: "Faster turnaround using optimized workflows and automation",
      icon: <Zap size={24} className="text-yellow-500" />
    },
    {
      title: "Cost Efficiency",
      others: "Higher costs due to time-consuming manual audits",
      auditSquad: "Reduced effort and optimized processes = better ROI",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Complete Inventory Visibility",
      others: "Limited tracking and fragmented data",
      auditSquad: "End-to-end visibility—from bin-level tracking to full inventory control",
      icon: <Users size={24} />
    },
    {
      title: "Strategic Value",
      others: "Focus only on checking numbers",
      auditSquad: "Turns audits into a strategic tool for better procurement and reduced losses",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-12 lg:pt-40 lg:pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-custom px-6 relative z-10 text-center">
          <h4 className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] lg:text-xs mb-3">The Audit Squad Edge</h4>
          <h1 className="text-3xl lg:text-5xl font-black mb-4 lg:mb-6 leading-tight">
            Why <span className="text-gradient-light">Choose Us</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-medium max-w-xl mx-auto">
            Discover how we're redefining the audit industry with smart technology and uncompromising accuracy.
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="section-padding bg-background relative">
        <div className="max-w-custom grid lg:grid-cols-2 gap-5 lg:gap-6">
          {comparisonPoints.map((point, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-soft border border-gray-100 flex flex-col md:flex-row hover:shadow-premium transition-all duration-500"
            >
              <div className="md:w-1/4 bg-gray-50 p-5 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="w-11 h-11 lg:w-12 lg:h-12 bg-white rounded-xl shadow-soft flex items-center justify-center mb-2.5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {React.cloneElement(point.icon, { size: 18 })}
                </div>
                <h3 className="font-bold text-primary text-xs lg:text-sm leading-tight">{point.title}</h3>
              </div>
              <div className="flex-grow p-5 lg:p-6 space-y-3.5 bg-white">
                <div className="flex gap-3 opacity-60">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Traditional</p>
                    <p className="text-xs italic">{point.others}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-accent mb-0.5">Audit Squad Edge</p>
                    <p className="text-base font-bold text-primary leading-tight">{point.auditSquad}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Table Section */}
      <section className="section-padding bg-background-alt overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-32"></div>
        
        <div className="max-w-custom relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-3 lg:mb-4">At a Glance</h2>
            <p className="text-base lg:text-lg text-text-secondary">A direct comparison of why leading enterprises trust Audit Squad.</p>
          </div>

          <div className="overflow-x-auto rounded-xl lg:rounded-2xl shadow-premium border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 lg:px-8 lg:py-5 font-black text-base lg:text-lg tracking-wide">Others</th>
                  <th className="px-6 py-4 lg:px-8 lg:py-5 font-black text-base lg:text-lg tracking-wide bg-accent">Audit Squad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { o: "Manual & slow audits", a: "Automated + expert-driven audits" },
                  { o: "Prone to errors", a: "High accuracy & reliability" },
                  { o: "Disrupts operations", a: "Smooth, non-disruptive process" },
                  { o: "Basic reports", a: "Actionable insights & recommendations" },
                  { o: "Limited scalability", a: "Scalable for multi-location audits" },
                  { o: "Compliance gaps", a: "Always audit-ready & compliant" }
                ].map((row, index) => (
                  <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-4 text-text-secondary border-r border-gray-100 italic text-sm lg:text-base">
                      {row.o}
                    </td>
                    <td className="px-8 py-4 text-primary font-bold text-sm lg:text-base">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-accent shrink-0" size={16} />
                        {row.a}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 lg:mb-8 leading-tight">Ready to Experience the <span className="text-gradient-light">Future of Audit?</span></h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-10">
            Stop relying on manual guesswork. Get the accuracy and insights your business deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href={whatsappUrl} className="btn-whatsapp px-8 py-4 text-lg">
              <MessageCircle size={24} />
              Consult Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
