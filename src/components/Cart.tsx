import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useOrder } from '../context/OrderContext';
import { toast } from 'sonner';

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'cbe' | 'telebirr' | 'ebirr' | null>(null);
  const { t, language } = useLanguage();
  const { cart, removeFromCart, updateQuantity, totalItems, subtotal, clearCart } = useOrder();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckout(true);
  };

  const placeOrder = () => {
    if (!paymentMethod) {
      toast.error('Please select a payment method');
      return;
    }
    toast.success(t('payment.success'));
    clearCart();
    setIsOpen(false);
    setIsCheckout(false);
    setPaymentMethod(null);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {totalItems}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setIsCheckout(false);
              }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <ShoppingCart className="text-green-600" />
                  {isCheckout ? t('cart.checkout') : t('cart.title')}
                </h2>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsCheckout(false);
                  }}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {!isCheckout ? (
                  cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-stone-400 gap-4">
                      <ShoppingCart size={64} strokeWidth={1} />
                      <p className="text-lg font-medium">{t('cart.empty')}</p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-green-600 font-bold hover:underline"
                      >
                        {t('hero.cta')}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                            <img src={item.img} alt={item.nameEn} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-stone-900">
                              {language === 'en' ? item.nameEn : item.nameAm}
                            </h3>
                            <p className="text-green-600 font-bold">
                              {item.price} {t('common.currency')}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center border border-stone-200 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:text-green-600 transition-colors"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:text-green-600 transition-colors"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-stone-400 hover:text-red-500 transition-colors ml-auto"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="font-bold text-stone-900 uppercase tracking-wider text-xs">{t('payment.title')}</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { id: 'cash', icon: <CreditCard />, label: t('payment.cash') },
                          { id: 'cbe', icon: <CreditCard />, label: t('payment.cbe') },
                          { id: 'telebirr', icon: <CreditCard />, label: t('payment.telebirr') },
                          { id: 'ebirr', icon: <CreditCard />, label: t('payment.ebirr') }
                        ].map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setPaymentMethod(method.id as any)}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                              paymentMethod === method.id
                                ? 'border-green-600 bg-green-50 text-green-900'
                                : 'border-stone-100 hover:border-stone-200'
                            }`}
                          >
                            <div className={`${paymentMethod === method.id ? 'text-green-600' : 'text-stone-400'}`}>
                              {method.icon}
                            </div>
                            <span className="font-bold">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {(paymentMethod === 'telebirr' || paymentMethod === 'ebirr') && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800"
                      >
                        <p className="font-bold flex items-center gap-2">
                          <CreditCard size={18} />
                          {t('payment.number')}
                        </p>
                      </motion.div>
                    )}

                    <div className="p-4 bg-stone-50 rounded-xl space-y-2">
                      <div className="flex justify-between text-stone-600">
                        <span>{t('cart.items')} ({totalItems})</span>
                        <span>{subtotal} {t('common.currency')}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg text-stone-900 pt-2 border-t border-stone-200">
                        <span>{t('cart.total')}</span>
                        <span>{subtotal} {t('common.currency')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-stone-100 bg-stone-50">
                  {!isCheckout ? (
                    <div className="space-y-4">
                      <div className="flex justify-between font-bold text-lg text-stone-900">
                        <span>{t('cart.subtotal')}</span>
                        <span>{subtotal} {t('common.currency')}</span>
                      </div>
                      <button
                        onClick={handleCheckout}
                        className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                      >
                        {t('cart.checkout')}
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        onClick={() => setIsCheckout(false)}
                        className="flex-1 py-4 bg-white border border-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-100 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={placeOrder}
                        className="flex-[2] py-4 bg-stone-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200"
                      >
                        {t('payment.confirm')}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};