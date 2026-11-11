# Media Masters Group site blueprint, draft A: service parity first

**Prepared for:** Media Masters Group LLC · **Date:** 2026-11-11 · **Status:** draft for owner review, one of several angles
**Angle:** start from every service D3 Corp sells, match the ones we will actually offer, beat each one on price transparency, proof, process, speed and response, then add the services D3 lacks. Location and industry pages come second.

**Sources read in full:** `media-masters/PLAN.md`, `media-masters/intake.md` (every field still TODO), and in `media-masters/research/`: `D3-SCORECARD.md`, `01-d3-site-inventory.md`, `01b-d3-content-inventory.md`, `02-d3-seo-audit.md`, `02b-d3-offpage-local.md`, `03-d3-ux-critique.md`, `03b-d3-conversion-messaging.md`, `04-market-keywords.md`, `keywords.csv` (301 rows). No web access was used.

**How citations work.** Short names follow the scorecard: 01, 01b, 02, 02b, 03, 03b, 04, SC (scorecard), PLAN. "01 §3" means section 3 of that file. Where a section is a numbered list, "01 §1.4" means section 1, item 4 (the scorecard's convention). Where documents disagree, this draft uses the corrected figure from each document's Verification section.

**How unknowns are marked.** `intake.md` is empty, so no business fact (name spelling, address, phone, prices, clients, owner bio, services sold) is invented. Each gap is either a numbered assumption (section 15) or a `[[NEEDS: ...]]` marker that a builder must not ship past.

**Standards fixed by this draft** (the research documents disagreed; we pick one value and use it everywhere):

| Item | Values found in research | Standard chosen | Why |
|---|---|---|---|
| Main-content load (LCP) on mobile | under 2.0 s (01 §8 #8); under 2.5 s (02 §9.3, 03 §8, SC §2) | **2.5 s or better** | Google's "good" threshold; matches 3 of 4 sources |
| Lead form length | 5 fields (01 §8 #4; 03 §5); 4 fields (03b §5, §9 #8) | **4 fields, 2 required** | Shorter wins; see section 10 for the friction-score note |
| Page weight | under 1 MB (02 §9.3; 03 §8) | **under 1 MB per page, every template** | Only one value found; stated so nobody relaxes it |
| Lighthouse | 95+ performance, 90+ others (PLAN §5.2; 01 §8 #8); 95+ all four (02 §9.3) | **95+ on all four mobile scores as the target; no page ships under 90 on any score** (PLAN §5.5 gate) | Target and floor are different things; both stated |
| Reply time | same business day (PLAN §3.7); before 3 pm same day, else 10 am next day (03b §7); 95% under 4 business hours (01 §8 #5) | **Same business day for anything received by 3 pm ET on a business day; by 10 am the next business day otherwise.** Internal target: 4 business hours | Published promise is the one we can always keep; the 4-hour figure is an internal goal, not a public claim |
| Review schema | "Review/AggregateRating where allowed" (PLAN §5.3; 02 §11 #5) | **No AggregateRating or Review markup about ourselves on our own pages** | Google treats self-served reviews of a LocalBusiness as ineligible for stars; reviews are shown as text with a link to the source |
| Map on location pages | "embedded map" (02 §10) | **Static map image linking to our Google Business Profile; the live map loads only on tap** | A Google Maps iframe would break the 1 MB and no-third-party-above-the-fold rules |

---

## 1. Summary for the owner (ten bullets)

1. **D3 has 12 service pages; we plan a page for each one we will really sell, plus 5 they do not have.** Which ones go live depends on the SELL/SUB/NO answers you put in `intake.md`. A service marked NO gets no page and no menu item. (01 §3)
2. **Prices are the headline.** D3 publishes no price anywhere except an hourly programming rate inside its Terms (01 §1.4). Every one of our service pages shows a "starting at" price and three packages, and `/pricing/` lists them all. We need your numbers to do this (section 15, item 3).
3. **Five public promises:** a named person replies the same business day, prices are on the site, no multi-year auto-renewing contracts, one named account lead per client, and a written timeline for every service. Each one answers a documented D3 weakness (section 2).
4. **We never promise rankings.** We promise what we control: how fast we answer, what we deliver, when, and at what price. D3's own Terms say no one can guarantee placement on Google or AI answers (03b §3.2); we agree, and say so plainly.
5. **The site itself is proof.** D3's pages took 15 to 30 seconds to show their main content on phones in 5 of 6 tests and weigh 4 to 8 MB (02 §9.1). Ours must load the main content in 2.5 seconds or less and weigh under 1 MB, and we publish our own scores on a live scoreboard page.
6. **Five services D3 lacks get their own pages:** public relations, website hosting and care plans, reputation and review management, Google Business Profile management, and a free website audit tool. D3 mentions PR, hosting and reputation only in a form dropdown, with no page (01 §3, §4). We also publish a sample monthly report.
7. **One short form, one booking link, tap-to-call on every phone screen.** D3 runs 7 different inquiry forms, the longest with 13 questions, and no booking link (01 §5.1; 03b §4.3). Ours: 4 fields, a 15-minute booking link, and a call button in the header.
8. **Town pages come second, but they come.** D3 has no page for any town (02 §10). We build 8 town pages and 4 Salisbury service pages in sprint 3, starting with Salisbury, where D3 has an office but does not appear for "web design Salisbury MD" (04 snapshot table).
9. **Reviews are the slowest asset, so they start on day one.** The target is 25 Google reviews in 90 days, which needs a real list of past clients or customers who will post (section 11). If that list is short, the target slips and paid search carries more of the load (PLAN §9).
10. **About 68 pages in four sprints, weeks 2 to 6.** Sprint 1 is the six money pages plus contact and legal basics. We cannot start sprint 1 copy until you answer the first five items in section 15.

---

## 2. Positioning and promises

### 2.1 Our position, in one sentence

> **Media Masters Group is the Delmarva marketing team that puts its prices on the page, has a named person answer you the same business day, and works month to month with no lock-in.**

Written to avoid D3's own phrasing. Words and lines we do not use anywhere on our site, because D3 uses them: "full-service", "drives real growth", "end-to-end", "days, not months", "top-rated", "no cookie-cutter", "scroll-stopping", "Let's start the conversation", "Request a quote", "ID3AS" (03b §2.1, §2.4, §2.5; 01 §3). Our call-to-action vocabulary is "Book a 15-minute call", "See prices", "Call", "Text us" and "Check my site free".

**What we never say:** that we will get anyone to #1, into the map pack, or into ChatGPT's answers by a date. Copy may describe the work, the timeline, the reporting and the reply time. A copy line that implies a ranking result fails QA.

### 2.2 The five commitments we publish

Each appears in the site footer, on `/pricing/`, on every service page, and in every proposal.

| # | Commitment (public wording, draft) | The D3 weakness it answers | Evidence |
|---|---|---|---|
| 1 | **"A person replies the same business day."** Messages received by 3 pm ET on a business day get a human reply that day; later ones by 10 am the next business day. The reply comes from a named person, and we publish our monthly median reply time once we have three months of data. | No form, contact page or quote page states when anyone will reply. The only reply promise on the site is a chat bot's "We respond immediately." | 01 §5.5; 03b §7; 03 §4.6 |
| 2 | **"Starting prices are on the site."** Every service page shows a starting-at price and three packages, with what is included and not included. | No price on any page; the only price is "$195/hr" for custom programming inside the Terms; directory listings give conflicting budget bands (under $10,000 vs $10,000+). | 01 §1.4, §3.1; 03b §3.1; 02b §2 |
| 3 | **"Month to month. Cancel by email with 30 days' notice. No exit fee."** Project work is a fixed price with a written scope. You own your domain, site, content, ad accounts, analytics and social accounts from day one. `[[NEEDS: owner and attorney approval of these terms]]` | Published Terms set a 3-year term that auto-renews yearly, require certified-mail notice 60 to 180 days before the end, can require payment for the whole term on early exit, charge 1.5% a month compounded late interest, and keep D3-owned "Systems" when a client leaves. The Digital Advertising page says "No long-term commitments or contracts necessary." | 03b §3.2; 01 §3.1; SC §4 #2. We compare published terms only and never characterize any client's signed contract (03b §3.2 note) |
| 4 | **"One named lead runs your account."** The lead's name, photo and direct line are on our site and in your proposal. `[[NEEDS: who the lead is on day one]]` | Meet Us names only the founder, shows no staff photos; all 80 `Person` schema nodes are "D3 Support"; every blog post is by "D3 Support". | 03 §4.3; 01b §2.2; 03b §8 |
| 5 | **"Every service has a written timeline."** Numbered steps with week counts on each service page, repeated identically in the proposal. | No service page states a timeline except Rapid Design's "days, not months", and that page's own form offers timeframes up to "6-12 months". | 01 §3 (patterns), §8 #15; 03b §8 |

Supporting promises (not in the five, but published): office hours on every page footer (D3 publishes none on its site, 02b §2), an accessibility statement naming WCAG 2.2 AA and the last audit date (D3's names no standard, 03 §7.3), and every claim on a marketing page checked against our own terms before publishing (03b §9 #13).

---

## 3. Service parity table

D3's 12 service pages plus its services hub, as listed in the Services menu and inventoried in 01 §3. "Offer status" follows the line in `intake.md` → "Services you will sell on day one". If that line says NO, the page is not built, and its keywords move to `[[NEEDS: re-map]]`.

Common to every row (not repeated in the cells): one H1 with service and region; a starting-at price and three packages; a numbered process with week counts; at least one proof block; 4 to 6 FAQs with `FAQPage` schema; "who you'll work with" with the named lead; the 4-field form and booking link; three or more Delmarva towns named in body copy (03b §2.3); at least 800 words of original copy (01 §8 #13). D3's service pages have none of these elements: no FAQ, no pricing block, no named person, no timeline, no town in body copy (01 §3 intro and patterns; 03b §2.3).

| # | D3 page (01 §3) | Our URL | Our keyword cluster (lead terms; full list in Appendix A) | How we exceed it (specific) | Offer status |
|---|---|---|---|---|---|
| 0 | `/services/` hub: lists 9 of its 12 services, no lead form (01 §3) | `/services/` | social media and seo agency ocean city md | Lists every service we sell from the same single list used in nav, footer and form (D3 runs four different service lists, 03b §3.1); each card shows its starting price and timeline | Always built |
| 1 | `/websites/` (no H1; 1,072 words; 6 case-study cards, no metrics) | `/services/web-design/` | web design ocean city md; website design ocean city md; web design eastern shore md; delmarva web design; web designer near me; web design near me | **Price:** three packages with page counts `[[NEEDS: prices]]`. **Process:** 6 steps, 4 to 8 weeks (draft; confirm). **Proof:** our own site's before/after scores and build log (case study 1); client results when we have them. **Tool:** "Check my site free" audit link. **Commitment:** launch date written into the proposal; content writing and photos listed as included or not, in plain words (D3 excludes both by default, 03b §3.2). "Which build is right for me" table (D3 offers none, 03b §8) | Offer if intake "Website design and development" = SELL or SUB |
| 2 | `/rapid-design-websites/` ("days, not months", form offers 6-12 months; no price, page count or launch figure) | `/services/web-design/starter-website/` | small business website design ocean city md; small business website design salisbury md | **Price:** one fixed price `[[NEEDS]]`. **Process:** stated page count and a written launch window (draft: 10 business days after content is received, per 01 §8 #15), the same on page, form and contract. **Proof:** the starter template's own Lighthouse scores, shown live | Offer if intake "Website design and development" = SELL or SUB and owner approves a fixed-scope starter |
| 3 | `/search-engine-optimization/` (H1 "Expert SEO Services", title 125 chars; one outcome figure, Visiting Angels) | `/services/seo/` | seo company ocean city md; seo services ocean city md; seo company near me; local seo services near me | **Price:** monthly starting price and three tiers `[[NEEDS]]`. **Process:** month 1 audit and fixes, months 2 to 3 local content and citations, monthly report on a fixed date. **Proof:** sample report (`/reporting/`); our own Search Console growth once we have it. **Tool:** free audit. **Commitment:** month to month; no ranking promises. D3's Terms make SEO an "additional charge... if requested" (01 §3.1) | Offer if intake "SEO (local and organic)" = SELL or SUB |
| 4 | `/answer-engine-optimization/` (promises AI citations; no method, measurement or AEO case study; 11-field form) | `/services/ai-search-optimization/` | ai search optimization ocean city md; ai search optimization salisbury md; generative engine optimization maryland | **Process:** published method in steps. **Proof:** the monthly 20-prompt test sheet with a worked example and dated screenshots (PLAN §6.6; 01 §8 #14), plus our own results once we have them. **Price** `[[NEEDS]]`. Plain-English definitions of AEO and GEO (03b §2.5). No promise of being cited | Offer if intake "AI search optimization" = SELL or SUB |
| 5 | `/digital-advertising/` (Google, Meta, geofencing, programmatic; "No long-term commitments" contradicted by Terms) | `/services/paid-ads/` | google ads management ocean city md; ppc management ocean city md; google ads agency near me; geofencing advertising ocean city md | **Price:** management fee shown as a flat monthly figure or % of spend `[[NEEDS]]`, ad spend shown separately. **Process:** setup in week 1, first optimization in week 2, monthly report. **Commitment:** the "no contract" claim is true in our terms; the client owns the ad accounts from day one, stated in writing (03b §2.4 ambiguity). **Proof:** our own paid-search bridge results once running (PLAN §6.7) | Offer if intake "Google Ads / Microsoft Ads / paid social" = SELL or SUB |
| 6 | `/social-media-marketing/` (1,424 words; social form reuses website questions such as "Timeframe for a New Site") | `/services/social-media-management/` | social media marketing ocean city md; social media management ocean city md; social media marketing near me; social media manager near me | **Price:** three tiers with posts per month stated (D3 states no deliverable counts, 01 §3 patterns) `[[NEEDS]]`. **Process:** month-one content calendar, approval step, monthly report. **Proof:** our own channels' weekly posting record. **Form:** the single site form, with "Social media" as a checkbox, never a website question (03b §5) | Offer if intake "Social media management" = SELL or SUB |
| 7 | `/email-marketing/` ("Proven Email Results" list with no numbers) | `/services/email-sms-marketing/` | email marketing services ocean city md; email marketing services salisbury md; email marketing agency near me | **Price** `[[NEEDS]]`. **Process:** list audit, template, send calendar, monthly report with open and click numbers. **Proof:** our own newsletter's published stats once running. SMS added only if intake says SELL/SUB, with consent rules spelled out | Offer if intake "Email and SMS marketing" = SELL or SUB |
| 8 | `/graphic-design/` (logo, identity, print, ad creative; no in-body CTA link) | `/services/graphic-design/` and, split out, `/services/branding-logo-design/` | graphic design ocean city md; graphic designer near me / logo design ocean city md; branding agency ocean city md; logo design near me | **Price:** logo package and brand-guide package shown separately `[[NEEDS]]`. **Process:** brief, 2 to 3 concepts, 2 rounds, final files (draft; confirm). **Commitment:** you own all final files and the source files. **Proof:** our own brand guide published as a sample | Graphic design: offer if intake "Graphic design and print" = SELL or SUB. Branding: offer if intake "Branding and logo design" = SELL or SUB |
| 9 | `/multimedia/` (video, photo, licensed drone, animation; 32-page video library; Terms exclude video hosting) | `/services/video-photo-drone/` | video production ocean city md; video production salisbury md; drone videography ocean city md; video production company near me | **Price:** half-day and full-day shoot rates `[[NEEDS]]`. **Process:** shot list, shoot day, edit, two revision rounds. **Proof:** every video page carries a transcript, 300+ words of context and `VideoObject` schema (D3's 32 video pages have none of these, 01b §4.1). Drone work only with a current Part 107 certificate `[[NEEDS: certificate number]]` | Offer if intake "Video, photography, drone" = SELL or SUB |
| 10 | `/print/` (nine product types at "competitive prices", no figures) | `/services/print-design/` | print design ocean city md; rack card design ocean city md | **Price:** design fee per piece shown, printing quoted at cost or as a stated markup `[[NEEDS]]`. **Process:** proof, approval, print vendor, delivery date in writing | Offer if intake "Graphic design and print" = SELL or SUB |
| 11 | `/strategy/` (five components, no named deliverable) | `/services/marketing-strategy/` | ocean city md marketing for seasonal businesses | **Deliverable named:** a written 12-month "season plan" (Memorial Day to Labor Day, shoulder season, off season) with budget split and calendar; a fixed price `[[NEEDS]]`. D3 names no deliverable such as a written plan (01 §4) | Not a line in intake. Offer if intake "Other" lists strategy, or if two or more marketing services are SELL |
| 12 | `/ai-assistant/` (resold chat bot, inferred; no H1, no price, no case study) | `/services/website-chat-assistant/` **(conditional; not built by default)** | No keyword in keywords.csv. `[[NEEDS: keyword pass for "website chatbot", "ai receptionist"]]` | If built: price shown, labelled as a bot, human hand-off in the first reply (03b §9 #12). Default recommendation is **not** to sell this at launch: our position is that a person answers | Offer only if intake "Other" lists an AI chat product as SELL or SUB |

**D3's non-service pages, matched:**

| D3 page | Our page | How we exceed it |
|---|---|---|
| `/case-studies/` + 28 case studies (no H1, 1 of 28 states a D3 result in numbers; 01b §3.1) | `/work/` + case studies | Every case study has 2+ before-and-after metrics with dates and source, a named quote with permission, a timeline and links to the services used (01b §3.3) |
| `/testimonials/` (`noindex`, in sitemap, no canonical; 02 §2.2) | `/reviews/` | Indexable, each review dated and linked to its source, live Google count and rating (02 §11 #5) |
| `/meet-us/` (founder named once, no photos; 03 §4.3) | `/about/` + `/about/[owner-slug]/` | Owner photo, bio, LinkedIn, `Person` schema; author page for bylines |
| `/contact-us/` (5-field form, no reply time) + `/request-a-quote/` (13 questions) (01 §5.1) | `/contact/` + `/thanks/` | One 4-field form, booking link, tap-to-call, reply-by time on the page and on the confirmation |
| `/id3as/` blog (4 posts in 12 months, all by "D3 Support"; 01b §2.1–2.2) | `/blog/` | Weekly, named author, Delmarva town or season in every post (01b §2.5) |
| `/videos/` + 32 thin video pages (01b §4) | Video pages live under `/work/` only when we have real footage | Transcript, 300+ words, `VideoObject`, visible date |
| `/careers/`, `/join-our-team/`, `/internships/` | `/careers/` **(conditional)** | Built only if intake shows hiring or a contractor network `[[NEEDS]]` |
| `/privacy-policy/`, `/terms/` (5,182 words), `/accessibility/` (no WCAG level) | `/privacy/`, `/terms/` (under 1,500 words, 01 §8 #2), `/what-you-own/`, `/accessibility/` (WCAG 2.2 AA, audit date) | Plain English; the ownership page is linked from the footer and pricing |
| Public internal pages: `/site-down/`, `/webmail/`, 2FA page, `/su/` (02 §2.3) | none | Client tools sit behind links sent to clients and are `noindex` (03b §5) |

---

## 4. Pages D3 lacks that we build

| Page | Evidence D3 lacks it | What ours does | Offer status |
|---|---|---|---|
| `/pricing/` | No pricing page in nav or footer; no price on any page except "$195/hr" in Terms (03 §5; 01 §1.4; 03b §3.1) | Starting-at prices and three packages per service, inclusions and exclusions, how billing works, link to `/what-you-own/` | Always built; content blocked by `[[NEEDS: prices]]` |
| `/services/public-relations/` | Home hero promises "Content Creation, Strategy & PR"; "Public Relations" and "Media Relations" sit in the Contact dropdown; there is no PR page (01 §1.3, §4; 03b §8) | Press releases, local media pitching (Coast Dispatch, Ocean City Today, Bayside Gazette, Salisbury Independent, Cape Gazette, Coastal Point; 04 authority table), event and award announcements, crisis plan | Offer if intake "Public relations" = SELL or SUB; if NO, the word "PR" appears nowhere on the site (03b §8) |
| `/services/website-care-plans/` | "Hosting and Maintenance" appears only in the Contact dropdown; the Terms carry no hosting clause, no uptime, backup or migration commitment; the only support path is an indexable `/site-down/` form with no stated response time (01 §3 patterns; 03b §3.2, §7) | Three care plans with a written 99.9% uptime target, backups, monthly updates, and a 1-hour first response to site-down reports 7 days a week (03b §7 standard) `[[NEEDS: owner confirms 7-day coverage]]` | Offer if intake "Website hosting, care, and maintenance" = SELL or SUB |
| `/services/reputation-management/` | "Reputation Management" is in the Contact dropdown with no page (01 §3 patterns) | Review-request system for clients, reply drafting within 24 hours, monthly review report; no incentives, no gating, no fake reviews (PLAN §6.2, §9) | Offer if intake "Reputation and review management" = SELL or SUB |
| `/services/google-business-profile/` | "Citation Management" is in the Contact dropdown with no page; no GBP service page among the 12 (01 §3); 04 finds no Shore provider for GBP optimization (04 §Summary 9) | Profile setup and audit, categories, services with prices, weekly posts, photo plan, Q&A, citation clean-up | Offer if intake "SEO (local and organic)" = SELL or SUB (sold as part of local SEO and on its own) |
| `/free-website-audit/` | No lead magnet promoted; an audit checklist exists only at the buried `/su/` intake page for a university program (03b §4.3) | Instant audit of any URL: speed, mobile, headings, local business data, accessibility basics; report on screen and by email (section 10.9) | Always built (sprint 4) |
| `/reporting/` | No reporting cadence or sample anywhere; SEO page says only "Ongoing reporting and optimization" (03b §7) | A full sample monthly report with labelled sample data, the delivery date, and what each number means | Always built |
| `/scoreboard/` | No public speed or accessibility scores; D3's own scores are 38 to 54 on mobile performance (02 §9.1) | Our own Lighthouse and axe results per template, updated on every deploy (PLAN §5.1) | Always built |
| `/what-you-own/` | Terms §7 keeps "Systems" as D3 property; clients "lose all rights to use" them on exit (03b §3.2) | One page: what the client owns from day one, how to cancel, how fast we hand over files (5 business days, 01 §8 #3) | Always built; `[[NEEDS: attorney review]]` |
| 8 town pages + 4 Salisbury service pages | 0 town pages; 0 of 12 H1s name a place; 0 town names in service-page body copy (02 §10; 03b §2.3) | Section 6 | Built in sprint 3 for towns intake lists |
| 7 industry pages | No industry page behind any service; vacation rentals absent from every content type; no post written for any local industry (03b §2.2; 01b §6, §7) | Section 7 | Built in sprint 3 for industries intake lists |
| `/compare/how-to-choose-a-marketing-agency/` | No comparison guidance between D3's own options, let alone agencies (03b §8) | Fair criteria checklist (prices, terms, reply time, ownership, proof); never names D3 (PLAN Appendix B) | Always built |
| `/about/[owner-slug]/` author page | No named author anywhere; all `Person` nodes are "D3 Support" (01b §2.2) | Bio, photo, credentials, `Person` schema with `sameAs` | Always built; `[[NEEDS: owner bio, photo]]` |
| `/thanks/` confirmation | Nothing after submit was crawled; no thank-you page in the sitemap (01 §5.4; 03b §5) | Names who replies and by when, offers the booking link (section 10.6) | Always built, `noindex` |

---

## 5. Full sitemap

URL rules: lowercase, trailing slash, hyphens, no dates in URLs, no more than three levels (02 §2.4). `(C)` = conditional on intake. `(noindex)` = built but kept out of search and out of the XML sitemap.

```
/                                                   Home
├── services/                                       Services hub
│   ├── web-design/                                 Websites  (C: web design SELL/SUB)
│   │   └── starter-website/                        Fixed-price starter site  (C)
│   ├── website-care-plans/                         Hosting, care and maintenance  (C)
│   ├── seo/                                        SEO  (C)
│   ├── ai-search-optimization/                     AI search optimization  (C)
│   ├── google-business-profile/                    Google Business Profile management  (C)
│   ├── paid-ads/                                   Google Ads, Microsoft Ads, paid social  (C)
│   ├── social-media-management/                    Social media  (C)
│   ├── email-sms-marketing/                        Email and SMS  (C)
│   ├── branding-logo-design/                       Branding and logo  (C)
│   ├── graphic-design/                             Graphic design  (C)
│   ├── print-design/                               Print design  (C)
│   ├── video-photo-drone/                          Video, photo, drone  (C)
│   ├── marketing-strategy/                         Season plan / strategy  (C)
│   ├── public-relations/                           Public relations  (C)
│   ├── reputation-management/                      Reviews and reputation  (C)
│   └── website-chat-assistant/                     Chat assistant  (C, not built by default)
├── pricing/                                        All prices and packages
├── free-website-audit/                             Audit tool
│   └── report/{id}/                                Individual audit results  (noindex, generated)
├── reporting/                                      Sample monthly report
├── scoreboard/                                     Our live speed and accessibility scores
├── work/                                           Case studies hub
│   ├── media-masters-site-build/                   Case study 1: our own site
│   ├── [client-2-slug]/                            (C: [[NEEDS: client + permission]])
│   └── [client-3-slug]/                            (C: [[NEEDS: client + permission]])
├── reviews/                                        Reviews (indexable)
├── locations/                                      Areas we serve hub
│   ├── salisbury-md/                               Salisbury
│   │   ├── seo/                                    SEO in Salisbury
│   │   ├── google-ads/                             Google Ads in Salisbury
│   │   ├── social-media/                           Social media in Salisbury
│   │   └── graphic-design-branding/                Graphic design and branding in Salisbury
│   ├── ocean-city-md/                              Ocean City (includes West Ocean City)
│   ├── rehoboth-beach-lewes-de/                    Rehoboth Beach and Lewes
│   ├── berlin-ocean-pines-md/                      Berlin and Ocean Pines
│   ├── bethany-beach-fenwick-island-de/            Bethany Beach and Fenwick Island
│   ├── sussex-county-de/                           Millsboro, Seaford, Georgetown
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
├── compare/
│   └── how-to-choose-a-marketing-agency/           Fair buyer's guide
├── blog/                                           Articles hub
│   ├── how-much-does-a-website-cost/
│   ├── how-much-does-seo-cost/
│   ├── show-up-in-chatgpt/
│   ├── rank-higher-on-google-maps/
│   ├── vacation-rental-direct-bookings-ocean-city/
│   └── off-season-marketing-ocean-city/
├── about/                                          About
│   └── [owner-slug]/                               Owner and author page
├── contact/                                        Contact and booking
├── thanks/                                         Form confirmation  (noindex)
├── what-you-own/                                   Ownership and cancellation, plain English
├── careers/                                        (C)
├── terms/
├── privacy/
├── accessibility/                                  Statement: WCAG 2.2 AA, last audit date
└── 404                                             Not-found page (not a URL in the sitemap)
Non-page files: /sitemap-index.xml, /robots.txt, /llms.txt, /_redirects, /_headers
```

Firm indexable pages at launch (all conditionals built, chat and careers excluded, two client case studies excluded): **63**. With the two client case studies: 65. Plus `/thanks/`, `/404` and generated audit reports. This clears the PLAN §4 bar of 40 pages.

West Ocean City: PLAN §5.1 lists it as its own location page. This draft folds it into the Ocean City page because D3's 21842 address and ours would share the ZIP, the 3 West Ocean City keywords are all very low volume (keywords.csv rows "web design west ocean city md", "web design agency west ocean city", "marketing agency west ocean city md"), and a separate page would be hard to make genuinely different (02 §10 notes the 21842 ZIP covers both). Revisit if our office is in West Ocean City (assumption A1).

---

## 6. Location page system

### 6.1 What makes a town page genuinely local (the "no town swap" rules)

A template that swaps the town name is what the programmatic competitors already run across the region (04 competitor profiles: Prager Microsystems and EZ Marketing, some on the wrong state). We will not beat them by doing the same thing. Every town page must pass all of these before it ships:

1. **Unique-copy gate:** at least 60% of body text is unique against every other location page (shingle-similarity check in the build; fails the build if lower). Minimum 900 words of body copy (02 §10 sets 600 as the floor; we raise it because each page carries several services).
2. **Who buys marketing here:** one section on the town's business mix with at least one sourced local data point (examples from 04: 7,166 active short-term rental listings in Ocean City per AirDNA, Aug 2026; Salisbury's 169 physician offices and TidalHealth; Bethany's roughly 950 year-round residents against about 15,000 in summer). Every figure carries its source and date.
3. **The town's marketing calendar:** the season and named events that drive demand there (04 authority table: Springfest and Sunfest and the OC Air Show for Ocean City; 3rd Friday and the Maryland Folk Festival for Salisbury, "confirm still running"; Berlin Main Street events; Rehoboth Beach Jazz Festival; Bethany Beach bandstand events).
4. **Where we meet you:** the honest logistics. We come to your business, or meet at `[[NEEDS: named public meeting spot per town]]`. No fake office, no implied address (section 6.4).
5. **Local proof:** a named client, review or project from that town, with permission. Until one exists, the block shows a dated audit walkthrough of a consenting local business's public website, or it is left out. It is never filled with another town's proof.
6. **What local search looks like here:** a plain description of what a buyer sees today, from the 04 snapshot for that town (for example, "results for Rehoboth web design are mostly directories and pages built in other states"), never naming or disparaging a competitor (PLAN Appendix B).
7. **Town FAQ:** 4 to 6 questions only someone in that town would ask (example for Ocean City: "Can you get a new site live before Memorial Day if we start in March?").
8. **Our memberships there:** chamber and association memberships we actually hold, with links. None are listed until joined.
9. **Static map** image of the service area linking to our Google Business Profile; `areaServed` in schema names the town and county.
10. **Links:** to 2+ service pages, 1+ industry page that fits the town, and the nearest neighbouring town page.

### 6.2 Order, evidence and keyword ownership

Build only towns intake lists under "Towns you will drive to" `[[NEEDS]]`. Order is by keyword value and D3's absence in the 04 snapshots.

| Order | Page | Why this position (evidence) | Owned keywords (lead terms; Appendix A has all) |
|---|---|---|---|
| 1 | `/locations/salisbury-md/` | Largest market; "web design salisbury md" is the biggest local head term (medium, 50-200/mo est.); D3 absent for it and for "website design Salisbury Maryland" (04 Summary 3, snapshot table) | web design salisbury md; website design salisbury md; marketing agency salisbury md; digital marketing agency salisbury md; advertising agency salisbury md |
| 1a | `/locations/salisbury-md/seo/` | Opportunity #1: no local agency page and D3 absent for "SEO company Salisbury MD" (04 top 20 #1) | seo company salisbury md; seo services salisbury md; local seo salisbury md |
| 1b | `/locations/salisbury-md/google-ads/` | Opportunity #2: only programmatic pages and other Salisburys rank (04 top 20 #2) | google ads management salisbury md; ppc agency salisbury md |
| 1c | `/locations/salisbury-md/social-media/` | D3 ranks only through a chamber case study, not a service page (04 top 20 #6) | social media management salisbury md; social media marketing salisbury md |
| 1d | `/locations/salisbury-md/graphic-design-branding/` | No agency page ranks for "graphic design Salisbury MD" (04 top 20 #8) | graphic design salisbury md; logo design salisbury md; branding agency salisbury md |
| 2 | `/locations/ocean-city-md/` | Home base (assumption A1); D3 wins "digital marketing agency Ocean City MD" with only its site map (04 snapshot) | digital marketing agency ocean city md; marketing agency ocean city md; advertising agency ocean city md; marketing company ocean city md |
| 3 | `/locations/rehoboth-beach-lewes-de/` | D3 absent from every Delaware snapshot; templates and directories lead (04 Summary 4, top 20 #14) | web design rehoboth beach de; marketing agency rehoboth beach de; web design lewes de |
| 4 | `/locations/berlin-ocean-pines-md/` | No agency based there; results polluted by Berlin, Germany; D3 ranks for Ocean Pines without an Ocean Pines page (04 top 20 #11; snapshot) | web design berlin md; marketing agency berlin md; marketing agency ocean pines md; website design ocean pines md |
| 5 | `/locations/bethany-beach-fenwick-island-de/` | Template pages only, one local firm (04 top 20 #15). D3 has Fenwick Island clients (High Stakes, Our Harvest) but no Fenwick page (01b §3.1; 02 §8.3) | web design bethany beach de; marketing agency bethany beach de; marketing agency fenwick island de |
| 6 | `/locations/sussex-county-de/` | D3 absent; templated county pages lead (04 snapshot "digital marketing Sussex County DE") | web design sussex county de; marketing agency sussex county de; seo company sussex county de |
| 7 | `/locations/easton-cambridge-md/` | D3 absent; templates then BBB/Clutch statewide lists (04 top 20 #16). Furthest from Ocean City; build only if intake confirms we drive there | website design easton md; marketing agency easton md; marketing agency cambridge md |
| 8 | `/locations/pocomoke-snow-hill-md/` | All very low volume; Worcester County seat and southern Worcester coverage (keywords.csv) | website design pocomoke city md; web design snow hill md; marketing agency snow hill md |
| hub | `/locations/` | County-level terms | web design worcester county md; marketing agency worcester county md |

### 6.3 Review and citation plan per town

Reviews: we ask every client for an honest Google review after a milestone, never script what they write, and never ask only the happy ones (section 11). Clients located in a town are asked by the person who worked with them; their reviews naturally mention where they are.

| Town page | Chamber or association (04 authority table) | Local press for guest columns and news (04) | Other citations | Review goal (Google, from clients in that area) |
|---|---|---|---|---|
| Salisbury | Salisbury Area Chamber (D3 is the chamber's marketing vendor, 02b §1: do not expect to out-rank that relationship in year one), Greater Salisbury Committee, SWED | Salisbury Independent, The Daily Times / Delmarva Now, WBOC, WMDT | Salisbury University and Wor-Wic (internships, guest lectures), Maryland SBDC workshops | 5 by day 180 |
| Ocean City | Greater Ocean City Chamber (D3 is a member, 02b §4), OCHMRA associate membership | Maryland Coast Dispatch, Ocean City Today | Maryland Office of Tourism services listing (D3 is listed, 04), Worcester County Economic Development | 10 by day 90 (home base carries most early reviews) |
| Rehoboth & Lewes | Rehoboth Beach-Dewey Chamber, Lewes Chamber (URLs to confirm, 04) | Cape Gazette, Delaware Business Times | Southern Delaware Tourism partner listing if allowed | 3 by day 180 |
| Berlin & Ocean Pines | Berlin Chamber, Ocean Pines Area Chamber (confirm URLs, 04) | Bayside Gazette (one pitch covers Ocean City Today too, 04) | Berlin Main Street sponsorship | 3 by day 180 |
| Bethany & Fenwick | Bethany-Fenwick Area Chamber (D3 shows its logo, 01 §2.3) | Coastal Point | Town of Bethany Beach events | 2 by day 180 |
| Sussex County | Greater Millsboro Chamber; one southern Delaware chamber (04) | Cape Gazette, Delaware Business Times | Sussex County Economic Development | 2 by day 365 |
| Easton & Cambridge | `[[NEEDS: chamber research; none in 04 table]]` | `[[NEEDS: local outlet research]]` | Clutch and BBB (the lists that rank there, 04) | 2 by day 365 |
| Pocomoke & Snow Hill | Worcester County Economic Development, Worcester County Tourism (04) | Maryland Coast Dispatch | Town listings | 1 by day 365 |

Citation basics for every town: one name, one address format, one phone on every listing (02b §2 standard); every listing logged with URL and check date; re-audited quarterly.

### 6.4 The Salisbury question

**The facts.** D3 has two offices, one in West Ocean City and one at 212 West Main Street, Salisbury, and both appear in its footer on every page (01 §6). Whether the Salisbury office is staffed, and which suite it uses, is not known (01 §9 Q7; 02b §10 Q4). Two offices usually means two chances at the Google map pack (PLAN §2, §9). We have no Salisbury address.

**What we do now (recommended):** be a service-area business in Salisbury, and say so honestly on the page: "We don't have a Salisbury office. We drive to you." The Salisbury hub and its four service pages compete in ordinary search results, where D3 is weakest (absent for web design, SEO and Google Ads in Salisbury, 04 snapshot table). Our Google Business Profile lists Wicomico County in its service area. We do not expect map-pack wins in Salisbury in year one.

**What we never do:** use a virtual office, mailbox or a coworking desk nobody staffs to create a Salisbury pin. Google's guidelines treat that as a fake location, and a suspension would cost the whole profile (PLAN §9). 04 notes that several Salisbury listings share one Main Street address that points to virtual offices; we stay out of that.

**When to revisit (day-90 review):** if Salisbury produces 3+ qualified leads a month, open a real, staffed second location with signage and posted hours (PLAN §6.2), then create a second Google Business Profile for it. `[[NEEDS: owner budget decision at the 90-day review]]`

---

## 7. Industry page system

The task lists seven Ocean City industries. D3's case studies lean on hospitality and tourism, but it has turned none of that into teaching content, and it has no industry page (01b §6; 03b §2.2). Each industry page: 1,200+ words, one sourced local data point, a season calendar for that industry, a "what we do for you" section per service, a proof block, 4 to 6 FAQs, and links to 2 services, 2 towns and 1 article.

| Page | Owned keywords (Appendix A has all) | What D3 has here (evidence) | Proof we need (and what to show until we have it) | Notes |
|---|---|---|---|---|
| `/industries/hospitality-vacation-rentals/` | vacation rental marketing ocean city md; hotel marketing ocean city md; hotel marketing agency ocean city md; hotel website design ocean city md; short term rental marketing ocean city md | 2 hotel case studies (Boardwalk Hotel Group, Castle in the Sand) and 5 hotel videos; D3 is #1 for "hotel marketing agency Ocean City MD" with a case study; **0 vacation-rental pages anywhere** (01b §6; 04 snapshot) | A direct-booking result for a rental or hotel client (bookings, booking-engine conversion rate, OTA share before and after). Until then: the direct-booking article, a booking-site speed check, and the 7,166-listing market figure (04) | Money page; full brief in section 9 |
| `/industries/restaurants-bars/` | restaurant marketing ocean city md; restaurant website design ocean city; restaurant marketing salisbury md; restaurant marketing rehoboth beach | 5 restaurant case studies, 4 restaurant videos; D3 holds #1-#4 for "restaurant marketing Ocean City MD" with blog case posts (01b §6; 04 snapshot) | Online-order or reservation counts before and after; Google Business Profile calls and direction requests. Until then: a menu-page speed and accessibility checklist | Hardest vertical against D3 (04 top 20 #20, ratio 0.75); build, but expect slow results |
| `/industries/amusements-attractions/` | tourism marketing agency eastern shore | 1 case study (Jolly Roger) and 1 video (01b §6) | Ticket or pass sales by channel, season-over-season. Until then: a pre-season checklist for boardwalk businesses | keywords.csv has no amusement terms; 04 "Review gaps still open" lists them. `[[NEEDS: keyword pass for "amusement park marketing", "boardwalk business marketing", "attraction website design"]]` |
| `/industries/golf/` | golf course marketing agency ocean city md; golf course website design maryland eastern shore; ocean city golf getaway marketing; golf course social media marketing berlin md; golf package marketing delmarva | Old Pro Golf (mini golf, an amusement) and a charity golf video; no golf-course client and no golf page (04 golf section; 01b §6) | Tee-time or package bookings by source. Until then: package landing-page example built on our own template | All volumes very low; buyers are few and high-value; aim the page at the Ocean City, Berlin and Route 589/611 courses (04) |
| `/industries/real-estate/` | real estate marketing ocean city md; real estate website design ocean city md; real estate marketing salisbury md; delmarva real estate photography and video; real estate marketing sussex county de | The Land Group (land brokerage) case study; Terms carve out an MLS feed exclusion for "REALTOR" clients (01b §3.1; 03b §2.2) | Listing views or leads from video and drone; agent site enquiries. Until then: a sample listing video with drone shots `[[NEEDS: Part 107 certificate]]` | 8 rows in keywords.csv, 0 snapshots (04 review gaps) |
| `/industries/medical-dental/` | medical practice marketing salisbury md; dental marketing eastern shore md; medical practice marketing ocean city md | Chesapeake Health Care and Visiting Angels case studies; Coastal Hospice testimonial (01b §6) | New-patient calls or booking requests by month. Until then: an accessibility and HIPAA-aware form checklist (we state we do not handle patient health data in forms) | Salisbury-weighted: 169 physician offices, TidalHealth (04 seasonality); D3's Terms disclaim HIPAA and ADA compliance (03b §3.2) |
| `/industries/home-services/` | home services marketing salisbury md; hvac marketing salisbury md; contractor website design salisbury md; home services marketing ocean city md; home services marketing eastern shore | 1 case study (Delaware Crawl Space), orphaned and unreachable from home (01b §3.1) | Calls and form leads per month from search and GBP. Until then: a "call-ready" GBP checklist | Year-round demand, steadier than Ocean City (04 seasonality) |
| `/industries/` hub | none owned; links to all seven | | | |

---

## 8. Keyword-to-page map: the 60 highest-priority keywords

**How the 60 were chosen** (all volumes are estimates from keywords.csv; no tool data exists, 04 Method):
1. All 21 terms in 04's "20 highest-value terms" list.
2. Every other priority-1 term with an estimated volume of low (10-50) or higher.
3. Five priority-1, very-low terms that anchor a money page or a service D3 lacks: ai search optimization ocean city md, google business profile optimization ocean city md, hotel marketing ocean city md, restaurant marketing ocean city md, website maintenance ocean city md.

Each keyword has exactly one owning page. "D3 position" is the single 04 snapshot reading (one reading only; 04 SERP consistency check), or "not checked".

| # | Keyword | Est. volume | Priority | Owning page | D3 position (04 snapshot) |
|---|---|---|---|---|---|
| 1 | web design salisbury md | medium (50-200) | 1 | `/locations/salisbury-md/` | not present (named only in INSIDEA listicle) |
| 2 | seo company salisbury md | low (10-50) | 1 | `/locations/salisbury-md/seo/` | not present |
| 3 | marketing agency salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | #4 (?p=9), #10 (?p=1810) |
| 4 | digital marketing agency ocean city md | low (10-50) | 1 | `/locations/ocean-city-md/` | #1 (site-map); also #9, #10, #19 |
| 5 | marketing agency ocean city md | low (10-50) | 1 | `/locations/ocean-city-md/` | #2 (site-map); also #14 (/meet-us/) |
| 6 | web design ocean city md | low (10-50) | 1 | `/services/web-design/` | #6 (/websites/); also #10 site-map, #14 homepage |
| 7 | seo company ocean city md | low (10-50) | 1 | `/services/seo/` | own SEO page #15; Semrush profile #9 |
| 8 | social media management salisbury md | low (10-50) | 1 | `/locations/salisbury-md/social-media/` | #3, #4 (Chamber case study, not a service page) |
| 9 | social media marketing ocean city md | low (10-50) | 1 | `/services/social-media-management/` | #9 (/social-media-marketing/) |
| 10 | google ads management salisbury md | very low (<10) | 1 | `/locations/salisbury-md/google-ads/` | not present |
| 11 | vacation rental marketing ocean city md | low (10-50) | 1 | `/industries/hospitality-vacation-rentals/` | not present |
| 12 | web design eastern shore md | low (10-50) | 1 | `/services/web-design/` | #3, #4 (homepage; snapshot query 'web design Eastern Shore Maryland') |
| 13 | marketing agency eastern shore md | low (10-50) | 1 | `/` | #1, #2, #3 (homepage and ?p= duplicates) |
| 14 | web design rehoboth beach de | low (10-50) | 1 | `/locations/rehoboth-beach-lewes-de/` | not present |
| 15 | marketing agency rehoboth beach de | low (10-50) | 1 | `/locations/rehoboth-beach-lewes-de/` | not present |
| 16 | web design lewes de | low (10-50) | 1 | `/locations/rehoboth-beach-lewes-de/` | not present |
| 17 | video production ocean city md | low (10-50) | 1 | `/services/video-photo-drone/` | #18 (/multimedia/) |
| 18 | graphic design salisbury md | low (10-50) | 1 | `/locations/salisbury-md/graphic-design-branding/` | not present |
| 19 | web designer near me | medium (50-200) from Delmarva searchers | 1 | `/services/web-design/` | not checked |
| 20 | digital marketing agency near me | medium (50-200) local share | 1 | `/` | not checked |
| 21 | how much does a small business website cost in maryland | very low (<10) | 1 | `/pricing/` | not checked |
| 22 | website design ocean city md | low (10-50) | 1 | `/services/web-design/` | #6 (site-map), #9 (/websites/), #13 (snapshot query 'website design Ocean City Maryland') |
| 23 | website design salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | not present (snapshot query 'website design Salisbury Maryland') |
| 24 | web developer salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | not checked |
| 25 | delmarva web design | low (10-50) | 1 | `/services/web-design/` | #4 (/service/development; snapshot query 'web design Delmarva') |
| 26 | web design near me | medium (50-200) from Delmarva searchers | 1 | `/services/web-design/` | not checked |
| 27 | advertising agency ocean city md | low (10-50) | 1 | `/locations/ocean-city-md/` | #2 (site-map); also #11 Semrush profile, #16 (snapshot query 'advertising agency Ocean City Maryland') |
| 28 | seo services ocean city md | low (10-50) | 1 | `/services/seo/` | not checked |
| 29 | digital marketing agency salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | not checked |
| 30 | marketing company salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | not checked |
| 31 | advertising agency salisbury md | low (10-50) | 1 | `/locations/salisbury-md/` | #4, #5, #7 |
| 32 | seo services salisbury md | low (10-50) | 1 | `/locations/salisbury-md/seo/` | not checked |
| 33 | delmarva marketing agency | low (10-50) | 1 | `/` | not checked |
| 34 | marketing agency near me | medium (50-200) local share | 1 | `/` | not checked |
| 35 | seo company near me | medium (50-200) local share | 1 | `/services/seo/` | not checked |
| 36 | local seo services near me | low (10-50) local share | 1 | `/services/seo/` | not checked |
| 37 | social media marketing salisbury md | low (10-50) | 1 | `/locations/salisbury-md/social-media/` | not checked |
| 38 | social media management ocean city md | low (10-50) | 1 | `/services/social-media-management/` | not checked |
| 39 | logo design ocean city md | low (10-50) | 1 | `/services/branding-logo-design/` | not checked |
| 40 | logo design salisbury md | low (10-50) | 1 | `/locations/salisbury-md/graphic-design-branding/` | not checked |
| 41 | graphic design ocean city md | low (10-50) | 1 | `/services/graphic-design/` | not checked |
| 42 | video production salisbury md | low (10-50) | 1 | `/services/video-photo-drone/` | not checked |
| 43 | drone videography ocean city md | low (10-50) | 1 | `/services/video-photo-drone/` | not checked |
| 44 | social media marketing near me | high (200+) | 1 | `/services/social-media-management/` | not checked |
| 45 | social media manager near me | high (200+) | 1 | `/services/social-media-management/` | not checked |
| 46 | logo design near me | high (200+) | 1 | `/services/branding-logo-design/` | not checked |
| 47 | graphic designer near me | high (200+) | 1 | `/services/graphic-design/` | not checked |
| 48 | video production company near me | high (200+) | 1 | `/services/video-photo-drone/` | not checked |
| 49 | how much does a website cost | high (200+) nationally | 1 | `/blog/how-much-does-a-website-cost/` | not checked |
| 50 | how much does seo cost for a small business | high (200+) national | 1 | `/blog/how-much-does-seo-cost/` | not checked |
| 51 | how much does a marketing agency cost | high (200+) national | 1 | `/pricing/` | not checked |
| 52 | how do i get my business to show up in chatgpt | medium (50-200) national | 1 | `/blog/show-up-in-chatgpt/` | not checked |
| 53 | how to rank higher on google maps | high (200+) national | 1 | `/blog/rank-higher-on-google-maps/` | not checked |
| 54 | how much does social media management cost | high (200+) | 1 | `/pricing/` | not checked |
| 55 | how much does google ads management cost | high (200+) | 1 | `/pricing/` | not checked |
| 56 | ai search optimization ocean city md | very low (<10) | 1 | `/services/ai-search-optimization/` | not checked |
| 57 | google business profile optimization ocean city md | very low (<10) | 1 | `/services/google-business-profile/` | not checked |
| 58 | hotel marketing ocean city md | very low (<10) | 1 | `/industries/hospitality-vacation-rentals/` | not checked |
| 59 | restaurant marketing ocean city md | very low (<10) | 1 | `/industries/restaurants-bars/` | #1-#4 (blog case posts, duplicate URLs) |
| 60 | website maintenance ocean city md | very low (<10) | 1 | `/services/website-care-plans/` | not checked |

**Conflicts flagged, and how each is resolved:**

| # | Conflict | Resolution |
|---|---|---|
| C1 | **Home vs Ocean City page.** Both pages are "about" an Ocean City agency, and D3 wins its town terms with its homepage and site map (04 snapshot). | Home owns Delmarva and Eastern Shore terms; its title has no town. The Ocean City page owns every "{agency} ocean city md" term. Home links to the Ocean City page with the anchor "marketing agency in Ocean City". Re-check after 60 days in Search Console; if Google ranks home for the Ocean City terms, swap ownership rather than fight it. |
| C2 | **Service pages vs town pages.** keywords.csv tags several "{service} ocean city md" terms as "location page". | Rule used: Ocean City is our home base (assumption A1), so service pages own "{service} + Ocean City"; town pages own "{agency} + town" and every other town. Salisbury gets its own service pages for the four biggest openings. |
| C3 | **Video production salisbury md** is owned by `/services/video-photo-drone/`, not the Salisbury hub. | The Salisbury hub already carries 14 terms; video is one section on it that links to the service page with that anchor. |
| C4 | **Pricing page vs cost articles** ("how much does a small business website cost in maryland" vs "how much does a website cost"). | `/pricing/` owns Maryland and local cost terms and shows our actual prices. The article owns the national question and links to `/pricing/`. The article's title never uses "Maryland" or a town. |
| C5 | **SEO vs AI search optimization** (D3's own pages cannibalize each other here, 02 §3.5). | "AI" never appears in the SEO page's title or H1; the AI page never uses "SEO company". Each links to the other once. |
| C6 | **Websites vs starter website** (D3's /websites/ vs /rapid-design-websites/ overlap, 02 §3.5). | Starter page owns only the "small business website design" terms and states its fixed scope; the main page links to it from the comparison table. |
| C7 | **Near-me terms** (rows 19, 20, 26, 34, 35, 36, 44 to 48). | Owned by pages, but mostly won by Google Business Profile proximity and reviews (04 cluster table). Do not judge the page by these terms. |
| C8 | **"marketing agency eastern shore md"**: D3 holds #1 to #3 (04 snapshot). | Kept on home as a long-term term; no 90-day expectation. |
| C9 | **D3's brand terms** ("d3corp alternatives", "d3 corp alternatives", "d3corp reviews"). | Deliberately left unowned. We do not name D3 on our site (PLAN Appendix B). Whether to bid on them in Google Ads is an owner decision (section 15). |

The remaining 237 keywords are each assigned to exactly one page in Appendix A. Four are deliberately unassigned: the three D3 brand terms above and "wordpress vs wix vs squarespace for small business" (national, heavily contested, low local value; 04 basis column).

---

## 9. Content briefs

### 9.0 Rules every brief inherits

- One H1, containing the service or industry and a place or buyer (03b §2.1 standard). Exactly one keyword cluster, owned by this page only (section 8, Appendix A).
- Title 60 characters or fewer, meta description 120 to 155 characters, both unique (02 §3.4, §4). Counts below were checked by script.
- First screen at 390 px: H1, one-line promise, "Book a 15-minute call", "See prices", tap-to-call (section 10.1).
- A starting-at price wherever a service is sold; `[[NEEDS: price]]` is a hard stop for publishing.
- Proof block in the first two phone screens: the best real proof available for that page, never another page's proof (03 §6 standard).
- Three or more internal links in the body with descriptive anchors; no link to a redirect (02 §6.4).
- 4 to 6 FAQs that a buyer here would actually ask, marked up with `FAQPage`.
- Grade-8 reading level; every technical term defined on first use (03b §2.5).
- Images: real photos only (team, clients with permission, Delmarva places we shoot). No stock heroes, no AI-generated art, no image reused as a hero on two pages (03 §4.6, §9 #11). Every image has alt text or `alt=""` if decorative.
- Never promise rankings, map-pack positions or AI citations. Promises are limited to reply times, deliverables, dates, prices and terms.

### 9.1 Home

- **URL:** `/`
- **Title tag:** `Delmarva & Eastern Shore Marketing Agency | Media Masters`
- **Meta description:** `Websites, SEO and marketing for Delmarva businesses. Starting prices on every page, a same-day reply from a named person, and month-to-month terms.`
- **H1:** Websites and marketing for Delmarva businesses, with the prices on the page
- **Sub-line under H1:** "Based in Ocean City `[[NEEDS: confirm]]`. A named person replies the same business day."
- **H2 outline:**
  1. What we do, and what it costs to start (one card per offered service: starting price, timeline, link)
  2. Five things we promise in writing
  3. Industries we know (7 cards)
  4. Towns we work in (8 cards, map image)
  5. Proof you can check (our scoreboard numbers, case study 1, reviews once 5 exist)
  6. How a project runs, start to finish
  7. Meet the person who will answer you
  8. Check your own website free
  9. Questions people ask first
- **Word count:** 1,200
- **Keyword cluster (owned):** marketing agency eastern shore md; delmarva marketing agency; delmarva digital marketing; delmarva advertising agency; digital marketing agency near me; marketing agency near me
- **Internal links (3):** `/pricing/` (anchor "see every price"), `/services/web-design/` ("web design for Delmarva businesses"), `/locations/ocean-city-md/` ("marketing agency in Ocean City"). Also `/free-website-audit/`.
- **Proof block:** live scoreboard figures for this page (mobile Lighthouse, LCP, page weight) beside our published bars; case study 1 summary with its two numbers; the account lead's photo, name and direct line; Google rating and count once there are 5+ reviews `[[NEEDS: reviews]]`.
- **FAQ (6):** How much does a website or marketing plan cost with you? Do I have to sign a long contract? Who will I actually talk to? How fast will you get back to me? Do you only work in Ocean City? Can you guarantee I'll show up first on Google? (Answer: no one honestly can; here is what we do promise.)
- **CTA:** primary "Book a 15-minute call"; secondary "See prices"; header tap-to-call and "Text us".
- **Schema:** `ProfessionalService` (full sitewide node, section 12.5), `WebSite`, `WebPage`, `FAQPage`; `Person` referenced by `@id`.
- **Images needed:** owner or lead portrait (real); one Delmarva place photo we shoot `[[NEEDS: photo shoot]]`; scoreboard screenshot; no carousel.

### 9.2 Contact

- **URL:** `/contact/`
- **Title tag:** `Contact Media Masters Group | Book a 15-Minute Call`
- **Meta description:** `Book a 15-minute call, phone, text, or send a short note. A named person replies the same business day. Office hours, service area and next steps inside.`
- **H1:** Contact Media Masters Group on Delmarva
- **H2 outline:** Book a 15-minute call · Send a short note (the 4-field form) · Call or text · Hours and reply times · Where we work · What happens after you reach out (3 steps) · Questions
- **Word count:** 500
- **Keyword cluster (owned):** advertising agency near me; marketing company near me
- **Internal links (3):** `/pricing/`, `/free-website-audit/`, `/about/`
- **Proof block:** the lead's photo and name ("You'll hear from [first name]"); our published median reply time once 3 months of data exist; one dated review with source link.
- **FAQ (5):** When will I hear back? Do you meet in person, and where? Is the call a sales pitch? What should I have ready? What if I write after hours or on a weekend?
- **CTA:** "Book a 15-minute call" (opens the booking page on tap); form button "Send to [lead first name]".
- **Schema:** `ContactPage`, `ProfessionalService` (with `contactPoint`, `openingHoursSpecification`), `BreadcrumbList`, `FAQPage`.
- **Images needed:** lead portrait; static service-area map image.

### 9.3 Pricing

- **URL:** `/pricing/`
- **Title tag:** `Website & Marketing Prices, Eastern Shore MD | Media Masters`
- **Meta description:** `Starting prices and three packages for websites, SEO, social media, ads and more on the Eastern Shore. Month to month, with what's included in plain words.`
- **H1:** Prices for websites and marketing on the Eastern Shore
- **H2 outline:**
  1. How our prices work (starting-at, three packages, month to month, projects billed by milestone `[[NEEDS: owner approval]]`, ad spend never marked up without saying so)
  2. One section per offered service, each with a 3-column package table: what's included, what's not, timeline, starting price `[[NEEDS: every price]]`
  3. What a marketing agency costs on the Eastern Shore (owns "how much does a marketing agency cost")
  4. What social media management costs here
  5. What Google Ads management costs, and why ad spend is separate
  6. What a small business website costs in Maryland
  7. What is never included unless the package says so (content, photos, printing, domain: the items D3's Terms exclude by default, 03b §3.2, listed so buyers know to ask)
  8. Price changes: only with 30 days' written notice (03b §3.2 standard)
  9. Questions
- **Word count:** 1,800 plus tables
- **Keyword cluster (owned):** how much does a small business website cost in maryland; how much does a marketing agency cost; how much does social media management cost; how much does google ads management cost; how much does a website cost ocean city md; how much does a website cost salisbury md; web design pricing salisbury md; seo pricing ocean city md; marketing agency pricing salisbury md; how much does a logo design cost for a small business; how much does a commercial video cost to produce on the eastern shore
- **Internal links (3):** `/what-you-own/`, `/services/web-design/`, `/contact/`
- **Proof block:** "These are the same prices on every directory we're listed on" (02b §8 #5 standard); link to the sample monthly report; owner's name on the page as the person who set and stands behind the prices.
- **FAQ (6):** Why do you publish your prices? What does "starting at" mean for my project? Are there setup fees? Can I cancel, and what does it cost? Is ad spend included in the management fee? Will my price go up?
- **CTA:** "Book a 15-minute call for a fixed quote"; secondary "Check my site free".
- **Schema:** `WebPage`, `BreadcrumbList`, `FAQPage`; one `Service` per offered service with `Offer` and `PriceSpecification` (`minPrice`, `priceCurrency` USD) once prices exist.
- **Images needed:** none beyond the lead portrait; tables are HTML, not images.

### 9.4 Websites

- **URL:** `/services/web-design/`
- **Title tag:** `Web Design in Ocean City, MD & Delmarva | Media Masters`
- **Meta description:** `Fast, accessible websites for Ocean City and Delmarva businesses, with starting prices shown, a written launch date, and every file yours to keep.`
- **H1:** Web design for Ocean City and Delmarva businesses
- **H2 outline:**
  1. What you get with a new website (deliverables list)
  2. Packages and starting prices (starter, business, e-commerce) `[[NEEDS]]`
  3. Which build is right for you (comparison table: pages, time, price, best for)
  4. How a website project runs: 6 steps, 4 to 8 weeks (draft: kickoff call, sitemap and content plan, design, build, test against our speed and accessibility bars, launch with redirects) `[[NEEDS: owner confirms timeline]]`
  5. The standards every site we build must meet (main content in 2.5 s on a phone, under 1 MB, zero serious accessibility errors, schema, one H1)
  6. Redesigns: keeping your Google traffic (redirect map, no redirects to the homepage, 02 §2.5 standard)
  7. Who you'll work with
  8. Proof
  9. Websites for your industry (links to 7 industry pages)
  10. Where we build (town links)
  11. After launch: care plans
  12. Questions
- **Word count:** 1,600
- **Keyword cluster (owned):** web design ocean city md; website design ocean city md; web designer ocean city md; web developer ocean city md; website company ocean city md; web design ocmd; web design eastern shore md; eastern shore web design company; web developer eastern shore maryland; delmarva web design; website company delmarva; web designer near me; web design near me; website design company near me; web developer near me; wordpress developer ocean city md; wordpress developer salisbury md; wordpress developer near me; wordpress website design eastern shore md; wordpress developer lewes rehoboth; ecommerce website design ocean city md; ecommerce website design salisbury md; ecommerce website design rehoboth beach; ecommerce website design lewes de; ecommerce website designer near me; shopify developer salisbury md; woocommerce developer eastern shore; website redesign ocean city md; website redesign salisbury md; website redesign near me; website refresh vs redesign; law firm website design eastern shore md; ada compliant website design maryland
- **Internal links (3):** `/services/web-design/starter-website/`, `/services/website-care-plans/`, `/pricing/`. Also `/work/media-masters-site-build/`.
- **Proof block:** case study 1 (our own build: dated before/after, Lighthouse and page weight, time from kickoff to launch); our scoreboard; client launch results with two metrics once available `[[NEEDS]]`.
- **FAQ (6):** How long does a new website take? What does a website cost here? Do I own my website, domain and files? Do you build on WordPress, or something else? Will my site meet accessibility standards? (We build and test to WCAG 2.2 AA and publish the results; automated tests catch only part of WCAG, 03 §7.3; this is not legal advice.) Can you redesign my site without losing my Google traffic?
- **CTA:** "Book a 15-minute call"; "See website prices"; "Check my site free".
- **Schema:** `Service` (`serviceType` "Web design", `provider` by `@id`, `areaServed`, `offers`), `FAQPage`, `BreadcrumbList`, `WebPage`.
- **Images needed:** desktop and phone screenshots of sites we built (ours first); before/after Lighthouse screenshots; lead portrait.

### 9.5 SEO

- **URL:** `/services/seo/`
- **Title tag:** `SEO Company in Ocean City, MD | Media Masters Group`
- **Meta description:** `Local SEO for Ocean City and Delmarva businesses: a month-one audit, fixes, local content and a plain-English report each month. Month to month.`
- **H1:** SEO for Ocean City and Delmarva businesses
- **H2 outline:**
  1. What SEO means for a local business (local, technical, content; each defined in one sentence)
  2. What we promise, and what no one can (process and reporting yes; rankings no)
  3. Packages and starting prices `[[NEEDS]]`
  4. Month by month: month 1 audit and fixes; months 2 to 3 Google Business Profile, citations, local pages; month 4 on content and links; report on a fixed date `[[NEEDS: report date]]`
  5. Your monthly report (screenshot of the sample, link to `/reporting/`)
  6. Google Business Profile and reviews
  7. Being found in AI answers (short, links to the AI page)
  8. Proof
  9. Who you'll work with
  10. Towns we do SEO in (links, including the Salisbury SEO page)
  11. Questions
- **Word count:** 1,500
- **Keyword cluster (owned):** seo company ocean city md; seo services ocean city md; seo ocean city md; local seo ocean city md; ocmd seo; seo eastern shore maryland; seo company delmarva; seo company maryland eastern shore small business; seo company near me; seo services near me; local seo services near me
- **Internal links (3):** `/reporting/`, `/services/google-business-profile/`, `/locations/salisbury-md/seo/`. Also `/services/ai-search-optimization/`.
- **Proof block:** the sample report; our own Search Console impressions chart once 60 days of data exist (dated); a client before/after once available `[[NEEDS]]`.
- **FAQ (6):** How long does SEO take to show results? Can you guarantee page one? What's the difference between SEO and AI search optimization? Do I need a blog? What's in the monthly report? Can I stop any month?
- **CTA:** "Book a 15-minute call"; "Check my site free".
- **Schema:** `Service`, `FAQPage`, `BreadcrumbList`, `WebPage`.
- **Images needed:** annotated sample-report screenshot (labelled "sample data"); lead portrait.

### 9.6 About

- **URL:** `/about/`
- **Title tag:** `About Media Masters Group | Local Delmarva Marketing Team`
- **Meta description:** `Meet the people behind Media Masters Group, who answers your call, and how we work: published prices, same-day replies and month-to-month terms.`
- **H1:** About Media Masters Group, a local Delmarva marketing team
- **H2 outline:** Why we started `[[NEEDS: owner story]]` · Meet [owner name] `[[NEEDS]]` · How we work (the five commitments) · Local or national agency: what changes for you · Where we are and where we travel `[[NEEDS: towns]]` · Memberships and certifications (only real, each linked to a verifiable listing, 02b §4 standard) · What we will never do (fake reviews, bought links, ranking promises, naming competitors) · Questions
- **Word count:** 900
- **Keyword cluster (owned):** local vs national marketing agency
- **Internal links (3):** `/about/[owner-slug]/`, `/what-you-own/`, `/reviews/`
- **Proof block:** owner photo, bio and LinkedIn; real certifications only `[[NEEDS]]`; scoreboard link; chamber memberships once joined.
- **FAQ (4):** How big is Media Masters Group? Who does the work, you or subcontractors? (We disclose any service marked SUB in intake.) Where are you based? Do you work with businesses outside Delmarva?
- **CTA:** "Book a call with [owner first name]".
- **Schema:** `AboutPage`, `Person` (owner, with `sameAs`, `jobTitle`, `worksFor`), `ProfessionalService` (`founder`), `BreadcrumbList`, `FAQPage`.
- **Images needed:** owner portrait; owner at work in a recognizably local place; team photos if there is a team `[[NEEDS]]`.

### 9.7 Salisbury

- **URL:** `/locations/salisbury-md/`
- **Title tag:** `Salisbury, MD Web Design & Marketing | Media Masters`
- **Meta description:** `Websites and marketing for Salisbury and Wicomico County businesses. Prices shown, a same-day reply from a named person, and we come to you.`
- **H1:** Web design and marketing for Salisbury, MD businesses
- **H2 outline:**
  1. Salisbury's business mix (year-round economy; health care with 169 physician offices and TidalHealth; university; professional firms; source: 04 seasonality, dated)
  2. Websites for Salisbury businesses (owns the head term; process, starter option, price link)
  3. Marketing services in Salisbury (cards linking to the four Salisbury service pages; video section links to the video service page)
  4. How we work with Salisbury clients without a Salisbury office (honest: we drive to you; named meeting spot `[[NEEDS]]`; travel included or not `[[NEEDS]]`)
  5. Salisbury proof
  6. What local search looks like in Salisbury today (from 04: templated national pages and other states' Salisburys fill results)
  7. Salisbury's marketing calendar (3rd Friday; Maryland Folk Festival, "confirm still running", 04)
  8. Delmar, Fruitland and Wicomico County
  9. Our Salisbury memberships (only once joined)
  10. Questions
- **Word count:** 1,300
- **Keyword cluster (owned):** web design salisbury md; website design salisbury md; web developer salisbury md; website company salisbury md; who builds websites in salisbury maryland; marketing agency salisbury md; digital marketing agency salisbury md; digital marketing salisbury md; marketing company salisbury md; advertising agency salisbury md; marketing agency wicomico county; marketing agency wicomico county md; web design wicomico county md; web design delmar md
- **Internal links (3):** `/locations/salisbury-md/seo/`, `/services/web-design/`, `/industries/medical-dental/`. Also `/locations/salisbury-md/google-ads/`.
- **Proof block:** a Salisbury client result or review with permission `[[NEEDS]]`; until then, a dated walkthrough of a consenting Salisbury business's public site run through our audit tool, or no block.
- **FAQ (5):** Do you have a Salisbury office? How often can you meet in Salisbury? Do you charge for travel? Do you work with Delmar and Fruitland businesses? How much does a website cost in Salisbury? (Short answer, link to `/pricing/`.)
- **CTA:** "Book a 15-minute call"; "We'll meet you in Salisbury".
- **Schema:** `WebPage`, `Service` with `areaServed` (`City` Salisbury, `AdministrativeArea` Wicomico County), `BreadcrumbList`, `FAQPage`. **No Salisbury `PostalAddress`** (section 6.4).
- **Images needed:** Salisbury photos we shoot (downtown, riverfront) `[[NEEDS]]`; static service-area map; lead portrait.

### 9.8 Ocean City

- **URL:** `/locations/ocean-city-md/`
- **Title tag:** `Ocean City, MD Marketing Agency | Media Masters Group`
- **Meta description:** `Marketing for Ocean City and West Ocean City businesses, planned around the season. Starting prices shown and a same-day reply from a named person.`
- **H1:** Marketing agency for Ocean City, MD businesses, planned around the season
- **H2 outline:**
  1. Ocean City's marketing year (January to April buying window, summer, September to November shoulder season; 04 seasonality, labelled as inference)
  2. Who buys marketing here (7,166 active short-term rental listings, AirDNA Aug 2026, via 04; hotels, restaurants, amusements)
  3. What we do for Ocean City businesses (service cards; owns the agency terms, links to each service page)
  4. West Ocean City and the Route 50 corridor
  5. Prices
  6. Ocean City proof
  7. What local search looks like in Ocean City today (directories and templated pages; 04)
  8. Events that move demand (Springfest, Sunfest, OC Air Show; 04)
  9. Our Ocean City memberships (only once joined)
  10. Questions
- **Word count:** 1,300
- **Keyword cluster (owned):** digital marketing agency ocean city md; marketing agency ocean city md; marketing company ocean city md; advertising agency ocean city md; ocmd marketing agency; marketing agency west ocean city md; web design west ocean city md; web design agency west ocean city
- **Internal links (3):** `/industries/hospitality-vacation-rentals/`, `/services/web-design/`, `/locations/berlin-ocean-pines-md/`
- **Proof block:** an Ocean City client or review `[[NEEDS]]`; our own Ocean City Google Business Profile (as the business it is) with photos.
- **FAQ (5):** Can you get a site live before Memorial Day if we start in March? Do you work with businesses that close in winter? Are you here year-round? Can you help with shoulder-season events? Do you still reply the same day in July?
- **CTA:** "Book a 15-minute call"; "See prices".
- **Schema:** `WebPage`, `ProfessionalService` reference (with `address` only if public, assumption A1), `Service` `areaServed` Ocean City and West Ocean City, `BreadcrumbList`, `FAQPage`.
- **Images needed:** Ocean City photos we shoot (off-season boardwalk, Route 50 bridge) `[[NEEDS]]`; static map; lead portrait.

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
  8. A lodging marketing calendar (season-end owner reviews, Jan to Apr site work, pre-Memorial Day launch)
  9. Packages and starting prices
  10. Proof
  11. Questions
- **Word count:** 1,600
- **Keyword cluster (owned):** vacation rental marketing ocean city md; short term rental marketing ocean city md; vacation rental website design ocean city md; vacation rental marketing worcester county md; vacation rental marketing bethany beach de; vacation rental marketing salisbury md; hotel marketing ocean city md; hotel marketing agency ocean city md; hotel website design ocean city md; hotel marketing agency salisbury md; hotel marketing agency rehoboth beach
- **Internal links (3):** `/blog/vacation-rental-direct-bookings-ocean-city/`, `/services/web-design/`, `/locations/ocean-city-md/`. Also `/services/email-sms-marketing/`.
- **Proof block:** a hospitality client's booking numbers before and after, with dates `[[NEEDS]]`; until then, the direct-booking article and a phone speed test of a consenting property's booking page.
- **FAQ (6):** Can you work with our existing booking system? `[[NEEDS: which systems we support]]` How do we get more direct bookings and pay fewer platform fees? When should we start marketing for next summer? Do you work with individual owners or only managers? What do you do for us in the off-season? Who owns our guest email list?
- **CTA:** "Book a 15-minute call"; "Check my booking site free".
- **Schema:** `WebPage`, `Service` (`audience` lodging businesses, `areaServed`), `FAQPage`, `BreadcrumbList`.
- **Images needed:** photos of a client property with permission, or our own shoot of Ocean City lodging streetscapes; phone screenshot of a booking flow.

### 9.10 Free website audit tool

- **URL:** `/free-website-audit/`
- **Title tag:** `Free Website Audit for Delmarva Businesses | Media Masters`
- **Meta description:** `Check your website free: phone speed, page weight, headings, local business details and accessibility basics, scored in plain English in about a minute.`
- **H1:** Free website audit for Delmarva businesses
- **H2 outline:** Run your audit (URL and email) · What we check and the bar for each · How the score works · A sample result · What to do next (fix it yourself with the checklist, or book a call) · Our own site's score on the same test · What we store and for how long · Questions
- **Word count:** 800 (plus the tool)
- **Keyword cluster (owned):** do i need a website if i have a google business profile; does my website need to be ada compliant. `[[NEEDS: keyword pass for "free website audit", "website speed test", "seo audit ocean city md": none are in keywords.csv]]`
- **Internal links (3):** `/scoreboard/`, `/services/web-design/`, `/pricing/`
- **Proof block:** our own homepage run through the tool, with its result shown; the published method (every check and its threshold).
- **FAQ (6):** Is it really free? Will a salesperson call me? What do you do with my email? Does a good score mean my site is ADA compliant? (No: automated checks catch only part of WCAG, 03 §7.3.) How accurate is the speed result? Can I check any public website?
- **CTA:** "Run my audit"; on the result screen, "Book a 15-minute call to go through it".
- **Schema:** `WebApplication` (`applicationCategory` "BusinessApplication", `offers` price 0), `FAQPage`, `BreadcrumbList`.
- **Images needed:** screenshot of a sample report; no photos required.

### 9.11 Short briefs for every other page

Word counts are body copy, excluding nav and footer. Every service page uses the section 3 "common to every row" elements; every town page uses section 6.1; every industry page uses section 7. Full owned keyword lists are in Appendix A.

| URL | Title tag (≤60) | H1 | Lead keywords (owned) | Words | CTA |
|---|---|---|---|---|---|
| `/services/` | `Marketing Services on Delmarva, With Prices | Media Masters` | Marketing services for Delmarva businesses, priced up front | social media and seo agency ocean city md | 700 | See prices |
| `/services/web-design/starter-website/` | `Small Business Website, Fixed Price | Media Masters` | A fixed-price starter website for Delmarva small businesses | small business website design ocean city md; small business website design salisbury md | 900 | Book a 15-minute call |
| `/services/website-care-plans/` | `Website Care & Hosting Plans, Ocean City MD | Media Masters` | Website hosting and care plans for Delmarva businesses | website maintenance ocean city md; website hosting and maintenance ocean city md; website maintenance packages maryland; website maintenance near me | 1,000 | See care plan prices |
| `/services/ai-search-optimization/` | `AI Search Optimization, Ocean City MD | Media Masters` | AI search optimization for Ocean City and Delmarva businesses | ai search optimization ocean city md; ai search optimization salisbury md; generative engine optimization maryland | 1,100 | Book a 15-minute call |
| `/services/google-business-profile/` | `Google Business Profile Management, OC MD | Media Masters` | Google Business Profile management for Delmarva businesses | google business profile optimization ocean city md; google business profile optimization salisbury md; google business profile management service | 1,000 | Check my site free |
| `/services/paid-ads/` | `Google Ads Management, Ocean City MD | Media Masters` | Google Ads and paid social for Ocean City and Delmarva | google ads management ocean city md; ppc management ocean city md; google ads agency near me; geofencing advertising ocean city md | 1,100 | Book a 15-minute call |
| `/services/social-media-management/` | `Social Media Management, Ocean City MD | Media Masters` | Social media management for Ocean City and Delmarva businesses | social media marketing ocean city md; social media management ocean city md; social media marketing near me; social media manager near me | 1,100 | See social prices |
| `/services/email-sms-marketing/` | `Email & SMS Marketing, Ocean City MD | Media Masters` | Email and text marketing for Delmarva businesses | email marketing services ocean city md; email marketing services salisbury md; email marketing agency near me | 900 | Book a 15-minute call |
| `/services/branding-logo-design/` | `Logo Design & Branding, Ocean City MD | Media Masters` | Logo design and branding for Ocean City and Delmarva businesses | logo design ocean city md; branding agency ocean city md; logo design near me; branding agency near me | 900 | See logo prices |
| `/services/graphic-design/` | `Graphic Design in Ocean City, MD | Media Masters Group` | Graphic design for Ocean City and Delmarva businesses | graphic design ocean city md; graphic designer near me | 800 | Book a 15-minute call |
| `/services/print-design/` | `Print & Rack Card Design, Ocean City MD | Media Masters` | Print design for Ocean City businesses: rack cards to banners | print design ocean city md; rack card design ocean city md | 800 | See print prices |
| `/services/video-photo-drone/` | `Video, Photo & Drone, Ocean City MD | Media Masters` | Video, photography and drone work on Delmarva | video production ocean city md; video production salisbury md; drone videography ocean city md; video production company near me | 1,100 | Book a 15-minute call |
| `/services/marketing-strategy/` | `Seasonal Marketing Plans, Ocean City MD | Media Masters` | A 12-month marketing plan for seasonal Ocean City businesses | ocean city md marketing for seasonal businesses | 900 | Book a 15-minute call |
| `/services/public-relations/` | `Public Relations for Delmarva Businesses | Media Masters` | Public relations and local press for Delmarva businesses | No owned keyword in keywords.csv. `[[NEEDS: keyword pass for "public relations ocean city md", "pr firm salisbury md"]]` | 900 | Book a 15-minute call |
| `/services/reputation-management/` | `Review & Reputation Management, Delmarva | Media Masters` | Review and reputation management for Delmarva businesses | No owned keyword in keywords.csv. Supporting (owned elsewhere): google business profile management service; how to rank higher on google maps. `[[NEEDS: keyword pass for "reputation management ocean city md"]]` | 900 | Book a 15-minute call |
| `/services/website-chat-assistant/` (C) | `Website Chat Assistant, Ocean City MD | Media Masters` | A website chat assistant that hands off to a person | No keyword in keywords.csv `[[NEEDS]]` | 800 | Book a 15-minute call |
| `/reporting/` | `What's in Our Monthly Marketing Report | Media Masters` | What you get in your monthly marketing report | how long does seo take to work. `[[NEEDS: keyword pass for "marketing report example"]]` | 900 | Book a 15-minute call |
| `/scoreboard/` | `Our Website Speed & Accessibility Scores | Media Masters` | Our own website's speed and accessibility scores, live | No owned keyword (a proof page). Supporting: ada compliant website design maryland | 500 | Check my site free |
| `/work/` | `Case Studies: Delmarva Marketing Results | Media Masters` | Case studies from Delmarva businesses, with the numbers | No owned keyword; supporting: hotel marketing agency ocean city md | 400 | Book a 15-minute call |
| `/work/media-masters-site-build/` | `Case Study: Building a Sub-1 MB Agency Site | Media Masters` | Case study: how we built our own site to load in 2.5 seconds | how long does it take to build a website for a small business | 1,000 | Check my site free |
| `/work/[client-2-slug]/`, `/work/[client-3-slug]/` (C) | `Case Study: [Client], [Town] | Media Masters` `[[NEEDS]]` | Case study: [result] for [client] in [town] | Supporting the services used `[[NEEDS]]` | 800 each | Book a 15-minute call |
| `/reviews/` | `Media Masters Group Reviews | Delmarva Marketing` | Reviews from Delmarva businesses we've worked with | No owned keyword (brand searches, not in keywords.csv); supporting: best marketing agency ocean city md | 400 | Book a 15-minute call |
| `/locations/` | `Areas We Serve on Delmarva | Media Masters Group` | Areas we serve across Worcester, Wicomico and Sussex counties | web design worcester county md; marketing agency worcester county md; social media marketing worcester county md | 600 | Book a 15-minute call |
| `/locations/salisbury-md/seo/` | `SEO Company in Salisbury, MD | Media Masters Group` | SEO for Salisbury, MD businesses | seo company salisbury md; seo services salisbury md; local seo salisbury md; seo company wicomico county md; seo company salisbury md reviews | 1,000 | Check my site free |
| `/locations/salisbury-md/google-ads/` | `Google Ads Management in Salisbury, MD | Media Masters` | Google Ads management for Salisbury, MD businesses | google ads management salisbury md; ppc agency salisbury md | 900 | Book a 15-minute call |
| `/locations/salisbury-md/social-media/` | `Social Media Management in Salisbury, MD | Media Masters` | Social media management for Salisbury, MD businesses | social media management salisbury md; social media marketing salisbury md | 900 | See social prices |
| `/locations/salisbury-md/graphic-design-branding/` | `Graphic Design & Logos in Salisbury, MD | Media Masters` | Graphic design, logos and branding in Salisbury, MD | graphic design salisbury md; logo design salisbury md; branding agency salisbury md; print design salisbury md | 900 | See logo prices |
| `/locations/rehoboth-beach-lewes-de/` | `Web Design & Marketing, Rehoboth & Lewes DE | Media Masters` | Web design and marketing for Rehoboth Beach and Lewes businesses | web design rehoboth beach de; marketing agency rehoboth beach de; web design lewes de; digital marketing agency lewes de | 1,200 | Book a 15-minute call |
| `/locations/berlin-ocean-pines-md/` | `Web Design & Marketing, Berlin & Ocean Pines | Media Masters` | Web design and marketing for Berlin and Ocean Pines, MD | web design berlin md; marketing agency berlin md; marketing agency ocean pines md; website design ocean pines md | 1,100 | Book a 15-minute call |
| `/locations/bethany-beach-fenwick-island-de/` | `Marketing for Bethany Beach & Fenwick Island | Media Masters` | Web design and marketing for Bethany Beach and Fenwick Island | web design bethany beach de; marketing agency bethany beach de; marketing agency fenwick island de; web design fenwick island de | 1,000 | Book a 15-minute call |
| `/locations/sussex-county-de/` | `Web Design & Marketing in Sussex County, DE | Media Masters` | Web design and marketing for Sussex County, Delaware businesses | web design sussex county de; marketing agency sussex county de; seo company sussex county de; digital marketing sussex county de | 1,100 | Book a 15-minute call |
| `/locations/easton-cambridge-md/` | `Web Design & Marketing, Easton & Cambridge MD | Media Masters` | Web design and marketing for Easton and Cambridge, MD | website design easton md; marketing agency easton md; marketing agency cambridge md; web design cambridge md | 1,000 | Book a 15-minute call |
| `/locations/pocomoke-snow-hill-md/` | `Marketing for Pocomoke City & Snow Hill, MD | Media Masters` | Web design and marketing for Pocomoke City and Snow Hill | website design pocomoke city md; web design snow hill md; marketing agency snow hill md; marketing pocomoke city md | 900 | Book a 15-minute call |
| `/industries/` | `Industries We Market on Delmarva | Media Masters Group` | Marketing for the industries that run Delmarva | No owned keyword (hub) | 500 | Book a 15-minute call |
| `/industries/restaurants-bars/` | `Restaurant & Bar Marketing, Ocean City MD | Media Masters` | Marketing for Ocean City restaurants and bars | restaurant marketing ocean city md; restaurant website design ocean city; restaurant marketing salisbury md; restaurant marketing rehoboth beach | 1,200 | Check my site free |
| `/industries/amusements-attractions/` | `Amusement & Attraction Marketing, Ocean City | Media Masters` | Marketing for Ocean City amusements and attractions | tourism marketing agency eastern shore `[[NEEDS: keyword pass]]` | 1,200 | Book a 15-minute call |
| `/industries/golf/` | `Golf Course & Golf Package Marketing, OC MD | Media Masters` | Marketing for Ocean City and Berlin golf courses and golf packages | golf course marketing agency ocean city md; golf course website design maryland eastern shore; ocean city golf getaway marketing | 1,200 | Book a 15-minute call |
| `/industries/real-estate/` | `Real Estate Marketing, Ocean City MD | Media Masters Group` | Marketing, video and drone for Delmarva real estate agents | real estate marketing ocean city md; real estate website design ocean city md; delmarva real estate photography and video | 1,200 | Book a 15-minute call |
| `/industries/medical-dental/` | `Medical & Dental Practice Marketing, Salisbury | Media Masters` | Marketing for medical and dental practices in Salisbury and Delmarva | medical practice marketing salisbury md; dental marketing eastern shore md; medical practice marketing ocean city md | 1,200 | Book a 15-minute call |
| `/industries/home-services/` | `Home Services & Contractor Marketing, Salisbury | Media Masters` | Marketing for Delmarva contractors and home service businesses | home services marketing salisbury md; hvac marketing salisbury md; contractor website design salisbury md | 1,200 | Book a 15-minute call |
| `/compare/how-to-choose-a-marketing-agency/` | `How to Choose a Marketing Agency on Delmarva | Media Masters` | How to choose a marketing agency on the Eastern Shore | how to choose a marketing agency; best marketing agency ocean city md; best marketing agency salisbury md; best web design company ocean city md | 1,500 | Check my site free |
| `/blog/` | `Marketing Advice for Delmarva Businesses | Media Masters` | Marketing advice for Delmarva business owners | No owned keyword (hub) | 300 | Check my site free |
| `/blog/how-much-does-a-website-cost/` | `How Much Does a Website Cost? Real Numbers | Media Masters` | How much does a website cost? A plain-English breakdown | how much does a website cost; how much does a website redesign cost; how much does an ecommerce website cost | 1,500 | See website prices |
| `/blog/how-much-does-seo-cost/` | `How Much Does SEO Cost for a Small Business? | Media Masters` | How much does SEO cost for a small business? | how much does seo cost for a small business; how much does local seo cost | 1,300 | See SEO prices |
| `/blog/show-up-in-chatgpt/` | `How to Get Your Business to Show Up in ChatGPT | Media Masters` | How to get your business to show up in ChatGPT and AI answers | how do i get my business to show up in chatgpt; what is generative engine optimization; geo vs seo what's the difference | 1,400 | Check my site free |
| `/blog/rank-higher-on-google-maps/` | `How to Rank Higher on Google Maps: Local Guide | Media Masters` | How to rank higher on Google Maps: a guide for local businesses | how to rank higher on google maps | 1,400 | Check my site free |
| `/blog/vacation-rental-direct-bookings-ocean-city/` | `More Direct Bookings for Ocean City Rentals | Media Masters` | How to get more direct bookings for an Ocean City vacation rental | how to get more direct bookings for a vacation rental in ocean city; how to use email marketing to get repeat hotel and vacation rental guests | 1,300 | Check my booking site free |
| `/blog/off-season-marketing-ocean-city/` | `Off-Season Marketing for Ocean City Businesses | Media Masters` | How to market a seasonal Ocean City business in the off-season | how to market a seasonal business in the off season | 1,200 | Book a 15-minute call |
| `/about/[owner-slug]/` | `[Owner Name], [Title] | Media Masters Group` `[[NEEDS]]` | [Owner name], [title] at Media Masters Group | No keyword (author and E-E-A-T page) | 500 | Book a call with [first name] |
| `/what-you-own/` | `What You Own and How to Cancel | Media Masters Group` | What you own, and how to cancel, in plain English | No owned keyword (trust page); supporting: how to choose a marketing agency | 600 | See prices |
| `/careers/` (C) | `Careers at Media Masters Group | Delmarva` | Work with Media Masters Group | No keyword | 400 | Apply |
| `/terms/` | `Terms of Service | Media Masters Group` | Terms of service | Exempt (legal) | ≤1,500 | none |
| `/privacy/` | `Privacy Policy | Media Masters Group` | Privacy policy | Exempt (legal) | 800 | none |
| `/accessibility/` | `Accessibility Statement | Media Masters Group` | Accessibility statement: WCAG 2.2 AA | Exempt (trust page) | 400 | Contact us about access |
| `/thanks/` (noindex) | `Thanks, We Got Your Message | Media Masters Group` | Thanks. [Lead first name] will reply by [time]. | Exempt (noindex) | 150 | Book a 15-minute call |
| 404 | `Page Not Found | Media Masters Group` | We couldn't find that page | Exempt | 100 | Search, home, contact |

Legal, utility and noindex pages are exempt from the keyword-cluster rule because they are not meant to rank. Every other page above names its cluster, and the pages with no matching row in keywords.csv carry a `[[NEEDS: keyword pass]]` marker instead of an invented term.

---

## 10. Conversion plan

### 10.1 First screen pattern (every page)

Measured against D3: on a phone, only 46% of D3's first screen is page content; the cookie banner, chat card and accessibility button cover 35.7%; no phone number appears on any mobile first screen (03 §3).

**Phone (390 x 664 CSS px):**
1. Sticky header, **64 px or less**: logo (left), "Call" button 44 x 44 px with a valid `tel:+1...` link, "Text" button (`sms:` link), menu button. Header is under 10% of the screen (03 §3 standard).
2. H1 naming the service or industry and the place.
3. One promise line with a fact in it: "From $[[NEEDS]] · Reply from a named person the same business day · Month to month."
4. Primary button "Book a 15-minute call" and secondary text link "See prices".
5. A one-line proof strip: our Google rating and count once there are 5+ reviews `[[NEEDS]]`; before that, "Our own site: main content in [x] s on a phone, [y] KB" from the scoreboard.
6. Nothing auto-opens: no chat pop-up, no newsletter pop-up, no overlay widget. If a consent notice is legally required, it takes **15% of the screen or less** and never covers a button (03 §3 standard).
7. **At least 65% of the first screen is page content** (03 §9 #1), checked by screenshot at launch.

**Desktop (1440 px):** same order; the H1, promise line, both CTAs and the proof strip all above the fold; phone number visible as text in the header.

Verification: a five-second test with 5 people per money page; each must score 4 or 5 of 5 on "what, for whom, where, what next" (03 §2 standard).

### 10.2 The lead form: 4 fields

D3 has 7 different inquiry forms, from 5 to 13 questions, with conflicting service lists and no HTML `required` attributes (01 §5.1; 03b §5). Ours is one component used on every page.

| # | Field | Type and rules | Required |
|---|---|---|---|
| 1 | Your name | `<input type="text" autocomplete="name">`, visible `<label>` | Yes |
| 2 | Email or mobile number | One text field, `autocomplete="email"`, validated server-side as an email address or a 10-digit US number; error text names the problem | Yes |
| 3 | What do you need? | Checkboxes generated from the same service list as the nav (only services marked SELL/SUB), plus "Not sure yet" | No |
| 4 | Anything we should know? | `<textarea>`, 500-character limit | No |

- Real `required` attributes, accessible error messages tied with `aria-describedby`, visible labels (never placeholder-only labels, 03 §7.4).
- Button text: "Send to [lead first name]". Under the button: "A person replies the same business day. No newsletter unless you ask."
- Spam protection: Cloudflare Turnstile, loaded only when the visitor focuses the first field (01 §8 #19), plus a honeypot field hidden from all users and assistive tech.
- **Friction score note:** 03b §5 counts +1 per question and +1 per required field. Four questions with two required score 6, one above 03b's "5 or less". We keep the 4-field standard (the task's binding rule) and accept a score of 6; dropping the name requirement to reach 5 would make same-day personal replies harder.
- One deliberate omission: no "how did you hear about us" question on the form. Source comes from analytics and call tracking, and we ask on the call (D3 asks it three different ways, 03b §5).

### 10.3 Booking link

- Primary CTA on every page: "Book a 15-minute call", linking to a hosted scheduling page (Cal.com or Calendly `[[NEEDS: choice and account]]`). D3 has no booking path (03b §4.3).
- The scheduler loads only after a tap (opens its own page or a modal that fetches on click); no booking script on page load.
- Slots: business hours only `[[NEEDS: hours]]`, 15-minute calls, 2-hour minimum notice, buffer of 15 minutes. Booking questions: the same 4 fields, prefilled when coming from the form.
- Confirmation and reminder emails come from the scheduler, signed by the lead.

### 10.4 Phone and text

- One local number on every page, every listing and in schema `[[NEEDS: the number]]`. D3 uses four `tel:` formats, one with a space and one with non-breaking hyphens (01 §5.2); we use one E.164 `tel:` format everywhere.
- Call tracking (CallRail or similar, PLAN §3.6): the main number stays on the Google Business Profile and all citations so the NAP never changes. Dynamic number swapping applies only to visitors from paid ads, so organic and listing data stay consistent.
- No `format-detection: telephone=no` (D3 sets it, 01 §2.2).
- "Text us" goes to a number that a person reads during business hours; after hours, an auto-reply states when a person will answer.

### 10.5 Chat decision

**Recommendation: no chat widget at launch.** D3's chat card auto-opens, covers the cookie buttons on phones, carries a robot avatar, and is the only thing on the site that promises a reply time (03 §3, §4.6; 03b §1 item 6). Our difference is that a named person answers. "Text us" in the header covers the same need without any script on page load.

If the owner wants chat later `[[NEEDS: owner decision, 03b §10.7]]`: it must be staffed by a person during business hours, labelled as such; any bot must say it is a bot and offer "text a person" and "book a call" in its first reply; the launcher is 48 px, loads only on tap, and never covers the H1 or a CTA (03b §9 #12; 03 §4.6 standard).

### 10.6 Response-time promise and thank-you flow

**Promise (published on every form, the contact page, the confirmation page and the footer):** "Messages received by 3 pm ET on a business day get a reply from a person that day. Later messages get one by 10 am the next business day." `[[NEEDS: business hours and holiday list]]`

**After submit:**
1. The visitor lands on `/thanks/` (noindex). It shows: "Thanks, [name]. [Lead first name] will reply by [computed day and time]." with the lead's photo.
2. "Want to skip the back-and-forth?" with the booking button.
3. "What happens next": (1) a personal reply by the promised time, (2) a 15-minute call to understand the job, (3) a written proposal with price, scope and timeline within `[[NEEDS: 2 business days?]]` of the call.
4. While they wait: links to `/pricing/` and the free audit.
5. Instant confirmation email to the visitor with the same reply-by time and a copy of what they sent.

D3 shows nothing after submit in the crawl and states no reply time anywhere (01 §5.4; 03b §5).

### 10.7 Lead routing

1. The form posts to a Cloudflare Worker (no third-party form script).
2. The Worker validates, stores the lead (Cloudflare D1 or KV), and sends:
   - an email to the named lead and a shared inbox `[[NEEDS: addresses]]`;
   - a push or SMS alert to the lead's phone;
   - a new row in the CRM `[[NEEDS: CRM choice, e.g. a simple sheet or HubSpot free]]`, tagged with page URL, service boxes ticked, UTM and referrer, and a computed reply-by time.
3. If no reply is logged within 3 business hours, the Worker escalates to the owner.
4. Every reply time is logged; the monthly median and 95th percentile are published on `/reviews/` or `/about/` once 3 months of data exist (03b §9 #1).
5. Audit-tool emails go to the same CRM with tag "audit" and are not called unless they ask (section 10.9).

### 10.8 Conversion measurement

Events: `form_submit`, `booking_complete`, `call_click`, `text_click`, `price_view` (scroll into a price table), `audit_run`, `audit_email`. Goals reported monthly with leads by source (PLAN §7).

### 10.9 Free audit tool specification

**Purpose:** a useful tool that earns links and leads without a sales trap. D3's only audit checklist sits on a buried university-program intake page (03b §4.3).

**Input:** website URL (required). Email (optional: "Send me this report and the fix checklist"). Results show on screen without an email.

**What it checks, and the bar for a pass** (bars match our own standards, so our site passes its own test):

| Area | Check | Pass bar |
|---|---|---|
| Speed on phones | LCP, CLS, TBT and performance score from the Google PageSpeed Insights API (mobile); field data shown when Google has it | LCP 2.5 s or better; CLS under 0.1; performance 90+ |
| Page weight | Total transfer size from the PageSpeed result | Under 1 MB |
| Phone basics | Viewport meta; tap targets; a working `tel:` link | All present |
| Findability | Title present and 60 characters or fewer; meta description 120 to 155; exactly one H1; canonical; not `noindex`; `robots.txt` and an XML sitemap reachable | All pass |
| Local business details | `LocalBusiness` or subtype schema with name, address or area served, telephone, `sameAs` | All present |
| Accessibility basics | Lighthouse accessibility score from the same PageSpeed run, with the failing rules listed in plain English | 90+; no failing rule tagged critical. Caption: automated checks catch only part of WCAG (03 §7.3) |
| Security and hygiene | HTTPS; HSTS header; no mixed content | All pass |
| AI readiness | `llms.txt` present; organization schema with `sameAs` | Present |

**Output:** a 0 to 100 score in five plain-English groups, each check marked pass, needs work or fail, with a one-sentence fix. A shareable result page at `/free-website-audit/report/{id}/` (noindex, expires after 30 days). If an email was given, the same report goes by email.

**Back end:** a Cloudflare Worker. It fetches the submitted page server-side (http/https only, 10-second timeout, 5 MB cap, 5 redirects max, refuses private and local IP ranges), parses the HTML, and calls the PageSpeed Insights API `[[NEEDS: Google API key]]`. Results are cached 24 hours per URL. The crawl that fed this research got HTTP 429 from PageSpeed Insights (02 §9.1), so the tool queues requests and, if the speed test is busy, shows the other checks at once and emails or refreshes the speed part when ready.

**Abuse limits:** Turnstile on submit; 5 audits per IP per hour; no auditing of our own admin paths or non-public hosts.

**Privacy:** we store the URL, scores, timestamp and the email if given; audits without an email are deleted after 30 days, with an email after 90 days unless the person becomes a client. Stated on the page and in `/privacy/`.

**Sales rule:** nobody is phoned or emailed beyond the report itself unless they book or reply. That promise is in the tool's FAQ.

**Link-earning:** publish the method (every check and threshold) on the page; offer the tool to the SBDC and chambers for their members (04 authority table); a quarterly summary of anonymized, aggregated results for public Delmarva business sites can become a press story (PLAN §6.3, §6.4).

**Front-end budget:** the page is static; the tool's script is under 30 KB and loads when the URL field is focused.

---

## 11. Proof and review engine

### 11.1 Getting to 25 Google reviews in 90 days

The arithmetic: 2 new reviews a week (PLAN §6.2) for 13 weeks is 26. We do not know what share of asks become reviews; this draft **assumes about half of warm, personal asks** (assumption A9) and tracks the real rate from week 1. On that assumption we need **about 50 asks to real customers in 90 days**.

**Who we may ask:** only people who received work from us or the owner (past clients from earlier work, current clients, pro-bono clients). Never staff, family, or people offered anything in return. We ask everyone we worked for, not only the happy ones (asking selectively is review gating, which Google prohibits). `[[NEEDS: list of past and current clients with contact details, intake "Proof" section]]`

**Steps:**
1. Week 0 to 1: verify the Google Business Profile (postcard or video can take 1 to 2 weeks, PLAN §3.4). Create the short review link.
2. Week 1: the owner personally texts and emails each past client on the list: one short, personal note with the link. One reminder after 5 days, then stop.
3. Ongoing: ask current clients at milestones (site launch, first monthly report, delivered shoot), by the person who did the work.
4. Reply to every review within 24 hours, by name (02b §3 standard).
5. Track every ask in a sheet: date asked, platform, date posted. Weekly tally goes into the owner's Monday update; monthly tally into the report (PLAN §7).
6. **Day-45 check:** if fewer than 12 reviews, the owner chooses between (a) widening the honest ask list to everyone the owner has done work for, or (b) taking on one or two pro-bono projects for local nonprofits (real work, real reviews), and the paid-search bridge carries more lead flow (PLAN §9).

**Other platforms:** Clutch: ask business-to-business clients for a Clutch-verified review; target 5 in year one (D3 has 0, 02b §3). Facebook: allowed to ask. **Yelp: claim the listing and keep it accurate, but do not ask for Yelp reviews**, because Yelp's own rules discourage soliciting them. This corrects PLAN §6.2, which suggested routing some reviews to Yelp.

**Where reviews show on our site:** `/reviews/` (indexable, every review dated, named as the reviewer chose, linked to its source), the proof strip on every page once there are 5+, and relevant quotes on service and town pages. Shown as text; no self-review star markup (standards table at top).

### 11.2 Case study format

Every case study (PLAN §5.4; 01b §3.3 standard). D3: 1 of 28 states a growth result from D3's work in numbers, none has a visible date or a before-and-after measurement (01b §3.1, §3.3).

1. **H1:** "[Result] for [client] in [town]" (only after the client signs off on the number).
2. **At a glance box:** client, industry, town, services used (linked), dates (kickoff, launch, "results as of").
3. **The problem, with a number** ("calls from Google fell from X to Y between [dates]").
4. **What we did,** step by step, with dates.
5. **Results:** at least 2 metrics, each as baseline → after, with the measurement window and the data source (GA4, Google Business Profile insights, booking engine, call tracking).
6. **Before and after:** screenshots and mobile Lighthouse scores (websites).
7. **Quote:** a named person and job title, with written permission on file.
8. **What it cost:** the package name and price band, if the client agrees (no other local agency does this, 04 Summary 8).
9. **Links:** to each service used, the town page, the industry page and one related article; each of those links back.
10. **Schema:** `Article` with `about` the client `Organization`; no Review markup.

### 11.3 What we publish on day one with no clients

| Proof | Page | Why it is credible |
|---|---|---|
| Our own site's live speed and accessibility scores, updated on every deploy | `/scoreboard/`, proof strip | Anyone can re-test it; D3's mobile performance is 38 to 54 (02 §9.1) |
| Case study 1: building our own site, with the dated build log and before/after numbers (from no site to live) | `/work/media-masters-site-build/` | Real numbers we control |
| Every starting price and package | `/pricing/`, every service page | No local agency, D3 included, publishes prices (04 Summary 8) |
| The process and timeline for every service | each service page | D3 publishes none (01 §3) |
| The owner: name, photo, bio, LinkedIn, direct line `[[NEEDS]]` | `/about/`, `/about/[owner-slug]/`, every page footer | D3 names only its founder, once (03b §1 item 9) |
| Plain-English terms and ownership | `/what-you-own/`, `/terms/` | Directly answers the 3-year auto-renewal Terms (03b §3.2) |
| The free audit tool and its published method | `/free-website-audit/` | Useful before any sale |
| A sample monthly report (sample data, clearly labelled) | `/reporting/` | D3 shows no report (03b §7) |
| Accessibility statement with WCAG 2.2 AA, test date and results | `/accessibility/` | D3's statement names no standard and its pages fail 910 automated checks (03 §7.1, §7.3) |
| Memberships and real certifications, each linked to a verifiable listing | `/about/`, footer | Only once joined or earned `[[NEEDS]]`; no platform logos implying partnership (02b §4) |

---

## 12. Technical specification

### 12.1 Stack

- **Astro, static output, deployed on Cloudflare Pages** (PLAN §5.3), in a new repository `media-masters-site`, unless intake names an existing site or platform `[[NEEDS: existing site?]]`.
- Plain HTML and CSS output; JavaScript only for the form validation, the audit tool and the mobile menu, each loaded on interaction.
- Cloudflare Workers for the form, the audit tool and lead routing; Turnstile for spam; D1 or KV for storage.
- Content in Markdown/MDX files in the repo, with frontmatter fields for title, meta description, H1, owned keywords, FAQ items and schema type, so the build can check them.
- No WordPress, no page builder, no runtime CMS to patch (01 §7 shows D3 on WordPress with Bootstrap loaded twice).

### 12.2 URL structure

- Lowercase, hyphenated, trailing slash, no dates, maximum three levels: `/services/{service}/`, `/locations/{town}-{state}/`, `/locations/salisbury-md/{service}/`, `/industries/{industry}/`, `/work/{client}/`, `/blog/{slug}/` (PLAN §6.1).
- One host (apex `mediamastersgroup.com` assumed, PLAN §3.2 `[[NEEDS: domain bought]]`); `www` 301s to apex; uppercase and no-slash variants 301 to the canonical (02 §2.4 standard).
- Internal links point at final URLs only; the build fails on any internal link that redirects or 404s.

### 12.3 Performance budget (every template, mobile)

| Metric | Budget |
|---|---|
| Largest Contentful Paint | **2.5 s or better** (lab, simulated mobile; and in field data once available) |
| Total page weight | **under 1 MB** |
| CSS + JS | under 100 KB combined (PLAN §5.3) |
| Requests | 30 or fewer (02 §9.3) |
| Total Blocking Time | under 200 ms |
| Interaction to Next Paint | under 200 ms |
| Cumulative Layout Shift | under 0.1 |
| Lighthouse (performance, accessibility, best practices, SEO) | **95+ target on all four; build fails under 90 on any** |
| Third-party scripts above the fold | none |
| Images | AVIF with WebP fallback, `srcset` at rendered sizes, explicit width and height; the LCP image is never lazy-loaded and gets `fetchpriority="high"` (02 §7 standard) |

Checked by Lighthouse CI on every deploy against the six money templates and one page of each other template.

### 12.4 Accessibility bar

- **Zero critical or serious axe violations on every page**, checked in CI on every build (03 §7.4 standard).
- **No accessibility overlay script** of any kind (D3 runs accessiBe on all 157 pages and still fails 910 checks, 03 §7.1, §7.3).
- WCAG 2.2 AA: text contrast 4.5:1 (3:1 at 24 px and up), in-text links underlined, visible labels on every control, visible focus, tap targets 44 x 44 px, no heading levels skipped, every icon link and badge with an accessible name.
- Manual pass before launch with keyboard only, VoiceOver on iOS and NVDA on Windows, on the six money pages.
- `/accessibility/` states the standard, the date of the last test, the results and a contact.

### 12.5 Schema plan

All JSON-LD, generated from one data file so the facts never drift. Validated with validator.schema.org and the Rich Results Test at build (PLAN §5.5).

| Type | Where | Required properties |
|---|---|---|
| `ProfessionalService` (a `LocalBusiness` subtype) | Sitewide, one node with `@id` `https://[domain]/#business` | `name`, `legalName`, `url`, `logo`, `image`, `telephone`, `email`, `address` (only if a public address, assumption A1), `geo`, `openingHoursSpecification`, `areaServed` (every county and town we target), `sameAs` (Google Business Profile, Bing, Apple, Facebook, LinkedIn, Instagram, Clutch, chambers once joined), `founder` → `Person`, `priceRange` once prices exist. D3's organization node has only name, URL and logo (02 §8.2) |
| `Service` | Every service, town-service and industry page | `name`, `serviceType`, `provider` → `#business`, `areaServed`, `offers` with `PriceSpecification` once prices exist |
| `FAQPage` | Every page with an FAQ | Exactly the questions shown on the page. (Google shows FAQ rich results only for some sites now; we keep the markup because it states answers clearly for search engines and AI tools) |
| `BreadcrumbList` | Every page except home | Numeric `position` values (D3 uses strings, 02 §8.4) |
| `Person` | `/about/[owner-slug]/` and as author on articles | `name`, `jobTitle`, `image`, `worksFor` → `#business`, `sameAs` (LinkedIn etc.), `url` |
| `Article` / `BlogPosting` | Articles and case studies | `headline` (no brand suffix, not truncated), `author` → `Person`, `datePublished`, `dateModified` (changes only when content changes), `image` |
| `WebApplication` | `/free-website-audit/` | `applicationCategory`, `offers` price 0 |
| `VideoObject` | Any page with our video | Real `description`, `uploadDate`, `duration`, `thumbnailUrl`, transcript on page (01b §4.1 standard) |
| Not used | Anywhere about ourselves | `AggregateRating`, `Review` (see standards table) |

Sketch of the sitewide node (placeholders, not facts):

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://[[NEEDS: domain]]/#business",
  "name": "Media Masters Group",
  "legalName": "[[NEEDS: legal name, e.g. Media Masters Group LLC]]",
  "telephone": "[[NEEDS: +1XXXXXXXXXX]]",
  "email": "[[NEEDS]]",
  "address": "[[NEEDS: PostalAddress, or omit if service-area business]]",
  "areaServed": ["Worcester County, MD", "Wicomico County, MD", "Sussex County, DE", "Somerset County, MD", "Talbot County, MD", "Dorchester County, MD"],
  "sameAs": ["[[NEEDS: GBP URL]]", "[[NEEDS: LinkedIn]]", "[[NEEDS: Facebook]]"],
  "founder": { "@id": "https://[[NEEDS: domain]]/about/[owner-slug]/#person" }
}
```

(`areaServed` lists only the counties of the towns intake confirms; Somerset is listed because Pocomoke and Snow Hill sit on its border in Worcester; remove any county intake rules out.)

### 12.6 Analytics and call tracking

- Google Search Console and Bing Webmaster Tools from day one; IndexNow ping on every deploy (PLAN §6.1).
- Cloudflare Web Analytics (cookieless) on every page.
- GA4 per PLAN §3.6, loaded after the first user interaction or through Cloudflare Zaraz so no analytics script blocks the first paint. If counsel says consent is needed, the notice follows the 15% rule (section 10.1).
- Call tracking: CallRail or similar `[[NEEDS: account]]`, dynamic swap for paid traffic only (section 10.4).
- Rank tracker comparing us with d3corp.com on the 20 PLAN §7 terms `[[NEEDS: tool choice, Semrush/Ahrefs/BrightLocal]]`.

### 12.7 llms.txt

A plain Markdown file at `/llms.txt`: one paragraph on who we are and where we work; the list of services with links and starting prices; towns served; the five commitments; links to `/pricing/`, `/about/`, `/what-you-own/`, `/reporting/`; contact facts identical to schema. Regenerated from the same data file as schema on every build. `robots.txt` states an explicit AI-crawler policy `[[NEEDS: owner choice; default allow]]` and names the sitemap (02 §2.6 standard; D3 has no AI policy, 02 §2.6).

### 12.8 Sitemap

`@astrojs/sitemap` generates `/sitemap-index.xml` with indexable pages only. `/thanks/`, audit report pages and any `noindex` page are excluded; the build fails if a `noindex` page appears in the sitemap (D3 lists its `noindex` testimonials page in its sitemap, 02 §2.2). `lastmod` reflects real content changes only.

### 12.9 Redirects and headers

- `_redirects`: `www` → apex; lowercase and trailing-slash normalization; a short list of URLs people guess (`/contact-us/` → `/contact/`, `/request-a-quote/` → `/contact/`, `/services/websites/` → `/services/web-design/`, `/blog/feed/` → `/blog/rss.xml`). If an old site exists `[[NEEDS]]`, every old URL maps 1:1 to its closest new page; **never to the homepage** (02 §2.5 standard).
- A service marked NO in intake returns 404 (not a redirect) and is absent from nav, footer, form and sitemap.
- `_headers`: HSTS, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy on every response; long `Cache-Control` on hashed assets (01 §8 #20; D3 has only Referrer-Policy).

### 12.10 Fonts

One family, self-hosted WOFF2, subset to Latin, at most two weights (400 and 700), `font-display: swap`, the body weight preloaded. Suggested family: Atkinson Hyperlegible (open licence, designed for legibility), `[[NEEDS: owner brand choice]]`. Body text at least 18 px on phones at weight 400 (03 §4.6 standard). D3 loads two font services and at least three families (03 §4.2).

### 12.11 Video and embeds

No YouTube or Vimeo iframe above the fold, ever. Below the fold, videos use a click-to-load facade (poster image plus play button); the player loads only on click (02 §9.3 standard; D3 embeds full YouTube iframes on 51 pages, 01b §4.1). Maps follow the same rule (standards table).

### 12.12 QA gates (every page, in CI and by a person)

From PLAN §5.5, plus the checks this blueprint adds: Lighthouse 90+ floor on all four scores; zero critical or serious axe violations; valid schema; zero broken or redirecting internal links; exactly one H1 containing the page's lead keyword; title 60 characters or fewer and meta 120 to 155, both unique; no `noindex` page in the sitemap; town pages at least 60% unique; no `[[NEEDS` marker in any published file; a `lorem` and placeholder grep; spelling and grade-8 reading level; no forbidden phrases (section 2.1) and no ranking promises; one human read-through.

---

## 13. Build order: four sprints (PLAN §5.5)

Each page appears once. `(C)` pages are built only if intake says SELL or SUB (or as noted).

**Sprint 1, weeks 2 to 3: money pages and launch basics (13)**
1. `/`
2. `/contact/`
3. `/pricing/`
4. `/services/web-design/`
5. `/services/seo/`
6. `/about/`
7. `/about/[owner-slug]/`
8. `/thanks/` (noindex)
9. `/what-you-own/`
10. `/terms/`
11. `/privacy/`
12. `/accessibility/`
13. 404 page

Also in sprint 1 (not pages): the sitewide schema node, `robots.txt`, `llms.txt`, sitemap, `_redirects`, `_headers`, the form Worker and lead routing, booking link, analytics, Search Console and Bing submission.

**Sprint 2, weeks 3 to 4: remaining service pages, first three case studies, reviews (21)**
14. `/services/`
15. `/services/web-design/starter-website/` (C)
16. `/services/website-care-plans/` (C)
17. `/services/ai-search-optimization/` (C)
18. `/services/google-business-profile/` (C)
19. `/services/paid-ads/` (C)
20. `/services/social-media-management/` (C)
21. `/services/email-sms-marketing/` (C)
22. `/services/branding-logo-design/` (C)
23. `/services/graphic-design/` (C)
24. `/services/print-design/` (C)
25. `/services/video-photo-drone/` (C)
26. `/services/marketing-strategy/` (C)
27. `/services/public-relations/` (C)
28. `/services/reputation-management/` (C)
29. `/services/website-chat-assistant/` (C, not built by default)
30. `/work/`
31. `/work/media-masters-site-build/`
32. `/work/[client-2-slug]/` (C: needs a client and permission)
33. `/work/[client-3-slug]/` (C: needs a client and permission)
34. `/reviews/`

**Sprint 3, weeks 4 to 5: location and industry pages (22)**
35. `/locations/`
36. `/locations/salisbury-md/`
37. `/locations/salisbury-md/seo/`
38. `/locations/salisbury-md/google-ads/`
39. `/locations/salisbury-md/social-media/`
40. `/locations/salisbury-md/graphic-design-branding/`
41. `/locations/ocean-city-md/`
42. `/locations/rehoboth-beach-lewes-de/`
43. `/locations/berlin-ocean-pines-md/`
44. `/locations/bethany-beach-fenwick-island-de/`
45. `/locations/sussex-county-de/`
46. `/locations/easton-cambridge-md/`
47. `/locations/pocomoke-snow-hill-md/`
48. `/industries/`
49. `/industries/hospitality-vacation-rentals/`
50. `/industries/restaurants-bars/`
51. `/industries/amusements-attractions/`
52. `/industries/golf/`
53. `/industries/real-estate/`
54. `/industries/medical-dental/`
55. `/industries/home-services/`
56. `/compare/how-to-choose-a-marketing-agency/`

Town and industry pages are built only for the towns and industries intake lists; the order within the sprint is the order above.

**Sprint 4, weeks 5 to 6: audit tool, blog launch with six articles, reporting (11, plus the audit report template)**
57. `/free-website-audit/` (with the noindex `/free-website-audit/report/{id}/` template)
58. `/reporting/`
59. `/scoreboard/`
60. `/blog/`
61. `/blog/how-much-does-a-website-cost/`
62. `/blog/how-much-does-seo-cost/`
63. `/blog/show-up-in-chatgpt/`
64. `/blog/rank-higher-on-google-maps/`
65. `/blog/vacation-rental-direct-bookings-ocean-city/`
66. `/blog/off-season-marketing-ocean-city/`
67. `/careers/` (C)

**Totals:** 67 pages. If every service is SELL or SUB and the chat page, careers and the two client case studies are not built, that is 63 pages, of which 61 are indexable (all but `/thanks/` and the 404 page). This meets the PLAN §4 bar of 40 pages in priority order with word counts and keywords.

**Option for the owner:** 04 recommends building the Salisbury page first (04 Summary 3). Pulling `/locations/salisbury-md/` and `/locations/salisbury-md/seo/` into sprint 1 would put our best openings live two weeks sooner, at the cost of the PLAN §5.5 order. `[[NEEDS: owner decision]]`

---

## 14. Top ten ways we beat D3

1. **Prices on the page:** starting prices on every service page and `/pricing/`, against no price anywhere except "$195/hr" in Terms (01 §1.4; 03b §3.1).
2. **Terms that match the copy:** month to month with 30 days' notice, against a 3-year auto-renewing term while the ads page says "no long-term commitments" (03b §3.2).
3. **A named person replies the same business day,** against a chat bot as the only reply promise (01 §5.5; 03b §7).
4. **Book, call or text from the first phone screen,** against no booking path and no phone number on any mobile first screen (03b §4.3; 03 §3).
5. **Main content in 2.5 s and under 1 MB on a phone,** against 15 to 30 s on 5 of 6 tested pages and 4.2 to 8.2 MB (02 §9.1).
6. **Zero serious accessibility errors with no overlay,** against 910 automated failures including the lead forms, with an overlay installed (03 §7.1; 01 §5.1).
7. **A page for every town we serve,** against no town pages and no town in any H1 (02 §10; 03b §2.3).
8. **One 4-field form,** against 7 inquiry forms of up to 13 questions with conflicting service lists (01 §5.1; 03b §5).
9. **Proof with numbers and dates,** against 1 of 28 case studies stating a growth result from D3's work (01b §3.1).
10. **Pages for PR, care plans, reputation and Google Business Profile,** services D3 lists only in a contact dropdown with no page (01 §3 patterns, §4).

---

## 15. Assumptions and owner decisions

### 15.1 Assumptions made because `intake.md` is empty

| # | Assumption | Where it is used | If it is wrong |
|---|---|---|---|
| A1 | Home base is Ocean City, MD (task brief), but whether there is a **public street address** or a **service-area business** is unknown | Schema `address`, Ocean City page, GBP, footer | If service-area only: drop `address` from schema and footer, keep `areaServed`; Ocean City page copy changes from "based in" to "serving" |
| A2 | Brand name everywhere is "Media Masters Group"; legal name "Media Masters Group LLC" (task brief) | Titles, schema, every listing | Retitle all pages before launch; titles were written to fit 60 characters with "Media Masters" or "Media Masters Group" |
| A3 | Domain is `mediamastersgroup.com` (PLAN §3.2 preference), not yet confirmed bought | URLs, schema `@id`, `llms.txt` | Find-and-replace in one config value |
| A4 | Every service line could be SELL or SUB, so every service page is specified | Section 3, sprint 2 | Pages for NO services are not built; their keywords need re-mapping |
| A5 | The owner is the first named account lead | Commitment 4, contact page, thanks page | Swap the named person and photo |
| A6 | Business hours are Monday to Friday, with the 3 pm cut-off | Reply-time promise | Rewrite the promise to the real hours |
| A7 | Towns served are the 8 town pages in section 6 | Sprint 3 | Drop any town not driven to; keep its keywords unowned |
| A8 | Industries wanted are the 7 in section 7 | Sprint 3 | Drop any not wanted |
| A9 | About half of warm, personal review asks become Google reviews | Section 11.1 math | Track the real rate from week 1 and adjust the ask list |
| A10 | No existing website, so no redirect map is needed beyond the guessed URLs | Section 12.9 | Crawl the old site and map every URL 1:1 |
| A11 | Draft process timelines (website 4 to 8 weeks; starter site 10 business days after content) | Service pages | Owner confirms or replaces each one before copy is written |
| A12 | Projects are billed by milestone; retainers month to month | Pricing, terms | Attorney and owner decide |

### 15.2 Owner decision list, in priority order

1. `[[NEEDS: trademark clearance]]` A registered "MM Media Masters" mark exists for advertising services (PLAN §3.3, §9). Get an attorney's answer before money goes into the logo, signage or ads.
2. `[[NEEDS: SELL / SUB / NO for each service line]]` This decides which of 16 service pages exist, the nav, the form checkboxes and `/pricing/`.
3. `[[NEEDS: starting prices and three packages]]` First for websites, SEO and social (03b §10.8), then every service you sell. The pricing page is in sprint 1 and cannot ship without them.
4. `[[NEEDS: named lead, business hours, and a reply promise you can keep in July]]` (03b §10.9).
5. `[[NEEDS: public address or service-area business; the one phone number; the one email]]` These go on every page and every listing and must never change.
6. `[[NEEDS: approve month-to-month terms, the "What you own" page and milestone billing, with an attorney]]` (03b §3.2).
7. `[[NEEDS: owner name, title, bio, photo, LinkedIn]]` About, author page, every page footer.
8. `[[NEEDS: list of past and current clients who will review, and any who allow a case study with numbers]]` Drives section 11 and the two client case studies.
9. `[[NEEDS: towns you will drive to, and named meeting spots]]` Decides sprint 3 location pages.
10. `[[NEEDS: chat decision: none (recommended), human, or labelled bot]]` (03b §10.7).
11. `[[NEEDS: domain bought, registrar]]` (PLAN §3.2).
12. `[[NEEDS: tool accounts and budget: booking, call tracking, CRM, rank tracker, PageSpeed API key]]` (PLAN §10 item 7).
13. `[[NEEDS: paid-search budget]]` (PLAN §6.7 suggests $750 to $1,500 a month as the bridge).
14. `[[NEEDS: logo, colours, font choice, tone in three words, and anything we must never say]]`
15. `[[NEEDS: real certifications and memberships]]` Only verifiable ones are shown (02b §4 standard).
16. `[[NEEDS: which chambers to join in quarter 1]]` 02b §8 #9 suggests Ocean City, Salisbury, Ocean Pines and Bethany-Fenwick.
17. `[[NEEDS: pull Salisbury pages into sprint 1, yes or no]]` (section 13 option).
18. `[[NEEDS: Part 107 drone certificate, if video and drone is SELL]]`
19. `[[NEEDS: bid on D3's brand terms in Google Ads, yes or no]]` We never name D3 on our site (PLAN Appendix B); ads on their brand name are legal but a judgement call.
20. `[[NEEDS: manual check of D3's Google Business Profile(s), rating and categories]]` Not a decision, but the most important missing fact about D3 (02b §10.1; SC §6).
21. `[[NEEDS: keyword pass with fresh search budget]]` For PR, reputation, amusements, the audit tool and reporting pages (none in keywords.csv), plus validating every volume estimate in a real tool before large content spend (04 Open questions 4).
22. `[[NEEDS: mystery-shop D3's inquiry flow, yes or no]]` An ethics call (03b §10.1; PLAN Appendix B).
23. `[[NEEDS: Salisbury second-location decision at the 90-day review]]` (section 6.4).

---

## Appendix A. Full keyword ownership map (297 of 301 keywords)

Every keyword from `keywords.csv` assigned to exactly one page. Unassigned on purpose: "d3corp alternatives", "d3 corp alternatives", "d3corp reviews" (we do not target a competitor's name on our site) and "wordpress vs wix vs squarespace for small business" (national, low local value). If intake marks a service NO, its page's keywords go back to this list for re-mapping.

- `/` (6): marketing agency eastern shore md; delmarva marketing agency; delmarva digital marketing; delmarva advertising agency; digital marketing agency near me; marketing agency near me
- `/services/` (1): social media and seo agency ocean city md
- `/services/web-design/` (33): web design ocean city md; website design ocean city md; web developer ocean city md; website company ocean city md; wordpress developer ocean city md; ecommerce website design ocean city md; website redesign ocean city md; wordpress developer salisbury md; ecommerce website design salisbury md; website redesign salisbury md; web design ocmd; web design eastern shore md; eastern shore web design company; web developer eastern shore maryland; delmarva web design; website company delmarva; ecommerce website design rehoboth beach; wordpress developer lewes rehoboth; ecommerce website design lewes de; web designer near me; web design near me; website design company near me; web developer near me; wordpress developer near me; website redesign near me; ecommerce website designer near me; law firm website design eastern shore md; shopify developer salisbury md; woocommerce developer eastern shore; wordpress website design eastern shore md; ada compliant website design maryland; website refresh vs redesign; web designer ocean city md
- `/services/web-design/starter-website/` (2): small business website design ocean city md; small business website design salisbury md
- `/services/website-care-plans/` (10): website maintenance ocean city md; website maintenance salisbury md; website maintenance delmarva; website maintenance bethany beach; website maintenance near me; website maintenance packages maryland; wordpress maintenance plans salisbury md; website hosting and maintenance ocean city md; how much does website maintenance cost per month; website maintenance salisbury de seaford
- `/services/seo/` (11): seo company ocean city md; seo services ocean city md; local seo ocean city md; ocmd seo; seo eastern shore maryland; seo company delmarva; seo company near me; local seo services near me; seo services near me; seo company maryland eastern shore small business; seo ocean city md
- `/services/ai-search-optimization/` (5): ai search optimization ocean city md; ai search optimization salisbury md; ai seo agency near me; generative engine optimization maryland; ai search optimization delaware
- `/services/google-business-profile/` (6): google business profile optimization ocean city md; google business profile optimization salisbury md; google business profile optimization eastern shore; google business profile optimization near me; google business profile optimization delaware; google business profile management service
- `/services/paid-ads/` (7): google ads management ocean city md; ppc management ocean city md; google ads agency near me; ppc company near me; facebook ads management ocean city md; geofencing advertising ocean city md; how much should a small business spend on google ads
- `/services/social-media-management/` (6): social media marketing ocean city md; social media management ocean city md; social media marketing near me; social media manager near me; social media marketing ocmd; delmarva social media marketing
- `/services/email-sms-marketing/` (4): email marketing services ocean city md; email marketing services salisbury md; email marketing agency near me; email marketing eastern shore md
- `/services/branding-logo-design/` (5): branding agency ocean city md; logo design ocean city md; logo design near me; branding agency near me; branding agency eastern shore md
- `/services/graphic-design/` (2): graphic design ocean city md; graphic designer near me
- `/services/print-design/` (2): print design ocean city md; rack card design ocean city md
- `/services/video-photo-drone/` (11): video production ocean city md; video production salisbury md; drone videography ocean city md; drone videography salisbury md; video production company near me; drone videographer near me; video production ocmd; delmarva video production; delmarva drone services; do you need a part 107 license to fly a drone for real estate in maryland; can you fly a drone in ocean city md
- `/services/marketing-strategy/` (1): ocean city md marketing for seasonal businesses
- `/pricing/` (11): how much does a website cost ocean city md; how much does a website cost salisbury md; web design pricing salisbury md; how much does a small business website cost in maryland; seo pricing ocean city md; marketing agency pricing salisbury md; how much does a marketing agency cost; how much does social media management cost; how much does a logo design cost for a small business; how much does google ads management cost; how much does a commercial video cost to produce on the eastern shore
- `/locations/` (3): web design worcester county md; marketing agency worcester county md; social media marketing worcester county md
- `/locations/salisbury-md/` (14): web design salisbury md; website design salisbury md; web developer salisbury md; website company salisbury md; web design wicomico county md; web design delmar md; digital marketing agency salisbury md; marketing agency salisbury md; marketing company salisbury md; advertising agency salisbury md; marketing agency wicomico county; marketing agency wicomico county md; digital marketing salisbury md; who builds websites in salisbury maryland
- `/locations/salisbury-md/seo/` (5): seo company salisbury md; seo services salisbury md; local seo salisbury md; seo company wicomico county md; seo company salisbury md reviews
- `/locations/salisbury-md/google-ads/` (2): google ads management salisbury md; ppc agency salisbury md
- `/locations/salisbury-md/social-media/` (2): social media marketing salisbury md; social media management salisbury md
- `/locations/salisbury-md/graphic-design-branding/` (4): branding agency salisbury md; logo design salisbury md; graphic design salisbury md; print design salisbury md
- `/locations/ocean-city-md/` (8): web design west ocean city md; web design agency west ocean city; digital marketing agency ocean city md; marketing agency ocean city md; marketing company ocean city md; advertising agency ocean city md; ocmd marketing agency; marketing agency west ocean city md
- `/locations/rehoboth-beach-lewes-de/` (18): web design rehoboth beach de; website design rehoboth beach; web developer rehoboth beach de; web design lewes de; web developer lewes de; marketing agency rehoboth beach de; seo company rehoboth beach; digital marketing agency lewes de; seo company lewes de; local seo rehoboth beach; social media marketing rehoboth beach de; google ads agency rehoboth beach de; ppc management lewes de; logo design rehoboth beach de; graphic design lewes de; branding agency lewes de; video production lewes de; video production rehoboth beach de
- `/locations/berlin-ocean-pines-md/` (12): web design berlin md; website design berlin maryland; website design ocean pines md; web designer ocean pines; marketing agency berlin md; web design and marketing berlin maryland; seo berlin md; marketing company ocean pines md; graphic design berlin md; wedding videographer berlin md; social media marketing berlin md; marketing agency ocean pines md
- `/locations/bethany-beach-fenwick-island-de/` (7): web design fenwick island de; web design bethany beach de; marketing agency bethany beach de; seo bethany beach de; marketing agency fenwick island de; seo fenwick island; wedding videographer bethany beach de
- `/locations/sussex-county-de/` (14): web design millsboro de; web design sussex county de; website design southern delaware; web design seaford de; web design company delaware beaches; marketing company millsboro de; seo company sussex county de; marketing agency sussex county de; marketing agency seaford de; seo seaford de; social media marketing sussex county de; marketing agency millsboro de; social media marketing seaford de; digital marketing sussex county de
- `/locations/easton-cambridge-md/` (13): website design easton md; web design cambridge md; web design dorchester county md; web design talbot county md; marketing agency easton md; seo company easton md; digital marketing cambridge md; seo cambridge md; branding agency easton md; social media marketing easton md; video production easton md; video production cambridge md; marketing agency cambridge md
- `/locations/pocomoke-snow-hill-md/` (6): website design pocomoke city md; web design snow hill md; marketing pocomoke city md; seo snow hill md; google ads management pocomoke city md; marketing agency snow hill md
- `/industries/hospitality-vacation-rentals/` (11): hotel website design ocean city md; vacation rental website design ocean city md; hotel marketing agency ocean city md; hotel marketing ocean city md; hotel marketing agency salisbury md; vacation rental marketing ocean city md; vacation rental marketing salisbury md; vacation rental marketing worcester county md; vacation rental marketing bethany beach de; hotel marketing agency rehoboth beach; short term rental marketing ocean city md
- `/industries/restaurants-bars/` (5): restaurant website design ocean city; restaurant marketing ocean city md; restaurant marketing salisbury md; restaurant marketing rehoboth beach; how to market a restaurant in a beach town
- `/industries/amusements-attractions/` (1): tourism marketing agency eastern shore
- `/industries/golf/` (5): golf course marketing agency ocean city md; golf course website design maryland eastern shore; ocean city golf getaway marketing; golf package marketing delmarva; golf course social media marketing berlin md
- `/industries/real-estate/` (6): real estate website design ocean city md; real estate marketing sussex county de; real estate marketing ocean city md; real estate marketing salisbury md; delmarva real estate photography and video; how should realtors use video and drone footage to sell second homes
- `/industries/medical-dental/` (3): medical practice marketing ocean city md; medical practice marketing salisbury md; dental marketing eastern shore md
- `/industries/home-services/` (5): contractor website design salisbury md; home services marketing ocean city md; home services marketing salisbury md; hvac marketing salisbury md; home services marketing eastern shore
- `/compare/how-to-choose-a-marketing-agency/` (9): best web design company salisbury md; best web design company ocean city md; best marketing agency ocean city md; best marketing agency salisbury md; top digital marketing agencies salisbury md; best marketing agency eastern shore maryland; how to choose a marketing agency; should i hire a freelance social media manager or an agency; best digital marketing agency in ocean city maryland
- `/about/` (1): local vs national marketing agency
- `/contact/` (2): advertising agency near me; marketing company near me
- `/free-website-audit/` (2): do i need a website if i have a google business profile; does my website need to be ada compliant
- `/reporting/` (1): how long does seo take to work
- `/work/media-masters-site-build/` (1): how long does it take to build a website for a small business
- `/blog/how-much-does-a-website-cost/` (4): how much does a website cost; how much does a website redesign cost; how much does an ecommerce website cost; what does a hotel website cost ocean city
- `/blog/how-much-does-seo-cost/` (2): how much does seo cost for a small business; how much does local seo cost
- `/blog/show-up-in-chatgpt/` (4): how do i get my business to show up in chatgpt; what is generative engine optimization; geo vs seo what's the difference; how do ai overviews affect local businesses
- `/blog/rank-higher-on-google-maps/` (1): how to rank higher on google maps
- `/blog/vacation-rental-direct-bookings-ocean-city/` (2): how to get more direct bookings for a vacation rental in ocean city; how to use email marketing to get repeat hotel and vacation rental guests
- `/blog/off-season-marketing-ocean-city/` (1): how to market a seasonal business in the off season
