import React from 'react';
import { MAXTRONICS_ASSURANCES } from '../data/maxtronicsData';

export const WhyMaxtronics = () => {
  return (
    <section id="why-maxtronics" style={{ width: '100%', backgroundColor: 'var(--surface-low)', padding: '5.5rem 0' }}>
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Heading & Trust Stamp */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--primary-container)',
                marginBottom: '0.5rem'
              }}
            >
              Supply Chain Assurance
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: 'var(--on-surface)',
                lineHeight: 1.2
              }}
            >
              Why Retailers Partner With Maxtronics
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--on-surface-variant)',
                marginTop: '1.25rem',
                lineHeight: 1.65
              }}
            >
              Maxtronics eliminates supply chain friction for independent gaming shops, retail chains, and e-commerce stores worldwide with reliable stock allocation and honest trade terms.
            </p>

            {/* Protected Shipments Box */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: 'var(--surface-lowest)',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--amber-light)',
                  color: 'var(--amber-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                  shield
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '0.9375rem', fontWeight: '700', color: 'var(--on-surface)', display: 'block' }}>
                  Protected Shipments
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>
                  Full manifest guarantee & serial record tracking on every consignment.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Numbered Feature Rows in White 20px Card */}
          <div
            className="card-maxtronics"
            style={{
              backgroundColor: 'var(--surface-lowest)',
              borderRadius: 'var(--radius-card)',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 180, 216, 0.06)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {MAXTRONICS_ASSURANCES.map((item, index) => {
              const isLast = index === MAXTRONICS_ASSURANCES.length - 1;
              return (
                <div
                  key={item.num}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    paddingTop: index === 0 ? 0 : '1.75rem',
                    paddingBottom: isLast ? 0 : '1.75rem',
                    borderBottom: isLast ? 'none' : '1px solid var(--border-subtle)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      color: 'var(--primary-container)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.125rem', fontWeight: '700', color: 'var(--on-surface)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9375rem', marginTop: '0.35rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
