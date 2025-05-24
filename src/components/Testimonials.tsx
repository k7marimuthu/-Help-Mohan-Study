import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Former Teacher',
    text: 'Mohan was always an exceptional student with a clear aptitude for numbers and finance. His determination despite his circumstances is truly inspiring.'
  },
  {
    id: 2,
    name: 'Raj Kumar',
    role: 'Community Member',
    text: 'I\'ve known Mohan\'s family for years. They\'ve always worked hard and prioritized education. This opportunity could change everything for them.'
  },
  {
    id: 3,
    name: 'Anita Patel',
    role: 'Early Supporter',
    text: 'Contributing to Mohan\'s education is an investment in a brighter future. His commitment to use his knowledge to help others is what convinced me to donate.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What People Say About Mohan</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from people who believe in Mohan's potential and his journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md relative">
              <Quote className="absolute top-4 right-4 text-blue-100" size={48} />
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;