import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const isHomePage = location.pathname === '/';
  const textColor = isScrolled ? 'text-primary' : (isHomePage ? 'text-primary' : 'text-white');

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-morphism shadow-premium py-2 lg:py-3' 
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-custom px-4 lg:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-accent/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img src={logo} alt="Audit Squad Logo" className="relative h-9 lg:h-12 w-auto object-contain rounded-lg lg:rounded-xl bg-white shadow-sm border border-gray-100" />
          </div>
          <span className={`font-black text-lg lg:text-2xl tracking-tighter transition-colors ${textColor}`}>
            AUDIT<span className="text-accent group-hover:text-primary transition-colors">SQUAD</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-bold text-xs lg:text-sm uppercase tracking-widest transition-all duration-300 relative py-2 group ${
                  location.pathname === link.path 
                    ? 'text-accent' 
                    : textColor
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl text-xs lg:text-sm shadow-lg hover:shadow-accent/20 transition-all"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled 
              ? 'bg-primary/10 text-primary' 
              : isHomePage 
                ? 'bg-primary/10 text-primary' 
                : 'bg-white/15 text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism absolute top-[calc(100%-0.5rem)] left-4 right-4 p-5 flex flex-col gap-1 animate-fade-in rounded-2xl shadow-premium border border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-5 py-3 rounded-xl text-base font-bold transition-all ${
                location.pathname === link.path 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-primary hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center py-3 rounded-xl mt-2 text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
