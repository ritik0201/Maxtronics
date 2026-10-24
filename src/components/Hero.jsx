import React from 'react';

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--surface-low)',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      {/* Ambient pale blue light gradients */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '-6rem',
          left: '-5rem',
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 180, 216, 0.08)',
          filter: 'blur(64px)'
        }}
      />
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '50%',
          right: '-6rem',
          width: '26rem',
          height: '26rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(217, 226, 255, 0.45)',
          filter: 'blur(72px)'
        }}
      />

      <div className="container-max" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Value Proposition */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Amber Mini-Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.3rem 0.85rem',
                borderRadius: 'var(--radius-badge)',
                backgroundColor: 'var(--amber-light)',
                color: 'var(--amber-dark)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1rem'
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--amber-accent)',
                  display: 'inline-block'
                }}
              />
              <span>Trade Only</span>
            </div>

            {/* Main Hero Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.35rem, 5vw, 3.5rem)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--on-surface)',
                marginBottom: '1rem'
              }}
            >
              Gaming Wholesale, <br />
              <span style={{ color: 'var(--primary-container)' }}>Simplified.</span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--on-surface-variant)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}
            >
              Consoles, games and accessories at trade prices, shipped worldwide to verified gaming retailers and e-commerce operators.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary"
                style={{
                  height: '48px',
                  padding: '0 1.75rem',
                  fontSize: '0.9375rem',
                  fontWeight: '600'
                }}
              >
                Apply for Trade Account
              </button>

              <button
                onClick={() => scrollTo('manifest')}
                className="btn-secondary"
                style={{
                  height: '48px',
                  padding: '0 1.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: '600'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary-container)' }}>
                  table_chart
                </span>
                <span>Live Manifest</span>
              </button>

              <button
                onClick={() => scrollTo('categories')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--primary-container)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem'
                }}
              >
                <span>See categories</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_downward</span>
              </button>
            </div>

            {/* Mini Inline Metrics */}
            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                fontSize: '0.875rem',
                color: 'var(--secondary-neutral)'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--on-surface)', fontWeight: '600' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px' }}>
                  sports_esports
                </span>
                All Platforms
              </span>
              <span style={{ color: 'var(--border-strong)', fontWeight: 'bold' }}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--on-surface)', fontWeight: '600' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px' }}>
                  public
                </span>
                Worldwide Shipping
              </span>
              <span style={{ color: 'var(--border-strong)', fontWeight: 'bold' }}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--on-surface)', fontWeight: '600' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px' }}>
                  payments
                </span>
                Trade Pricing
              </span>
            </div>
          </div>

          {/* Right Column: White Quick Facts Card (20px radius) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="card-maxtronics"
              style={{
                width: '100%',
                maxWidth: '460px',
                backgroundColor: 'var(--surface-lowest)',
                borderRadius: 'var(--radius-card)',
                padding: '2rem',
                boxShadow: '0 12px 32px rgba(0, 180, 216, 0.08)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--surface-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-container)'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.125rem', fontWeight: '700', color: 'var(--on-surface)' }}>
                    Quick Facts
                  </h2>
                </div>

                <span
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    backgroundColor: 'var(--surface-container-high)',
                    color: 'var(--primary-container)',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}
                >
                  Live Manifests
                </span>
              </div>

              {/* 4 Feature Bullet List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface-container-high)',
                      color: 'var(--primary-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 'bold' }}>check</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--on-surface)' }}>Genuine stock</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>
                      100% official factory-sealed hardware and boxed software.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface-container-high)',
                      color: 'var(--primary-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 'bold' }}>check</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--on-surface)' }}>Competitive trade pricing</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>
                      Tiered volume rates with weekly verified manifest updates.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface-container-high)',
                      color: 'var(--primary-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 'bold' }}>check</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--on-surface)' }}>Fast dispatch</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>
                      Same-day warehouse fulfillment & insured global courier freight.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--surface-container-high)',
                      color: 'var(--primary-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 'bold' }}>check</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--on-surface)' }}>Dedicated account manager</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)', marginTop: '0.15rem' }}>
                      Direct wholesale rep for allocation holds and bespoke dispatch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sparkline Logistics Card */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '0.875rem 1.15rem',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface-low)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary-neutral)', letterSpacing: '0.04em' }}>
                    Avg Logistics Turnaround
                  </span>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--on-surface)' }}>
                    &lt; 18 Hours
                  </span>
                </div>

                <svg width="84" height="34" viewBox="0 0 100 40" fill="none">
                  <path
                    d="M0 35 L20 28 L40 32 L60 14 L80 18 L100 4"
                    stroke="#2557F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
