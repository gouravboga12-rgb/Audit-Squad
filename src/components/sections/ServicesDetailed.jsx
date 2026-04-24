import React from 'react';
import { CheckCircle2, MessageCircle, BarChart3, Briefcase, Target, Shield } from 'lucide-react';
import inventoryImg from '../../assets/inventory_audit.png';
import spareImg from '../../assets/spare_parts_audit.png';
import taggingImg from '../../assets/asset_tagging.png';
import assetImg from '../../assets/asset_verification.png';

const ServicesDetailed = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const services = [
    {
      title: "Inventory Audit Services",
      desc: "Accurate inventory audits using automation and expert validation. We specialize in deep-dive physical verification to match book records with ground reality.",
      image: inventoryImg,
      icon: <BarChart3 className="text-white" size={32} />,
      features: [
        "Physical Stock Verification",
        "Variance Analysis & Reporting",
        "Stock Categorization",
        "WIP & Raw Material Audit"
      ]
    },
    {
      title: "Spare Parts Audit Services",
      desc: "Specialized auditing for automobile spare parts inventory systems. We understand the complexity of SKU-heavy environments and ensure zero-error reporting.",
      image: spareImg,
      icon: <Briefcase className="text-white" size={32} />,
      features: [
        "SKU-level Accuracy",
        "Obsolete Stock Identification",
        "Bin Location Verification",
        "Cycle Counting Support"
      ]
    },
    {
      title: "Asset Tagging",
      desc: "Efficient tagging and tracking of business assets using barcodes, QR codes, or RFID. Protect your investments with professional asset management.",
      image: taggingImg,
      icon: <Target className="text-white" size={32} />,
      features: [
        "Barcode/QR Code Implementation",
        "Asset Master Creation",
        "Location Mapping",
        "High-Durability Tagging"
      ]
    },
    {
      title: "Asset Verification",
      desc: "Comprehensive physical verification of all business assets for compliance and accuracy. We help you maintain a clean and audited asset register.",
      image: assetImg,
      icon: <Shield className="text-white" size={32} />,
      features: [
        "Fixed Asset Reconciliation",
        "Condition Assessment",
        "Ownership Verification",
        "Compliance Documentation"
      ]
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -ml-40"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -mr-40"></div>
 
      <div className="max-w-custom space-y-16 lg:space-y-24 relative z-10">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
            <div className="flex-1 w-full" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="relative group">
                <div className="absolute -inset-3 lg:-inset-4 bg-accent/10 rounded-xl lg:rounded-2xl blur-lg group-hover:bg-accent/20 transition-all duration-700"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative rounded-xl lg:rounded-2xl shadow-premium w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                />
                <div className="absolute top-4 left-4 lg:top-7 lg:left-7 w-10 h-10 lg:w-14 lg:h-14 bg-primary text-white rounded-lg lg:rounded-xl flex items-center justify-center shadow-premium border-2 border-white/20 group-hover:bg-accent transition-colors duration-500">
                  {React.cloneElement(service.icon, { size: 22 })}
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
              <h4 className="text-accent font-bold uppercase tracking-widest text-[9px] lg:text-xs mb-1 lg:mb-3">Service {index + 1}</h4>
              <h2 className="text-lg lg:text-3xl font-bold text-primary mb-2 lg:mb-6 leading-tight">{service.title}</h2>
              <p className="text-xs lg:text-base text-text-secondary leading-relaxed mb-4 lg:mb-8">
                {service.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 mb-6 lg:mb-10">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 lg:gap-3 group/item">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                      <CheckCircle2 className="text-accent group-hover/item:text-white" size={14} />
                    </div>
                    <span className="text-text-primary font-bold text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappUrl} className="btn-primary group py-3 px-6 text-base w-full sm:w-auto justify-center">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                Schedule Audit Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailed;
