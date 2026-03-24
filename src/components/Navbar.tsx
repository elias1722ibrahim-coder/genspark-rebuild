import React, { useState, useEffect } from 'react';
import { ShoppingBasket, Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <ShoppingBasket className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-green-800' : 'text-green-700'}`}>
              Dire-greenBasket
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-green-600 transition-colors px-3 py-1 border border-stone-200 rounded-lg"
            >
              <Globe size={16} />
              {language === 'en' ? 'አማርኛ' : 'English'}
            </button>

            <a 
              href="tel:0915151722"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={16} />
              {t('nav.orderNow')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-stone-600"
            >
              <Globe size={24} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-stone-600 hover:bg-green-50 hover:text-green-600 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 space-y-3 border-t border-stone-100 mt-4">
                <a 
                  href="tel:0915151722"
                  className="flex items-center gap-3 text-stone-600 text-sm"
                >
                  <Phone size={18} className="text-green-600" />
                  0915151722
                </a>
                <a 
                  href="mailto:elias1722ibrahim@gmail.com"
                  className="flex items-center gap-3 text-stone-600 text-sm"
                >
                  <Mail size={18} className="text-green-600" />
                  elias1722ibrahim@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};