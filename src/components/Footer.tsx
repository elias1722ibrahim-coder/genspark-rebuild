import React from 'react';
import { ShoppingBasket, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg text-white">
                <ShoppingBasket size={24} />
              </div>
              <span className="text-2xl font-bold text-stone-900">Dire-greenBasket</span>
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">{t('nav.home')} Links</h4>
            <ul className="space-y-4">
              {[t('nav.home'), t('nav.about'), t('nav.products'), 'Delivery Areas'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-500 hover:text-green-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Categories</h4>
            <ul className="space-y-4">
              {[t('products.categories.vegetables'), t('products.categories.spices'), t('products.categories.dairy')].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-500 hover:text-green-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-stone-600 mb-4 text-sm">Subscribe to get seasonal harvest alerts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white border border-stone-200 px-4 py-2 rounded-lg focus:outline-none focus:border-green-500 w-full"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Dire-greenBasket Dire Dawa. {t('footer.rights')}</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Dire Dawa by Elias Ibrahim
          </div>
        </div>
      </div>
    </footer>
  );
};