import React from 'react';
import { Target, Heart, Rocket, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    { title: "Integrity", desc: "We maintain the highest ethical standards in every audit we perform.", icon: <Heart className="text-accent" size={32} /> },
    { title: "Accuracy", desc: "Precision is at the core of our methodology, ensuring 100% reliable data.", icon: <Target className="text-accent" size={32} /> },
    { title: "Innovation", desc: "We leverage the latest automation technology to stay ahead of industry standards.", icon: <Rocket className="text-accent" size={32} /> },
    { title: "Customer Focus", desc: "Our solutions are tailored to solve the unique challenges of our clients.", icon: <Users className="text-accent" size={32} /> }
  ];

  return (
    <section className="section-padding bg-background-alt">
      <div className="max-w-custom px-6 text-center mb-10 lg:mb-12" data-aos="fade-up">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-3">Our Core Values</h2>
        <p className="text-text-secondary text-sm lg:text-base">The principles that guide everything we do.</p>
      </div>
      <div className="max-w-custom px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white p-6 lg:p-8 rounded-[2rem] lg:rounded-2xl shadow-soft text-center hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-accent"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-2xl lg:rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              {React.cloneElement(value.icon, { size: 24 })}
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-primary mb-2 lg:mb-3">{value.title}</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
