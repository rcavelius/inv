# Media Masters Group site blueprint, draft B: local search first

**Prepared for:** Media Masters Group LLC · **Date:** 2026-11-11 · **Status:** draft for owner review (one of several angles; this one starts from the keyword and local-search evidence)
**Built from:** `PLAN.md`, `intake.md` (still all TODO), and the verified research in `media-masters/research/`: D3-SCORECARD, 01, 01b, 02, 02b, 03, 03b, 04 and `keywords.csv` (301 rows, 40 with SERP snapshots). No web access was used. Search volumes are the estimates from 04 and `keywords.csv`, never measurements.

**How to read citations.** "(02 §9.1)" means `research/02-d3-seo-audit.md`, section 9.1. "(CSV r111)" means line 111 of `research/keywords.csv` (line 1 is the header). Every "D3 does or lacks X" statement carries one. Where a research document was corrected in its Verification section, this draft uses the corrected figure.

**How to read gaps.** Because `intake.md` is empty, every business fact this blueprint needs is either an assumption (listed in section 15 and marked **[A#]**) or a `[[NEEDS: ...]]` marker. Nothing is invented: no prices, no address, no clients, no reviews, no owner name.

**Our site never names D3.** All comparisons in this document are internal. Public copy follows PLAN Appendix B: no disparagement, no copied wording, no D3 brand terms as targets.

---

## Standards this draft settles (where the research documents disagree)

The scorecard lists conflicts between documents (D3-SCORECARD §6). This blueprint picks one value for each and every later section uses it.

| Topic | The documents say | Our single standard | Why |
|---|---|---|---|
| Main-content load (LCP) on mobile | Under 2.0 s (01 §8 #8); under 2.5 s (02 §9.3, 03 §8) | **2.5 s or better** on every template, Lighthouse mobile simulation, and at the 75th percentile of real-user data once Google has it | 2.5 s is Google's "good" Core Web Vitals line, so it is a gate we can audit publicly. 2.0 s is our stretch target on the home page only |
| Lead form length | 5 fields (01 §8 #4; 03 §5); 4 fields (03b §5, §9 #8) | **4 fields**, only 1 required, friction score 5 by the 03b §5 method | Fewer fields, and 03b's friction method is the only one that can be recomputed |
| Page weight | 4.1 to 8.4 MB written three ways for D3 (scorecard §6); our bar "under 1 MB" (02 §9.3, 03 §8) | **Under 1 MB transferred per page** (Lighthouse total-byte-weight under 1,000 KB), home page under 500 KB | One number for every template |
| Lighthouse | 90+ launch gate (PLAN 5.5); 95+ (01 §8 #8, 02 §9.3, scorecard) | **95 or higher on all four mobile scores, every template**; the build fails below 95 | Higher of the two; the static stack makes it cheap |
| CSS plus JavaScript | Under 100 KB (PLAN 5.3; 02 §9.3) | **Under 100 KB** per page, compressed | No conflict; restated |
| Accessibility | "WCAG 2.2 AA" (PLAN 5.2); "0 critical or serious axe" (03 §7.4) | **0 critical and 0 serious axe violations on every page, plus a manual WCAG 2.2 AA pass on money pages; no overlay** | Both, as one rule |
| Review replies | Within 24 hours (PLAN 6.2); within 1 business day (03b §4.3) | **Within 1 business day**, every review, every platform | A promise a one-person business can keep in July |
| Location-page length | At least 600 words (02 §10) | **At least 900 words** for a town hub, **800** for a service-in-town page | Our pages must beat templated national pages on substance, not only on structure |

---

## 1. Summary for the owner (ten bullets)

1. **Win the towns first.** D3 has no page for any town; none of its 12 H1s names a place (02 §10). It ranks for "digital marketing agency Ocean City MD" only with its site map page (04 snapshot table). We build real town pages and let them do the work.
2. **Salisbury is the biggest opening.** For "web design Salisbury MD" (the largest estimated term, 50 to 200 searches a month), "SEO company Salisbury MD" and "Google Ads management Salisbury MD", D3 does not appear and no local agency has its own page (04 Summary 2 to 3; CSV r11, r111, r198). We build a Salisbury hub plus five Salisbury service pages.
3. **Delaware beaches, Berlin and Ocean Pines are uncontested by D3.** D3 was absent from every Delaware, Berlin and Easton snapshot and has no Ocean Pines page (04 snapshot patterns). Templated out-of-area pages hold those results today, and we can beat templates with genuinely local pages.
4. **Ocean City's industries are our second front.** D3 has zero content on vacation rentals across 112 pieces of content (01b §6), and no agency ranks for "vacation rental marketing Ocean City MD" (04 Summary 7). We build seven industry pages, starting with hospitality and vacation rentals.
5. **The map pack is won off the website as much as on it.** Google Business Profile, 50 clean citations in month one and 25 Google reviews by day 90 (PLAN 6.2) are the engine. Section 11 shows how we reach 25 without breaking Google's rules.
6. **Speed and accessibility are our technical wedge.** D3's site grades F on speed (main content in 15 to 30 seconds on 5 of 6 tested pages) and D on accessibility (910 automated failures on 30 pages, with an overlay installed) (D3-SCORECARD §2; 02 §9.1; 03 §7.1). Ours ships under 1 MB, with main content in 2.5 seconds or less and zero serious accessibility errors, and we show the scores live.
7. **We still match every D3 service.** All 13 D3 service pages have a matching page here, with a price, a process, an FAQ and an ownership promise (section 3). Five services D3 lacks get their own pages (section 4).
8. **Five public commitments set us apart:** same-business-day human reply, published starting-at prices, no multi-year auto-renewing contracts, a named account lead, and a written timeline for every service (section 2).
9. **About 75 pages in four sprints**, in the order PLAN 5.5 sets (section 13). The location and industry pages come in sprint 3; this draft recommends pulling the Salisbury and Ocean City hubs into sprint 1 if you agree (decision D7 in section 15).
10. **We need your answers before launch.** Address, phone, prices, which services you sell, past clients for reviews, and your photo. Section 15 lists every decision in priority order; the top five block the build.

---

## 2. Positioning and promises

### 2.1 Our position (one sentence)

> **Media Masters Group is the owner-led Delmarva marketing agency that puts its prices on the page, answers every inquiry the same business day, and builds websites that load in a blink and work for every visitor, from Lewes to Pocomoke.**

Plain-English test: a buyer on a phone learns what we do (marketing and websites), where (Delmarva, named towns), for whom (local businesses), and three facts they can check (price, reply time, speed). None of D3's headline phrases are reused; D3's promises are listed in 03b §2.1 for reference and are deliberately avoided ("full-service", "drives real growth", "top-rated", "results", "local experts").

Supporting lines for copywriters (pick per page, never more than two on one screen):
- "See the price before you call."
- "A person, not a bot, writes back the same business day."
- "Month to month. Cancel by email. You own everything."
- "Your account lead is [[NEEDS: owner name]], and here is the direct line."
- "Every service has a written timeline, from first call to launch."

### 2.2 The five commitments we publish

Each commitment appears on the home page, the pricing page, every service page and the contact confirmation page, in the same words. Each answers a measured D3 weakness.

| # | Commitment (public wording) | How we keep and measure it | D3 weakness it answers (citation) |
|---|---|---|---|
| 1 | **Same-business-day human reply.** "Ask before 3 pm ET on a business day and a person replies that day. Ask later and you hear from us by 10 am the next business day." | Every lead is time-stamped by the form Worker; median and 95th-percentile reply times published monthly on `/reporting/` once there are 20 leads (03b §9 #1) | The only response promise on D3's site is a chat bot's "We respond immediately"; no form, Contact or Quote page says when a person replies, and nothing after submit was captured (01 §5.5; 03b §7; 01 §5.4) |
| 2 | **Published starting-at prices.** "Every service shows a starting price and three packages. No form to fill in first." | `/pricing/` in the main navigation; a price block on 100% of service, location and industry pages; QA checklist item | No price on any D3 page; the only price is "$195/hr" for custom programming, in Terms Exclusions 12; a prospect must answer a 13-question form to learn cost (01 §1.4, §3.1; 03b §3.1, §8) |
| 3 | **No multi-year auto-renewing contracts.** "Retainers are month to month. Cancel with 30 days' notice by email. No exit fee. Website builds are a fixed price with a written scope." | One-page `/what-you-own/` linked from the footer and pricing; our terms under 1,500 words (01 §8 #2) | D3's published Terms set a 3-year term that renews automatically, require certified-mail cancellation 60 to 180 days before the end, and charge the full term on early exit, while D3's ads page says "No long-term commitments or contracts necessary" (01 §3.1; 03b §3.2). We compare against published terms only and never describe any D3 client's signed contract (03b §3.2 note) |
| 4 | **A named account lead.** "You work with [[NEEDS: owner name]]. Name, photo and direct line are on every page, and in your proposal." | Owner block in the footer and on every service page ("Who you'll work with"); named in writing in every proposal | D3's Meet Us page names only the founder, shows no staff photos, and all 80 `Person` schema nodes are "D3 Support"; D3 employs account managers but does not name them to prospects (01 §6; 01b §2.2; 03 §4.3; 03b §8) |
| 5 | **A process timeline per service.** "Every service page shows the steps and the weeks, from first call to launch or first report." | A numbered timeline component on 100% of service pages, repeated identically in the proposal and the contract | D3 states no timeline on any service page except "days, not months" on Rapid Design, and that page's own form offers "6-12 months" (01 §3, §8 #15; 03b §8) |

Two more promises sit underneath the five and are also published, because they are part of the technical wedge:
- **"This site is fast and accessible, and here are today's scores."** A live scoreboard (`/scoreboard/`) answers D3's F and D grades (D3-SCORECARD §2).
- **"You own your domain, site, content, ad accounts, analytics and social accounts from day one, and we export everything within 5 business days of a request."** This answers D3's Terms §7, under which clients lose use of D3 "Systems" on exit (01 §3.1, §8 #3; 03b §3.2).

**What we never promise:** rankings, positions, map-pack placement, AI citations, traffic or revenue figures. Copy promises process (what we do, when) and response (how fast we answer). Results are shown only as dated, client-approved case-study numbers.

---

## 3. Service parity table

Every D3 service page from 01 §3 (13 rows: the hub plus 12 services) maps to one of ours. "Offer status" is filled from intake: a page is built and indexed only if the intake marks the service SELL or SUB. Because intake is empty, every row currently reads "offer if intake marks SELL or SUB"; the default assumption for launch is in the last column.

| D3 page (01 §3) | Our page | Our keyword cluster (from keywords.csv) | How we exceed it (specific) | Offer status |
|---|---|---|---|---|
| `/services/` hub (lists 9 of 12 services; no form) | `/services/` | advertising agency near me (CSV r159) | One service list shared by nav, hub, footer and form (03b §3.1 standard); each card shows starting price and timeline length; a "which service do I need" chooser with 4 plain questions; links to all 9 town hubs | Always built |
| `/websites/` (no H1; no price; 6 cards with no metrics) | `/services/websites/` | web design eastern shore md (r29); delmarva web design (r32); web design near me (r55); web designer near me (r54); wordpress website design eastern shore md (r72); website design company near me (r56) | **Price:** three packages with starting-at prices `[[NEEDS: website floor]]`. **Process:** 6 steps with week counts. **Proof:** our own build as case study #1 with before-and-after scores. **FAQ:** 6 questions. **Tool:** links into the free website check. **Guarantee:** fixed price for the written scope; you own the code. Names 3+ towns in body copy (03b §2.3) | Offer if intake marks SELL or SUB (assumed SELL, [A3]) |
| `/rapid-design-websites/` ("days, not months", form says up to 12 months) | `/services/websites/starter-site/` | small business website design ocean city md (r62); small business website design salisbury md (r63); how long does it take to build a website for a small business (r86) | **Price:** one fixed price `[[NEEDS]]`. **Process:** a stated page count and a written launch window (for example 10 business days) repeated identically on page, form and contract (01 §8 #15). **FAQ:** 5. **Proof:** live speed score of each starter site shipped | Offer if intake marks SELL or SUB (assumed SELL) |
| `/search-engine-optimization/` (title 125 chars; no town; no price) | `/services/seo/` | seo company near me (r157); seo services near me (r161); seo eastern shore maryland (r130); seo company delmarva (r134); seo company maryland eastern shore small business (r188) | **Price:** monthly starting-at price `[[NEEDS: SEO floor]]`, month to month. **Process:** month-by-month 90-day plan. **Proof:** sample monthly report (`/reporting/`). **FAQ:** 6, including "How long does SEO take?" answered honestly without promising rankings. **Tool:** free website check. Links to the 5 town SEO pages | Offer if intake marks SELL or SUB (assumed SELL) |
| `/answer-engine-optimization/` (no method, no measurement, no AEO case study) | `/services/ai-search-optimization/` | ai search optimization ocean city md (r104); ai search optimization salisbury md (r114); generative engine optimization maryland (r164); ai search optimization delaware (r165); ai seo agency near me (r163); what is generative engine optimization (r178); geo vs seo what's the difference (r179) | **Process:** our method in 5 steps (entity facts, schema, citations, answer-shaped content, monthly prompt test). **Proof:** our own 20-prompt monthly test sheet published with dates (01 §8 #14; 02b §7). **Price** `[[NEEDS]]`. **FAQ:** 6. Never promises AI citations | Offer if intake marks SELL or SUB (assumed SELL) |
| `/digital-advertising/` ("no long-term commitments" contradicted by Terms) | `/services/google-ads-ppc/` | google ads management ocean city md (r197); ppc management ocean city md (r199); google ads agency near me (r229); ppc company near me (r235); geofencing advertising ocean city md (r276); facebook ads management ocean city md (r275); how much does google ads management cost (r281); how much should a small business spend on google ads (r282) | **Price:** management fee shown `[[NEEDS: fee or % of spend]]`, separate from ad spend. **Promise that matches the contract:** month to month, ad accounts in the client's name (03b §3.2). **Process:** week-by-week first 30 days. **Tool:** a spend calculator (sprint 4 backlog). **FAQ:** 6 | Offer if intake marks SELL or SUB (assumed SELL) |
| `/social-media-marketing/` (form asks about a "New Site") | `/services/social-media-management/` | social media marketing near me (r227); social media manager near me (r228); how much does social media management cost (r279); delmarva social media marketing (r253); should i hire a freelance social media manager or an agency (r283) | **Price** with deliverable counts (posts a month, platforms) `[[NEEDS]]`, which D3 never states (01 §3 patterns). **Process:** 4-week onboarding. **Sample calendar** for an Ocean City summer month. **FAQ:** 5. The same 4-field form as every page | Offer if intake marks SELL or SUB (assumed SELL) |
| `/email-marketing/` ("Proven Email Results" with no numbers) | `/services/email-sms-marketing/` | email marketing services ocean city md (r201); email marketing agency near me (r236); email marketing eastern shore md (r247); how to use email marketing to get repeat hotel and vacation rental guests (r285) | Adds SMS (D3 has no SMS service page; 03b §4.3). **Price**, **process** (list import, 3 templates, first send in week 2), a seasonal send calendar, **FAQ** | Offer if intake marks SELL or SUB |
| `/graphic-design/` (no in-body CTA) | `/services/branding-graphic-design/` | branding agency ocean city md (r203); logo design ocean city md (r205); graphic design ocean city md (r207); logo design near me (r230); graphic designer near me (r231); branding agency near me (r234); branding agency eastern shore md (r246); how much does a logo design cost for a small business (r280) | **Price** per package (logo, brand kit, full identity). **Process** with revision rounds stated. **You own the source files** stated in writing. **FAQ** | Offer if intake marks SELL or SUB |
| `/multimedia/` (32 thin video pages; no transcripts) | `/services/video-photo-drone/` | drone videography ocean city md (r211); video production company near me (r232); drone videographer near me (r233); delmarva video production (r250); delmarva drone services (r251); how much does a commercial video cost to produce on the eastern shore (r288); can you fly a drone in ocean city md (r287); do you need a part 107 license ... (r286) | **Price** per shoot day. **Process.** Every video we publish gets a transcript, 300+ words of context and `VideoObject` schema, loaded by click only (01b §4 standard). Part 107 status shown `[[NEEDS: licence]]` | Offer if intake marks SELL or SUB |
| `/print/` ("competitive prices", no figures) | `/services/print-design/` | print design ocean city md (r213); rack card design ocean city md (r277); print design salisbury md (r214) | **Price** for design, print quoted at cost plus a stated markup `[[NEEDS]]`; rack-card timing for the pre-season brochure racks | Offer if intake marks SELL or SUB |
| `/strategy/` (5 components, no deliverable) | `/services/marketing-strategy/` | ocean city md marketing for seasonal businesses (r170); social media and seo agency ocean city md (r190) | A named deliverable: a written 12-month plan and a 90-minute working session, at a fixed price `[[NEEDS]]`; sample plan outline shown | Offer if intake marks SELL or SUB |
| `/ai-assistant/` (no H1, no price, no case study) | `/services/ai-chat-assistant/` | **No keywords.csv row exists for this service.** Flagged gap; research "website chatbot ocean city", "ai receptionist small business" before building | Labelled bot, human hand-off in the first reply, never covers the H1 or call button (03b §9 #12). **Default: not built at launch**; our own site has no chat (section 10) | Offer if intake marks SELL or SUB (assumed NO, [A5]) |

**Other D3 pages we match (not services):**

| D3 page | Our page | How we exceed it |
|---|---|---|
| `/case-studies/` + 28 `/case-study/*` (1 with an outcome number) (01b §3.1) | `/work/` + `/work/<client>/` | Every case study has 2+ dated before-and-after metrics, a named quote and a visible date (section 11) |
| `/videos/` + 32 thin `/video/*` pages (01b §4) | Video sits inside each case study, with transcript | No thin video-only pages |
| `/testimonials/` (`noindex`, in sitemap, no dates) (02 §2.2; 01b §5) | `/reviews/` | Indexable; each review dated, named and linked to its source |
| `/meet-us/` (founder only, no photos) (01 §6) | `/about/` + `/about/[[NEEDS: owner-slug]]/` | Owner photo, bio, direct line, `Person` schema |
| `/contact-us/` + `/request-a-quote/` (13-question form) (01 §5.1) | `/contact/` | One 4-field form, booking link, phone, text, hours |
| `/id3as/` blog (4 posts in 12 months, all "D3 Support") (01b §2.1–2.2) | `/blog/` | Named author on every post, one a week |
| `/careers/`, `/join-our-team/`, `/internships/` (01 §2.1) | `/careers/` | One page; noindex until there is an opening |

---

## 4. Pages D3 lacks that we build

| Our page | Evidence D3 lacks it | Why it matters for local search |
|---|---|---|
| `/pricing/` | No price on any page; no Pricing item in the menu (01 §1.4; 03 §5) | Owns the local cost questions ("how much does a small business website cost in maryland", r83) that no local agency answers (04 Summary 8) |
| 11 town hubs under `/locations/` | Zero town pages; no URL, title or H1 targets Berlin, Ocean Pines, West Ocean City, Fenwick, Bethany, Rehoboth, Lewes, Millsboro, Easton, Cambridge, Pocomoke or Snow Hill (02 §10) | These are the pages that win "{service} + {town}" (section 6) |
| 9 service-in-town pages (Salisbury ×5, Ocean City ×4) | D3 ranks for town terms only with its site map, homepage or `?p=` URLs, and is absent for Salisbury web design, SEO, Google Ads and graphic design (04 Summary 1 to 3; snapshot table) | Generic URLs lose to dedicated pages once those pages exist |
| 7 industry pages under `/industries/` | No service page has an industry page behind it (03b §2.2); vacation rentals have zero content anywhere; no industry guide exists (01b §6, §7 #1–2) | Ocean City's buyers search by their trade (CSV r217, r215, r172) |
| `/services/local-seo-google-business-profile/` | "Citation Management" and "Reputation Management" appear only as Contact dropdown options with no page (01 §3 patterns) | The map-pack service, sold the way we practise it |
| `/services/website-care-hosting/` | "Hosting and Maintenance" is a dropdown option with no page; no uptime or response commitment in Terms; the only path is a public `/site-down/` form (01 §3; 03b §3.2) | Recurring revenue and a trust signal (99.9% uptime target, 1-hour first response for site-down, 03b §7) |
| `/services/accessible-websites/` | D3 runs an accessibility overlay yet fails 910 automated checks and its Terms disclaim ADA and WCAG compliance (03 §7.1, §7.3; 01 §3.1) | Our technical wedge, sold as a service; owns "ada compliant website design maryland" (r76) |
| `/services/public-relations/` | PR is promised in the home hero ("Content Creation, Strategy & PR") but has no page (01 §1 #3, §4) | Built only if intake marks PR SELL or SUB; otherwise we do not mention PR anywhere (03b §8) |
| `/services/reputation-review-management/` | "Reputation Management" is a dropdown option only (01 §3) | Built if SELL or SUB; our own review engine (section 11) is the demonstration |
| `/free-website-audit/` | No lead magnet is promoted; the only audit checklist sits on an orphan intake page `/su/` (03b §4.3) | Lead and link magnet; shows speed and accessibility in a minute |
| `/what-you-own/` | Terms §7 keeps "Systems" as D3 property; "full ownership" claims are ambiguous (03b §3.2) | Plain-English ownership and cancellation page |
| `/reporting/` (sample monthly report) | No reporting cadence or sample anywhere (03b §7) | Shows exactly what a client receives |
| `/scoreboard/` | No performance or accessibility claim D3 can show; mobile performance 38 to 54 (02 §9.1) | Live proof of the technical wedge |
| `/reviews/` (indexable) | D3's testimonials page is `noindex` with no dates (02 §2.2; 01b §5) | Reviews Google can index, each linked to its source |
| `/choosing-a-marketing-agency/` | No comparison or buyer-guide content exists in the market (04 Top 20 #19) | Owns the "best marketing agency" terms with a fair checklist; never names a competitor |

---

## 5. Full sitemap

Domain assumed `https://mediamastersgroup.com/` **[A1]** `[[NEEDS: domain bought]]`. Every URL is lowercase with a trailing slash. 75 pages; utility pages marked *(noindex)* are left out of the XML sitemap. The service list has 17 pages, of which 4 are conditional on intake (marked *(if SELL/SUB)*); the default launch assumption for each is in section 3 and section 15.

```
/                                                   Home
├── services/                                       Services hub
│   ├── websites/                                   Web design
│   │   └── starter-site/                           Fixed-price starter site
│   ├── website-care-hosting/                       Hosting, care and maintenance
│   ├── accessible-websites/                        Accessible (ADA/WCAG) websites
│   ├── seo/                                        SEO
│   ├── local-seo-google-business-profile/          Local SEO and Google Business Profile
│   ├── ai-search-optimization/                     AI search optimization
│   ├── google-ads-ppc/                             Google, Microsoft and Meta ads
│   ├── social-media-management/                    Social media
│   ├── email-sms-marketing/                        Email and SMS
│   ├── branding-graphic-design/                    Branding, logo and graphic design
│   ├── print-design/                               Print design
│   ├── video-photo-drone/                          Video, photo and drone
│   ├── marketing-strategy/                         Strategy plan and workshop
│   ├── public-relations/                           Public relations (if SELL/SUB)
│   ├── reputation-review-management/               Reputation and reviews (if SELL/SUB)
│   └── ai-chat-assistant/                          Website AI chat assistant (if SELL/SUB; default not built)
├── industries/                                     Industries hub
│   ├── hospitality-vacation-rentals/               Hotels, motels and vacation rentals
│   ├── restaurants-bars/                           Restaurants and bars
│   ├── amusements-attractions/                     Amusements and attractions
│   ├── golf/                                       Golf courses and golf packages
│   ├── real-estate/                                Real estate
│   ├── medical-dental/                             Medical and dental practices
│   └── home-services/                              Home services and contractors
├── locations/                                      Service area hub (map + county index)
│   ├── salisbury-md/                               Salisbury hub
│   │   ├── web-design/
│   │   ├── seo/
│   │   ├── google-ads/
│   │   ├── social-media/
│   │   └── graphic-design-branding/
│   ├── ocean-city-md/                              Ocean City hub
│   │   ├── web-design/
│   │   ├── seo/
│   │   ├── social-media/
│   │   └── video-production/
│   ├── west-ocean-city-md/
│   ├── berlin-md/
│   ├── ocean-pines-md/
│   ├── fenwick-island-bethany-beach-de/
│   ├── rehoboth-beach-de/
│   ├── lewes-de/
│   ├── sussex-county-de/                           Millsboro, Georgetown, Seaford
│   ├── easton-cambridge-md/
│   └── pocomoke-snow-hill-md/
├── pricing/
├── free-website-audit/                             Free website check (tool)
├── work/                                           Case studies hub
│   ├── building-mediamastersgroup-com/             Case study 1: our own site (day-one proof)
│   ├── [[NEEDS: client-2-slug]]/                   Case study 2
│   └── [[NEEDS: client-3-slug]]/                   Case study 3
├── reviews/
├── about/
│   └── [[NEEDS: owner-slug]]/                      Owner profile (Person; author page)
├── reporting/                                      Sample monthly client report
├── scoreboard/                                     Live speed and accessibility scores for this site
├── what-you-own/                                   Ownership, cancellation and plain-English terms summary
├── choosing-a-marketing-agency/                    Buyer's checklist for the Eastern Shore
├── blog/
│   ├── what-a-website-costs-on-the-eastern-shore/
│   ├── what-seo-costs-small-business/
│   ├── rank-higher-on-google-maps-delmarva/
│   ├── get-your-business-into-chatgpt-answers/
│   ├── ocean-city-vacation-rental-direct-bookings/
│   └── off-season-marketing-ocean-city/
├── careers/                                        (noindex until there is an opening)
├── contact/
├── thank-you/                                      (noindex)
├── accessibility/                                  Accessibility statement
├── privacy/
├── terms/
└── 404                                             (noindex, not in sitemap)

Files at the root: /robots.txt  /sitemap-index.xml  /llms.txt  /.well-known/security.txt  /_redirects  /_headers
```

Page count: home 1; services 18 (hub + 17); industries 8; locations 21 (hub + 11 towns + 9 service-in-town); pricing, audit, work hub + 3 case studies, reviews, about + owner, reporting, scoreboard, what-you-own, choosing guide, blog hub + 6 posts, careers, contact = 22; thank-you, accessibility, privacy, terms, 404 = 5. **Total 74 pages plus the 404 template = 75 build items.**

---

## 6. Location page system

### 6.1 Which towns, in which order, and why

The order is set by the value-to-difficulty ranking in 04 (Top 20 opportunities), D3's absence in the snapshots, and the town's estimated volume. "D3 status" is from the 04 snapshot table and CSV.

| Order | Page | Main terms (CSV) | D3 status in the SERP snapshots | Why this position |
|---|---|---|---|---|
| 1 | `/locations/salisbury-md/` + 5 service pages | web design salisbury md (r11, medium); seo company salisbury md (r111); google ads management salisbury md (r198); marketing agency salisbury md (r108); social media management salisbury md (r196); graphic design salisbury md (r208) | Absent for web design, website design, SEO, Google Ads and graphic design; #4 and #10 for "marketing agency" with `?p=` URLs; ranks for social only through a chamber case study (04 snapshot table; CSV r108, r196) | Largest market (about 33k residents, metro about 400k, CSV r11); top 3 of 04's value-to-difficulty list are Salisbury (04 Top 20 #1–3); year-round economy offsets Ocean City's season (04 Seasonality) |
| 2 | `/locations/ocean-city-md/` + 4 service pages | digital marketing agency ocean city md (r97); marketing agency ocean city md (r98); web design ocean city md (r2); seo company ocean city md (r101); social media marketing ocean city md (r193); video production ocean city md (r209) | #1 and #2 only with its site map page; web design #6 with a generic page; own SEO page #15 to #18; social #9; video #18 (04 snapshot table) | Home base **[A2]** and GBP location; the map pack for "near me" terms is decided here (CSV r54, r155) |
| 3 | `/locations/berlin-md/` | web design berlin md (r23); marketing agency berlin md (r121) | Absent; results polluted by Berlin, Germany (04 snapshot "web design Berlin MD") | 04 Top 20 #11 (ratio 2.0); 10 minutes from a West Ocean City or Ocean City base **[A2]**; Berlin Main Street events give real local hooks |
| 4 | `/locations/ocean-pines-md/` | website design ocean pines md (r25); marketing agency ocean pines md (r242) | Appears #3, #4, #8, #9 with general pages; "no Ocean Pines page"; no agency is based in Ocean Pines (04 snapshot) | 04 Top 20 #11; about 12k residents (CSV r25); own chamber |
| 5 | `/locations/rehoboth-beach-de/` | web design rehoboth beach de (r35); marketing agency rehoboth beach de (r136) | Absent from both (04 snapshot) | 04 Top 20 #14–15; dense seasonal business base; real local firms compete, so the page must be strong |
| 6 | `/locations/lewes-de/` | web design lewes de (r39); digital marketing agency lewes de (r138) | Absent (04 snapshot) | 04 Top 20 #16 |
| 7 | `/locations/fenwick-island-bethany-beach-de/` | web design bethany beach de (r44); web design fenwick island de (r43); marketing agency fenwick island de (r142) | Absent from the Bethany snapshot; templated pages only (04 snapshot) | 04 Top 20 #15 ("Bethany/Fenwick combined page"); closest Delaware beach to Ocean City |
| 8 | `/locations/west-ocean-city-md/` | web design west ocean city md (r21); marketing agency west ocean city md (r120) | D3's main office is here (01 §6; CSV r21 notes D3 ranks first) | Defensive; built only if it passes the localness test in 6.2, otherwise its terms move to the Ocean City hub and the URL is never published |
| 9 | `/locations/sussex-county-de/` (Millsboro, Georgetown, Seaford) | web design sussex county de (r47); seo company sussex county de (r145); digital marketing sussex county de (r294) | Absent from Millsboro and Sussex snapshots (04 snapshot) | About 260k residents and growing (CSV r47) |
| 10 | `/locations/easton-cambridge-md/` | website design easton md (r52); marketing agency easton md (r149); marketing agency cambridge md (r295) | Absent (04 snapshot) | 04 Top 20 #16; farthest drive, so lowest priority unless the owner meets clients there `[[NEEDS: towns you will drive to]]` |
| 11 | `/locations/pocomoke-snow-hill-md/` | website design pocomoke city md (r50); web design snow hill md (r51) | No snapshot; only programmatic pages exist (CSV r50) | Completes Worcester County coverage; small and cheap |

Service-in-town pages exist only for Salisbury and Ocean City, because only there does the evidence show separate demand per service with weak current results (04 Top 20 #1–3, #6, #8, #12–13; snapshot table). Every other town has one hub page that covers all services. We do not copy the programmatic town-by-service trees that Prager and EZ Marketing run (04 Competitor profiles).

### 6.2 What makes a page genuinely local (the localness test)

A town page ships only when it passes **at least 6 of these 9 checks**, and a service-in-town page only when it passes **5 of 9 including check 4 or check 5**. QA scores each page in the build log.

| # | Check | Example for Salisbury | Example for Rehoboth Beach |
|---|---|---|---|
| 1 | **A local business problem with a sourced local data point**, stated in our words | A year-round economy with a large medical base: 169 physician offices (CSV r223, D&B via 04) | A seasonal resort base where real local agencies and templated pages compete (CSV r35, r136) |
| 2 | **The industries mix of that town**, linking to the matching industry pages | Medical, home services, professional firms, university (04 Seasonality) | Restaurants, boutique retail, rentals (CSV r38, r274) |
| 3 | **A seasonal or civic calendar specific to the town** with marketing timing | 3rd Friday downtown events (04 local authority table) | Rehoboth Beach Jazz Festival, summer season start (04 local authority table) |
| 4 | **Local proof:** a review from a business in that town, or a case study set there, or a named local partner | `[[NEEDS: Salisbury client]]`; until then this check fails and the page relies on checks 5 to 9 | `[[NEEDS: Delaware client]]` |
| 5 | **Our real presence:** chamber membership, workshops given, events attended, with dates | Salisbury Area Chamber membership `[[NEEDS: joined]]`; SBDC workshop (04 local authority table) | Rehoboth Beach-Dewey Beach Chamber `[[NEEDS]]` |
| 6 | **A photo we took in the town** (no stock, PLAN 5.4) | Downtown Main Street | Boardwalk business district |
| 7 | **How we meet you there:** drive time from our base, where we meet, video-call option | "About 35 minutes from [[NEEDS: base]]" | "About 45 to 60 minutes; most meetings by video, site visits monthly" |
| 8 | **Town-specific FAQ** (4 to 6), not shared with any other page | "Do you have a Salisbury office?" answered honestly (6.5) | "Do you work with Delaware businesses from Maryland?" |
| 9 | **Local press and link targets** we actually use | Salisbury Independent, Daily Times (04 local authority table) | Cape Gazette (04 local authority table) |

Two automated guards stop template swaps:
- **Overlap check.** At build, compare every pair of location pages with 5-word shingles. Any pair over 30% shared body text fails the build.
- **Name-swap check.** Remove the town name from a page; if a reviewer cannot tell which town it was from the rest of the copy, it fails QA.

Disambiguation (04 Method, name collisions): every H1 and title for Berlin, Lewes, Cambridge and Salisbury carries the state ("Berlin, MD"), and the Berlin page names Worcester County in its first paragraph.

### 6.3 Page template (the order of blocks; the content differs per town)

1. H1: "{Service or 'Marketing and websites'} in {Town}, {State}" (one H1; town and state in it).
2. One-line promise with a number (reply time or starting price) and the primary CTA "Book a 15-minute call" plus "See prices".
3. "What businesses in {Town} tell us they need" (checks 1 and 2).
4. Services for {Town} with starting prices (links to service pages; service-in-town pages link up to the hub).
5. Local proof block (check 4) or, until we have it, our process and owner block.
6. "Your {Town} marketing calendar" (check 3).
7. How we meet you (check 7), with a static map image (not an embedded live map, to protect the speed budget) linking out to Google Maps.
8. Town FAQ (check 8) with `FAQPage` schema.
9. Nearby towns we serve (links to 2 or 3 neighbouring town pages).
10. The 4-field form and the owner block.

### 6.4 Review and citation plan per town

Citations are logged in one sheet (name, URL, date checked, NAP exact match yes/no) and re-audited every quarter (02b §2 standard). One name, one address format, one phone on 100% of listings.

**Core set for every town (month one, about 50 listings):** Google Business Profile, Bing Places, Apple Business Connect, Yelp, Facebook, LinkedIn, Instagram, Nextdoor, BBB, Clutch, DesignRush, UpCity, GoodFirms, Expertise.com, TechBehemoths, Alignable, Manta, MapQuest (via aggregators), ChamberofCommerce.com, BestProsInTown, Maryland Office of Tourism partner listing (D3 is listed there; 04 local authority table), Semrush Agency Partners once there is a subscription (04 Summary 5), plus the main data aggregators. Every listing uses the same categories as GBP (PLAN §3 item 4).

| Town page | Town-specific citations and links (from 04 local authority table and PLAN 6.2, 6.4) | Review target by day 90 **[A9]** | How reviews from this town are earned |
|---|---|---|---|
| Ocean City (and West Ocean City) | Greater Ocean City Chamber; OCHMRA associate membership; Maryland Coast Dispatch; Ocean City Today; Town of OC events (Springfest, Sunfest); OC Air Show; White Marlin Open sponsor listing | 9 | Past and current OC clients from intake; hospitality starter work; free audit walkthroughs |
| Salisbury | Salisbury Area Chamber; Greater Salisbury Committee; SWED; Maryland SBDC Eastern Region workshop page; Salisbury University (Shore Hatchery, guest lectures); Salisbury Independent; Daily Times; 3rd Friday | 6 | SBDC workshop attendees who become clients; Salisbury Google Ads clients (paid bridge brings leads before organic does) |
| Berlin | Berlin Chamber; Berlin Main Street events; Bayside Gazette | 2 | Boutique and restaurant clients |
| Ocean Pines | Ocean Pines Area Chamber; Bayside Gazette | 2 | Home-services and professional clients |
| Fenwick Island and Bethany Beach | Bethany-Fenwick Area Chamber (Quiet Resorts); Coastal Point; Town of Bethany Beach events | 2 | Rental and restaurant clients |
| Rehoboth Beach and Lewes | Rehoboth Beach-Dewey Beach Chamber; Lewes Chamber; Cape Gazette; Rehoboth Beach Jazz Festival | 2 | Delaware clients only when real; no target is forced |
| Sussex County | Greater Millsboro Chamber; one southern Delaware chamber; Delaware Business Times; Sussex County economic development resource list | 1 | As above |
| Easton and Cambridge | Talbot or Dorchester chamber `[[NEEDS: confirm]]`; Clutch Maryland lists | 1 | Only if the owner works there |
| Pocomoke and Snow Hill | Worcester County Economic Development; Worcester County Tourism partner listing | 0 | No target in 90 days |
| **Total** | | **25** | |

Rules for every town: no review incentives of any kind, no reviews from staff or family, no review stations in our office, and no scripted wording. We may ask an open question ("What did we work on together, and what's your business?"), which naturally produces the town and service in the review. Every review gets an owner reply within 1 business day. Reviews are shown on the matching town page with the reviewer's name, date and a link to the Google original.

### 6.5 The Salisbury question

**The facts.** D3 lists a second office at 212 West Main Street, Salisbury (01 §6; 02b §2), and two offices help it in two map packs (PLAN §2). Whether that office is staffed is not known (01 §9 Q7; 02b §10 Q4). D3 hires only "in person at our Ocean City, Maryland office" (01 §6). We have no Salisbury address.

**What we can win without an office.** Google's map pack leans heavily on how close a business is to the searcher, so without a Salisbury address we should not expect to appear in the Salisbury map pack for searches made inside Salisbury. The organic results below the map are different: for the Salisbury terms that matter most, D3 has no page in the top 10 and no local agency has its own page (04 snapshot table). Those organic positions are won by pages, reviews that mention Salisbury work, Salisbury links and citations. That is what the Salisbury hub and its five service pages are for.

**What we will not do.** No virtual office, mailbox, shared "suite" address or UPS Store box on Google Business Profile. Google treats those as ineligible, and a suspension would erase the Ocean City profile's progress too (PLAN §9). 04 notes that a shared Salisbury address (208 W Main St) is used by several listings and points to virtual offices; we stay away from that pattern (04 "Other names seen").

**Recommendation, in three steps:**
1. **Launch (weeks 2 to 6):** Salisbury pages are honest service-area pages. The H1 says "for Salisbury businesses", the FAQ answers "Do you have a Salisbury office?" plainly ("Not yet. We meet you at your business or by video, and we're about [[NEEDS: drive time]] away."), and the GBP service area lists Wicomico County.
2. **Bridge (week 3 onward):** Google Ads on the Salisbury terms where no local competitor bids, starting with "Google Ads management Salisbury MD" and "SEO company Salisbury MD" (04 Top 20 #1–2; PLAN 6.7).
3. **Decide at day 90 (owner decision D8):** open a real, staffed Salisbury location (a coworking office with signage and posted hours, PLAN 6.2) if any two of these are true: 3+ paying Salisbury clients; 5+ Salisbury leads a month; the Salisbury pages sit on page 1 organically for 3+ tracked terms. Only then add a second GBP, and only with real staffed hours.

---

## 7. Industry (vertical) page system

Each industry page targets the trade a buyer searches for, shows the package and starting price for that trade, and carries proof from that trade. D3's coverage per industry is from 01b §6. Because we have no clients yet, the "day-one proof" column lists what we can publish honestly before any case study exists.

| Order | Page | Keyword cluster (CSV) | D3 coverage (01b §6 unless noted) | Proof the page needs | Day-one proof we can publish now |
|---|---|---|---|---|---|
| 1 | `/industries/hospitality-vacation-rentals/` | vacation rental marketing ocean city md (r217); hotel marketing ocean city md (r215); hotel website design ocean city md (r64); short term rental marketing ocean city md (r278); vacation rental website design ocean city md (r66); hotel marketing agency ocean city md (r171); vacation rental marketing bethany beach de (r263); vacation rental marketing worcester county md (r244); hotel marketing agency rehoboth beach (r273); hotel marketing agency salisbury md (r216); vacation rental marketing salisbury md (r218) | Hotels: 2 case studies, 5 videos, 0 posts. **Vacation rentals: 0 pages anywhere.** D3 is #1 for "hotel marketing agency Ocean City MD" with a case study; no agency ranks for vacation rental marketing (04 snapshot) | A direct-booking case study with booking-share numbers; a hotel case study with before-and-after speed and booking-engine conversion | The 7,166 active short-term rental listings figure and the 21.3% year-over-year supply drop (AirDNA via 04 Seasonality); a direct-booking checklist; a sample speed audit of an anonymised rental site; the package price |
| 2 | `/industries/restaurants-bars/` | restaurant marketing ocean city md (r172); restaurant website design ocean city (r65); restaurant marketing salisbury md (r219); restaurant marketing rehoboth beach (r274); how to market a restaurant in a beach town (r289) | 5 case studies, 4 videos, 1 post; D3 ranks #1 to #4 for "restaurant marketing Ocean City MD" with blog case posts (04 snapshot) | A named restaurant case study with online-order or reservation numbers; Google Business Profile insights before and after | A Google Business Profile checklist for restaurants (menu, hours, photos, posts); a seasonal promotion calendar; the package price |
| 3 | `/industries/amusements-attractions/` | **No direct keywords.csv row** (04 "Review gaps still open" lists amusements as unresearched). Provisional cluster from CSV: tourism marketing agency eastern shore (r191); and supporting terms already owned elsewhere are linked, not targeted. `[[NEEDS: keyword pass for amusement park, boardwalk attraction, mini golf, water park marketing]]` | 1 case study (Jolly Roger), 1 video, 0 posts | Visitor-volume or ticket-sales metrics with dates; geofenced campaign results | A season-launch checklist (Memorial Day to Labor Day); geofencing explained in plain English; package price |
| 4 | `/industries/golf/` | golf course marketing agency ocean city md (r298); golf course website design maryland eastern shore (r299); ocean city golf getaway marketing (r300); golf course social media marketing berlin md (r302); golf package marketing delmarva (r301) | 1 mini-golf case study (Old Pro Golf), not a regulation course; no golf landing page (04 Additions) | Tee-time booking or package-sale numbers | A tee-time and package landing-page checklist; Route 589/611 course buyer context (04 Additions); package price. **All five keywords are unverified estimates; confirm with a SERP pass before writing (04 Additions)** |
| 5 | `/industries/real-estate/` | real estate marketing ocean city md (r220); real estate website design ocean city md (r67); real estate marketing salisbury md (r221); delmarva real estate photography and video (r252); real estate marketing sussex county de (r192); how should realtors use video and drone footage to sell second homes (r290) | 0 real estate case studies (The Land Group is a land brokerage, listed under "Other"); Terms carve out realtor feeds (03b §2.2) | Listing-video view and inquiry numbers; agent site speed before and after | Drone rules near Ocean City (Part 107, Assateague no-fly, CSV r286–r287) explained; listing-media package price; `[[NEEDS: drone licence]]` |
| 6 | `/industries/medical-dental/` | medical practice marketing salisbury md (r223); dental marketing eastern shore md (r249); medical practice marketing ocean city md (r222) | 2 case studies (Chesapeake Health Care, Visiting Angels); 0 posts; D3 Terms disclaim HIPAA compliance (03b §3.2 Exclusions 14) | New-patient appointment numbers; review-count growth | 169 physician offices in Salisbury (CSV r223); a local practice using an out-of-area agency (CSV r249); our rule that no patient data enters marketing tools; package price. `[[NEEDS: will we sign BAAs?]]` before any HIPAA wording |
| 7 | `/industries/home-services/` | home services marketing salisbury md (r225); hvac marketing salisbury md (r226); contractor website design salisbury md (r68); home services marketing eastern shore (r248); home services marketing ocean city md (r224) | 1 case study (Delaware Crawl Space); 1 post set in Virginia | Call and booked-job numbers from call tracking | A "show up in the map pack for your trade" checklist; call-tracking explained; package price |

Rules for all seven:
- **H1 names the trade and a place:** "Marketing for Ocean City Hotels and Vacation Rentals", "Websites and Marketing for Salisbury Medical Practices" (03b §2.1 standard).
- **At least 1,200 words** of original copy, an FAQ of 4 to 6, a package with a starting price, and links to the two most relevant town pages.
- **A pillar article per industry** follows in the content calendar (01b §7 #2: 8 pillars in year one).
- **No hotel or restaurant page makes a claim we cannot show.** D3 wins these terms with named case studies (04 Summary 6), so until we have our own, the pages lead with checklists, prices and process, and we do not expect them to outrank D3 for "hotel" or "restaurant" terms in the first 90 days (04 Top 20 #20, ratio 0.75).
- **Industries hub** (`/industries/`) carries one more term with no page of its own: law firm website design eastern shore md (r69).

---

## 8. Keyword-to-page map

### 8.1 How the 60 were chosen

`keywords.csv` marks about 100 rows as priority 1. The 60 below are all priority 1, chosen in this order: (1) the 20 highest-value terms in 04; (2) terms with a SERP snapshot where D3 is absent or ranks only with a generic URL; (3) the remaining priority-1 terms that complete a page's cluster. Each keyword has exactly one owning page. A page may own several keywords; no keyword is owned by two pages. Volumes are the CSV estimates.

| # | Keyword (CSV row) | Est. volume | D3 in snapshot | Owning page | Conflict or note |
|---|---|---|---|---|---|
| 1 | web design salisbury md (r11) | medium | Absent | `/locations/salisbury-md/web-design/` | |
| 2 | website design salisbury md (r12) | low | Absent | `/locations/salisbury-md/web-design/` | |
| 3 | web developer salisbury md (r13) | low | Not run | `/locations/salisbury-md/web-design/` | |
| 4 | seo company salisbury md (r111) | low | Absent | `/locations/salisbury-md/seo/` | CSV target type "service page"; we use a service-in-town page. **Flag 1** |
| 5 | seo services salisbury md (r112) | low | Not run (refused) | `/locations/salisbury-md/seo/` | Flag 1 |
| 6 | local seo salisbury md (r113) | very low | Not run | `/locations/salisbury-md/seo/` | Flag 1 |
| 7 | google ads management salisbury md (r198) | very low | Absent | `/locations/salisbury-md/google-ads/` | |
| 8 | ppc agency salisbury md (r200) | very low | Not run | `/locations/salisbury-md/google-ads/` | |
| 9 | marketing agency salisbury md (r108) | low | #4, #10 (`?p=` URLs) | `/locations/salisbury-md/` | |
| 10 | digital marketing agency salisbury md (r107) | low | Not run (refused) | `/locations/salisbury-md/` | |
| 11 | advertising agency salisbury md (r110) | low | #4, #5, #7 | `/locations/salisbury-md/` | |
| 12 | social media management salisbury md (r196) | low | #3, #4 (case study only) | `/locations/salisbury-md/social-media/` | |
| 13 | social media marketing salisbury md (r194) | low | Not run (refused) | `/locations/salisbury-md/social-media/` | |
| 14 | graphic design salisbury md (r208) | low | Absent | `/locations/salisbury-md/graphic-design-branding/` | |
| 15 | branding agency salisbury md (r204) | very low | #5, #6, #17 | `/locations/salisbury-md/graphic-design-branding/` | |
| 16 | digital marketing agency ocean city md (r97) | low | #1 with site map only | `/locations/ocean-city-md/` | **Flag 2**: the home page must not compete; home title and H1 say "Delmarva", not "Ocean City marketing agency" |
| 17 | marketing agency ocean city md (r98) | low | #2 with site map only | `/locations/ocean-city-md/` | Flag 2 |
| 18 | advertising agency ocean city md (r100) | low | #2 site map | `/locations/ocean-city-md/` | Part of demand is news about the town's tourism contract (CSV r100) |
| 19 | web design ocean city md (r2) | low | #6 generic page | `/locations/ocean-city-md/web-design/` | **Flag 3**: `/services/websites/` must not use "Ocean City" in its title |
| 20 | website design ocean city md (r3) | low | #6 site map, #9 | `/locations/ocean-city-md/web-design/` | Flag 3 |
| 21 | seo company ocean city md (r101) | low | Own page #15 | `/locations/ocean-city-md/seo/` | Flag 1 (CSV says service page) |
| 22 | seo services ocean city md (r102) | low | Not run (refused) | `/locations/ocean-city-md/seo/` | Flag 1 |
| 23 | social media marketing ocean city md (r193) | low | #9 | `/locations/ocean-city-md/social-media/` | OceanCity.com holds 6 of the top 10 (04 snapshot) |
| 24 | social media management ocean city md (r195) | low | Not run | `/locations/ocean-city-md/social-media/` | Flag 1 |
| 25 | video production ocean city md (r209) | low | #18 | `/locations/ocean-city-md/video-production/` | CSV says service page; Flag 1 |
| 26 | marketing agency eastern shore md (r128) | low | #1, #2, #3 | `/` (home) | Hardest regional term (04 Top 20 #13); a long-term target |
| 27 | delmarva marketing agency (r132) | low | Not run | `/` (home) | |
| 28 | digital marketing agency near me (r155) | medium local share | Not run | `/` (home, the GBP landing page) | **Flag 4**: "near me" is won by GBP proximity, not by a page (CSV r54 note) |
| 29 | marketing agency near me (r156) | medium local share | Not run | `/` (home) | Flag 4 |
| 30 | web design eastern shore md (r29) | low | #3, #4 homepage | `/services/websites/` | |
| 31 | delmarva web design (r32) | low | #4 | `/services/websites/` | Name collision with "Delmarva Digital" (CSV r133) |
| 32 | web designer near me (r54) | medium local share | Not run | `/services/websites/` | Flag 4; CSV target type "location page" |
| 33 | web design near me (r55) | medium local share | Not run | `/services/websites/` | Flag 4 |
| 34 | web design rehoboth beach de (r35) | low | Absent | `/locations/rehoboth-beach-de/` | |
| 35 | marketing agency rehoboth beach de (r136) | low | Absent | `/locations/rehoboth-beach-de/` | One page owns two head terms until Delaware demand justifies service-in-town pages |
| 36 | web design lewes de (r39) | low | Absent | `/locations/lewes-de/` | Lewes, UK pollution; state in H1 |
| 37 | seo company near me (r157) | medium local share | Not run | `/services/seo/` | Flag 4 |
| 38 | local seo services near me (r158) | low local share | Not run | `/services/local-seo-google-business-profile/` | |
| 39 | google business profile optimization ocean city md (r105) | very low | Not run | `/services/local-seo-google-business-profile/` | Town terms on a service page because volume is tiny; the page names both towns |
| 40 | google business profile optimization salisbury md (r115) | very low | Not run | `/services/local-seo-google-business-profile/` | As above |
| 41 | ai search optimization ocean city md (r104) | very low | Not run | `/services/ai-search-optimization/` | Positioning term, not traffic (04 Top 20 note) |
| 42 | ai search optimization salisbury md (r114) | very low | Not run | `/services/ai-search-optimization/` | As above |
| 43 | google ads management ocean city md (r197) | very low | Not run | `/services/google-ads-ppc/` | Many results are for Ocean City, NJ (CSV r197) |
| 44 | ppc management ocean city md (r199) | very low | Not run | `/services/google-ads-ppc/` | |
| 45 | website maintenance ocean city md (r8) | very low | Not run | `/services/website-care-hosting/` | |
| 46 | website maintenance salisbury md (r17) | very low | Not run (refused) | `/services/website-care-hosting/` | |
| 47 | branding agency ocean city md (r203) | very low | Not run | `/services/branding-graphic-design/` | |
| 48 | logo design ocean city md (r205) | low | Not run (refused) | `/services/branding-graphic-design/` | |
| 49 | vacation rental marketing ocean city md (r217) | low | Absent; no agency ranks | `/industries/hospitality-vacation-rentals/` | 04 Top 20 #7 |
| 50 | hotel marketing ocean city md (r215) | very low | Not run | `/industries/hospitality-vacation-rentals/` | D3 #1 on the "agency" variant with a case study (r171) |
| 51 | hotel website design ocean city md (r64) | very low | Not run | `/industries/hospitality-vacation-rentals/` | |
| 52 | restaurant marketing ocean city md (r172) | very low | #1 to #4 | `/industries/restaurants-bars/` | Hard until we have a named case study (04 Top 20 #20) |
| 53 | real estate marketing ocean city md (r220) | very low | Not run | `/industries/real-estate/` | |
| 54 | golf course marketing agency ocean city md (r298) | very low | Not run (refused) | `/industries/golf/` | Unverified estimate |
| 55 | how much does a small business website cost in maryland (r83) | very low | Not run | `/pricing/` | 04 Top 20 #20 |
| 56 | how much does a marketing agency cost (r176) | high (national) | Not run | `/pricing/` | National term; we target the local reader, not the national SERP |
| 57 | how much does a website cost (r82) | high (national) | Not run | `/blog/what-a-website-costs-on-the-eastern-shore/` | **Flag 5**: the article and `/pricing/` both discuss cost; the article owns the national question and links to `/pricing/`, which owns the local "Maryland" and town cost terms |
| 58 | how to rank higher on google maps (r180) | high (national) | Not run | `/blog/rank-higher-on-google-maps-delmarva/` | |
| 59 | how do i get my business to show up in chatgpt (r177) | medium (national) | Not run | `/blog/get-your-business-into-chatgpt-answers/` | |
| 60 | how to get more direct bookings for a vacation rental in ocean city (r284) | very low | Not run | `/blog/ocean-city-vacation-rental-direct-bookings/` | Article supports the hospitality page; anchor text differs to avoid overlap |

### 8.2 Conflicts and how they are resolved

| Flag | Conflict | Resolution |
|---|---|---|
| 1 | `keywords.csv` sets `target_page_type` = "service page" for several town-specific SEO, social and video terms | For Salisbury and Ocean City, the town-specific term goes to a service-in-town page, because 02 §3.4 sets the standard "a separate town page carries each {service} + {town} cluster", and D3's generic service pages are what currently rank (04 snapshot). The national service page owns the regional and "near me" variants |
| 2 | Home page and Ocean City hub both naturally fit "marketing agency Ocean City" | The Ocean City hub owns it. The home page title and H1 use "Delmarva" and "Eastern Shore"; the home page links to the Ocean City hub with the anchor "Ocean City marketing agency" |
| 3 | `/services/websites/` and the town web-design pages overlap on "web design" | The service page carries no town in its title or H1, owns the regional and "near me" terms, and links down to each town's web-design page |
| 4 | "Near me" terms in the CSV are tied to "location page" or "service page", but Google answers them from the map pack | They are assigned to the GBP landing page (home) or the matching service page for on-page relevance, and are measured in the map pack, not organic rankings |
| 5 | Cost content on `/pricing/` and in the cost articles | Pricing owns local and "Maryland" cost terms; articles own the national questions and link to pricing |
| 6 | `d3corp alternatives` (r78), `d3 corp alternatives` (r168), `d3corp reviews` (r169) are in the CSV | **Deliberately not assigned to any page.** Targeting a competitor's brand name would break PLAN Appendix B. `/choosing-a-marketing-agency/` targets the neutral "best" and "how to choose" terms instead |
| 7 | No `keywords.csv` rows exist for public relations, reputation management, AI chat assistant, amusements, careers, or a "free website audit" tool | Each such page is listed in 9.2 with "no CSV term" and a `[[NEEDS: keyword pass]]` note, using the closest CSV term where one honestly fits (04 "Review gaps still open" already lists amusements) |
| 8 | Rehoboth and Lewes are close enough that pages could cannibalise ("wordpress developer lewes rehoboth", r41) | Shared terms go to the Lewes page; Rehoboth owns its own town terms; each links to the other |

### 8.3 Angle-critical keywords outside the top 60

These are priority 2 or 3 in the CSV but they are the reason the Berlin, Ocean Pines and Delaware pages exist. Each also has exactly one owner (full assignments are in the short briefs, 9.2).

| Keyword (CSV row) | Owner |
|---|---|
| web design berlin md (r23); marketing agency berlin md (r121) | `/locations/berlin-md/` |
| website design ocean pines md (r25); marketing agency ocean pines md (r242) | `/locations/ocean-pines-md/` |
| web design bethany beach de (r44); web design fenwick island de (r43); marketing agency fenwick island de (r142) | `/locations/fenwick-island-bethany-beach-de/` |
| web design sussex county de (r47); seo company sussex county de (r145) | `/locations/sussex-county-de/` |
| website design easton md (r52); marketing agency easton md (r149) | `/locations/easton-cambridge-md/` |
| best digital marketing agency in ocean city maryland (r296); best marketing agency salisbury md (r116) | `/choosing-a-marketing-agency/` |
| ada compliant website design maryland (r76) | `/services/accessible-websites/` |

---

## 9. Content briefs

### 9.0 Rules that apply to every brief

- **Voice:** plain English, grade 8 reading level or lower (03b §2.5); every technical term defined in one sentence the first time it appears.
- **Never on the site:** ranking or placement promises, traffic or revenue promises, "best"/"top-rated"/"#1" claims without a cited source on the same screen (03b §6.3), D3's name, D3's phrases (03b §2.1, §2.4).
- **Every indexable page:** one H1 with a service or town in it; 3+ Delmarva towns named in body copy on service pages (03b §2.3); a starting price where a service is sold; the owner block; the 4-field form; 3 contextual internal links; an FAQ of 4 to 6 where listed; one static (non-carousel) proof block (03 §6).
- **Prices:** shown as `[[NEEDS: price]]` until the owner sets floors. Market reference points the owner can weigh (none of them is our price): a Southern Maryland vendor quoting $500 to $2,000 for a site (CSV r19, r83); redesign guides at $2,000 to $15,000 (r90); maintenance at $35 to $500 a month (r84); social media management at $500 to $2,500 a month (r279); Google Ads management at $500 to $2,000 a month (r281); e-commerce from about $5,000 at a Lewes firm (r42); D3's only published rate, $195 an hour for custom programming (01 §1.4), and its directory price bands of "under $10,000" and "$10,000+" (02b §2).
- **Title tags** are 60 characters or fewer and **meta descriptions** 155 or fewer (both checked by script before this draft was saved).

### 9.1 Full briefs for the ten money pages

#### 9.1.1 Home

- **URL:** `/`
- **Title tag:** Delmarva Marketing Agency | Media Masters Group
- **Meta description:** Websites, SEO and ads for Delmarva businesses. Prices on every page, a same-day reply from a real person, and no long contracts. See prices.
- **H1:** Marketing and websites for Delmarva businesses, with the prices on the page
- **H2 outline:**
  1. What we do (service cards with starting prices and timeline length)
  2. Five promises we put in writing (the five commitments, section 2.2)
  3. Towns we serve (Salisbury, Ocean City, Berlin, Ocean Pines, the Delaware beaches; links to each hub)
  4. Industries we know (seven cards)
  5. Who you'll work with (owner photo, name, direct line)
  6. Proof you can check today (live speed and accessibility scores; reviews once there are 5+; case study 1)
  7. Free website check (inline URL box that opens the tool)
  8. Questions people ask first (FAQ)
  9. Get a price or book a call (4-field form, phone, text, booking)
- **Word count:** 900 to 1,100
- **Keyword cluster:** delmarva marketing agency (r132); marketing agency eastern shore md (r128); digital marketing agency near me (r155); marketing agency near me (r156); delmarva digital marketing (r133); delmarva advertising agency (r135)
- **Three internal links (contextual, in body):** `/pricing/` ("see every starting price"); `/locations/salisbury-md/` ("Salisbury marketing agency"); `/locations/ocean-city-md/` ("Ocean City marketing agency")
- **Proof block:** live scoreboard tile (mobile performance, LCP, page weight, axe serious count) pulled from the last deploy; Google rating and count once 5+ reviews exist, otherwise the owner block with the reply-time promise; case study 1 headline numbers
- **FAQ (5):** How much does a website cost with you? · How fast will I hear back? · Do I have to sign a long contract? · Do you work with businesses in Delaware? · Who will actually do my work?
- **CTA:** primary "Book a 15-minute call"; secondary "See prices"; header "Call" and "Text"
- **Schema:** `ProfessionalService` (the sitewide `@id` node, full), `WebSite`, `WebPage`, `FAQPage`
- **Images needed:** owner portrait (real, 1:1 and 4:5); one real Delmarva photo for the hero, for example Main Street Berlin or the Ocean City inlet `[[NEEDS: photo shoot]]`; no stock, no illustration (03 §4.3)

#### 9.1.2 Contact

- **URL:** `/contact/`
- **Title tag:** Contact Us: Same-Day Reply | Media Masters Group
- **Meta description:** Call, text, book a 15-minute call or send four quick answers. A real person replies the same business day. Office hours and directions inside.
- **H1:** Talk to Media Masters Group today
- **H2 outline:**
  1. Three ways to reach us (call, text, book) with the reply-time promise
  2. Send us a note (the 4-field form)
  3. What happens next (3 steps with times)
  4. Where we are and when we're open (NAP exactly as on GBP, hours, static map image linking to Google Maps)
  5. Questions about getting started (FAQ)
- **Word count:** 350 to 500
- **Keyword cluster:** marketing company near me (r160). Weak by nature; the page's job is conversion and NAP consistency
- **Three internal links:** `/pricing/`; `/free-website-audit/`; `/what-you-own/`
- **Proof block:** owner block with photo and direct line; last month's median reply time once 20 leads exist
- **FAQ (4):** Can I meet you in person? · What should I have ready for the first call? · Do you charge for the first call? · What if I contact you on a weekend?
- **CTA:** "Book a 15-minute call" (Cal.com link); form button "Send it"
- **Schema:** `ContactPage`, `ProfessionalService` reference by `@id`, `BreadcrumbList`, `FAQPage`
- **Images needed:** owner portrait; exterior photo of the office if there is one `[[NEEDS: address type]]`

#### 9.1.3 Pricing

- **URL:** `/pricing/`
- **Title tag:** Website & Marketing Prices | Media Masters Group
- **Meta description:** Starting prices for websites, SEO, ads, social and care plans on Delmarva. Month to month, no exit fee, and you own everything we build.
- **H1:** Prices for websites and marketing on Delmarva
- **H2 outline:**
  1. How our pricing works (starting-at, three packages, what moves a price up)
  2. Websites (starter, business, custom) `[[NEEDS: prices]]`
  3. Care and hosting plans
  4. SEO, local SEO and AI search (monthly)
  5. Ads management (fee shown separately from ad spend)
  6. Social media and email (with deliverable counts)
  7. Branding, print, video and strategy (project prices)
  8. What every plan includes, and what costs extra (plain list)
  9. Contracts, cancelling and ownership (summary; link to `/what-you-own/`)
  10. What marketing costs on the Eastern Shore (short local context, links to the cost articles)
  11. Pricing questions (FAQ)
- **Word count:** 1,400 to 1,800
- **Keyword cluster:** how much does a small business website cost in maryland (r83); how much does a marketing agency cost (r176); how much does a website cost ocean city md (r10); how much does a website cost salisbury md (r19); web design pricing salisbury md (r77); seo pricing ocean city md (r173); marketing agency pricing salisbury md (r174); how much does local seo cost (r184)
- **Three internal links:** `/services/websites/`; `/services/seo/`; `/blog/what-a-website-costs-on-the-eastern-shore/`
- **Proof block:** the five commitments as a checklist; "price changes only at renewal, with 30 days' written notice" (03b §3.2 standard)
- **FAQ (6):** Why do you publish prices when most agencies don't? · Is ad spend included? · What makes a website cost more than the starting price? · Can I cancel any time? · Do you charge setup fees? · Do you offer payment plans?
- **CTA:** each package card "Book a 15-minute call about this package"; page footer form
- **Schema:** `WebPage`, `OfferCatalog` inside the `ProfessionalService` node (each package an `Offer` with `priceSpecification` minimum price), `FAQPage`, `BreadcrumbList`
- **Images needed:** none required; simple icons as inline SVG

#### 9.1.4 Websites

- **URL:** `/services/websites/`
- **Title tag:** Web Design for Delmarva Businesses | Media Masters Group
- **Meta description:** Fast, accessible websites for Eastern Shore businesses, from Lewes to Salisbury. Fixed price, written timeline, and you own the site from day one.
- **H1:** Web design for Delmarva and Eastern Shore businesses
- **H2 outline:**
  1. Who these sites are for (named buyers and towns: Ocean City rentals, Salisbury practices, Rehoboth shops)
  2. Three website packages and starting prices
  3. Which package fits you (comparison table: pages, timeline, price, best for) (03b §8 standard)
  4. How a build works: 6 steps, 4 to 8 weeks `[[NEEDS: confirm timeline]]`
  5. What "fast and accessible" means on your site (budget: under 1 MB, main content in 2.5 seconds or less, zero serious accessibility errors)
  6. You own it (domain, code, content, analytics)
  7. Proof (case study 1 with before-and-after scores)
  8. Web design in your town (links to Salisbury and Ocean City web-design pages and the town hubs)
  9. Website questions (FAQ)
- **Word count:** 1,300 to 1,600
- **Keyword cluster:** web design eastern shore md (r29); delmarva web design (r32); web design near me (r55); web designer near me (r54); wordpress website design eastern shore md (r72); website design company near me (r56)
- **Three internal links:** `/locations/salisbury-md/web-design/`; `/services/website-care-hosting/`; `/free-website-audit/`
- **Proof block:** case study 1 numbers (Lighthouse mobile, LCP, page weight, axe serious count, measured on the live site); one dated, named review about a website once one exists
- **FAQ (6):** How long does a website take? · Do you build on WordPress? · Can I edit the site myself? · What happens to my site if I stop paying you? · Will my site work for people using screen readers? · Do you write the words and take the photos?
- **CTA:** "Book a 15-minute website call"; secondary "Check your current site free"
- **Schema:** `Service` (provider by `@id`, `areaServed` list, `offers`), `FAQPage`, `BreadcrumbList`
- **Images needed:** 2 to 3 real screenshots of sites we built (our own first), phone and desktop; owner at work photo

#### 9.1.5 SEO

- **URL:** `/services/seo/`
- **Title tag:** SEO Services for the Eastern Shore | Media Masters Group
- **Meta description:** Monthly SEO for Delmarva businesses: a written 90-day plan, a plain-English report every month, and month-to-month terms. See the starting price.
- **H1:** SEO for Eastern Shore and Delmarva businesses
- **H2 outline:**
  1. What SEO is, in one paragraph
  2. Who it's for (towns and trades)
  3. What we do in your first 90 days (month 1 audit and fixes; month 2 local pages and Google Business Profile; month 3 content and links)
  4. What you get every month (sample report link)
  5. Prices (monthly, three tiers)
  6. How long it takes, honestly (no promises, the factors that decide it)
  7. SEO in your town (links to Salisbury and Ocean City SEO pages)
  8. SEO, local SEO and AI search: which you need (comparison table)
  9. SEO questions (FAQ)
- **Word count:** 1,300 to 1,600
- **Keyword cluster:** seo company near me (r157); seo services near me (r161); seo eastern shore maryland (r130); seo company delmarva (r134); seo company maryland eastern shore small business (r188)
- **Three internal links:** `/locations/salisbury-md/seo/`; `/services/local-seo-google-business-profile/`; `/reporting/`
- **Proof block:** the sample monthly report excerpt; our own Search Console growth chart once 90 days of data exist (dated, labelled as our site)
- **FAQ (6):** How long before SEO shows results? · Can you guarantee first place on Google? (answer: no one can; here is what we commit to instead) · What do you need from me each month? · How is SEO different from Google Ads? · Do I own the content you write? · What happens when I cancel?
- **CTA:** "Book a 15-minute SEO call"; "Run a free site check"
- **Schema:** `Service`, `FAQPage`, `BreadcrumbList`
- **Images needed:** one real screenshot of a (sample, labelled) monthly report; owner photo

#### 9.1.6 About

- **URL:** `/about/`
- **Title tag:** About Our Owner-Led Agency | Media Masters Group
- **Meta description:** Meet the owner who answers your calls. Why Media Masters Group publishes prices, works month to month, and builds fast, accessible websites.
- **H1:** About Media Masters Group, an owner-led Delmarva agency
- **H2 outline:**
  1. Why we started `[[NEEDS: owner story]]`
  2. Who you'll work with (owner bio, photo, direct line; link to the owner page)
  3. How we work (the five commitments)
  4. Where we work (towns and counties; chambers we belong to `[[NEEDS]]`)
  5. What we hold ourselves to (speed, accessibility, plain contracts; links to scoreboard and accessibility statement)
  6. Partners and memberships (only verifiable ones, each linked to its listing; 02b §4 standard)
  7. Questions about us (FAQ)
- **Word count:** 800 to 1,000
- **Keyword cluster:** local vs national marketing agency (r183)
- **Three internal links:** `/about/[[NEEDS: owner-slug]]/`; `/what-you-own/`; `/scoreboard/`
- **Proof block:** owner credentials `[[NEEDS: certifications]]`; chamber membership badges with links once joined; review count
- **FAQ (5):** How big is your team? · Who does the work if the owner is busy? · Do you subcontract? (answered from intake SUB marks) · Where is your office? · How long have you been in business?
- **CTA:** "Book a 15-minute call with [[NEEDS: owner first name]]"
- **Schema:** `AboutPage`, `ProfessionalService` (by `@id`, with `founder` → `Person`), `BreadcrumbList`, `FAQPage`
- **Images needed:** owner portrait; owner at a local business or event; office or workspace

#### 9.1.7 Salisbury location (hub)

- **URL:** `/locations/salisbury-md/`
- **Title tag:** Marketing Agency in Salisbury, MD | Media Masters Group
- **Meta description:** Marketing and websites for Salisbury and Wicomico County businesses. Prices shown, a same-day reply from a real person, month-to-month terms.
- **H1:** Marketing and websites for Salisbury, Maryland businesses
- **H2 outline:**
  1. What Salisbury businesses ask us for (year-round economy; medical, home services, professional firms; 04 Seasonality)
  2. Services for Salisbury, with starting prices (links to the five Salisbury service pages)
  3. Industries we serve in Salisbury (medical and dental, home services; links)
  4. Your Salisbury marketing calendar (3rd Friday, university year, budget season)
  5. How we work with you in Salisbury (drive time, meeting places, video calls; the honest office answer, section 6.5)
  6. Salisbury proof (review or case study when real; until then process and owner block)
  7. Nearby towns we also serve (Delmar, Fruitland, Ocean Pines, Berlin)
  8. Salisbury questions (FAQ)
- **Word count:** 1,000 to 1,300
- **Keyword cluster:** marketing agency salisbury md (r108); digital marketing agency salisbury md (r107); advertising agency salisbury md (r110); digital marketing salisbury md (r293); marketing company salisbury md (r109); marketing agency wicomico county (r126); marketing agency wicomico county md (r245); email marketing services salisbury md (r202); video production salisbury md (r210); drone videography salisbury md (r212)
- **Three internal links:** `/locations/salisbury-md/web-design/`; `/locations/salisbury-md/seo/`; `/industries/medical-dental/`
- **Proof block:** first Salisbury review or case study `[[NEEDS]]`; Salisbury Area Chamber membership badge with link `[[NEEDS: joined]]`; SBDC workshop date if given
- **FAQ (6):** Do you have a Salisbury office? · How far are you from Salisbury, and do you meet in person? · Do you work with Salisbury University or TidalHealth-area practices? (answered as "the kinds of businesses we help", not claiming clients) · How much does a Salisbury website cost? · Can you help with Google Ads for Salisbury searches? · Do you serve Delmar and Fruitland?
- **CTA:** "Book a 15-minute call"; "See Salisbury prices" (anchors to pricing)
- **Schema:** `WebPage` with `about` → `City` (Salisbury, MD), `Service` list with `areaServed` Salisbury and Wicomico County, `FAQPage`, `BreadcrumbList`. No second `PostalAddress` (we have no office there)
- **Images needed:** real photo of downtown Salisbury taken by us; owner meeting a client (with permission) when possible

#### 9.1.8 Ocean City location (hub)

- **URL:** `/locations/ocean-city-md/`
- **Title tag:** Marketing Agency in Ocean City, MD | Media Masters Group
- **Meta description:** Marketing and websites for Ocean City businesses that live by the season. Starting prices shown, same-day human replies, and no long contracts.
- **H1:** Marketing and websites for Ocean City, Maryland businesses
- **H2 outline:**
  1. Marketing for a town that changes size every summer (seasonal base; 7,166 active short-term rental listings, AirDNA via 04)
  2. Services for Ocean City, with starting prices (links to the four OC service pages)
  3. Ocean City industries (hospitality and rentals, restaurants and bars, amusements, golf, real estate)
  4. Your Ocean City year (January to April build window, pre-Memorial Day launch, September to November shoulder season; 04 Seasonality)
  5. Where to find us (address and hours if public `[[NEEDS]]`; static map)
  6. Ocean City proof (reviews and case studies when real)
  7. Nearby: West Ocean City, Berlin, Ocean Pines, Fenwick Island
  8. Ocean City questions (FAQ)
- **Word count:** 1,000 to 1,300
- **Keyword cluster:** digital marketing agency ocean city md (r97); marketing agency ocean city md (r98); advertising agency ocean city md (r100); marketing company ocean city md (r99); ocmd marketing agency (r118)
- **Three internal links:** `/locations/ocean-city-md/web-design/`; `/industries/hospitality-vacation-rentals/`; `/blog/off-season-marketing-ocean-city/`
- **Proof block:** Google rating and count (this is the GBP town) once 5+; first OC case study `[[NEEDS]]`; Ocean City chamber badge with link `[[NEEDS: joined]]`
- **FAQ (6):** When should an Ocean City business start on next season's website? · Can you work around my summer hours? · Do you help with rental and hotel booking sites? · Where are you located? · Do you meet in person on the island? · Can you help with Ocean City events and festival promotion?
- **CTA:** "Book a 15-minute call"; "Run a free site check before the season"
- **Schema:** `WebPage` with `about` → `City` (Ocean City, MD), `Service` list with `areaServed`, `FAQPage`, `BreadcrumbList`; the sitewide `ProfessionalService` carries the address if it is in Ocean City **[A2]**
- **Images needed:** real photo of Ocean City's business district or inlet taken by us; one shoulder-season photo

#### 9.1.9 Hospitality and vacation rentals (vertical)

- **URL:** `/industries/hospitality-vacation-rentals/`
- **Title tag:** Ocean City Hotel & Rental Marketing | Media Masters Group
- **Meta description:** Websites, direct bookings and marketing for Ocean City hotels, motels and vacation rentals. Package prices shown and a written timeline.
- **H1:** Marketing for Ocean City hotels and vacation rentals
- **H2 outline:**
  1. Who this is for (hotels and motels, property managers, rental owners, from Ocean City to Bethany)
  2. Win more direct bookings (booking-engine speed, Google Vacation Rentals and hotel listings, off-season demand; 01b §7 #1)
  3. The hospitality package and starting price `[[NEEDS]]`
  4. A 12-month hospitality calendar (pre-season, peak, shoulder, owner-recruitment season; 04 Seasonality)
  5. Accessible booking sites (why accessibility matters to hotels; facts only, no legal advice)
  6. Proof (direct-booking checklist now; case study when real)
  7. Hospitality questions (FAQ)
- **Word count:** 1,400 to 1,700
- **Keyword cluster:** vacation rental marketing ocean city md (r217); hotel marketing ocean city md (r215); hotel website design ocean city md (r64); short term rental marketing ocean city md (r278); vacation rental website design ocean city md (r66); hotel marketing agency ocean city md (r171); vacation rental marketing bethany beach de (r263); vacation rental marketing worcester county md (r244); hotel marketing agency rehoboth beach (r273); hotel marketing agency salisbury md (r216); vacation rental marketing salisbury md (r218)
- **Three internal links:** `/blog/ocean-city-vacation-rental-direct-bookings/`; `/locations/ocean-city-md/`; `/services/email-sms-marketing/`
- **Proof block:** sourced market facts (AirDNA 7,166 listings, supply down 21.3% year over year, via 04 Seasonality); an anonymised sample speed audit of a typical rental site (no competitor named); first hospitality case study `[[NEEDS]]`
- **FAQ (6):** Can you help me get more bookings that skip Airbnb and Vrbo fees? · Do you work with property managers and individual owners? · When should I update my site before the season? · Can my booking engine work with your site? · Do you write guest emails for repeat stays? · Do you work with Delaware beach rentals too?
- **CTA:** "Book a 15-minute hospitality call"; "Check your booking site's speed free"
- **Schema:** `Service` (serviceType "Hospitality marketing", `audience` → `BusinessAudience`), `FAQPage`, `BreadcrumbList`
- **Images needed:** real photo of an Ocean City hotel or rental row (permission if identifiable); phone screenshot of a booking flow we built when one exists

#### 9.1.10 Free website audit tool

- **URL:** `/free-website-audit/`
- **Title tag:** Free Website Check: Speed, Access, SEO | Media Masters Group
- **Meta description:** Check your website's phone speed, accessibility and local SEO basics in about a minute. Plain-English fixes. No email needed to see results.
- **H1:** Free website check for Delmarva businesses
- **H2 outline:**
  1. Enter your website (the tool; results on the same page)
  2. What we check and why (speed, accessibility, local SEO basics, Google Business Profile basics)
  3. How to read your results (plain-English guide to each score)
  4. Refresh or redesign? (decision guide based on the scores)
  5. Want us to walk you through it? (book a 30-minute walkthrough)
  6. Questions about the check (FAQ)
- **Word count:** 600 to 800 around the tool
- **Keyword cluster:** website redesign ocean city md (r9); website redesign salisbury md (r18); website redesign near me (r60); website refresh vs redesign (r90). **Flag 7:** no "free website audit" or "website speed test" term exists in the CSV; `[[NEEDS: keyword pass]]`
- **Three internal links:** `/services/websites/`; `/services/accessible-websites/`; `/scoreboard/` ("see how this site scores")
- **Proof block:** our own site's live scores beside the visitor's results
- **FAQ (5):** Is this check really free? · Do you store my results? · Why is my phone score lower than my desktop score? · Does a good score mean my site is ADA compliant? (answer: no; automated tools catch only part of the rules) · Can I check a site I don't own?
- **CTA:** after results: "Email me this report" (optional) and "Book a free 30-minute walkthrough"
- **Schema:** `WebApplication` (applicationCategory "BusinessApplication", `offers` price 0), `FAQPage`, `BreadcrumbList`
- **Images needed:** none; results are rendered as accessible HTML

### 9.2 Shorter briefs for every other page

Word counts are body copy, not template. CTA "Book" means "Book a 15-minute call". Every page also carries the header call and text buttons and the footer form. "No CSV term" pages are covered by Flag 7 (8.2).

| URL | Title tag | H1 | Keyword cluster (CSV rows) | Words | CTA |
|---|---|---|---|---|---|
| `/services/` | Marketing & Website Services \| Media Masters Group | Marketing and website services for Delmarva businesses | advertising agency near me (r159) | 700 | Book; "Which service do I need?" chooser |
| `/services/websites/starter-site/` | Starter Website, Fixed Price \| Media Masters Group | A starter website for small Delmarva businesses, at one fixed price | r62, r63, r86 | 1,000 | See the starter price |
| `/services/website-care-hosting/` | Website Hosting & Care Plans \| Media Masters Group | Website hosting, care and maintenance for Delmarva businesses | r8, r17, r59, r75, r34, r74, r84, r73, r45, r93 | 1,000 | Compare care plans |
| `/services/accessible-websites/` | Accessible (ADA) Websites in Maryland \| Media Masters Group | Accessible websites for Maryland and Delaware businesses | r76, r89 | 1,200 | Run a free accessibility check |
| `/services/local-seo-google-business-profile/` | Google Business Profile & Local SEO \| Media Masters Group | Local SEO and Google Business Profile help for Delmarva businesses | r158, r105, r115, r131, r187, r162, r167 | 1,200 | Run a free site check |
| `/services/ai-search-optimization/` | AI Search Optimization for Delmarva \| Media Masters Group | AI search optimization for Ocean City and Salisbury businesses | r104, r114, r164, r165, r163, r178, r179 | 1,200 | Book |
| `/services/google-ads-ppc/` | Google Ads & PPC Management, Delmarva \| Media Masters Group | Google, Microsoft and Meta ads for Delmarva businesses | r197, r199, r229, r235, r276, r275, r281, r282 | 1,200 | See ad management prices |
| `/services/social-media-management/` | Social Media Management, Delmarva \| Media Masters Group | Social media management for Delmarva businesses | r227, r228, r279, r253, r283 | 1,000 | See social packages |
| `/services/email-sms-marketing/` | Email & SMS Marketing, Delmarva \| Media Masters Group | Email and text marketing for Delmarva businesses | r201, r236, r247, r285 | 900 | Book |
| `/services/branding-graphic-design/` | Branding, Logo & Graphic Design \| Media Masters Group | Branding, logo and graphic design on the Eastern Shore | r203, r205, r207, r230, r231, r234, r246, r280 | 1,000 | See branding packages |
| `/services/print-design/` | Print Design & Rack Cards \| Media Masters Group | Print design for Delmarva businesses, from rack cards to signs | r213, r277, r214 | 800 | Book |
| `/services/video-photo-drone/` | Video, Photo & Drone on Delmarva \| Media Masters Group | Video, photo and drone work on Delmarva | r211, r232, r233, r250, r251, r288, r287, r286 | 1,100 | See shoot-day prices |
| `/services/marketing-strategy/` | Marketing Strategy Plan & Workshop \| Media Masters Group | A written marketing plan for your Delmarva business | r170, r190 | 900 | Book a strategy session |
| `/services/public-relations/` *(if SELL/SUB)* | Public Relations on the Eastern Shore \| Media Masters Group | Public relations for Eastern Shore businesses | No CSV term (Flag 7) `[[NEEDS: keyword pass]]` | 900 | Book |
| `/services/reputation-review-management/` *(if SELL/SUB)* | Review & Reputation Management \| Media Masters Group | Review and reputation management for Delmarva businesses | No CSV term (Flag 7) | 900 | Book |
| `/services/ai-chat-assistant/` *(if SELL/SUB; default not built)* | Website AI Chat Assistant \| Media Masters Group | An AI chat assistant for your website, with a human hand-off | No CSV term (Flag 7) | 800 | Book |
| `/industries/` | Marketing by Industry on Delmarva \| Media Masters Group | Marketing for the industries that run Delmarva | law firm website design eastern shore md (r69) | 700 | Book |
| `/industries/restaurants-bars/` | Restaurant & Bar Marketing, Ocean City \| Media Masters Group | Marketing and websites for Ocean City restaurants and bars | r172, r65, r219, r274, r289 | 1,200 | Book a restaurant call |
| `/industries/amusements-attractions/` | Attraction & Amusement Marketing \| Media Masters Group | Marketing for Ocean City amusements and attractions | r191 (Flag 7: `[[NEEDS: keyword pass]]`) | 1,200 | Book |
| `/industries/golf/` | Golf Course Marketing, Ocean City MD \| Media Masters Group | Marketing for golf courses and golf packages around Ocean City | r298, r299, r300, r301, r302 | 1,200 | Book |
| `/industries/real-estate/` | Real Estate Marketing, Ocean City MD \| Media Masters Group | Marketing, video and websites for Ocean City real estate agents | r220, r67, r221, r252, r192, r290 | 1,200 | See listing-media prices |
| `/industries/medical-dental/` | Medical & Dental Practice Marketing \| Media Masters Group | Marketing for Salisbury and Eastern Shore medical and dental practices | r223, r249, r222 | 1,200 | Book |
| `/industries/home-services/` | Home Services & Contractor Marketing \| Media Masters Group | Marketing for Salisbury and Eastern Shore home-service businesses | r225, r226, r68, r248, r224 | 1,200 | Book |
| `/locations/` | Where We Work on Delmarva \| Media Masters Group | The Delmarva towns we serve | r125, r27, r243 | 700 | Find your town |
| `/locations/salisbury-md/web-design/` | Web Design in Salisbury, MD \| Media Masters Group | Web design for Salisbury, Maryland businesses | r11, r12, r13, r14, r297, r15, r16, r70, r28, r96 | 1,000 | Book; see website prices |
| `/locations/salisbury-md/seo/` | SEO Company in Salisbury, MD \| Media Masters Group | SEO for Salisbury, Maryland businesses | r111, r112, r113, r127 | 900 | Run a free site check |
| `/locations/salisbury-md/google-ads/` | Google Ads Management, Salisbury MD \| Media Masters Group | Google Ads management for Salisbury, Maryland businesses | r198, r200 | 800 | See ad management prices |
| `/locations/salisbury-md/social-media/` | Social Media Management, Salisbury MD \| Media Masters Group | Social media management for Salisbury, Maryland businesses | r196, r194 | 800 | See social packages |
| `/locations/salisbury-md/graphic-design-branding/` | Branding & Design in Salisbury, MD \| Media Masters Group | Graphic design, logos and branding for Salisbury, Maryland businesses | r208, r204, r206 | 800 | See branding packages |
| `/locations/ocean-city-md/web-design/` | Web Design in Ocean City, MD \| Media Masters Group | Web design for Ocean City, Maryland businesses | r2, r3, r4, r5, r291, r20, r6, r7 | 1,000 | Book; see website prices |
| `/locations/ocean-city-md/seo/` | SEO Company in Ocean City, MD \| Media Masters Group | SEO for Ocean City, Maryland businesses | r101, r102, r292, r103, r119 | 900 | Run a free site check |
| `/locations/ocean-city-md/social-media/` | Social Media Marketing, Ocean City MD \| Media Masters Group | Social media marketing for Ocean City, Maryland businesses | r193, r195, r237 | 800 | See social packages |
| `/locations/ocean-city-md/video-production/` | Video Production in Ocean City, MD \| Media Masters Group | Video, photo and drone production in Ocean City, Maryland | r209, r238 | 800 | See shoot-day prices |
| `/locations/west-ocean-city-md/` | West Ocean City Marketing & Web Design \| Media Masters Group | Marketing and web design for West Ocean City, Maryland businesses | r21, r22, r120 | 900 | Book |
| `/locations/berlin-md/` | Marketing & Web Design in Berlin, MD \| Media Masters Group | Marketing and web design for Berlin, Maryland businesses | r23, r24, r121, r122, r123, r239, r241 | 900 | Book |
| `/locations/ocean-pines-md/` | Marketing & Web Design, Ocean Pines MD \| Media Masters Group | Marketing and web design for Ocean Pines, Maryland businesses | r25, r26, r242, r124 | 900 | Book |
| `/locations/fenwick-island-bethany-beach-de/` | Bethany & Fenwick Web Design \| Media Masters Group | Marketing and web design for Bethany Beach and Fenwick Island, Delaware | r44, r43, r140, r142, r141, r143 | 900 | Book |
| `/locations/rehoboth-beach-de/` | Rehoboth Beach Web Design & Marketing \| Media Masters Group | Web design and marketing for Rehoboth Beach, Delaware businesses | r35, r136, r36, r37, r137, r166, r254, r255, r257, r261, r38 | 1,000 | Book |
| `/locations/lewes-de/` | Lewes, DE Web Design & Marketing \| Media Masters Group | Web design and marketing for Lewes, Delaware businesses | r39, r40, r138, r139, r258, r259, r260, r256, r41, r42 | 1,000 | Book |
| `/locations/sussex-county-de/` | Sussex County Web Design & Marketing \| Media Masters Group | Web design and marketing for Sussex County, Delaware: Millsboro, Georgetown and Seaford | r47, r48, r81, r294, r145, r146, r264, r46, r144, r265, r49, r147, r148, r266 | 1,000 | Book |
| `/locations/easton-cambridge-md/` | Easton & Cambridge MD Marketing \| Media Masters Group | Marketing and web design for Easton and Cambridge, Maryland | r52, r149, r150, r267, r268, r269, r95, r53, r295, r151, r152, r270, r94 | 900 | Book |
| `/locations/pocomoke-snow-hill-md/` | Pocomoke & Snow Hill Web Design \| Media Masters Group | Web design and marketing for Pocomoke City and Snow Hill, Maryland | r50, r51, r153, r154, r271, r272 | 900 | Book |
| `/work/` | Case Studies: Delmarva Client Work \| Media Masters Group | Our work for Delmarva businesses, with the numbers | No CSV term (Flag 7) | 500 | Book |
| `/work/building-mediamastersgroup-com/` | How We Built Our Own Fast Website \| Media Masters Group | How we built a website that loads in 2.5 seconds or less on a phone | r87 | 1,200 | Run a free site check |
| `/work/[[NEEDS: client-2-slug]]/` | [[NEEDS: Client]] Case Study \| Media Masters Group | [[NEEDS: what we did]] for [[NEEDS: client]] in [[NEEDS: town]] | Client's industry + town terms not owned elsewhere, picked when the client is known; links up to the owning industry and town pages | 900 | Book |
| `/work/[[NEEDS: client-3-slug]]/` | [[NEEDS: Client]] Case Study \| Media Masters Group | As above | As above | 900 | Book |
| `/reviews/` | Client Reviews \| Media Masters Group | What Delmarva clients say about Media Masters Group | r189 | 400 plus the review feed | Leave a review (clients) / Book (prospects) |
| `/about/[[NEEDS: owner-slug]]/` | [[NEEDS: Owner Name]], Account Lead \| Media Masters Group | [[NEEDS: Owner Name]], owner and account lead | No CSV term (person and brand queries) | 600 | Book with [[NEEDS: first name]] |
| `/reporting/` | Sample Monthly Client Report \| Media Masters Group | What you get every month: a sample client report | r186 | 900 | Book |
| `/scoreboard/` | Live Speed & Accessibility Scores \| Media Masters Group | This website's speed and accessibility scores, updated on every change | No CSV term (proof page) | 400 | Check your own site free |
| `/what-you-own/` | What You Own & How to Cancel \| Media Masters Group | What you own, and how to cancel, in plain English | No CSV term (trust page) | 700 | See prices |
| `/choosing-a-marketing-agency/` | How to Choose an Eastern Shore Agency \| Media Masters Group | How to choose a marketing agency on the Eastern Shore: a 12-point checklist | r182, r106, r116, r117, r129, r296, r79, r80 | 1,500 | Download the checklist; Book |
| `/blog/` | Delmarva Marketing Blog \| Media Masters Group | Marketing advice for Delmarva businesses | No CSV term (index page) | 300 | Subscribe (optional) |
| `/blog/what-a-website-costs-on-the-eastern-shore/` | What a Website Costs on the Eastern Shore (2027) | What a website costs on the Eastern Shore in 2027 | r82, r91, r85, r92 | 1,800 | See our prices |
| `/blog/what-seo-costs-small-business/` | What SEO Costs a Small Business on Delmarva | What SEO costs a small business on Delmarva | r175 | 1,500 | See SEO prices |
| `/blog/rank-higher-on-google-maps-delmarva/` | How to Rank Higher on Google Maps: Delmarva Guide | How to show up higher on Google Maps: a guide for Delmarva businesses | r180, r88 | 1,800 | Run a free site check |
| `/blog/get-your-business-into-chatgpt-answers/` | How to Get Your Business Named in ChatGPT Answers | How Delmarva businesses can get named in ChatGPT and AI answers | r177, r181 | 1,500 | Book |
| `/blog/ocean-city-vacation-rental-direct-bookings/` | More Direct Bookings for Ocean City Rentals | How to get more direct bookings for your Ocean City vacation rental | r284 | 1,500 | Book a hospitality call |
| `/blog/off-season-marketing-ocean-city/` | Off-Season Marketing for Ocean City Businesses | Off-season marketing for Ocean City businesses: a month-by-month plan | r185 | 1,200 | Book |
| `/careers/` *(noindex until an opening)* | Careers \| Media Masters Group | Work with Media Masters Group | No CSV term | 300 | Email us |
| `/thank-you/` *(noindex)* | Thanks, We Got It \| Media Masters Group | Thanks. Here's what happens next | None (utility) | 150 | Book now |
| `/accessibility/` | Accessibility Statement \| Media Masters Group | Accessibility statement | None (trust page) | 500 | Report a barrier |
| `/privacy/` | Privacy Policy \| Media Masters Group | Privacy policy | None (legal) | 900 | None |
| `/terms/` | Terms of Service \| Media Masters Group | Terms of service | None (legal) | 1,500 max (01 §8 #2) | See what you own |
| `404` *(noindex)* | Page Not Found \| Media Masters Group | We couldn't find that page | None (utility) | 100 | Search, or go to services |

Blog post bylines: the owner, with photo, a 60 to 120-word bio and a link to the owner page (01b §2.2 standard). Every post names a Delmarva town or season and links to 1 service page and 1 case study (01b §2.6 standard).

---

## 10. Conversion plan

### 10.1 Above-the-fold pattern (phone first: 390 x 664 CSS px)

D3's phone first screen gives only 46% to page content; a cookie banner, chat card and overlay button take 35.7%, and no phone number appears on any mobile first screen (03 §3). Our pattern, top to bottom:

| Band | Content | Height budget |
|---|---|---|
| Sticky header | Logo (left); **Call** and **Text** buttons, each at least 44 x 44 px; menu button | 64 px or less (under 10%) |
| H1 | Service or town, plus place (for example "Web design for Salisbury, Maryland businesses") | 2 lines at 28 to 32 px |
| Promise line | One fact with a number: "From [[NEEDS: price]]. A real person replies the same business day." | 1 to 2 lines |
| CTAs | Primary "Book a 15-minute call" (full-width button); secondary text link "See prices" | 56 px button |
| Trust strip | Owner photo (40 px) + "[[NEEDS: owner name]], your account lead" + Google rating and count once there are 5+ reviews | 1 line |

At least 65% of the first screen is page content (03 §9 #1). Nothing opens on its own over the page. If analytics needs consent **[A10]**, the notice takes 15% of the screen or less, never covers a CTA, and "Reject" is one tap (03 §9 #2). Desktop (1440 px) uses the same order in two columns, with a real local photo on the right.

### 10.2 The 4-field lead form (one component, used on every page)

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 1 | Your name | `text`, `autocomplete="name"` | No | "What should we call you?" |
| 2 | Email or mobile number | `text` validated as email or US phone; `inputmode="email"` | **Yes** (`required`) | One field so nobody has to give both |
| 3 | What do you need? | Checkboxes from the single service list (the same data file that builds the nav) | No | Includes "Not sure yet" |
| 4 | Anything we should know? | `textarea` | No | Optional |

- **Friction score** by the 03b §5 method: 4 visible questions + 1 required = **5** (D3's footer form scores 15; 03b §5).
- Visible `<label>` on every control, error text tied with `aria-describedby`, no placeholder-only labels (03 §7.4 standard).
- **Hidden fields:** page URL, page town (from front matter), UTM source/medium/campaign, `gclid` if present, and a timestamp.
- **Spam protection:** Cloudflare Turnstile, loaded only when the visitor focuses the first field, so no third-party script runs on page load (01 §8 #19).
- **Text under the button:** "A real person replies the same business day (before 3 pm ET) or by 10 am the next business day. We never sell or share your details."

### 10.3 Booking link

- **Tool:** Cal.com **[A6]** with two event types: "15-minute intro call" and "30-minute free website check walkthrough".
- **Where:** the primary CTA on every page links to `/contact/#book`, which loads the booking widget only on click (no third-party script on page load). The thank-you page shows the booking widget directly.
- **Rules:** the owner's real calendar; buffer of 15 minutes; no same-hour bookings; summer hours set separately `[[NEEDS: summer availability]]`.

### 10.4 Phone and text

- One phone number, used on every page, every listing and in schema (02b §2 standard). It must accept texts **[A7]** `[[NEEDS: phone number]]`.
- Header buttons on every page at every width: `tel:+1XXXXXXXXXX` (E.164, one format everywhere, unlike D3's four formats; 01 §5.2) and `sms:+1XXXXXXXXXX`.
- No `format-detection: telephone=no` meta (D3 sets it; 01 §2.2).
- Call tracking: the main number stays in the HTML, footer, schema and every listing. A tracking number swaps in only for visitors arriving from paid ads (section 12.8), so NAP stays identical everywhere.

### 10.5 Chat: decision

**No chat widget at launch.** Reasons: D3's chat card and cookie banner cover the bottom third of every phone first screen and add three third-party hosts to every page (03 §3; 01 §7); our wedge is a human reply plus speed; and a one-person business cannot staff live chat in July. "Text us" in the header does the job a chat bubble does, and lands with a real person. Revisit at day 90 (owner decision D12; 03b §10.7). If chat is added later, it is labelled as a bot if it is one, offers "text a person" and "book a call" in its first reply, opens only on tap, and never covers the H1 or CTAs (03b §9 #12).

### 10.6 Response-time promise

Published wording (identical everywhere): **"Contact us before 3 pm ET on a business day and a person replies that day. After 3 pm, on weekends or holidays, you'll hear from us by 10 am the next business day."** Business days and hours: **[A8]** `[[NEEDS: hours]]`. Measured from the form Worker's timestamp to the first human reply logged in the CRM. Target: 95% inside the promise (01 §8 #5). The monthly median and 95th percentile are published on `/reporting/` once 20 leads exist.

### 10.7 Thank-you flow

1. **On submit:** the form posts to a Cloudflare Worker and the visitor lands on `/thank-you/` (noindex). If JavaScript is off, the form still posts and the Worker redirects.
2. **The thank-you page says:** who replies (owner name and photo), by when (the page computes "by 5 pm today" or "by 10 am tomorrow" from the submit time and hours), and the next 3 steps ("1. We read your note. 2. We reply with questions or a price range. 3. If it fits, a 15-minute call"). Then the booking widget, and links to `/pricing/` and `/reporting/`.
3. **Confirmation email** from the owner's address within one minute, repeating the same three facts, with no marketing content.
4. **Confirmation text** only if the visitor gave a mobile number and the form showed a consent line for texts `[[NEEDS: counsel to confirm consent wording]]`.
5. **Analytics event** `lead_submit` with service and town (section 12.8).

### 10.8 Lead routing

| Step | What happens | Tool |
|---|---|---|
| 1 | Worker validates, rejects spam (Turnstile), writes the lead with a timestamp | Cloudflare Worker + D1 or KV **[A6]** |
| 2 | Lead goes to the CRM with service, town and source tags | HubSpot free CRM or a shared sheet **[A6]** `[[NEEDS: tool choice]]` |
| 3 | Owner gets an email and a text alert at once | Worker → email API and SMS API |
| 4 | Auto-reply email to the lead (10.7) | Same |
| 5 | Reply clock starts; if no human reply is logged 2 business hours before the deadline, a second alert is sent | Worker cron |
| 6 | Weekly: reply-time report (median, 95th percentile, misses with reasons) | CRM report |
| 7 | Leads tagged SUB services are forwarded to the named subcontractor only after the owner replies first | Manual, by policy |

### 10.9 The free website check (audit tool) spec

**Purpose:** a lead magnet and a link magnet that demonstrates the technical wedge in one minute (04 Summary 9; PLAN 5.1).

| Item | Spec |
|---|---|
| Input | Website URL (required); business name and town (optional, for the Google Business Profile check) |
| Checks: speed | Google PageSpeed Insights API, mobile strategy: performance score, LCP, total page weight, number of third-party hosts. Our pass marks are our own standards (LCP 2.5 s or better, under 1 MB) |
| Checks: accessibility | Lighthouse accessibility score from the same API call, plus the count of failing audits by type (contrast, form labels, button names, link names). The page states plainly that automated checks catch only part of WCAG and are not a legal opinion |
| Checks: local SEO basics | A Worker fetches the HTML once: one H1 present; title 60 characters or fewer; meta description present; `LocalBusiness` or `ProfessionalService` schema with address, phone and `sameAs`; a valid `tel:` link; HTTPS and HSTS; `robots.txt`, XML sitemap and `llms.txt` present |
| Checks: Google Business Profile (optional) | Google Places API text search on name + town: whether a profile exists, rating and review count. Only if the owner approves the API cost `[[NEEDS: Places API budget]]`; otherwise this check is a manual checklist |
| Output | A plain-English report card in HTML: each item green, amber or red with one sentence on why it matters and one on how to fix it; our own site's live scores shown beside theirs; "Refresh or redesign?" verdict |
| No email gate | Results show immediately. "Email me this report" and "Book a 30-minute walkthrough" are optional buttons below the results |
| Privacy | Results are not published or indexed; stored for 30 days only if the visitor asks for the email copy |
| Abuse limits | Turnstile before each run; 5 runs per IP per day; results cached for 24 hours per URL in Workers KV to protect the API quota (PageSpeed returned HTTP 429 in the D3 research, 02 §9.1) `[[NEEDS: PageSpeed API key]]` |
| Performance | The tool's JavaScript loads only when the visitor focuses the URL box; the page itself meets the full budget |
| Rule | The tool never shows, stores or publishes any competitor's results on our site, and we never publish scores for sites we do not own |
| Events | `audit_run`, `audit_email`, `audit_walkthrough_booked` |

---

## 11. Proof and review engine

### 11.1 Reaching 25 Google reviews in 90 days

PLAN sets 25 Google reviews by day 90, 60 by day 180 and 120 by day 365 (PLAN §1), about 2 a week (PLAN 6.2). D3's Google rating is unknown (it was never checked; 02b §3), while D3 has 0 reviews on Clutch (02b §3), so Clutch is the first place we can be visibly ahead.

**The math.** Assume about 1 review for every 3 genuine requests **[A9]**. 25 reviews needs about 75 requests to people who really worked with us.

| Weeks | Source of reviewers (all real customers) | Requests | Reviews (target) | Running total |
|---|---|---|---|---|
| 0 to 2 | Past and current clients from intake `[[NEEDS: 3 to 5 names, PLAN §10 item 3]]`. Asked by personal text from the owner on the day GBP is verified | 10 | 5 | 5 |
| 3 to 6 | Launch-period clients: starter sites, GBP setups, care plans, ads accounts (each completed milestone triggers an ask) | 25 | 8 | 13 |
| 7 to 13 | Ongoing clients at each milestone; paid walkthroughs or workshops where the person received a real service `[[NEEDS: confirm paid or free walkthrough]]` | 40 | 12 | 25 |

**The routine (every completed milestone):**
1. Same day: owner sends a personal text with the short Google review link (from GBP), one open question ("What did we work on together, and what's your business?"), and no script.
2. Day 3: one email reminder with the same link. No third ask.
3. A client who had a problem gets a call, not a review request.
4. Every review gets an owner reply within 1 business day, naming the work and the town in our reply, not in theirs.
5. A few clients a quarter are asked for Clutch instead (target 5+ Clutch reviews in year one; 02b §3 standard), and a few for Facebook and Yelp (PLAN 6.2).

**Never, under any circumstances:** discounts, gifts, entries, or "founding client" prices tied to a review; reviews from staff, family or friends who were not customers; review gating (asking only happy clients); posting from our office network on a client's behalf; buying or swapping reviews. Any of these can remove every review we have (PLAN §9). A founding-client price, if the owner offers one, is never conditional on a review.

**If there are not enough clients.** PLAN §9 already warns that 25 reviews in 90 days assumes willing past clients. If intake lists fewer than 3, the 90-day target drops to 12, the review count is hidden on the site until it reaches 5, and paid search carries more of the lead load (PLAN 6.7). That is decision D4.

### 11.2 Case study format (one template, every case study)

The format fixes what is missing from D3's 28 case studies: 27 of 28 have no outcome number, none has a visible date or timeline, none has before-and-after screenshots (01b §3.1, §3.3).

1. **H1:** "{What we did} for {Client}, {Town}" (one H1).
2. **At a glance box:** client, town, industry, services used (linked), dates (kickoff, launch, "results as of"), and the 2 headline numbers.
3. **The problem, with a number:** one sentence ("Direct bookings were 18% of the total in 2026", as an example of the form, not a claim).
4. **What we did:** numbered steps with dates.
5. **Results:** at least 2 baseline → after metrics, each with the measurement window and source (GA4, Google Business Profile Insights, booking engine, call tracking).
6. **Before and after:** screenshots on phone, plus Lighthouse mobile scores and page weight before and after for any website work.
7. **Quote:** named person and job title, with written permission on file.
8. **Links:** each service used, the town page, the industry page, and 1 related article.
9. **Visible date** published and "results as of".
10. **Client sign-off** on the final text, filed before publishing. No sign-off, no publication.

Schema: `Article` with `about` the client organisation and `mentions` the services; `BreadcrumbList`. Video, if any, has a transcript and `VideoObject` (01b §4 standard).

### 11.3 What we publish from day one with no clients

| Proof | Page | Why a buyer believes it |
|---|---|---|
| Our prices | `/pricing/`, every service page | Checkable before any call; no local agency publishes prices (04 Summary 8) |
| Our process and timelines | Every service page | Specific steps and weeks |
| The owner | `/about/`, owner page, footer of every page | A real name, photo and direct line |
| Our own site, as case study 1 | `/work/building-mediamastersgroup-com/` | Real, measured numbers: Lighthouse, LCP, page weight, axe results, build time |
| Live scoreboard | `/scoreboard/` | Scores re-measured on every deploy, with the date |
| Free website check | `/free-website-audit/` | Visitors see their own site measured against ours |
| Sample monthly report | `/reporting/` | Exactly what a client receives, clearly labelled "sample data" |
| What you own and how to cancel | `/what-you-own/` | Plain terms, under 1,500 words |
| Accessibility statement | `/accessibility/` | Names WCAG 2.2 AA, the date of the last audit and the results (03 §7.4 standard) |
| Monthly AI-answer test | Quarterly article from the 20-prompt test (01b §7 #11; PLAN 6.6) | Method, prompts and dated results, whoever is named |
| Memberships | Footer and `/about/` | Chamber badges only once joined, each linked to the listing (02b §4 standard) |

---

## 12. Technical spec

### 12.1 Stack

- **Astro** static site generator, output plain HTML and CSS, deployed on **Cloudflare Pages** (PLAN 5.3). Intake says nothing different, so this stands **[A6]**.
- **New repository** `media-masters-site`, separate from this one (PLAN 5.3).
- **Interactive pieces** (audit tool, form validation, booking loader) are Astro islands that load JavaScript only on interaction.
- **Forms, audit API and lead routing:** Cloudflare Workers (Pages Functions), Workers KV for caching and rate limits, D1 for the lead log **[A6]**.
- **Content:** Markdown files in the repo with typed front matter (title, description, h1, keywords, town, faq, schema type), so the build can check every rule in this blueprint.
- **No WordPress, no runtime CMS, no plugins to patch** (01 §7 shows D3 on WordPress with Bootstrap loaded twice and a custom forms plugin; 01 §8 #19).

### 12.2 URL structure

- Lowercase, hyphenated, trailing slash, no dates in URLs, no file extensions: `/services/{service}/`, `/industries/{industry}/`, `/locations/{town}-{state}/`, `/locations/{town}-{state}/{service}/`, `/work/{client}/`, `/blog/{slug}/`.
- State abbreviation in every town slug (Berlin, Lewes, Cambridge and Salisbury all collide with other places; 04 Method).
- Maximum depth 3 from home for every page (01b §2.6 standard; D3 posts sit at median depth 8, 02 §6.1).

### 12.3 Performance budget (enforced in CI; a failing page blocks deploy)

| Metric (mobile, Lighthouse simulated throttling) | Budget | D3 measured (02 §9.1) |
|---|---|---|
| Lighthouse performance, accessibility, best practices, SEO | **95+ each, every template** | Performance 38 to 54; accessibility 77 to 84 |
| LCP | **2.5 s or better** (home 2.0 s stretch) | 3.6 s home; 15.1 to 30.3 s on 5 of 6 pages |
| Page weight | **Under 1 MB** (home under 500 KB) | 4,215 to 8,166 KiB |
| CSS + JS | Under 100 KB compressed | About 1.47 MB of unused JS per page |
| TBT | Under 200 ms | 1,000 to 2,050 ms |
| CLS | Under 0.1 | 0.031 to 0.049 (D3's one strength; match it) |
| INP (real users, once data exists) | Under 200 ms | Not in corpus |
| Requests | 30 or fewer | 90 to 108 on tested pages |
| Third-party hosts on load | 0 above the fold; analytics deferred | 17 on every page (02 §9.2) |
| Images | AVIF with WebP fallback, `srcset` at rendered size, LCP image `fetchpriority="high"` and never lazy | 77% WebP but up to 3,680 KiB of savings flagged (02 §7) |

Tooling: Lighthouse CI on every pull request (3 runs per template, median), plus a weekly run against production; Cloudflare Web Analytics for real-user Core Web Vitals; Search Console's Core Web Vitals report once there is traffic.

### 12.4 Accessibility bar

- **Target:** WCAG 2.2 AA.
- **Automated:** axe-core via Playwright on every page in CI, at 390 px and 1440 px; **zero critical and zero serious violations** or the build fails (03 §7.4). D3: 910 failing elements on 30 pages, 34 critical and 641 serious, including unlabelled selects in its lead forms (03 §7.1; 01 §5.1).
- **Manual:** keyboard-only pass and screen-reader pass (VoiceOver on iOS, NVDA on Windows) on the 10 money pages before launch and quarterly after.
- **Design rules:** text contrast 4.5:1 or better (3:1 at 24 px and up); in-text links underlined; focus visible; body text 18 px on mobile at weight 400 or heavier; targets at least 44 x 44 px; every control has a visible label; every icon link and badge has an accessible name (03 §7.4; 03b §8).
- **No overlay script of any kind** (D3 runs accessiBe on all 157 pages and still fails; 03 §7.3).
- **Statement** at `/accessibility/`: standard, last audit date, results, known issues, and a contact that a person answers within 1 business day.

### 12.5 Schema plan

One sitewide entity node, referenced everywhere by `@id`. D3's Organization node holds only name, URL and logo, with no address, phone or `sameAs` (02 §8.2).

| Type | Where | Key properties |
|---|---|---|
| `ProfessionalService` (`@id` `https://mediamastersgroup.com/#org`) | Every page (full on home, by reference elsewhere) | `name` "Media Masters Group", `legalName` "Media Masters Group LLC" **[A1]**, `url`, `logo`, `image`, `telephone` (E.164), `email`, `address` (`PostalAddress`, only if the address is public **[A2]**), `geo`, `openingHoursSpecification`, `priceRange`, `areaServed` (each town page's `City` plus Worcester, Wicomico, Somerset, Talbot, Dorchester and Sussex counties as `AdministrativeArea`), `sameAs` (GBP Maps URL, Facebook, LinkedIn, Instagram, Yelp, Clutch, BBB, chamber listings, all as they go live), `founder` → `Person`, `knowsAbout`, `hasOfferCatalog` |
| `Service` | Every service, service-in-town and industry page | `name`, `serviceType`, `provider` → `#org`, `areaServed`, `offers` (`Offer` with `priceSpecification` minimum price once set), `audience` on industry pages |
| `FAQPage` | Every page with an FAQ (service, location, industry, pricing, contact, audit) | Visible questions only, same text as on the page. Google shows FAQ rich results for few sites now, but the markup still helps Bing and AI assistants read answers |
| `BreadcrumbList` | Every page except home | `position` as numbers, full trail (D3 uses strings and skips levels; 02 §8.4) |
| `Person` | Owner page and every article author | `name`, `jobTitle`, `image`, `url`, `sameAs` (LinkedIn), `worksFor` → `#org` |
| `Article` / `BlogPosting` | Blog posts and case studies | `headline` (no brand suffix), `author` → `Person`, `datePublished`, `dateModified` (changes only when content does), `image` |
| `WebSite`, `WebPage`, `ContactPage`, `AboutPage` | Matching pages | Standard |
| `WebApplication` | Audit tool | `offers` price 0 |
| `VideoObject` | Any page with our video | Real description, `uploadDate`, `duration`, `thumbnailUrl`, transcript on the page |
| **Not used** | `AggregateRating` or `Review` about our own business on our own site | Google does not show stars for reviews a business publishes about itself, and marking them up invites a manual action. Reviews are shown as plain text with links to the source |

Validation: every page passes validator.schema.org and Google's Rich Results Test with zero errors (PLAN 5.5); JSON-LD strings never contain HTML entities (02 §8.4 #1).

### 12.6 Analytics, call tracking and search consoles

- **Cloudflare Web Analytics** (no cookies) for traffic and real-user Core Web Vitals.
- **Google Analytics 4** loaded through Cloudflare Zaraz so no Google script runs in the browser on page load **[A10]**. Events: `call_click`, `text_click`, `lead_submit` (with service and town), `booking_made`, `audit_run`, `audit_email`, `pricing_view`, `outbound_gbp`.
- **Google Ads and Microsoft Ads conversions** through Zaraz on the same events.
- **Call tracking:** CallRail **[A6]** with dynamic number insertion only for sessions from paid ads; the main number everywhere else (10.4). Google Business Profile calls measured in GBP's own call history; GBP website link tagged with UTM `source=gbp`.
- **Google Search Console and Bing Webmaster Tools** verified by DNS on day one; sitemap submitted to both; **IndexNow** ping on every deploy (PLAN 6.1).
- **Rank tracking:** the 20 priority terms of PLAN §7 plus the map pack for the 10 head terms in sections 6.1 and 8, from a phone-location grid in Ocean City and Salisbury `[[NEEDS: tool]]`.

### 12.7 `llms.txt`, robots and sitemap

- **`/llms.txt`:** a short Markdown file: who we are (one paragraph), NAP, hours, service area towns, the five commitments, links to `/pricing/`, every service page, every town hub, `/what-you-own/` and `/about/`, each with a one-line description. Regenerated at build from the same data as the site.
- **`/robots.txt`:** allow all search crawlers; explicit lines for AI search crawlers (OAI-SearchBot, PerplexityBot, Bingbot, Googlebot) set to allow; training crawlers (GPTBot, Google-Extended, ClaudeBot, CCBot) allowed by default **[A11]**, an owner decision (D13); names the sitemap. D3's robots.txt states no AI policy (02 §2.6).
- **XML sitemap:** generated at build; only indexable 200-status pages; `lastmod` from the content's real modified date; no `noindex` URL ever listed (D3 lists its noindexed testimonials page; 02 §2.2).

### 12.8 Redirects, headers, fonts and media

- **Redirects (`/_redirects`):** `http` → `https`; `www` → apex (or the reverse, one choice); uppercase and no-slash variants → canonical (D3 serves `/ID3AS/` and `/id3as/` both; 02 §2.4); fallback domains (PLAN §3 item 2) → apex; any URL we ever retire → its closest live page with a 301, **never to the home page** (D3 sends 40 legacy URLs to its home page; 02 §2.5). Zero internal links to redirects, checked at build.
- **Headers (`/_headers`):** HSTS, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy; long `cache-control` on hashed assets (D3 has only `referrer-policy`; 01 §7).
- **Fonts:** one family, self-hosted WOFF2, subset to Latin, at most two weights, `font-display: swap`, preloaded. Suggested: a highly legible open-licence family such as Atkinson Hyperlegible Next, final choice in the brand step `[[NEEDS: brand]]`. D3 loads Adobe Typekit and Google Fonts on every page (01 §7).
- **Video:** no YouTube or Vimeo embed above the fold on any page; below the fold only behind a click-to-load facade (a static thumbnail and a play button). D3 embeds full YouTube iframes on 51 pages (01b §4.1).
- **Images:** real photos only; no stock hero and no AI-generated art (03 §4.3); alt text on every informative image, `alt=""` on decorative ones; never the same hero on two pages.
- **Map:** static map image linking to Google Maps; no embedded map iframe.

### 12.9 Build-time QA gates (in addition to PLAN 5.5)

Every page, every deploy: Lighthouse 95+ ×4; axe zero critical or serious; schema valid; zero broken links and zero internal redirects; exactly one H1; title 60 characters or fewer and unique; meta description 120 to 155 characters and unique; word count at or above the brief; FAQ present where required; price block present on service, location and industry pages; 3 or more Delmarva towns named on service pages; location-page overlap under 30% (6.2); `lorem` and `[[NEEDS` strings fail the build on any page set to publish; reading level grade 8 or lower; one human read-through.

---

## 13. Build order in four sprints (PLAN 5.5)

PLAN 5.5 sets the sprints: (1) money pages, weeks 2 to 3; (2) remaining services and the first three case studies, weeks 3 to 4; (3) location and industry pages, weeks 4 to 5; (4) audit tool, blog with 6 articles, reporting page, weeks 5 to 6. Every page appears once below. Off-site local work (GBP, Bing, Apple, citations, chamber applications, review requests) starts in week 0 and runs alongside every sprint, because it is what moves the map pack (PLAN §3, 6.2).

**Option for this angle (decision D7):** move the Salisbury and Ocean City hubs (#40 and #46) from sprint 3 into sprint 1. Cost: about two extra page-days in week 2 to 3. Benefit: the two biggest local opportunities start being crawled about two weeks earlier, and the GBP has a town page to support it from launch. The table shows PLAN's order; if you approve D7, those two rows move up.

| # | Page | Sprint | Weeks |
|---|---|---|---|
| 1 | `/` | 1 | 2–3 |
| 2 | `/contact/` | 1 | 2–3 |
| 3 | `/thank-you/` | 1 | 2–3 |
| 4 | `/pricing/` | 1 | 2–3 |
| 5 | `/services/websites/` | 1 | 2–3 |
| 6 | `/services/seo/` | 1 | 2–3 |
| 7 | `/about/` | 1 | 2–3 |
| 8 | `/about/[[NEEDS: owner-slug]]/` | 1 | 2–3 |
| 9 | `/what-you-own/` | 1 | 2–3 |
| 10 | `/accessibility/` | 1 | 2–3 |
| 11 | `/privacy/` | 1 | 2–3 |
| 12 | `/terms/` | 1 | 2–3 |
| 13 | `404` | 1 | 2–3 |
| 14 | `/services/` | 2 | 3–4 |
| 15 | `/services/websites/starter-site/` | 2 | 3–4 |
| 16 | `/services/local-seo-google-business-profile/` | 2 | 3–4 |
| 17 | `/services/website-care-hosting/` | 2 | 3–4 |
| 18 | `/services/accessible-websites/` | 2 | 3–4 |
| 19 | `/services/ai-search-optimization/` | 2 | 3–4 |
| 20 | `/services/google-ads-ppc/` | 2 | 3–4 |
| 21 | `/services/social-media-management/` | 2 | 3–4 |
| 22 | `/services/email-sms-marketing/` | 2 | 3–4 |
| 23 | `/services/branding-graphic-design/` | 2 | 3–4 |
| 24 | `/services/video-photo-drone/` | 2 | 3–4 |
| 25 | `/services/print-design/` | 2 | 3–4 |
| 26 | `/services/marketing-strategy/` | 2 | 3–4 |
| 27 | `/services/public-relations/` (if SELL/SUB) | 2 | 3–4 |
| 28 | `/services/reputation-review-management/` (if SELL/SUB) | 2 | 3–4 |
| 29 | `/services/ai-chat-assistant/` (if SELL/SUB; default not built) | 2 | 3–4 |
| 30 | `/work/` | 2 | 3–4 |
| 31 | `/work/building-mediamastersgroup-com/` | 2 | 3–4 |
| 32 | `/work/[[NEEDS: client-2-slug]]/` | 2 | 3–4 |
| 33 | `/work/[[NEEDS: client-3-slug]]/` | 2 | 3–4 |
| 34 | `/reviews/` | 2 | 3–4 |
| 35 | `/locations/` | 3 | 4–5 |
| 36 | `/locations/salisbury-md/web-design/` | 3 | 4–5 |
| 37 | `/locations/salisbury-md/seo/` | 3 | 4–5 |
| 38 | `/locations/salisbury-md/google-ads/` | 3 | 4–5 |
| 39 | `/locations/salisbury-md/social-media/` | 3 | 4–5 |
| 40 | `/locations/salisbury-md/` | 3 (or 1 under D7) | 4–5 |
| 41 | `/locations/salisbury-md/graphic-design-branding/` | 3 | 4–5 |
| 42 | `/locations/ocean-city-md/web-design/` | 3 | 4–5 |
| 43 | `/locations/ocean-city-md/seo/` | 3 | 4–5 |
| 44 | `/locations/ocean-city-md/social-media/` | 3 | 4–5 |
| 45 | `/locations/ocean-city-md/video-production/` | 3 | 4–5 |
| 46 | `/locations/ocean-city-md/` | 3 (or 1 under D7) | 4–5 |
| 47 | `/industries/` | 3 | 4–5 |
| 48 | `/industries/hospitality-vacation-rentals/` | 3 | 4–5 |
| 49 | `/locations/berlin-md/` | 3 | 4–5 |
| 50 | `/locations/ocean-pines-md/` | 3 | 4–5 |
| 51 | `/industries/restaurants-bars/` | 3 | 4–5 |
| 52 | `/locations/rehoboth-beach-de/` | 3 | 4–5 |
| 53 | `/locations/lewes-de/` | 3 | 4–5 |
| 54 | `/locations/fenwick-island-bethany-beach-de/` | 3 | 4–5 |
| 55 | `/industries/real-estate/` | 3 | 4–5 |
| 56 | `/industries/home-services/` | 3 | 4–5 |
| 57 | `/industries/medical-dental/` | 3 | 4–5 |
| 58 | `/industries/golf/` | 3 | 4–5 |
| 59 | `/industries/amusements-attractions/` | 3 | 4–5 |
| 60 | `/locations/west-ocean-city-md/` (only if it passes the localness test) | 3 | 4–5 |
| 61 | `/locations/sussex-county-de/` | 3 | 4–5 |
| 62 | `/locations/easton-cambridge-md/` | 3 | 4–5 |
| 63 | `/locations/pocomoke-snow-hill-md/` | 3 | 4–5 |
| 64 | `/free-website-audit/` | 4 | 5–6 |
| 65 | `/scoreboard/` | 4 | 5–6 |
| 66 | `/reporting/` | 4 | 5–6 |
| 67 | `/blog/` | 4 | 5–6 |
| 68 | `/blog/rank-higher-on-google-maps-delmarva/` | 4 | 5–6 |
| 69 | `/blog/what-a-website-costs-on-the-eastern-shore/` | 4 | 5–6 |
| 70 | `/blog/ocean-city-vacation-rental-direct-bookings/` | 4 | 5–6 |
| 71 | `/blog/what-seo-costs-small-business/` | 4 | 5–6 |
| 72 | `/blog/get-your-business-into-chatgpt-answers/` | 4 | 5–6 |
| 73 | `/blog/off-season-marketing-ocean-city/` | 4 | 5–6 |
| 74 | `/choosing-a-marketing-agency/` | 4 | 5–6 |
| 75 | `/careers/` | 4 | 5–6 |

Counts: sprint 1, 13 items; sprint 2, 21; sprint 3, 29; sprint 4, 12. Total 75. Sprint 3 is the heaviest; within it, Salisbury and Ocean City go first because they carry 25 of the top 60 keywords (8.1). A service-in-town page that fails the localness test (6.2) does not ship in sprint 3; its keywords stay on the town hub until it passes.

**After launch (backlog, not counted above):** one article a week (PLAN 6.3), starting with the 8 industry pillars (01b §7 #2) and "Does my website need to be ADA compliant?" (CSV r89, currently owned by `/services/accessible-websites/`; move it to the article when written); a Google Ads spend calculator; a re-run of the 10 SERP consistency checks and the 110+ missing top-3 lookups (04 SERP consistency check; 04 Additions).

---

## 14. Top ten ways we beat D3

1. **Prices on every service page and a `/pricing/` page in the menu**; D3 publishes no price except $195/hr in its Terms (01 §1.4; 03b §3.1).
2. **Month-to-month terms in plain English**; D3's Terms set 3-year auto-renewing contracts while its ads page says "no long-term commitments" (03b §3.2; 01 §3.1).
3. **Real town pages with town-named H1s**; D3 has zero town pages and none of its 12 H1s names a place (02 §10; 04 Summary 1).
4. **Salisbury web, SEO and Google Ads pages where D3 is absent** from the snapshot results (04 snapshot table; 04 Top 20 #1–3).
5. **Main content in 2.5 seconds or less and under 1 MB per page**; D3 takes 15 to 30 seconds on 5 of 6 tested pages and weighs 4.2 to 8.2 MB (02 §9.1).
6. **Zero serious accessibility errors with no overlay**; D3 fails 910 automated checks on 30 pages, including its lead forms, with an overlay installed (03 §7.1; 01 §5.1).
7. **A named person replies the same business day, with a booking link**; D3's only reply promise comes from a chat bot and it has no booking path (01 §5.4–5.5; 03b §4.3).
8. **One 4-field form with a friction score of 5**; D3 runs seven different inquiry forms, up to 13 questions, with no field required in HTML (01 §5.1; 03b §5).
9. **A vacation-rental and hospitality page system**; D3 has zero vacation-rental content across 112 pages of posts, case studies and videos, and no agency ranks for the term (01b §6; 04 Summary 7).
10. **Complete local entity data and indexable, dated reviews**; D3's schema holds only name, URL and logo, its testimonials page is `noindex`, and it has 0 Clutch reviews (02 §8.2, §2.2; 02b §3).

---

## 15. Assumptions and owner decisions

### 15.1 Assumptions made because `intake.md` is empty

Each assumption is used somewhere above (marked **[A#]**). Each becomes a fact or changes when the owner answers.

| # | Assumption | Used in | Changes if... |
|---|---|---|---|
| A1 | Legal name "Media Masters Group LLC", brand "Media Masters Group", domain `mediamastersgroup.com` (PLAN §3 item 2) | Every title, schema, sitemap | The trademark check (PLAN §3 item 3) or domain availability says otherwise; every title changes |
| A2 | Home base is Ocean City (task brief; PLAN §1), with a public street address that can carry a GBP pin | Ocean City hub, schema `address`, map pack plan | If the owner works from home, GBP becomes a service-area business with no public address; Ocean City map-pack reach weakens and the Ocean City hub carries more of the load |
| A3 | Websites, SEO, local SEO/GBP, AI search, ads, social, email, branding, care plans: SELL. Print, video/drone, strategy: SELL or SUB. PR and reputation: unknown. AI chat assistant: NO | Section 3 offer status; sitemap | Intake marks differ; NO pages are removed from the sitemap and nav |
| A4 | No past clients can be named yet | Case studies 2–3, review plan | Intake lists clients; case studies and the week 0–2 review asks start at once |
| A5 | No AI chat product is sold | `/services/ai-chat-assistant/` not built | Intake marks it SELL or SUB |
| A6 | Tools: Cloudflare Pages, Workers, KV, D1, Turnstile, Zaraz; Cal.com; CallRail; HubSpot free CRM | Sections 10, 12 | Owner already pays for other tools |
| A7 | One phone number that accepts texts | Header, NAP, schema | The number cannot take texts; "Text" button is removed |
| A8 | Business hours Monday to Friday, 9 am to 5 pm ET | Reply promise, schema, GBP | Owner sets other hours, including summer hours |
| A9 | About 1 in 3 review requests produces a review; the per-town review split in 6.4 | Section 11.1 | Fewer clients or lower response; target drops (D4) |
| A10 | Cookieless analytics plus GA4 through Zaraz; no cookie banner needed unless GA4 cookies are enabled | Sections 10.1, 12.6 | Counsel advises a consent banner; it must then meet 03 §9 #2 |
| A11 | AI training crawlers allowed | robots.txt | Owner prefers to block training crawlers |
| A12 | The owner is the only account lead in year one | Commitment 4, owner block | Staff are hired; each gets a named profile |

### 15.2 Owner decision list (`[[NEEDS: ...]]` items), in priority order

The first five block the build; nothing in sprint 1 can ship without them.

| Priority | Decision | Blocks |
|---|---|---|
| D1 | **Business identity:** legal and brand name after the trademark check, domain, public street address or service-area business, the one phone number (texts allowed?), email, hours, summer hours | Every page, GBP, every citation |
| D2 | **Which services you sell (SELL, SUB, NO)**, especially PR, reputation, hosting/care, video/drone, print, AI chat | Sitemap, nav, section 3 |
| D3 | **Pricing floors and three packages** for websites, SEO and social first, then the rest (market reference points in 9.0) | `/pricing/` and every service page (commitment 2) |
| D4 | **3 to 5 past or current clients** who will leave a genuine Google review, and any who will be a case study with numbers | Review engine weeks 0–2; case studies 2–3; the 25-in-90-days target |
| D5 | **Owner name, photo, bio and credentials**, and who answers leads in July | Commitment 4, About, bylines, reply promise |
| D6 | **Confirm the five public commitments**, especially the 3 pm / 10 am reply rule and month-to-month terms with 30 days' notice | Every page; terms; `/what-you-own/` |
| D7 | **Pull the Salisbury and Ocean City hubs into sprint 1?** (recommended for this angle) | Build order |
| D8 | **Salisbury office trigger:** accept the day-90 rule in 6.5 (open a staffed location only if two of three thresholds are met), and never a virtual address | Salisbury map pack |
| D9 | **Towns you will actually drive to** (confirms or trims the 11 town pages, especially Easton–Cambridge and Pocomoke–Snow Hill) | Section 6 |
| D10 | **Chambers to join in quarter 1** (recommended: Ocean City, Salisbury Area, Ocean Pines, Bethany-Fenwick; 02b §8 #9) and budget | Localness check 5; citations |
| D11 | **Photo shoot:** owner, workspace, and one real photo in each of the first 6 towns | Every hero and town page |
| D12 | **Chat:** confirm no chat at launch, "text us" instead (10.5) | Conversion plan |
| D13 | **AI training crawlers:** allow or block (search crawlers stay allowed) | robots.txt |
| D14 | **Tool budget:** PageSpeed API key (free), Places API spend for the audit tool's GBP check, CallRail, rank tracker, Semrush (needed for the Semrush Agency Partners listing; 04 Summary 5) | Audit tool, tracking, directories |
| D15 | **Drone licence (Part 107) and insurance**, if drone work is sold | Video service and real estate pages |
| D16 | **Medical clients:** will we sign business associate agreements? Until answered, the medical page makes no HIPAA claim | `/industries/medical-dental/` |
| D17 | **Text-message consent wording** reviewed by counsel | Thank-you flow |
| D18 | **Manual checks the research could not run:** D3's Google Business Profile rating and count, Bing and Apple listings, the 5 AI-answer prompts, and who holds the Ocean City and Salisbury map packs today (02b §10; 04 Open questions 3 and 5) | Calibrates the 90-day targets |
| D19 | **Keyword pass for the gaps:** amusements, PR, reputation, "free website audit", and SERP checks for the golf and real estate rows (04 Review gaps; Flag 7) | Final clusters for 6 pages |
| D20 | **Mystery-shop D3's inquiry flow or not** (an ethics call, 03b §10.1) | Nothing in the build; informs sales talk only |

---

*End of draft B. Sources: `media-masters/PLAN.md`; `media-masters/intake.md`; `media-masters/research/D3-SCORECARD.md`, `01-d3-site-inventory.md`, `01b-d3-content-inventory.md`, `02-d3-seo-audit.md`, `02b-d3-offpage-local.md`, `03-d3-ux-critique.md`, `03b-d3-conversion-messaging.md`, `04-market-keywords.md`, `keywords.csv`.*
