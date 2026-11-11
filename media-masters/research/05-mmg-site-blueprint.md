# Media Masters Group site blueprint

**Prepared for:** Media Masters Group LLC · **Date:** 2026-11-11 · **Status:** final blueprint for owner review (Phase 1 output, PLAN §4)
**How it was made:** two independent drafts (A: service parity first; B: local search first) were judged twice. This document starts from draft A, the winner, takes draft B's local page architecture and the other ideas the judges named, and fixes every point they flagged. It replaces both drafts.

**Sources read in full:** `media-masters/PLAN.md`; `media-masters/intake.md` (every field is still TODO); and in `media-masters/research/`: `D3-SCORECARD.md`, `01-d3-site-inventory.md`, `01b-d3-content-inventory.md`, `02-d3-seo-audit.md`, `02b-d3-offpage-local.md`, `03-d3-ux-critique.md`, `03b-d3-conversion-messaging.md`, `04-market-keywords.md` and `keywords.csv` (301 keywords, 40 with SERP snapshots). No web access was used. Every search volume is an estimate from 04 and `keywords.csv`, never a measurement.

**How to read citations.** Short names follow the scorecard: 01, 01b, 02, 02b, 03, 03b, 04, SC (scorecard), PLAN. "02 §9.1" means section 9.1 of that file. Where a section is a numbered list, "01 §1 #4" means section 1, item 4. "04 Top 20 #14" means item 14 of 04's "Top 20 opportunities" table. Keywords are cited by name with their `keywords.csv` line number, for example "web design salisbury md (r11)", where line 1 is the header. Where a research document was corrected in its Verification section, this blueprint uses the corrected figure.

**How unknowns are marked.** Because `intake.md` is empty, no business fact is invented: no price, address, phone, owner, client, review, membership or certificate. Each gap is either a numbered assumption (section 15.1) or a `[[NEEDS: ...]]` marker. A `[[NEEDS` marker anywhere in rendered HTML or JSON-LD fails the build (section 12.12). The hard stops are prices, address or service-area status, phone, owner name and bio, client names, and the meeting spot for each town.

**Our site never names D3.** Every comparison in this document is internal. Public copy follows PLAN Appendix B: no disparagement, no copied wording, no D3 brand terms as targets.

---

## Standards this blueprint fixes (one value each, used everywhere)

The research documents disagree on several targets (SC §6, "Where the documents disagree"). Each row below picks one value. No later section restates a different one.

| Item | What the documents say | The single standard | Why |
|---|---|---|---|
| Main-content load (LCP), mobile | Under 2.0 s (01 §8 #8: "LCP under 2.0 s"; 03b §4.3: "mobile load under 2 seconds (not 2-3)"); under 2.5 s (02 §9.3, 03 §8, SC §2) | **2.5 s or better on every page (the gate).** Stretch goal, home page only: 2.0 s | 3 of 5 sources use 2.5 s, which is also Google's "good" line; 2 of 5 (01 and 03b) favour 2.0 s. We keep 2.5 s as the gate every page must pass and 2.0 s as the stretch goal, so both readings are honoured without a deploy failing on one noisy lab run |
| Lead form | 5 fields (01 §8 #4; 03 §5); 4 fields (03b §5, §9 #8) | **4 fields, only 1 required (email or mobile). Friction score 5** by the 03b §5 method. No fifth control of any kind (no consent tick-box) on the form. The booking page is a separate path that scores 5 on its own (section 10.3) | Meets 03b's "friction 5 or less" without dropping a field (section 10.2) |
| Page weight | Under 1 MB (02 §9.3; 03 §8) | **Under 1 MB transferred, every page.** Stretch goal, home page only: under 500 KB | One number for every template |
| Lighthouse (mobile) | 95+ performance, 90+ others (PLAN §5.2); 90+ on all four as the launch gate (PLAN §5.5); 95+ on all four (02 §9.3) | **Target 95+ on all four scores. Build gate: no page deploys under 90 on any of the four** (PLAN §5.5) | A target and a floor are different things. 90 is the owner's plan; a 95 gate could block a deploy over one noisy run |
| Interaction to Next Paint | 200 ms (03 §8) | **Under 200 ms, measured on real users only** (Cloudflare Web Analytics, then Search Console) | INP needs real interactions; a lab run cannot measure it. Lab runs use Total Blocking Time under 200 ms as the stand-in |
| Reply to inquiries | Same business day (PLAN §3 #7); before 3 pm same day, else 10 am next day (03b §7, §9 #1); 95% under 4 business hours (01 §8 #5) | **Received by 3 pm ET on a business day: a person replies that day. Later: by 10 am the next business day.** `[[NEEDS: owner confirms this rule and the hours]]`. Internal goal: 4 business hours, never published | The public promise must be one we can always keep, including in July |
| Reply to reviews | Within 24 hours (PLAN §6.2; 02b §3, §8 #1); within 1 business day (03b §4.3) | **Every review answered within 24 hours, seven days a week** | This is a real conflict between our own standards: 03b §4.3 sets "every Google review answered within 1 business day" as our bar, while PLAN §6.2 and 02b §3, §8 #1 set 24 hours. The stricter value wins, because it meets both. A review reply takes two minutes from the Google Business Profile app |
| Google reviews by date | 25+ by day 90 (PLAN §1 scoreboard; 02b §3; SC §2); 10 by week 4 and 25 by weeks 5 to 6 (PLAN §8 timeline) | **25+ by day 90, 60+ by day 180, 120+ by day 365.** Interim check: about 11 by week 6 (section 11.1) | PLAN §8's week-4 and week-6 figures cannot be met at the 1-in-3 request rate we assume (A9) by an agency that starts with no clients. PLAN §8 should be updated to match `[[NEEDS: owner approves]]` |
| Review markup | "Review/AggregateRating where allowed" (PLAN §5.3) | **No AggregateRating or Review markup about ourselves, on any page** | Google does not show stars for reviews a business publishes about itself. Reviews are shown as text with a link to the source |
| Map on location pages | "an embedded map" (02 §10) | **A static map image that links to Google Maps. No map iframe** | This replaces 02 §10's embedded map on purpose: a Google Maps iframe would break the 1 MB budget and the no-third-party-script-above-the-fold rule |
| Location page length | At least 600 words (02 §10) | **At least 900 words for a town hub and 800 for a service-in-town page** | Our pages must beat templated national pages on substance |
| Keyword ownership | One owning URL per cluster (02 §3.5) | **Exactly one page per keyword.** Every "{service} + {town}" term belongs to a town page or a service-in-town page, never to a generic service page (section 6.1) | Follows 02 §3.4: "A separate town page carries each {service} + {town} cluster" |
| A page with no researched term | Every page gets a keyword cluster (PLAN §5.4; task rule) | **Every indexable page owns at least one `keywords.csv` term.** Where `keywords.csv` has no fitting term (print, public relations, reputation, the chat assistant, careers, the scoreboard, the owner's author page), the page is built for visitors, set to `noindex, follow` and left out of the sitemap until the keyword pass (decision 23) assigns a researched term. Legal pages, including `/what-you-own/`, are exempt | We do not attach an unrelated keyword to fill a column; 04 lists these topics as research gaps (04 "Review gaps still open") |

---

## 1. Summary for the owner (eleven bullets)

1. **D3 has 12 service pages; we plan a page for every service you will really sell, plus the ones D3 lacks.** Which pages go live depends on the SELL / SUB / NO answers in `intake.md`. A service marked NO gets no page, no menu item and no checkbox on the form (01 §3).
2. **Prices are the headline.** D3 publishes no price anywhere except "$195/hr" for custom programming inside its Terms (01 §1 #4, §3.1). Every one of our service pages shows a starting price and three packages, and `/pricing/` lists them all. We cannot publish until you give us your price floors (decision 4).
3. **Five public promises:** a named person replies the same business day, prices are on the site, no multi-year auto-renewing contracts, one named account lead, and a written timeline for every service. Each answers a documented D3 weakness (section 2).
4. **We never promise rankings.** We promise what we control: how fast we answer, what we deliver, by when, and at what price. D3's own Terms say no one can guarantee placement on Google or AI answers (03b §3.2), and we agree in plain words.
5. **The site itself is proof.** D3's pages took 15 to 30 seconds to show their main content on phones in 5 of 6 tests and weigh about 4 to 8 MB (4,215 to 8,166 KiB; 02 §9.1). Ours must show the main content in 2.5 seconds or less and weigh under 1 MB, and we publish our own scores on a live scoreboard.
6. **Towns get real pages.** D3 has no town page and no town in any of its 12 H1s (02 §10; SC #8); "Ocean City" does appear in 9 of its page titles and "Salisbury" in 3. We build the 9 town pages PLAN §5.1 lists, plus 10 pages for one service in one town (5 in Salisbury, 5 in Ocean City). Eight of the ten rest on 04 snapshot evidence; two (Ocean City social media and Ocean City design and print) are lower-confidence and are built last (section 6.2). Each page is scored on a 9-point "is this really local" test and ships only when it passes the 6 checks we can meet on day one; the other 3 count only once they are real (section 6.3).
7. **Salisbury and Ocean City go live with the first pages.** D3 does not appear for "web design Salisbury MD", "SEO company Salisbury MD" or "Google Ads management Salisbury MD", and wins "digital marketing agency Ocean City MD" with only its site map (04 snapshot table). The Salisbury and Ocean City hubs and the hospitality page join the six PLAN money pages in sprint 1 (section 13).
8. **One short form, a booking link, and call or text from the first phone screen.** D3 runs 7 inquiry forms, the longest with 13 questions, and has no booking link (01 §5.1; 03b §4.3). Ours has 4 fields with only one required.
9. **Reviews are the slowest asset, so they start on day one.** The target is 25 Google reviews by day 90, which assumes about 1 review for every 3 honest requests and a real list of past clients from you. With fewer than 3 names on that list, the target drops to 12 (section 11).
10. **75 pages in four sprints, weeks 2 to 6.** With every service sold and the optional pages left out, 70 go live, 63 of them indexable. The other 7 are `noindex`: the thank-you and not-found pages, plus 5 pages for which `keywords.csv` has no researched search term (print, PR, reputation, the scoreboard and your author page); they join search once a keyword pass finds a real term. Nothing in sprint 1 can ship until you answer the first nine decisions in section 15.2: trademark, identity, services, prices, lead and hours, terms, bio, client list and towns.
11. **One research target is still open.** PLAN §4 asks for a current top-3 for at least 150 keywords. Only 40 of the 301 rows have one, because the search budget ran out (04 Additions). Closing it needs at least 110 more searches in a fresh session (decision 23).

---

## 2. Positioning and promises

### 2.1 Our position, in one sentence

> **Media Masters Group is the Delmarva marketing team that puts its prices on the page, has a named person answer you the same business day, and works month to month with no lock-in.**

Plain-English test: a buyer on a phone learns what we do (marketing and websites), where (Delmarva, named towns), for whom (local businesses) and three facts they can check (price, reply time, terms).

**Banned on our site, because D3 uses them** (03b §2.1, §2.4, §2.5, §4.1; 01 §3): "full-service", "drives real growth", "end-to-end", "days, not months", "top-rated", "no cookie-cutter", "scroll-stopping", "Let's Start the Conversation", "Request a Quote", "ID3AS", "We respond immediately". The QA phrase check fails any page that contains one.

**Our call-to-action words, used the same way on every page:** "Book a 15-minute call", "See prices", "Call", "Text us", "Check my site free". A label always leads to the same place (03 §5 standard).

**What we never say:** that anyone will reach #1, the map pack or an AI answer, by any date. This applies to body copy, FAQ answers, ads and proposals. Copy may describe the work, the timeline, the reporting and the reply time. A line that implies a ranking result fails QA.

### 2.2 The five commitments we publish

Each appears in the site footer, on `/pricing/`, on every service page, on `/thanks/` and in every proposal, in the same words.

| # | Commitment (public wording, draft) | The D3 weakness it answers | Evidence |
|---|---|---|---|
| 1 | **Same-business-day human reply.** "Messages received by 3 pm ET on a business day get a reply from a person that day. Later ones get a reply by 10 am the next business day." The reply comes from a named person. We publish our monthly median reply time once we have 3 months of data. `[[NEEDS: owner confirms the 3 pm / 10 am rule and business hours]]` | No form, Contact page or quote page says when a person will reply. The only reply promise on the site is a chat bot's "We respond immediately," and nothing after submit was captured | 01 §5.4, §5.5; 03b §7; 03 §4.6 |
| 2 | **Published starting-at prices.** "Every service shows a starting price and three packages, with what is and isn't included. No form to fill in first." `[[NEEDS: prices]]` | No price on any page; the only price is "$195/hr" for custom programming in the Terms; a prospect must answer a 13-question form to learn the cost; directory listings give conflicting bands ("under $10,000" and "$10,000+") | 01 §1 #4, §3.1; 03b §3.1, §8; 02b §2 |
| 3 | **No multi-year auto-renewing contracts.** "Retainers are month to month. Cancel by email with 30 days' notice. No exit fee. Website builds are a fixed price with a written scope. You own your domain, site, content, ad accounts, analytics and social accounts from day one." `[[NEEDS: owner and attorney approve these terms]]` | Published Terms set a 3-year term that renews automatically, require certified-mail notice 60 to 180 days before the end, can require payment for the whole term on early exit, charge 1.5% a month compounded late interest, and keep D3-owned "Systems" when a client leaves. The Digital Advertising page says "No long-term commitments or contracts necessary" | 03b §3.2; 01 §3.1; SC §4 #2. We compare published terms only and never describe any client's signed contract (03b §3.2 note; SC §6) |
| 4 | **A named account lead.** "You work with [name]. Their name, photo and direct line are on this site and in your proposal." `[[NEEDS: who the lead is on day one]]` | Meet Us names only the founder and shows no staff photos; all 80 `Person` schema nodes are "D3 Support"; 50 of 52 blog posts name "D3 Support" as author and the other 2 name no one; D3 employs account managers but does not name them to prospects | 03 §4.3; 01 §6; 01b §2.2; 03b §8 |
| 5 | **A written timeline for every service.** "Every service page shows the steps and the weeks, from first call to launch or first report," repeated identically in the proposal. `[[NEEDS: owner confirms each timeline]]` | No service page states a timeline except Rapid Design's "days, not months", and that page's own form offers timeframes up to "6-12 months" | 01 §3 (patterns), §8 #15; 03b §8 |

Supporting promises, also published:
- **Office hours in every page footer.** D3 states no hours on its site; the only hours seen are on a chamber listing (02b §2, §8 #6). `[[NEEDS: hours]]`
- **An accessibility statement** naming WCAG 2.2 AA and the date of the last audit. D3's statement names no standard or audit date (03 §7.3).
- **A live scoreboard** of our own speed and accessibility scores (section 4).
- **Every claim on a marketing page is checked against our own terms before publishing** (03b §9 #13).

---

## 3. Service parity table

D3's 12 service pages plus its services hub, as listed in its Services menu and inventoried in 01 §3. "Offer status" follows the line in `intake.md` → "Services you will sell on day one". If a line says NO, the page is not built and its keywords return to Appendix A for re-mapping.

Common to every row, and not repeated in the cells: one H1 naming the service and the region (no single town); a starting-at price and three packages; a numbered process with week counts; at least one proof block; 4 to 6 FAQs with `FAQPage` schema; "who you'll work with" with the named lead; the 4-field form and the booking link; three or more Delmarva towns named in the body copy, linking to the matching town pages (03b §2.3 standard); at least 800 words of original copy (01 §8 #13). D3's service pages have none of these: no FAQ, no pricing block, no named person, no timeline, and no town in the body copy (01 §3, intro and patterns; 03b §2.3).

The keyword cluster column shows every term the page owns (name and CSV row). Generic service pages own regional, "near me" and national terms only; the town versions belong to the town pages (section 6.1).

| # | D3 page (01 §3) | Our URL | Our keyword cluster (owned) | How we exceed it (specific) | Offer status |
|---|---|---|---|---|---|
| 0 | `/services/` hub: lists 9 of its 12 services, no lead form (01 §3) | `/services/` | delmarva digital marketing (r133) | One service list drives the nav, footer, hub and form (D3 runs four different service lists, 03b §3.1); each card shows its starting price and timeline; a 4-question "which service do I need" chooser | Always built |
| 1 | `/websites/` (no H1; 1,072 words; 6 case-study cards with no metrics) | `/services/web-design/` | web design eastern shore md (r29); eastern shore web design company (r30); web developer eastern shore maryland (r31); delmarva web design (r32); website company delmarva (r33); web designer near me (r54); web design near me (r55); website design company near me (r56); web developer near me (r57); wordpress developer near me (r58); website redesign near me (r60); ecommerce website designer near me (r61); woocommerce developer eastern shore (r71); wordpress website design eastern shore md (r72) | **Price:** three packages with page counts `[[NEEDS: prices]]`. **Process:** 6 steps, 4 to 8 weeks `[[NEEDS: owner confirms timeline]]`. **Proof:** our own build as case study 1 (dated before-and-after scores). **Tool:** "Check my site free". **Commitment:** launch date in the proposal; content writing and photos listed as included or not (D3's Terms exclude both by default, 03b §3.2). **Comparison table** of build types (D3 offers none, 03b §8). Links down to the Salisbury and Ocean City web design pages | Offer if intake "Website design and development" = SELL or SUB |
| 2 | `/rapid-design-websites/` ("days, not months", while its form offers up to "6-12 months"; no price, page count or launch figure) | `/services/web-design/starter-website/` | how long does it take to build a website for a small business (r86) | **Price:** one fixed price `[[NEEDS]]`. **Process:** stated page count and a written launch window (draft: 10 business days after content is received, per 01 §8 #15) `[[NEEDS: owner confirms]]`, identical on page, form and contract. **Proof:** the starter template's own Lighthouse scores, live | Offer if web design = SELL or SUB and the owner approves a fixed-scope starter |
| 3 | `/search-engine-optimization/` (H1 "Expert SEO Services", title 125 characters, no town; one outcome figure, Visiting Angels) | `/services/seo/` | seo eastern shore maryland (r130); seo company delmarva (r134); seo company near me (r157); local seo services near me (r158); seo services near me (r161); seo company maryland eastern shore small business (r188) | **Price:** monthly starting price and three tiers `[[NEEDS]]`. **Process:** month 1 audit and fixes; months 2 to 3 Google Business Profile, citations and local pages; monthly report on a fixed date. **Proof:** the sample report (`/reporting/`). **Tool:** free audit. **Terms:** month to month; no ranking promise. D3's Terms make SEO an "additional charge... if requested" (01 §3.1). Links down to the Salisbury and Ocean City SEO pages | Offer if intake "SEO (local and organic)" = SELL or SUB |
| 4 | `/answer-engine-optimization/` (promises AI citations; no method, measurement or AEO case study; 11-field form) | `/services/ai-search-optimization/` | ai seo agency near me (r163); generative engine optimization maryland (r164); ai search optimization delaware (r165) | **Process:** our method in 5 steps (entity facts, schema, citations, answer-shaped content, monthly prompt test). **Proof:** the monthly 20-prompt test sheet with dated screenshots (PLAN §6.6; 01 §8 #14). **Price** `[[NEEDS]]`. Plain-English definitions of AEO and GEO (03b §2.5). Never promises a citation | Offer if intake "AI search optimization" = SELL or SUB |
| 5 | `/digital-advertising/` (Google, Meta, geofencing, programmatic; "No long-term commitments" contradicted by the Terms) | `/services/paid-ads/` | google ads agency near me (r229); ppc company near me (r235) | **Price:** management fee as a flat monthly figure or % of spend `[[NEEDS]]`, ad spend shown separately. **Process:** setup in week 1, first optimization in week 2, monthly report. **Terms:** "no contract" is true in our terms; ad accounts in the client's name from day one (03b §2.4 ambiguity) | Offer if intake "Google Ads / Microsoft Ads / paid social" = SELL or SUB |
| 6 | `/social-media-marketing/` (1,424 words; its form asks about a "New Site") | `/services/social-media-management/` | social media marketing near me (r227); social media manager near me (r228); delmarva social media marketing (r253); should i hire a freelance social media manager or an agency (r283) | **Price:** three tiers with posts per month and platforms stated (D3 states no deliverable counts, 01 §3 patterns) `[[NEEDS]]`. **Process:** month-one content calendar, an approval step, monthly report. **Sample:** an Ocean City summer content calendar. **Form:** the single site form with "Social media" as a checkbox, never a website question (03b §5) | Offer if intake "Social media management" = SELL or SUB |
| 7 | `/email-marketing/` ("Proven Email Results" with no numbers) | `/services/email-sms-marketing/` | email marketing agency near me (r236); email marketing eastern shore md (r247) | **Price** `[[NEEDS]]`. **Process:** list audit, templates, send calendar, monthly report with open and click numbers. Text messaging added only if intake marks it SELL or SUB, with counsel-reviewed consent wording `[[NEEDS: counsel]]`. D3 offers prospects no text-us path (03b §4.3) | Offer if intake "Email and SMS marketing" = SELL or SUB |
| 8a | `/graphic-design/` (logo, identity, print, ad creative; no in-body CTA) | `/services/branding-logo-design/` | logo design near me (r230); branding agency near me (r234); branding agency eastern shore md (r246) | **Price:** logo package and brand-guide package shown separately `[[NEEDS]]`. **Process:** brief, 2 to 3 concepts, 2 rounds, final files `[[NEEDS: owner confirms]]`. **Ownership:** final and source files are the client's, in writing | Offer if intake "Branding and logo design" = SELL or SUB |
| 8b | (same D3 page) | `/services/graphic-design/` | graphic designer near me (r231) | **Price** per piece or per month `[[NEEDS]]`; a design request turnaround stated in business days `[[NEEDS: owner confirms]]` | Offer if intake "Graphic design and print" = SELL or SUB |
| 9 | `/multimedia/` (video, photo, licensed drone, animation; 32 thin video pages; Terms exclude video hosting) | `/services/video-photo-drone/` | video production company near me (r232); drone videographer near me (r233); delmarva video production (r250); delmarva drone services (r251); do you need a part 107 license to fly a drone for real estate in maryland (r286) | **Price:** half-day and full-day shoot rates `[[NEEDS]]`. **Process:** shot list, shoot day, edit, two revision rounds. **Proof:** every video page has a transcript, 300+ words of context and `VideoObject` schema (D3's 32 video pages have none of these, 01b §4.1). Drone work only with a current FAA Part 107 certificate `[[NEEDS: owner confirms Part 107 certificate and insurance]]` | Offer if intake "Video, photography, drone" = SELL or SUB |
| 10 | `/print/` (nine product types at "competitive prices", no figures) | `/services/print-design/` | None owned. Every print term in `keywords.csv` names a town and belongs to a town page (r213, r277 Ocean City; r214 Salisbury), so this page is `noindex, follow` until the keyword pass finds a regional print term such as "rack card design" or "print design eastern shore" (decision 23; standards table) | **Price:** design fee per piece shown; printing quoted at cost or with a stated markup `[[NEEDS]]`. **Process:** proof, approval, print vendor, delivery date in writing. Rack-card timing for the pre-season brochure racks | Offer if intake "Graphic design and print" = SELL or SUB |
| 11 | `/strategy/` (five components, no named deliverable) | `/services/marketing-strategy/` | how to market a seasonal business in the off season (r185) | **Deliverable named:** a written 12-month season plan (Memorial Day to Labor Day, shoulder season, off season) with a budget split and calendar, plus a 90-minute working session, at a fixed price `[[NEEDS]]`. D3 names no deliverable (01 §4) | Not a line in intake. Offer if "Other" lists strategy, or if 2+ marketing services are SELL |
| 12 | `/ai-assistant/` (no H1, no price, no case study; the chat widget on every page is inferred to be a resold platform, 01 §5.3) | `/services/website-chat-assistant/` **(not built by default)** | None owned: `keywords.csv` has no chatbot term, so if built the page is `noindex, follow` until the keyword pass ("website chatbot", "ai receptionist small business"; decision 23) | If built: price shown, labelled as a bot, a human hand-off in the first reply, opens only on tap (03b §9 #12). Default: **not sold at launch**, because our position is that a person answers | Offer only if intake "Other" lists an AI chat product as SELL or SUB |

**D3's non-service pages, matched:**

| D3 page | Our page | How we exceed it |
|---|---|---|
| `/case-studies/` + 28 case studies (no H1; 1 of 28 states a growth result from D3's work in numbers, 1 more a lead-capture rate; 01b §3.1) | `/work/` + case studies | Every case study has 2+ dated before-and-after metrics with a source, a named quote with permission, a timeline and links to the services used (section 11.2) |
| `/testimonials/` (`noindex`, in the sitemap, no canonical, no dates; 02 §2.2; 01b §5) | `/reviews/` | Indexable; every review dated, named as the reviewer chose, and linked to its source |
| `/meet-us/` (founder named once, no photos; 03 §4.3) | `/about/` + `/about/[owner-slug]/` | Owner photo, bio, direct line, `Person` schema; author page for bylines |
| `/contact-us/` (5-field form, no reply time) + `/request-a-quote/` (13 questions) (01 §5.1) | `/contact/` + `/thanks/` | One 4-field form, booking link, call, text, hours, and the reply-by time on the page and the confirmation |
| `/id3as/` blog (4 posts in the 12 months before the crawl; 31 of 52 dated 2020; 01b §2.1) | `/blog/` | Weekly, a named author on every post, a Delmarva town or season in every post (01b §2.5 standard) |
| `/videos/` + 32 video pages of 139 to 185 words, no `VideoObject`, no transcripts (01b §4.1) | Video lives inside case studies and service pages | Transcript, 300+ words, `VideoObject`, a visible date; no thin video-only pages |
| `/careers/`, `/join-our-team/`, `/internships/` (01 §2.1) | `/careers/` (C) | Built only if intake shows hiring or a contractor network |
| `/privacy-policy/`, `/terms/` (5,182 words), `/accessibility/` (no WCAG level, no audit date) | `/privacy/`, `/terms/` (1,500 words or fewer, 01 §8 #2), `/what-you-own/`, `/accessibility/` | Plain English; the ownership page is linked from the footer and from pricing |
| Public internal pages: `/site-down/`, `/webmail/`, a staff 2FA page, `/su/` (02 §2.3) | none | Client tools sit behind links sent to clients and are `noindex` (03b §5 standard) |

**D3 services that appear only in its Contact dropdown, with no page (01 §3 patterns; 03b §3.1), and our decision for each:**

D3's Contact form lists 40 services; at least 12 have no page (01 §3 patterns). Four of them are already matched above: Public Relations (`/services/public-relations/`), Reputation Management (`/services/reputation-management/`), Hosting and Maintenance (`/services/website-care-plans/`) and Citation Management (`/services/google-business-profile/`). The other eight:

| D3 dropdown item (no page) | Our decision | Counter-position (what we say instead, without naming D3) | Page |
|---|---|---|---|
| Booking Engines, Reservations, Group Housing | **Not sold.** We do not build or host booking or reservation systems. We connect the client's own booking engine to a fast site and track direct bookings `[[NEEDS: which booking systems we support, hospitality FAQ in 9.9]]` | "Your booking system is yours. If you leave us, nothing stops working." D3's Terms keep "reservation systems" as D3 property and the client "loses all rights to use" them on exit (03b §3.2, Terms 7) | Covered on `/industries/hospitality-vacation-rentals/`; no own page |
| Live Web Cams | **Not sold** `[[NEEDS: owner confirms]]` | None needed; a live beach cam is a hosting product, not marketing | none |
| Wifi Marketing | **Not sold** `[[NEEDS: owner confirms]]` | Guest email and text lists are built with consent and owned by the client (9.9 H2 6) | none |
| CRM | **Not sold as a product.** We set up a CRM the client owns (for example a free HubSpot account or a shared sheet) as part of email and lead-handling work | "Your customer list lives in an account in your name" | Covered on `/services/email-sms-marketing/`; no own page |
| Mobile App | **Not sold.** A fast mobile website does the job for a local business | "Most local customers never install an app; we build your site to show its main content in 2.5 seconds or less on their phone instead" | Covered on `/services/web-design/` FAQ; no own page |
| Destination Marketing (tourism boards, counties, byways) | **Not pursued as a separate line in year one.** This is D3's strongest vertical: case studies for Somerset County Tourism and the Chesapeake Country Byway, 6 county and tourism videos, tourism testimonials (01b §3.1, §4.2, §5; 04 D3 profile), and two November 2025 tourism awards that are search-only and unverified (02b §1, §5). The Town of Ocean City's tourism account was renewed with MGH, a Baltimore-area agency, and a newer BVK campaign is also reported; the current holder is unconfirmed (04 MGH profile). Public-sector contracts are decided on fiscal-year cycles (04 seasonality) | We compete for the businesses that tourism brings (lodging, attractions, restaurants, golf) rather than for the tourism offices themselves. A destination page becomes a year-two option once we have one tourism client (decision 27) | A short "events and tourism organizations" section on `/industries/amusements-attractions/`, which owns "tourism marketing agency eastern shore" (r191) |

**D3 verticals with proof but no industry page of ours (01b §6):** nonprofits (3 case studies, 8 videos) and banks (Farmers Bank of Willards). `keywords.csv` has no nonprofit or bank term. Both get a short paragraph in the "other industries" section of `/industries/` (with law firms); nonprofits are also where pro-bono review work would come from (11.1). Whether banks and credit unions are target clients is an owner decision `[[NEEDS: intake "Industries you most want"]]`.

---

## 4. Pages D3 lacks that we build

| Page | Evidence D3 lacks it | What ours does | Offer status |
|---|---|---|---|
| `/pricing/` | No pricing page in the nav or footer; no price on any page except "$195/hr" in the Terms (03 §5; 01 §1 #4; 03b §3.1) | Starting-at prices and three packages per service, inclusions and exclusions, how billing works, link to `/what-you-own/` | Always built; publishing blocked by `[[NEEDS: prices]]` |
| `/services/public-relations/` | The home hero promises "Content Creation, Strategy & PR", and "Public Relations" and "Media Relations" sit in the Contact dropdown, but there is no PR page (01 §1 #3, §4) | Press releases, local media pitching (Coast Dispatch, Ocean City Today, Bayside Gazette, Salisbury Independent, Cape Gazette, Coastal Point; 04 authority table), event and award announcements, a crisis plan | Offer if intake "Public relations" = SELL or SUB. If NO, the word "PR" appears nowhere on our site (03b §8). `keywords.csv` has no PR term, so the page is `noindex, follow` until the keyword pass (decision 23) |
| `/services/website-care-plans/` | "Hosting and Maintenance" is a Contact dropdown option with no page; the Terms carry no uptime, backup or migration commitment; the only support path is an indexable `/site-down/` form with no stated response time (01 §3 patterns; 03b §3.2, §7) | Three care plans: backups, monthly updates, a 99.9% uptime target `[[NEEDS: owner confirms]]` and a 1-hour first response to site-down reports, 7 days a week `[[NEEDS: owner confirms 7-day coverage]]` (03b §7 standard) | Offer if intake "Website hosting, care, and maintenance" = SELL or SUB |
| `/services/accessible-websites/` | D3 runs an accessibility overlay on all 157 pages yet fails 910 automated checks on 30 pages, and its Terms disclaim ADA and WCAG compliance (03 §7.1, §7.3; 01 §3.1 Exclusions 14) | Audits and fixes to WCAG 2.2 AA, tested by tools and by keyboard and screen reader, with a written report. The page says plainly that we are not lawyers and that automated tests catch only part of WCAG (03 §7.3) | Offer if web design = SELL or SUB and the owner sells accessibility work |
| `/services/reputation-management/` | "Reputation Management" is a Contact dropdown option with no page (01 §3 patterns) | A review-request routine for clients, reply drafting within 24 hours, a monthly review report; no incentives, no gating, no fake reviews (PLAN §9) | Offer if intake "Reputation and review management" = SELL or SUB. `keywords.csv` has no reputation term, so the page is `noindex, follow` until the keyword pass (decision 23) |
| `/services/google-business-profile/` | "Citation Management" is a dropdown option with no page; no Google Business Profile page among D3's 12 services (01 §3); 04 found no Shore provider for this service (04 Summary 9) | Profile setup and audit, categories, services with prices, weekly posts, photo plan, Q&A, citation clean-up | Offer if intake "SEO (local and organic)" = SELL or SUB |
| `/free-website-audit/` (a page and tool, not a service) | No lead magnet is promoted; the only audit checklist sits on a buried university-program intake page, `/su/` (03b §4.3) | An instant check of any public URL: phone speed, page weight, headings, local business data, accessibility basics, in plain English (section 10.9). PLAN §5.1 lists it as a lead and link magnet | Always built (sprint 4) |
| `/reporting/` | No reporting cadence or sample anywhere; the SEO page says only "Ongoing reporting and optimization" (03b §7) | A full sample monthly report, labelled as sample data, with the delivery date and what each number means | Always built |
| `/scoreboard/` | No public speed or accessibility scores; D3's mobile performance scores are 38 to 54 (02 §9.1) | Our own Lighthouse and axe results per template, updated on every deploy (PLAN §5.1) | Always built; `noindex, follow` until the keyword pass finds a term (no speed-test term in `keywords.csv`); linked from the proof strip on every page |
| `/what-you-own/` | Terms §7 keeps "Systems" as D3 property, and clients "lose all rights to use" them on exit (03b §3.2) | What the client owns from day one, how to cancel, and how fast we hand over files (5 business days, 01 §8 #3) | Always built; `[[NEEDS: attorney review]]` |
| 9 town pages and 10 service-in-town pages | 0 town pages; 0 of 12 H1s name a place; 0 town names in service-page body copy (02 §10; 03b §2.3) | Section 6 | Built for the towns intake lists |
| 7 industry pages | No industry page behind any service; vacation rentals absent from every content type; no post written for any local industry (03b §2.2; 01b §6, §7 #1–2) | Section 7 | Built for the industries intake lists |
| `/how-to-choose-a-marketing-agency/` | No comparison guidance in the market; only Owler and D3's own pages answer "alternatives" searches (04 Top 20 #19) | A fair criteria checklist (prices, terms, reply time, ownership, proof); never names a competitor (PLAN Appendix B) | Always built |
| `/about/[owner-slug]/` author page | No named author anywhere; every `Person` node is "D3 Support" (01b §2.2) | Bio, photo, credentials, `Person` schema with `sameAs` | Always built; `[[NEEDS: owner bio, photo]]`. `noindex, follow`: the owner's name and brand queries land on `/about/`, and the author page serves bylines and the `Person` `@id` without competing with it |
| `/thanks/` confirmation | Nothing after submit was crawled; no thank-you page in the sitemap (01 §5.4; 03b §5) | Names who replies and by when, offers the booking link (section 10.6) | Always built, `noindex` |

---

## 5. Full sitemap

URL rules: lowercase, hyphens, trailing slash, no dates, a state abbreviation in every town slug (04 Method), and no URL more than three folders deep. Every page sits within 3 clicks of the home page (02 §2.2, §6.4 standard). `(C)` = conditional on intake or on a gate. `(noindex)` = built but kept out of search and out of the XML sitemap.

```
/                                                   Home
├── services/                                       Services hub
│   ├── web-design/                                 Websites (C)
│   │   └── starter-website/                        Fixed-price starter site (C)
│   ├── website-care-plans/                         Hosting, care and maintenance (C)
│   ├── accessible-websites/                        Accessible (ADA / WCAG) websites (C)
│   ├── seo/                                        SEO (C)
│   ├── ai-search-optimization/                     AI search optimization (C)
│   ├── google-business-profile/                    Google Business Profile management (C)
│   ├── paid-ads/                                   Google Ads, Microsoft Ads, paid social (C)
│   ├── social-media-management/                    Social media (C)
│   ├── email-sms-marketing/                        Email and SMS (C)
│   ├── branding-logo-design/                       Branding and logo (C)
│   ├── graphic-design/                             Graphic design (C)
│   ├── print-design/                               Print design (C; noindex until keyword pass)
│   ├── video-photo-drone/                          Video, photo, drone (C)
│   ├── marketing-strategy/                         Season plan and strategy (C)
│   ├── public-relations/                           Public relations (C; noindex until keyword pass)
│   ├── reputation-management/                      Reviews and reputation (C; noindex until keyword pass)
│   └── website-chat-assistant/                     Chat assistant (C, not built by default; noindex if built)
├── pricing/                                        All prices and packages
├── locations/                                      Areas we serve (county index)
│   ├── salisbury-md/                               Salisbury hub
│   │   ├── web-design/                             Web design in Salisbury
│   │   ├── seo/                                    SEO in Salisbury
│   │   ├── google-ads/                             Google Ads in Salisbury
│   │   ├── social-media/                           Social media in Salisbury
│   │   └── graphic-design-branding/                Graphic design and branding in Salisbury
│   ├── ocean-city-md/                              Ocean City hub
│   │   ├── web-design/                             Web design in Ocean City
│   │   ├── seo/                                    SEO in Ocean City
│   │   ├── social-media/                           Social media in Ocean City
│   │   ├── video-production/                       Video, photo, drone in Ocean City
│   │   └── graphic-design-print/                   Logos, design and print in Ocean City
│   ├── west-ocean-city-md/                         (C: only if it passes the localness gate)
│   ├── berlin-ocean-pines-md/                      Berlin and Ocean Pines
│   ├── rehoboth-beach-lewes-de/                    Rehoboth Beach and Lewes
│   ├── bethany-beach-fenwick-island-de/            Bethany Beach and Fenwick Island
│   ├── sussex-county-de/                           Millsboro, Georgetown, Seaford
│   ├── easton-cambridge-md/                        Easton and Cambridge
│   └── pocomoke-snow-hill-md/                      Pocomoke City and Snow Hill
├── industries/                                     Industries hub
│   ├── hospitality-vacation-rentals/               Hotels and vacation rentals
│   ├── restaurants-bars/                           Restaurants and bars
│   ├── amusements-attractions/                     Amusements and attractions
│   ├── golf/                                       Golf courses and golf packages
│   ├── real-estate/                                Real estate
│   ├── medical-dental/                             Medical and dental practices
│   └── home-services/                              Home services and contractors
├── free-website-audit/                             Audit tool
│   └── report/{id}/                                Individual results (noindex, generated, expire after 30 days)
├── reporting/                                      Sample monthly report
├── scoreboard/                                     Our live speed and accessibility scores (noindex until keyword pass)
├── work/                                           Case studies hub
│   ├── media-masters-site-build/                   Case study 1: our own site
│   ├── [client-2-slug]/                            (C: [[NEEDS: client + written permission]])
│   └── [client-3-slug]/                            (C: [[NEEDS: client + written permission]])
├── reviews/                                        Reviews (indexable)
├── how-to-choose-a-marketing-agency/               Fair buyer's checklist (top level: one page needs no folder)
├── blog/                                           Articles hub
│   ├── how-much-does-a-website-cost/
│   ├── website-maintenance-cost/
│   ├── how-much-does-seo-cost/
│   ├── show-up-in-chatgpt/
│   ├── rank-higher-on-google-maps/
│   └── vacation-rental-direct-bookings-ocean-city/
├── about/                                          About
│   └── [owner-slug]/                               Owner and author page (noindex, follow)
├── contact/                                        Contact and booking
├── thanks/                                         Form confirmation (noindex)
├── what-you-own/                                   Ownership and cancelling, plain English
├── careers/                                        (C; noindex: no job term in keywords.csv)
├── terms/
├── privacy/
├── accessibility/                                  Statement: WCAG 2.2 AA, last audit date
└── 404                                             Not-found page (not in the sitemap)
Non-page files: /sitemap-index.xml, /robots.txt, /llms.txt, /.well-known/security.txt, /_redirects, /_headers
```

**Counts:** 75 pages to build (section 13), plus the generated audit-report template. If every service is SELL or SUB and the chat page, careers, the two client case studies and West Ocean City are not built, 70 pages go live, of which 63 are indexable. The 7 live `noindex` pages are `/thanks/`, the 404 page, `/about/[owner-slug]/`, `/scoreboard/`, `/services/print-design/`, `/services/public-relations/` and `/services/reputation-management/` (standards table: a page with no researched term). Every one of the 63 indexable pages owns at least one `keywords.csv` term, except the three legal pages and `/what-you-own/`, which are exempt (9.11). This clears the PLAN §4 bar of 40 pages in priority order with word counts and keywords.

**Breadcrumb rule check:** every page's parent folder is itself a page (`/services/`, `/locations/`, `/locations/{town}/`, `/industries/`, `/work/`, `/blog/`, `/about/`, `/free-website-audit/`), so every `BreadcrumbList` has a full trail (12.5) and the build's link check finds no 404 parent. That is why the buyer's checklist sits at the top level and not under an empty `/compare/` folder.

---

## 6. Location page system

### 6.1 The ownership rule (one rule, used for all 301 keywords)

1. **Every "{service} + {town}" term belongs to a town page.** If a service-in-town page exists for that service and town, it owns the term; otherwise the town hub owns it. Counties go to the matching town page (Wicomico to Salisbury, Talbot and Dorchester to Easton and Cambridge, Sussex to Sussex County, Worcester to the `/locations/` hub).
2. **Generic service pages carry no town in their title or H1.** They own the regional terms ("Eastern Shore", "Delmarva", "Maryland", "Delaware"), the "near me" terms and national service terms. They name 3+ towns in their body copy and link down to the town pages.
3. **Five term types go by what they are, even when they contain a town:**
   - industry terms (CSV type "vertical page") go to industry pages ("hotel marketing ocean city md" is a hospitality term first; "ocean city md marketing for seasonal businesses" goes to the attractions page, the most seasonal trade we cover);
   - cost and price questions go to `/pricing/` or a cost article, never to a service page;
   - "best" and "top" terms go to the buyer's checklist page or to the case-study hub `/work/`, the evidence a "best" searcher is looking for;
   - "reviews" terms go to `/reviews/`;
   - every other question, including "X vs Y" questions, goes to the page whose own section answers it (an article, a service page, a case study or a town page). A question with a town in it goes to a town page or an article, never to a generic service page.
4. **General agency "near me" terms (ones that name no single service) go only to the two pages that carry our full name, address or service area, phone, hours and map image.** Home owns the Delmarva and Eastern Shore agency terms and "digital marketing agency near me", "marketing agency near me" and "advertising agency near me"; `/contact/` owns "marketing company near me". No service page owns a general agency "near me" term. "Near me" terms that name a service ("seo company near me", "google ads agency near me") belong to that service's page under rule 2. Home's title and H1 never say "Ocean City marketing agency"; that belongs to the Ocean City hub (conflict C1, section 8).
5. **A page with no fitting term in `keywords.csv` owns none.** It is `noindex, follow` until the keyword pass (decision 23); no term is moved onto it just to fill the column (standards table).

This follows 02 §3.4 ("A separate town page carries each {service} + {town} cluster") and the CSV's `target_page_type`, and it removes the town versions (Ocean City, Salisbury, Rehoboth, Lewes, West Ocean City) that draft A had placed on `/services/web-design/`. The script check in Appendix A confirms every term has exactly one owner.

### 6.2 Which towns, in which order, and how this matches PLAN §5.1

PLAN §5.1 and the scorecard set **9 location pages**: Ocean City, West Ocean City, Berlin and Ocean Pines, Salisbury, Pocomoke and Snow Hill, Fenwick Island and Bethany Beach, Rehoboth and Lewes, Millsboro and Sussex County, Easton and Cambridge. **We build exactly those 9 town hubs**, with West Ocean City behind the localness gate. On top of them we build 10 service-in-town pages in Salisbury and Ocean City. The evidence behind them is not equal, so we say which is which:

- **Evidence-backed (8 pages):** Salisbury 1a to 1e and Ocean City 2a, 2b and 2d. Each rests on a 04 snapshot showing D3 absent or weak and on a ranked 04 opportunity: Top 20 #1, #2, #3, #6, #8, #12 and #13, and for Ocean City video, "20 highest-value terms" #17 (D3 at #18 with a generic page).
- **Lower-confidence (2 pages):** Ocean City social media (2c), where 04 shows OceanCity.com holding 6 of the top 10 (a strong local incumbent, not a weak result), and Ocean City design and print (2e), which has no 04 snapshot at all. Neither is in 04's Top 20. Both are built last in sprint 3. If either fails the localness gate, or the owner prefers (decision 11), its terms stay on the Ocean City hub and the page is not published.

Every other town has one hub covering all services. We do not copy the programmatic town-by-service trees Prager and EZ Marketing run across the region (04 competitor profiles).

Every town page is conditional on the towns intake lists under "Towns you will drive to" `[[NEEDS]]`. Order is by keyword value and D3's absence in the 04 snapshots.

| Order | Page | Sprint | Owned terms and volume bands (keywords.csv estimates) | D3 in the 04 snapshots | Why this position, and why merged or split |
|---|---|---|---|---|---|
| 1 | `/locations/salisbury-md/` | 1 | 10 terms, 5 of them "low" (10-50/mo) | #4 and #10 for "marketing agency Salisbury MD" with `?p=` URLs; #2 for "digital marketing Salisbury MD" (r293) | Largest market (about 33k residents, CSV r11); 04 Summary 3 says build Salisbury first; year-round economy (04 seasonality) |
| 1a | `/locations/salisbury-md/web-design/` | 3 | 14 terms, led by web design salisbury md (r11), the biggest local term (medium, 50-200/mo) | Absent for "web design Salisbury MD" and "website design Salisbury Maryland" | 04 Top 20 #3 |
| 1b | `/locations/salisbury-md/seo/` | 3 | 6 terms | Absent; no local agency page in the top 10 | 04 Top 20 #1 |
| 1c | `/locations/salisbury-md/google-ads/` | 3 | 2 terms | Absent; only programmatic pages and other Salisburys | 04 Top 20 #2 |
| 1d | `/locations/salisbury-md/social-media/` | 3 | 2 terms | #3 and #4 only through a chamber case study | 04 Top 20 #6 |
| 1e | `/locations/salisbury-md/graphic-design-branding/` | 3 | 4 terms | Absent for graphic design; #5, #6 for branding with general pages | 04 Top 20 #8 |
| 2 | `/locations/ocean-city-md/` | 1 | 11 terms, 3 "low" | #1 for "digital marketing agency Ocean City MD" and #2 for "marketing agency Ocean City MD", both with its site map page | Home base (assumption A1); 04 Top 20 #4, #5; the Google Business Profile landing town |
| 2a | `/locations/ocean-city-md/web-design/` | 3 | 12 terms | #6 with the generic `/websites/` page | 04 Top 20 #12 ("Ocean City web design page, dedicated") |
| 2b | `/locations/ocean-city-md/seo/` | 3 | 7 terms | Own SEO page only #15 to #18 | 04 Top 20 #13 |
| 2c | `/locations/ocean-city-md/social-media/` | 3 | 3 terms | #9 with its service page; OceanCity.com holds 6 of the top 10 | **Lower-confidence.** Not in 04's Top 20; 04 "20 highest-value terms" #9 lists the term, but a local media company already holds most of the page. Built last in sprint 3 |
| 2d | `/locations/ocean-city-md/video-production/` | 3 | 4 terms (includes the drone question r287, answered in its FAQ) | #18 with `/multimedia/` | Evidence-backed: 04 "20 highest-value terms" #17, with D3 weak at #18 |
| 2e | `/locations/ocean-city-md/graphic-design-print/` | 3 | 5 terms, 2 "low" (logo design, graphic design) | Not checked (no snapshot) | **Lower-confidence (speculative).** No 04 snapshot and not in 04's Top 20; it mirrors the Salisbury design page, and rack cards are a resort-specific print need (CSV r277). Built last in sprint 3 |
| 3 | `/locations/berlin-ocean-pines-md/` | 3 | 12 terms: 11 "very low" plus one consumer wedding term | Absent for "web design Berlin MD"; for Ocean Pines it appears #3, #4, #8, #9 with general pages and has no Ocean Pines page | 04 Top 20 #11 treats them as one opportunity. **Merged as PLAN does:** every Berlin and Ocean Pines business term is "very low" (<10/mo); two separate pages would be thin and close to the doorway pattern; the towns are minutes apart and share the Bayside Gazette |
| 4 | `/locations/rehoboth-beach-lewes-de/` | 3 | 21 terms: 6 "low" for Rehoboth (r35, r36, r136, r254, r257, r261), 4 "low" for Lewes (r39, r138, r258, r260), the rest "very low" | Absent from every Delaware snapshot | 04 Top 20 #14 (Rehoboth and Lewes are one item). **Merged as PLAN does:** each town alone has a few "low" terms; one term spans both (r41); they share the Cape Gazette; one strong page beats two thin ones before we have a Delaware client. **Split trigger:** two separate pages once either town has 2+ clients or Search Console shows the combined page in the top 20 for both towns' head terms |
| 5 | `/locations/bethany-beach-fenwick-island-de/` | 3 | 8 terms: all business terms "very low" | Absent from the Bethany snapshot; templated pages only | 04 Top 20 #15 ("Bethany/Fenwick combined page"); closest Delaware beaches to Ocean City. D3 has Fenwick Island clients but no Fenwick page (01b §3.1; 02 §8.3) |
| 6 | `/locations/sussex-county-de/` | 3 | 15 terms, 3 "low" (r47, r145, r146) | Absent from the Millsboro and Sussex snapshots | County of about 260k and growing (CSV r47); PLAN's "Millsboro and Sussex County" |
| 7 | `/locations/easton-cambridge-md/` | 3 | 13 terms, 2 "low" (r52, r149) | Absent from the Easton and Cambridge snapshots | 04 Top 20 #16. Farthest drive: built only if intake confirms the owner meets clients there |
| 8 | `/locations/pocomoke-snow-hill-md/` | 3 | 6 terms, all "very low" | No snapshot; only programmatic pages exist (CSV r50) | Completes Worcester County coverage |
| 9 | `/locations/west-ocean-city-md/` (C) | 3 | 3 terms, all "very low" | No snapshot. D3's main office is here (01 §6; 02 §10); the CSV r21 basis note asserts D3 ranks first, but that row's SERP was never run, so it is unverified | **Gated, not folded:** it ships only if it passes the localness test (6.3) and the overlap guard against both Ocean City pages. If it fails, its 3 terms move to `/locations/ocean-city-md/`, which gains a West Ocean City and Route 50 section, and the URL is never published |
| hub | `/locations/` | 3 | 3 Worcester County terms | No county pages | A county index with a static map and links to every town page |

**What ships when.** Sprint 1: the Salisbury and Ocean City hubs. Sprint 3: the 8 evidence-backed service-in-town pages first, then the other 7 hubs, then the 2 lower-confidence pages (2c, 2e). A page that fails the localness gate does not ship; until it passes, its terms stay on its town hub (service-in-town pages) or are listed as not yet live in the build report (town hubs).

### 6.3 The localness test (what makes a page genuinely local)

A template that swaps the town name is what the programmatic competitors already run, some of them for the wrong state (04 competitor profiles). We beat them on substance. QA scores every town and service-in-town page against these 9 checks and records the score in the build log.

| # | Check | Example: Salisbury | Example: Rehoboth Beach and Lewes |
|---|---|---|---|
| 1 | **A local business problem with a sourced local data point**, in our words, with source and date | A year-round economy with a large medical base: 169 physician offices around TidalHealth (D&B via 04 seasonality; CSV r223) | A seasonal resort base where real local agencies and templated out-of-area pages compete (04 snapshot "web design Rehoboth Beach DE"; CSV r35) |
| 2 | **The town's industry mix**, linking to the matching industry pages | Medical, home services, professional firms, the university (04 seasonality) | Restaurants, boutique retail, rentals (CSV r38, r274) |
| 3 | **A seasonal or civic calendar** with marketing timing | 3rd Friday downtown events; Maryland Folk Festival, "confirm still running" (04 authority table) | Rehoboth Beach Jazz Festival; the summer season start (04 authority table) |
| 4 | **Local proof:** a review, case study or named client from that town, with permission | `[[NEEDS: Salisbury client]]` | `[[NEEDS: Delaware client]]` |
| 5 | **Our real presence:** chamber memberships, workshops given, events attended, with dates | Salisbury Area Chamber `[[NEEDS: joined]]`; a Maryland SBDC workshop (04 authority table) | Rehoboth Beach-Dewey Beach Chamber, Lewes Chamber `[[NEEDS: joined]]` |
| 6 | **A photo we took in the town** (no stock, PLAN §5.4) | Downtown Main Street, the riverfront | The Rehoboth Avenue business district; Second Street in Lewes |
| 7 | **How we meet you there:** drive time from our base, the named meeting spot, the video-call option | "About [[NEEDS: drive time]] from our base; we meet at your business or at [[NEEDS: named public meeting spot]]" | "Site visits monthly; most meetings by video; we meet at [[NEEDS: named spot]]" |
| 8 | **A town FAQ of 4 to 6 questions** shared with no other page | "Do you have a Salisbury office?" answered honestly (6.6) | "Do you work with Delaware businesses from Maryland?" |
| 9 | **Local press and link targets we actually use** | Salisbury Independent, The Daily Times (04 authority table) | Cape Gazette, Delaware Business Times (04 authority table) |

**Launch rule (no borrowed proof).** Every page is scored out of 9, but it does not need 9 to ship. A page ships when it passes **all five checks we control on day one: 1 (sourced data), 3 (calendar), 6 (our photo), 7 (logistics and meeting spot) and 8 (town FAQ)**, plus at least one of 2 or 9. That is 6 of 9 without any client or membership. Checks 4 and 5 count only when they are real. Until then the proof block and the membership line are **left out**; they are never filled with another town's proof or with a membership we do not hold. A service-in-town page must also carry its own service section ("what a {service} buyer in {town} sees in search today", written from the 04 snapshot for that term, or "not checked yet" where 04 ran none) and its own FAQ.

**Two automated guards stop template swaps:**
- **Overlap guard.** At build, every pair of location pages is compared using 5-word shingles. Any pair sharing more than 30% of body text fails the build. This replaces draft A's "60% unique" rule.
- **Name-swap check.** A reviewer reads the page with the town name removed. If they cannot tell which town it is from the rest of the copy, it fails QA.

**Town names that collide with other places** (04 Method: Berlin, Germany and Connecticut; Lewes, UK; Cambridge, UK and Massachusetts; Salisbury in NC, PA, MA, MO and the UK): every H1 and title for Berlin, Lewes, Cambridge and Salisbury carries the state ("Berlin, MD"); every town URL carries the state abbreviation; the Berlin page names Worcester County in its first paragraph; `areaServed` uses the town plus its county and state.

### 6.4 Page template (block order; the content differs per town)

1. H1: "{Service, or 'Web design and marketing'} for {Town}, {State} businesses" (one H1, town and state in it).
2. One promise line with a number (starting price or reply time), "Book a 15-minute call" and "See prices".
3. "What businesses in {Town} need from marketing" (checks 1 and 2).
4. Services for {Town} with starting prices. Hubs link down to their service-in-town pages; service-in-town pages link up to the hub and across to the generic service page.
5. Local proof block (check 4) if real; otherwise the owner block with the reply-time promise. Nothing borrowed.
6. "Your {Town} marketing calendar" (check 3).
7. How we meet you (check 7), with a **static map image linking out to Google Maps** (no iframe; standards table).
8. Town FAQ (check 8) with `FAQPage` schema.
9. Nearby towns we serve (2 or 3 neighbouring town pages).
10. The 4-field form and the owner block.

### 6.5 Review and citation plan per town

**Core citations for every town (month one, about 50 listings, PLAN §6.2):** Google Business Profile, Bing Places, Apple Business Connect, Yelp (claimed and kept accurate), Facebook, LinkedIn, Instagram, Nextdoor, BBB, Clutch, DesignRush, UpCity, GoodFirms, Expertise.com, TechBehemoths, Alignable, Manta, ChamberofCommerce.com, BestProsInTown, the Maryland Office of Tourism partner listing (D3 was listed there in the October recon, not re-confirmed: 02b §2 row 20 did not surface it and 02b §10 #5 lists web.mdtourism.org/Services/D3-Corp-38 for re-checking), the main data aggregators, and Semrush Agency Partners once there is a subscription (04 Summary 5). One name, one address format, one phone on 100% of listings; each logged with URL and check date; re-audited quarterly (02b §2 standard). D3's listings show 5 name variants and a stale address (02b §2).

Two D3 items are search-only and unverified, so we never cite them: the November 2025 tourism awards and the Ocean City chamber website credit (02b §1, §5). Nor do we cite D3's Google rating, which was never checked (02b §3).

**Review targets by day 90 sum to 25** and depend on the client list asked for in intake (section 11.1). Reviews from a town come only from real clients there; we never force a town's number.

| Town page | Chamber or association (04 authority table) | Local press (04) | Other citations and links | Google reviews by day 90 |
|---|---|---|---|---|
| Ocean City (and West Ocean City) | Greater Ocean City Chamber (D3 is a member, 02b §4); OCHMRA associate membership | Maryland Coast Dispatch; Ocean City Today | Maryland Office of Tourism listing; Worcester County Economic Development; Town of OC events (Springfest, Sunfest); OC Air Show | 9 |
| Salisbury | Salisbury Area Chamber (D3 is the chamber's marketing vendor, 02b §1: do not expect to out-rank that relationship in year one); Greater Salisbury Committee; SWED | Salisbury Independent; The Daily Times / Delmarva Now; WBOC; WMDT | Salisbury University and Wor-Wic (internships, guest lectures); Maryland SBDC workshops | 6 |
| Berlin and Ocean Pines | Berlin Chamber; Ocean Pines Area Chamber (URLs to confirm, 04) | Bayside Gazette (one pitch also covers Ocean City Today, 04) | Berlin Main Street events | 4 |
| Bethany Beach and Fenwick Island | Bethany-Fenwick Area Chamber (see the note below this table on D3's thequietresorts.com link) | Coastal Point | Town of Bethany Beach events | 2 |
| Rehoboth Beach and Lewes | Rehoboth Beach-Dewey Beach Chamber; Lewes Chamber (URLs to confirm, 04) | Cape Gazette; Delaware Business Times | Southern Delaware Tourism partner listing if allowed | 2 |
| Sussex County | Greater Millsboro Chamber; one southern Delaware chamber (04) | Cape Gazette; Delaware Business Times | Sussex County economic development resources | 1 |
| Easton and Cambridge | `[[NEEDS: chamber research; none in the 04 table]]` | `[[NEEDS: local outlet research]]` | Clutch and BBB (the lists that rank there, 04 snapshot) | 1 |
| Pocomoke City and Snow Hill | Worcester County Economic Development; Worcester County Tourism (04) | Maryland Coast Dispatch | Town listings | 0 |
| **Total** | | | | **25** |

**Note on the Bethany-Fenwick chamber (a conflict between the research documents, flagged for a manual check).** D3's footer links a logo to thequietresorts.com (01 §2.3). 01 §1 #10 and 01 §6 read that as a Bethany-Fenwick chamber membership, but only by inference from the link target, and 04's authority table marks it "Yes, inferred". 02b §4 labels the same link "Worcester County Tourism" with "membership type not stated", and lists the Bethany-Fenwick Chamber separately, with no badge on D3's site (D3 took part in its 30th-anniversary ribbon-cutting, a search-only observation). We therefore do **not** state that D3 is a Bethany-Fenwick chamber member. Our own plan does not depend on the answer: if intake lists Bethany or Fenwick, we join the Bethany-Fenwick Area Chamber on our own merits (02b §8 #9). The check is part of decision 24: open thequietresorts.com, confirm which organization runs it, and whether D3 is a listed member.

### 6.6 The Salisbury question

**The facts.** D3 lists two offices, one at 12319 Ocean Gateway in West Ocean City (ZIP 21842, which also covers Ocean City; 02 §10) and one at 212 West Main Street, Salisbury, and both appear in its footer on every page (01 §6). Whether the Salisbury office is staffed, and which suite it uses, is not known (01 §9 #7; 02b §10 #4). D3 hires only "in person at our Ocean City, Maryland office" (01 §6). Two offices usually mean two chances at the Google map pack (PLAN §2, §9). We have no Salisbury address.

**What we can win without an office.** The map pack leans heavily on how close a business is to the searcher, so we should not expect Salisbury map-pack wins in year one. The organic results below the map are different, but only for some terms. For the Salisbury SEO, Google Ads, web design and graphic design terms, D3 has no page in the top 10 and no local agency has its own service page; templated national pages and print shops fill the slots (04 Summary 2 and 3; snapshot table). For the agency terms it is the opposite: D3 ranks #4 and #10 for "marketing agency Salisbury MD" (r108), #2 for "digital marketing Salisbury MD" and #4, #5 and #7 for "advertising agency Salisbury MD", and local firms such as Marketeer Experts, Standout Fast, Sweet Media and SU Design Agency also appear (04 snapshot table). So the Salisbury web design, SEO, Google Ads and graphic design pages are the realistic early wins (social media sits between, with D3 at #3 and #4 only through a case study); the Salisbury hub, which owns the agency terms, is a longer climb. All of them are honestly labelled: "We don't have a Salisbury office. We come to you." Our Google Business Profile lists Wicomico County in its service area.

**What we never do.** No virtual office, mailbox, shared "suite" address, UPS Store box or unstaffed coworking desk on Google Business Profile. Google treats those as ineligible, and a suspension would erase the Ocean City profile too (PLAN §9). 04 notes that several Salisbury listings share one West Main Street address that points to virtual offices; we stay away from that pattern (04 "Other names seen").

**The plan, in three steps:**
1. **Launch (weeks 2 to 6):** honest service-area pages; the FAQ answers "Do you have a Salisbury office?" plainly; the named meeting spot is a hard stop `[[NEEDS: Salisbury meeting spot]]`.
2. **Bridge (week 3 onward):** Google Ads on the Salisbury terms where no local competitor has a page, starting with "Google Ads management Salisbury MD" and "SEO company Salisbury MD" (04 Top 20 #1–2; PLAN §6.7).
3. **Decide at day 90 (decision 26):** open a real, staffed Salisbury location (a coworking office with signage and posted hours, PLAN §6.2) **only if 2 of these 3 are true:** 3+ paying Salisbury clients; 5+ Salisbury leads a month; the Salisbury pages on page 1 organically for 3+ tracked terms. Only then add a second Google Business Profile, with real staffed hours.

---

## 7. Industry page system

D3's case studies lean on hospitality and tourism, but it has turned none of that into teaching content and has no industry page (01b §6; 03b §2.2). Each industry page: an H1 naming the trade and a place (03b §2.1 standard); 1,200+ words; one sourced local data point; a season calendar for that trade; a "what we do for you" section per service; a package with a starting price; a proof block; 4 to 6 FAQs; links to 2 services, 2 town pages and 1 article. Industry terms that contain a town stay on the industry page (rule 3 in 6.1). A pillar article per industry follows in the content calendar (01b §7 #2).

Until we have clients in a trade, the page leads with checklists, prices and process. We do not expect the hotel or restaurant pages to outrank D3 in 90 days: D3 wins those terms with named case studies (04 Summary 6; Top 20 #20, ratio 0.75).

| Page | Owned keywords (name and CSV row) | What D3 has here (evidence) | Proof we need, and what we show until we have it | Notes |
|---|---|---|---|---|
| `/industries/hospitality-vacation-rentals/` (sprint 1) | hotel website design ocean city md (r64); vacation rental website design ocean city md (r66); hotel marketing agency ocean city md (r171); hotel marketing ocean city md (r215); hotel marketing agency salisbury md (r216); vacation rental marketing ocean city md (r217); vacation rental marketing salisbury md (r218); vacation rental marketing worcester county md (r244); vacation rental marketing bethany beach de (r263); hotel marketing agency rehoboth beach (r273); short term rental marketing ocean city md (r278) | 2 hotel case studies (Boardwalk Hotel Group, Castle in the Sand) and 5 hotel videos; D3 is #1 for "hotel marketing agency Ocean City MD" with a case study; **0 vacation-rental pages anywhere** (01b §6; 04 snapshot) | A direct-booking result (bookings, booking-engine conversion, online travel agency share before and after). Until then: the 7,166 active short-term rental listings and 21.3% supply drop (AirDNA, Aug 2026, via 04 seasonality), a direct-booking checklist, a phone speed check of a consenting property's booking page | Money page; full brief in 9.9. Moved to sprint 1 so it is live before the January-to-April buying window (04 seasonality) |
| `/industries/restaurants-bars/` | restaurant website design ocean city (r65); restaurant marketing ocean city md (r172); restaurant marketing salisbury md (r219); restaurant marketing rehoboth beach (r274). (How to market a restaurant in a beach town, r289, is held by the `/work/[client-3-slug]/` case-study slot and returns here if that slot is not built; 9.11) | 5 restaurant case studies, 4 restaurant videos; D3 holds #1 to #4 for "restaurant marketing Ocean City MD" with blog case posts (01b §6; 04 snapshot) | Online-order or reservation counts before and after; Google Business Profile calls and direction requests. Until then: a Google Business Profile checklist for restaurants and a menu-page speed and accessibility checklist | Hardest vertical against D3 (04 Top 20 #20) |
| `/industries/amusements-attractions/` | ocean city md marketing for seasonal businesses (r170); tourism marketing agency eastern shore (r191). Amusement-specific terms ("amusement park marketing", "boardwalk business marketing", "attraction website design") await the keyword pass (decision 23; 04 "Review gaps still open") | 1 case study (Jolly Roger) and 1 amusement video (01b §6); D3's strongest vertical, destination and tourism-board work, sits next door (section 3, Contact-dropdown table) | Ticket or pass sales by channel, season over season. Until then: a pre-season checklist for boardwalk businesses and geofencing explained in plain English | Scope: amusements, attractions, events, and a short section for tourism organizations (our counter-position to D3's destination work, section 3). Both owned terms are "very low" estimates |
| `/industries/golf/` | golf course marketing agency ocean city md (r298); golf course website design maryland eastern shore (r299); ocean city golf getaway marketing (r300); golf package marketing delmarva (r301); golf course social media marketing berlin md (r302) | Old Pro Golf (mini golf, an amusement) and a charity golf video; no golf-course client and no golf page (04 Additions; 01b §6) | Tee-time or package bookings by source. Until then: a package landing-page example built on our own template | All five volumes are unverified estimates (04 Additions); aim at the Ocean City, Berlin and Route 589/611 courses |
| `/industries/real-estate/` | real estate website design ocean city md (r67); real estate marketing sussex county de (r192); real estate marketing ocean city md (r220); real estate marketing salisbury md (r221); delmarva real estate photography and video (r252); how should realtors use video and drone footage to sell second homes (r290) | The Land Group (a land brokerage) case study; the Terms carve out real estate feeds for "REALTOR" clients (01b §3.1; 03b §2.2) | Listing-video views and inquiries; agent site speed before and after. Until then: drone rules near Ocean City (Part 107, the Assateague no-fly area; CSV r286, r287) explained, and a listing-media package price | Drone work only with `[[NEEDS: owner confirms Part 107 certificate]]`; 0 real estate snapshots (04 review gaps) |
| `/industries/medical-dental/` | medical practice marketing ocean city md (r222); medical practice marketing salisbury md (r223); dental marketing eastern shore md (r249) | Chesapeake Health Care and Visiting Angels case studies; a Coastal Hospice testimonial (01b §6) | New-patient calls or booking requests by month. Until then: an accessibility checklist for practice sites and our rule that no patient health data enters our forms or marketing tools | Salisbury-weighted: 169 physician offices (04 seasonality). D3's Terms disclaim HIPAA compliance (03b §3.2 Exclusions 14). **No HIPAA wording at all until the owner decides whether we sign business associate agreements** `[[NEEDS: decision 18]]` |
| `/industries/home-services/` | contractor website design salisbury md (r68); home services marketing ocean city md (r224); home services marketing salisbury md (r225); hvac marketing salisbury md (r226); home services marketing eastern shore (r248) | 1 case study (Delaware Crawl Space), unreachable from the home page (01b §3.1) | Calls and form leads per month from search and Google Business Profile. Until then: a "call-ready" profile checklist and call tracking explained | Steadier year-round demand than Ocean City (04 seasonality) |
| `/industries/` hub | law firm website design eastern shore md (r69) | Nonprofit work (3 case studies, 8 videos) and one bank (Farmers Bank of Willards) (01b §6) | | Links to all seven; a short "other industries" section carries law firms, nonprofits and banks and credit unions (section 3) |

---

## 8. Keyword-to-page map: the 60 highest-priority keywords

**How the 60 were chosen.** `keywords.csv` marks 86 rows as priority 1. All 60 below are priority 1, chosen in this order: (1) all 21 terms in 04's "20 highest-value terms" list (item 19 holds two terms); (2) every other priority-1 term with an estimated volume of "low" (10-50/mo) or higher; (3) five priority-1, "very low" terms picked by judgement, each for its own stated reason: hotel marketing ocean city md (r215) anchors the hospitality money page; ai search optimization ocean city md (r104) and google business profile optimization ocean city md (r105) are first-mover terms with no Shore provider (04 Summary 9; Top 20 #17) and sit on the sprint-3 Ocean City SEO page; website maintenance ocean city md (r8) is a service D3 sells with no page of its own ("Hosting and Maintenance", 01 §3 patterns) and sits on the sprint-3 Ocean City web design page; restaurant marketing ocean city md (r172) is tracked as the hardest vertical term, where D3 holds #1 to #4 (04 Top 20 #20), not because it is an easy win.

**A Phase 1 target this list does not meet.** PLAN §4 acceptance criterion 3 asks for a current top-3 for at least 150 keywords. It is **still unmet**: only 40 of 301 rows have one, and reaching 150 needs at least 110 more queries (04 Additions, "Top-3 coverage"). Re-running the 10 consistency checks is not enough on its own; decision 23 covers both. All volumes are estimates (04 Method). "D3 position" is the single 04 snapshot reading, or "not checked" (04 SERP consistency check: no SERP was observed twice).

Every keyword has exactly one owning page, here and in Appendix A, which maps all 301.

| # | Keyword (CSV row) | Est. volume | Owning page | D3 position (04 snapshot, one reading) |
|---|---|---|---|---|
| 1 | web design salisbury md (r11) | medium (50-200/mo) | `/locations/salisbury-md/web-design/` | not present (named only in INSIDEA listicle) |
| 2 | seo company salisbury md (r111) | low (10-50) | `/locations/salisbury-md/seo/` | not present |
| 3 | marketing agency salisbury md (r108) | low (10-50) | `/locations/salisbury-md/` | #4 (?p=9), #10 (?p=1810) |
| 4 | digital marketing agency ocean city md (r97) | low (10-50) | `/locations/ocean-city-md/` | #1 (site-map); also #9, #10, #19 |
| 5 | marketing agency ocean city md (r98) | low (10-50) | `/locations/ocean-city-md/` | #2 (site-map); also #14 (/meet-us/) |
| 6 | web design ocean city md (r2) | low (10-50/mo) | `/locations/ocean-city-md/web-design/` | #6 (/websites/); also #10 site-map, #14 homepage |
| 7 | seo company ocean city md (r101) | low (10-50) | `/locations/ocean-city-md/seo/` | own SEO page #15; Semrush profile #9 |
| 8 | social media management salisbury md (r196) | low (10-50/mo) | `/locations/salisbury-md/social-media/` | #3, #4 (Chamber case study, not a service page) |
| 9 | social media marketing ocean city md (r193) | low (10-50/mo) | `/locations/ocean-city-md/social-media/` | #9 (/social-media-marketing/) |
| 10 | google ads management salisbury md (r198) | very low (<10/mo) | `/locations/salisbury-md/google-ads/` | not present |
| 11 | vacation rental marketing ocean city md (r217) | low (10-50/mo) | `/industries/hospitality-vacation-rentals/` | not present |
| 12 | web design eastern shore md (r29) | low (10-50/mo) | `/services/web-design/` | #3, #4 (homepage; snapshot query 'web design Eastern Shore Maryland') |
| 13 | marketing agency eastern shore md (r128) | low (10-50) | `/` | #1, #2, #3 (homepage and ?p= duplicates) |
| 14 | web design rehoboth beach de (r35) | low (10-50/mo) | `/locations/rehoboth-beach-lewes-de/` | not present |
| 15 | marketing agency rehoboth beach de (r136) | low (10-50) | `/locations/rehoboth-beach-lewes-de/` | not present |
| 16 | web design lewes de (r39) | low (10-50/mo) | `/locations/rehoboth-beach-lewes-de/` | not present |
| 17 | video production ocean city md (r209) | low (10-50/mo) | `/locations/ocean-city-md/video-production/` | #18 (/multimedia/) |
| 18 | graphic design salisbury md (r208) | low (10-50/mo) | `/locations/salisbury-md/graphic-design-branding/` | not present |
| 19 | web designer near me (r54) | medium (50-200/mo) from Delmarva searchers | `/services/web-design/` | not checked (not run) |
| 20 | digital marketing agency near me (r155) | medium (50-200) local share | `/` | not checked (not run) |
| 21 | how much does a small business website cost in maryland (r83) | very low (<10/mo) | `/pricing/` | not checked (not run) |
| 22 | website design ocean city md (r3) | low (10-50/mo) | `/locations/ocean-city-md/web-design/` | #6 (site-map), #9 (/websites/), #13 (snapshot query 'website design Ocean City Maryland') |
| 23 | website design salisbury md (r12) | low (10-50/mo) | `/locations/salisbury-md/web-design/` | not present (snapshot query 'website design Salisbury Maryland') |
| 24 | web developer salisbury md (r13) | low (10-50/mo) | `/locations/salisbury-md/web-design/` | not checked (attempted, no data) |
| 25 | delmarva web design (r32) | low (10-50/mo) | `/services/web-design/` | #4 (/service/development; snapshot query 'web design Delmarva') |
| 26 | web design near me (r55) | medium (50-200/mo) from Delmarva searchers | `/services/web-design/` | not checked (not run) |
| 27 | advertising agency ocean city md (r100) | low (10-50) | `/locations/ocean-city-md/` | #2 (site-map); also #11 Semrush profile, #16 (snapshot query 'advertising agency Ocean City Maryland') |
| 28 | seo services ocean city md (r102) | low (10-50) | `/locations/ocean-city-md/seo/` | not checked (attempted, no data) |
| 29 | digital marketing agency salisbury md (r107) | low (10-50) | `/locations/salisbury-md/` | not checked (attempted, no data) |
| 30 | marketing company salisbury md (r109) | low (10-50) | `/locations/salisbury-md/` | not checked (not run) |
| 31 | advertising agency salisbury md (r110) | low (10-50) | `/locations/salisbury-md/` | #4, #5, #7 |
| 32 | seo services salisbury md (r112) | low (10-50) | `/locations/salisbury-md/seo/` | not checked (attempted, no data) |
| 33 | delmarva marketing agency (r132) | low (10-50) | `/` | not checked (not run) |
| 34 | marketing agency near me (r156) | medium (50-200) local share | `/` | not checked (not run) |
| 35 | seo company near me (r157) | medium (50-200) local share | `/services/seo/` | not checked (not run) |
| 36 | local seo services near me (r158) | low (10-50) local share | `/services/seo/` | not checked (not run) |
| 37 | social media marketing salisbury md (r194) | low (10-50/mo) | `/locations/salisbury-md/social-media/` | not checked (attempted, no data) |
| 38 | social media management ocean city md (r195) | low (10-50/mo) | `/locations/ocean-city-md/social-media/` | not checked (not run) |
| 39 | logo design ocean city md (r205) | low (10-50/mo) | `/locations/ocean-city-md/graphic-design-print/` | not checked (attempted, no data) |
| 40 | logo design salisbury md (r206) | low (10-50/mo) | `/locations/salisbury-md/graphic-design-branding/` | not checked (not run) |
| 41 | graphic design ocean city md (r207) | low (10-50/mo) | `/locations/ocean-city-md/graphic-design-print/` | not checked (not run) |
| 42 | video production salisbury md (r210) | low (10-50/mo) | `/locations/salisbury-md/` | not checked (not run) |
| 43 | drone videography ocean city md (r211) | low (10-50/mo) | `/locations/ocean-city-md/video-production/` | not checked (not run) |
| 44 | social media marketing near me (r227) | high (200+/mo) | `/services/social-media-management/` | not checked (not run) |
| 45 | social media manager near me (r228) | high (200+/mo) | `/services/social-media-management/` | not checked (not run) |
| 46 | logo design near me (r230) | high (200+/mo) | `/services/branding-logo-design/` | not checked (not run) |
| 47 | graphic designer near me (r231) | high (200+/mo) | `/services/graphic-design/` | not checked (not run) |
| 48 | video production company near me (r232) | high (200+/mo) | `/services/video-photo-drone/` | not checked (not run) |
| 49 | how much does a website cost (r82) | high (200+/mo) nationally | `/blog/how-much-does-a-website-cost/` | not checked (not run) |
| 50 | how much does seo cost for a small business (r175) | high (200+) national | `/blog/how-much-does-seo-cost/` | not checked (not run) |
| 51 | how much does a marketing agency cost (r176) | high (200+) national | `/pricing/` | not checked (not run) |
| 52 | how do i get my business to show up in chatgpt (r177) | medium (50-200) national | `/blog/show-up-in-chatgpt/` | not checked (not run) |
| 53 | how to rank higher on google maps (r180) | high (200+) national | `/blog/rank-higher-on-google-maps/` | not checked (not run) |
| 54 | how much does social media management cost (r279) | high (200+/mo) | `/pricing/` | not checked (not run) |
| 55 | how much does google ads management cost (r281) | high (200+/mo) | `/pricing/` | not checked (not run) |
| 56 | ai search optimization ocean city md (r104) | very low (<10) | `/locations/ocean-city-md/seo/` | not checked (not run) |
| 57 | google business profile optimization ocean city md (r105) | very low (<10) | `/locations/ocean-city-md/seo/` | not checked (not run) |
| 58 | hotel marketing ocean city md (r215) | very low (<10/mo) | `/industries/hospitality-vacation-rentals/` | not checked (not run) |
| 59 | restaurant marketing ocean city md (r172) | very low (<10) | `/industries/restaurants-bars/` | #1-#4 (blog case posts, duplicate URLs) |
| 60 | website maintenance ocean city md (r8) | very low (<10/mo) | `/locations/ocean-city-md/web-design/` | not checked (not run) |

**Conflicts flagged, and how each is resolved:**

| # | Conflict | Resolution |
|---|---|---|
| C1 | **Home vs the Ocean City hub.** Both are "about" an Ocean City agency, and D3 wins its town terms with its home page and site map (04 snapshot). | Home owns the Delmarva and Eastern Shore terms; its title has no town. The Ocean City hub owns every "{agency} ocean city md" term. Home links to it with the anchor "marketing agency in Ocean City". Re-check in Search Console after 60 days; if Google ranks home for the Ocean City terms, swap ownership rather than fight it. |
| C2 | **Generic service pages vs town pages.** keywords.csv tags many "{service} ocean city md" and "{service} salisbury md" terms as "service page" (for example r101, r111, r209). | Rule 1 in 6.1: town and service-in-town pages own every "{service} + {town}" term (02 §3.4). Generic service pages carry no town in title or H1 and link down to the town pages. |
| C3 | **Ocean City and Salisbury service terms with no service-in-town page** (for example "google ads management ocean city md" r197, "email marketing services salisbury md" r202, "video production salisbury md" r210). | They go to the town hub, which carries a short section for each such service and links to the generic service page. A dedicated page is added only if Search Console shows demand. |
| C4 | **Pricing page vs cost articles** ("how much does a small business website cost in maryland" r83 vs "how much does a website cost" r82). | `/pricing/` owns the Maryland and town cost terms and shows our real prices. The article owns the national question, never uses "Maryland" or a town in its title, and links to `/pricing/`. |
| C5 | **SEO vs AI search optimization** (D3's own SEO and AEO pages cannibalize each other, 02 §3.5). | "AI" never appears in the SEO page's title or H1; the AI page never says "SEO company". Each links to the other once. |
| C6 | **Websites vs starter website** (D3's `/websites/` and `/rapid-design-websites/` overlap, 02 §3.5). | The starter page owns only the "how long does it take to build" question (r86) and states its fixed scope; "small business website design {town}" goes to the town web design pages (rule 1). |
| C7 | **"Near me" terms** (r54, r55, r155, r156, r157, r158, r227, r228, r230, r231, r232 in the 60). | Owned by pages for on-page relevance, but mostly won by Google Business Profile proximity and reviews (04 cluster table; CSV r54 note). Measured in the map pack, not by the page's organic rank. |
| C8 | **"marketing agency eastern shore md" (r128):** D3 holds #1 to #3 (04 snapshot). | Kept on home as a long-term term; no 90-day expectation (04's "20 highest-value terms" #13 marks it hard). |
| C9 | **D3's brand terms** ("d3corp alternatives" r78, "d3 corp alternatives" r168, "d3corp reviews" r169). | Deliberately unowned. We never name D3 on our site (PLAN Appendix B). Bidding on them in Google Ads is an owner decision (decision 22). |
| C10 | **Rehoboth vs Lewes** ("wordpress developer lewes rehoboth" r41 spans both). | One combined page owns both towns' terms until the split trigger in 6.2 is met. |
| C11 | **"seo company salisbury md reviews" (r189)** could sit on the Salisbury SEO page or on `/reviews/`. | Rule 3 in 6.1 sends "reviews" terms to `/reviews/`, so `/reviews/` owns it: a buyer typing "reviews" wants to read reviews. The review list links to the Salisbury SEO page, and the Salisbury SEO page links back. Our own brand query ("media masters group reviews") is added in the keyword pass. |
| C12 | **Redesign buy terms** ("website redesign ocean city md" r9, "website redesign salisbury md" r18, "website redesign near me" r60). | Owned by websites pages (the two town web design pages and `/services/web-design/`), never by the audit tool. The audit tool owns only the "refresh vs redesign" and "website or Google Business Profile" questions (r90, r88). |
| C13 | **Terms that broke the 6.1 rules in the first draft:** "advertising agency near me" (r159) on `/services/`, "ocean city md marketing for seasonal businesses" (r170) on the strategy page, "can you fly a drone in ocean city md" (r287) on the video service page, and two cost questions (r84, r282) on service pages. | r159 moved to Home (rule 4); r170 to the attractions industry page (rule 3, CSV type "vertical page"); r287 to the Ocean City video page (rule 1; it answers the question in its FAQ); r84 to a new cost article, `/blog/website-maintenance-cost/`, and r282 to `/pricing/` (rule 3). "marketing company near me" (r160) stays on `/contact/`, which rule 4 now names explicitly. |

---

## 9. Content briefs

### 9.0 Rules every brief inherits

- One H1 naming the service, industry or town and a place or buyer (03b §2.1 standard). One keyword cluster, owned by this page only (section 8, Appendix A).
- Title 60 characters or fewer and meta description 155 or fewer, both unique (02 §3.4, §4). Every title and full-brief meta description below was counted by script.
- First screen at 390 px: H1, a one-line promise with a fact in it, "Book a 15-minute call", "See prices", and tap-to-call (section 10.1).
- A starting-at price wherever a service is sold. `[[NEEDS: price]]` is a hard stop for publishing.
- A proof block in the first two phone screens: the best real proof for that page, never another page's or another town's proof (03 §6 standard).
- Three or more internal links in the body with descriptive anchors; no link to a redirect (02 §6.4).
- 4 to 6 FAQs a buyer would actually ask, marked up with `FAQPage`. **No FAQ answer promises a ranking, a map-pack position, an AI citation, traffic or revenue.** Answers promise process, response and terms only.
- Grade-8 reading level; every technical term defined in one sentence on first use (03b §2.5).
- Images: real photos only (team, clients with permission, Delmarva places we shoot). No stock heroes, no AI-generated art, no image reused as a hero on two pages (03 §4.3, §9 #11). Alt text on every informative image; `alt=""` on decorative ones.
- No banned phrase (section 2.1); D3 is never named.

**Market price reference points for the owner (not our prices, never shown as our prices).** These come from `keywords.csv` basis notes and help set floors (decision 4):

| Item | Range seen | Source |
|---|---|---|
| Small business website (Maryland) | $500 to $2,000, one Southern Maryland vendor | CSV r19, r83 |
| Website refresh vs redesign | $500 to $2,000 refresh; $2,000 to $15,000 redesign | CSV r90 |
| Website maintenance | $35 to $500 a month | CSV r84 |
| E-commerce build | From about $5,000 (a Lewes firm, Shopify and WooCommerce) | CSV r42 |
| E-commerce upkeep | $300 to $1,000 a month | CSV r91 |
| Social media management | $500 to $2,500 a month; freelancers $300 to $1,500, agencies $2,000 to $10,000+ | CSV r279, r283 |
| Google Ads management fee | $500 to $2,000 a month (ad spend separate) | CSV r281 |
| Small business Google Ads spend | Median about $1,057 a month | CSV r282 |
| D3's only published rate | $195 an hour, custom programming; directory bands "under $10,000" and "$10,000+" | 01 §1 #4; 02b §2 |

### 9.1 Home

- **URL:** `/`
- **Title tag:** `Delmarva & Eastern Shore Marketing Agency | Media Masters`
- **Meta description:** `Websites, SEO and marketing for Delmarva businesses. Starting prices on every page, a same-day reply from a named person, and month-to-month terms.`
- **H1:** Websites and marketing for Delmarva businesses, with the prices on the page
- **Sub-line under the H1:** "Based in Ocean City `[[NEEDS: confirm public address or service area]]`. A named person replies the same business day."
- **H2 outline:**
  1. What we do, and what it costs to start (one card per offered service: starting price, timeline, link)
  2. Five things we promise in writing
  3. Towns we work in (cards for each live town page; static map image)
  4. Industries we know (seven cards)
  5. Proof you can check today (scoreboard numbers, case study 1, reviews once 5 exist)
  6. How a project runs, start to finish
  7. Meet the person who will answer you
  8. Check your own website free (inline URL box; shown once the audit tool ships in sprint 4)
  9. Questions people ask first
- **Word count:** 1,200
- **Keyword cluster (owned):** marketing agency eastern shore md (r128); delmarva marketing agency (r132); delmarva advertising agency (r135); digital marketing agency near me (r155); marketing agency near me (r156); advertising agency near me (r159)
- **Internal links (3):** `/pricing/` ("see every price"), `/locations/ocean-city-md/` ("marketing agency in Ocean City"), `/locations/salisbury-md/` ("Salisbury marketing and web design"). Also `/services/web-design/`.
- **Proof block:** live scoreboard figures for this page (mobile Lighthouse, LCP, page weight, axe serious count) beside our published bars; case study 1 with its two numbers; the account lead's photo, name and direct line; Google rating and count once there are 5+ reviews `[[NEEDS: reviews]]`.
- **FAQ (6):** How much does a website or a marketing plan cost with you? · Do I have to sign a long contract? · Who will I actually talk to? · How fast will you get back to me? · Do you work outside Ocean City? · Can you guarantee I'll show up first on Google? (Answer: no one honestly can. Here is what we do promise: the work, the dates, the report and the reply time.)
- **CTA:** primary "Book a 15-minute call"; secondary "See prices"; header "Call" and "Text us".
- **Schema:** `ProfessionalService` (the full sitewide node, 12.5), `WebSite`, `WebPage`, `FAQPage`; `Person` referenced by `@id`.
- **Images needed:** the lead's portrait (real); one Delmarva place photo we shoot `[[NEEDS: photo shoot]]`; a scoreboard screenshot. No carousel.

### 9.2 Contact

- **URL:** `/contact/`
- **Title tag:** `Contact Media Masters Group | Book a 15-Minute Call`
- **Meta description:** `Book a 15-minute call, phone, text, or send a short note. A named person replies the same business day. Office hours, service area and next steps inside.`
- **H1:** Contact Media Masters Group on Delmarva
- **H2 outline:** Book a 15-minute call · Send a short note (the 4-field form) · Call or text · Hours and reply times · Where we work · What happens after you reach out (3 steps) · Questions
- **Word count:** 500
- **Keyword cluster (owned):** marketing company near me (r160), under rule 4 in 6.1: like the home page, Contact carries the full name, address or service area, phone, hours and map image that a "near me" result is judged on. The page's main job is conversion and NAP consistency.
- **Internal links (3):** `/pricing/`, `/what-you-own/`, `/about/`
- **Proof block:** the lead's photo and name ("You'll hear from [first name]"); our published median reply time once 3 months of data exist; one dated review with a source link once one exists.
- **FAQ (5):** When will I hear back? · Do you meet in person, and where? · Is the call a sales pitch? · What should I have ready? · What if I write after hours or on a weekend?
- **CTA:** "Book a 15-minute call" (opens the booking page on tap); form button "Send to [lead first name]".
- **Schema:** `ContactPage`, `ProfessionalService` by `@id` (with `contactPoint` and `openingHoursSpecification`), `BreadcrumbList`, `FAQPage`.
- **Images needed:** the lead's portrait; a static service-area map image.

### 9.3 Pricing

- **URL:** `/pricing/`
- **Title tag:** `Website & Marketing Prices, Eastern Shore MD | Media Masters`
- **Meta description:** `Starting prices and three packages for websites, SEO, social media, ads and more on the Eastern Shore. Month to month, with what's included in plain words.`
- **H1:** Prices for websites and marketing on the Eastern Shore
- **H2 outline:**
  1. How our prices work (starting-at, three packages, month to month, projects billed by milestone `[[NEEDS: owner and attorney approval]]`, ad spend never marked up without saying so)
  2. One section per offered service, each with a 3-column package table: what's included, what's not, timeline, starting price `[[NEEDS: every price]]`
  3. What a marketing agency costs on the Eastern Shore
  4. What social media management costs here
  5. What Google Ads management costs, how much a small business typically spends on the ads themselves, and why ad spend is separate
  6. What a small business website costs in Maryland, and in Ocean City and Salisbury
  7. What logo design and a commercial video cost
  8. What is never included unless the package says so (content, photos, printing, domain: the items D3's Terms exclude by default, 03b §3.2, listed so buyers know to ask)
  9. Price changes: only at renewal, with 30 days' written notice (03b §3.2 standard)
  10. Questions
- **Word count:** 1,800 plus tables
- **Keyword cluster (owned):** how much does a website cost ocean city md (r10); how much does a website cost salisbury md (r19); web design pricing salisbury md (r77); how much does a small business website cost in maryland (r83); seo pricing ocean city md (r173); marketing agency pricing salisbury md (r174); how much does a marketing agency cost (r176); how much does social media management cost (r279); how much does a logo design cost for a small business (r280); how much does google ads management cost (r281); how much should a small business spend on google ads (r282); how much does a commercial video cost to produce on the eastern shore (r288)
- **Internal links (3):** `/what-you-own/`, `/services/web-design/`, `/blog/how-much-does-a-website-cost/`
- **Proof block:** "These are the same prices on every directory we're listed on" (02b §8 #5 standard); the five commitments as a checklist; the owner's name as the person who sets and stands behind the prices.
- **FAQ (6):** Why do you publish your prices? · What does "starting at" mean for my project? · Are there setup fees? · Can I cancel, and what does it cost? · Is ad spend included in the management fee? · Will my price go up?
- **CTA:** "Book a 15-minute call for a fixed quote"; secondary "Check my site free" (once the tool ships).
- **Schema:** `WebPage`, `BreadcrumbList`, `FAQPage`; `OfferCatalog` in the `ProfessionalService` node, each package an `Offer` with `PriceSpecification` (`minPrice`, `priceCurrency` USD) once prices exist.
- **Images needed:** none beyond the lead's portrait; tables are HTML, never images.

### 9.4 Websites

- **URL:** `/services/web-design/`
- **Title tag:** `Web Design for Delmarva Businesses | Media Masters Group`
- **Meta description:** `Fast, accessible websites for Eastern Shore businesses, from Lewes to Salisbury. Starting prices shown, a written launch date, and every file yours.`
- **H1:** Web design for Delmarva and Eastern Shore businesses
- **H2 outline:**
  1. What you get with a new website (deliverables list)
  2. Packages and starting prices (starter, business, e-commerce) `[[NEEDS]]`
  3. Which build is right for you (comparison table: pages, time, price, best for)
  4. How a website project runs: 6 steps, 4 to 8 weeks (kickoff call, sitemap and content plan, design, build, test against our speed and accessibility bars, launch with redirects) `[[NEEDS: owner confirms timeline]]`
  5. The standards every site we build must meet (main content in 2.5 s or less on a phone, under 1 MB, zero critical or serious accessibility errors, schema, one H1)
  6. Redesigns that keep your Google traffic (a redirect map; never a redirect to the home page, 02 §2.5 standard)
  7. WordPress, Shopify, WooCommerce or a static site: which fits
  8. Who you'll work with
  9. Proof
  10. Web design in your town (links to the Salisbury and Ocean City web design pages and every town hub)
  11. After launch: care plans
  12. Questions
- **Word count:** 1,600
- **Keyword cluster (owned):** web design eastern shore md (r29); eastern shore web design company (r30); web developer eastern shore maryland (r31); delmarva web design (r32); website company delmarva (r33); web designer near me (r54); web design near me (r55); website design company near me (r56); web developer near me (r57); wordpress developer near me (r58); website redesign near me (r60); ecommerce website designer near me (r61); woocommerce developer eastern shore (r71); wordpress website design eastern shore md (r72)
- **Internal links (3):** `/locations/salisbury-md/web-design/`, `/services/website-care-plans/`, `/pricing/`. Also `/work/media-masters-site-build/` and `/services/accessible-websites/`.
- **Proof block:** case study 1 (our own build: dated before-and-after, Lighthouse and page weight, time from kickoff to launch); our scoreboard; client launch results with two metrics once available `[[NEEDS]]`.
- **FAQ (6):** How long does a new website take? · What does a website cost here? · Do I own my website, domain and files? · Do you build on WordPress, or something else? · Will my site meet accessibility standards? (We build and test to WCAG 2.2 AA and publish the results; automated tests catch only part of WCAG, 03 §7.3; this is not legal advice.) · Can you redesign my site without losing my Google traffic?
- **CTA:** "Book a 15-minute call"; "See website prices".
- **Schema:** `Service` (`serviceType` "Web design", `provider` by `@id`, `areaServed` list, `offers`), `FAQPage`, `BreadcrumbList`, `WebPage`.
- **Images needed:** desktop and phone screenshots of sites we built (ours first); before-and-after Lighthouse screenshots; the lead's portrait.

### 9.5 SEO

- **URL:** `/services/seo/`
- **Title tag:** `SEO Services for the Eastern Shore | Media Masters Group`
- **Meta description:** `Local SEO for Delmarva businesses: a month-one audit, fixes, local pages and a plain-English report each month. Month to month. See the starting price.`
- **H1:** SEO for Eastern Shore and Delmarva businesses
- **H2 outline:**
  1. What SEO means for a local business (local, technical, content; one sentence each)
  2. What we promise, and what no one can (process and reporting yes; rankings no)
  3. Packages and starting prices `[[NEEDS]]`
  4. Month by month: month 1 audit and fixes; months 2 to 3 Google Business Profile, citations, local pages; month 4 on, content and links; report on a fixed date `[[NEEDS: owner confirms timeline and report date]]`
  5. Your monthly report (the sample, linked to `/reporting/`)
  6. Google Business Profile and reviews
  7. Being found in AI answers (short; links to the AI page)
  8. SEO in your town (links to the Salisbury and Ocean City SEO pages)
  9. Who you'll work with
  10. Questions
- **Word count:** 1,500
- **Keyword cluster (owned):** seo eastern shore maryland (r130); seo company delmarva (r134); seo company near me (r157); local seo services near me (r158); seo services near me (r161); seo company maryland eastern shore small business (r188)
- **Internal links (3):** `/reporting/`, `/services/google-business-profile/`, `/locations/salisbury-md/seo/`. Also `/locations/ocean-city-md/seo/` and `/services/ai-search-optimization/`.
- **Proof block:** the sample report; our own Search Console impressions chart once 60 days of data exist (dated, labelled as our site); a client before-and-after once available `[[NEEDS]]`.
- **FAQ (6):** How long does SEO take to show results? · Can you guarantee page one? (No one honestly can; here is what we commit to.) · What's the difference between SEO and AI search optimization? · Do I need a blog? · What's in the monthly report? · Can I stop any month?
- **CTA:** "Book a 15-minute call"; "Check my site free".
- **Schema:** `Service`, `FAQPage`, `BreadcrumbList`, `WebPage`.
- **Images needed:** an annotated sample-report screenshot (labelled "sample data"); the lead's portrait.

### 9.6 About

- **URL:** `/about/`
- **Title tag:** `About Media Masters Group | Local Delmarva Marketing Team`
- **Meta description:** `Meet the people behind Media Masters Group, who answers your call, and how we work: published prices, same-day replies and month-to-month terms.`
- **H1:** About Media Masters Group, a local Delmarva marketing team
- **H2 outline:** Why we started `[[NEEDS: owner story]]` · Meet [owner name] `[[NEEDS]]` · How we work (the five commitments) · Local or national agency: what changes for you · Where we are and where we travel `[[NEEDS: towns]]` · Memberships and certifications (only real ones, each linked to a verifiable listing, 02b §4 standard) · What we will never do (fake reviews, bought links, ranking promises, naming competitors) · Questions
- **Word count:** 900
- **Keyword cluster (owned):** local vs national marketing agency (r183)
- **Internal links (3):** `/about/[owner-slug]/`, `/what-you-own/`, `/scoreboard/`
- **Proof block:** owner photo, bio and LinkedIn; real certifications only `[[NEEDS]]`; scoreboard link; chamber memberships once joined.
- **FAQ (4):** How big is Media Masters Group? · Who does the work, you or subcontractors? (We disclose every service intake marks SUB.) · Where are you based? · Do you work with businesses outside Delmarva?
- **CTA:** "Book a call with [owner first name]".
- **Schema:** `AboutPage`, `Person` (owner, with `sameAs`, `jobTitle`, `worksFor`), `ProfessionalService` (`founder`), `BreadcrumbList`, `FAQPage`.
- **Images needed:** the owner's portrait; the owner at work in a recognizably local place; team photos if there is a team `[[NEEDS]]`.

### 9.7 Salisbury location hub

- **URL:** `/locations/salisbury-md/`
- **Title tag:** `Marketing Agency in Salisbury, MD | Media Masters Group`
- **Meta description:** `Marketing and websites for Salisbury and Wicomico County businesses. Prices shown, a same-day reply from a named person, and we come to you.`
- **H1:** Marketing and websites for Salisbury, MD businesses
- **H2 outline (block order from 6.4):**
  1. What Salisbury businesses need from marketing (year-round economy; health care with 169 physician offices around TidalHealth; university; professional firms; source: 04 seasonality, dated)
  2. Services for Salisbury, with starting prices (cards linking to the five Salisbury service pages)
  3. Email, video and drone for Salisbury businesses (short sections; links to the generic service pages)
  4. Salisbury proof (only when real; otherwise the owner block)
  5. Your Salisbury marketing calendar (3rd Friday; Maryland Folk Festival, "confirm still running", 04)
  6. How we work with you without a Salisbury office (we drive to you; `[[NEEDS: named meeting spot]]`; travel included or not `[[NEEDS]]`; static map)
  7. Delmar, Fruitland and Wicomico County
  8. Our Salisbury memberships (only once joined)
  9. Questions
- **Word count:** 1,300
- **Keyword cluster (owned):** digital marketing agency salisbury md (r107); marketing agency salisbury md (r108); marketing company salisbury md (r109); advertising agency salisbury md (r110); marketing agency wicomico county (r126); email marketing services salisbury md (r202); video production salisbury md (r210); drone videography salisbury md (r212); marketing agency wicomico county md (r245); digital marketing salisbury md (r293)
- **Internal links (3):** `/locations/salisbury-md/web-design/`, `/locations/salisbury-md/seo/`, `/industries/medical-dental/`. Also `/locations/salisbury-md/google-ads/`.
- **Proof block:** a Salisbury client result or review with permission `[[NEEDS]]`. Until then the block is left out and the owner block with the reply-time promise takes its place. Never another town's proof.
- **FAQ (6):** Do you have a Salisbury office? · How often can you meet in Salisbury? · Do you charge for travel? · Do you work with Delmar and Fruitland businesses? · How much does a website cost in Salisbury? (Short answer, link to `/pricing/`.) · Can you help with Google Ads for Salisbury searches?
- **CTA:** "Book a 15-minute call"; "We'll meet you in Salisbury".
- **Schema:** `WebPage` with `about` → `City` (Salisbury, MD), `Service` with `areaServed` (`City` Salisbury, `AdministrativeArea` Wicomico County), `BreadcrumbList`, `FAQPage`. **No Salisbury `PostalAddress`** (6.6).
- **Images needed:** Salisbury photos we shoot (downtown, riverfront) `[[NEEDS: photo shoot]]`; a static service-area map; the lead's portrait.

### 9.8 Ocean City location hub

- **URL:** `/locations/ocean-city-md/`
- **Title tag:** `Marketing Agency in Ocean City, MD | Media Masters Group`
- **Meta description:** `Marketing for Ocean City businesses, planned around the season. Starting prices shown, a same-day reply from a named person, and month-to-month terms.`
- **H1:** Marketing agency for Ocean City, MD businesses, planned around the season
- **H2 outline (block order from 6.4):**
  1. Ocean City's marketing year (January to April buying window, summer, September to November shoulder season; 04 seasonality, labelled as inference)
  2. Who buys marketing here (7,166 active short-term rental listings, AirDNA Aug 2026, via 04; hotels, restaurants, amusements)
  3. Services for Ocean City, with starting prices (cards linking to the five Ocean City service pages)
  4. Google Ads, Facebook ads and geofencing for Ocean City businesses (section for the ads terms this hub owns; links to `/services/paid-ads/`)
  5. Email to past guests and customers (links to `/services/email-sms-marketing/`)
  6. Ocean City proof (only when real)
  7. Events that move demand (Springfest, Sunfest, OC Air Show; 04)
  8. Where to find us (address and hours if public `[[NEEDS]]`; static map)
  9. West Ocean City and the Route 50 corridor (only if the West Ocean City page does not ship)
  10. Our Ocean City memberships (only once joined)
  11. Questions
- **Word count:** 1,300
- **Keyword cluster (owned):** digital marketing agency ocean city md (r97); marketing agency ocean city md (r98); marketing company ocean city md (r99); advertising agency ocean city md (r100); ocmd marketing agency (r118); social media and seo agency ocean city md (r190); google ads management ocean city md (r197); ppc management ocean city md (r199); email marketing services ocean city md (r201); facebook ads management ocean city md (r275); geofencing advertising ocean city md (r276)
- **Internal links (3):** `/locations/ocean-city-md/web-design/`, `/industries/hospitality-vacation-rentals/`, `/services/marketing-strategy/` ("a 12-month plan for a seasonal business"). Also `/locations/berlin-ocean-pines-md/`.
- **Proof block:** an Ocean City client or review `[[NEEDS]]`; our Google rating and count once there are 5+ (this is the Google Business Profile town).
- **FAQ (6):** Can you get a site live before Memorial Day if we start in March? · Do you work with businesses that close in winter? · Are you here year-round? · Can you help with shoulder-season events? · Do you still reply the same day in July? · Where are you located?
- **CTA:** "Book a 15-minute call"; "See prices".
- **Schema:** `WebPage` with `about` → `City` (Ocean City, MD), `Service` with `areaServed` Ocean City and West Ocean City, `BreadcrumbList`, `FAQPage`; the sitewide `ProfessionalService` carries the address only if it is public (assumption A1).
- **Images needed:** Ocean City photos we shoot (off-season boardwalk, the Route 50 bridge, the inlet) `[[NEEDS: photo shoot]]`; one shoulder-season photo; static map; the lead's portrait.

### 9.9 Hospitality and vacation rentals

- **URL:** `/industries/hospitality-vacation-rentals/`
- **Title tag:** `Ocean City Hotel & Vacation Rental Marketing | Media Masters`
- **Meta description:** `Direct-booking websites, Google listings, email and ads for Ocean City hotels and rental managers. Starting prices shown, month to month, same-day replies.`
- **H1:** Marketing for Ocean City hotels and vacation rentals
- **H2 outline:**
  1. The Ocean City lodging market now (7,166 active short-term rental listings, Aug 2026; supply down 21.3% year over year; both via 04, with source and date)
  2. Direct bookings and online travel agency fees
  3. Hotel and rental websites that book on a phone
  4. For rental managers: owner recruitment and guest marketing
  5. Google Business Profile and Google's vacation-rental listings
  6. Email and text to past guests (who owns the list: you do)
  7. Search ads and retargeting in the booking window
  8. A lodging marketing calendar (season-end owner reviews, January to April site work, pre-Memorial Day launch)
  9. Bethany, Rehoboth and Salisbury properties (short; the other towns in this page's cluster)
  10. Packages and starting prices
  11. Proof
  12. Questions
- **Word count:** 1,600
- **Keyword cluster (owned):** hotel website design ocean city md (r64); vacation rental website design ocean city md (r66); hotel marketing agency ocean city md (r171); hotel marketing ocean city md (r215); hotel marketing agency salisbury md (r216); vacation rental marketing ocean city md (r217); vacation rental marketing salisbury md (r218); vacation rental marketing worcester county md (r244); vacation rental marketing bethany beach de (r263); hotel marketing agency rehoboth beach (r273); short term rental marketing ocean city md (r278)
- **Internal links (3):** `/blog/vacation-rental-direct-bookings-ocean-city/`, `/locations/ocean-city-md/web-design/`, `/services/email-sms-marketing/`
- **Proof block:** a hospitality client's booking numbers before and after, with dates `[[NEEDS]]`; until then, the sourced market facts, the direct-booking checklist and a phone speed test of a consenting property's booking page.
- **FAQ (6):** Can you work with our existing booking system? `[[NEEDS: which systems we support]]` · How do we get more direct bookings and pay fewer platform fees? · When should we start marketing for next summer? · Do you work with individual owners or only managers? · What do you do for us in the off-season? · Who owns our guest email list?
- **CTA:** "Book a 15-minute call"; "Check my booking site free" (once the tool ships).
- **Schema:** `WebPage`, `Service` (`audience` lodging businesses, `areaServed`), `FAQPage`, `BreadcrumbList`.
- **Images needed:** photos of a client property with permission, or our own shoot of Ocean City lodging streetscapes; a phone screenshot of a booking flow.

### 9.10 Free website audit tool

- **URL:** `/free-website-audit/`
- **Title tag:** `Free Website Audit for Delmarva Businesses | Media Masters`
- **Meta description:** `Check your website free: phone speed, page weight, headings, local business details and accessibility basics, scored in plain English in about a minute.`
- **H1:** Free website audit for Delmarva businesses
- **H2 outline:** Run your audit (URL; email optional) · What we check, and the bar for each · How the score works · Refresh or redesign? (a verdict from the scores) · Do you still need a website if you have a Google Business Profile? · What to do next (fix it yourself with the checklist, or book a walkthrough) · Our own site's score on the same test · What we store and for how long · Questions
- **Word count:** 800, plus the tool
- **Keyword cluster (owned):** do i need a website if i have a google business profile (r88); website refresh vs redesign (r90). `[[NEEDS: keyword pass: "free website audit", "website speed test", "seo audit ocean city md"; none in keywords.csv]]`
- **Internal links (3):** `/scoreboard/`, `/services/web-design/`, `/services/accessible-websites/`
- **Proof block:** our own home page run through the tool, with its result shown; the published method (every check and its threshold).
- **FAQ (6):** Is it really free? · Will a salesperson call me? (No. Section 10.9's rule is printed here.) · What do you do with my email? · Does a good score mean my site is ADA compliant? (No: automated checks catch only part of WCAG, 03 §7.3, and this is not legal advice.) · How accurate is the speed result? · Can I check any public website?
- **CTA:** "Run my audit"; on the result screen, "Book a 15-minute call to go through it".
- **Schema:** `WebApplication` (`applicationCategory` "BusinessApplication", `offers` price 0), `FAQPage`, `BreadcrumbList`.
- **Images needed:** a screenshot of a sample report; no photos required.
- **Sprint:** 4 (section 13 explains why it is the one money page not in sprint 1).

### 9.11 Short briefs for every other page

Word counts are body copy, excluding nav and footer. Every service page uses the section 3 "common to every row" elements; every town and service-in-town page uses 6.3 and 6.4; every industry page uses section 7. "(C)" means conditional (section 13).

**Keyword exemptions:** only legal pages (`/terms/`, `/privacy/`, `/accessibility/`, and `/what-you-own/`, the plain-English summary of our terms that an attorney reviews), `noindex` pages and the 404 page carry no keyword. The `noindex` pages are `/thanks/`, audit reports, and the pages for which `keywords.csv` has no fitting term (rule 5 in 6.1): `/about/[owner-slug]/`, `/scoreboard/`, `/services/print-design/`, `/services/public-relations/`, `/services/reputation-management/`, `/services/website-chat-assistant/` and `/careers/`. Their candidate search phrases are listed in the cluster column for the keyword pass (decision 23), which moves a page to `index, follow` and into the sitemap once it has a researched term. **Every other indexable page owns at least one `keywords.csv` term, named with its row.**

**Provisional clusters on the two client case-study slots.** `/work/[client-2-slug]/` and `/work/[client-3-slug]/` hold one question each, taken from the industry pages a first client is most likely to come from. When the client is known, the slot swaps its question for one from that client's own industry cluster; if a slot is not built, its question returns to the page named in brackets.

| URL | Title tag (60 or fewer) | H1 | Keyword cluster (owned; name and CSV row) | Words | CTA | Sprint |
|---|---|---|---|---|---|---|
| `/thanks/` (noindex) | `Thanks, We Got Your Message \| Media Masters Group` | Thanks. [Lead first name] will reply by [time]. | Exempt (noindex utility page) | 150 | Book a 15-minute call | 1 |
| `/about/[owner-slug]/` (noindex, follow) | `[Owner Name], [Title] \| Media Masters Group` | [Owner name], [title] at Media Masters Group | None (rule 5): the owner's name is a brand query that `/about/` answers. Candidate for the keyword pass: the owner's name | 500 | Book a call with [first name] | 1 |
| `/what-you-own/` | `What You Own and How to Cancel \| Media Masters Group` | What you own, and how to cancel, in plain English | Exempt (legal page: plain-English terms). Candidates for the keyword pass: "marketing agency contract", "who owns my website" | 600 | See prices | 1 |
| `/terms/` | `Terms of Service \| Media Masters Group` | Terms of service | Exempt (legal page) | 1,500 or fewer | none | 1 |
| `/privacy/` | `Privacy Policy \| Media Masters Group` | Privacy policy | Exempt (legal page) | 800 | none | 1 |
| `/accessibility/` | `Accessibility Statement \| Media Masters Group` | Accessibility statement: WCAG 2.2 AA | Exempt (legal page: compliance statement) | 400 | Report a barrier | 1 |
| `404` (noindex) | `Page Not Found \| Media Masters Group` | We couldn't find that page | Exempt (404 page) | 100 | Search, home, contact | 1 |
| `/services/` | `Marketing Services on Delmarva, With Prices \| Media Masters` | Marketing services for Delmarva businesses, priced up front | delmarva digital marketing (r133) | 700 | See prices | 2 |
| `/services/web-design/starter-website/` (C) | `Small Business Starter Website, Fixed Price \| Media Masters` | A fixed-price starter website for Delmarva small businesses | how long does it take to build a website for a small business (r86) | 900 | Book a 15-minute call | 2 |
| `/services/website-care-plans/` (C) | `Website Care & Hosting Plans on Delmarva \| Media Masters` | Website hosting and care plans for Delmarva businesses | website maintenance delmarva (r34); website maintenance near me (r59); website maintenance packages maryland (r73) | 1,000 | See care plan prices | 2 |
| `/services/accessible-websites/` (C) | `Accessible (ADA & WCAG) Websites in Maryland \| Media Masters` | Accessible websites for Maryland and Delaware businesses | ada compliant website design maryland (r76); does my website need to be ada compliant (r89) | 1,200 | Check my site free | 2 |
| `/services/ai-search-optimization/` (C) | `AI Search Optimization for Delmarva \| Media Masters Group` | AI search optimization for Delmarva businesses | ai seo agency near me (r163); generative engine optimization maryland (r164); ai search optimization delaware (r165) | 1,100 | Book a 15-minute call | 2 |
| `/services/google-business-profile/` (C) | `Google Business Profile Management \| Media Masters Group` | Google Business Profile management for Delmarva businesses | google business profile optimization eastern shore (r131); google business profile optimization near me (r162); google business profile optimization delaware (r167); google business profile management service (r187) | 1,000 | Check my site free | 2 |
| `/services/paid-ads/` (C) | `Google Ads & PPC Management on Delmarva \| Media Masters` | Google Ads, Microsoft Ads and paid social for Delmarva businesses | google ads agency near me (r229); ppc company near me (r235) | 1,100 | Book a 15-minute call | 2 |
| `/services/social-media-management/` (C) | `Social Media Management on Delmarva \| Media Masters Group` | Social media management for Delmarva businesses | social media marketing near me (r227); social media manager near me (r228); delmarva social media marketing (r253); should i hire a freelance social media manager or an agency (r283) | 1,100 | See social prices | 2 |
| `/services/email-sms-marketing/` (C) | `Email & SMS Marketing on Delmarva \| Media Masters Group` | Email and text marketing for Delmarva businesses | email marketing agency near me (r236); email marketing eastern shore md (r247) | 900 | Book a 15-minute call | 2 |
| `/services/branding-logo-design/` (C) | `Logo Design & Branding on the Eastern Shore \| Media Masters` | Logo design and branding for Eastern Shore businesses | logo design near me (r230); branding agency near me (r234); branding agency eastern shore md (r246) | 900 | See logo prices | 2 |
| `/services/graphic-design/` (C) | `Graphic Design for Delmarva Businesses \| Media Masters` | Graphic design for Delmarva businesses | graphic designer near me (r231) | 800 | Book a 15-minute call | 2 |
| `/services/print-design/` (C; noindex, follow) | `Print & Rack Card Design on Delmarva \| Media Masters` | Print design for Delmarva businesses, from rack cards to banners | None (rule 5): every print term in `keywords.csv` names a town and belongs to a town page (r213, r277, r214). Candidates for the keyword pass: "rack card design", "print design eastern shore" | 800 | See print prices | 2 |
| `/services/video-photo-drone/` (C) | `Video, Photo & Drone on Delmarva \| Media Masters Group` | Video, photography and drone work on Delmarva | video production company near me (r232); drone videographer near me (r233); delmarva video production (r250); delmarva drone services (r251); do you need a part 107 license to fly a drone for real estate in maryland (r286) | 1,100 | Book a 15-minute call | 2 |
| `/services/marketing-strategy/` (C) | `Seasonal Marketing Plans for Delmarva \| Media Masters` | A 12-month marketing plan for seasonal Delmarva businesses | how to market a seasonal business in the off season (r185), answered by an H2 "Your off-season plan" inside the season plan | 900 | Book a 15-minute call | 2 |
| `/services/public-relations/` (C; noindex, follow) | `Public Relations for Delmarva Businesses \| Media Masters` | Public relations and local press for Delmarva businesses | None (rule 5): no PR term in `keywords.csv`. Candidates for the keyword pass: "public relations ocean city md", "pr firm salisbury md" | 900 | Book a 15-minute call | 2 |
| `/services/reputation-management/` (C; noindex, follow) | `Review & Reputation Management, Delmarva \| Media Masters` | Review and reputation management for Delmarva businesses | None (rule 5): no reputation term in `keywords.csv`. Candidates for the keyword pass: "reputation management ocean city md", "review management salisbury md" | 900 | Book a 15-minute call | 2 |
| `/services/website-chat-assistant/` (C; not built by default; noindex, follow if built) | `Website Chat Assistant With a Human Hand-Off \| Media Masters` | A website chat assistant that hands off to a person | None (rule 5): no chatbot term in `keywords.csv`. Candidates for the keyword pass: "website chatbot", "ai receptionist small business" | 800 | Book a 15-minute call | 2 |
| `/work/` | `Case Studies: Delmarva Marketing Results \| Media Masters` | Case studies from Delmarva businesses, with the numbers | best marketing agency eastern shore maryland (r129) (rule 3: a "best" searcher wants evidence; the buyer's checklist owns the other "best" terms) | 400 | Book a 15-minute call | 2 |
| `/work/media-masters-site-build/` | `Case Study: Building a Sub-1 MB Agency Site \| Media Masters` | Case study: how we built our own site to load in 2.5 seconds on a phone | wordpress vs wix vs squarespace for small business (r87), answered by an H2 "Why we did not use WordPress, Wix or Squarespace", with the measured trade-offs from our own build | 1,000 | Check my site free | 2 |
| `/work/[client-2-slug]/` (C) | `Case Study: [Client], [Town] \| Media Masters` | Case study: [result] for [client] in [town], [state] | Provisional: how to use email marketing to get repeat hotel and vacation rental guests (r285) (returns to `/blog/vacation-rental-direct-bookings-ocean-city/` if the slot is not built) | 800 | Book a 15-minute call | 2 |
| `/work/[client-3-slug]/` (C) | `Case Study: [Client], [Town] \| Media Masters` | Case study: [result] for [client] in [town], [state] | Provisional: how to market a restaurant in a beach town (r289) (returns to `/industries/restaurants-bars/` if the slot is not built) | 800 | Book a 15-minute call | 2 |
| `/reviews/` | `Media Masters Group Reviews \| Delmarva Marketing` | Reviews from Delmarva businesses we've worked with | seo company salisbury md reviews (r189) (rule 3; conflict C11). Our brand query, "media masters group reviews", is added in the keyword pass | 400 | Book a 15-minute call | 2 |
| `/locations/` | `Areas We Serve on Delmarva \| Media Masters Group` | Areas we serve across Worcester, Wicomico and Sussex counties | web design worcester county md (r27); marketing agency worcester county md (r125); social media marketing worcester county md (r243) | 600 | Find your town | 3 |
| `/locations/salisbury-md/web-design/` (C) | `Web Design in Salisbury, MD \| Media Masters Group` | Web design for Salisbury, MD businesses | web design salisbury md (r11); website design salisbury md (r12); web developer salisbury md (r13); website company salisbury md (r14); wordpress developer salisbury md (r15); ecommerce website design salisbury md (r16); website maintenance salisbury md (r17); website redesign salisbury md (r18); web design wicomico county md (r28); small business website design salisbury md (r63); shopify developer salisbury md (r70); wordpress maintenance plans salisbury md (r74); web design delmar md (r96); who builds websites in salisbury maryland (r297) | 1,000 | Book a 15-minute call | 3 |
| `/locations/salisbury-md/seo/` (C) | `SEO Company in Salisbury, MD \| Media Masters Group` | SEO for Salisbury, MD businesses | seo company salisbury md (r111); seo services salisbury md (r112); local seo salisbury md (r113); ai search optimization salisbury md (r114); google business profile optimization salisbury md (r115); seo company wicomico county md (r127) | 1,000 | Check my site free | 3 |
| `/locations/salisbury-md/google-ads/` (C) | `Google Ads Management in Salisbury, MD \| Media Masters` | Google Ads management for Salisbury, MD businesses | google ads management salisbury md (r198); ppc agency salisbury md (r200) | 900 | Book a 15-minute call | 3 |
| `/locations/salisbury-md/social-media/` (C) | `Social Media Management in Salisbury, MD \| Media Masters` | Social media management for Salisbury, MD businesses | social media marketing salisbury md (r194); social media management salisbury md (r196) | 900 | See social prices | 3 |
| `/locations/salisbury-md/graphic-design-branding/` (C) | `Graphic Design & Logos in Salisbury, MD \| Media Masters` | Graphic design, logos and branding for Salisbury, MD businesses | branding agency salisbury md (r204); logo design salisbury md (r206); graphic design salisbury md (r208); print design salisbury md (r214) | 900 | See logo prices | 3 |
| `/locations/ocean-city-md/web-design/` (C) | `Web Design in Ocean City, MD \| Media Masters Group` | Web design for Ocean City, MD businesses | web design ocean city md (r2); website design ocean city md (r3); web developer ocean city md (r4); website company ocean city md (r5); wordpress developer ocean city md (r6); ecommerce website design ocean city md (r7); website maintenance ocean city md (r8); website redesign ocean city md (r9); web design ocmd (r20); small business website design ocean city md (r62); website hosting and maintenance ocean city md (r75); web designer ocean city md (r291) | 1,000 | Book a 15-minute call | 3 |
| `/locations/ocean-city-md/seo/` (C) | `SEO Company in Ocean City, MD \| Media Masters Group` | SEO for Ocean City, MD businesses | seo company ocean city md (r101); seo services ocean city md (r102); local seo ocean city md (r103); ai search optimization ocean city md (r104); google business profile optimization ocean city md (r105); ocmd seo (r119); seo ocean city md (r292) | 1,000 | Check my site free | 3 |
| `/locations/ocean-city-md/social-media/` (C) | `Social Media Marketing in Ocean City, MD \| Media Masters` | Social media marketing for Ocean City, MD businesses | social media marketing ocean city md (r193); social media management ocean city md (r195); social media marketing ocmd (r237) | 900 | See social prices | 3 |
| `/locations/ocean-city-md/video-production/` (C) | `Video Production in Ocean City, MD \| Media Masters Group` | Video, photo and drone production in Ocean City, MD | video production ocean city md (r209); drone videography ocean city md (r211); video production ocmd (r238); can you fly a drone in ocean city md (r287), answered in the town FAQ (400 ft ceiling, the Assateague no-fly area, per the CSV basis note) | 900 | Book a 15-minute call | 3 |
| `/locations/ocean-city-md/graphic-design-print/` (C) | `Logo & Print Design in Ocean City, MD \| Media Masters Group` | Logos, graphic design and print for Ocean City, MD businesses | branding agency ocean city md (r203); logo design ocean city md (r205); graphic design ocean city md (r207); print design ocean city md (r213); rack card design ocean city md (r277) | 900 | See logo prices | 3 |
| `/locations/berlin-ocean-pines-md/` (C) | `Berlin, MD & Ocean Pines Web Design \| Media Masters Group` | Web design and marketing for Berlin, MD and Ocean Pines, MD businesses | web design berlin md (r23); website design berlin maryland (r24); website design ocean pines md (r25); web designer ocean pines (r26); marketing agency berlin md (r121); web design and marketing berlin maryland (r122); seo berlin md (r123); marketing company ocean pines md (r124); graphic design berlin md (r239); wedding videographer berlin md (r240); social media marketing berlin md (r241); marketing agency ocean pines md (r242) | 1,100 | Book a 15-minute call | 3 |
| `/locations/rehoboth-beach-lewes-de/` (C) | `Rehoboth Beach & Lewes, DE Web Design \| Media Masters` | Web design and marketing for Rehoboth Beach and Lewes, DE businesses | web design rehoboth beach de (r35); website design rehoboth beach (r36); web developer rehoboth beach de (r37); ecommerce website design rehoboth beach (r38); web design lewes de (r39); web developer lewes de (r40); wordpress developer lewes rehoboth (r41); ecommerce website design lewes de (r42); marketing agency rehoboth beach de (r136); seo company rehoboth beach (r137); digital marketing agency lewes de (r138); seo company lewes de (r139); local seo rehoboth beach (r166); social media marketing rehoboth beach de (r254); google ads agency rehoboth beach de (r255); ppc management lewes de (r256); logo design rehoboth beach de (r257); graphic design lewes de (r258); branding agency lewes de (r259); video production lewes de (r260); video production rehoboth beach de (r261) | 1,200 | Book a 15-minute call | 3 |
| `/locations/bethany-beach-fenwick-island-de/` (C) | `Bethany Beach & Fenwick Island, DE Marketing \| Media Masters` | Web design and marketing for Bethany Beach and Fenwick Island, DE | web design fenwick island de (r43); web design bethany beach de (r44); website maintenance bethany beach (r45); marketing agency bethany beach de (r140); seo bethany beach de (r141); marketing agency fenwick island de (r142); seo fenwick island (r143); wedding videographer bethany beach de (r262) | 1,000 | Book a 15-minute call | 3 |
| `/locations/sussex-county-de/` (C) | `Web Design & Marketing in Sussex County, DE \| Media Masters` | Web design and marketing for Sussex County, DE: Millsboro, Georgetown and Seaford | web design millsboro de (r46); web design sussex county de (r47); website design southern delaware (r48); web design seaford de (r49); web design company delaware beaches (r81); website maintenance salisbury de seaford (r93); marketing company millsboro de (r144); seo company sussex county de (r145); marketing agency sussex county de (r146); marketing agency seaford de (r147); seo seaford de (r148); social media marketing sussex county de (r264); marketing agency millsboro de (r265); social media marketing seaford de (r266); digital marketing sussex county de (r294) | 1,100 | Book a 15-minute call | 3 |
| `/locations/easton-cambridge-md/` (C) | `Easton & Cambridge, MD Web Design \| Media Masters Group` | Web design and marketing for Easton, MD and Cambridge, MD businesses | website design easton md (r52); web design cambridge md (r53); web design dorchester county md (r94); web design talbot county md (r95); marketing agency easton md (r149); seo company easton md (r150); digital marketing cambridge md (r151); seo cambridge md (r152); branding agency easton md (r267); social media marketing easton md (r268); video production easton md (r269); video production cambridge md (r270); marketing agency cambridge md (r295) | 1,000 | Book a 15-minute call | 3 |
| `/locations/pocomoke-snow-hill-md/` (C) | `Pocomoke City & Snow Hill, MD Marketing \| Media Masters` | Web design and marketing for Pocomoke City, MD and Snow Hill, MD | website design pocomoke city md (r50); web design snow hill md (r51); marketing pocomoke city md (r153); seo snow hill md (r154); google ads management pocomoke city md (r271); marketing agency snow hill md (r272) | 900 | Book a 15-minute call | 3 |
| `/locations/west-ocean-city-md/` (C) | `Marketing & Web Design, West Ocean City, MD \| Media Masters` | Marketing and web design for West Ocean City, MD businesses | web design west ocean city md (r21); web design agency west ocean city (r22); marketing agency west ocean city md (r120) | 900 | Book a 15-minute call | 3 |
| `/industries/` | `Industries We Market on Delmarva \| Media Masters Group` | Marketing for the industries that run Delmarva | law firm website design eastern shore md (r69) | 600 | Book a 15-minute call | 3 |
| `/industries/restaurants-bars/` (C) | `Restaurant & Bar Marketing, Ocean City, MD \| Media Masters` | Marketing for Ocean City restaurants and bars | restaurant website design ocean city (r65); restaurant marketing ocean city md (r172); restaurant marketing salisbury md (r219); restaurant marketing rehoboth beach (r274) | 1,200 | Check my site free | 3 |
| `/industries/amusements-attractions/` (C) | `Amusement & Attraction Marketing, Ocean City \| Media Masters` | Marketing for Ocean City amusements, attractions and events | ocean city md marketing for seasonal businesses (r170); tourism marketing agency eastern shore (r191). Candidates for the keyword pass: "amusement park marketing", "boardwalk business marketing", "attraction website design" (04 "Review gaps still open") | 1,200 | Book a 15-minute call | 3 |
| `/industries/golf/` (C) | `Golf Course & Golf Package Marketing \| Media Masters Group` | Marketing for Ocean City and Berlin, MD golf courses and golf packages | golf course marketing agency ocean city md (r298); golf course website design maryland eastern shore (r299); ocean city golf getaway marketing (r300); golf package marketing delmarva (r301); golf course social media marketing berlin md (r302) | 1,200 | Book a 15-minute call | 3 |
| `/industries/real-estate/` (C) | `Real Estate Marketing, Ocean City, MD \| Media Masters Group` | Marketing, video and drone for Delmarva real estate agents | real estate website design ocean city md (r67); real estate marketing sussex county de (r192); real estate marketing ocean city md (r220); real estate marketing salisbury md (r221); delmarva real estate photography and video (r252); how should realtors use video and drone footage to sell second homes (r290) | 1,200 | Book a 15-minute call | 3 |
| `/industries/medical-dental/` (C) | `Medical & Dental Marketing, Salisbury, MD \| Media Masters` | Marketing for medical and dental practices in Salisbury, MD and Delmarva | medical practice marketing ocean city md (r222); medical practice marketing salisbury md (r223); dental marketing eastern shore md (r249) | 1,200 | Book a 15-minute call | 3 |
| `/industries/home-services/` (C) | `Contractor & Home Services Marketing \| Media Masters Group` | Marketing for Delmarva contractors and home service businesses | contractor website design salisbury md (r68); home services marketing ocean city md (r224); home services marketing salisbury md (r225); hvac marketing salisbury md (r226); home services marketing eastern shore (r248) | 1,200 | Book a 15-minute call | 3 |
| `/how-to-choose-a-marketing-agency/` | `How to Choose a Marketing Agency on Delmarva \| Media Masters` | How to choose a marketing agency on the Eastern Shore | best web design company salisbury md (r79); best web design company ocean city md (r80); best marketing agency ocean city md (r106); best marketing agency salisbury md (r116); top digital marketing agencies salisbury md (r117); how to choose a marketing agency (r182); best digital marketing agency in ocean city maryland (r296) | 1,500 | Check my site free | 3 |
| `/free-website-audit/report/{id}/` (noindex) | `Your Website Audit Results \| Media Masters Group` | Your website audit results | Exempt (noindex generated report) | generated | Book a 15-minute call to go through it | 4 |
| `/reporting/` | `What's in Our Monthly Marketing Report \| Media Masters` | What you get in your monthly marketing report | how long does seo take to work (r186) | 900 | Book a 15-minute call | 4 |
| `/scoreboard/` (noindex, follow) | `Our Website Speed & Accessibility Scores \| Media Masters` | Our own website's speed and accessibility scores, live | None (rule 5): no speed-test term in `keywords.csv`; searchers for a speed check are served by the audit tool. Candidates for the keyword pass: "website speed test", "accessible website example" | 500 | Check my site free | 4 |
| `/blog/` | `Marketing Advice for Delmarva Businesses \| Media Masters` | Marketing advice for Delmarva business owners | how do ai overviews affect local businesses (r181), answered by the hub's opening section "How search changed for local businesses this year", which then links to every article | 500 | Check my site free | 4 |
| `/blog/how-much-does-a-website-cost/` | `How Much Does a Website Cost? Real Numbers \| Media Masters` | How much does a website cost? A plain-English breakdown | how much does a website cost (r82); how much does a website redesign cost (r85); how much does an ecommerce website cost (r91); what does a hotel website cost ocean city (r92) | 1,500 | See website prices | 4 |
| `/blog/website-maintenance-cost/` | `Website Maintenance Cost Per Month \| Media Masters Group` | How much does website maintenance cost per month? | how much does website maintenance cost per month (r84) | 1,200 | See care plan prices | 4 |
| `/blog/how-much-does-seo-cost/` | `How Much Does SEO Cost for a Small Business? \| Media Masters` | How much does SEO cost for a small business? | how much does seo cost for a small business (r175); how much does local seo cost (r184) | 1,300 | See SEO prices | 4 |
| `/blog/show-up-in-chatgpt/` | `Get Your Business Into ChatGPT Answers \| Media Masters` | How to get your business to show up in ChatGPT and AI answers | how do i get my business to show up in chatgpt (r177); what is generative engine optimization (r178); geo vs seo what's the difference (r179) | 1,400 | Check my site free | 4 |
| `/blog/rank-higher-on-google-maps/` | `How to Rank Higher on Google Maps \| Media Masters` | How to rank higher on Google Maps: a guide for local businesses | how to rank higher on google maps (r180) | 1,400 | Check my site free | 4 |
| `/blog/vacation-rental-direct-bookings-ocean-city/` | `More Direct Bookings for Ocean City Rentals \| Media Masters` | How to get more direct bookings for an Ocean City vacation rental | how to get more direct bookings for a vacation rental in ocean city (r284). (The email question, r285, is held by the `/work/[client-2-slug]/` slot and returns here if that slot is not built) | 1,300 | Check my booking site free | 4 |
| `/careers/` (C; noindex, follow) | `Careers at Media Masters Group \| Delmarva` | Work with Media Masters Group | None (rule 5): no job term in `keywords.csv`; openings are posted on Handshake for Salisbury University students and on job boards (04 authority table). Candidate for the keyword pass: "marketing jobs ocean city md" | 400 | Apply | 4 |

---

## 10. Conversion plan

### 10.1 First screen pattern (every page)

Measured against D3: on a phone, only 46% of D3's first screen is page content; the cookie banner, chat card and accessibility button cover 35.7%; no phone number appears on any mobile first screen (03 §3).

**Phone (390 x 664 CSS px), top to bottom:**
1. Sticky header, **64 px or less**: logo, a "Call" button (44 x 44 px, valid `tel:+1...` link), a "Text" button (`sms:` link), menu button.
2. H1 naming the service, industry or town, and the place.
3. One promise line with a fact: "From $[[NEEDS]] · A named person replies the same business day · Month to month."
4. Primary button "Book a 15-minute call"; secondary text link "See prices".
5. A one-line proof strip: the lead's photo (40 px) and name; our Google rating and count once there are 5+ reviews; before that, "Our own site: main content in [x] s on a phone, [y] KB" from the scoreboard.
6. Nothing opens on its own: no chat pop-up, no newsletter pop-up, no overlay widget. If a consent notice is legally required, it takes **15% of the screen or less**, never covers a button, and "Reject" is one tap (03 §3, §9 #2 standard).
7. **At least 65% of the first screen is page content** (03 §9 #1), checked by screenshot at launch.

**Desktop (1440 px):** the same order in two columns, a real local photo on the right, and the phone number as text in the header.

**Verification:** a five-second test with 5 people per money page; each must score 4 or 5 of 5 on "what, for whom, where, what next" (03 §2 standard).

### 10.2 The lead form: 4 fields, 1 required

D3 has 7 inquiry forms of 5 to 13 questions, with conflicting service lists and no HTML `required` attribute on any field (01 §5.1; 03b §5). Ours is one component on every page.

| # | Field | Type and rules | Required |
|---|---|---|---|
| 1 | Your name | `<input type="text" autocomplete="name">`, visible `<label>` "What should we call you?" | No |
| 2 | Email or mobile number | One field, validated server-side as an email address or a 10-digit US number; `inputmode="email"`; error text names the problem | **Yes** (`required`) |
| 3 | What do you need? | Checkboxes generated from the same service list as the nav (only SELL and SUB services), plus "Not sure yet" | No |
| 4 | Anything we should know? | `<textarea>`, 500-character limit | No |

- **Friction score by the 03b §5 method:** 4 visible questions + 1 required field = **5**, which meets 03b's "5 or less". D3's footer form scores 15 (03b §5). The form has exactly these 4 visible controls and nothing else: no consent tick-box, no newsletter tick-box, no "how did you hear" question. A fifth control would make the score 6.
- Real `required` attribute on field 2; accessible error messages tied with `aria-describedby`; visible labels, never placeholder-only labels (03 §7.4).
- **Hidden fields:** page URL, page town (from the page's front matter), UTM source, medium and campaign, `gclid` if present, and a timestamp.
- Button text: "Send to [lead first name]". Under the button: "A person replies the same business day. We never sell or share your details."
- **Spam protection:** Cloudflare Turnstile, loaded only when the visitor focuses the first field (01 §8 #19), plus a honeypot field hidden from everyone, including assistive technology.
- No "how did you hear about us" question: source comes from analytics and call tracking, and we ask on the call (D3 asks it three different ways, 03b §5).
- **Text messages and the form.** The form carries no text-message consent tick-box. A visitor who leaves a mobile number gets a phone call back, not a text, unless counsel confirms that a one-to-one text reply about their own message is allowed without a separate consent step `[[NEEDS: decision 19]]`. Visitors who want to text can use "Text us" in the header, which starts the conversation from their side. Consent for any marketing texts is collected separately, later, never on this form.

### 10.3 Booking link

- Primary CTA on every page: "Book a 15-minute call", linking to `/contact/#book`, which loads a hosted scheduler (Cal.com or Calendly `[[NEEDS: choice and account]]`) only on tap. No booking script on page load. D3 has no booking path (03b §4.3).
- Two event types: "15-minute intro call" and, from sprint 4, "30-minute audit walkthrough".
- Business hours only `[[NEEDS: hours]]`, a separate summer schedule `[[NEEDS: summer availability, decision 5]]`, 2-hour minimum notice, 15-minute buffers.
- **The booking form is a separate path with its own score.** Hosted schedulers such as Cal.com and Calendly always require a name and an email address, so the booking form cannot match the site form's "1 required field". It asks 3 things: name (required), email (required) and an optional "What do you need?" with the same service choices. By the 03b §5 method that is 3 visible questions + 2 required = **5**, which still meets "5 or less". Answers are prefilled from the site form when the visitor came from it.
- Confirmation and reminder emails come from the scheduler, signed by the lead.

### 10.4 Phone and text

- One local number on every page, every listing and in schema `[[NEEDS: the number; it must accept texts]]`. D3 uses four `tel:` formats, one with a space and one with non-breaking hyphens (01 §5.2); we use one E.164 format everywhere.
- Call tracking (CallRail or similar, PLAN §3 #6): the main number stays in the HTML, schema, Google Business Profile and every citation, so the NAP never changes. A tracking number swaps in only for visitors from paid ads.
- No `format-detection: telephone=no` meta tag (D3 sets it, 01 §2.2).
- "Text us" reaches a number a person reads during business hours; after hours, an auto-reply states when a person will answer. D3 offers prospects no text-us path (03b §4.3).

### 10.5 Chat decision

**No chat widget at launch.** D3's chat card opens on its own, covers the cookie buttons on phones, carries a robot avatar, adds three third-party hosts to every page, and is the only thing on the site that promises a reply time (03 §3, §4.6; 01 §5.3; 03b §1 #6). Our difference is that a named person answers. "Text us" in the header does the same job with no script on page load, and a one-person business cannot staff live chat in July.

If the owner wants chat later `[[NEEDS: decision 12]]`: staffed by a person during business hours and labelled as such; any bot says it is a bot and offers "text a person" and "book a call" in its first reply; the launcher is 48 px, loads only on tap, and never covers the H1 or a CTA (03b §9 #12; 03 §4.6 standard).

### 10.6 Response-time promise and thank-you flow

**Promise, identical on every form, the contact page, the confirmation page and the footer:** "Messages received by 3 pm ET on a business day get a reply from a person that day. Later messages get one by 10 am the next business day." `[[NEEDS: owner confirms the rule, business hours and holiday list]]`

**After submit:**
1. The visitor lands on `/thanks/` (noindex). It shows "Thanks, [name]. [Lead first name] will reply by [computed day and time]," with the lead's photo. If JavaScript is off, the form still posts and the Worker redirects.
2. "Want to skip the back-and-forth?" with the booking button.
3. "What happens next": (1) a personal reply by the promised time; (2) a 15-minute call to understand the job; (3) a written proposal with price, scope and timeline within `[[NEEDS: owner confirms, e.g. 2 business days]]` of the call.
4. While they wait: links to `/pricing/` and `/reporting/`.
5. An instant confirmation email repeating the reply-by time and a copy of what they sent, with no marketing content.

D3 shows nothing after submit in the crawl and states no reply time anywhere (01 §5.4; 03b §5).

### 10.7 Lead routing

1. The form posts to a Cloudflare Worker (no third-party form script).
2. The Worker validates, checks Turnstile, stores the lead with a timestamp (Cloudflare D1 or KV), and sends: an email to the named lead and a shared inbox `[[NEEDS: addresses]]`; a text alert to the lead's phone; a new CRM row `[[NEEDS: CRM choice, e.g. HubSpot free or a shared sheet]]` tagged with page URL, page town, services ticked, UTM, `gclid` and the computed reply-by time.
3. If no human reply is logged 2 business hours before the deadline, the Worker alerts the owner a second time.
4. Every reply time is logged. The monthly median and 95th percentile are published on `/reporting/` once 3 months of data exist (03b §9 #1).
5. Leads for services intake marks SUB go to the subcontractor only after the lead has replied first.
6. Audit-tool emails go to the same CRM tagged "audit" and are not contacted unless they ask (10.9).

### 10.8 Conversion measurement

Events: `form_submit` (with service and town), `booking_complete`, `call_click`, `text_click`, `price_view`, `audit_run`, `audit_email`, `audit_walkthrough_booked`, `outbound_gbp`. Leads by source reported monthly (PLAN §7).

### 10.9 Free audit tool specification

**Purpose.** A useful tool that earns links and leads without a sales trap. D3 promotes no lead magnet; its only audit checklist sits on a buried university-program intake page (03b §4.3). PLAN §5.1 lists a free instant audit as a lead and link magnet.

**Input:** website URL (required). Email (optional: "Send me this report and the fix checklist"). Business name and town (optional, only for the Google Business Profile check). Results show on screen with no email required.

**What it checks, and the bar for a pass** (the bars are our own standards, so our site passes its own test):

| Area | Check | Pass bar |
|---|---|---|
| Speed on phones | LCP, CLS, TBT and performance score from the Google PageSpeed Insights API (mobile strategy); real-user data shown when Google has it | LCP 2.5 s or better; CLS under 0.1; performance 90+ |
| Page weight | Total transfer size from the PageSpeed result | Under 1 MB |
| Phone basics | Viewport meta; tap targets; a working `tel:` link | All present |
| Findability | Title present and 60 characters or fewer; meta description present; exactly one H1; canonical; not `noindex`; `robots.txt` and an XML sitemap reachable | All pass |
| Local business details | `LocalBusiness` or a subtype with name, address or area served, telephone, `sameAs` | All present |
| Accessibility basics | Lighthouse accessibility score from the same run, failing rules listed in plain English | 90+ with no failing rule tagged critical. Caption: automated checks catch only part of WCAG (03 §7.3); not a legal opinion |
| Security and hygiene | HTTPS; HSTS header; no mixed content | All pass |
| AI readiness | `llms.txt` present; organization schema with `sameAs` | Present |
| Google Business Profile (optional) | Google Places API text search on name and town: whether a profile exists, its rating and count | Only if the owner approves the API spend `[[NEEDS: decision 15]]`; otherwise a manual checklist |

**Output:** a 0 to 100 score in plain-English groups, each check marked pass, needs work or fail, with one sentence on why it matters and one on how to fix it; our own site's live scores beside theirs; a "refresh or redesign?" verdict. A shareable result page at `/free-website-audit/report/{id}/` (noindex, expires after 30 days).

**Back-end protections (Cloudflare Worker):** fetches the submitted page server-side over **http or https only**; **refuses private, loopback, link-local and other local IP ranges** (checked after DNS resolution and again after every redirect); **10-second timeout; 5 MB response cap; 5 redirects at most**; parses the HTML; calls PageSpeed Insights `[[NEEDS: Google API key]]`. **Results are cached 24 hours per URL** in Workers KV. PageSpeed returned **HTTP 429** during the D3 research (02 §9.1), so the tool queues requests and, when the speed test is busy, shows the other checks at once and fills in speed when it is ready, by refresh or by email.

**Abuse limits:** Turnstile before every run; **5 audits per IP per hour**; no auditing of our own admin paths or non-public hosts.

**Privacy:** we store the URL, scores, timestamp and the email if given. Audits without an email are deleted after 30 days; with an email, after 90 days unless the person becomes a client. Stated on the page and in `/privacy/`.

**Publishing rule:** **we never publish third-party scores.** Results are private to the person who ran them; the tool never shows, stores for display or publishes any other business's or any competitor's results on our site. Any aggregate study uses anonymized, aggregated numbers only.

**Sales rule:** nobody is phoned or emailed beyond the report itself unless they book or reply. This promise is in the tool's FAQ.

**Link earning:** publish the method (every check and threshold); offer the tool to the SBDC and the chambers for their members (04 authority table); a quarterly anonymized summary of public Delmarva business sites can become a press story (PLAN §6.3, §6.4).

**Front-end budget:** the page is static; the tool's script is under 30 KB and loads when the URL field is focused.

---

## 11. Proof and review engine

### 11.1 Getting to 25 Google reviews in 90 days

PLAN sets 25 Google reviews by day 90, 60 by day 180 and 120 by day 365 (PLAN §1), about 2 a week (PLAN §6.2). PLAN §8's timeline asks for more, sooner: 10 reviews by week 4 and 25 by weeks 5 to 6. The two cannot both hold, and at the request rate below PLAN §8's dates cannot be met by an agency that starts with no clients. **We use day 90 as the standard** (standards table) and ask the owner to update PLAN §8 to match. D3's Google rating is unknown because it was never checked (02b §3), so we never cite it. D3 has 0 Clutch reviews (02b §3), which makes Clutch the first place we can be visibly ahead.

**The math (conservative).** We assume about **1 review for every 3 honest requests** (assumption A9), at every stage, and track the real rate from week 1. A "request" is one person asked once, with the single reminder in the routine below; asking the same person twice does not count as two requests. 25 reviews need about 75 requests to people who really received work from us. **The 25-by-day-90 target depends on the client list asked for in intake** (`intake.md` → Proof; decision 8) and, above all, on how many paid milestones we complete in weeks 3 to 13.

| Weeks | Who is asked (all real customers) | Requests | Reviews (1 in 3) | Running total |
|---|---|---|---|---|
| 0 to 2 | Past and current clients from intake `[[NEEDS: names]]`, asked by a personal text from the owner on the day the Google Business Profile is verified. One request per name: 3 names give 1 review, 6 names give 2 | 6 | 2 | 2 |
| 3 to 6 | Launch-period clients at each completed milestone (starter sites, profile setups, care plans, ad accounts) | 27 | 9 | 11 |
| 7 to 13 | Ongoing clients at each milestone; people who received a real paid service | 42 | 14 | 25 |
| **Total** | | **75** | **25** | |

**Day-45 check.** The running total should be about 11 by week 6. If it is under 7, the owner chooses between (a) widening the honest ask list to everyone the owner has done real work for, or (b) one or two pro-bono projects for local nonprofits (real work, real reviews), and the paid-search bridge carries more lead flow (PLAN §9).

**Fallback (decision 8).** If intake lists **fewer than 3 clients**, the 90-day target drops to **12**, the review count is **hidden on the site until it reaches 5**, and paid search carries more of the lead load (PLAN §6.7, §9). Why 3: fewer than 3 names is the clearest early sign that there will also be few launch-period clients, and at 1 in 3, 12 reviews still need about 36 honest requests in 90 days. The same fallback applies if the day-45 total is under 7 and neither option above closes the gap.

**The routine at every completed milestone:**
1. Same day: the person who did the work sends a personal text with the short Google review link and one open question ("What did we work on together, and what's your business?"). No script, no suggested wording.
2. Day 3 to 5: one email reminder with the same link. No third ask.
3. A client who had a problem gets a call, not a review request.
4. Every review gets a reply within 24 hours, by name (standards table).
5. Every ask is logged (date, platform, date posted). Weekly tally in the owner's Monday update; monthly in the report (PLAN §7).

**Never, under any circumstances:** discounts, gifts, entries or "founding client" prices tied to a review; reviews from staff, family or friends who were not customers; review gating (asking only happy clients); review stations or posting from our office network; buying or swapping reviews. Any of these can remove every review we have (PLAN §9).

**Other platforms.** Clutch: ask business-to-business clients for a Clutch-verified review; target 5+ in year one (02b §3 standard). Facebook recommendations may be requested the same way. **Yelp: claim the listing and keep it accurate, but never ask anyone for a Yelp review**, because Yelp's own rules discourage soliciting reviews. **This corrects PLAN §6.2**, which suggested routing some reviews to Yelp.

**Where reviews show on our site:** `/reviews/` (indexable; every review dated, named as the reviewer chose, linked to its source); the proof strip on every page once there are 5+; matching quotes on service and town pages. Shown as text; no `AggregateRating` or `Review` markup about ourselves.

### 11.2 Case study format

D3: 1 of 28 case studies states a growth result from D3's work in numbers (Visiting Angels, whose caregivers and clients went "from 100 to 200", a before-and-after figure) and 1 more a lead-capture rate (Primo) (01b §3.1). None shows a visible date or before-and-after screenshots or speed scores, and 27 of 28 give no timeline; Visiting Angels gives "first six months" with no dates (01b §3.3).

1. **H1:** "[Result] for [client] in [town], [state]" (only after the client signs off on the number).
2. **At-a-glance box:** client, industry, town, services used (linked), dates (kickoff, launch, "results as of").
3. **The problem, with a number** ("calls from Google fell from X to Y between [dates]").
4. **What we did,** step by step, with dates.
5. **Results:** at least 2 metrics, each baseline → after, with the measurement window and the data source (GA4, Google Business Profile insights, booking engine, call tracking).
6. **Before and after:** phone screenshots, plus mobile Lighthouse scores and page weight for any website work.
7. **Quote:** a named person and job title, with written permission on file.
8. **What it cost:** the package name and price band, if the client agrees (D3 and the Salisbury agencies found publish no prices, 04 Summary 8).
9. **Links:** each service used, the town page, the industry page and one related article; each links back.
10. **Visible dates** (published; results as of) and **client sign-off filed before publishing.**
11. **Schema:** `Article` with `about` the client `Organization`; no `Review` markup. Video, if any, with transcript and `VideoObject`.

### 11.3 What we publish on day one with no clients

| Proof | Page | Why a buyer believes it |
|---|---|---|
| Our own live speed and accessibility scores, re-measured on every deploy | `/scoreboard/`, the proof strip | Anyone can re-test them; D3's mobile performance is 38 to 54 (02 §9.1) |
| Case study 1: building our own site, with a dated build log and before-and-after numbers | `/work/media-masters-site-build/` | Real numbers we control |
| Every starting price and package | `/pricing/`, every service page | D3 and the Salisbury agencies found publish no prices (04 Summary 8) |
| The process and timeline for every service | each service page | D3 publishes none (01 §3) |
| The owner: name, photo, bio, LinkedIn, direct line `[[NEEDS]]` | `/about/`, the owner page, every page footer | D3 names only its founder, once (03b §1 #9) |
| Plain-English terms and ownership | `/what-you-own/`, `/terms/` | Answers the 3-year auto-renewing Terms directly (03b §3.2) |
| The free audit tool and its published method | `/free-website-audit/` (sprint 4) | Useful before any sale |
| A sample monthly report (clearly labelled sample data) | `/reporting/` | D3 shows no report (03b §7) |
| Accessibility statement with WCAG 2.2 AA, test date and results | `/accessibility/` | D3's statement names no standard, and its pages fail 910 automated checks (03 §7.1, §7.3) |
| Quarterly AI-answer test (method, prompts, dated results, whoever is named) | a quarterly article (01b §7 #11; PLAN §6.6) | Evidence, not claims |
| Memberships and real certifications, each linked to a verifiable listing | `/about/`, footer | Only once joined or earned `[[NEEDS]]`; no platform logos implying partnership (02b §4) |

---

## 12. Technical specification

### 12.1 Stack

- **Astro, static output, deployed on Cloudflare Pages** (PLAN §5.3), in a new repository `media-masters-site`, unless intake names an existing site or platform `[[NEEDS: existing site?]]`.
- Plain HTML and CSS output. JavaScript only for form validation, the audit tool and the mobile menu, each loaded on interaction.
- Cloudflare Workers (Pages Functions) for the form, lead routing and the audit tool; Turnstile for spam; D1 or KV for storage and rate limits.
- Content in Markdown files with typed front matter (title, meta description, H1, owned keywords with CSV rows, town, FAQ items, schema type), so the build can check every rule in this blueprint.
- No WordPress, no page builder, no runtime CMS to patch (01 §7: D3 runs WordPress with Bootstrap loaded twice and a custom forms plugin).

### 12.2 URL structure

- Lowercase, hyphenated, trailing slash, no dates, no file extensions: `/services/{service}/`, `/locations/{town}-{state}/`, `/locations/{town}-{state}/{service}/`, `/industries/{industry}/`, `/work/{client}/`, `/blog/{slug}/` (PLAN §6.1).
- A state abbreviation in every town slug (04 Method).
- No URL more than three folders deep, and every page within 3 clicks of home (02 §2.2, §6.4 standard; D3's posts sit at a median depth of 8, 02 §6.1).
- One host (apex `mediamastersgroup.com` assumed, PLAN §3 #2 `[[NEEDS: domain bought]]`); `www` 301s to apex; uppercase and no-slash variants 301 to the canonical (02 §2.4 standard).
- Internal links point at final URLs only; the build fails on any internal link that redirects or 404s.

### 12.3 Performance budget (every template, mobile)

| Metric (mobile, Lighthouse simulated throttling unless stated) | Our budget | D3 measured (02 §9.1, §9.2) |
|---|---|---|
| Lighthouse performance, accessibility, best practices, SEO | **Target 95+ on all four; build gate 90** (standards table) | Performance 38 to 54; accessibility 77 to 84; best practices 75 to 79; SEO 92 |
| LCP | **2.5 s or better**; stretch 2.0 s on the home page | 3.6 s home; 15.1 to 30.3 s on 5 of 6 pages |
| Page weight | **Under 1 MB**; stretch under 500 KB on the home page | 4,215 to 8,166 KiB |
| CSS + JS | Under 100 KB compressed (PLAN §5.3) | About 1.47 MB of unused JavaScript on every tested page |
| Total Blocking Time (lab stand-in for responsiveness) | Under 200 ms | 1,000 to 2,050 ms |
| Interaction to Next Paint | **Under 200 ms, real-user data only**; not a lab budget | Not in corpus (no real-user data, 02 §12 #4) |
| CLS | Under 0.1 | 0.031 to 0.049 (D3's one strength; match it) |
| Requests | 30 or fewer | 90 to 108 on the tested pages |
| Third-party hosts | None above the fold; analytics deferred | 17 on every page, about 15 of them true third parties (01 §1 #8; 02 §9.2) |
| Images | AVIF with WebP fallback, `srcset` at rendered sizes, width and height set; the LCP image never lazy-loaded and given `fetchpriority="high"` (02 §7 standard) | Up to 3,680 KiB of image savings flagged (02 §7) |

Tooling: Lighthouse CI on every pull request (3 runs per template, median), covering the ten money pages and one page of every other template; a weekly run against production; Cloudflare Web Analytics for real-user Core Web Vitals; Search Console's Core Web Vitals report once there is traffic.

### 12.4 Accessibility bar

- **Zero critical or serious axe violations on every page,** checked in CI at 390 px and 1440 px on every build (03 §7.4 standard). D3: 910 failing elements on 30 pages, 34 critical and 641 serious, including unlabelled selects in its lead forms (03 §7.1; 01 §5.1).
- **No accessibility overlay script of any kind** (D3 runs accessiBe on all 157 pages and still fails, 03 §7.3).
- WCAG 2.2 AA: text contrast 4.5:1 (3:1 at 24 px and up); in-text links underlined; visible focus; visible labels on every control; targets 44 x 44 px; no skipped heading levels; body text 18 px on phones at weight 400 or heavier; every icon link and badge with an accessible name (03 §7.4, §4.6; 03b §8).
- Manual pass before launch with keyboard only, VoiceOver on iOS and NVDA on Windows, on the ten money pages; quarterly after.
- `/accessibility/` states the standard, the date of the last test, the results, known issues and a contact a person answers the same business day.

### 12.5 Schema plan

All JSON-LD is generated from one data file so the facts never drift, and validated with validator.schema.org and Google's Rich Results Test at build (PLAN §5.5). JSON-LD strings never contain HTML entities (D3 has `&amp;` in schema on 95 pages, 02 §8.4).

| Type | Where | Required properties |
|---|---|---|
| `ProfessionalService` (a `LocalBusiness` subtype), `@id` `https://[domain]/#business` | Full on home, by reference everywhere else | `name`, `legalName`, `url`, `logo`, `image`, `telephone` (E.164), `email`, `address` (only if public, A1), `geo`, `openingHoursSpecification`, `areaServed` (each live town as `City` plus the counties as `AdministrativeArea`), `sameAs` (Google Business Profile, Bing, Apple, Facebook, LinkedIn, Instagram, Clutch, chambers once joined), `founder` → `Person`, `priceRange` and `hasOfferCatalog` once prices exist. D3's node holds only name, URL and logo (02 §8.2) |
| `Service` | Every service, service-in-town and industry page | `name`, `serviceType`, `provider` → `#business`, `areaServed`, `offers` with `PriceSpecification` once prices exist; `audience` on industry pages |
| `FAQPage` | Every page with an FAQ | Exactly the questions shown on the page. Google shows FAQ rich results for few sites now; the markup still states answers clearly for Bing and AI assistants |
| `BreadcrumbList` | Every page except home | Numeric `position` values and the full trail (D3 uses strings and skips levels, 02 §8.4) |
| `Person` | `/about/[owner-slug]/` and as author on articles | `name`, `jobTitle`, `image`, `url`, `worksFor` → `#business`, `sameAs` (LinkedIn) |
| `Article` / `BlogPosting` | Articles and case studies | `headline` (no brand suffix, not truncated), `author` → `Person`, `datePublished`, `dateModified` (changes only when content does), `image` |
| `WebSite`, `WebPage`, `ContactPage`, `AboutPage` | Matching pages | Standard properties |
| `WebApplication` | `/free-website-audit/` | `applicationCategory`, `offers` price 0 |
| `VideoObject` | Any page with our video | Real `description`, `uploadDate`, `duration`, `thumbnailUrl`, transcript on the page (01b §4.1 standard) |
| **Not used** | Anywhere about ourselves | `AggregateRating`, `Review` (standards table) |

Sketch of the sitewide node (placeholders, not facts):

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://[[NEEDS: domain]]/#business",
  "name": "Media Masters Group",
  "legalName": "[[NEEDS: legal name after the trademark check]]",
  "telephone": "[[NEEDS: +1XXXXXXXXXX]]",
  "email": "[[NEEDS]]",
  "address": "[[NEEDS: PostalAddress, or omit for a service-area business]]",
  "areaServed": ["Worcester County, MD", "Wicomico County, MD", "Sussex County, DE", "Talbot County, MD", "Dorchester County, MD"],
  "sameAs": ["[[NEEDS: Google Business Profile URL]]", "[[NEEDS: LinkedIn]]", "[[NEEDS: Facebook]]"],
  "founder": { "@id": "https://[[NEEDS: domain]]/about/[owner-slug]/#person" }
}
```

`areaServed` lists only the counties of towns intake confirms; remove any county intake rules out.

### 12.6 Analytics, call tracking and search consoles

- **Google Search Console and Bing Webmaster Tools verified by DNS on day one;** the sitemap submitted to both; an IndexNow ping on every deploy (PLAN §6.1).
- **Cloudflare Web Analytics** (no cookies) on every page, including real-user Core Web Vitals.
- **GA4** (PLAN §3 #6) loaded through Cloudflare Zaraz, so no analytics script runs in the browser on page load (assumption A14). If counsel says consent is needed, the notice follows the 15% rule (10.1).
- **Google Ads and Microsoft Ads conversions** through Zaraz on the section 10.8 events.
- **Call tracking:** CallRail or similar `[[NEEDS: account]]`, dynamic number swap for paid traffic only (10.4). Google Business Profile calls measured in its own call history; the profile's website link tagged `utm_source=gbp`.
- **Rank tracking** against d3corp.com on the 20 PLAN §7 terms, plus the map pack for the head terms from a phone-location grid in Ocean City and Salisbury `[[NEEDS: tool choice]]`.

### 12.7 llms.txt and robots.txt

- **`/llms.txt`:** a short Markdown file: who we are (one paragraph), NAP, hours, towns served, the five commitments, starting prices, and links to `/pricing/`, every service page, every town hub, `/what-you-own/` and `/about/`, each with a one-line description. Regenerated at build from the same data file as the schema.
- **`/robots.txt`:** allow all search crawlers. **AI search crawlers** (OAI-SearchBot, PerplexityBot, and Googlebot and Bingbot, which also feed AI answers) are explicitly allowed. **AI training crawlers** (GPTBot, Google-Extended, ClaudeBot, CCBot) are an owner decision `[[NEEDS: decision 20]]`; the default is allow (assumption A13). The file names the sitemap. D3's robots.txt states no AI policy either way (02 §2.6).

### 12.8 Sitemap

`@astrojs/sitemap` generates `/sitemap-index.xml` with indexable 200-status pages only. `/thanks/`, audit reports and any `noindex` page are excluded, and the build fails if a `noindex` page appears in the sitemap (D3 lists its `noindex` testimonials page, 02 §2.2). Pages for services marked NO, towns not in intake, and a West Ocean City page that failed its gate are not built at all. `lastmod` reflects real content changes only.

### 12.9 Redirects and headers

- **`/_redirects`:** `http` → `https`; `www` → apex; uppercase and no-slash variants → canonical; fallback domains (PLAN §3 #2) → apex; a short list of URLs people guess (`/contact-us/` → `/contact/`, `/request-a-quote/` → `/contact/`, `/services/websites/` → `/services/web-design/`). If an old site exists `[[NEEDS]]`, every old URL maps 1:1 to its closest new page with a 301, **never to the home page** (D3 sends 40 legacy URLs to its home page, 02 §2.5).
- A service marked NO returns 404 (not a redirect) and is absent from the nav, footer, form and sitemap.
- **`/_headers`:** HSTS, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy and Permissions-Policy on every response; long `Cache-Control` on hashed assets (01 §8 #20; D3 sends only Referrer-Policy, 01 §7).

### 12.10 Fonts

One family, self-hosted WOFF2, subset to Latin, at most two weights (400 and 700), `font-display: swap`, the body weight preloaded. Suggested: Atkinson Hyperlegible (open licence, designed for legibility) `[[NEEDS: owner brand choice]]`. D3 loads two font services (Adobe Typekit and Google Fonts) and at least three visible families (03 §4.2).

### 12.11 Video, maps and embeds

No YouTube or Vimeo iframe above the fold, ever. Below the fold, videos use a click-to-load facade (a poster image and a play button); the player loads only on click (02 §9.3 standard; D3 embeds full YouTube iframes on 51 pages, 01b §4.1). Maps are static images that link to Google Maps; no map iframe anywhere (standards table).

### 12.12 QA gates (every page, in CI and by a person)

From PLAN §5.5, plus the checks this blueprint adds:
- Lighthouse 90+ floor on all four mobile scores (95 target, reported); zero critical or serious axe violations; valid schema; zero broken or redirecting internal links.
- Exactly one H1 containing the page's lead keyword or town; title 60 characters or fewer and meta description 120 to 155, both unique; no `noindex` page in the sitemap.
- Location pages: localness score recorded, launch rule met (6.3), overlap guard under 30%, name-swap check passed.
- **Any `[[NEEDS` string in rendered HTML or JSON-LD fails the build.**
- **Keyword check:** every indexable page except the four legal pages names at least one owned `keywords.csv` row in its front matter, and no row is owned twice; otherwise the build fails. A page with no owned row must carry `noindex, follow` and stay out of the sitemap (rule 5 in 6.1); its candidate phrases are listed in the build report for the keyword pass.
- A `lorem` and placeholder grep; spelling; grade-8 reading level; the banned-phrase check (2.1); a no-ranking-promise check on body copy and FAQ answers; a price block present on service, town and industry pages; 3+ Delmarva towns named on generic service pages.
- One human read-through.

---

## 13. Build order: four sprints (PLAN §5.5)

PLAN §5.5 sets four sprints: (1) the money pages, weeks 2 to 3; (2) the remaining service pages and the first three case studies, weeks 3 to 4; (3) location and vertical pages, weeks 4 to 5; (4) the audit tool, blog launch with 6 articles and the reporting page, weeks 5 to 6. Off-site local work (Google Business Profile, Bing, Apple, citations, chamber applications, review requests) starts in week 0 and runs alongside every sprint, because it is what moves the map pack (PLAN §3, §6.2).

**Stated deviation: the ten money pages and sprint 1.** PLAN §5.5 names six money pages for sprint 1. This blueprint has ten money pages with full briefs (section 9). **Default:** nine of them ship in sprint 1. The Salisbury and Ocean City hubs move up from sprint 3 because 04 Summary 3 says to build Salisbury first and the Google Business Profile needs its Ocean City landing page from launch; the hospitality page moves up so it is live before the January-to-April buying window (04 seasonality). **The audit tool stays in sprint 4**, as PLAN §5.5 sets, because it needs the Worker, the PageSpeed API key and the abuse protections built and tested; its brief is ready now so its copy can be written early, and every "Check my site free" button stays hidden until it ships. The owner may keep PLAN's original order instead (decision 11).

**Sprint 1, weeks 2 to 3: the money pages and launch basics (16 pages)**

1. `/` (money page, full brief in 9)
2. `/contact/` (money page, full brief in 9)
3. `/thanks/` (noindex)
4. `/pricing/` (money page, full brief in 9)
5. `/services/web-design/` (money page, full brief in 9; C: web design SELL/SUB)
6. `/services/seo/` (money page, full brief in 9; C: SEO SELL/SUB)
7. `/about/` (money page, full brief in 9)
8. `/about/[owner-slug]/` (noindex, follow; rule 5)
9. `/locations/salisbury-md/` (money page, full brief in 9; C: Salisbury in intake towns)
10. `/locations/ocean-city-md/` (money page, full brief in 9; C: Ocean City in intake towns)
11. `/industries/hospitality-vacation-rentals/` (money page, full brief in 9; C: hospitality in intake industries)
12. `/what-you-own/`
13. `/terms/`
14. `/privacy/`
15. `/accessibility/`
16. `404` (noindex)

**Sprint 2, weeks 3 to 4: remaining service pages, first three case studies, reviews (22 pages)**

17. `/services/`
18. `/services/web-design/starter-website/` (C: web design SELL/SUB and owner approves a fixed-scope starter)
19. `/services/website-care-plans/` (C: hosting/care SELL/SUB)
20. `/services/accessible-websites/` (C: web design SELL/SUB and owner sells accessibility work)
21. `/services/ai-search-optimization/` (C: AI search SELL/SUB)
22. `/services/google-business-profile/` (C: SEO SELL/SUB)
23. `/services/paid-ads/` (C: ads SELL/SUB)
24. `/services/social-media-management/` (C: social SELL/SUB)
25. `/services/email-sms-marketing/` (C: email/SMS SELL/SUB)
26. `/services/branding-logo-design/` (C: branding SELL/SUB)
27. `/services/graphic-design/` (C: graphic design and print SELL/SUB)
28. `/services/print-design/` (C: graphic design and print SELL/SUB; noindex until the keyword pass)
29. `/services/video-photo-drone/` (C: video/photo/drone SELL/SUB)
30. `/services/marketing-strategy/` (C: intake "Other" lists strategy, or 2+ marketing services SELL)
31. `/services/public-relations/` (C: PR SELL/SUB; noindex until the keyword pass)
32. `/services/reputation-management/` (C: reputation SELL/SUB; noindex until the keyword pass)
33. `/services/website-chat-assistant/` (C: intake "Other" lists an AI chat product; NOT built by default; noindex if built)
34. `/work/`
35. `/work/media-masters-site-build/`
36. `/work/[client-2-slug]/` (C: a client with written permission)
37. `/work/[client-3-slug]/` (C: a client with written permission)
38. `/reviews/`

**Sprint 3, weeks 4 to 5: location, service-in-town and industry pages (26 pages)**

39. `/locations/`
40. `/locations/salisbury-md/web-design/` (C: Salisbury in intake towns; web design SELL/SUB; localness gate)
41. `/locations/salisbury-md/seo/` (C: Salisbury in intake towns; SEO SELL/SUB; localness gate)
42. `/locations/salisbury-md/google-ads/` (C: Salisbury; ads SELL/SUB; localness gate)
43. `/locations/salisbury-md/social-media/` (C: Salisbury; social SELL/SUB; localness gate)
44. `/locations/salisbury-md/graphic-design-branding/` (C: Salisbury; branding or graphic design SELL/SUB; localness gate)
45. `/locations/ocean-city-md/web-design/` (C: Ocean City; web design SELL/SUB; localness gate)
46. `/locations/ocean-city-md/seo/` (C: Ocean City; SEO SELL/SUB; localness gate)
47. `/locations/ocean-city-md/video-production/` (C: Ocean City; video SELL/SUB; localness gate)
48. `/locations/berlin-ocean-pines-md/` (C: Berlin or Ocean Pines in intake towns; localness gate)
49. `/locations/rehoboth-beach-lewes-de/` (C: Rehoboth or Lewes in intake towns; localness gate)
50. `/locations/bethany-beach-fenwick-island-de/` (C: Bethany or Fenwick in intake towns; localness gate)
51. `/locations/sussex-county-de/` (C: Sussex County towns in intake; localness gate)
52. `/locations/easton-cambridge-md/` (C: Easton or Cambridge in intake towns; localness gate)
53. `/locations/pocomoke-snow-hill-md/` (C: Pocomoke or Snow Hill in intake towns; localness gate)
54. `/locations/west-ocean-city-md/` (C: West Ocean City in intake towns AND passes the localness gate and the overlap guard against the Ocean City pages; otherwise never published and its terms move to /locations/ocean-city-md/)
55. `/locations/ocean-city-md/social-media/` (C: Ocean City; social SELL/SUB; localness gate; **lower-confidence**, 6.2: if it fails the gate or the owner prefers, its terms stay on the Ocean City hub)
56. `/locations/ocean-city-md/graphic-design-print/` (C: Ocean City; branding, graphic design or print SELL/SUB; localness gate; **lower-confidence**, 6.2: same fallback)
57. `/industries/`
58. `/industries/restaurants-bars/` (C: restaurants in intake industries)
59. `/industries/amusements-attractions/` (C: amusements in intake industries)
60. `/industries/golf/` (C: golf in intake industries)
61. `/industries/real-estate/` (C: real estate in intake industries)
62. `/industries/medical-dental/` (C: medical in intake industries)
63. `/industries/home-services/` (C: home services in intake industries)
64. `/how-to-choose-a-marketing-agency/`

**Sprint 4, weeks 5 to 6: audit tool, reporting, scoreboard, blog launch with six articles (11 pages)**

65. `/free-website-audit/` (money page, full brief in 9; ships with the noindex `/free-website-audit/report/{id}/` template)
66. `/reporting/`
67. `/scoreboard/` (noindex until the keyword pass)
68. `/blog/`
69. `/blog/how-much-does-a-website-cost/`
70. `/blog/how-much-does-seo-cost/`
71. `/blog/show-up-in-chatgpt/`
72. `/blog/rank-higher-on-google-maps/`
73. `/blog/vacation-rental-direct-bookings-ocean-city/`
74. `/blog/website-maintenance-cost/` (replaces the off-season article of the first draft, whose question now sits on `/services/marketing-strategy/`; conflict C13)
75. `/careers/` (C: intake shows hiring or a contractor network; noindex)


Off-site work and non-page items in sprint 1: the sitewide schema node, `robots.txt`, `llms.txt`, the sitemap, `_redirects`, `_headers`, the form Worker and lead routing, the booking link, analytics, and Search Console and Bing verification.

**Totals:** 75 pages (16 + 22 + 26 + 11). With every service sold and the chat page, careers, the two client case studies and West Ocean City not built, 70 pages go live, 63 of them indexable (section 5 lists the 7 `noindex` pages). Sprint 3 is the heaviest; within it, the 8 evidence-backed service-in-town pages go first and the 2 lower-confidence Ocean City pages last. A page that fails the localness gate does not ship in sprint 3 (6.2).

**After launch (backlog, not counted above):** one article a week (PLAN §6.3), starting with the 8 industry pillars (01b §7 #2) and an off-season marketing guide for Ocean City businesses; a Google Ads spend calculator; the keyword pass (decision 23), which can move the 5 `noindex` content pages into the index; a re-run of the 10 SERP consistency checks; and **the missing top-3 lookups: PLAN §4 acceptance criterion 3 (a current top-3 for at least 150 keywords) is still unmet, with 40 of 301 rows done, so at least 110 more queries are needed** (04 SERP consistency check; 04 Additions).

---

## 14. Top ten ways we beat D3

1. **Prices on every service page and `/pricing/` in the menu,** against no price anywhere except "$195/hr" in the Terms (01 §1 #4; 03b §3.1).
2. **Month-to-month terms in plain English,** against a 3-year auto-renewing term while the ads page says "No long-term commitments" (03b §3.2; 01 §3.1).
3. **A named person replies the same business day,** against a chat bot's "We respond immediately" as the only reply promise (01 §5.5; 03b §7).
4. **Book, call or text from the first phone screen,** against no booking path, no text-us path and no phone number on any mobile first screen (03b §4.3; 03 §3).
5. **Main content in 2.5 seconds or less and under 1 MB on a phone,** against 15 to 30 seconds on 5 of 6 tested pages and 4,215 to 8,166 KiB (02 §9.1).
6. **Zero critical or serious accessibility errors with no overlay,** against 910 automated failures on 30 pages, including the lead forms, with an overlay installed (03 §7.1, §7.3; 01 §5.1).
7. **Nine town pages plus ten service-in-town pages, each passing a localness test,** against no town page and no town in any of D3's 12 H1s (02 §10; 03b §2.3).
8. **Salisbury web design, SEO and Google Ads pages where D3 does not appear** in the snapshot results (04 snapshot table; 04 Top 20 #1–3).
9. **One 4-field form with a friction score of 5,** against 7 inquiry forms of up to 13 questions with no field required in HTML (01 §5.1; 03b §5).
10. **Proof with numbers and dates, and indexable reviews,** against 1 of 28 case studies stating a growth result from D3's work and a `noindex` testimonials page (01b §3.1; 02 §2.2).

---

## 15. Assumptions and owner decisions

### 15.1 Assumptions made because `intake.md` is empty

| # | Assumption | Where it is used | If it is wrong |
|---|---|---|---|
| A1 | Home base is Ocean City, MD (task brief), but whether there is a **public street address** or a **service-area business** is unknown | Schema `address`, Ocean City hub, Google Business Profile, footer | If service-area only: drop `address` from schema and footer and keep `areaServed`; the Ocean City copy changes from "based in" to "serving" |
| A2 | Brand "Media Masters Group"; legal name "Media Masters Group LLC" (task brief), pending the trademark check | Titles, schema, every listing | Retitle every page before launch; titles were written to fit 60 characters with "Media Masters" or "Media Masters Group" |
| A3 | Domain `mediamastersgroup.com` (PLAN §3 #2), not yet confirmed bought | URLs, schema `@id`, `llms.txt` | One config value |
| A4 | Every service line could be SELL or SUB, so every service page is specified; the AI chat assistant is NO | Section 3, sprint 2 | Pages for NO services are not built; their keywords return to Appendix A |
| A5 | The owner is the first named account lead | Commitment 4, contact and thanks pages | Swap the named person and photo |
| A6 | Business hours Monday to Friday, with the 3 pm cut-off | Reply promise, schema, Google Business Profile | Rewrite the promise to the real hours, including summer hours |
| A7 | Towns served are the 9 town hubs in 6.2 | Sprints 1 and 3 | Drop any town not driven to; its terms are listed as unowned until re-mapped |
| A8 | Industries wanted are the 7 in section 7 | Sprints 1 and 3 | Drop any not wanted |
| A9 | About 1 in 3 honest review requests becomes a Google review; the per-town split in 6.5 | Section 11.1 | Track the real rate from week 1; the fallback target of 12 applies |
| A10 | No existing website, so no redirect map beyond guessed URLs | 12.9 | Crawl the old site and map every URL 1:1 |
| A11 | Draft process timelines (website 4 to 8 weeks; starter site 10 business days after content) | Service pages, commitment 5 | The owner confirms or replaces each before copy is written |
| A12 | Projects billed by milestone; retainers month to month | Pricing, terms | Owner and attorney decide |
| A13 | AI training crawlers allowed by default | robots.txt | Block them if the owner prefers (decision 20) |
| A14 | Cookieless analytics plus GA4 through Zaraz; no cookie banner unless counsel says one is needed | 10.1, 12.6 | A consent notice that meets the 15% rule |
| A15 | One phone number that accepts texts | Header, NAP, schema | Remove the "Text" button |

### 15.2 Owner decision list, in priority order

The first nine block sprint 1; nothing can be published without them.

1. `[[NEEDS: trademark clearance]]` A registered mark "MM Media Masters" exists for advertising services (PLAN §3 #3, §9). Get an attorney's answer before money goes into the logo, signage, ads or the domain.
2. `[[NEEDS: business identity]]` Legal and brand name, domain, public street address or service-area business, the one phone number (and whether it takes texts), the one email, business hours. These go on every page and every listing and must never change.
3. `[[NEEDS: SELL / SUB / NO for each service line]]` Decides which of the 18 service pages under `/services/` exist (17 if the chat page stays unbuilt, as recommended), the nav, the form checkboxes, `/pricing/`, and whether PR is mentioned anywhere.
4. `[[NEEDS: starting prices and three packages]]` Websites, SEO and social first (03b §10 #8), then every service you sell. Market reference points are in 9.0; none is our price.
5. `[[NEEDS: named lead, the 3 pm / 10 am reply rule, and summer availability]]` Who answers in July, and the booking calendar's summer hours (03b §10 #9).
6. `[[NEEDS: approve month-to-month terms, the "What you own" page and milestone billing, with an attorney]]` (03b §3.2).
7. `[[NEEDS: owner name, title, bio, photo, LinkedIn]]` About, the author page, every footer.
8. `[[NEEDS: list of past and current clients who will review, and any who allow a case study with numbers]]` Three or more names keep the 25-review target; fewer than three switches to the fallback of 12 (11.1).
9. `[[NEEDS: towns you will drive to, and a named meeting spot in each]]` Decides which town pages exist (6.2); the meeting spot is a hard stop for each town page, Salisbury and Ocean City included.
10. `[[NEEDS: owner confirms each service promise]]` The 99.9% uptime target, the 1-hour first response to site-down reports 7 days a week, every process timeline, the proposal turnaround, and the FAA Part 107 certificate and insurance if drone work is sold.
11. `[[NEEDS: sprint 1 composition]]` Accept the default (Salisbury hub, Ocean City hub and hospitality in sprint 1; audit tool in sprint 4) or keep PLAN §5.5's original order. Also: build or skip the two lower-confidence Ocean City pages (social media and design and print, 6.2).
12. `[[NEEDS: chat decision]]` None at launch (recommended), a person, or a labelled bot (03b §10 #7).
13. `[[NEEDS: photo shoot]]` Owner, workspace, and real photos in each town we build a page for (localness check 6).
14. `[[NEEDS: which chambers to join in quarter 1, and the budget]]` 02b §8 #9 suggests Ocean City, Salisbury Area, Ocean Pines and Bethany-Fenwick.
15. `[[NEEDS: tool accounts and budget]]` Booking (Cal.com or Calendly), call tracking, CRM, rank tracker, PageSpeed API key (free), Google Places API spend for the audit tool's optional profile check, and Semrush if we want the Semrush Agency Partners listing (04 Summary 5).
16. `[[NEEDS: paid-search budget]]` PLAN §6.7 suggests $750 to $1,500 a month as the bridge.
17. `[[NEEDS: logo, colours, font choice, tone in three words, and anything we must never say]]`
18. `[[NEEDS: will we sign HIPAA business associate agreements?]]` Until answered, the medical page makes no HIPAA claim of any kind.
19. `[[NEEDS: text-message consent wording reviewed by counsel]]` Before any confirmation text or SMS marketing.
20. `[[NEEDS: allow or block AI training crawlers]]` AI search crawlers stay allowed either way (12.7).
21. `[[NEEDS: real certifications and memberships]]` Only verifiable ones are shown, each linked to its listing (02b §4 standard).
22. `[[NEEDS: bid on D3's brand terms in Google Ads, yes or no]]` We never name D3 on our site (PLAN Appendix B); ads on a competitor's name are legal but a judgement call.
23. `[[NEEDS: keyword pass with fresh search budget]]` Researched terms for the 7 `noindex` pages with no term (print, PR, reputation, the chat assistant, careers, the scoreboard, the owner page), for amusements, the audit tool and our own brand query (9.11); SERP checks for the golf and real estate rows; real volumes from a keyword tool before large content spend (04 Open questions 4); and **the top-3 lookups PLAN §4 acceptance criterion 3 still lacks: at least 110 more queries to reach 150 of 301 rows (40 done today; 04 Additions)**.
24. `[[NEEDS: manual check of D3's Google Business Profile(s), Bing and Apple listings, the 5 AI-answer prompts, and who holds the Ocean City and Salisbury map packs today]]` Not a decision, but the most important missing facts (02b §10 #1–3; 04 Open questions 3, 5; SC §6). Until then we never cite D3's Google rating. Add two smaller checks: what thequietresorts.com is (Bethany-Fenwick chamber, as 01 and 04 infer, or Worcester County Tourism, as 02b reads it) and whether D3 is a listed member (6.5 note); and whether D3's Maryland Office of Tourism listing is still live (02b §10 #5).
25. `[[NEEDS: mystery-shop D3's inquiry flow, yes or no]]` An ethics call (03b §10 #1; PLAN Appendix B). Nothing in the build depends on it.
26. `[[NEEDS: Salisbury second location at the day-90 review]]` Open a staffed location only if 2 of the 3 thresholds in 6.6 are met; never a virtual address.
27. `[[NEEDS: destination and tourism-board marketing in year two, yes or no]]` D3's strongest vertical (section 3, Contact-dropdown table). Default: not pursued in year one; revisit once we have one tourism client. Also confirm that booking engines, reservations, group housing, live web cams, Wi-Fi marketing and mobile apps are not sold, and whether banks and credit unions are target clients.
28. `[[NEEDS: approve updating PLAN §8 to the day-90 review target]]` PLAN §8's 10 reviews by week 4 and 25 by weeks 5 to 6 conflict with PLAN §1's 25 by day 90 (standards table; 11.1).

---

## Appendix A. Full keyword ownership map (all 301 keywords)

Every keyword in `keywords.csv`, by name and CSV line number, assigned to exactly one page, in build order. If intake marks a service NO or leaves out a town, that page's keywords return here for re-mapping. If the West Ocean City page fails its gate, its three terms move to `/locations/ocean-city-md/`. Two consumer wedding-video terms (r240, r262) sit on the Berlin and Bethany pages only through a short paragraph on event and venue video for local businesses; if video is NO, they join the unassigned list.

- `/` (6): marketing agency eastern shore md (r128); delmarva marketing agency (r132); delmarva advertising agency (r135); digital marketing agency near me (r155); marketing agency near me (r156); advertising agency near me (r159)
- `/contact/` (1): marketing company near me (r160)
- `/pricing/` (12): how much does a website cost ocean city md (r10); how much does a website cost salisbury md (r19); web design pricing salisbury md (r77); how much does a small business website cost in maryland (r83); seo pricing ocean city md (r173); marketing agency pricing salisbury md (r174); how much does a marketing agency cost (r176); how much does social media management cost (r279); how much does a logo design cost for a small business (r280); how much does google ads management cost (r281); how much should a small business spend on google ads (r282); how much does a commercial video cost to produce on the eastern shore (r288)
- `/services/web-design/` (14): web design eastern shore md (r29); eastern shore web design company (r30); web developer eastern shore maryland (r31); delmarva web design (r32); website company delmarva (r33); web designer near me (r54); web design near me (r55); website design company near me (r56); web developer near me (r57); wordpress developer near me (r58); website redesign near me (r60); ecommerce website designer near me (r61); woocommerce developer eastern shore (r71); wordpress website design eastern shore md (r72)
- `/services/seo/` (6): seo eastern shore maryland (r130); seo company delmarva (r134); seo company near me (r157); local seo services near me (r158); seo services near me (r161); seo company maryland eastern shore small business (r188)
- `/about/` (1): local vs national marketing agency (r183)
- `/locations/salisbury-md/` (10): digital marketing agency salisbury md (r107); marketing agency salisbury md (r108); marketing company salisbury md (r109); advertising agency salisbury md (r110); marketing agency wicomico county (r126); email marketing services salisbury md (r202); video production salisbury md (r210); drone videography salisbury md (r212); marketing agency wicomico county md (r245); digital marketing salisbury md (r293)
- `/locations/ocean-city-md/` (11): digital marketing agency ocean city md (r97); marketing agency ocean city md (r98); marketing company ocean city md (r99); advertising agency ocean city md (r100); ocmd marketing agency (r118); social media and seo agency ocean city md (r190); google ads management ocean city md (r197); ppc management ocean city md (r199); email marketing services ocean city md (r201); facebook ads management ocean city md (r275); geofencing advertising ocean city md (r276)
- `/industries/hospitality-vacation-rentals/` (11): hotel website design ocean city md (r64); vacation rental website design ocean city md (r66); hotel marketing agency ocean city md (r171); hotel marketing ocean city md (r215); hotel marketing agency salisbury md (r216); vacation rental marketing ocean city md (r217); vacation rental marketing salisbury md (r218); vacation rental marketing worcester county md (r244); vacation rental marketing bethany beach de (r263); hotel marketing agency rehoboth beach (r273); short term rental marketing ocean city md (r278)
- `/services/` (1): delmarva digital marketing (r133)
- `/services/web-design/starter-website/` (1): how long does it take to build a website for a small business (r86)
- `/services/website-care-plans/` (3): website maintenance delmarva (r34); website maintenance near me (r59); website maintenance packages maryland (r73)
- `/services/accessible-websites/` (2): ada compliant website design maryland (r76); does my website need to be ada compliant (r89)
- `/services/ai-search-optimization/` (3): ai seo agency near me (r163); generative engine optimization maryland (r164); ai search optimization delaware (r165)
- `/services/google-business-profile/` (4): google business profile optimization eastern shore (r131); google business profile optimization near me (r162); google business profile optimization delaware (r167); google business profile management service (r187)
- `/services/paid-ads/` (2): google ads agency near me (r229); ppc company near me (r235)
- `/services/social-media-management/` (4): social media marketing near me (r227); social media manager near me (r228); delmarva social media marketing (r253); should i hire a freelance social media manager or an agency (r283)
- `/services/email-sms-marketing/` (2): email marketing agency near me (r236); email marketing eastern shore md (r247)
- `/services/branding-logo-design/` (3): logo design near me (r230); branding agency near me (r234); branding agency eastern shore md (r246)
- `/services/graphic-design/` (1): graphic designer near me (r231)
- `/services/video-photo-drone/` (5): video production company near me (r232); drone videographer near me (r233); delmarva video production (r250); delmarva drone services (r251); do you need a part 107 license to fly a drone for real estate in maryland (r286)
- `/services/marketing-strategy/` (1): how to market a seasonal business in the off season (r185)
- `/work/` (1): best marketing agency eastern shore maryland (r129)
- `/work/media-masters-site-build/` (1): wordpress vs wix vs squarespace for small business (r87)
- `/work/[client-2-slug]/` (1, provisional; returns to `/blog/vacation-rental-direct-bookings-ocean-city/` if the slot is not built): how to use email marketing to get repeat hotel and vacation rental guests (r285)
- `/work/[client-3-slug]/` (1, provisional; returns to `/industries/restaurants-bars/` if the slot is not built): how to market a restaurant in a beach town (r289)
- `/reviews/` (1): seo company salisbury md reviews (r189)
- `/locations/` (3): web design worcester county md (r27); marketing agency worcester county md (r125); social media marketing worcester county md (r243)
- `/locations/salisbury-md/web-design/` (14): web design salisbury md (r11); website design salisbury md (r12); web developer salisbury md (r13); website company salisbury md (r14); wordpress developer salisbury md (r15); ecommerce website design salisbury md (r16); website maintenance salisbury md (r17); website redesign salisbury md (r18); web design wicomico county md (r28); small business website design salisbury md (r63); shopify developer salisbury md (r70); wordpress maintenance plans salisbury md (r74); web design delmar md (r96); who builds websites in salisbury maryland (r297)
- `/locations/salisbury-md/seo/` (6): seo company salisbury md (r111); seo services salisbury md (r112); local seo salisbury md (r113); ai search optimization salisbury md (r114); google business profile optimization salisbury md (r115); seo company wicomico county md (r127)
- `/locations/salisbury-md/google-ads/` (2): google ads management salisbury md (r198); ppc agency salisbury md (r200)
- `/locations/salisbury-md/social-media/` (2): social media marketing salisbury md (r194); social media management salisbury md (r196)
- `/locations/salisbury-md/graphic-design-branding/` (4): branding agency salisbury md (r204); logo design salisbury md (r206); graphic design salisbury md (r208); print design salisbury md (r214)
- `/locations/ocean-city-md/web-design/` (12): web design ocean city md (r2); website design ocean city md (r3); web developer ocean city md (r4); website company ocean city md (r5); wordpress developer ocean city md (r6); ecommerce website design ocean city md (r7); website maintenance ocean city md (r8); website redesign ocean city md (r9); web design ocmd (r20); small business website design ocean city md (r62); website hosting and maintenance ocean city md (r75); web designer ocean city md (r291)
- `/locations/ocean-city-md/seo/` (7): seo company ocean city md (r101); seo services ocean city md (r102); local seo ocean city md (r103); ai search optimization ocean city md (r104); google business profile optimization ocean city md (r105); ocmd seo (r119); seo ocean city md (r292)
- `/locations/ocean-city-md/social-media/` (3): social media marketing ocean city md (r193); social media management ocean city md (r195); social media marketing ocmd (r237)
- `/locations/ocean-city-md/video-production/` (4): video production ocean city md (r209); drone videography ocean city md (r211); video production ocmd (r238); can you fly a drone in ocean city md (r287)
- `/locations/ocean-city-md/graphic-design-print/` (5): branding agency ocean city md (r203); logo design ocean city md (r205); graphic design ocean city md (r207); print design ocean city md (r213); rack card design ocean city md (r277)
- `/locations/berlin-ocean-pines-md/` (12): web design berlin md (r23); website design berlin maryland (r24); website design ocean pines md (r25); web designer ocean pines (r26); marketing agency berlin md (r121); web design and marketing berlin maryland (r122); seo berlin md (r123); marketing company ocean pines md (r124); graphic design berlin md (r239); wedding videographer berlin md (r240); social media marketing berlin md (r241); marketing agency ocean pines md (r242)
- `/locations/rehoboth-beach-lewes-de/` (21): web design rehoboth beach de (r35); website design rehoboth beach (r36); web developer rehoboth beach de (r37); ecommerce website design rehoboth beach (r38); web design lewes de (r39); web developer lewes de (r40); wordpress developer lewes rehoboth (r41); ecommerce website design lewes de (r42); marketing agency rehoboth beach de (r136); seo company rehoboth beach (r137); digital marketing agency lewes de (r138); seo company lewes de (r139); local seo rehoboth beach (r166); social media marketing rehoboth beach de (r254); google ads agency rehoboth beach de (r255); ppc management lewes de (r256); logo design rehoboth beach de (r257); graphic design lewes de (r258); branding agency lewes de (r259); video production lewes de (r260); video production rehoboth beach de (r261)
- `/locations/bethany-beach-fenwick-island-de/` (8): web design fenwick island de (r43); web design bethany beach de (r44); website maintenance bethany beach (r45); marketing agency bethany beach de (r140); seo bethany beach de (r141); marketing agency fenwick island de (r142); seo fenwick island (r143); wedding videographer bethany beach de (r262)
- `/locations/sussex-county-de/` (15): web design millsboro de (r46); web design sussex county de (r47); website design southern delaware (r48); web design seaford de (r49); web design company delaware beaches (r81); website maintenance salisbury de seaford (r93); marketing company millsboro de (r144); seo company sussex county de (r145); marketing agency sussex county de (r146); marketing agency seaford de (r147); seo seaford de (r148); social media marketing sussex county de (r264); marketing agency millsboro de (r265); social media marketing seaford de (r266); digital marketing sussex county de (r294)
- `/locations/easton-cambridge-md/` (13): website design easton md (r52); web design cambridge md (r53); web design dorchester county md (r94); web design talbot county md (r95); marketing agency easton md (r149); seo company easton md (r150); digital marketing cambridge md (r151); seo cambridge md (r152); branding agency easton md (r267); social media marketing easton md (r268); video production easton md (r269); video production cambridge md (r270); marketing agency cambridge md (r295)
- `/locations/pocomoke-snow-hill-md/` (6): website design pocomoke city md (r50); web design snow hill md (r51); marketing pocomoke city md (r153); seo snow hill md (r154); google ads management pocomoke city md (r271); marketing agency snow hill md (r272)
- `/locations/west-ocean-city-md/` (3): web design west ocean city md (r21); web design agency west ocean city (r22); marketing agency west ocean city md (r120)
- `/industries/` (1): law firm website design eastern shore md (r69)
- `/industries/restaurants-bars/` (4): restaurant website design ocean city (r65); restaurant marketing ocean city md (r172); restaurant marketing salisbury md (r219); restaurant marketing rehoboth beach (r274)
- `/industries/amusements-attractions/` (2): ocean city md marketing for seasonal businesses (r170); tourism marketing agency eastern shore (r191)
- `/industries/golf/` (5): golf course marketing agency ocean city md (r298); golf course website design maryland eastern shore (r299); ocean city golf getaway marketing (r300); golf package marketing delmarva (r301); golf course social media marketing berlin md (r302)
- `/industries/real-estate/` (6): real estate website design ocean city md (r67); real estate marketing sussex county de (r192); real estate marketing ocean city md (r220); real estate marketing salisbury md (r221); delmarva real estate photography and video (r252); how should realtors use video and drone footage to sell second homes (r290)
- `/industries/medical-dental/` (3): medical practice marketing ocean city md (r222); medical practice marketing salisbury md (r223); dental marketing eastern shore md (r249)
- `/industries/home-services/` (5): contractor website design salisbury md (r68); home services marketing ocean city md (r224); home services marketing salisbury md (r225); hvac marketing salisbury md (r226); home services marketing eastern shore (r248)
- `/how-to-choose-a-marketing-agency/` (7): best web design company salisbury md (r79); best web design company ocean city md (r80); best marketing agency ocean city md (r106); best marketing agency salisbury md (r116); top digital marketing agencies salisbury md (r117); how to choose a marketing agency (r182); best digital marketing agency in ocean city maryland (r296)
- `/free-website-audit/` (2): do i need a website if i have a google business profile (r88); website refresh vs redesign (r90)
- `/reporting/` (1): how long does seo take to work (r186)
- `/blog/how-much-does-a-website-cost/` (4): how much does a website cost (r82); how much does a website redesign cost (r85); how much does an ecommerce website cost (r91); what does a hotel website cost ocean city (r92)
- `/blog/website-maintenance-cost/` (1): how much does website maintenance cost per month (r84)
- `/blog/how-much-does-seo-cost/` (2): how much does seo cost for a small business (r175); how much does local seo cost (r184)
- `/blog/show-up-in-chatgpt/` (3): how do i get my business to show up in chatgpt (r177); what is generative engine optimization (r178); geo vs seo what's the difference (r179)
- `/blog/rank-higher-on-google-maps/` (1): how to rank higher on google maps (r180)
- `/blog/vacation-rental-direct-bookings-ocean-city/` (1): how to get more direct bookings for a vacation rental in ocean city (r284)
- `/blog/` (1): how do ai overviews affect local businesses (r181)

**Pages that own no term (rule 5 in 6.1; `noindex, follow` until the keyword pass):** `/about/[owner-slug]/`, `/scoreboard/`, `/services/print-design/`, `/services/public-relations/`, `/services/reputation-management/`, `/services/website-chat-assistant/`, `/careers/`. Exempt legal pages: `/terms/`, `/privacy/`, `/accessibility/`, `/what-you-own/`. Exempt `noindex` utility pages: `/thanks/`, audit reports, 404.

**Deliberately unassigned (3):**
- d3corp alternatives (r78): D3 brand term. We never name D3 on our site and do not target its name (PLAN Appendix B).
- d3 corp alternatives (r168): D3 brand term (same reason).
- d3corp reviews (r169): D3 brand term (same reason).

(The first draft also left "wordpress vs wix vs squarespace for small business" (r87) unassigned. It now sits on our own build case study, which answers it from real measurements of the platform we chose.)

**Check (run by script on keywords.csv before saving):** 301 rows; 298 assigned to exactly one page; 3 unassigned with a reason; 0 duplicates; 0 orphans; every page count above matches its list.

---

## Verification (2026-11-11)

A checker compared this blueprint with its sources and ran scripted checks against `keywords.csv`. It flagged 10 claims (1 wrong, 8 overstated, 1 unsupported) and 10 missing items. All 20 were fixed with targeted edits. The acceptance checks it ran (every D3 service matched, 40+ pages in build order, keywords mapped once, owner needs listed, standards consistent) were re-run by script after the edits and still pass.

**Claims corrected (10):**
- Wrong: the reason for the 24-hour review-reply standard. 03b §4.3 sets "1 business day" as our own bar, not as a bar for D3's checklist. The table now states the real conflict (03b §4.3 against PLAN §6.2 and 02b §3) and that the stricter 24 hours wins.
- Unsupported: "CSV r21 notes D3 ranks first" for West Ocean City, given as a 04 snapshot reading. Now "No snapshot; the CSV basis note asserts D3 ranks first, unverified" (6.2).
- Overstated, now narrowed:
  - "No town in any heading" → no town page and no town in any of its 12 H1s; town names do appear in 9 and 3 titles (summary 6; 02 §10; SC #8).
  - Case-study proof → none shows a visible date or before-and-after screenshots or scores; 27 of 28 give no timeline; Visiting Angels' "100 to 200" is a before-and-after figure (11.2; 01b §3.3).
  - Quiet Resorts → an inferred Bethany-Fenwick membership that 02b reads as Worcester County Tourism; flagged for a manual check (6.5 note; decision 24).
  - Maryland Office of Tourism → listed in the October recon, not re-confirmed (6.5; 02b §10 #5).
  - Salisbury "no D3 page in the top 10, no local agency page" → limited to the SEO, Google Ads, web design and graphic design terms; D3 ranks for the agency terms and local firms appear (6.6).
  - "No local agency publishes prices" → D3 and the Salisbury agencies found publish none (11.2 #8, 11.3; 04 Summary 8).
  - LCP sources → 2 of 5 favour 2.0 s (01 §8 #8 and 03b §4.3); 2.5 s stays the gate, 2.0 s the stretch goal (standards table).
  - Service-in-town evidence → 8 evidence-backed pages separated from 2 lower-confidence ones (Ocean City social, Ocean City design and print), which are built last (6.2; section 13).

**Missing items added (10):**
1. Keyword clusters: every indexable page now owns at least one `keywords.csv` term, or is `noindex, follow` until the keyword pass where the CSV has no fitting term (standards table; rule 5; 9.11). Terms were moved to `/services/`, the strategy page, `/work/`, the site-build case study, both client slots, `/reviews/`, `/blog/` and the attractions page. `/what-you-own/` is treated as a legal page. 298 of 301 rows are now assigned and 3 are unassigned (D3 brand terms).
2. Ownership rules: rules 3 and 4 restated and rule 5 added; r159, r170, r287, r84 and r282 moved (conflict C13); a new cost article, `/blog/website-maintenance-cost/`, replaces the off-season article.
3. Lead form: the text-message consent tick-box is removed, so the friction score is truly 5. The booking path is scored on its own (name and email required by the scheduler, 5 by the 03b method) (10.2, 10.3).
4. Review math: the table now uses 1 in 3 at every stage, with one request per intake name. PLAN §8's week-4 and week-6 figures are named as a conflict, and day 90 is chosen (standards table; 11.1; decision 28).
5. Summary 6 now matches the 6-of-9 launch rule; decision 3 now counts 18 service pages (17 without the chat page).
6. `/compare/` folder removed: the checklist lives at `/how-to-choose-a-marketing-agency/`, so every breadcrumb parent is a real page (section 5).
7. Parity decisions for D3's 8 dropdown-only services (booking engines, reservations, group housing, live web cams, Wi-Fi marketing, CRM, mobile app, destination marketing), a counter-position on destination marketing, and the nonprofit and bank verticals (section 3; section 7 hub row; decision 27).
8. Selection criterion (3) for the 60 keywords now gives each "very low" pick its true reason (section 8).
9. PLAN §4 acceptance criterion 3 is stated as still unmet: 40 of 301 rows have a top-3, and at least 110 more queries are needed (summary 11; section 8; section 13; decision 23).
10. The thequietresorts.com conflict between 01, 04 and 02b is flagged in the 6.5 note and in decision 24.

**Counts after the edits:** 75 pages in build order (16 + 22 + 26 + 11), the same 75 in the sitemap; 70 live by default, 63 indexable; 60 priority-1 keywords, each with one owner that matches Appendix A; every title 60 characters or fewer.
