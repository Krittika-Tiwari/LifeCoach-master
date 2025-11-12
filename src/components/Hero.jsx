import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-6">
               
                <div className="text-xl sm:text-2xl font-bold text-primary font-lora text-center sm:text-left">Sunita Life Coach</div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-lora leading-tight text-foreground text-center lg:text-left">
                Rewire Your Mind, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Redesign Your Life</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center lg:text-left">
                Helping you break free from limits, heal emotionally, and create the life you truly deserve
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">NLP Practitioner</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Brain Rewiring Mentor</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Life Coach</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Law of Attraction Coach</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/book">Book Your Free Discovery Call Now</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Download Free Guide
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground">
              <span className="text-center sm:text-left">💬 WhatsApp: +91-9279231459</span>
              <span className="text-center sm:text-left">✉️ theshaktiawakens@gmail.com</span>
              <span className="text-center sm:text-left">📍 Bangalore, India</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="/images/hero2.jpg" 
                alt="Sunita - Life Coach" 
                className="relative rounded-3xl shadow-2xl max-w-lg w-full scale-110"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Lives Transformed</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who I Help Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 px-4">Who I Help Transform Their Lives</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎓</div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Students</h4>
            </div>
            <div className="p-4 sm:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💼</div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Working Professionals</h4>
            </div>
            <div className="p-4 sm:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏠</div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Home Makers</h4>
            </div>
            <div className="p-4 sm:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🌟</div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Seekers of Change</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;