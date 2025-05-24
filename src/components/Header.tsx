import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Help Mohan Study
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`font-medium hover:text-yellow-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#story" 
              className={`font-medium hover:text-yellow-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Story
            </a>
            <a 
              href="#donate" 
              className={`font-medium hover:text-yellow-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Donate
            </a>
            <a 
              href="#contact" 
              className={`font-medium hover:text-yellow-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </a>
            <a 
              href="#donate" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-lg flex items-center transition-all duration-300"
            >
              <Heart size={16} className="mr-2" /> Donate Now
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#story" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </a>
            <a 
              href="#donate" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#donate" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-lg flex items-center justify-center transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={16} className="mr-2" /> Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;