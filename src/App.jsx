import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { WhyMaxtronics } from './components/WhyMaxtronics';
import { LiveManifestTable } from './components/LiveManifestTable';
import { HowToOrder } from './components/HowToOrder';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import Inventory from './components/Inventory';
import { MAXTRONICS_PRODUCTS } from './data/maxtronicsData';

export function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash.toLowerCase().includes('inventory') ? 'inventory' : 'home';
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.toLowerCase().includes('inventory')) {
        setCurrentView('inventory');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Pre-loaded staged allocations for realistic wholesale demo
  const [cart, setCart] = useState(() => [
    {
      ...MAXTRONICS_PRODUCTS[0], // PS5 Slim Console
      allocatedQty: 10,
      currencySymbol: '£',
      currencyRate: 1.0
    },
    {
      ...MAXTRONICS_PRODUCTS[1], // DualSense Controller
      allocatedQty: 24,
      currencySymbol: '£',
      currencyRate: 1.0
    },
    {
      ...MAXTRONICS_PRODUCTS[2], // Astro Bot
      allocatedQty: 25,
      currencySymbol: '£',
      currencyRate: 1.0
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3800);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleStageProduct = (product, qty) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === product.id);
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          allocatedQty: (next[existingIdx].allocatedQty || 0) + qty,
          currencySymbol: product.currencySymbol || '£',
          currencyRate: product.currencyRate || 1.0
        };
        return next;
      } else {
        return [
          ...prev,
          {
            ...product,
            allocatedQty: qty,
            currencySymbol: product.currencySymbol || '£',
            currencyRate: product.currencyRate || 1.0
          }
        ];
      }
    });
  };

  const handleUpdateCartQty = (productId, newQty) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, allocatedQty: Math.max(item.moq, newQty) };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Allocation removed from staged order', 'info');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('All staged allocations cleared', 'info');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
      {/* Sticky Header */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.allocatedQty, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.location.hash = view === 'inventory' ? '#/inventory' : '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Flow or Inventory View */}
      <main style={{ flex: 1, paddingTop: '64px' }}>
        {currentView === 'inventory' ? (
          <Inventory
            onBack={() => {
              setCurrentView('home');
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            <Hero />

            <Categories onSelectCategory={(catId) => setSelectedCategory(catId)} />

            <WhyMaxtronics />

            <LiveManifestTable
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onStageProduct={handleStageProduct}
              onShowToast={showToast}
            />

            <HowToOrder />

            <ContactSection onShowToast={showToast} />
          </>
        )}
      </main>

      {/* Dual Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 300,
            backgroundColor: '#0F1A33',
            color: '#ffffff',
            padding: '0.85rem 1.25rem',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(15, 26, 51, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'slideUp 0.25s ease'
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '20px',
              color: toast.type === 'success' ? '#4ade80' : 'var(--primary-container)'
            }}
          >
            {toast.type === 'success' ? 'check_circle' : 'info'}
          </span>
          <span>{toast.message}</span>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
