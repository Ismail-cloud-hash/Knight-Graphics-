"use client";

import { useState, useEffect } from "react";

const questions = [
  {
    id: 'service',
    question: "What service are you looking for?",
    options: ["Branding & Identity", "Web Design & Development", "Social Media Management", "Printing Solutions", "Digital Marketing", "Other"]
  },
  {
    id: 'budget',
    question: "What is your estimated budget?",
    options: ["Under $1,000", "$1,000 - $3,000", "$3,000 - $10,000", "$10,000+"]
  },
  {
    id: 'timeline',
    question: "How soon do you need this?",
    options: ["As soon as possible", "Within 1-3 Months", "Within 3-6 Months", "Flexible timeline"]
  }
];

export default function CtaBanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleStartQuestionnaire = (e: any) => {
      const selectedService = e.detail?.service;
      if (selectedService) {
        setAnswers(prev => ({ ...prev, service: selectedService }));
        setStep(0); // Stay on step 1 so they can visually confirm
        
        setTimeout(() => {
          const ctaElement = document.getElementById('cta-banner');
          if (ctaElement) {
            ctaElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('start-questionnaire', handleStartQuestionnaire);
    return () => window.removeEventListener('start-questionnaire', handleStartQuestionnaire);
  }, []);

  const currentQ = questions[step];

  const handleOptionClick = (option: string) => {
    setAnswers({ ...answers, [currentQ.id]: option });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submitForm();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const submitForm = () => {
    let message = "Hi Knight Graphics, I'd like to discuss a project. Here are my details:\n\n";
    
    // Use short labels for a cleaner list format
    const labels: Record<string, string> = {
      'service': 'Service',
      'budget': 'Budget',
      'timeline': 'Timeline'
    };

    questions.forEach(q => {
      message += `▪️ *${labels[q.id]}:* ${answers[q.id] || 'Not specified'}\n`;
    });

    const encodedText = encodeURIComponent(message);
    // api.whatsapp.com handles line breaks more reliably across devices than wa.me
    window.open(`https://api.whatsapp.com/send?phone=94742440640&text=${encodedText}`, "_blank");
    
    // Reset back to start after sending
    setStep(0);
    setAnswers({});
  };

  return (
    <section id="cta-banner" className="w-full bg-red-600 py-24 md:py-40 border-b border-red-700">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* Progress / Step Indicator */}
        <div className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12 flex items-center gap-4 font-mono">
          <span className="w-8 md:w-12 h-[1px] bg-white"></span>
          STEP {step + 1} OF {questions.length}
          <span className="w-8 md:w-12 h-[1px] bg-white"></span>
        </div>

        {/* Question Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-[72px] text-white font-black uppercase tracking-tighter mb-16 text-center leading-[0.9]">
          {currentQ.question}
        </h2>

        {/* Options Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full mb-16">
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-6 md:px-8 py-4 md:py-5 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${answers[currentQ.id] === option
                  ? "border-white bg-white text-red-600 shadow-[0_0_40px_rgba(255,255,255,0.4)] transform scale-105"
                  : "border-red-500 bg-red-700 text-red-200 hover:text-white hover:border-red-400 hover:bg-red-500"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">

          {/* Back Button */}
          <div className="w-24 flex justify-center">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="text-red-200 hover:text-white text-[10px] uppercase font-mono tracking-[0.2em] font-bold transition-colors"
              >
                &larr; Back
              </button>
            )}
          </div>

          {/* Next / Submit Button */}
          <button
            onClick={handleNext}
            disabled={!answers[currentQ.id]}
            className={`group relative flex items-center justify-center gap-4 px-12 py-6 text-sm md:text-base font-black tracking-[0.2em] uppercase transition-all duration-300 ${answers[currentQ.id]
                ? "bg-white text-red-600 hover:bg-black hover:text-white cursor-pointer"
                : "bg-red-800 text-red-400 cursor-not-allowed border border-red-700"
              }`}
          >
            <span className="relative z-10">
              {step === questions.length - 1 ? "Submit Inquiry" : "Next Step"}
            </span>

            {/* Arrow Icon */}
            {step === questions.length - 1 ? (
              <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
              </svg>
            ) : (
              <span className="relative z-10 font-mono transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            )}
          </button>

          {/* Empty spacer to balance the back button */}
          <div className="w-24 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
}
