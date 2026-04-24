import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import Clients from './pages/Clients';
import Careers from './pages/Careers';

// Scroll and AOS Refresh handler
const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-background font-['Plus_Jakarta_Sans',sans-serif]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </PageWrapper>
    </Router>
  );
}

export default App;
