import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.svg" 
                alt="Sunita Life Coach" 
                className="h-6 w-6 sm:h-8 sm:w-8 mr-3"
              />
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Sunita
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Empowering individuals to unlock their potential and create extraordinary lives through transformational coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-violet-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-violet-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Mind Rewiring</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Life Coaching</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Career Guidance</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Relationship Coaching</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-violet-400 transition-colors">Wellness Programs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-violet-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">theshaktiawakens@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-violet-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+91-9279231459</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-violet-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Sunita Life Coach. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm mt-3 sm:mt-0">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
              <span>for transformation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;