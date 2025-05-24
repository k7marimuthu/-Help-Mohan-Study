import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span className="ml-4">
          {isOpen ? (
            <ChevronUp className="text-blue-600" />
          ) : (
            <ChevronDown className="text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How will my donation be used?",
      answer: "100% of your donation will go directly toward Mohan's education expenses, including tuition fees, books, accommodation, and travel costs."
    },
    {
      question: "Is there a minimum donation amount?",
      answer: "No, there is no minimum amount. Every contribution, even as small as Rs 1, makes a difference and is greatly appreciated."
    },
    {
      question: "Can I get updates on Mohan's progress?",
      answer: "Yes! Leave your email in the contact form below, and we'll send you periodic updates about Mohan's educational journey."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Currently, donations are not tax-deductible as this is a direct personal fundraiser. We're working on establishing a formal structure for future educational support initiatives."
    },
    {
      question: "How do I know my donation is going to the right place?",
      answer: "All donations go directly to Mohan's UPI account. We also provide regular updates and complete transparency about how funds are being utilized."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;