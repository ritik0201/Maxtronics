import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ width: '100%', backgroundColor: 'var(--surface-lowest)', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Upper Footer */}
      <div style={{ padding: '3rem 0 2rem 0' }}>
        <div
          className="container-max"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            {/* Left: Logo & B2B Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--primary-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
              </div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--on-surface)' }}>
                Maxtronics
              </span>
              <span
                style={{
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--surface-container-high)',
                  color: 'var(--primary-container)',
                  fontSize: '0.72rem',
                  fontWeight: '700'
                }}
              >
                B2B Wholesale
              </span>
            </div>

            {/* Center: Quick Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--secondary-neutral)' }}>
              <a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Trade Terms & Conditions</a>
              <a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Shipping & Returns</a>
            </div>

            {/* Right: Copyright */}
            <div style={{ fontSize: '0.8125rem', color: 'var(--secondary-neutral)' }}>
              © {new Date().getFullYear()} Maxtronics. All rights reserved.
            </div>
          </div>

          {/* Trademark Disclaimer */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--secondary-neutral)', lineHeight: 1.5 }}>
              PlayStation, Xbox, Nintendo, and other brand names are trademarks of their respective owners. Maxtronics is an independent B2B distributor and does not hold direct manufacturer endorsement unless explicitly stated.
            </p>
          </div>
        </div>
      </div>

      {/* Lower Institutional Tier */}
      <div style={{ backgroundColor: 'var(--surface-low)', borderTop: '1px solid var(--border-subtle)', padding: '1.5rem 0' }}>
        <div
          className="container-max"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <span style={{ fontWeight: '700', color: 'var(--on-surface)' }}>Maxtronics Distribution</span>
            <span style={{ color: 'var(--border-strong)' }}>·</span>
            <span style={{ color: 'var(--on-surface-variant)' }}>Global institutional hardware, software, and gaming trade logistics.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--on-surface-variant)', fontWeight: '600', fontSize: '0.75rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--primary-container)' }}>verified</span>
              ISO 9001 Certified Supplier
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--border-strong)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--primary-container)' }}>verified_user</span>
              Verified Trade Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
