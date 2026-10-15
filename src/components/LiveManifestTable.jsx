import React, { useState, useMemo } from 'react';
import { MAXTRONICS_CATEGORIES, MAXTRONICS_PRODUCTS } from '../data/maxtronicsData';

export const LiveManifestTable = ({
  selectedCategory,
  setSelectedCategory,
  onStageProduct,
  onShowToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('GBP'); // GBP, EUR, USD
  const [quantities, setQuantities] = useState(() => {
    const init = {};
    MAXTRONICS_PRODUCTS.forEach((p) => {
      init[p.id] = p.moq;
    });
    return init;
  });

  // Currency multiplier
  const currencyRate = useMemo(() => {
    if (currency === 'EUR') return { symbol: '€', rate: 1.18 };
    if (currency === 'USD') return { symbol: '$', rate: 1.28 };
    return { symbol: '£', rate: 1.0 };
  }, [currency]);

  const filteredProducts = useMemo(() => {
    return MAXTRONICS_PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQtyChange = (id, delta, moq) => {
    setQuantities((prev) => {
      const current = prev[id] || moq;
      const next = Math.max(moq, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleDirectQtyChange = (id, val, moq) => {
    const parsed = parseInt(val, 10);
    setQuantities((prev) => ({
      ...prev,
      [id]: isNaN(parsed) ? moq : Math.max(moq, parsed)
    }));
  };

  const getActiveTier = (qty) => {
    if (qty >= 100) return 3;
    if (qty >= 25) return 2;
    return 1;
  };

  const getEffectivePrice = (item, qty) => {
    const tier = getActiveTier(qty);
    if (tier === 3) return item.tier3Price * currencyRate.rate;
    if (tier === 2) return item.tier2Price * currencyRate.rate;
    return item.tier1Price * currencyRate.rate;
  };

  const handleExportCSV = () => {
    const headers = ['SKU', 'Title', 'Category', 'Region', 'Stock Status', 'Units', 'MOQ', 'Case Pack', 'RRP', 'Tier 1', 'Tier 2 (-7%)', 'Tier 3 (-14%)'];
    const rows = MAXTRONICS_PRODUCTS.map((p) => [
      p.sku,
      `"${p.title.replace(/"/g, '""')}"`,
      p.categoryLabel,
      p.region,
      p.status,
      p.stockUnits,
      p.moq,
      p.casePack,
      p.rrp.toFixed(2),
      p.tier1Price.toFixed(2),
      p.tier2Price.toFixed(2),
      p.tier3Price.toFixed(2)
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encoded = encodeURI(csvContent);
    const a = document.createElement('a');
    a.href = encoded;
    a.download = `Maxtronics_Live_Manifest_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (onShowToast) {
      onShowToast('Maxtronics Live Manifest CSV downloaded', 'success');
    }
  };

  return (
    <section id="manifest" style={{ width: '100%', backgroundColor: 'var(--surface-lowest)', padding: '5.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
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
              Real-Time Stock Allocations
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                color: 'var(--on-surface)'
              }}
            >
              Live Wholesale Manifest & Tiered Rates
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              Direct supplier allocations with automated multi-currency conversion, case pack steppers, and export CSV feed.
            </p>
          </div>

          {/* Right Actions: Currency Selector & CSV Export */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {/* Currency switcher */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--surface-low)',
                borderRadius: '8px',
                padding: '0.25rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {['GBP', 'EUR', 'USD'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: currency === c ? '700' : '500',
                    backgroundColor: currency === c ? '#ffffff' : 'transparent',
                    color: currency === c ? 'var(--primary-container)' : 'var(--secondary-neutral)',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: currency === c ? 'var(--shadow-sm)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {c === 'GBP' ? '£ GBP' : c === 'EUR' ? '€ EUR' : '$ USD'}
                </button>
              ))}
            </div>

            <button
              onClick={handleExportCSV}
              className="btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.6rem 1.15rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary-container)' }}>
                download
              </span>
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div
          style={{
            backgroundColor: 'var(--surface-low)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Category tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: selectedCategory === 'all' ? '700' : '600',
                backgroundColor: selectedCategory === 'all' ? 'var(--primary-container)' : '#ffffff',
                color: selectedCategory === 'all' ? '#ffffff' : 'var(--on-surface)',
                border: '1px solid',
                borderColor: selectedCategory === 'all' ? 'var(--primary-container)' : 'var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              All Manifest
            </button>
            {MAXTRONICS_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '8px',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? '700' : '600',
                    backgroundColor: isActive ? 'var(--primary-container)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--on-surface)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-container)' : 'var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <span
              className="material-symbols-outlined"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--secondary-neutral)',
                fontSize: '18px'
              }}
            >
              search
            </span>
            <input
              type="text"
              placeholder="Search title, SKU, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                height: '38px',
                paddingLeft: '2.4rem',
                paddingRight: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: '#ffffff',
                color: 'var(--on-surface)',
                fontSize: '0.875rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Data Table */}
        <div
          className="custom-scroll"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
            overflowX: 'auto',
            width: '100%'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1080px' }}>
            <thead>
              <tr
                style={{
                  backgroundColor: 'var(--surface-low)',
                  borderBottom: '1px solid var(--border-subtle)',
                  color: 'var(--secondary-neutral)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                <th style={{ padding: '1rem 1.25rem' }}>SKU & Product</th>
                <th style={{ padding: '1rem 1rem' }}>Region / Spec</th>
                <th style={{ padding: '1rem 1rem' }}>Stock Status</th>
                <th style={{ padding: '1rem 1rem' }}>MOQ / Case</th>
                <th style={{ padding: '1rem 1rem' }}>RRP</th>
                <th style={{ padding: '1rem 1rem', backgroundColor: 'rgba(37, 87, 246, 0.04)' }}>
                  Tier 1 <span style={{ fontWeight: '400', fontSize: '0.7rem' }}>(1-24)</span>
                </th>
                <th style={{ padding: '1rem 1rem', backgroundColor: 'rgba(37, 87, 246, 0.07)' }}>
                  Tier 2 <span style={{ fontWeight: '400', fontSize: '0.7rem' }}>(25-99, -7%)</span>
                </th>
                <th style={{ padding: '1rem 1rem', backgroundColor: 'rgba(37, 87, 246, 0.10)' }}>
                  Tier 3 <span style={{ fontWeight: '400', fontSize: '0.7rem' }}>(100+, -14%)</span>
                </th>
                <th style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>Allocate Qty</th>
                <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>Stage</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="10" style={{ padding: '3.5rem', textAlign: 'center', color: 'var(--secondary-neutral)' }}>
                    No gaming SKUs found matching your filter.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p, idx) => {
                  const qty = quantities[p.id] || p.moq;
                  const activeTier = getActiveTier(qty);
                  const effectivePrice = getEffectivePrice(p, qty);
                  const lineTotal = (effectivePrice * qty).toFixed(2);
                  const isEven = idx % 2 === 0;

                  return (
                    <tr
                      key={p.id}
                      style={{
                        backgroundColor: isEven ? '#ffffff' : '#fafcff',
                        borderBottom: '1px solid var(--border-subtle)',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f5ff')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isEven ? '#ffffff' : '#fafcff')}
                    >
                      {/* Product */}
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: '700', color: 'var(--on-surface)', fontSize: '0.9375rem' }}>
                              {p.title}
                            </span>
                            {p.badge && (
                              <span
                                style={{
                                  fontSize: '0.6875rem',
                                  fontWeight: '700',
                                  padding: '0.1rem 0.45rem',
                                  borderRadius: '4px',
                                  backgroundColor: 'var(--primary-surface)',
                                  color: 'var(--primary-container)'
                                }}
                              >
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.2rem', fontSize: '0.75rem', color: 'var(--secondary-neutral)' }}>
                            <span>SKU: <strong style={{ color: 'var(--on-surface)' }}>{p.sku}</strong></span>
                            <span>•</span>
                            <span>{p.categoryLabel}</span>
                          </div>
                        </div>
                      </td>

                      {/* Region */}
                      <td style={{ padding: '1rem 1rem', fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>
                        <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'var(--surface-low)', fontWeight: '600' }}>
                          {p.region}
                        </span>
                      </td>

                      {/* Stock Status */}
                      <td style={{ padding: '1rem 1rem' }}>
                        {p.status === 'in_stock' ? (
                          <span className="badge-tag badge-instock">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                            <span>In Stock ({p.stockUnits})</span>
                          </span>
                        ) : (
                          <span className="badge-tag badge-amber">
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--amber-accent)' }} />
                            <span>Low Alloc ({p.stockUnits})</span>
                          </span>
                        )}
                      </td>

                      {/* MOQ / Case */}
                      <td style={{ padding: '1rem 1rem', fontSize: '0.8125rem', color: 'var(--secondary-neutral)' }}>
                        <span style={{ fontWeight: '700', color: 'var(--on-surface)' }}>{p.moq}</span> MOQ / <span style={{ fontWeight: '600' }}>{p.casePack}</span>pk
                      </td>

                      {/* RRP */}
                      <td className="tabular-nums" style={{ padding: '1rem 1rem', fontSize: '0.875rem', color: 'var(--secondary-neutral)' }}>
                        {currencyRate.symbol}{(p.rrp * currencyRate.rate).toFixed(2)}
                      </td>

                      {/* Tier 1 */}
                      <td
                        className="tabular-nums"
                        style={{
                          padding: '1rem 1rem',
                          fontSize: '0.9375rem',
                          fontWeight: activeTier === 1 ? '700' : '500',
                          color: activeTier === 1 ? 'var(--primary-container)' : 'var(--on-surface)',
                          backgroundColor: activeTier === 1 ? 'rgba(37, 87, 246, 0.08)' : 'transparent',
                          borderLeft: activeTier === 1 ? '3px solid var(--primary-container)' : 'none'
                        }}
                      >
                        {currencyRate.symbol}{(p.tier1Price * currencyRate.rate).toFixed(2)}
                      </td>

                      {/* Tier 2 */}
                      <td
                        className="tabular-nums"
                        style={{
                          padding: '1rem 1rem',
                          fontSize: '0.9375rem',
                          fontWeight: activeTier === 2 ? '700' : '500',
                          color: activeTier === 2 ? 'var(--primary-container)' : 'var(--on-surface)',
                          backgroundColor: activeTier === 2 ? 'rgba(37, 87, 246, 0.08)' : 'transparent',
                          borderLeft: activeTier === 2 ? '3px solid var(--primary-container)' : 'none'
                        }}
                      >
                        {currencyRate.symbol}{(p.tier2Price * currencyRate.rate).toFixed(2)}
                      </td>

                      {/* Tier 3 */}
                      <td
                        className="tabular-nums"
                        style={{
                          padding: '1rem 1rem',
                          fontSize: '0.9375rem',
                          fontWeight: activeTier === 3 ? '700' : '500',
                          color: activeTier === 3 ? 'var(--primary-container)' : 'var(--on-surface)',
                          backgroundColor: activeTier === 3 ? 'rgba(37, 87, 246, 0.08)' : 'transparent',
                          borderLeft: activeTier === 3 ? '3px solid var(--primary-container)' : 'none'
                        }}
                      >
                        {currencyRate.symbol}{(p.tier3Price * currencyRate.rate).toFixed(2)}
                      </td>

                      {/* Stepper */}
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            overflow: 'hidden'
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => handleQtyChange(p.id, -p.casePack, p.moq)}
                            style={{
                              width: '28px',
                              height: '30px',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              color: 'var(--secondary-neutral)',
                              fontWeight: '700'
                            }}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min={p.moq}
                            step={p.moq}
                            value={qty}
                            onChange={(e) => handleDirectQtyChange(p.id, e.target.value, p.moq)}
                            className="tabular-nums"
                            style={{
                              width: '52px',
                              height: '30px',
                              textAlign: 'center',
                              border: 'none',
                              outline: 'none',
                              fontSize: '0.875rem',
                              fontWeight: '700',
                              color: 'var(--on-surface)'
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handleQtyChange(p.id, p.casePack, p.moq)}
                            style={{
                              width: '28px',
                              height: '30px',
                              border: 'none',
                              background: 'none',
                              cursor: 'pointer',
                              color: 'var(--secondary-neutral)',
                              fontWeight: '700'
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--secondary-neutral)', marginTop: '0.2rem' }}>
                          Tot: {currencyRate.symbol}{lineTotal}
                        </div>
                      </td>

                      {/* Stage Button */}
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                        <button
                          type="button"
                          onClick={() => {
                            if (onStageProduct) {
                              onStageProduct({ ...p, currentCurrency: currency, currencySymbol: currencyRate.symbol, currencyRate: currencyRate.rate }, qty);
                            }
                            if (onShowToast) {
                              onShowToast(`Staged ${qty} units of ${p.sku} (${currencyRate.symbol}${lineTotal})`, 'success');
                            }
                          }}
                          className="btn-primary btn-sm"
                          style={{ padding: '0.45rem 0.95rem' }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>add</span>
                          <span>Stage</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
