# PaintRite Painters — Website

A marketing site for PaintRite Painters, a family-owned residential & commercial painting company in San Diego, CA. Content is based on the live site at paintritepainters.com.

Built on **Next.js 16 (App Router) + React 19 + Tailwind 4**, mirroring the structure of the Guardian Pest project (`cohesive/paintrite`): a single long landing page composed of section components, with the service/company pages kept as their own routes.

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in the ACS value
npm run dev                  # http://localhost:3000
```

`npm run build && npm start` runs the production build.

## Structure

```
app/
  layout.tsx               Fonts (Inter + Poppins), metadata, <html>/<body>
  globals.css              Tailwind import + the brand palette as @theme tokens
  page.tsx                 Landing page — Hero, TrustBar, WhyUs, Process,
                           Services, ServiceAreas, Testimonials, FinalCTA
  about/                   Company story (founded 1994 by Tony Zuniga), values, FAQ
  residential/             Interior, exterior, wood staining & painting
  commercial/              Commercial interior/exterior, sectors, process
  service-areas/           15 San Diego County cities, grouped by region
  gallery/                 Filterable project grid
  contact/                 Full quote form + contact details
  privacy-policy/
  api/intake/route.ts      POST /api/intake — lead handler (Node runtime); currently unused
  components/
    Navbar.tsx             Fixed header + mobile menu
    Footer.tsx             Four-column footer
    BookingEmbed.tsx       The DripJobs appointment form, in an iframe
    QuotePanel.tsx         Booking CTA card in the hero + closing CTA
    PageHero.tsx           Dark banner every sub-page opens with
    CTABand.tsx            Closing call-to-action strip
    SplitSection.tsx       Image-beside-copy service block
    AreaTabs.tsx           Region tabs over the city list
    Testimonials.tsx       Review carousel
    Faq.tsx                Accordion
    GalleryGrid.tsx        Filterable gallery
    CheckList.tsx          Navy check-mark bullet list
lib/
  site.ts                  Phone, hours, licence numbers — change once, applies everywhere
  content.ts               Services, service areas, testimonials, FAQs, gallery items
  notify.ts                Sends the lead email via Azure Communication Services
public/images/             Logo + project photography (served at /images/*)
```

Shared content lives in `lib/content.ts` so the landing page, the sub-pages, and the
footer all read from one source and can't drift apart. Same idea for `lib/site.ts` —
update the phone number there and it propagates to the nav, footer, forms, and every page.

## The quote form — DripJobs

**Leads go to DripJobs, not to this site.** `/contact` embeds the office's DripJobs
appointment-request form in an iframe (`BookingEmbed`), so visitors fill it in without
leaving the site. The URL lives in `lib/site.ts` as `BOOKING_URL` and points at
`/appointmentrequests` directly — the bare subdomain 302s there, so linking the full path
skips a redirect.

Every "Get a Quote" / "Request My Free Estimate" button on the site routes to
`/contact#book`. The hero and closing-CTA blocks show `QuotePanel` — a compact card that
sells the booking and links to the embed — rather than a second copy of the form.

> ⚠️ **Because DripJobs owns the submission, it also owns the notifications.** Confirm in
> DripJobs that new appointment requests actually alert Tony and the office. Nothing in
> this repo will email anyone about a lead any more.

Two things to watch with the embed:

- **Framing.** DripJobs currently sends no `X-Frame-Options` or CSP `frame-ancestors`, so
  the iframe loads. That's their header to change, not ours — `BookingEmbed` therefore
  always renders an "Open it in a new tab" link underneath, so a blocked frame can't
  silently cost a lead. If they ever do block framing, switch the embed for a plain link.
- **Height.** DripJobs is cross-origin, so we can't measure its content to auto-size the
  frame. It's set to a generous fixed height and scrolls internally. If they lengthen the
  form, bump the height in `BookingEmbed.tsx`.

### The old on-site form (retained, unused)

`app/api/intake/route.ts` + `lib/notify.ts` still implement the previous path — validate
the lead (needs at least a phone or an email), then send it through Azure Communication
Services with `replyTo` set to the customer. **Nothing posts to it now.** It's kept working
so an on-site form can be re-introduced, or run alongside DripJobs, without rebuilding the
email path. If DripJobs is the permanent single intake, delete both files and the
`ACS_CONNECTION_STRING` config below. The form component itself was removed — recover it
from git history (`app/components/QuoteForm.tsx`) if you want it back.

### Configuration

`ACS_CONNECTION_STRING` is the **only** environment variable — it holds the ACS access key,
so it's the only piece that has to stay secret. Locally it comes from `.env.local`
(gitignored — never commit it).

**On Vercel set it as an Environment Variable** (Project → Settings → Environment Variables)
for Production, Preview, and Development. `.env.local` is not deployed.

With DripJobs handling intake this is no longer needed to launch — `/api/intake` has no
callers, so an unset key breaks nothing. Set it only if you re-introduce an on-site form.

Everything else is **hard-coded** in `lib/notify.ts`: none of it is secret, and a deploy
shouldn't be able to get it wrong.

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

Vercel runs `next build`, serves the pre-rendered pages from the CDN, and runs
`/api/intake` as a Node function.

`vercel.json` pins `"framework": "nextjs"`. That line matters: this project was first
deployed as a static site, so **Framework Preset: Other** is still saved on it in the
dashboard, and a saved preset beats auto-detection. Without the pin the build fails with:

```
Error: No entrypoint found in "/vercel/path0". Set package.json "main" to a server file…
```

— Vercel looking for a plain Node server because it doesn't think this is Next.js.
Settings in `vercel.json` take precedence over the dashboard, so the pin fixes it without
anyone having to remember a dashboard toggle.

Two leftovers from the static era to clear in **Project → Settings → Build & Deployment**
if they're still set, since either will break the build:

- **Output Directory** — must be blank/default. The old setup pointed it at `public/`,
  which would publish the raw folder instead of the build.
- **Build Command** — must be blank/default (`next build`). The old setup had none.

The previous `vercel.json` (`outputDirectory: public`, `cleanUrls`) is gone and must not
come back. `cleanUrls` is unnecessary now — App Router paths have no extension anyway.

## Brand

The palette carried over from the original stylesheet and is registered as Tailwind theme
tokens in `app/globals.css` — so `bg-navy`, `text-yellow`, `border-line` etc. all work, and
the palette lives in exactly one place.

| Token | Value | Use |
|---|---|---|
| `navy` | `#22409a` | Primary — links, ghost buttons, eyebrows on light |
| `navy-dark` | `#16296a` | Navy hover |
| `navy-deep` | `#0e1c47` | Darkest surface — dark sections, footer |
| `yellow` | `#f7df1e` | Accent + primary CTA (always with `navy-deep` text on it) |
| `yellow-dark` | `#e0c800` | CTA hover |
| `ink` / `body` / `muted` | `#14181f` / `#4a5262` / `#79808f` | Headings / copy / meta |
| `line` / `soft` | `#e3e6ec` / `#f5f7fa` | Borders / light section backgrounds |

Yellow is never used for text on a light background — it's a surface colour with dark text
on it. On white, the accent is navy.

Fonts: Poppins (headings, buttons — `font-display`), Inter (body — `font-sans`), via
`next/font/google`.

## Imagery

All photos in `public/images/` are **PaintRite's own project photos**, pulled from the media
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
> swap them into `service-interior.jpg` / `resi-interior.jpg`, then add a few to the gallery.

To add a gallery item, append to `GALLERY` in `lib/content.ts` and set `cat` to
`residential`, `commercial`, or `stain` — that field drives the filter buttons.

## Notes / TODO before going live

- **Submit a test appointment request through the embedded DripJobs form** and confirm it
  reaches the office. DripJobs owns lead notifications now — nothing here emails anyone.
- **Check the embed on a real phone.** A 1,400px cross-origin iframe with its own internal
  scrolling is the part of this build most likely to feel wrong on mobile.
- **No residential interior photos exist.** See "Imagery" above — this is the biggest content gap.
- **Testimonials** are drawn from public review-site themes and attributed generically
  ("Homeowner — Chula Vista"). Replace with real, attributed reviews before publishing.
- Stats such as "5.0 rating" and "15+ cities" should be confirmed against current figures.
- The old static site used `.html` URLs behind Vercel's `cleanUrls`, so `/about`, `/contact`,
  etc. already resolved without the extension — the new routes match them. `/privacy-policy`
  was kept at that path rather than shortened to `/privacy` for the same reason.
