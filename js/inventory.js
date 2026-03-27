/**
 * TRUE NORTH WATCHES — Inventory Data
 *
 * HOW TO UPDATE INVENTORY:
 * 1. Add a new object to the WATCHES array below
 * 2. Set status: 'available' or 'sold'
 * 3. Set featured: true for the main hero card (limit 1-2)
 * 4. Run `git add . && git commit -m "Update inventory"` to publish
 *
 * FIELDS:
 * - id: unique slug (kebab-case)
 * - brand: "Rolex", "Patek Philippe", etc.
 * - model: model name
 * - reference: official reference number
 * - year: production year (string)
 * - condition: "Mint", "Excellent", "Very Good", "Good"
 * - movement: movement type / caliber
 * - caseMaterial: case material
 * - bracelet: bracelet / strap info
 * - diameter: case diameter in mm
 * - price: number (use 0 for "Price on Request")
 * - status: "available" | "sold"
 * - featured: true/false
 * - isNew: true/false — shows NEW badge
 * - isRare: true/false — shows RARE badge
 * - image: path to image (leave "" if no photo yet)
 * - images: array of additional image paths
 * - description: longer description for detail page
 * - includes: array of included items e.g. ["Box", "Papers", "Travel case"]
 */

const WATCHES = [
  {
    id: "rolex-submariner-126610ln",
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    year: "2023",
    condition: "Mint",
    movement: "Calibre 3235, Perpetual",
    caseMaterial: "Oystersteel",
    bracelet: "Oyster bracelet",
    diameter: "41mm",
    price: 18500,
    status: "available",
    featured: true,
    isNew: true,
    isRare: false,
    image: "assets/watches/rolex-sub-126610ln.jpg",
    images: [],
    description: "The Rolex Submariner Date 126610LN in 41mm Oystersteel. Powered by the in-house Calibre 3235 with 70-hour power reserve. This example is in mint condition, unworn, and comes complete with all original packaging.",
    includes: ["Box", "Papers", "Travel case"]
  },
  {
    id: "patek-philippe-nautilus-5711",
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "5711/1A-010",
    year: "2019",
    condition: "Excellent",
    movement: "Calibre 26-330 S C",
    caseMaterial: "Stainless Steel",
    bracelet: "Integrated steel bracelet",
    diameter: "40mm",
    price: 145000,
    status: "available",
    featured: true,
    isNew: false,
    isRare: true,
    image: "assets/watches/patek-nautilus-5711.jpg",
    images: [],
    description: "One of the most coveted watches ever made. The Patek Philippe Nautilus 5711/1A in stainless steel with blue dial. This example is in excellent condition with full set including original box, papers, and all accessories.",
    includes: ["Box", "Papers", "Extra links", "Travel case"]
  },
  {
    id: "ap-royal-oak-15500st",
    brand: "Audemars Piguet",
    model: "Royal Oak",
    reference: "15500ST.OO.1220ST.01",
    year: "2022",
    condition: "Excellent",
    movement: "Calibre 4302",
    caseMaterial: "Stainless Steel",
    bracelet: "Integrated steel bracelet",
    diameter: "41mm",
    price: 92000,
    status: "available",
    featured: false,
    isNew: false,
    isRare: true,
    image: "assets/watches/ap-royal-oak-15500.jpg",
    images: [],
    description: "The new-generation Royal Oak 15500ST with improved Calibre 4302 movement offering 70-hour power reserve. Blue tapisserie dial in excellent condition with full set.",
    includes: ["Box", "Papers", "Travel case"]
  },
  {
    id: "omega-speedmaster-professional",
    brand: "Omega",
    model: "Speedmaster Professional Moonwatch",
    reference: "310.30.42.50.01.001",
    year: "2022",
    condition: "Mint",
    movement: "Calibre 3861, Manual Wind",
    caseMaterial: "Stainless Steel",
    bracelet: "Stainless steel bracelet",
    diameter: "42mm",
    price: 8200,
    status: "available",
    featured: false,
    isNew: true,
    isRare: false,
    image: "assets/watches/omega-speedmaster-moonwatch.jpg",
    images: [],
    description: "The legendary Moonwatch, now powered by the Co-Axial Master Chronometer Calibre 3861. Resistant to magnetic fields up to 15,000 gauss. Mint condition with full set.",
    includes: ["Box", "Papers", "NATO strap", "Travel case"]
  },
  {
    id: "cartier-santos-wssa0018",
    brand: "Cartier",
    model: "Santos de Cartier",
    reference: "WSSA0018",
    year: "2021",
    condition: "Very Good",
    movement: "Calibre 1847 MC",
    caseMaterial: "Stainless Steel",
    bracelet: "Metal & rubber QuickSwitch",
    diameter: "39.8mm",
    price: 8800,
    status: "available",
    featured: false,
    isNew: false,
    isRare: false,
    image: "assets/watches/cartier-santos-wssa0018.jpg",
    images: [],
    description: "The iconic Santos with the modern QuickSwitch interchangeable bracelet system. Blue dial variant in very good condition with no visible wear.",
    includes: ["Box", "Papers", "Extra rubber strap"]
  },
  {
    id: "rolex-daytona-116500ln",
    brand: "Rolex",
    model: "Cosmograph Daytona",
    reference: "116500LN",
    year: "2020",
    condition: "Excellent",
    movement: "Calibre 4130",
    caseMaterial: "Oystersteel",
    bracelet: "Oyster bracelet",
    diameter: "40mm",
    price: 42000,
    status: "sold",
    featured: false,
    isNew: false,
    isRare: false,
    image: "assets/watches/rolex-daytona-116500.jpg",
    images: [],
    description: "White dial Daytona in Oystersteel. Powered by in-house Calibre 4130. Sold with full set.",
    includes: ["Box", "Papers"]
  },
  {
    id: "patek-philippe-calatrava-5196",
    brand: "Patek Philippe",
    model: "Calatrava",
    reference: "5196P-010",
    year: "2018",
    condition: "Excellent",
    movement: "Calibre 215 PS",
    caseMaterial: "Platinum",
    bracelet: "Crocodile leather strap",
    diameter: "37mm",
    price: 38000,
    status: "available",
    featured: false,
    isNew: false,
    isRare: true,
    image: "assets/watches/patek-calatrava-5196p.jpg",
    images: [],
    description: "An ultra-thin dress watch in platinum — the pinnacle of understated elegance. Patek Philippe Calatrava 5196P with silvery white lacquer dial. Extremely rare platinum execution.",
    includes: ["Box", "Papers", "Extra strap", "Travel case"]
  },
  {
    id: "hublot-big-bang-unico",
    brand: "Hublot",
    model: "Big Bang Unico",
    reference: "441.NX.1170.RX",
    year: "2021",
    condition: "Very Good",
    movement: "HUB1242 UNICO, Chronograph",
    caseMaterial: "Microblasted Titanium",
    bracelet: "Rubber strap + titanium bracelet",
    diameter: "44mm",
    price: 22500,
    status: "sold",
    featured: false,
    isNew: false,
    isRare: false,
    image: "assets/watches/hublot-big-bang-unico.jpg",
    images: [],
    description: "Big Bang Unico in titanium, with skeleton dial exposing the in-house UNICO flyback chronograph movement. Very good condition, full set.",
    includes: ["Box", "Papers", "Extra bracelet"]
  }
];

/* ---------------------------------------------------------------
   Computed helpers (don't edit below)
--------------------------------------------------------------- */
const AVAILABLE_WATCHES = WATCHES.filter(w => w.status === "available");
const SOLD_WATCHES      = WATCHES.filter(w => w.status === "sold");
const FEATURED_WATCHES  = WATCHES.filter(w => w.featured && w.status === "available");

const BRANDS = [...new Set(WATCHES.map(w => w.brand))].sort();

function getBrandCount(brand, statusFilter = "available") {
  return WATCHES.filter(w => w.brand === brand && w.status === statusFilter).length;
}

function formatPrice(price) {
  if (!price || price === 0) return '<span class="price-on-request">Price on Request</span>';
  return "$" + price.toLocaleString("en-CA");
}

function getWatchById(id) {
  return WATCHES.find(w => w.id === id) || null;
}

function filterWatches({ brand = "all", status = "available", sort = "default" } = {}) {
  let results = WATCHES.filter(w => w.status === status);
  if (brand !== "all") results = results.filter(w => w.brand === brand);
  if (sort === "price-asc") results.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") results.sort((a, b) => b.price - a.price);
  if (sort === "newest") results.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return results;
}
