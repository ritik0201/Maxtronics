import React, { useState, useEffect } from 'react';

export const Navbar = ({ cartCount, onOpenCart, currentView = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'hero', isRoute: false },
    { label: 'Manifest', id: 'manifest', isRoute: false },
    { label: 'Inventory', view: 'inventory', isRoute: true },
    { label: 'Categories', id: 'categories', isRoute: false },
    { label: 'Why Us', id: 'why-maxtronics', isRoute: false },
    { label: 'Contact', id: 'contact', isRoute: false }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        height: '68px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: isScrolled ? '0 4px 20px rgba(15, 26, 51, 0.05)' : 'none',
        transition: 'all 0.25s ease'
      }}
    >
      <div
        className="container-max"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        {/* Left: Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <div
            onClick={() => scrollTo('hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9px',
                backgroundColor: 'var(--primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 2px 8px rgba(0, 150, 199, 0.25)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                bolt
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.25rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: 'var(--on-surface)'
              }}
            >
              Maxtronics
            </span>
          </div>

          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--primary-container)',
              backgroundColor: 'var(--surface-container)',
              padding: '2px 7px',
              borderRadius: '4px'
            }}
          >
            B2B
          </span>
        </div>

        {/* Center: Streamlined Desktop Nav */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--surface-low)',
            padding: '4px 6px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)'
          }}
          className="desktop-menu"
        >
          {navLinks.map((item) => {
            const isActive = item.isRoute
              ? currentView === item.view
              : currentView === 'home' && false;

            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.isRoute) {
                    if (onNavigate) onNavigate(item.view);
                    else window.location.hash = `#/${item.view}`;
                  } else {
                    scrollTo(item.id);
                  }
                }}
                style={{
                  background: isActive ? '#ffffff' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '700' : '600',
                  color: isActive ? 'var(--primary-container)' : 'var(--secondary-neutral)',
                  boxShadow: isActive ? '0 1px 4px rgba(15, 26, 51, 0.08)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--on-surface)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--secondary-neutral)';
                }}
              >
                {item.label === 'Inventory' && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-container)',
                      display: 'inline-block'
                    }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Focused Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {/* Staged Cart button */}
          <button
            onClick={onOpenCart}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '9px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-subtle)',
              color: 'var(--on-surface)',
              fontSize: '0.8125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: '0 1px 3px rgba(15, 26, 51, 0.04)'
            }}
            title="Staged Allocations"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary-container)' }}>
              shopping_bag
            </span>
            <span className="cart-label">Staged</span>
            {cartCount > 0 && (
              <span
                style={{
                  backgroundColor: 'var(--primary-container)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  padding: '1px 6px',
                  borderRadius: '10px'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="desktop-cta"
            style={{
              display: 'none',
              padding: '0.5rem 1.1rem',
              backgroundColor: 'var(--primary-container)',
              color: '#ffffff',
              borderRadius: '9px',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 150, 199, 0.25)',
              transition: 'all 0.15s ease'
            }}
          >
            <span>Trade Enquiry</span>
          </button>

          {/* Compact User Profile */}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-container)',
              color: 'var(--secondary-neutral)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Verified B2B Account"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>
              person
            </span>
          </div>

          {/* Hamburger button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--on-surface)',
              padding: '0.25rem'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--surface-lowest)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setMobileMenuOpen(false);
                if (item.isRoute) {
                  if (onNavigate) onNavigate(item.view);
                  else window.location.hash = `#/${item.view}`;
                } else {
                  scrollTo(item.id);
                }
              }}
              style={{
                textAlign: 'left',
                padding: '0.65rem 0.75rem',
                borderRadius: '8px',
                background: item.isRoute && currentView === item.view ? 'var(--surface-low)' : 'none',
                border: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600',
                color: item.isRoute && currentView === item.view ? 'var(--primary-container)' : 'var(--on-surface)',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-btn {
            display: block !important;
          }
          .cart-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
