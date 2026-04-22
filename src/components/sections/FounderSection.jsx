import React from 'react';

const FounderSection = () => {
  return (
    <section className="section-padding bg-background-alt">
      <div className="max-w-4xl mx-auto text-center">
        <div data-aos="fade-up">
          <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-8 flex items-center justify-center text-white text-5xl font-bold shadow-xl border-4 border-white">
            NP
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">Naresh Prattipaati</h2>
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-6">Founder</p>
          <div className="bg-white p-10 rounded-3xl shadow-soft italic text-xl text-text-primary leading-relaxed relative">
            <div className="absolute top-4 left-4 text-accent/20 text-8xl leading-none font-serif opacity-50">"</div>
            Audit Squad was born out of a passion for precision and a desire to bring technological innovation to the traditional audit landscape. We are here to redefine how businesses track their success.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
