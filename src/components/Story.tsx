import React from 'react';
import { BookOpen, Star, GraduationCap } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mohan's Story</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of determination, hope, and the pursuit of education against all odds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Background</h3>
            <p className="text-gray-600">
              Mohan comes from a humble family where financial constraints have always been a challenge. Despite these limitations, he has consistently excelled academically and dreams of pursuing finance to help lift his family out of poverty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Star className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Excellence</h3>
            <p className="text-gray-600">
              Despite financial hardships, Mohan has maintained outstanding academic records throughout his education. His dedication and aptitude for finance have earned him admiration from teachers and peers alike.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-yellow-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">The Dream</h3>
            <p className="text-gray-600">
              Mohan has secured admission to study finance abroad, an opportunity that could transform his life and his family's future. However, without financial support, this dream remains out of reach.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <blockquote className="italic text-gray-600 text-lg border-l-4 border-yellow-500 pl-4">
            "Education is not just a personal achievement but a tool to uplift my entire family and community. With your support, I can turn this dream into reality and create a ripple effect of positive change."
            <footer className="text-gray-700 font-semibold mt-2 not-italic">— Mohan Kuberan</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Story;