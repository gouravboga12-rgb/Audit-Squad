import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-premium border-8 border-white transition-all duration-1000 group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1610424564243!2d78.3739265751663!3d17.452044883446045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c587455%3A0x397f37803d274fbc!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713809000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Audit Squad Location"
            className="transition-opacity duration-1000"
          ></iframe>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-0 group-hover:scale-100 transition-transform duration-500 delay-300">
            <div className="bg-primary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border-2 border-accent">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <MapPin size={18} className="text-white" />
              </div>
              <span className="font-bold tracking-tight">Audit Squad HQ</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Find Us At</p>
              <p className="text-sm text-text-secondary">HITEC City, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
