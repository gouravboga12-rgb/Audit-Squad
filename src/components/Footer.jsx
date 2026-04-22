import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <footer className="bg-primary text-white pt-16 pb-8 lg:pt-20 lg:pb-10">
      <div className="max-w-custom px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Audit Squad Logo" className="h-10 w-auto object-contain rounded-lg bg-white p-1" />
            <span className="font-bold text-2xl tracking-tight text-white">Audit Squad</span>
          </div>
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
            Invtrack Analytics and Solutions Private Limited (Brand: Audit Squad) is a leader in technology-driven audit solutions, helping businesses achieve 100% accuracy in inventory and asset management.
          </p>
          <div className="pt-2">
            <span className="text-[10px] text-gray-500 block uppercase tracking-widest font-bold">CIN Number</span>
            <span className="text-sm text-accent">U82990TS2025PTC207403</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base lg:text-lg font-bold mb-5 lg:mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-3 lg:space-y-4">
            {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base lg:text-lg font-bold mb-5 lg:mb-6 text-accent">Our Services</h4>
          <ul className="space-y-3 lg:space-y-4">
            {[
              'Inventory Audit',
              'Spare Parts Audit',
              'Asset Tagging',
              'Asset Verification'
            ].map((item) => (
              <li key={item} className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm lg:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base lg:text-lg font-bold mb-5 lg:mb-6 text-accent">Contact Us</h4>
          <ul className="space-y-3 lg:space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-accent shrink-0" size={18} />
              <span className="text-gray-400 text-sm lg:text-base">HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent shrink-0" size={18} />
              <a href="tel:7995147799" className="text-gray-400 hover:text-white text-sm lg:text-base">7995147799</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent shrink-0" size={18} />
              <a href="mailto:Naresh@auditsquad.in" className="text-gray-400 hover:text-white text-sm lg:text-base">Naresh@auditsquad.in</a>
            </li>
            <li className="pt-3 lg:pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 py-2 px-5 text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp Now
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-custom mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-[10px] lg:text-xs">
        <p>&copy; {currentYear} Invtrack Analytics and Solutions Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
