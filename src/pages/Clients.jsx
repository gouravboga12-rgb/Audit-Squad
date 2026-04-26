import React from 'react';
import { CheckCircle2, MessageCircle, Users, Award, ShieldCheck, Zap } from 'lucide-react';

const Clients = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const clients = [
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

  const features = [
    "Zero Down time of Operations",
    "Bin wise Data",
    "Dead Stock Identification",
    "Variance Reporting",
    "Multiple Bin Tracking"
  ];

  const businessImpacts = [
    { benefit: "Accuracy & Reliability", impact: "Fewer errors, stronger trust in data", icon: <ShieldCheck size={24} /> },
    { benefit: "Cost Savings", impact: "Lower expenses, optimized stock levels", icon: <Zap size={24} /> },
    { benefit: "Maintenance Efficiency", icon: <Award size={24} />, impact: "Faster repairs, Improved service reliability" },
    { benefit: "Reduced Downtime", icon: <Zap size={24} />, impact: "Higher productivity, less disruption" },
    { benefit: "Compliance & Control", icon: <ShieldCheck size={24} />, impact: "Safer, more transparent operations" },
    { benefit: "Strategic Insights", icon: <Award size={24} />, impact: "Smarter purchasing and planning decisions" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-background-alt py-12 lg:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-custom px-6 relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-primary mb-4 lg:mb-6 leading-tight">
              Our <span className="text-gradient">Trusted Clients</span> & Partners
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed mb-6 lg:mb-8">
              We take pride in serving some of the industry's leading brands, providing them with precision-driven audit solutions that power their growth.
            </p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <div className="bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl shadow-soft border border-gray-100 flex items-center gap-2 lg:gap-3">
                <Users className="text-accent" size={20} />
                <span className="font-bold text-base lg:text-xl text-primary">10+ Corporate Clients</span>
              </div>
              <div className="bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl shadow-soft border border-gray-100 flex items-center gap-2 lg:gap-3">
                <Award className="text-accent" size={20} />
                <span className="font-bold text-base lg:text-xl text-primary">Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid - Strategically moved to top for instant credibility */}
      <section className="section-padding bg-white">
        <div className="max-w-custom px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Empowering <span className="text-gradient">Industry Leaders</span></h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of major players in retail, manufacturing, and the automobile sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="card-premium group flex flex-col items-center justify-center p-8 hover:border-accent/30 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 10}
              >
                <div className="h-16 lg:h-20 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <h3 className="text-[10px] lg:text-xs font-bold text-primary text-center group-hover:text-accent transition-colors uppercase tracking-widest">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Business Impact Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-custom px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Business Impact</h2>
            <p className="text-text-secondary text-lg">Measurable benefits and long-term value for our corporate partners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {businessImpacts.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-background-alt border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.benefit}</h3>
                <div className="h-px w-12 bg-accent/30 mb-4 group-hover:w-full transition-all"></div>
                <p className="text-text-secondary leading-relaxed font-medium">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Corporate Info */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] border border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] border border-accent rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <ShieldCheck className="text-accent" size={20} />
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Authorized Brand</span>
          </div>
          <h2 className="text-2xl lg:text-3xl leading-relaxed font-bold mb-10 text-primary">
            As a brand under <span className="text-gradient">Invtrack Analytics and Solutions Private Limited</span>, we have established ourselves as a trusted partner for diverse enterprises across India.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Retail", icon: <Users size={24} /> },
              { label: "Manufacturing", icon: <Award size={24} /> },
              { label: "Automobile", icon: <ShieldCheck size={24} /> },
              { label: "Warehousing", icon: <Zap size={24} /> }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-background-alt border border-gray-100 hover:border-accent/30 transition-all group shadow-sm hover:shadow-premium">
                <div className="text-accent mb-3 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-sm font-bold uppercase tracking-widest text-text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary p-10 lg:p-16 rounded-[2rem] text-center text-white shadow-2xl relative overflow-hidden" data-aos="flip-up">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 relative z-10">Join our growing list of success stories</h2>
          <p className="text-lg text-white/80 mb-8 lg:mb-10 max-w-xl mx-auto relative z-10">Partner with Audit Squad and experience the future of inventory management.</p>
          <div className="flex justify-center relative z-10">
            <a href={whatsappUrl} className="btn-whatsapp px-8 py-4 text-lg">
              <MessageCircle size={24} />
              Let's Talk Audits
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
