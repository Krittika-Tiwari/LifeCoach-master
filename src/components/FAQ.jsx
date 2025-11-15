import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
   {
     question: "What do you help people with?",
     answer:
       "I help students, working professionals, and homemakers improve focus, confidence, emotional balance, and clarity through mind rewiring and energy upgrade techniques.",
   },
   {
     question: "What is brain/mind rewiring?",
     answer:
       "It is a process that replaces limiting thoughts with high-performance habits, using simple tools like NLP, subconscious programming, and mindset correction.",
   },
   {
     question: "Who can join your coaching?",
     answer:
       "Anyone feeling stuck, stressed, low in confidence, or wanting better focus, productivity, and life direction.",
   },
   {
     question: "What results can I expect?",
     answer:
       "Better concentration, stronger confidence, emotional stability, clarity in goals, and an overall rise in energy and performance.",
   },
   {
     question: "What methods do you use?",
     answer:
       "A blend of NLP, subconscious mind tools, habit-building, emotional healing, and practical life strategies.",
   },
   {
     question: "Are your sessions easy for students or beginners?",
     answer:
       "Yes. Sessions are simple, interactive, and activity-based, suitable for all maturity levels.",
   },
   {
     question: "How soon will I see results?",
     answer:
       "Most people feel a shift from the first session, with deeper changes in 21–45 days.",
   },
   {
     question: "Do you offer personalized coaching?",
     answer:
       "Yes—1:1 sessions, student programs, professional clarity sessions, and workshops for schools and groups.",
   },
   {
     question: "Are online sessions effective?",
     answer:
       "Yes. They are equally impactful and convenient from any location.",
   },
   {
     question: "How do I book a session?",
     answer:
       "Click on the “Book Session” or “Contact Now” button on the website.",
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
