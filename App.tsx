import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactDetails from './components/ContactForm';
import Footer from './components/Footer';

const useFadeIn = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => sections.forEach(section => {
      observer.unobserve(section);
    });
  }, []);
};

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useFadeIn();

  const handleScrollTo = (section: 'about' | 'portfolio' | 'testimonials' | 'contact') => {
    const refs = {
      about: aboutRef,
      portfolio: portfolioRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-brand-bg font-sans text-brand-light">
      <Header onScrollTo={handleScrollTo} />
      <main>
        <Hero onScrollToPortfolio={() => handleScrollTo('portfolio')} />
        {/* <div className="fade-in-section"><About ref={aboutRef} /></div> */}
        <div className="fade-in-section"><Portfolio ref={portfolioRef} /></div>
        <div className="fade-in-section"><Testimonials ref={testimonialsRef} /></div>
        <div className="fade-in-section"><ContactDetails ref={contactRef} /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;