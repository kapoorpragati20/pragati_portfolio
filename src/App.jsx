import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import { portfolioData } from './data/portfolioData.js';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  return (
    <div className="app">
      <Header
        data={portfolioData}
        activeSection={activeSection}
        mobileNavOpen={mobileNavOpen}
        toggleMobileNav={toggleMobileNav}
        closeMobileNav={closeMobileNav}
      />
      <main id="main">
        <Hero data={portfolioData} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Resume data={portfolioData.resume} />
        <Portfolio data={portfolioData.portfolio} />
        <Services data={portfolioData.services} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
