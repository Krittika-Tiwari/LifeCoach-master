import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Sunita's mind rewiring techniques completely transformed my approach to challenges. I went from constant self-doubt to leading my team with confidence. The subconscious programming sessions were life-changing!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Working with Sunita helped me break through limiting beliefs that were holding my business back. Her peak performance coaching increased my productivity by 300%. I finally achieved the work-life balance I dreamed of.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Homemaker & Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "As a homemaker wanting to start my own business, I felt lost and overwhelmed. Sunita's confidence and clarity sessions gave me the courage to launch my dream venture. Today, I'm running a successful online business!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "College Student",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Sunita's healing sessions helped me overcome exam anxiety and fear of failure. Her time management techniques improved my grades dramatically. I'm now confident about my future and pursuing my passion in technology.",
      rating: 5,
    },
    {
      name: "Meera Gupta",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "The HRCM coaching program transformed every aspect of my life. My relationships improved, my career took off, my health is better, and I finally have financial clarity. Sunita is truly a life-changing mentor!",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Sunita's Law of Attraction coaching helped me manifest my startup vision into reality. Her brain rewiring techniques eliminated my fear of failure and replaced it with unstoppable determination. My company is now thriving!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-lora text-foreground mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Success Stories
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from real people who rewired their minds and
            redesigned their lives
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Sessions Conducted</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-3xl border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of individuals who have transformed their lives
            through mind rewiring, healing, and peak performance coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Watch My Clients' Success Stories
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all duration-300">
              <Link to="/book">Book Your Free Discovery Call</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
