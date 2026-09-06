# CASE 112405

Static mystery-game website designed for GitHub Pages.

## Pages / NFC routes

- `/`
- `/phone`
- `/purdue`
- `/purdue/fungarium`
- `/purdue/personnel/eshaw`
- `/purdue/access`
- `/archive/weather`
- `/forensics`
- `/forensics/toxicology`
- `/forensics/chemistry`
- `/files`
- `/terminal`

## GitHub Pages setup

1. Create a GitHub repository, e.g. `case112405`.
2. Upload `index.html`, `style.css`, `app.js`, and `404.html` to the repository root.
3. In GitHub: Settings → Pages.
4. Deploy from branch `main`, folder `/root`.
5. Your site will look like:
   `https://USERNAME.github.io/case112405/`
6. NFC links can point directly to routes such as:
   `https://USERNAME.github.io/case112405/phone`

The included `404.html` redirects direct NFC route visits back into the single-page app.

## Current encrypted file passwords

- REPORT.DOC → `112505`
- ACCESS_LOG.DAT → `ES417`
- ARCHIVE_F12.LOG → `F12112105`

Change these in `app.js` before your final game if desired.

## Safety note

The chemistry content is intentionally fictionalized. The site omits toxin preparation, extraction, dosing, or administration details.
