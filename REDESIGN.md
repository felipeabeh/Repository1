# True North Watches — Redesign Brief & Audit

## 1. Current Site Audit (Google Sites)

### What Works
- Correct brand categories in navigation (Rolex, Patek Philippe, AP, Omega, etc.)
- Trust statement about unedited photography — genuinely differentiating
- Social media presence (6 platforms) — good for discovery
- Local delivery messaging is clear
- Phone number visible

### Critical Weaknesses

| Problem | Impact |
|---|---|
| Google Sites grid layout is rigid and ugly | Kills luxury perception immediately |
| No filter/sort on listings | Forces buyers to scroll through every brand page |
| No individual product pages | Can't share a single watch link — kills social/DM selling |
| No inquiry CTA on each card | Buyers have to hunt for contact info |
| No sold archive | Removes social proof and pricing reference |
| Brand navigation via page nav (not filters) | Too many clicks, no brand overview |
| No price visibility | Uncertainty kills conversion |
| Mobile experience is mediocre | Majority of watch buyers browse on phone |
| Google Sites typography and color control is limited | Cannot match luxury brand aesthetics |
| No trust signals per listing | Buyers need reassurance at point of decision |

---

## 2. Redesigned Site Architecture

```
truenorthwatches.ca/
├── index.html         — Homepage (hero, featured picks, brand grid, story, CTA)
├── watches.html       — Full collection (filter by brand, sort by price/year)
├── watch.html?id=...  — Individual watch detail (sticky image, specs, inquiry)
├── sold.html          — Sold archive (table + cards, pricing history)
├── css/style.css      — Design system
├── js/inventory.js    — Inventory data (the only file to edit for updates)
└── js/main.js         — UI logic (filters, modal, cards, animations)
```

### Key UX Improvements
1. **Inquiry modal on every card** — one click to express interest
2. **Filter by brand without page reload** — JS-driven, instant
3. **Individual watch pages** — shareable URLs for DM/social selling
4. **Sold archive** — builds trust, shows activity, justifies pricing
5. **Stats in hero** — "X In Stock, Y Brands" creates urgency
6. **Sticky product image on detail page** — image stays visible while reading specs

---

## 3. Platform Recommendation

### Comparison

| Platform | Visual Quality | Inventory Updates | Cost | Scalability |
|---|---|---|---|---|
| **Google Sites** | Poor | Clunky | Free | Limited |
| **This HTML solution** | Excellent | Edit 1 JS file | Hosting ~$5/mo | High |
| **Webflow** | Excellent | CMS, no code | $23–$39/mo | Very high |
| **Shopify** | Good | Full e-commerce | $29+/mo | Overkill |
| **Framer** | Excellent | Limited CMS | $15–$30/mo | Medium |

### Recommendation: Start here (static HTML), then migrate to Webflow CMS

**Phase 1** (immediate): Deploy this static HTML site on Netlify or GitHub Pages.
- Cost: Free to $5/month
- Update inventory by editing `js/inventory.js` and pushing to Git
- Zero platform fees, full design control
- Deployment in minutes

**Phase 2** (when volume grows): Move to Webflow CMS
- Non-technical inventory updates via Webflow CMS dashboard
- Same design, better editor experience

---

## 4. Wireframe Summary

### Homepage
```
[NAV: Logo | Links | "View Collection" CTA]
[HERO: Full-screen dark | "Curated Timepieces, True to the North" | 2 CTAs | Stats]
[TRUST BAR: Authenticated | Local Delivery | CA Shipping | Travel Case]
[FEATURED: 4-card grid of top available watches]
[BRANDS: 6-column brand index with count]
[STORY: Split — visual left, text+points right]
[RECENT SALES: 3 sold cards — social proof]
[CTA: "Looking for something specific?" + inquiry + phone]
[FOOTER: Full links, social, contact, legal]
```

### Collection Page (`watches.html`)
```
[PAGE HERO: Breadcrumb | Title | Description]
[FILTER BAR: All / Rolex / Patek / AP / Omega... | Sort dropdown | Count]
[GRID: Auto-fill cards, 340px min, with brand/name/ref/price/inquire]
[CONTACT STRIP: "Don't see it? Submit a wish list"]
```

### Product Detail (`watch.html`)
```
[LEFT: Sticky full-height watch image]
[RIGHT: Brand > Model > Ref | Price block | Inquiry CTAs | Description | Specs table | Trust icons]
[BELOW: Related watches grid]
```

### Sold Archive (`sold.html`)
```
[PAGE HERO: "Hall of Fame" branding]
[INFO BANNER: Wish list CTA]
[TABLE: Desktop — Brand/Model | Ref | Year | Condition | Price | Status]
[CARDS: Mobile — thumb + name + sold price]
```

---

## 5. How to Update Inventory

Open `js/inventory.js` and edit the `WATCHES` array.

### Add a new watch:
```js
{
  id: "rolex-gmt-master-126710blro",   // unique kebab-case slug
  brand: "Rolex",
  model: "GMT-Master II",
  reference: "126710BLRO",
  year: "2022",
  condition: "Mint",
  movement: "Calibre 3285",
  caseMaterial: "Oystersteel",
  bracelet: "Jubilee bracelet",
  diameter: "40mm",
  price: 21000,
  status: "available",               // "available" or "sold"
  featured: false,
  isNew: true,
  isRare: false,
  image: "assets/watches/rolex-gmt-blro.jpg",
  images: [],
  description: "The Batman GMT in Jubilee bracelet...",
  includes: ["Box", "Papers", "Travel case"]
}
```

### Mark a watch as sold:
Change `status: "available"` → `status: "sold"`

### Commit and deploy:
```bash
git add js/inventory.js assets/watches/your-photo.jpg
git commit -m "Add Rolex GMT-Master II Pepsi + mark Daytona sold"
git push
```

---

## 6. Execution Plan

### Phase 1 — Immediate (Week 1)
- [ ] Deploy this site to Netlify (connect GitHub repo → auto-deploy on push)
- [ ] Add custom domain: truenorthwatches.ca
- [ ] Photograph all current inventory and add to `assets/watches/`
- [ ] Fill in real watch data in `js/inventory.js`
- [ ] Test on mobile (iPhone + Android)

### Phase 2 — Polish (Week 2)
- [ ] Add hero background image to `assets/hero-bg.jpg`
- [ ] Add story/about photo to `assets/story-bg.jpg`
- [ ] Connect inquiry form to a real backend (Formspree, EmailJS, or Netlify Forms)
- [ ] Set up Google Analytics 4
- [ ] Add Open Graph meta tags for social sharing

### Phase 3 — Growth (Month 2+)
- [ ] Add video capability to watch detail pages
- [ ] Instagram feed embed or link in footer
- [ ] Consider Webflow CMS migration for non-technical inventory updates
- [ ] Add WhatsApp inquiry button (common in luxury watch market)
- [ ] SEO: individual pages indexed per watch (already supported by current URLs)

---

## Design Decisions — Rationale

| Decision | Why |
|---|---|
| Black + gold palette | Universal luxury signifier; used by Patek Philippe, Richard Mille, Omega |
| Cormorant Garamond serif | High-fashion heritage feel; same tier as brands we're selling |
| Montserrat sans for body | Clean, modern, readable at small sizes |
| No price on hover — price always visible | Transparency builds trust; luxury pre-owned ≠ secretive |
| Unedited photo promise in hero | Differentiator; call it out loud |
| Sold archive | Proves legitimacy; shows turnover; helps buyers calibrate |
| Sticky image on detail page | Matches how Patek/Rolex show products; image stays while specs scroll |
| Filter bar instead of nav pages | Single page = faster, no reload friction |
| Inquiry modal over "add to cart" | Correct for pre-owned luxury; builds personal relationship |
