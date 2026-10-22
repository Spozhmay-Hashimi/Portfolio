# Spozhmay Hashimi — Bilingual Portfolio

A personal front-end portfolio built with **HTML5, CSS3, Bootstrap 5 and vanilla JavaScript** — no build step, no framework, no jQuery.

Live features:

- **Real English ⇄ Persian switching** — every string, `lang`/`dir`, the Bootstrap **LTR/RTL** stylesheet, the page title, meta description and Open Graph locale all change.
- **Real light ⇄ dark themes** — full colour system for both, saved per visitor.
- **Editable content** — all personal information lives in one object at the top of `js/script.js`.
- **Honest by design** — empty URLs hide their buttons instead of showing dead links, and no proficiency percentages or invented experience are used.

---

## 1. Run it locally

There is nothing to install or build.

1. Download / clone this folder.
2. Open `index.html` in a browser — double-clicking works.

For the closest match to a real deployment (recommended while editing):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

or in VS Code: right-click `index.html` → **Open with Live Server**.

> The only network requirement is the CDNs (Bootstrap 5, Font Awesome, Google Fonts). Everything else is local.

## 2. Project structure

```text
spozhmay-portfolio/
├── index.html          # semantic structure; contains no custom CSS or JS
├── css/
│   └── style.css       # all styling: design tokens, both themes, gradients, RTL/LTR
├── js/
│   └── script.js       # portfolioData + translations + all behaviour
├── assets/
│   ├── images/         # put real project screenshots here
│   ├── icons/          # SH monogram + favicon (SVG)
│   └── cv/             # put your CV PDF here once it exists
└── README.md
```

## 3. Editing your information

Open `js/script.js`. Everything you are likely to change is inside **`const portfolioData`** at the top, which is documented in place.

| What | Field |
| --- | --- |
| Name / professional title | `name`, `title.en`, `title.fa` |
| Email, phone, WhatsApp | `email`, `phone`, `phoneDisplay`, `whatsappUrl` |
| GitHub / LinkedIn | `githubUrl`, `linkedInUrl` |
| CV download | `cvUrl` (see §6) |
| Profile photo | `profilePhoto` (see §7) |
| Navigation items | `sections` |
| Hero text and badges | `hero` |
| About paragraphs, facts, strengths | `about` |
| Skills | `skills[]` |
| Projects | `projects[]` |
| Education and training | `education[]` |
| Contact channels shown | `contactMethods[]` |

Bilingual fields always use the same shape:

```js
title: { en: "Aspiring Front-End Web Developer", fa: "توسعه‌دهنده فرانت‌اند در مسیر رشد" }
```

Interface labels (nav, section headings, form labels, validation messages, accessibility text) live in the second object, **`const ui = { en: {...}, fa: {...} }`**.

**Never invent information.** If a field is unknown, leave it as `""` — the website hides the related button or row automatically rather than showing a placeholder as if it were real.

### Show / hide the Netlinks student label

```js
showNetlinksStatus: true,   // false hides the hero badge AND the Netlinks card
```

The same switch also controls the Netlinks entry in the Education section, because that entry declares `visibleWhen: "showNetlinksStatus"`.

### Show / hide the academic achievement

```js
showAcademicAchievement: false,  // set true to display first rank / 98.61%
```

### Show / hide the "Open to internships" badge

```js
showOpenToWorkBadge: true,
```

## 4. Adding or editing a project

Each card is rendered from `portfolioData.projects`:

```js
{
  title: "White Tulips — Flower Shop",        // or { en: "...", fa: "..." }
  initials: "WT",                             // shown on the generated cover
  cover: "tulips",                            // nova | tulips | asteria | auto | cafe | default
  image: "",                                  // "assets/images/white-tulips.jpg" to use a real screenshot
  role: { en: "Front-end website development", fa: "..." },
  tag:  { en: "Live demo", fa: "..." },        // small label on the cover (optional)
  text: { en: "…", fa: "…" },
  tech: ["HTML5", "CSS3", "Bootstrap 5", "RTL"],
  achievement: { en: "…", fa: "…" },           // optional one-line note
  githubUrl: "https://github.com/…",           // "" hides the GitHub button
  liveUrl:   "https://….github.io/…",          // "" hides the Live Demo button
}
```

- If both URLs are empty, the card shows a short "not published yet" note instead of dead buttons.
- Keep the wording accurate: student and team work is described as such, and the Mercedes-inspired project states that it is an independent educational project with no Mercedes-Benz affiliation.
- Titles may be English strings or `{ en, fa }` objects — use the object form when the Persian name should differ.

### Project screenshots

1. Save the image into `assets/images/` (e.g. `asteria.jpg`, around 800×500 px).
2. Set `image: "assets/images/asteria.jpg"` on that project.
3. The generated gradient cover is replaced automatically, and alternative text is built from the project title.

Until then the CSS-generated covers (`.project-cover--nova`, `--tulips`, …) are used on purpose — they are decoration, not fake screenshots.

## 5. Social links

Add, remove or edit entries in `portfolioData.contactMethods`. Each one resolves its URL through `hrefFrom`, so a method with an empty URL simply does not render:

```js
{ key: "cv", icon: "fa-solid fa-file-arrow-down",
  label: { en: "Curriculum Vitae", fa: "رزومه (CV)" },
  valueDisplay: { en: "Download CV (PDF)", fa: "دانلود رزومه (PDF)" },
  hrefFrom: "cvUrl", external: true }
```

The hero and footer icon rows read from the same top-level URLs (`githubUrl`, `linkedInUrl`, `whatsappUrl`, `email`), so a link can never appear in one place and be broken in another. External links open in a new tab with `rel="noopener noreferrer"`; the email uses a plain `mailto:` link.

## 6. Adding your CV later

1. Put the PDF in `assets/cv/` (e.g. `assets/cv/spozhmay-hashimi-cv.pdf`), **or** upload it to Google Drive and use a public link.
2. Set `cvUrl: "assets/cv/spozhmay-hashimi-cv.pdf"`.
3. The "Curriculum Vitae" row appears in the Contact section automatically. While `cvUrl` is `""` it stays hidden.

## 7. Adding a profile photo (optional)

The design uses the **SH monogram** by default, and nothing needs to change until a real photo exists. The hero already has an
`<img class="monogram-image" src="assets/icons/sh-monogram.svg" alt="" width="220" height="220">` inside a block marked
`aria-hidden="true"`, because the monogram is decoration and your name is already the `<h1>`. When you have your own photo:

1. Save it as `assets/images/profile.jpg` (a square crop, 600×600 px or larger).
2. Change that `src` to `assets/images/profile.jpg`.
3. Set `alt="Spozhmay Hashimi"` and remove `aria-hidden="true"` from the `.monogram-stage` div, since a real photo now carries meaning.

Do not use a stock photo or another person's image.

## 8. How the language toggle works

- `English | فارسی` in the navbar calls `setLanguage("en" | "fa")`.
- `applyLanguageAttributes()` sets `<html lang>` and `<html dir>`, swaps the Bootstrap stylesheet between `bootstrap.min.css` and `bootstrap.rtl.min.css`, and updates `<title>`, the meta description and `og:locale`.
- `renderAll()` re-translates every static slot (`data-i18n`, `data-i18n-placeholder`, `data-i18n-aria`) and re-renders the nav, hero badges, skills, projects, education and contact lists from `portfolioData`.
- The choice is stored in `localStorage` under `sp.lang` and restored on the next visit. First-time visitors get English.
- Layout direction uses CSS **logical properties** (`margin-inline`, `padding-inline`, `inset-inline-start`, `text-align: start`), so spacing mirrors correctly in RTL without a second stylesheet.
- Emails, phone numbers, code and Latin URLs are wrapped in `dir="ltr"` isolates so they stay readable inside Persian text.
- The current theme is preserved when the language changes (and vice versa).

Persian uses **Vazirmatn**, English uses **Inter** (`--font-fa` / `--font-en` in `style.css`, with system fallbacks).

## 9. How the light / dark theme works

- The toggle button calls `applyTheme()`, which sets `data-bs-theme` on `<html>`.
- Every colour is a CSS custom property; `:root` holds the light values and `html[data-bs-theme="dark"]` overrides them. Both themes are complete — backgrounds, cards, borders, icons, form fields and gradients.
- The choice is saved in `localStorage` under `sp.theme`.
- With **no saved choice**, the site follows the operating system (`prefers-color-scheme`) and keeps following it while no explicit choice exists.
- `js/script.js` is loaded in `<head>` so the theme and language are applied **before the first paint**, which avoids the flash of the wrong theme.

## 10. Publishing with GitHub Pages

1. Create a repository (for example `portfolio`) and upload these files to its root.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save.**
3. Visit `https://<your-username>.github.io/portfolio/`.

Notes:

- GitHub Pages serves `index.html` automatically; no build configuration is needed.
- If the site is ever served from a sub-path, all internal links are already relative (`css/…`, `js/…`, `assets/…`), so nothing else has to change.
- Push each project separately for its own `*.github.io` demo, then paste those URLs into `portfolioData.projects[].liveUrl`.

## 11. Making the contact form actually send email

The form in `#contact` has **no backend**. It validates the fields and then opens the visitor's email app with a pre-filled `mailto:` message — nothing is silently discarded and no fake "message sent" claim is made.

To receive submissions without an email client, wire the form to one of these and replace the submit handler in `initContactForm()`:

| Service | What you do |
| --- | --- |
| **Formspree** | Add a free form endpoint, set `<form action="https://formspree.io/f/XXXX" method="POST">`, keep the same field `name`s. |
| **Web3Forms** | Free access key, `POST` JSON to their endpoint. |
| **Google Apps Script** | Deploy a Web App that forwards to your inbox and `fetch()` it from the handler. |
| **Netlify Forms / Cloudflare Workers + email API** | Requires hosting the site on that platform. |

If you connect a service, keep the client-side validation, and only show a success message once the request has actually resolved. Never store the API key inside `script.js` if the repository is public — use the service's own public form ID.

## 12. Accessibility, SEO and testing checklist

Implemented:

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`), one `<h1>`, ordered headings.
- Skip link, visible focus rings, keyboard-operable controls, `aria-label`s on icon-only buttons, `aria-pressed` on the language buttons, `aria-live` status for the form.
- `prefers-reduced-motion` disables reveal animations, the orbiting dot and smooth scrolling, and a section jumped past with a single scroll is still revealed — content is never *only* reachable through animation.
- Without JavaScript the page still reads in English: headings, the introduction, the About text and a plain email /
  WhatsApp contact list (inside `<noscript>`) stay visible. Only the lists built from `portfolioData` (navigation,
  skills, projects, education) and the two toggles need JavaScript.
- Purple palette with accessible contrast in both themes; `@media (prefers-contrast: more)` strengthens borders.
- Meta description, Open Graph tags, `og:locale` / `og:locale:alternate`, SVG favicon.

Verified in Chrome (desktop and narrow viewports, both themes, both languages): no console errors, no horizontal overflow at 360/414/768/1024/1440/1920 px in either direction, correct `lang`/`dir`, RTL Bootstrap stylesheet swap, theme and language persistence across reloads, system-theme default when nothing is saved, project buttons present only where a real URL exists, hidden CV row while `cvUrl` is empty, mobile menu open/close, form validation states and the composed `mailto:` URL, back-to-top, active-section navigation, reduced-motion behaviour, and the no-JavaScript fallback.

## 13. Design tokens

Change the brand in one place — the top of `css/style.css`:

```css
--smoky-purple: #392548;  --royal-purple: #7950AC;  --lavender: #B9A0E8;
--pale-lilac:   #EAE0F5;  --lavender-white: #F9F6FC; --deep-plum: #17131E;
```

Semantic tokens (`--bg`, `--surface`, `--text`, `--brand`, `--border`, `--grad-*`) are derived from them per theme, so components never hard-code a colour.

## 14. License

Content and design: Spozhmay Hashimi. Code is free for you to modify and use in your own applications.
