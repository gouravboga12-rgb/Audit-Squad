import React from 'react';
import { CalendarDays, Search, ClipboardCheck, FileText, HeadphonesIcon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Schedule a Consultation",
      desc: "Tell us your needs and specific inventory challenges.",
      icon: <CalendarDays size={22} />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      dot: "bg-secondary",
      side: "right",
    },
    {
      step: 2,
      title: "Initial Assessment",
      desc: "We review your records and systems to understand your setup.",
      icon: <Search size={22} />,
      color: "text-accent",
      bg: "bg-accent/10",
      dot: "bg-accent",
      side: "left",
    },
    {
      step: 3,
      title: "On-Site Audit",
      desc: "Our team verifies your inventory using proven methodologies.",
      icon: <ClipboardCheck size={22} />,
      color: "text-primary",
      bg: "bg-primary/10",
      dot: "bg-primary",
      side: "right",
    },
    {
      step: 4,
      title: "Reporting & Guidance",
      desc: "You receive a clear, actionable report with recommendations.",
      icon: <FileText size={22} />,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      dot: "bg-yellow-500",
      side: "left",
    },
    {
      step: 5,
      title: "Ongoing Support",
      desc: "We help you maintain long-term compliance and accuracy.",
      icon: <HeadphonesIcon size={22} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      dot: "bg-emerald-500",
      side: "right",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-28" data-aos="fade-up">
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Process</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How <span className="text-gradient">It Works</span></h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            A structured, technology-driven approach designed to deliver 100% audit accuracy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 hidden md:block"></div>

          {steps.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center mb-24 last:mb-0 ${
                item.side === "right"
                  ? "md:flex-row flex-col"
                  : "md:flex-row-reverse flex-col"
              }`}
              data-aos={item.side === "right" ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100}
            >
              {/* Card */}
              <div className="w-full md:w-5/12">
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative group">
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    {React.cloneElement(item.icon, { size: 30 })}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4">{item.title}</h4>
                  <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
                  
                  {/* Decorative number background */}
                  <span className="absolute top-6 right-8 text-7xl font-black text-gray-50 z-0 select-none group-hover:text-accent/5 transition-colors">
                    0{item.step}
                  </span>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-2/12 justify-center relative">
                <div className={`w-14 h-14 ${item.dot} rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-premium z-10 border-4 border-white transform rotate-45 group-hover:rotate-90 transition-transform duration-700`}>
                  <span className="-rotate-45 group-hover:-rotate-90 transition-transform duration-700">{item.step}</span>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
