# How to Update the Site

All updates are made directly in GitHub. No technical knowledge needed beyond basic file editing.

---

## Change the Logo

1. Go to `/assets/` in GitHub
2. Upload your new logo as `logo.png`
3. Select "Replace" when prompted (or delete the old one first)

The logo appears in the navbar and the homepage hero automatically.

---

## Add a New Watch

**Step 1 — Upload photos**

Go to `/assets/watches/` in GitHub and upload your photos.

Use a clear naming convention:
```
/assets/watches/watch-004-a.jpg   ← main photo
/assets/watches/watch-004-b.jpg   ← second photo
/assets/watches/watch-004-c.jpg   ← third photo
```

**Step 2 — Add a row to watches.json**

Open `/data/watches.json` in GitHub and add a new entry inside the `[...]` array:

```json
{
  "id": "watch-004",
  "name": "Model Name Here",
  "category": "1:1 Super Clone",
  "price": "$550",
  "status": "In Stock",
  "featured": false,
  "note": "Optional one-line note, e.g. Black dial",
  "images": [
    "/assets/watches/watch-004-a.jpg",
    "/assets/watches/watch-004-b.jpg",
    "/assets/watches/watch-004-c.jpg"
  ]
}
```

Make sure to add a comma after the previous entry's closing `}` before adding yours.

**Step 3 — Commit**

Click "Commit changes" at the bottom of the page. Netlify will deploy automatically within about 30 seconds.

---

## Change a Price

1. Open `/data/watches.json` in GitHub
2. Find the watch entry by `"name"` or `"id"`
3. Edit the `"price"` field: `"price": "$700"`
4. Commit changes

---

## Remove a Watch

1. Open `/data/watches.json` in GitHub
2. Delete the entire `{ ... }` block for that watch
3. Make sure the commas between remaining entries are correct
4. Commit changes
5. Optionally delete the photos from `/assets/watches/` to save space

---

## Mark a Watch as Sold

If you want to keep the card visible but marked as sold:

1. Open `/data/watches.json`
2. Change `"status": "In Stock"` → `"status": "Sold"`
3. Commit changes

The card will appear greyed out with a "Sold" label.

To remove it completely, delete the entry instead.

---

## Replace Homepage Sample Images

These are the 3 fixed example photos on the homepage (not connected to inventory).

1. Go to `/assets/samples/` in GitHub
2. Upload your new photos as:
   - `sample-1.jpg`
   - `sample-2.jpg`
   - `sample-3.jpg`
3. Replace the existing files

To change the caption labels ("Sport Models", "Dress Models", etc.):

1. Open `index.html` in GitHub
2. Search for `sample-card__label`
3. Edit the text inside those tags
4. Commit changes

---

## Folder Structure Reference

```
/
├── index.html              ← Homepage (edit for About/Contact text)
├── stock.html              ← Current Stock page (auto-generated from JSON)
├── netlify.toml            ← Netlify settings (do not edit)
├── css/
│   └── style.css           ← All visual styles
├── js/
│   └── main.js             ← Minimal site logic
├── data/
│   └── watches.json        ← LIVE INVENTORY — edit this to update stock
└── assets/
    ├── logo.png            ← Replace to change logo everywhere
    ├── samples/
    │   ├── sample-1.jpg    ← Homepage example image 1
    │   ├── sample-2.jpg    ← Homepage example image 2
    │   └── sample-3.jpg    ← Homepage example image 3
    └── watches/
        └── *.jpg           ← Inventory photos (referenced in watches.json)
```

---

## Deploying to Netlify

1. Push this repository to GitHub (already done)
2. Go to netlify.com → "Add new site" → "Import from Git"
3. Select your GitHub repo
4. Publish directory: `.` (leave as root)
5. Click Deploy

After the first deploy, every commit to the main branch auto-deploys in ~30 seconds.

To add your custom domain:

1. In Netlify: Site settings → Domain management → Add custom domain
2. Point your DNS to Netlify's servers as instructed
