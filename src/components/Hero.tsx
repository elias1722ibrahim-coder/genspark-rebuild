import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-green-50/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                <Leaf size={16} />
                <span>#1 Organic Shop in Dire Dawa</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
                {t('hero.title').split('Your Table')[0]}
                <span className="text-green-600">
                  {t('hero.title').includes('Your Table') ? 'Your Table' : ''}
                  {t('hero.title').includes('ማዕድ') ? 'ማዕድ' : ''}
                </span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl group"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-800 border-2 border-stone-100 rounded-xl font-bold text-lg hover:border-green-200 transition-all"
                >
                  {t('nav.about')}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-stone-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-green-500" />
                  100% Organic
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-green-500" />
                  Fast Delivery
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/green-veg-grid-02af29af-1774367628386.webp" 
                  alt="Fresh Green Vegetables" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <span className="text-xl font-bold">4.9</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">Top Rated</p>
                    <p className="text-xs text-stone-500">In Dire Dawa City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};