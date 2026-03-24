import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  
  const benefits = [
    'Sourced directly from Dire Dawa farms',
    'Certified pesticide-free produce',
    'Eco-friendly biodegradable packaging',
    'Same-day delivery within city limits',
    'Supporting local farming communities',
    'Unbeatable freshness guaranteed'
  ];

  return (
    <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-stone-800">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/46eeaca8-3667-4fbc-817b-15c927a93602/farmer-about-1f4d915f-1774367628126.webp" 
                  alt="Our Farmer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 p-8 rounded-2xl hidden md:block">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-90">Local Farms</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t('about.title').split('Us')[0]}
                <span className="text-green-500">
                  {t('about.title').includes('Us') ? 'Us' : ''}
                  {t('about.title').includes('እኛን') ? 'እኛን ይመርጣሉ' : ''}
                </span>
              </h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                {t('about.p1')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-stone-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex items-center gap-4 p-6 bg-stone-800/50 rounded-2xl border border-stone-700">
                <div className="w-16 h-16 rounded-full bg-stone-700 flex items-center justify-center text-2xl font-bold text-green-500">
                  E
                </div>
                <div>
                  <p className="font-bold text-xl italic text-stone-200">"Your health is our harvest."</p>
                  <p className="text-sm text-stone-400">— Elias Ibrahim, Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};