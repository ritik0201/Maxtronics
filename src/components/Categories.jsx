import React from 'react';
import { MAXTRONICS_CATEGORIES } from '../data/maxtronicsData';

export const Categories = ({ onSelectCategory }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" style={{ width: '100%', backgroundColor: 'var(--surface-lowest)', padding: '5.5rem 0' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--primary-container)',
              backgroundColor: 'var(--surface-container-high)',
              padding: '0.35rem 0.85rem',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '0.75rem'
            }}
          >
            Official Inventory
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: 'var(--on-surface)',
              marginBottom: '0.75rem'
            }}
          >
            Wholesale Categories
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Comprehensive wholesale distribution across all major tier-1 gaming ecosystems and accessories.
          </p>
        </div>

        {/* 3x2 Grid of 6 Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {MAXTRONICS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="card-maxtronics"
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat.id);
                scrollTo('manifest');
              }}
              style={{
                backgroundColor: 'var(--surface-lowest)',
                borderRadius: 'var(--radius-card)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                {/* Icon box */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--surface-container-high)',
                    color: 'var(--primary-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                    {cat.icon}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--on-surface)' }}>
                    {cat.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--secondary-neutral)',
                      backgroundColor: 'var(--surface-low)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>

                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {cat.description}
                </p>
              </div>

              {/* Bottom Catalog Action Bar */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    color: 'var(--primary-container)'
                  }}
                >
                  <span>View Catalog</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </span>

                <span style={{ fontSize: '0.8125rem', color: 'var(--secondary-neutral)', fontWeight: '500' }}>
                  {cat.logistics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
