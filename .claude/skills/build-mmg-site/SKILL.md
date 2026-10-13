---
name: build-mmg-site
description: >-
  Run Phase 2 of the Media Masters plan. Works through the blueprint's build order, drafts each page with the content-writer agent, assembles the static site, and gates every page with the QA agent. Use when asked to build or extend the Media Masters Group website.
---

# /build-mmg-site — Phase 2 build

Requires `media-masters/research/05-mmg-site-blueprint.md` (from `/analyze-d3`) and a filled-in
`media-masters/intake.md`. Standards are in `media-masters/PLAN.md` section 5.

## 1. Set up the site repository
- The website lives in its own repository (`media-masters-site`), not in this one. If the user has
  not created it, scaffold it in a sibling directory with Astro (`npm create astro@latest`),
  a `src/content/` collection for pages, a base layout with the schema and analytics partials from
  the blueprint's technical spec, and Cloudflare Pages deployment notes. If the user prefers plain
  HTML like this repo, scaffold that instead; either is acceptable.
- Add `llms.txt`, `robots.txt`, sitemap generation, a 404 page, and a redirects file.

## 2. Draft pages in build order
For each sprint in the blueprint's build order, launch one `mmg-content-writer` per page in
parallel (batches of up to six), each with its brief name and the output path
`media-masters/site-content/<slug>.md`. Wait, then read each draft and resolve any `[[NEEDS:` items
from the intake; anything still unknown becomes a question list for the owner, and the page keeps
a visible `[[PROOF: ...]]` placeholder rather than an invented fact.

## 3. Assemble
Convert each draft into a page in the site repo using the layout, with the front matter driving
title, description, canonical, schema, and internal links. Add real images only; where none exist,
use a clearly labeled placeholder block, never stock imagery presented as ours.

## 4. Gate
Build and serve locally, then launch `mmg-qa-reviewer` against the preview URL for the sprint's
pages. Fix everything it blocks on, re-run until SHIP. Keep its report under
`media-masters/reports/`.

## 5. Ship
Commit to the site repo on a feature branch, push, and summarize for the user: pages shipped,
Lighthouse scores, open placeholders, and what the next sprint needs from them. Never publish a
page that still contains a placeholder on the live domain without telling the user.
