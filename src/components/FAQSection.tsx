import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is the average cost of interior design services in Bangalore?",
      answer: "The cost of interior design in Bangalore typically ranges from ₹800 to ₹2,500 per square foot, depending on the scope of work and materials chosen. Basic interior design starts at ₹800-₹1,200 per sq ft, mid-range projects cost ₹1,200-₹1,800 per sq ft, and luxury interior design can go from ₹1,800-₹2,500+ per sq ft."
    },
    {
      question: "How long does a typical home interior design project take in Bangalore?",
      answer: "A complete home interior design project in Bangalore usually takes 45-90 days from design approval to completion. For a 2BHK apartment, expect 45-60 days; for a 3BHK, approximately 60-75 days; and for villas or larger homes, 75-90 days."
    },
    {
      question: "Do you provide modular kitchen design services in Bangalore?",
      answer: "Yes, we specialize in modular kitchen design and installation across Bangalore. Our modular kitchens feature premium hardware, soft-close mechanisms, efficient storage solutions, and contemporary designs tailored to Indian cooking needs."
    },
    {
      question: "What areas in Bangalore do you serve for interior design services?",
      answer: "We provide comprehensive interior design services throughout Bangalore, including prime locations such as Whitefield, Electronic City, Marathahalli, Koramangala, Indiranagar, Jayanagar, JP Nagar, and many more areas."
    },
    {
      question: "Can you work with my existing furniture and incorporate it into the new design?",
      answer: "Absolutely! Our Bangalore interior designers excel at blending existing furniture pieces with new design elements to create cohesive, beautiful spaces."
    },
    {
      question: "Do you provide 3D design visualization before starting the project?",
      answer: "Yes, we provide detailed 3D visualization and walkthrough presentations for all our Bangalore interior design projects."
    },
    {
      question: "What are the latest interior design trends popular in Bangalore homes?",
      answer: "Current interior design trends in Bangalore homes include minimalist Scandinavian designs, biophilic design, smart home integration, sustainable materials, and multifunctional furniture."
    },
    {
      question: "Do you offer EMI options for interior design projects in Bangalore?",
      answer: "Yes, we provide flexible EMI payment options for interior design projects in Bangalore through partnerships with leading financial institutions."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 bg-black w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/80">Find answers to common questions about our interior design services</p>
        </div>

        <div className="space-y-2 w-full">
          {faqItems.map((item, index) => (
            <div key={index} className="w-full">
              <div 
                className="w-full py-4 border-b border-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/5"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center w-full max-w-full">
                  <h3 className="text-lg md:text-xl font-medium text-white pr-4 truncate">{item.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0 w-5 h-5 text-white/70" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 w-5 h-5 text-white/70" />
                  )}
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/70 text-base leading-relaxed pb-2">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
