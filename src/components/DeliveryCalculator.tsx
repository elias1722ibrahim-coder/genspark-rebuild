import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DeliveryCalculator = () => {
  const { t, language } = useLanguage();
  const [distance, setDistance] = useState<string>('');
  const [fee, setFee] = useState<number | null>(null);

  const calculateFee = () => {
    const dist = parseFloat(distance);
    if (isNaN(dist)) return;

    // Delivery Logic: 50 ETB base + 20 ETB per KM
    const baseFee = 50;
    const perKmFee = 20;
    const total = baseFee + (dist * perKmFee);
    setFee(total);
  };

  return (
    <div className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-inner">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-600 rounded-2xl text-white">
          <Truck size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-stone-900">{t('delivery.title')}</h3>
          <p className="text-sm text-stone-600">{t('delivery.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            {t('delivery.distance')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <MapPin size={18} />
            </div>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="e.g. 5"
              className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          onClick={calculateFee}
          className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <Calculator size={18} />
          {t('delivery.calculate')}
        </button>

        {fee !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-4 bg-white rounded-2xl border border-green-200 text-center"
          >
            <p className="text-stone-600 text-sm">{t('delivery.result')}</p>
            <p className="text-3xl font-black text-green-600">
              {fee} {t('common.currency')}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};