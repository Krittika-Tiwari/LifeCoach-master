import React from "react";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take the first step towards your breakthrough. Book your free
            consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="theshaktiawakens@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="+91-9279231459"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell me about your goals and challenges..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3">
                <Link to="/book"> Send Message</Link>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:theshaktiawakens@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      theshaktiawakens@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+919279231459"
                  className="flex items-center space-x-4 hover:text-violet-600 dark:hover:text-violet-300"
                >
                  <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91-9279231459
                    </p>
                  </div>
                </a>
                <div className="flex items-center space-x-4">
                  <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bangalore, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Availability
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mon-Fri: 9AM-6PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Free Consultation
              </h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Book a 30-minute discovery call to explore how I can help you
                achieve your goals.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-violet-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                <Link to="/book"> Schedule Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
