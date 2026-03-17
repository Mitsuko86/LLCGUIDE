# Wyoming LLC Guide for Foreign Founders

A practical, static one-page website guiding non-U.S. residents through forming a Wyoming LLC, getting an EIN, filing a BOI report, opening a U.S. business bank account, and staying compliant.

Plain HTML, CSS, and minimal vanilla JS — no frameworks, no build tools.

---

## Files

```
/
├── index.html    ← All page content and structure
├── styles.css    ← All styles (design tokens, layout, responsive)
├── script.js     ← FAQ accordion, mobile nav, scroll spy, form helper
└── README.md     ← This file
```

---

## Deploy to GitHub Pages

### Option 1: Upload via GitHub (simplest)

1. Create a new **public** repository on github.com
2. Upload all four files via the repository file browser
3. Go to **Settings → Pages**
4. Under Branch, select `main` and folder `/ (root)` → click **Save**
5. Your site is live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Option 2: Git command line

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Then follow steps 3–5 above.

---

## What to Replace Before Going Live

Search `index.html` for these comments and update each one:

| Comment in code | What to replace |
|---|---|
| `AFFILIATE LINK PLACEHOLDER: registered agent` | Your actual affiliate link (appears twice — Step 3 and final CTA) |
| `FIVERR LINK PLACEHOLDER: EIN phone service` | Your Fiverr gig URL |
| `REPLACE: update this URL to the actual Wyoming SOS` | Real URL: `https://wyobiz.wyo.gov/Business/FilingSearch.aspx` |
| `EMAIL FORM — REPLACE ACTION URL` | Your email service POST URL (see below) |

---

## Connecting the Email Form

| Service | Action URL | Field names |
|---|---|---|
| **Formspree** | `https://formspree.io/f/YOUR_ID` | `name` + `email` |
| **ConvertKit** | From your embed form HTML | `first_name` + `email_address` |
| **Mailchimp** | From your embed form HTML | `FNAME` + `EMAIL` |
| **MailerLite** | From your embed settings | varies |

For AJAX submission (no page redirect), uncomment Option B in `script.js`.

---

## Design Customization

All colors and spacing are CSS variables in `:root {}` at the top of `styles.css`.

Key variables:
```css
--accent:       #2563EB;   /* Main blue — buttons, links, highlights */
--accent-hover: #1D4ED8;   /* Button hover state */
--text-primary: #0F172A;   /* Main headings */
--text-secondary: #475569; /* Body text */
--bg:           #F8FAFC;   /* Page background */
--bg-alt:       #F1F5F9;   /* Alternating section background */
```

---

## Fonts

The site uses two Google Fonts:
- **Inter** — clean, readable sans-serif for all body text and UI
- **DM Serif Display** — elegant serif for the hero headline

To remove Google Fonts (for faster load or privacy), delete the `<link>` tags from `index.html` and update `--font-sans` and `--font-serif` in `styles.css` to use system fonts.

---

## Disclaimer

This website is for educational purposes only and does not constitute legal or tax advice.
