import React from 'react';

interface HeroProps {
  onScrollToPortfolio: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToPortfolio }) => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      
      <div className="relative z-20 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider uppercase">
          Capturing Life's Narrative
        </h1>
        <p className="text-lg md:text-xl text-brand-light max-w-3xl mx-auto mb-8 font-light tracking-wide">
          We transform fleeting moments into timeless visual stories.
        </p>
        <button
          onClick={onScrollToPortfolio}
          className="border border-white text-white font-bold py-3 px-10 text-sm tracking-widest uppercase transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          View Work
        </button>
      </div>
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={onScrollToPortfolio}>
        <span className="text-sm font-light tracking-wider">SCROLL</span>
        <div className="w-px h-8 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;