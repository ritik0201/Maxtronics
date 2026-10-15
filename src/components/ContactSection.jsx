import React, { useState } from 'react';

export const ContactSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    bizName: '',
    bizWebsite: '',
    bizEmail: '',
    bizPhone: '',
    bizMessage: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Trade application received. A Maxtronics representative will contact you within 24 business hours.', 'success');
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      bizName: '',
      bizWebsite: '',
      bizEmail: '',
      bizPhone: '',
      bizMessage: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" style={{ width: '100%', backgroundColor: 'var(--surface-lowest)', padding: '5.5rem 0' }}>
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--primary-container)',
                marginBottom: '0.5rem',
                display: 'block'
              }}
            >
              Open Trade Inquiries
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
              Become a Trade Customer
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
              Ready to upgrade your gaming inventory? Apply for an approved wholesale trade account to view live unit pricing and unlock volume discounts.
            </p>

            {/* 3 Contact Cards */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Phone */}
              <div
                style={{
                  backgroundColor: 'var(--surface-low)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: 'var(--primary-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                </div>
                <div>
                  <a
                    href="tel:+442081234567"
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--on-surface)',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    +44 (0) 20 8123 4567
                  </a>
                  <span style={{ fontSize: '0.78125rem', color: 'var(--on-surface-variant)' }}>
                    Trade Sales Desk, Mon-Fri 08:30-17:30 GMT
                  </span>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  backgroundColor: 'var(--surface-low)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: 'var(--primary-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
                </div>
                <div>
                  <a
                    href="mailto:trade@maxtronicsonline.com"
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--on-surface)',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    trade@maxtronicsonline.com
                  </a>
                  <span style={{ fontSize: '0.78125rem', color: 'var(--on-surface-variant)' }}>
                    Manifest sheets & allocation inquiries
                  </span>
                </div>
              </div>

              {/* Warehouse */}
              <div
                style={{
                  backgroundColor: 'var(--surface-low)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    color: 'var(--primary-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>warehouse</span>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1rem', fontWeight: '700', color: 'var(--on-surface)', display: 'block' }}>
                    Unit 4, Gateway Logistics Park
                  </span>
                  <span style={{ fontSize: '0.78125rem', color: 'var(--on-surface-variant)' }}>
                    Tech Way, London, UK (Main Distribution Hub)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Trade Form Card */}
          <div
            className="card-maxtronics"
            style={{
              backgroundColor: 'var(--surface-lowest)',
              borderRadius: 'var(--radius-card)',
              padding: '2.5rem',
              boxShadow: '0 12px 32px rgba(37, 87, 246, 0.06)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
              Trade Account Application
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: '1.75rem' }}>
              Complete the verification form below to activate commercial rates.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  backgroundColor: 'var(--surface-low)',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--success-bg)',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>check_circle</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>
                  Application Received
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  A Maxtronics trade representative has been assigned to your verification for <strong>{formData.bizName || 'your business'}</strong> and will respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary btn-sm"
                  style={{ padding: '0.6rem 1.25rem' }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.15rem' }}>
                  <div>
                    <label htmlFor="bizName" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                      Store / Business Name *
                    </label>
                    <input
                      id="bizName"
                      required
                      type="text"
                      placeholder="e.g. Apex Game Lounge Ltd"
                      value={formData.bizName}
                      onChange={(e) => setFormData({ ...formData, bizName: e.target.value })}
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 0.85rem',
                        borderRadius: 'var(--radius-btn)',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: '#ffffff',
                        color: 'var(--on-surface)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary-container)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label htmlFor="bizWebsite" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                      Website / Store URL
                    </label>
                    <input
                      id="bizWebsite"
                      type="url"
                      placeholder="https://..."
                      value={formData.bizWebsite}
                      onChange={(e) => setFormData({ ...formData, bizWebsite: e.target.value })}
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 0.85rem',
                        borderRadius: 'var(--radius-btn)',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: '#ffffff',
                        color: 'var(--on-surface)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary-container)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.15rem' }}>
                  <div>
                    <label htmlFor="bizEmail" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                      Business Email *
                    </label>
                    <input
                      id="bizEmail"
                      required
                      type="email"
                      placeholder="buyer@company.com"
                      value={formData.bizEmail}
                      onChange={(e) => setFormData({ ...formData, bizEmail: e.target.value })}
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 0.85rem',
                        borderRadius: 'var(--radius-btn)',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: '#ffffff',
                        color: 'var(--on-surface)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary-container)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label htmlFor="bizPhone" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      id="bizPhone"
                      required
                      type="tel"
                      placeholder="+44 20 0000 0000"
                      value={formData.bizPhone}
                      onChange={(e) => setFormData({ ...formData, bizPhone: e.target.value })}
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 0.85rem',
                        borderRadius: 'var(--radius-btn)',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: '#ffffff',
                        color: 'var(--on-surface)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary-container)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bizMessage" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                    Message / Estimated Volume (optional)
                  </label>
                  <textarea
                    id="bizMessage"
                    rows="3"
                    placeholder="Tell us about the platforms, quantities, and regions you typically purchase..."
                    value={formData.bizMessage}
                    onChange={(e) => setFormData({ ...formData, bizMessage: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-btn)',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#ffffff',
                      color: 'var(--on-surface)',
                      fontSize: '0.875rem',
                      outline: 'none',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-container)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    height: '46px',
                    fontSize: '0.9375rem',
                    fontWeight: '700',
                    marginTop: '0.5rem',
                    borderRadius: 'var(--radius-btn)',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Verifying...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
