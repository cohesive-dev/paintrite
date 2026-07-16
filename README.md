# PaintRite Painters — Website

A static marketing site for PaintRite Painters, a family-owned residential & commercial painting company in San Diego, CA. Content is based on the live site at paintritepainters.com.

## Running locally

The pages are plain HTML/CSS/JS. The only server-side piece is the quote form,
which posts to `/api/intake`.

```bash
npm install
cp .env.example .env.local   # fill in the ACS values
npm start                    # http://localhost:3000
```

`npm run dev` does the same with `--watch`. The site's pages will open straight from
`file://` too, but the quote form needs the server running.

## Structure

```
public/                    Everything web-public — this is Vercel's outputDirectory
  index.html               Home — hero + quote form, services, about, process, reviews
  about.html               Company story (founded 1994 by Tony Zuniga), values, FAQ
  residential.html         Interior, exterior, wood staining & painting
  commercial.html          Commercial interior/exterior, industries, process
  service-areas.html       15 San Diego County cities
  gallery.html             Filterable project grid
  contact.html             Quote form + contact details
  css/style.css            All styles (single stylesheet, CSS custom properties)
  js/main.js               Shared header/footer + interactions + form submit
  images/                  Logo + project photography
api/intake.js              POST /api/intake — Vercel serverless function
lib/notify.js              Sends the lead email via Azure Communication Services
lib/lead.js                Lead parsing/validation, shared by api/ and server.js
server.js                  Local dev only — mimics Vercel (static public/ + /api/intake)
vercel.json                outputDirectory: public, cleanUrls
```

**Nothing outside `public/` is ever web-readable.** Source and secrets live above it by
design — that's what keeps `/lib/notify.js` and `.env.local` from being fetchable. Don't
move static assets out of `public/`, and don't set Vercel's Output Directory to the repo
root.

## The quote form

Mirrors the intake flow from the Guardian Pest project (`cohesive/paintrite`):

1. `js/main.js` POSTs the form fields as JSON to `/api/intake`.
2. `server.js` trims/validates them. A lead needs **at least a phone or an email**,
   or it's rejected with a 400 — there's no point in a lead you can't contact.
3. `lib/notify.js` sends the notification through Azure Communication Services,
   with `replyTo` set to the customer so the office can reply directly.

Failures are surfaced to the visitor with a "please call us instead" message rather
than being swallowed, so a lead is never silently lost.

### Configuration

`ACS_CONNECTION_STRING` is the **only** environment variable — it holds the ACS access key,
so it's the only piece that has to stay secret. Locally it comes from `.env.local`
(gitignored — never commit it).

**On Vercel set it as an Environment Variable** (Project → Settings → Environment Variables)
for Production, Preview, and Development. `.env.local` is not deployed. Without it the form
returns a 502 and every lead is lost, so set it before pointing a real domain at the
deployment.

Everything else is **hard-coded** in `lib/notify.js`, matching the Guardian project's
reasoning: none of it is secret, and a deploy shouldn't be able to get it wrong.

| | |
|---|---|
| From | `DoNotReply@notification.getcohesiveai.com` |
| To | `tony@` and `admin@paintritepainters.com` |
| BCC | `nam@` and `kevin@cohesiveapp.com` |
| Reply-To | the customer's email, when they gave one |

The sender domain (`notification.getcohesiveai.com`) must stay verified in the ACS resource —
if it isn't, Azure rejects every send. Note the From is a Cohesive domain rather than
PaintRite's; replies still reach the office because Reply-To points at the customer.

## Deployment (Vercel)

Zero-config against this layout — no build step:

- `public/` is served by the CDN (set via `outputDirectory` in `vercel.json`).
- `api/intake.js` is auto-detected as a Node serverless function at `/api/intake`.
- `cleanUrls` makes `/about` serve `about.html`; internal links use `.html` and work either way.

Vercel project settings should be **Framework Preset: Other**, no build command. `vercel.json`
already pins the output directory, so leave the dashboard's Output Directory blank.

> Don't deploy `server.js` as the request handler. It assumes a long-running host with the
> HTML on disk next to it; on Vercel only traced code is bundled, so the pages aren't there
> and every route 404s. It's for local dev only.

## How it fits together

The header and footer are **not** duplicated in each page. They're rendered by `js/main.js` into the
`<div data-site-header>` / `<div data-site-footer>` placeholders. To change navigation, phone number,
hours, or footer links, edit the `SITE` and `NAV` constants at the top of `js/main.js` — one edit
updates every page. Nav active-state is derived from the current filename.

`js/main.js` also handles the mobile nav, scroll reveals, the FAQ accordion, gallery filters, and the
quote forms.

## Imagery

All photos in `images/` are **PaintRite's own project photos**, pulled from the media
library on paintritepainters.com (`/wp-json/wp/v2/media`) and resized for web.

Their library also contains ~36 licensed **Adobe Stock / iStock** files. Those were
deliberately **not** used — that licence is PaintRite's and doesn't obviously travel to a
new build, and their own work is better proof anyway. If you want stock filler, licence it
explicitly rather than re-hosting those files.

Gallery captions describe **only what's visible in each photo**. The source library records
no project locations, so no city is claimed for any individual project — just
"San Diego, CA". Don't add specific cities to captions unless you know them.

> ⚠️ **Gap: there are no residential interior photos.** The library has zero rooms, cabinetry,
> or hardwood floors — it's all exteriors, commercial buildings, doors, and trucks. So:
> - the **Interior Painting** card on the home page and the residential *Interior* split both
>   use a **commercial** interior, the only interior work photographed;
> - the gallery has no residential interiors at all.
>
> This undersells a service the site sells hard. Ask Tony for interior/cabinetry photos and
> swap them into `service-interior.jpg` / `resi-interior.jpg`, then add a few to the gallery
> with `data-cat="residential"`.

To add a gallery item, copy an existing `.gallery__item` block and set `data-cat` to
`residential`, `commercial`, or `stain` — that attribute drives the filter buttons.

## Brand

| Token | Value | Use |
|---|---|---|
| `--navy` | `#22409a` | Primary — headers, buttons, links |
| `--navy-deep` | `#0e1c47` | Footer, topbar, gradient base |
| `--yellow` | `#f7df1e` | Accent — CTAs, highlights |

Fonts: Poppins (headings), Inter (body), loaded from Google Fonts.

## Notes / TODO before going live

- **Send a test lead to confirm `tony@` and `admin@paintritepainters.com` actually receive it.**
  The addresses are set, but they've never been delivered to — verify before trusting them.
- **Provision / confirm the ACS resource** and verified sender domain, then fill in `.env.local`.
- **No residential interior photos exist.** See "Imagery" below — this is the biggest content gap.
- **Testimonials** are drawn from public review-site themes and attributed generically
  ("Homeowner — Chula Vista"). Replace with real, attributed reviews before publishing.
- Stats such as "5.0 rating" and "15+ cities" should be confirmed against current figures.
