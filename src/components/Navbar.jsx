import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(e) {
      // Only treat as outside click on small screens (tailwind lg = 1024px)
      if (window.innerWidth >= 1024) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div ref={navRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="relative">
              <img
                src="/images/logo.jpeg"
                alt="Sunita Life Coach"
                className="h-12 w-12 rounded-full shadow-lg ring-2 ring-violet-500/30 hover:ring-violet-500/60 transition-all duration-300 hover:scale-105"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-transparent pointer-events-none"></div>
            </div>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-lora tracking-wide hover:from-violet-500 hover:to-indigo-500 transition-all duration-300">
              Sunita
            </h1>
          </div>

          <ul className="hidden lg:flex items-center space-x-10 font-lora font-medium text-lg">
            <li>
              <Link
                to="/#home"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/#testimonials"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/#faq"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-6 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link to="/book">Book a Session</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <ul className="space-y-4 pt-6 font-lora text-lg">
            <li>
              <Link
                to="/#home"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/#testimonials"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/#faq"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 font-medium shadow-lg"
              >
                <Link to="/book" onClick={() => setIsOpen(false)}>
                  Book a Session
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
