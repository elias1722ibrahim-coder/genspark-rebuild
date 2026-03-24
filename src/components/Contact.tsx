import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Share2, Globe, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';
import { DeliveryCalculator } from './DeliveryCalculator';

export const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully! Elias will get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-stone-900 mb-6">{t('contact.title')}</h2>
              <p className="text-stone-600 text-lg mb-10">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</p>
                    <a href="tel:0915151722" className="text-xl font-bold text-stone-900 hover:text-green-600 transition-colors">
                      0915151722
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:elias1722ibrahim@gmail.com" className="text-xl font-bold text-stone-900 hover:text-green-600 transition-colors break-all">
                      elias1722ibrahim@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-xl font-bold text-stone-900">
                      Dire Dawa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Follow Our Journey</p>
                <div className="flex gap-4">
                  {[Share2, Globe, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-green-600 hover:text-white transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">{t('contact.form.name')}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Phone</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Sending..." : t('contact.form.send')}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Delivery Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <DeliveryCalculator />
        </motion.div>
      </div>
    </section>
  );
};