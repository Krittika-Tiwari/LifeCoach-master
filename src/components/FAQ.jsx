import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is life coaching and how can it help me?",
      answer:
        "Life coaching is a collaborative process that helps you identify and achieve your personal and professional goals. Through powerful questioning, accountability, and support, I help you overcome obstacles, gain clarity, and create lasting positive changes in your life.",
    },
    {
      question: "How long does a typical coaching program last?",
      answer:
        "Most coaching programs range from 3-6 months, depending on your goals and needs. We'll work together to create a customized timeline that allows for meaningful progress while respecting your schedule and budget.",
    },
    {
      question: "What's the difference between coaching and therapy?",
      answer:
        "Coaching focuses on your present and future, helping you move forward toward your goals. While therapy often addresses past issues and healing, coaching is action-oriented and designed to help you achieve specific outcomes and unlock your potential.",
    },
    {
      question: "Do you offer online coaching sessions?",
      answer:
        "Yes! I offer both in-person and online coaching sessions via video calls. Online sessions are just as effective and allow for greater flexibility in scheduling, making coaching accessible regardless of your location.",
    },
    {
      question: "What can I expect in our first session?",
      answer:
        "In our discovery session, we'll explore your current situation, identify your goals, and discuss how coaching can help you. This is also an opportunity for you to ask questions and determine if we're a good fit to work together.",
    },
    {
      question: "How do I know if coaching is right for me?",
      answer:
        "Coaching is ideal if you're ready to make positive changes, willing to take action, and committed to your growth. If you feel stuck, want to achieve specific goals, or desire greater fulfillment in life, coaching can be transformational.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about life coaching and my approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Still have questions? I'd love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base"
          >
            <Link to="/book">Get in Touch</Link>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
