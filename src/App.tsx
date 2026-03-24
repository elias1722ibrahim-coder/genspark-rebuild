import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';
import { OrderProvider } from './context/OrderContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <LanguageProvider>
      <OrderProvider>
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-green-100 selection:text-green-800">
          <Navbar />
          <main>
            <Hero />
            <Products />
            <About />
            <Contact />
          </main>
          <Footer />
          <Cart />
          <Toaster position="top-center" expand={true} richColors />
        </div>
      </OrderProvider>
    </LanguageProvider>
  );
}

export default App;