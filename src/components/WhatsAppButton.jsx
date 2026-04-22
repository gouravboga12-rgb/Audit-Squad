import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "917995147799";
  const defaultMessage = encodeURIComponent("Hello, I am interested in your audit services. Please share more details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] group flex items-center gap-3"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        <span className="text-primary font-bold whitespace-nowrap">Chat with us</span>
      </div>
      <div className="bg-whatsapp p-3.5 md:p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <MessageCircle size={24} className="md:w-8 md:h-8" color="white" fill="white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
