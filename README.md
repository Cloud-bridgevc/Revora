# Revora

**Find revenue gaps. Make every collection count.**

Revora helps revenue teams connect assessments, payments, and settlements in one workspace. Its AI highlights discrepancies and gives officers the evidence needed to resolve them.

> Revora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.revora.com` and email `hello@revora.com` are placeholders — check availability with a registrar before use.

Categories: AI · GovTech · Revenue Intelligence

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional discrepancies. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Folasade Akinrinde** — Founder/CEO. Public finance operations specialist with experience in revenue reconciliation.
- **Chukwudi Nwafor** — Co-founder. Enterprise product manager focused on payment integrations.
- **Bashir Danjuma** — CTO. ML engineer specialising in entity resolution and financial anomaly detection.

## Sources for the statistics

- 9.4% — Nigeria’s tax revenue as a share of GDP in 2023, among the lowest in the world. ([IMF, reported by TheCable](https://thecable.ng/imf-at-9-4-in-2023-nigerias-tax-revenue-to-gdp-ratio-among-lowest-in-the-world))
- 16% — Average tax-to-GDP ratio across 36 African countries in 2022. ([OECD Revenue Statistics in Africa 2024](https://www.oecd.org/en/publications/revenue-statistics-in-africa-2024_78e9af3a-en/full-report/executive-summary_75dc5f62.html))
- 34% — Average tax-to-GDP ratio across OECD countries, for comparison. ([OECD Revenue Statistics in Africa 2024](https://www.oecd.org/en/publications/revenue-statistics-in-africa-2024_78e9af3a-en/full-report/executive-summary_75dc5f62.html))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@revora.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
