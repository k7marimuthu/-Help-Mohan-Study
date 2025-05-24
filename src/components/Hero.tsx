import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5">
            <div className="flex items-center mb-4">
              <GraduationCap size={28} className="mr-2" />
              <p className="text-sm md:text-base bg-yellow-500 text-blue-900 font-semibold px-3 py-1 rounded-full inline-flex items-center">
                Education Fundraiser
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Help Mohan Study Finance Abroad
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Every contribution, no matter how small, brings Mohan one step closer to achieving his dream of financial education and breaking the cycle of poverty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#donate" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg text-center transition-all duration-300 flex items-center justify-center"
              >
                <Sparkles size={18} className="mr-2" />
                Donate Now
              </a>
              <a 
                href="#story" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg text-center transition-all duration-300"
              >
                Read Mohan's Story
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="bg-white p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <GraduationCap size={64} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                  <p className="text-white font-semibold">MohanaKuberan</p>
                  <p className="text-white/80 text-sm">Aspiring Finance Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;