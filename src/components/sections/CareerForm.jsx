import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, GraduationCap, FileText } from 'lucide-react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    education: '',
    experience: 'Fresher',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = "917995147799";
    const rawMessage = `*New Application: Earn & Learn Program*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Location:* ${formData.location}\n` +
      `*Education:* ${formData.education}\n` +
      `*Experience:* ${formData.experience}\n` +
      `*Why Join:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-3xl shadow-premium p-8 lg:p-12 border border-gray-100">
      <h3 className="text-2xl font-bold text-primary mb-8">Application Form</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input 
                type="text" 
                name="name"
                required
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input 
                type="email" 
                name="email"
                required
                placeholder="john@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input 
                type="tel" 
                name="phone"
                required
                placeholder="+91 00000 00000"
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Current Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input 
                type="text" 
                name="location"
                required
                placeholder="City, State"
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Highest Education</label>
            <div className="relative">
              <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <input 
                type="text" 
                name="education"
                required
                placeholder="B.Com, MBA, etc."
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary/70 ml-1">Experience Level</label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
              <select 
                name="experience"
                className="w-full pl-12 pr-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none"
                onChange={handleChange}
              >
                <option value="Fresher">Fresher / Student</option>
                <option value="Seeking Article-ship">Seeking Article-ship (CA/CMA)</option>
                <option value="0-1 Year">0-1 Year Experience</option>
                <option value="1-3 Years">1-3 Years Experience</option>
                <option value="3+ Years">3+ Years Experience</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-primary/70 ml-1">Why do you want to join us?</label>
          <textarea 
            name="message"
            rows="4"
            placeholder="Tell us a bit about your interest in inventory audits..."
            className="w-full px-4 py-3.5 bg-background-alt border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
        >
          <Send size={20} />
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
