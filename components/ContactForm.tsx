import React, { forwardRef } from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './icons';

const ContactDetails = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wider uppercase">Let's Create Together</h2>
        <div className="w-20 h-px bg-brand-muted mx-auto mb-12"></div>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            We're currently accepting new projects and would love to hear about yours. Reach out to us via email or phone to discuss your vision.
          </p>
          <div className="space-y-4 mb-12">
            <a href="mailto:crystalframestudios@gmail.com" className="block text-xl md:text-2xl font-light tracking-wider hover:text-white transition-colors duration-300">
              crystalframestudios@gmail.com
            </a>
            <a href="tel:+91 8639975642" className="block text-xl md:text-2xl font-light tracking-wider hover:text-white transition-colors duration-300">
              +91 8639975642
            </a>
          </div>
          <h3 className="font-semibold text-white mb-6 tracking-wider uppercase">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6">
             <a target="_blank" href="https://www.instagram.com/crystal.frame.studios" aria-label="Instagram" className="text-brand-muted hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-6 h-6" />
              </a>
              {/* <a href="#" aria-label="Twitter" className="text-brand-muted hover:text-white transition-colors duration-300">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted hover:text-white transition-colors duration-300">
                <FacebookIcon className="w-6 h-6" />
              </a> */}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactDetails.displayName = 'ContactDetails';

export default ContactDetails;