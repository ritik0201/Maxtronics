// Maxtronics B2B Gaming Wholesale Catalog & Specifications

export const MAXTRONICS_CATEGORIES = [
  {
    id: 'playstation',
    icon: 'videogame_asset',
    title: 'PlayStation',
    tag: 'Tier 1 Auth',
    description: 'PS5 Disc & Digital consoles, DualSense wireless controllers, VR2 headsets, and high-velocity first/third-party titles.',
    logistics: 'Pallet & Carton',
    skuCount: '320+ SKUs'
  },
  {
    id: 'xbox',
    icon: 'grid_view',
    title: 'Xbox',
    tag: 'Authorized',
    description: 'Xbox Series X|S hardware, wireless gamepads, digital Game Pass activation stock, and factory-shrink boxed discs.',
    logistics: 'Export Ready',
    skuCount: '190+ SKUs'
  },
  {
    id: 'nintendo',
    icon: 'devices',
    title: 'Nintendo',
    tag: 'Global SKU',
    description: 'Switch OLED consoles, Joy-Con colorways, Pro Controllers, evergreen first-party physical cartridges, and carry cases.',
    logistics: 'High Allocation',
    skuCount: '240+ SKUs'
  },
  {
    id: 'pc-gaming',
    icon: 'memory',
    title: 'PC Gaming',
    tag: 'Volume Pricing',
    description: 'High-demand graphics processing units, mechanical RGB keyboards, ultra-light gaming mice, and spatial audio headsets.',
    logistics: 'OEM & Retail',
    skuCount: '160+ SKUs'
  },
  {
    id: 'accessories',
    icon: 'headset_mic',
    title: 'Accessories',
    tag: 'High Margin',
    description: 'High-speed HDMI 2.1 cables, fast dual charging docks, sim racing steering wheels, tournament arcade sticks, and stands.',
    logistics: 'Carton Master',
    skuCount: '410+ SKUs'
  },
  {
    id: 'merchandise',
    icon: 'toys',
    title: 'Merchandise & Collectables',
    tag: 'Specialty',
    description: 'Officially licensed gaming statues, limited scale figures, licensed apparel, novelty desk gear, and exclusive steelbooks.',
    logistics: 'Pre-Order Drops',
    skuCount: '85+ SKUs'
  }
];

export const MAXTRONICS_PRODUCTS = [
  {
    id: 'MAX-PS5-01',
    sku: 'MX-PS5-SLIM-D',
    title: 'PlayStation 5 Slim Console (Disc Edition 1TB)',
    category: 'playstation',
    categoryLabel: 'PlayStation',
    region: 'UK / EU PAL',
    stockUnits: 420,
    status: 'in_stock',
    moq: 5,
    casePack: 5,
    rrp: 479.99,
    tier1Price: 405.00,
    tier2Price: 388.00,
    tier3Price: 372.00,
    badge: 'Hardware Tier 1'
  },
  {
    id: 'MAX-PS5-02',
    sku: 'MX-PS5-DS-WHT',
    title: 'Sony DualSense Wireless Controller - White',
    category: 'playstation',
    categoryLabel: 'PlayStation',
    region: 'Global Retail',
    stockUnits: 850,
    status: 'in_stock',
    moq: 12,
    casePack: 24,
    rrp: 64.99,
    tier1Price: 47.50,
    tier2Price: 44.90,
    tier3Price: 42.60,
    badge: 'OEM Stock'
  },
  {
    id: 'MAX-PS5-03',
    sku: 'MX-PS5-ASTRO',
    title: 'Astro Bot (PS5 Standard Edition Boxed)',
    category: 'playstation',
    categoryLabel: 'PlayStation',
    region: 'UK / PEGI 7',
    stockUnits: 360,
    status: 'in_stock',
    moq: 10,
    casePack: 25,
    rrp: 59.99,
    tier1Price: 41.80,
    tier2Price: 39.40,
    tier3Price: 37.20,
    badge: 'Top Seller'
  },
  {
    id: 'MAX-XB-01',
    sku: 'MX-XB-SX-1TB',
    title: 'Xbox Series X 1TB Console',
    category: 'xbox',
    categoryLabel: 'Xbox',
    region: 'EU / UK Spec',
    stockUnits: 180,
    status: 'in_stock',
    moq: 4,
    casePack: 4,
    rrp: 479.99,
    tier1Price: 412.00,
    tier2Price: 395.00,
    tier3Price: 378.00,
    badge: 'Hardware Tier 1'
  },
  {
    id: 'MAX-XB-02',
    sku: 'MX-XB-PAD-BLK',
    title: 'Xbox Wireless Controller - Carbon Black',
    category: 'xbox',
    categoryLabel: 'Xbox',
    region: 'Global OEM',
    stockUnits: 520,
    status: 'in_stock',
    moq: 12,
    casePack: 24,
    rrp: 54.99,
    tier1Price: 38.90,
    tier2Price: 36.80,
    tier3Price: 34.90,
    badge: 'Fast Dispatch'
  },
  {
    id: 'MAX-NSW-01',
    sku: 'MX-NSW-OLED-WHT',
    title: 'Nintendo Switch OLED Model - White',
    category: 'nintendo',
    categoryLabel: 'Nintendo',
    region: 'UK / EU Spec',
    stockUnits: 310,
    status: 'in_stock',
    moq: 6,
    casePack: 6,
    rrp: 309.99,
    tier1Price: 258.00,
    tier2Price: 246.00,
    tier3Price: 235.00,
    badge: 'High Demand'
  },
  {
    id: 'MAX-NSW-02',
    sku: 'MX-NSW-ZELDA-EOW',
    title: 'The Legend of Zelda: Echoes of Wisdom (Boxed)',
    category: 'nintendo',
    categoryLabel: 'Nintendo',
    region: 'UK / PEGI 7',
    stockUnits: 440,
    status: 'in_stock',
    moq: 10,
    casePack: 20,
    rrp: 49.99,
    tier1Price: 35.60,
    tier2Price: 33.70,
    tier3Price: 31.90,
    badge: 'Nintendo Prime'
  },
  {
    id: 'MAX-PC-01',
    sku: 'MX-PC-RTX4070S',
    title: 'GeForce RTX 4070 Super 12GB Dual Fan OC',
    category: 'pc-gaming',
    categoryLabel: 'PC Gaming',
    region: 'OEM Master',
    stockUnits: 65,
    status: 'low_allocation',
    moq: 2,
    casePack: 6,
    rrp: 579.99,
    tier1Price: 485.00,
    tier2Price: 468.00,
    tier3Price: 452.00,
    badge: 'Allocated'
  },
  {
    id: 'MAX-ACC-01',
    sku: 'MX-ACC-HDMI21-PRO',
    title: 'Maxtronics 8K Ultra High-Speed HDMI 2.1 Cable (2m)',
    category: 'accessories',
    categoryLabel: 'Accessories',
    region: 'Retail Hangpack',
    stockUnits: 1400,
    status: 'in_stock',
    moq: 25,
    casePack: 50,
    rrp: 19.99,
    tier1Price: 6.80,
    tier2Price: 5.90,
    tier3Price: 5.10,
    badge: 'High Margin'
  },
  {
    id: 'MAX-ACC-02',
    sku: 'MX-ACC-DS5-DOCK',
    title: 'Dual Charging Station for PS5 DualSense',
    category: 'accessories',
    categoryLabel: 'Accessories',
    region: 'Retail Giftbox',
    stockUnits: 620,
    status: 'in_stock',
    moq: 10,
    casePack: 20,
    rrp: 24.99,
    tier1Price: 13.50,
    tier2Price: 12.20,
    tier3Price: 11.10,
    badge: 'Verified OEM'
  },
  {
    id: 'MAX-MERCH-01',
    sku: 'MX-MCH-STAT-SOULS',
    title: 'Elden Ring Malenia Blade of Miquella 1/8 Scale Statue',
    category: 'merchandise',
    categoryLabel: 'Merchandise & Collectables',
    region: 'Official Licensed',
    stockUnits: 45,
    status: 'low_allocation',
    moq: 2,
    casePack: 4,
    rrp: 189.99,
    tier1Price: 138.00,
    tier2Price: 129.00,
    tier3Price: 121.00,
    badge: 'Collector Run'
  }
];

export const MAXTRONICS_ASSURANCES = [
  {
    num: '01',
    title: 'Direct Manufacturer Allocations',
    description: 'Guaranteed supply channels direct from authorized gaming publishers and hardware manufacturers without secondary gray-market markups.'
  },
  {
    num: '02',
    title: 'Live Inventory & Manifests',
    description: 'Real-time trade inventory access with transparent stock levels, clear packaging regions (EU/UK/US), and guaranteed release-day allocations.'
  },
  {
    num: '03',
    title: 'Multi-Currency & VAT Solutions',
    description: 'Flexible commercial invoicing in USD, GBP, and EUR, with automated reverse-charge intra-EU VAT and bonded warehouse clearance documents.'
  },
  {
    num: '04',
    title: 'Scalable Minimum Orders',
    description: 'Accessible MOQ limits engineered to accommodate both agile boutique retailers testing new releases and high-volume multi-store retail groups.'
  }
];

export const MAXTRONICS_STEPS = [
  {
    step: '01',
    title: 'Register Business',
    description: 'Submit your company registration, retail credentials, and valid VAT/tax number for instant compliance review.',
    highlight: 'Approval within 24h',
    icon: 'assignment'
  },
  {
    step: '02',
    title: 'Receive Price List',
    description: 'Gain access to daily live wholesale manifests, upcoming pre-order allocations, and volume-discount rate cards.',
    highlight: 'Daily CSV & Portal API',
    icon: 'receipt_long'
  },
  {
    step: '03',
    title: 'Place Your Order',
    description: 'Confirm line items via portal or your dedicated account representative. Orders dispatch same-day with GPS tracking.',
    highlight: 'Insured Transit',
    icon: 'local_shipping'
  }
];
