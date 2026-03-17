# Wyoming LLC Guide for Foreign Founders

A practical, static one-page website that guides non-U.S. residents through forming a Wyoming LLC, getting an EIN, filing a BOI report, opening a U.S. business bank account, and understanding ongoing compliance requirements.

Built with plain HTML, CSS, and minimal vanilla JS — no frameworks, no build tools required.

---

## Files

```
/
├── index.html       ← All page content and structure
├── styles.css       ← All styles, design tokens, responsive layout
├── script.js        ← FAQ accordion, mobile nav, scroll spy, form helper
└── README.md        ← This file
```

---

## How to Deploy to GitHub Pages

### Option 1: Drag and drop (simplest)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new repository. Name it anything (e.g. `wyoming-llc-guide`).
3. Make the repository **public**.
4. Upload all four files (`index.html`, `styles.css`, `script.js`, `README.md`) by dragging them into the repository's file browser on GitHub.
5. Go to your repository **Settings → Pages**.
6. Under **Branch**, select `main` (or `master`) and set the folder to `/ (root)`.
7. Click **Save**.
8. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Option 2: Using Git from the command line

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Then follow steps 5–8 from Option 1 above.

### Option 3: Custom domain

1. Deploy using either option above.
2. In **Settings → Pages**, enter your custom domain under **Custom domain**.
3. Add a CNAME record pointing to `YOUR-USERNAME.github.io` with your DNS provider.
4. GitHub will handle the HTTPS certificate automatically.

---

## What to Replace Before Going Live

Search for the following comments in `index.html` and update each one:

### 1. Registered Agent Affiliate Link (appears twice)

Look for this comment:
```
<!-- AFFILIATE LINK PLACEHOLDER: registered agent -->
```

Replace both instances of:
```
https://example.com/affiliate-registered-agent
```
with your actual affiliate link for the registered agent service.

### 2. Fiverr EIN Service Link

Look for this comment:
```
<!-- FIVERR LINK PLACEHOLDER: EIN phone service -->
```

Replace:
```
https://example.com/fiverr-ein-service
```
with your actual Fiverr gig URL.

### 3. Wyoming Name Search Link

Find the button in **Step 2** and replace:
```
https://example.com/wyoming-name-search
```
with the actual Wyoming Secretary of State business name search URL:
`https://wyobiz.wyo.gov/Business/FilingSearch.aspx`

### 4. Email Form Action URL

Look for this comment in `index.html`:
```
<!-- EMAIL FORM — REPLACE ACTION URL -->
```

Replace the `action` attribute on the `<form>` tag:
```html
action="https://example.com/your-email-form-action"
```

with your actual email service endpoint. See the table below:

| Email Service | Where to get the action URL |
|---|---|
| **Formspree** | Create a form at formspree.io → use `https://formspree.io/f/YOUR_FORM_ID` |
| **ConvertKit** | Embed form → copy the POST URL from the form code |
| **Mailchimp** | Embed form → copy the `action` URL from the generated HTML |
| **Beehiiv** | Go to your publication embed settings |
| **MailerLite** | Create an embedded form → copy the action URL |

Also update the input field `name` attributes to match what your email service expects:
- **Formspree**: `name` and `email` work fine
- **ConvertKit**: use `first_name` and `email_address`
- **Mailchimp**: use `FNAME` and `EMAIL`

### 5. Brand / Site Name (optional)

Search for `Wyoming LLC Guide` in `index.html` and `README.md` if you want to use a custom brand name.

---

## Connecting Your Email Form

### Formspree (easiest, free tier available)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your form ID.
3. Replace the form action with: `https://formspree.io/f/YOUR_FORM_ID`
4. Add a hidden field for the subject if desired:
   ```html
   <input type="hidden" name="_subject" value="New checklist request" />
   ```
5. Formspree will send form submissions to your email address.

### ConvertKit / Kit

1. In ConvertKit, create a Form or a Landing Page form.
2. Click **Embed** and select **HTML**.
3. Copy the `action` URL from the generated `<form>` tag.
4. Update the field names: `first_name` and `email_address`.
5. Add a hidden field: `<input type="hidden" name="tags[]" value="YOUR_TAG_ID" />` if you want to tag subscribers.

### AJAX / Fetch (no page redirect)

In `script.js`, there is a commented-out AJAX fetch example under **Option B**. Uncomment that block if you want form submissions to happen without a page redirect. This works well with Formspree's JSON API.

---

## Design Customization

All design tokens (colors, fonts, spacing) are defined as CSS custom properties at the top of `styles.css` under `:root { }`.

To change the accent color, update:
```css
--color-accent: #2563EB;
--color-accent-hover: #1D4ED8;
```

To change the background:
```css
--color-bg: #F8FAFC;
--color-bg-alt: #F1F5F9;
```

---

## Adding or Editing Content

All page copy is written directly in `index.html`. Each section is clearly commented:

```html
<!-- SECTION 3: STEP 1 — WHY WYOMING -->
```

To edit a section, find the comment and update the text within that section's `<div class="container">`.

---

## Performance Notes

- No JavaScript frameworks or libraries.
- One Google Font loaded (DM Sans) — remove the `<link>` tag and update `--font-base` in `styles.css` to use only system fonts if you want zero external requests.
- All graphics are inline SVG — no image requests.
- Page is lightweight and loads fast even on slow connections.

---

## Disclaimer

This website is for educational purposes only and does not constitute legal or tax advice. Always recommend that visitors consult a qualified professional for their specific situation.

---

## License

This code is provided for your personal use. You may adapt and deploy it freely for your own site 
