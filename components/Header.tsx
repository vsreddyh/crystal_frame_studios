import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

interface HeaderProps {
  onScrollTo: (section: 'about' | 'portfolio' | 'testimonials' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      {/* <button onClick={() => { onScrollTo('about'); setIsMenuOpen(false); }} className="text-brand-light font-medium tracking-wider hover:text-white transition-colors duration-300 py-2">About</button> */}
      <button onClick={() => { onScrollTo('portfolio'); setIsMenuOpen(false); }} className="text-brand-light font-medium tracking-wider hover:text-white transition-colors duration-300 py-2">Portfolio</button>
      <button onClick={() => { onScrollTo('testimonials'); setIsMenuOpen(false); }} className="text-brand-light font-medium tracking-wider hover:text-white transition-colors duration-300 py-2">Testimonials</button>
      <button onClick={() => { onScrollTo('contact'); setIsMenuOpen(false); }} className="text-brand-light font-medium tracking-wider hover:text-white transition-colors duration-300 py-2">Contact</button>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-brand-bg/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto py-5 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none" aria-label="Back to top">
          <img src="./../images/logo.png" alt="Crystal Frame Studios Logo" className="h-30 w-80" />
        </button>
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-20 relative">
            {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-bg/95 backdrop-blur-xl fixed top-0 left-0 w-full h-screen">
          <nav className="flex flex-col items-center justify-center h-full space-y-10 text-xl">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;