import React, { useState, useEffect } from 'react';

export const Navbar = ({ cartCount, onOpenCart }) => {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        height: '64px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: isScrolled ? '0 4px 16px rgba(37, 87, 246, 0.06)' : '0 1px 8px rgba(37, 87, 246, 0.04)',
        transition: 'all 0.25s ease'
      }}
    >
      <div
        className="container-max"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left: Brand Logo & B2B Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
            {/* Maxtronics Electric SVG Mark */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 2px 8px rgba(37, 87, 246, 0.3)'
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
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.15rem 0.55rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.04em',
              backgroundColor: 'var(--surface-container-high)',
              color: 'var(--primary)',
              textTransform: 'uppercase'
            }}
          >
            B2B WHOLESALE
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-menu"
        >
          <button
            onClick={() => scrollTo('categories')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--secondary-neutral)',
              cursor: 'pointer',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary-container)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--secondary-neutral)')}
          >
            Categories
          </button>
          <button
            onClick={() => scrollTo('why-maxtronics')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--secondary-neutral)',
              cursor: 'pointer',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary-container)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--secondary-neutral)')}
          >
            Why Maxtronics
          </button>
          <button
            onClick={() => scrollTo('manifest')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--secondary-neutral)',
              cursor: 'pointer',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary-container)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--secondary-neutral)')}
          >
            Live Manifest
          </button>
          <button
            onClick={() => scrollTo('how-to-order')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--secondary-neutral)',
              cursor: 'pointer',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary-container)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--secondary-neutral)')}
          >
            How to Order
          </button>
          <button
            onClick={() => scrollTo('contact')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--secondary-neutral)',
              cursor: 'pointer',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary-container)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--secondary-neutral)')}
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          {/* Staged Cart button */}
          <button
            onClick={onOpenCart}
            className="btn-secondary btn-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem'
            }}
            title="Staged Allocations"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary-container)' }}>
              shopping_bag
            </span>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600' }}>Staged Order</span>
            {cartCount > 0 && (
              <span
                style={{
                  backgroundColor: 'var(--primary-container)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.1rem 0.4rem',
                  borderRadius: 'var(--radius-badge)'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Get Trade Pricing CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="desktop-cta btn-primary btn-sm"
            style={{
              display: 'none',
              padding: '0.55rem 1.15rem'
            }}
          >
            <span>Get Trade Pricing</span>
          </button>

          {/* User Profile Avatar */}
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer'
            }}
            title="Verified Trade Account"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              person
            </span>
          </div>

          {/* Hamburger button */}
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
            gap: '0.625rem'
          }}
        >
          {['categories', 'why-maxtronics', 'manifest', 'how-to-order', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                textAlign: 'left',
                padding: '0.65rem 0.75rem',
                borderRadius: '8px',
                background: 'none',
                border: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600',
                color: 'var(--on-surface)',
                cursor: 'pointer'
              }}
            >
              {id.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
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
        @media (max-width: 859px) {
          .mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
