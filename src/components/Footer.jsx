import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ onNavigate }) => {
  return (
    <footer
      style={{
        paddingTop: '5rem',
        paddingBottom: '4rem',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border-light)'
      }}
    >
      <div className="container">
        {/* Brand Mark matching Basco Distribution */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '1.5rem'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 2px 8px rgba(0, 139, 163, 0.25)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              bolt
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-dark)'
            }}
          >
            MAXTRONICS
          </span>
        </div>

        <p
          style={{
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            marginBottom: '0.75rem'
          }}
        >
          Wholesale Distribution • Global Sourcing
        </p>

        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            marginBottom: '1.75rem'
          }}
        >
          Trusted by partners since 2012.
        </p>

        {/* Quick Portal Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {/* <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('home');
              } else {
                window.location.hash = '';
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-dark)',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Home
          </button> */}
          {/* <span style={{ color: 'var(--color-border-light)' }}>•</span> */}
          {/* <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('inventory');
              } else {
                window.location.hash = '#/inventory';
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              background: 'var(--color-primary-light, #f0fafd)',
              border: '1px solid var(--color-primary-light-border, #d0f0f7)',
              color: 'var(--color-primary, #008ba3)',
              fontSize: '0.875rem',
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>inventory_2</span>
            <span>Live EU Inventory Portal</span>
          </button> */}
        </div>

        <div
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border-light)',
            maxWidth: '420px',
            margin: '0 auto'
          }}
        >
          &copy; {CURRENT_YEAR} MAXTRONICS Wholesale. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
