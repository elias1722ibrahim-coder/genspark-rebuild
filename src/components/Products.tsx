import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { useOrder } from '../context/OrderContext';
import { products, Product } from '../constants/products';

export const Products = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useOrder();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    const name = language === 'en' ? product.nameEn : product.nameAm;
    toast.success(`${name} ${t('common.added')} ${t('common.ready')}`);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{t('products.title')}</h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6" />
            <p className="text-stone-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={language === 'en' ? product.nameEn : product.nameAm}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-green-700">
                  {t(`products.categories.${product.categoryKey}` as any)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900">
                    {language === 'en' ? product.nameEn : product.nameAm}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-stone-600">4.8</span>
                  </div>
                </div>
                <p className="text-2xl font-black text-green-600 mb-6">
                  {product.price} {t('common.currency')}
                </p>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-3 bg-white border-2 border-green-600 text-green-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-colors group"
                >
                  <ShoppingCart size={18} />
                  {t('products.addToCart')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors">
            {t('products.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};