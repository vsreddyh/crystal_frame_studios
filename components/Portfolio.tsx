import React, { forwardRef, useState, useMemo } from 'react';
import type { PortfolioImage } from '../types';

const allImages: PortfolioImage[] = [
  { id: 10, src: './../images/image2.webp', category: 'Portraits', width: 640, height: 800 },
  { id: 1, src: './../images/image1.heic',  category: 'Arts', width: 640, height: 800 },
  { id: 2, src: './../images/image2.heic',  category: 'Portraits', width: 640, height: 640 },
  { id: 3, src: './../images/image3.heic', category: 'Landscapes', width: 640, height: 427 },
  { id: 4, src: './../images/image4.heic', category: 'Landscapes', width: 640, height: 800 },
  { id: 5, src: './../images/image1.jpg', category: 'Events', width: 696.5, height: 870.5 },
  { id: 6, src: './../images/image2.jpg', category: 'Events', width: 565, height: 706.2 },
  { id: 7, src: './../images/image3.jpg', category: 'Events', width: 947.6, height: 758 },
  { id: 8, src: './../images/image4.jpg', category: 'Events', width: 761, height: 507.3 },
  { id: 9, src: './../images/image1.webp', category: 'Portraits', width: 640, height: 800 },
  { id: 11, src: './../images/image5.jpg',  category: 'Landscapes', width: 947.4, height: 758 },
  { id: 12, src: './../images/image6.jpg',  category: 'Landscapes', width: 947.4, height: 758 },
  { id: 13, src: './../images/image7.jpg', category: 'Landscapes', width: 634, height: 507.2 },
];

const categories = ['All', 'Portraits', 'Arts', 'Landscapes', 'Events'];

const Portfolio = forwardRef<HTMLElement>((props, ref) => {
  const [filter, setFilter] = useState('All');

  const filteredImages = useMemo(() => {
    const filtered = filter === 'All' 
      ? allImages 
      : allImages.filter(img => img.category === filter);
    return filtered.slice(0, 12); // Limit to 12 images
  }, [filter]);

  return (
    <section ref={ref} id="portfolio" className="py-20 md:py-28 bg-brand-bg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 tracking-wider uppercase">Our Work</h2>
        <div className="w-20 h-px bg-brand-muted mx-auto mb-12"></div>

        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                filter === category ? 'text-white font-semibold' : 'text-brand-muted hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredImages.map((image) => (
            <div key={image.id} className="group overflow-hidden relative aspect-w-1 aspect-h-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white font-semibold text-lg tracking-wider uppercase">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;