import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-primary p-12 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden" data-aos="fade-right">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
          <Eye className="text-accent mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            To become a leading audit solutions provider known for accuracy and innovation, setting the benchmark for inventory management globally.
          </p>
        </div>
        <div className="bg-secondary p-12 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden" data-aos="fade-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <Target className="text-white mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-white/90 leading-relaxed">
            To simplify and enhance audit processes using technology and expertise, ensuring our clients achieve operational excellence through data integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
