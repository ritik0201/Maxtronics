import React from 'react';
import { MAXTRONICS_STEPS } from '../data/maxtronicsData';

export const HowToOrder = () => {
  return (
    <section id="how-to-order" style={{ width: '100%', backgroundColor: 'var(--surface-container)', padding: '5.5rem 0' }}>
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
            Streamlined Onboarding
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
            How to Order in 3 Simple Steps
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Get verified and access live trade inventory manifests within 24 business hours.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {MAXTRONICS_STEPS.map((s) => (
            <div
              key={s.step}
              className="card-maxtronics"
              style={{
                backgroundColor: 'var(--surface-lowest)',
                borderRadius: 'var(--radius-card)',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(37, 87, 246, 0.06)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.15rem',
                      fontWeight: '800',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'var(--surface-container-high)',
                      color: 'var(--primary-container)'
                    }}
                  >
                    {s.step}
                  </span>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px', color: 'var(--border-strong)' }}>
                    {s.icon}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--on-surface)' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9375rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--secondary-neutral)'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--primary-container)', marginRight: '0.45rem' }}>
                  verified_user
                </span>
                <span>{s.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
