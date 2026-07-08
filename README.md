# 🛠️ Free Online Calculators

A pure static website of free online calculators — finance, health, math, and unit converters. All computations happen locally in the browser. No backend, no database, no tracking.

Built for **Google AdSense monetization** targeting Tier-1 (US/UK/Canada/Australia) traffic.

## 📂 Project Structure

```
calculator-site/
├── index.html                         # Homepage with search
├── sitemap.xml                        # Sitemap for SEO
├── robots.txt                         # Crawler rules
├── css/
│   └── style.css                      # Global styles (responsive)
├── finance/                           # Financial calculators
│   ├── compound-interest.html         # Compound Interest — highest RPM niche
│   ├── loan-calculator.html           # Loan / Mortgage Payment
│   └── roi-calculator.html            # ROI & CAGR Calculator
├── health/                            # Health calculators
│   ├── bmi-calculator.html            # BMI (Body Mass Index)
│   └── calorie-calculator.html        # TDEE Daily Calorie Needs
├── math/                              # Math & date tools
│   ├── percentage-calculator.html     # 4-mode percentage calculator
│   └── age-calculator.html            # Age & days-between-dates
└── converters/                        # Unit converters
    └── unit-converter.html            # 6-category all-in-one converter
```

## 🚀 Deploy to GitHub Pages (3 Steps)

### Step 1: Create a GitHub Repository

1. Go to https://github.com and sign up/log in
2. Click `+` → `New repository`
3. Name it: `calculator-site`
4. Set to **Public**
5. Click `Create repository`

### Step 2: Upload Files

**Option A — Drag & drop (easiest):**
1. In your repo, click `Add file` → `Upload files`
2. Drag the **contents** of the `calculator-site` folder directly into the upload area
3. ⚠️ Important: upload the files to the repo root (not inside a subfolder). You should see `index.html`, `css/`, `finance/`, etc. at the top level
4. Write a commit message: "Initial release"
5. Click `Commit changes`

**Option B — Git CLI (for ongoing development):**
```bash
cd calculator-site
git init
git add .
git commit -m "Initial release"
git remote add origin https://github.com/YOUR_USERNAME/calculator-site.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo → `Settings` → `Pages` (left sidebar)
2. Under "Branch", select `main` and folder `/ (root)`
3. Click `Save`
4. Wait ~1 minute. You'll see:
   > ✅ Your site is live at `https://YOUR_USERNAME.github.io/calculator-site/`

Done! Your site is live worldwide.

## 🔄 Updating the Site

After making changes locally:

**Drag & drop method:** Re-upload the changed files → GitHub Pages auto-updates.

**Git method:**
```bash
git add .
git commit -m "Update description"
git push
```

## 📝 Before Going Live — Replace Placeholders

Search all files for `YOUR_USERNAME` and replace with your actual GitHub username:

1. **sitemap.xml** — all 9 URLs
2. **robots.txt** — sitemap URL
3. All `.html` files — `url` fields inside `<script type="application/ld+json">` blocks

This affects SEO only. The site works fine even without these changes.

## 💰 Monetization Plan

| Milestone | Action | Expected RPM |
|-----------|--------|-------------|
| Launch | Add Google AdSense code to all pages | — |
| 5,000 visits/month | AdSense starts earning | $15–40 (finance pages) |
| 50,000 visits/month | Apply for Mediavine / Raptive | $25–60+ |
| 100,000+ visits/month | Add affiliate links + direct ad sales | Maximize |

**Key insight:** Finance calculators (compound interest, loan, ROI) have ~8x higher RPM than general content. Focus SEO efforts there.

## 🔍 SEO Features

- ✅ JSON-LD structured data (WebApplication + FAQPage) on every page
- ✅ Mobile-first responsive design
- ✅ Semantic HTML5
- ✅ Breadcrumb navigation
- ✅ Internal linking network between related tools
- ✅ 800+ words of educational content per tool page
- ✅ sitemap.xml + robots.txt
- ✅ Fast loading (pure static, no frameworks, no JS bundles)

## ➕ Adding New Tools

1. Copy an existing tool page as a template
2. Edit the calculator logic, title, description, and FAQs
3. Add a card to `index.html` in the appropriate category section
4. Add the URL to `sitemap.xml`
5. Push to GitHub → live automatically

Each new tool takes ~15 minutes to build and deploy.

## 🔒 Privacy

All calculations happen in the user's browser via JavaScript. No data is ever sent to any server. No cookies, no tracking, no registration required. This is a pure static site that runs entirely on the client side.
