import React from "react";
import { Button } from "./ui/button";
import { Brain, Heart, Target, TrendingUp, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mind Rewiring",
      description:
        "Transform limiting beliefs and negative thought patterns into empowering mindsets that drive success.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Subconscious Mind Programming",
      description:
        "Reprogram your subconscious mind to align with your goals and create lasting behavioral changes.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healing",
      description:
        "Emotional healing techniques to release past traumas and create space for growth and happiness.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Confidence and Clarity Sessions",
      description:
        "Build unshakeable confidence and gain crystal-clear clarity on your life direction and purpose.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Productivity and Time Management",
      description:
        "Master your time and energy to achieve more while maintaining balance and well-being.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Peak Performance Coaching",
      description:
        "Unlock your highest potential and achieve peak performance in all areas of your life.",
    },
  ];

  const programs = [
    {
      title: "One-on-One Coaching",
      description:
        "Personalized coaching sessions tailored to your specific needs and goals.",
      duration: "60-90 min sessions",
    },
    {
      title: "Group Coaching",
      description:
        "Transform alongside like-minded individuals in a supportive group environment.",
      duration: "Weekly sessions",
    },
    {
      title: "Peak Performance Programs",
      description:
        "Intensive programs designed to maximize your potential and achieve breakthrough results.",
      duration: "3-6 month programs",
    },
    {
      title: "HRCM Coaching",
      description:
        "Comprehensive coaching covering Health, Relationships, Career, and Money aspects of life.",
      duration: "Customized timeline",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-indigo-100/50 dark:from-gray-900/50 dark:via-purple-900/10 dark:to-indigo-900/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-lora text-foreground mb-4">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Offer
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coaching solutions designed to transform your mind,
            heal your emotions, and unlock your full potential
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Programs Section */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-lora text-foreground mb-4">
            Programs &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Services
            </span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground">
            Choose the format that works best for your transformation journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {program.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                {program.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs sm:text-sm text-primary font-medium">
                  {program.duration}
                </span>
                <Link to="/book" className="w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-3xl p-4 sm:p-6 lg:p-8 border border-border shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Additional Offerings
            </h4>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
              <h5 className="font-medium text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                Webinars
              </h5>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Interactive online sessions
              </p>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎤</div>
              <h5 className="font-medium text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                Seminars
              </h5>
              <p className="text-xs sm:text-sm text-muted-foreground">
                In-person workshops
              </p>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📚</div>
              <h5 className="font-medium text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                Resources
              </h5>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Free guides & materials
              </p>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👥</div>
              <h5 className="font-medium text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                Community
              </h5>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Supportive network
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
          >
            <Link to="/book">Book Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
