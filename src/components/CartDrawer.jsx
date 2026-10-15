import React, { useState } from 'react';

export const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onShowToast
}) => {
  const [includeVAT, setIncludeVAT] = useState(true);

  if (!isOpen) return null;

  const getItemPrice = (item) => {
    const qty = item.allocatedQty || item.moq;
    const rate = item.currencyRate || 1.0;
    if (qty >= 100) return item.tier3Price * rate;
    if (qty >= 25) return item.tier2Price * rate;
    return item.tier1Price * rate;
  };

  const currencySymbol = cart[0]?.currencySymbol || '£';
  const totalUnits = cart.reduce((sum, item) => sum + (item.allocatedQty || 0), 0);
  const subtotal = cart.reduce((sum, item) => sum + getItemPrice(item) * (item.allocatedQty || 0), 0);
  const vat = includeVAT ? subtotal * 0.2 : 0;
  const grandTotal = subtotal + vat;

  const getFreightTier = (units) => {
    if (units === 0) return 'No items staged';
    if (units <= 40) return 'Insured Air Express Courier (DHL/UPS)';
    if (units <= 200) return 'Half Euro-Pallet Freight';
    return 'Full Euro-Pallet LTL Road/Ocean Logistics';
  };

  const handleDownloadQuote = () => {
    const headers = ['SKU', 'Title', 'Region', 'Quantity', 'Unit Trade Price', 'Total'];
    const rows = cart.map((item) => {
      const price = getItemPrice(item);
      return [
        item.sku,
        `"${item.title.replace(/"/g, '""')}"`,
        item.region,
        item.allocatedQty,
        price.toFixed(2),
        (price * item.allocatedQty).toFixed(2)
      ];
    });

    rows.push(['', '', '', '', 'Subtotal', subtotal.toFixed(2)]);
    if (includeVAT) rows.push(['', '', '', '', 'VAT (20%)', vat.toFixed(2)]);
    rows.push(['', '', '', '', 'Total', grandTotal.toFixed(2)]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encoded = encodeURI(csvContent);
    const a = document.createElement('a');
    a.href = encoded;
    a.download = `Maxtronics_ProForma_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (onShowToast) {
      onShowToast('Pro-Forma Trade Quote generated', 'success');
    }
  };

  const handleSubmitOrder = () => {
    if (cart.length === 0) return;
    if (onShowToast) {
      onShowToast(`Order allocation #MX-${Date.now().toString().slice(-6)} submitted to London distribution desk`, 'success');
    }
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(15, 26, 51, 0.45)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-drawer)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--surface-low)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shopping_bag</span>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: '700' }}>
                Staged Allocations
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--secondary-neutral)' }}>
                {cart.length} SKUs · {totalUnits} Units
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary-neutral)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
          </button>
        </div>

        {/* Drawer Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--secondary-neutral)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '50px', color: 'var(--border-subtle)', marginBottom: '1rem', display: 'block' }}>
                inventory_2
              </span>
              <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--on-surface)', marginBottom: '0.35rem' }}>
                No allocations staged
              </h4>
              <p style={{ fontSize: '0.875rem' }}>
                Browse the Live Manifest and click <strong>"Stage"</strong> to configure lot quantities.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item) => {
                const price = getItemPrice(item);
                const lineTotal = (price * item.allocatedQty).toFixed(2);
                const tier = item.allocatedQty >= 100 ? 3 : item.allocatedQty >= 25 ? 2 : 1;

                return (
                  <div
                    key={item.id}
                    style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '0.9375rem', color: 'var(--on-surface)' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--secondary-neutral)', marginTop: '0.15rem' }}>
                          SKU: <strong>{item.sku}</strong> · {item.region}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--secondary-neutral)', cursor: 'pointer' }}
                        title="Remove Item"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {/* Stepper */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '6px',
                          backgroundColor: 'var(--surface-low)'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.id, item.allocatedQty - item.casePack)}
                          style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '700' }}
                        >
                          -
                        </button>
                        <span className="tabular-nums" style={{ minWidth: '38px', textAlign: 'center', fontSize: '0.85rem', fontWeight: '700' }}>
                          {item.allocatedQty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.id, item.allocatedQty + item.casePack)}
                          style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '700' }}
                        >
                          +
                        </button>
                      </div>

                      {/* Tier Badge */}
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          backgroundColor: 'var(--primary-surface)',
                          color: 'var(--primary-container)',
                          fontWeight: '700'
                        }}
                      >
                        Tier {tier} ({currencySymbol}{price.toFixed(2)}/u)
                      </span>

                      {/* Line Total */}
                      <div className="tabular-nums" style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--on-surface)' }}>
                        {currencySymbol}{lineTotal}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--surface-low)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {/* Logistics indicator */}
            <div
              style={{
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: 'var(--secondary-neutral)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary-container)' }}>
                local_shipping
              </span>
              <div>
                <strong>Freight Method:</strong> {getFreightTier(totalUnits)}
              </div>
            </div>

            {/* Price lines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-neutral)' }}>
                <span>Trade Net Subtotal:</span>
                <span className="tabular-nums" style={{ fontWeight: '600', color: 'var(--on-surface)' }}>
                  {currencySymbol}{subtotal.toFixed(2)}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--secondary-neutral)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={includeVAT}
                    onChange={(e) => setIncludeVAT(e.target.checked)}
                    style={{ accentColor: 'var(--primary-container)' }}
                  />
                  <span>VAT (20%)</span>
                </label>
                <span className="tabular-nums" style={{ fontWeight: '600', color: 'var(--on-surface)' }}>
                  {includeVAT ? `${currencySymbol}${vat.toFixed(2)}` : 'Zero-Rated / Export'}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: 'var(--on-surface)'
                }}
              >
                <span>Estimated Total:</span>
                <span className="tabular-nums" style={{ color: 'var(--primary-container)' }}>
                  {currencySymbol}{grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handleDownloadQuote}
                className="btn-secondary btn-sm"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>description</span>
                <span>Pro-Forma Quote</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitOrder}
                className="btn-primary"
                style={{ flex: 1.3, padding: '0.65rem' }}
              >
                <span>Submit to Desk</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClearCart}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary-neutral)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'underline'
              }}
            >
              Clear all staged allocations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
