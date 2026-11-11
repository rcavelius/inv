# D3 Corp scorecard

Prepared for Media Masters Group LLC, 2026-11-11. Built only from the six verified research documents in `media-masters/research/`, short-named below:

| Short name | File |
|---|---|
| 01 | `01-d3-site-inventory.md` |
| 01b | `01b-d3-content-inventory.md` |
| 02 | `02-d3-seo-audit.md` |
| 02b | `02b-d3-offpage-local.md` |
| 03 | `03-d3-ux-critique.md` |
| 03b | `03b-d3-conversion-messaging.md` |

The figures in those documents come from the d3corp.com crawl of 2026-10-14 (`media-masters/research/raw/d3/`). The one exception is 02b, which also used WebSearch on 2026-11-11. No new searches or fetches were made for this scorecard. Grades are our judgement of the measured facts. They are not measurements.

---

## Summary for the owner (ten bullets)

1. **D3 is a real, established competitor.** It was founded in 1995, says it has "over 40" staff, and has two offices. It is closely tied to both local chambers (01 §6; 02b §1).
2. **Their website is slow on phones.** Mobile Lighthouse performance was 38 to 54 out of 100. On 5 of 6 pages tested, the main content took 15 to 30 seconds to appear (02 §9.1).
3. **They publish no prices.** The only price on the site is "$195/hr" for custom programming, in their Terms (01 §1.4; 03b §3.1).
4. **Their sales copy and their contract disagree.** The ads page promises "No long-term commitments or contracts necessary." Their Terms set a 3-year term that renews automatically and must be paid in full if the client leaves early (03b §3.2). This is our sharpest talking point.
5. **No person promises to reply.** The only response promise on the site is a chat bot's "We respond immediately." The site has no booking link and no phone number on any phone first screen (01 §5.5; 03 §3).
6. **Their proof has names but few numbers.** Of 28 case studies, only Visiting Angels states a growth result from D3's work, and Primo gives a lead-capture rate (01b §3.1).
7. **Accessibility is poor even with an overlay.** Automated tests on 30 pages found 910 failing elements, 34 of them critical, and some of those are in the lead forms (03 §7.1).
8. **They have no page for any town.** None of the 12 H1s names a place, and the service-page body copy names no town at all (02 §10; 03b §2.3).
9. **Their strengths are relationships and a portfolio of real local clients.** We cannot copy 30 years of history. We can beat them on clarity, speed, prices, response time and reviews.
10. **Their review standing is still unknown.** Their Google Business Profile was not checked, so we do not know their real rating (02b §3). Checking it is the first follow-up.

---

## 1. D3 in five lines

1. **Founded 1995** by John Gehrig in Ocean City, MD. The site claims "over 40" staff, but the careers page says "35+ full-time employees" (01 §6; 03b §2.3).
2. **Two offices:** 12319 Ocean Gateway, Suite 202, Ocean City MD 21842 (the West Ocean City office) and 212 West Main Street, Salisbury MD 21801. One phone number: 410-213-2400 (01 §6).
3. **12 services, each with its own page in the menu.** The Contact dropdown lists 40 service options, and at least 12 of them have no page (01 §3).
4. **157 crawled pages:** 52 blog posts, 33 video pages, 29 case-study pages and only 13 service pages. The blog published 4 posts in the 12 months before the crawl, and the last one was 126 days old on crawl day (01 §2.1; 01b §2.1).
5. **Reviews:** the Google Business Profile was not checked. Clutch shows "Not yet reviewed." The October recon saw 5.0 from 35 reviews on chamberofcommerce.com and 46 reviews on BestProsInTown, but neither was re-confirmed (02b §3).

---

## 2. Scorecard

| Area | Grade | Most telling measured fact (source) | Our standard |
|---|---|---|---|
| Website speed | **F** | Mobile Lighthouse performance 0.38 to 0.54; LCP 15.1 to 30.3 s on 5 of 6 pages; pages weigh 4,215 to 8,166 KiB (02 §9.1) | Mobile Lighthouse 95+, LCP under 2.5 s, under 1 MB per page on every template |
| Accessibility | **D** | 910 axe failures on 30 pages (34 critical, 641 serious), even with the accessiBe overlay on all 157 pages (03 §7.1) | 0 critical or serious axe violations on every page, checked on every build; no overlay |
| SEO hygiene | **D** | 145 of 157 pages have no H1; Organization schema holds only name, URL and logo (02 §5.1, §8.2) | Exactly one H1 with service or town on every page; full `ProfessionalService` schema; 0 errors in validator |
| Content depth | **C** | 12 service pages of 641 to 1,424 words, but only 4 blog posts in the last 12 months, all by "D3 Support" (01 §3; 01b §2.1–2.2) | 1 article a week (48+ a year) with a named author, 700+ body words, a Delmarva town in each |
| Proof and case studies | **C** | 28 case studies, but 1 states a D3 growth result in numbers (Visiting Angels) and 1 a lead-capture rate (Primo) (01b §3.1) | Every case study shows 2+ before-and-after metrics with dates and source; 1 per service page |
| Pricing transparency | **F** | No price on any page; the only price is "$195/hr" in Terms Exclusions 12 (01 §1.4) | Starting-at price on every service page plus a `/pricing/` page in the top nav |
| Lead capture and response | **D** | 7 different inquiry forms; the header quote form asks 13 questions; no booking link; only a bot promises a reply (01 §5.1, §5.5; 03b §4.3) | One form, at most 4 fields; live booking link; a named human replies the same business day |
| Local coverage | **C** | Address and phone on all 157 pages and real chamber roles, but 0 town pages and 0 town names in service-page body copy (02 §10; 03b §2.3; 02b §1) | 9 location pages; 3+ Delmarva towns named in every service page's body copy |
| AI-search readiness | **D** | Sells an AEO service, yet has no `LocalBusiness`, `sameAs` or `FAQPage` on any page and no named authors (02 §8.1–8.2; 01b §2.2) | Full entity schema, FAQPage on every service page, named authors, `llms.txt`; monthly 20-prompt AI test |
| Reviews and citations | **C (provisional)** | Clutch has 0 reviews; listings show 5 name variants and 1 stale address; Google not checked (02b §2–3) | Google 4.8+ with 25+ reviews by day 90; one name and one NAP on 100% of listings |

---

## 3. Their five real strengths we must match

| # | Strength | Evidence | How we match it |
|---|---|---|---|
| 1 | **Deep local institutional ties.** D3 sends the Salisbury chamber's weekly member emails and makes its Business Profile videos. Its COO sat on the chamber's 2023 Voting Council. It is an Ocean City chamber member and held a 30th-anniversary ribbon-cutting | 02b §1, §4 (case study is corpus-measured; ribbon-cutting is search-observed) | Join the OC, Salisbury, Ocean Pines and Bethany-Fenwick chambers in quarter 1; attend 1 event a month (02b §8 #9). Do not try to beat this head-on in year 1 |
| 2 | **A portfolio of real, named local clients.** 28 case studies, 20 client sites in the home slider, 14 home testimonials (11 with full names), long relationships (White Marlin Open "since 2016") | 01b §3.1, §5; 03b §6.1–6.2 | Proof built into every service page, laid out without carousels, with numbers and dates |
| 3 | **A broad, documented service line,** including in-house multimedia with licensed drone work and a 32-page video library | 01 §3; 01b §4 | A page for every service we actually sell, each with process, deliverables and price |
| 4 | **They already sell AI services.** They have an AEO page, an AI Assistant product, and 5 of their 7 newest posts are about AI | 01 §4; 01b §2.4 | An AEO page that shows our method, the prompts we track and our results (01 §8 #14) |
| 5 | **The basics done right.** NAP on every page, server response in 60 to 100 ms, CLS of 0.031 to 0.049, 77% of images in WebP, 88% lazy-loaded, Service schema on 8 pages | 02 §1.9, §7, §9.1 | Match all of these by default on the static build, and add the H1, schema and speed they lack |

---

## 4. The ten most exploitable weaknesses

Ranked by (how much a buyer cares) × (how cheap it is for us to do better). The ranking is our judgement.

| Rank | Weakness, with evidence | Our standard |
|---|---|---|
| 1 | **No prices anywhere.** A prospect must fill in a 13-question form to learn whether D3 costs $2k or $20k (03b §8; 01 §1.4) | Starting-at prices and 3 packages per service, on `/pricing/` and on every service page |
| 2 | **The contract contradicts the copy.** "No long-term commitments" on the ads page, but the Terms say 3 years, auto-renewal, full-term payout on exit, and 1.5% a month compounded late interest (03b §3.2) | Month-to-month, 30 days' notice by email, no exit fee; a plain-English "What you own" page |
| 3 | **No human reply promise and no booking path.** Only the bot says "We respond immediately," and nothing after submit was crawled (01 §5.4–5.5) | A named human replies the same business day; 15-minute booking link as the primary CTA |
| 4 | **The phone first screen is mostly clutter.** Only 46% of it is page content; the cookie banner, chat and overlay cover 35.7%; no phone number appears on any mobile fold (03 §3) | 65%+ of the 390x664 screen is content; tap-to-call in a sticky header of 64 px or less |
| 5 | **Slow pages.** LCP of 15 to 30 s on 5 of 6 pages, and about 1.47 MB of unused JavaScript on every tested page (02 §9) | Lighthouse 95+, LCP under 2.5 s, under 100 KB of CSS and JS |
| 6 | **Proof without numbers.** 26 of 28 case studies give no figure for what D3's work achieved; no service page quotes a client metric in its own copy (01b §3.1; 03b §6.1) | 2+ dated before-and-after metrics per case study, with client sign-off |
| 7 | **Seven inconsistent forms.** The quote form's 7 service options leave out ads, AEO, AI Assistant and multimedia; the social form asks about a "New Site"; no field carries `required` (01 §5.1; 03b §5) | One form site-wide with a friction score of 5 or less, one service list, real `required` attributes |
| 8 | **Faceless team.** The Meet Us page names only the founder and shows no staff photos; all 80 `Person` schema nodes are "D3 Support" (03 §4.3; 01b §2.2) | Owner's photo, name and direct line on every page; named bylines with bios |
| 9 | **Accessibility failures on lead forms.** Critical `select-name` errors on every audited page with the main lead form, even with an overlay installed; their Terms disclaim WCAG compliance (01 §5.1; 03 §7.3) | 0 critical or serious axe violations; a statement naming WCAG 2.2 AA and the date of the last audit |
| 10 | **No town pages and no local entity data.** 0 of 12 H1s name a place, and Organization schema has no address, phone or `sameAs` (02 §10, §8.2) | 9 location pages with town-named H1s; `ProfessionalService` schema with `areaServed` |

Close runners-up: a stale blog (31 of 52 posts dated 2020; 01b §2.1), a testimonials page set to `noindex` but listed in the sitemap (02 §2.2), and 40 legacy URLs that redirect to the homepage (02 §2.5).

---

## 5. What changed since our October recon

| Item | Recon, 2026-10-13 (search snippets) | Corpus, 2026-10-14 and the six documents |
|---|---|---|
| Service menu | 8 service pages, with print listed on the hub | **12 services in the menu.** New: AEO, AI Assistant, Rapid Design Websites, Strategy, and Print as its own page (01 §1.2, §4) |
| AEO | AI and GEO mentioned inside the SEO page | **A dedicated AEO page** with an H1 and an 11-field form. It promises to get businesses cited in ChatGPT, Gemini and Perplexity, but shows no method, no measurement and no AEO case study, and their own Terms say "No one, including D3, can guarantee you placement" (01 §4; 03b §3.2) |
| AI Assistant | Not seen | **A new product:** a service page, an orphan onboarding questionnaire that calls it an "AI Receptionist," and a live chat widget from `apigateway.co` on all 157 pages. No price and no case study. We infer that it is a resold white-label platform, which is not verified (01 §4, §5.3) |
| Rapid Design | Not seen | The page says "days, not months," but its own form offers timeframes up to "6-12 months" (01 §3) |
| PR | Promised on the homepage, no page | **Still no page** (01 §4) |
| "Our Work" page | `/our-work` listed | **Does not exist.** It is a menu label only (01 §2.1) |
| Testimonials | "Paginated, at least 10 pages," with 4 named clients | One page showing 6 quotes and then "LOAD MORE." It is `noindex`, and none of the 4 recon names appears on it (02 §12.6; 01b §5) |
| Partner badges | Semrush and WP Engine | **0 mentions on d3corp.com.** The directory listings still exist (search-observed). WP Engine hosting is unconfirmed: the server header shows only nginx (01 §6–7; 02b §4) |
| Recent content | "Little recent indexed content" | Confirmed for the blog (4 posts in 12 months). However, all 28 case studies were published between July 2025 and September 2026 (01b §1.5) |
| Name variants | 4 | 5 listing-name variants, plus 1 stale address and conflicting price bands ("under $10,000" on WP Engine, "$10,000+" on Clutch) (02b §2) |
| New proof | None | Search shows two November 2025 state tourism awards, **not verified** against the source article, and not mentioned on their own site (02b §1.2) |

---

## 6. Confidence notes

**Measured on the crawler, not on a user's phone.**
- The Lighthouse figures come from 6 pages run by the crawler on a GitHub runner with simulated mobile throttling. The throttling settings are not in the corpus.
- PageSpeed Insights returned HTTP 429, and there is no real-user (CrUX) data (02 §9.1, §12.4). Treat the LCP figures as directional.
- The 46-second loads in `pages.csv` are crawler network-idle timeouts, not what a user sees (01 §7).
- axe covers 30 pages, catches only part of WCAG, and stores sample nodes rather than every failing node. Screenshots exist for the same 30 pages only: there are none for case studies or for the Contact page on mobile (03 §0).

**Inferred, not measured.**
- That the chat is a bot and that its vendor is a white-label platform.
- That the banner art is AI-generated.
- That 2020 and 2025 dates are bulk migration dates.
- That the legacy redirects lose link equity (the status codes are not in the corpus).
- The five-second test scores (one reviewer's judgement).
- All grades in section 2.
- Whether D3's signed contracts match its published Terms. We must never claim they do for any client (03b §3.2).

**Search-observed only (02b).**
- The awards, the Ocean City chamber website credit, the 2025 board seat, the directory listings and the price bands.
- The search budget ran out, so the Google Business Profile, Bing, Apple Maps and all five AI-answer prompts were **not run**.

**Where the documents disagree (same underlying data):**
- Page weight is written as 4.1 to 8.0, 4.2 to 8.2 and 4.3 to 8.4 MB. All three describe the same range, 4,215 to 8,166 KiB.
- Distinct homepage testimonials: 14 in 01b, 16 in 01 and 03b.
- Legacy links: 46 links in 22 posts (01b) against 54 links on 23 pages (02). These count different scopes.
- Our own standards differ between documents and need one value: LCP under 2.0 s (01) or 2.5 s (02, 03), and a lead form of 5 fields (01, 03) or 4 (03b).

**What the Phase 1 architect still needs from the owner:**
1. Three packages and starting prices for the first services: websites, SEO and social (03b §10.8).
2. A reply-time promise the owner can keep in summer, and who the named lead is on day one (03b §10.9).
3. Whether our chat is "a human answers" or an AI bot (03b §10.7).
4. Which services we actually sell, especially PR, hosting and care plans (01 §8 #13; 03b §8).
5. Approval of month-to-month terms and the "What you own" policy (03b §3.2).
6. Client results we may publish, with sign-off, plus owner and team photos.
7. The 9 towns for location pages, and which chambers to join.
8. A manual check of D3's Google Business Profile and the recon review listings (02b §10).
9. A decision on whether a mystery-shop inquiry is acceptable (03b §10.1).
