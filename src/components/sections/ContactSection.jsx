import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "917995147799";
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Inventory Audit',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedMessage = `*New Inquiry from Audit Squad Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${formattedMessage}`, '_blank');
  };

  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const contactDetails = [
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      value: "7995147799",
      link: "tel:7995147799"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      value: "Naresh@auditsquad.in",
      link: "mailto:Naresh@auditsquad.in"
    },
    {
      icon: <MapPin size={28} />,
      title: "Visit Us",
      value: "HITEC City, Hyderabad, 500081",
      link: "https://maps.google.com/?q=HUDA+Techno+Enclave+HITEC+City+Hyderabad"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative w-full">
      {/* Decorative background elements - wrapped to prevent shadow clipping */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="max-w-custom mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-3 gap-10 lg:gap-16 items-start relative z-10">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-5">Let's Talk <span className="text-gradient">Audit</span></h2>
            <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
              Have questions about our methodology or need a custom quote? Reach out to our experts today.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <a 
                key={index} 
                href={detail.link} 
                className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  {React.cloneElement(detail.icon, { className: "text-accent group-hover:text-white" })}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider">{detail.title}</h4>
                  <p className="text-xl font-bold text-primary">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/20">
            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Clock className="text-secondary" size={20} />
              Business Hours
            </h4>
            <ul className="space-y-2 text-text-secondary font-medium">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-accent">Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Form / Lead Gen */}
        <div className="lg:col-span-2">
          <div className="bg-white p-5 md:p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-primary mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe" 
                      className="w-full px-5 py-4 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="7995147799" 
                      className="w-full px-5 py-4 bg-background-alt border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Service Required</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-background-alt border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none"
                    >
                      <option>Inventory Audit</option>

                      <option>Asset Tagging</option>
                      <option>Asset Verification</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4" 
                    placeholder="Tell us about your requirements..." 
                    className="w-full px-5 py-4 bg-background-alt border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-4 text-lg flex justify-center items-center gap-2">
                  Send Inquiry
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-text-secondary font-medium text-center md:text-left">Or reach us instantly via:</p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <a href={whatsappUrl} className="btn-whatsapp px-4 py-3 justify-center w-full sm:w-auto">
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                    <a href="tel:7995147799" className="btn-secondary px-4 py-3 border-accent text-accent hover:bg-accent justify-center w-full sm:w-auto">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
