import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg text-brand-muted py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="./../images/logo.png" alt="Crystal Frame Studios Logo" className="h-15 w-40" />
            <p className="text-sm">Timeless Imagery, Artfully Crafted.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">CONTACT</h4>
            <a href="mailto:crystalframestudios@gmail.com" className="block text-sm hover:text-white transition-colors">crystalframestudios@gmail.com</a>
            <a href="tel:+918639975642" className="block text-sm hover:text-white transition-colors mt-1">+91 8639975642</a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">SOCIAL</h4>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="https://www.instagram.com/crystal.frame.studios" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
              {/* <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
                <FacebookIcon className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-center mt-16 border-t border-slate-900 pt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Crystal Frame Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;