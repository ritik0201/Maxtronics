import React from 'react';

export const Categories = ({ onSelectCategory }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    {
      id: "software",
      title: "Video Game Software",
      icon: "🎮",
      desc: "Wholesale physical game software across all major formats including PS5, Xbox Series X, Nintendo Switch, and retro."
    },
    {
      id: "hardware",
      title: "Consoles & Hardware",
      icon: "🕹️",
      desc: "Official brand-new, sealed console hardware from Sony, Microsoft, and Nintendo at institutional wholesale volume."
    },
    {
      id: "accessories",
      title: "Gaming Accessories",
      icon: "🎧",
      desc: "Official controllers, wireless headsets, charging docks, and high-performance trade peripherals."
    },
    {
      id: "imports",
      title: "Import & Global Sourcing",
      icon: "🌍",
      desc: "Direct cross-border sourcing support for high-demand hardware, regional releases, and international market lots."
    }
  ];

  return (
    <section
      id="categories"
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '5rem',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="container">
        {/* Centered Header matching Basco Distribution */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              marginBottom: '0.85rem',
              fontWeight: 800,
              color: 'var(--color-text-heading)',
              fontFamily: 'var(--font-headline)'
            }}
          >
            Distribution Categories
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Built for customers looking for reliable supply, import access, and long-term wholesale support.
          </p>
        </div>

        {/* 4-Card Grid matching Basco Distribution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="card-shadow category-card"
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat.id);
                scrollTo('manifest');
              }}
              style={{
                padding: '2.5rem 1.75rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '2rem'
                }}
              >
                {cat.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: '0.85rem',
                  color: 'var(--color-text-heading)',
                  fontFamily: 'var(--font-headline)'
                }}
              >
                {cat.title}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5,
                  margin: 0
                }}
              >
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -4px rgba(0, 139, 163, 0.15) !important;
          border-color: var(--color-primary-light-border) !important;
        }
      `}</style>
    </section>
  );
};

export default Categories;
