# D3 Corp content inventory: blog, case studies, videos, testimonials

Prepared for Media Masters Group LLC, 2026-11-11. Evidence base: the crawl of d3corp.com taken 2026-10-14, stored at `media-masters/research/raw/d3/` (all paths below are relative to that folder unless they start with `media-masters/`). Nothing was fetched live.

How to read this document:

- **Measured** means counted from a corpus file. The file and field are named.
- **Inferred** means a reading of measured facts. It is labelled "(inferred)".
- **Not in corpus** means the crawl does not hold the fact. We do not guess.
- "Body text" means a page's visible text with the shared header, sidebar, newsletter box and footer removed. For posts that is the text between `REQUEST A QUOTE ID3AS Blog` and `ID3AS Blog Stay up to date` in `pages/<slug>.txt`. For case studies it is the text between `Case Study:` and `Subscribe Get the latest`. We had to strip this ourselves because the `local_mentions` column in `derived/blog-posts.csv` is at least 5 on every post, and that floor comes from the footer addresses (inferred).
- Where these notes refer to our own plan, the reference is to `media-masters/PLAN.md` sections 5.2, 5.4 and 6.3.

---

## 1. Summary (for the owner)

1. **The blog is mostly old.** 31 of 52 posts carry a 2020 publish date. Since the start of 2022 D3 has published 15 posts in about 57 months. In the 12 months before the crawl it published 4. The newest post is dated June 10, 2026. Sources: `derived/blog-posts.csv` `date_published`, and dates shown on the pages for the 2 posts with no schema date.
2. **No post has a real author.** All 50 posts with structured data name the author "D3 Support". The other 2 have no author at all, and no post shows a byline on the page. Every post does show its date. Sources: `blog-posts.csv` `author`, `pages/*.json` `jsonld`, `screenshots/blog-connected-tv-advertising-desktop-fold.jpg`.
3. **The posts are generic marketing advice, not local or industry advice.** 8 of 52 posts name a Delmarva place in the body. None is written for hotels, vacation rentals, banks, golf, amusements or tourism boards. Restaurants get 1 post, a client spotlight on Ropewalk.
4. **AI is their newest theme.** 6 of 52 posts mention AI (`blog-posts.csv` `mentions_ai`). All 6 date from June 2024 on, and they make up 5 of the 7 most recent posts. D3 is clearly putting its fresh writing into AI and answer-engine optimization (AEO).
5. **New writing has moved to case studies.** All 28 case studies were published on the current site between July 2025 and September 2026 (per their `WebPage.datePublished`), 8 of them in 2026 (inferred: this is where D3 now invests).
6. **The case studies are stories, not proof.** Only Visiting Angels states a result D3 produced: caregivers and clients "doubled… from 100 to 200" and website users rose 70%. Primo gives a 40% lead-capture rate. The other 26 give no figure for what D3's work achieved. None gives a project timeline or a before-and-after measurement.
7. **The video library is large but thin.** 51 pages embed YouTube: 32 single-video pages, 17 case studies and 2 posts. Each video page has 139 to 185 words in total, most of it shared site template. 24 of the 32 have no inbound link from any other crawled page and are reachable only through the sitemap. The videos feature hotels, restaurants, nonprofits and four county tourism clients.
8. **The testimonials page is hidden from Google, but the homepage reviews are not.** The dedicated testimonials page carries `noindex` (`derived/pages.csv` `robots_meta` = "follow, noindex"), even though it is in the sitemap and linked from all 157 pages, so it cannot rank. The indexable homepage still shows a "Client Reviews" carousel of 14 testimonials, 11 with a full name (`pages/home.txt`). None has a date or star rating, and there is no Review markup on either page.
9. **Old links are broken.** 23 of 52 posts link to old `/post/` blog addresses. 46 of those 48 links, in 22 posts, redirect to the homepage instead of to the matching post; 2 redirect correctly. The blog index itself is missing from the sitemap. Pages 2 to 9 of the blog list are `noindex`. No service page, case study or the homepage links to any post.
10. **What we can own.** Industry playbooks for Delmarva hospitality (vacation rentals are not covered anywhere), case studies with numbers, named authors, a weekly schedule, video pages with transcripts, and dated reviews that Google can index. Section 7 sets a measurable "Our standard" for each.

---

## 2. Blog analysis ("ID3AS Blog")

### 2.1 Posts per year

Source: `derived/blog-posts.csv` `date_published` for 50 posts. Two posts have no `datePublished` in their schema, so we used the date printed on the page (`pages/blog-google-ads-or-meta-heres-what-we-tell-clients.txt`: "September 26, 2025"; `pages/blog-retargeting-101-how-to-remarket-your-brand.txt`: "October 13, 2025").

| Year | Posts | Notes |
|---|---|---|
| 2020 | 31 | 15 share the date 2020-04-06, 3 share 2020-01-01, and 1 is dated 2020-01-10 |
| 2021 | 6 | Includes 3 "ID3AS in Action" client spotlights |
| 2022 | 3 | |
| 2023 | 1 | Remington Mulch spotlight |
| 2024 | 2 | AI Lessons Learned; Crisis Communication |
| 2025 | 6 | 4 with schema dates and 2 with on-page dates only |
| 2026 (to Oct 14) | 3 | Feb 25, May 20, Jun 10 |
| **Total** | **52** | |

- **Last 12 months before the crawl** (2025-10-14 to 2026-10-14): 4 posts, dated Dec 1, Feb 25, May 20 and Jun 10. Measured.
- **Gap at crawl time:** 126 days since the last post (Jun 10 to Oct 14). Measured from dates.
- **Bulk dates.** 15 posts share 2020-04-06, and 40 posts share `date_modified` 2025-09-10 (`blog-posts.csv`). This points to a bulk import in 2020 and a bulk update at the 2025 redesign, not to edits of individual posts (inferred). The image paths contain `d3-website-2025` (`pages/*.json` `images`), which supports the redesign reading.
- **Lost posts (inferred).** `INDEX.md` "Redirects" lists old addresses (`/ID3AS/post/...`, `/website-resources-tools/post/...`) whose titles have no match in the current blog. Examples are "How to Write an Effective Press Release", "Which Social Network is Right for Me", "Design Trends for 2021" and "Using Social Media During COVID-19". All of them redirect to the homepage. These posts appear to have been dropped in a migration.

### 2.2 Authors and bylines

| Check | Result | Evidence |
|---|---|---|
| Schema author | "D3 Support" on 50 posts; none on 2 | `blog-posts.csv` `author`; `jsonld` Person `name` = "D3 Support" with a default Gravatar image (`pages/blog-smarter-marketing-for-ai-strategies-that-work.json`) |
| Byline on the page | None found on any post | No "By …" or "Written by" pattern in any post's body text; `screenshots/blog-connected-tv-advertising-desktop-fold.jpg` shows only a calendar icon and date under the title |
| Date on the page | Yes, on 52 of 52 | A month-day-year string follows the title in every post's body text |
| H1 | 0 on all 52 | `pages.csv` `h1_count` = 0; `derived/site-issues.md` "Pages with no H1". The visible title is an H2. |
| Named staff in posts | One example: an image alt text naming the COO presenting on AI | `pages/blog-smarter-marketing-for-ai-strategies-that-work.json` `images` |
| `Person` schema anywhere on the site | 80 pages carry `Person` (`site-issues.md`), but every `Person` node in every page's `jsonld` is named "D3 Support", including the homepage and Meet Us page. No named staff member appears in structured data. | `pages/*.json` `jsonld`, computed |
| Chat widget | Every page loads an apigateway.co chat widget ("Hi, how can we help you today?"). This bears on the 2026 AI posts, which promote an "AI Assistant" service; whether the widget is that product is not in corpus. | `site-issues.md` `lexicon-prod.apigateway.co` and `conversation-prod.apigateway.co` = 157; `screenshots/blog-connected-tv-advertising-desktop-fold.jpg` |

**Weakness:** no named experts, so no author signals for Google or AI assistants (E-E-A-T, Google's experience-and-expertise quality signals).
**Our standard:** 100% of our articles carry a named author with a photo, a 60 to 120-word bio and a profile page, marked up as `Person` with `sameAs` links (PLAN 5.4). An article with no author does not ship.

### 2.3 Length

From `blog-posts.csv` `word_count`, which counts the whole page including the template:

- Median 818.5 words, mean 871, minimum 488 (Google My Business), maximum 1,801 (Practical Approach to Effective Public Relations).
- Body text only, by our own count: 273 to 1,586 words. The 2025 and 2026 posts run roughly 340 to 640 words (a recount gave 346 for the 2025-06-12 post and about 510 to 637 for the newest 7; counts depend on where the template is cut). The shared template adds roughly 200 words per page (inferred from the gap between the two counts).

**Our standard:** at least 1,000 words of body text on every pillar article and at least 700 on every weekly article. Word counts are measured on body text, not the template.

### 2.4 Topics by cluster

Our classification of all 52 titles and H2s (`pages/*.json` `h2`):

| Cluster | Posts | Examples (slug) | Years |
|---|---|---|---|
| Paid advertising (PPC, social ads, connected TV, geofencing, retargeting) | 10 | google-ads, connected-tv-advertising, google-ads-or-meta-heres-what-we-tell-clients, retargeting-101 | 2020–2025 |
| SEO, website and analytics | 10 | important-seo-trends-to-watch, a-guide-to-website-seo, google-my-business, what-does-ada-compliance-mean-for-you, when-its-time-to-redesign-your-website | 2020–2026 |
| Content, PR, reputation and brand | 8 | practical-approach-to-effective-public-relations, owning-your-media-coverage, online-reputation-management-101, crisis-communication | 2020–2025 |
| Social media | 5 | have-you-defined-your-social-voice, social-media-metrics-and-why-they-matter, seo-social-when-worlds-collide | 2020, 2025 |
| Email | 5 | why-do-people-unsubscribe-from-your-emails, spam-prevention-tips | 2020 |
| Client spotlights ("ID3AS in Action") | 5 | George's Mixes, Delaware Elevator, Ropewalk, Thrasher's, Remington Mulch | 2021–2023 |
| AI and AEO | 4 | ai-lessons-learned, are-you-writing-for-ai-or-letting-ai-write-for-you, how-an-ai-assistant-can-turn-website-visitors-into-leads, smarter-marketing-for-ai-strategies-that-work | 2024–2026 |
| General strategy | 4 | capturing-leads-for-your-business, b2b-vs-b2c-marketing-made-easy, planning-your-2021-digital-marketing-budget, understanding-your-target-customer | 2020–2022 |
| Company news | 1 | 25-years-of-d3 | 2020 |

- **AI mentions:** 6 posts (`blog-posts.csv` `mentions_ai` = True). These are the 4 AI posts above plus five-reasons-pay-per-click-ads-generate-business and when-its-time-to-redesign-your-website. We confirmed the counts in body text: 9 to 26 AI-term hits each. No post before June 2024 mentions AI.
- **Promotional tie-in:** the 2026 AI posts point readers to D3's own AI Assistant and AEO services. Example from `pages/blog-smarter-marketing-for-ai-strategies-that-work.txt`: "Let D3 be your guide to all things AI."
- **Stale advice still live:** "Planning Your 2021 Digital Marketing Budget" is indexable. The 2024 AI post says ChatGPT's knowledge ran "up to September 2021" (`pages/blog-ai-lessons-learned.txt`). Both are measured. We read both as dated (inferred).

### 2.5 Local places in posts

Body-text matches for Delmarva towns, counties and states, after removing the footer addresses:

| Post | Places named in body | What the mention is |
|---|---|---|
| 25-years-of-d3 | Ocean City ×6, Salisbury ×2, Eastern Shore | Company history; quotes the Ocean City HMRA (the Hotel-Motel-Restaurant Association) |
| id3as-in-action-delaware-elevator-inc | Salisbury, Delaware, Virginia | Client spotlight |
| id3as-in-action-ropewalk | Ocean City ×2, Bethany ×2, Chincoteague | Client spotlight |
| id3as-in-action-thrashers-french-fries | Ocean City ×2 | Client spotlight |
| google-ads-or-meta-heres-what-we-tell-clients | Ocean City | Example search: "best pizza in Ocean City" |
| google-my-business | Ocean City | Example: a crab house in Ocean City |
| important-seo-trends-to-watch | Ocean City, Maryland | Example voice search |
| blogging-for-business | Maryland | Example blog topic about camping |

That is **8 of 52 posts with any local place**. Four of them are client or company stories, and none is local market advice. The Remington Mulch spotlight is set in Fairfax, Virginia, not on Delmarva.

**Our standard:** every article names at least one Delmarva town, season or local data point in its body, and at least 50% of articles are written for a named local industry (PLAN 6.3).

### 2.6 Internal links into posts, and the blog index

| Fact | Value | Evidence |
|---|---|---|
| Inlinks per post | 3 to 6 (42 posts have 4) | `blog-posts.csv` `inlinks` |
| Where those links come from | Previous and next posts, blog list pages, blog-search | In each post's `internalLinks`, the only links beyond the 28 shared by every post are its neighbour posts |
| Links to posts from the homepage, service pages or case studies | **0** | No non-blog page in `pages/*.json` has an `internalLinks` entry containing `/blog/` |
| Links from posts to case studies | **0** | Even the Delaware Elevator and George's spotlights do not link to those clients' case studies |
| Posts linking to old `/post/` addresses | **23 of 52** (48 links). 46 of the 48 links, in 22 posts, redirect to the homepage. 2 redirect correctly to the live post: `/post/2025/09/26/google-ads-or-meta…` (in five-reasons-pay-per-click-ads-generate-business) and `/post/2025/08/11/are-you-writing-for-ai…` (in smarter-marketing-for-ai-strategies-that-work). | `internalLinks` matching `/ID3AS/post/`, `/website-resources-tools/post/`, `/post/20…`; redirect targets in `INDEX.md` "Redirects and non-HTML" (lines 170–171 for the 2 correct ones). Example: `blog-planning-your-2021-digital-marketing-budget` has 6 such links. |
| Click depth of posts | 40 of 52 at depth 6 or more (24 at depth 8) | `pages.csv` `depth` |
| Posts in the sitemap | 52 of 52 | `pages.csv` `in_sitemap` |
| Blog index | `/id3as/` (the crawl recorded it at `/ID3AS/`, canonical `/id3as/`). **Not in the sitemap**, depth 5, 6 inlinks, `canonical_ok` False; it is the 1 "canonical pointing elsewhere" in `site-issues.md`. All 157 pages link to lowercase `/id3as/` and only 6 to `/ID3AS/`; the case mismatch is the likely reason the crawl buried it (inferred). | `pages/id3as.json` `url`, `canonical`; `pages.csv` row `id3as` (`in_sitemap`, `depth`, `inlinks`, `canonical_ok`); `internalLinks` across `pages/*.json` |
| Pagination | `/id3as/page/2/` to `/page/9/` (9 list pages, about 6 posts each) | `pages.csv` |
| Robots on list pages 2–9 | **"follow, noindex"** on all 8 | `pages.csv` `robots_meta`; `site-issues.md` "Pages with noindex" |
| Canonical on pages 2–9 | Missing (`canonical_ok` False) | `pages.csv` |

Some of these redirects throw away links D3 already had. For example, `/ID3AS/post/Google-Ads` redirects to the homepage, although `/blog/google-ads/` exists (`INDEX.md`). The same happens for `/post/2024/06/18/ai-lessons-learned/` (`INDEX.md` line 172). Most homepage-bound `/ID3AS/post/` redirects (Google-Ads, Geofencing, Connected-TV, Facebook-and-Instagram-Ads, Social-Media-Metrics, Have-You-Defined-Your-Social-Voice, Taking-Email-Marketing and others) have a live equivalent under `/blog/`, and the 2 correct 2025 redirects show D3 already has a working pattern. The lost link value is therefore mostly recoverable by D3 with a redirect fix, not only a matter of dropped posts (inferred).

**Our standard:**
- Zero internal links that redirect or break (the QA gate in PLAN 5.5).
- Every article links to at least 1 service page and 1 case study. Every service page links to its 3 newest related articles.
- Every article sits no more than 3 clicks from the homepage.
- List pages are indexable with self-referencing canonicals, or replaced by topic hub pages.

### 2.7 What the cadence says about their content investment

- **Measured:** 31 posts in 2020, then 6, 3, 1, 2, 6 and 3 per year. The newest 7 posts (Aug 2025 to Jun 2026) are roughly 505 to 637 words of body text. No post names an author. In the window July 2025 to September 2026, when D3 published all 28 case studies, it published 8 posts (2025-07-28, 08-11, 09-26, 10-13, 12-01; 2026-02-25, 05-20, 06-10; `blog-posts.csv` `date_published` plus the 2 on-page dates). The skeptic's note gave 11 for this window; our recount from the dates gives 8.
- **Inferred:**
  - D3 treats the blog as a side channel, run by a shared "D3 Support" account. Its real content effort in 2025–26 went into the site redesign, case studies and an AI service push.
  - The 2020 spike matches a pandemic-era content drive and an import from an older platform (the `/ID3AS/post/` addresses).
  - At roughly 4 posts a year, D3 is not competing for informational search or for AI-assistant citations on local topics.
- **What this means for us:** a steady weekly schedule (PLAN 6.3) would publish more in our first 13 weeks than D3 has published since January 2023 (12 posts, measured).

**Our standard:** 1 article every week (at least 48 a year), each with a visible "published" date and an "updated" date that changes only when the content changes, and a 12-month review that refreshes or retires every article.

---

## 3. Case studies

### 3.1 All 28 case studies

Sources:
- **Industry and location:** the opening paragraphs of `pages/case-study-<slug>.txt`.
- **Services:** the "What We Did" labels printed at the top of each page. The `services_mentioned` column in `case-studies.csv` comes from keyword matching and tags "video" and "email" on nearly every page, so we did not use it.
- **Result:** any figure in the body text.
- **Words:** `case-studies.csv` `word_count`.
- **YouTube:** `has_video_iframe`.
- **Testimonial:** whether the body has a "Testimonial" block.

| # | Client | Industry (from text) | Location (from text) | "What We Did" | Measurable result claimed | Words | YouTube | Testimonial block |
|---|---|---|---|---|---|---|---|---|
| 1 | Babe Ruth Birthplace & Museum | Museum / historic landmark | Baltimore, MD | Websites | None | 514 | Yes | No |
| 2 | Boardwalk Hotel Group | Hotels (3 oceanfront hotels) | Ocean City, MD | Multimedia, Graphic Design, Marketing, Print, Websites | None (says the site "retained its earned search rankings", no figure) | 633 | Yes | Yes |
| 3 | Burley Oak | Brewery | Berlin, MD | Websites | None | 770 | No | Yes |
| 4 | Castle in the Sand Hotel | Hotel | Ocean City, MD | Multimedia, Marketing, Websites | No figure: "significantly increase its social media reach and engagement from years past" | 592 | Yes | No |
| 5 | Chesapeake Country Byway | Scenic byway / tourism | Maryland's Eastern Shore | Websites | None ("419 land miles" describes the byway) | 838 | Yes | Yes |
| 6 | Chesapeake Health Care | Community healthcare | Maryland's Eastern Shore | Websites | None | 694 | Yes | Yes |
| 7 | Crabs to Go | Seafood carry-out | Ocean City | Multimedia, Marketing, Websites | None | 473 | No | No |
| 8 | Delaware Crawl Space | Home services (crawl space, waterproofing, mold) | Delaware | Websites | None | 546 | No | Yes |
| 9 | Delaware Elevator, Inc. | Elevator contractor | Salisbury, MD HQ, multi-state | Graphic Design, Marketing, Websites | None | 814 | Yes | Yes |
| 10 | Dolles Candyland | Candy shop | Ocean City, MD | Graphic Design, Marketing, Websites | None | 388 | No | No |
| 11 | Farmers Bank of Willards | Community bank | Delmarva / Eastern Shore | Digital Ads, SEO, Multimedia, Graphic Design, Marketing, Print, Websites | None | 618 | No | No |
| 12 | George's Beverage Company | Drink mixes | Not stated in opening | Marketing, Packaging, Print, Websites | None | 622 | No | No |
| 13 | High Stakes Bar & Grill | Restaurant | Fenwick Island, DE | Websites | None | 641 | No | No |
| 14 | IDEC Elevator Products | Elevator cab products | Not stated in opening | Websites | None | 615 | Yes | Yes |
| 15 | Jolly Roger Amusements | Amusement parks | Ocean City, MD | Digital Ads, SEO, Multimedia, Marketing, Print, Websites | None | 701 | Yes | No |
| 16 | Old Pro Golf | Mini golf | Ocean City Boardwalk | Graphic Design, Marketing, Print, Websites (no client site link shown) | None | 769 | Yes | Yes |
| 17 | Our Harvest | Restaurant | Fenwick Island, DE (per `pages/video-done-proper-at-our-harvest.txt`) | Websites | None | 422 | No | No |
| 18 | Partnership for the Delaware Estuary | Environmental nonprofit | Delaware Estuary | Websites | None | 547 | No | No |
| 19 | Primo Family Restaurant | Restaurant | Alexandria, VA | Multimedia, Marketing, Websites | Lead capture: "approximately 40% of website visitors" | 588 | No | No |
| 20 | Remember Me Glass | Glass art studio | Berlin, MD | Websites | None | 848 | Yes | Yes |
| 21 | Salisbury Area Chamber of Commerce | Chamber of commerce | Salisbury, MD | Marketing | No figure: "increased social media following and interaction" (`case-studies.csv` `result_figures`) | 770 | Yes | No |
| 22 | Seacrets Jamaica USA | Nightclub, restaurant and events campus | Ocean City (49th St.) | Websites | None | 542 | Yes | No |
| 23 | Somerset County Tourism | County tourism office | Somerset County, MD | Multimedia, Graphic Design, Marketing, Print, Websites | None | 581 | Yes | No |
| 24 | The Land Group | Land brokerage | Not stated in opening | Websites | None | 699 | No | No |
| 25 | Visiting Angels Eastern Shore, MD | In-home senior care | Salisbury, Easton and Berlin, MD | SEO, Websites | **Yes:** "doubled their caregivers and clients from 100 to 200 of each" in the first six months; "A 70% increase in total website users" | 901 | Yes | Yes |
| 26 | White Marlin Open | Fishing tournament / event | Ocean City, MD | Websites | Context figures only: "$113 million" in prize money and "1.5 million page views during tournament week". Neither is a result of D3's work. | 670 | Yes | Yes |
| 27 | Youth Empowered Society (YES) Drop-In Center | Youth housing nonprofit | Baltimore | Multimedia, Websites | None | 826 | Yes | Yes |
| 28 | Zen Spa & Studio Z | Spa and wellness | Delaware coast | Websites | None | 436 | Yes | No |

Totals, all measured:
- **Results:** 1 of 28 states an outcome of D3's work in numbers (Visiting Angels). 1 gives a process figure (Primo). 1 gives figures that are not results (White Marlin Open). 2 claim increases without numbers. 23 make no measurable claim.
- **Length:** median 627.5 words, range 388–901 (`case-studies.csv`).
- **Video:** 17 of 28 embed YouTube.
- **Testimonials:** 12 of 28 have a testimonial block.
- **Ocean City:** 8 of 28 are in Ocean City (#2, 4, 7, 10, 15, 16, 22, 26).
- **Delmarva:** 21 of 28 name a Delmarva location.
- **H1:** 0 on all 28 (`pages.csv` `h1_count`).
- **Publish dates:** the schema `WebPage.datePublished` runs from 2025-07-28 (5 pages) to 2026-09-23 (Farmers Bank): 20 in 2025 and 8 in 2026. These dates are not shown on the page.
- **Reachability:** 2 case studies, `case-study-delaware-crawl-space` and `case-study-youth-empowered-societys-yes-drop-in-center`, cannot be reached from the homepage by crawled links (`pages.csv` `depth` blank, `inlinks` 1). Site-wide, `site-issues.md` counts 32 pages unreachable from home.

### 3.2 The pattern they follow

We read 6 case studies in full: Visiting Angels, Primo, White Marlin Open, Boardwalk Hotel Group, Farmers Bank of Willards and Jolly Roger. Every case study follows the same template:

1. **"Case Study: <Client>"**, then the "What We Did" labels and the client's web address.
2. **"The Story" / "Their Story"**: the client's history and heritage. It is often long; Jolly Roger opens with "more than 60 years" and Farmers Bank with a "101-year history".
3. **"Our Journey"**: what D3 did, described in qualities ("modernize", "cohesive", "seamless", "AEO- and SEO-focused optimization").
4. An optional **"The Result?"** heading. Of the 6 we read, only Visiting Angels has one.
5. An optional **"Testimonial"** block, a single quote.
6. An embedded YouTube video on 17 pages. Its schema is a `VideoObject` whose description is YouTube's generic site text ("Enjoy the videos and music you love…") on 17 of the 18 such objects (`pages/case-study-*.json` `jsonld`).

The strengths are real. The relationships are long ("over two decades" with Boardwalk Hotel Group; "since 2016" with the White Marlin Open), the brands are well known locally, and the photography and video are their own.

### 3.3 What is missing

| Missing element | Count of 28 | Evidence | Our standard |
|---|---|---|---|
| Result in numbers attributable to the work | 27 lack it | Table 3.1 | Every case study states at least 2 metrics as baseline → after, with the measurement window and data source (for example GA4 or Google Business Profile Insights) (PLAN 5.4) |
| Timeline (start date, launch date, measurement period) | 27 lack a project timeline. Visiting Angels gives "first six months" but no dates. White Marlin Open lists yearly milestones (2016, 2024, 2025). | Body text | A dated timeline on every case study: kickoff, launch and the "results as of" date |
| Before/after visuals or scores | 0 have before/after screenshots or speed scores | No before/after wording or image alt text found | Before/after screenshots plus mobile Lighthouse scores before and after on every website case study (PLAN 5.2 "Proof") |
| Problem statement with a cost | Mostly heritage narrative; problems are qualitative | 6 read in full | A one-sentence business problem with a number (for example "bookings fell X% after…") |
| Visible publish date | 0 | Dates appear only in schema | A visible "Published" and "Results as of" date |
| Named client contact | 12 have a quote; some are signed by the company only (Boardwalk Hotel Group) | Testimonial blocks | A named person and job title on every quote, with written permission on file |
| H1 | 0 | `pages.csv` | Exactly one H1 per page |
| Links to related posts or services | 0 links from posts to case studies | Section 2.6 | Every case study links to the service pages used and at least 1 related article, and the reverse |

---

## 4. Videos

### 4.1 Inventory

- **Index page:** `/videos/`. 394 words, indexable, in the sitemap, linked from every page (`pages.csv` row `videos`). It shows 8 videos, then a "LOAD MORE" button (`pages/videos.txt`).
- **Single-video pages:** 32 pages at `/video/<slug>/`, all in the sitemap (`pages.csv`).
- **YouTube embeds:** 51 pages embed YouTube: the 32 video pages, 17 case studies and 2 posts (25-years-of-d3 and owning-your-media-coverage). Count taken from `pages/*.json` `iframes`; it matches `i.ytimg.com` = 51 in `site-issues.md`.
- **Video page structure:**
  - **Length:** 139 to 185 words (`pages.csv` `word_count`), most of it template. Each page has a "Video: <title>" heading and one or two sentences of description (`pages/video-*.txt`).
  - **Markup:** no H1 (`h1_count` 0). Only `BreadcrumbList` schema; **no `VideoObject`** on any video page (`pages.csv` `jsonld_types`).
  - **Transcripts:** none found in any video page's text.
  - **Reachability:** 24 of 32 video pages have no inbound link from any other crawled page. Their only recorded inlink (`pages.csv` `inlinks` = 1, `depth` blank) is a self-link, and they are reachable only through the sitemap. The other 8 sit at depth 2 with 2 inlinks: they match the 8 shown on `/videos/` before "LOAD MORE" (`pages/videos.txt`).
  - **Inbound links:** apart from those 8 links on `/videos/`, no page links to a video page. No case study or service page links to one (computed from `internalLinks`).
  - **Naming:** the video page titled "Maryland State Preferred Provider Program" is the Maryland Works video (`pages/video-maryland-state-preferred-provider-program.txt`); it is listed as "Maryland Works" in 4.2.

### 4.2 Which clients the videos showcase

Grouped from the 32 `pages/video-*.txt` descriptions:

| Category | Count | Videos (client) |
|---|---|---|
| Nonprofits and community groups | 8 | BISM (Blind Industries and Services of Maryland) ×3 (golf tournament 2024, BISM on Tap 2025, donate); Junior Achievement ×3 (Inspire 2023, Leadership Academy 2024, 18 Under 18 2025); Mid-Shore Pro Bono; Maryland Works |
| Counties, places and tourism | 6 | Somerset County ×2; Queen Anne's County; Sussex County from the Sky; High Speed Fun in Worcester County; Do It Like a Local in Ocean City |
| Hotels | 5 | Boardwalk Hotel Group: Days Inn, Howard Johnson Plaza; The Grand Hotel (Ocean City); The Atlantic Sands (Rehoboth Beach); The Inn of Cape May |
| Food and drink brands | 5 | George's (tailgate); Old Bay Vodka (McClintock Distilling); Fisher's Popcorn; Thrasher's French Fries; The Burley Oak Story |
| Restaurants and bars | 4 | Barrio Taco; Border Bar; Macky's Bayside Bar & Grille; Our Harvest |
| Amusements | 1 | Jolly Roger #MyJollySummer |
| Events and venues | 2 | White Marlin Open; Weddings at Baywood Greens |
| Other | 1 | Read Across America 2023 (Delmarva Veteran Builders) |

- **Dates:** video pages show no publish date. Four titles carry a year (2023, 2024, 2025 ×2). Not in corpus: view counts, length, YouTube channel size.
- **Reach beyond Delmarva:** the hotel videos extend to Rehoboth Beach and Cape May, and the county videos cover Queen Anne's and Sussex. D3's video work reaches well past its two offices (inferred).

**Weakness:** a large video portfolio sits on 32 near-empty pages with no video schema or transcripts and almost no links pointing to them, so search engines and AI assistants get little text to understand or cite (inferred).

**Our standard:** every video page carries:
- a full transcript;
- at least 300 words of original context (client, goal, what was shot, result);
- `VideoObject` schema with a real description, upload date, duration and thumbnail;
- a visible date;
- links to and from the related case study and service page.

No video page sits more than 3 clicks from the homepage.

---

## 5. Testimonials

Source: `pages/testimonials.txt`, `pages/testimonials.json` and `pages.csv` row `testimonials`.

| Fact | Value | Evidence |
|---|---|---|
| Testimonials visible on page load | **6**, then "LOAD MORE" | `pages/testimonials.txt` |
| Organizations shown | MD Cops; Coastal Hospice; Balance Experts; Boardwalk Hotel Group; Old Pro Golf; Delaware Elevator & IDEC Elevator Products | Same |
| Industries (as far as the text shows) | Hospice care (Coastal Hospice); hotels (Boardwalk Hotel Group); mini golf (Old Pro Golf); elevators (Delaware Elevator/IDEC). MD Cops and Balance Experts: industry not stated. | Same |
| Named people | Anthony Cerrato (Old Pro Golf), Alena Pauliuchkova (Balance Experts), Charley Meeks (Delaware Elevator & IDEC). `testimonials.txt` lists the names apart from the companies; the mapping comes from `pages/home.txt` "Client Reviews", which prints each entry as company, quote, name. | `pages/testimonials.txt`; `pages/home.txt` |
| Dates on testimonials | **None** | Same |
| Star ratings | None. One quote reads "A 5-star team delivering 5-star service and support!" | Same |
| Review or AggregateRating schema | **None.** JSON-LD types are BreadcrumbList, CollectionPage, ImageObject, ListItem, Organization, WebSite. | `pages.csv` `jsonld_types` |
| H1 | 0 | `pages.csv` `h1_count` |
| Canonical | **Missing** (`canonical_ok` False); one of the 9 "Canonical missing" pages with `/id3as/page/2/` to `/page/9/` | `pages.csv` `canonical`, `canonical_ok`; `site-issues.md` |
| Robots meta | **"follow, noindex"** | `pages.csv` `robots_meta`; `site-issues.md` |
| In sitemap / inlinks | Yes / 157 (linked from every page) | `pages.csv` |
| Testimonial blocks inside case studies | 12 of 28 | Table 3.1 |

- The dedicated testimonials page is in the sitemap and linked from all 157 pages, yet tells search engines not to index it, so it cannot rank (measured). It is unclear whether this is deliberate (inferred: probably a leftover setting).
- **The homepage still exposes reviews to Google.** The indexable homepage has a "Client Reviews" carousel (`pages/home.txt`; the text repeats the set because the carousel loops). It holds 14 distinct testimonials, each truncated with "...Read More", with no dates, ratings or Review markup:

| Organization (homepage carousel) | Name shown |
|---|---|
| Boardwalk Hotel Group | Karen Decker |
| Old Pro Golf | Anthony Cerrato |
| Chesapeake Country All-American Road Alliance | Kristen Goller |
| Balance Experts | Alena Pauliuchkova |
| Delaware Elevator & IDEC Elevator Products | Charley Meeks |
| Youth Empowered Society's YES Drop-In Center | Allen Blackwell |
| Worcester County Tourism | None shown |
| Unscene Productions | First name only ("Amber", inside the quote text) |
| Maryland Tourism Coalition | Ruth Toomey |
| Coastal Homes & Design and Delaware Crawlspace Company | J.R. Ennis |
| Junior Achievement | Ricky Pollitt |
| White Marlin Open | Bill Chambers |
| Holman Aviation | Jeffrey Auxer |
| Maryland Capital Enterprises | First name only ("Dory", inside the quote text) |

  So 11 of the 14 carry a full name. MD Cops and Coastal Hospice appear on the testimonials page but not in the homepage carousel.
- The first-pass recon (`media-masters/research/00-d3-recon-2026-10-13.md`, line 43) reported at least 10 pages of testimonials, naming Southern Shades, Avery Hall Insurance, Southern Delaware Tourism and Maryland Capital Enterprises. The crawl holds only the first 6. Any further testimonials load through "LOAD MORE" and are **not in corpus**.

**Our standard:**
- Our reviews page is indexable.
- Every testimonial shows a named person, company, industry, town, date and source, with a link to the original Google review where one exists.
- A live Google review feed (PLAN 5.2).
- Review markup only where Google's rules allow it.
- At least 2 new Google reviews a week (PLAN 6.2).

---

## 6. Topic coverage map: local industries

Columns:
- **Case studies, videos and posts "about":** the industry is the main subject (our classification of each page).
- **Posts mentioning:** a keyword match anywhere in body text, computed with patterns such as `hotel|resort`, `restaurant|dining|pizza`, `bank|credit union` and `roof|hvac|plumb|contractor|landscap|crawl space`. This column is noisy: many hits are passing examples.

| Industry | Case studies about (of 28) | Videos about (of 32) | Posts about (of 52) | Posts mentioning (of 52) | Notes |
|---|---|---|---|---|---|
| Hotels | 2 (Boardwalk Hotel Group, Castle in the Sand) | 5 | 0 | 4 | 25-years post quotes the Ocean City HMRA; Seacrets and Jolly Roger case studies mention hotels |
| Vacation rentals | 0 | 0 | 0 | 0 | **Not covered anywhere in the corpus** |
| Restaurants and bars | 5 (Crabs to Go, High Stakes, Our Harvest, Primo, Seacrets) | 4 | 1 (Ropewalk spotlight) | 10 | Most mentions are passing examples ("best pizza in Ocean City") |
| Food and drink brands | 3 (George's, Burley Oak, Dolle's) | 5 | 2 (George's, Thrasher's spotlights) | n/a | |
| Amusements | 1 (Jolly Roger) | 1 | 0 | 0 | |
| Golf | 1 (Old Pro Golf, mini golf) | 1 (BISM golf fundraiser) | 0 | 0 | No regular golf course client in the corpus |
| Banks | 1 (Farmers Bank of Willards) | 0 | 0 | 0 | |
| Healthcare | 2 (Chesapeake Health Care, Visiting Angels), plus Zen Spa (wellness) | 0 | 0 | 1 (passing) | Coastal Hospice appears only as a testimonial |
| Nonprofits | 3 (Babe Ruth Museum, Delaware Estuary partnership, YES) | 8 | 0 | 1 (passing) | |
| Counties and tourism boards | 2 (Somerset County Tourism, Chesapeake Country Byway), plus Salisbury Chamber | 6 | 0 | 0 | |
| Home services | 1 (Delaware Crawl Space) | 0 | 1 (Remington Mulch, landscaping supply, Virginia) | 7 (mostly "roof repair near me" style examples) | |
| Other | Delaware Elevator, IDEC (B2B); White Marlin Open (event); The Land Group (land); Remember Me Glass (art) | Baywood Greens; Read Across America | 25 Years of D3 | | |

**Reading the map:**
- **Measured:** D3 can show hospitality, tourism and nonprofit work through case studies and videos.
- **Inferred:** D3 has not turned that experience into teaching content. No post is a guide for any local industry.
- **Measured:** vacation rentals are absent from every content type, even though the Ocean City and Delaware beach markets are full of them.

---

## 7. Content gaps we can own

| # | Gap (evidence) | What we publish | Our standard |
|---|---|---|---|
| 1 | **Vacation rentals: 0 pages** across 52 posts, 28 case studies and 32 videos (Section 6) | A vacation-rental marketing hub: direct bookings vs. OTAs (online travel agencies such as Airbnb and Vrbo), Google Vacation Rentals listings, off-season demand, owner-recruitment pages for property managers | Hub live by launch plus 6 weeks, with at least 6 supporting articles in the first quarter |
| 2 | **No industry guides.** 0 posts are written for hotels, restaurants, amusements, golf, banks, healthcare, nonprofits or tourism boards (Section 6). | One pillar guide per local industry, each tied to a matching industry page and case study | At least 8 industry pillars in year one, each at least 1,500 words of body text, with local examples and an FAQ of 4–6 questions (PLAN 5.4) |
| 3 | **Proof without numbers.** 1 of 28 case studies gives an outcome figure (Table 3.1). | Case studies in the PLAN 5.4 format | 100% state at least 2 baseline → after metrics with dates and data source; 0 published without client sign-off |
| 4 | **Anonymous authorship.** "D3 Support" on 50 of 52 posts, no bylines (Section 2.2) | Named authors, with the owner as lead voice | 100% named bylines with a bio, photo and `Person` schema |
| 5 | **Low cadence.** 4 posts in the 12 months before the crawl; last post 126 days before it (Section 2.1) | A weekly local-business article | At least 48 articles a year, none more than 10 days apart; tracked on a public content calendar |
| 6 | **Generic advice.** 8 of 52 posts name any Delmarva place, all in passing or in client stories (Section 2.5) | Seasonal and local playbooks: pre-Memorial Day checklist, shoulder-season promotions, Sunfest/Springfest event marketing, Route 50 and Route 113 commuter targeting | Every article names a Delmarva town or season and includes 1 local data point with a cited source |
| 7 | **Thin video pages.** 139–185 words, no `VideoObject`, no transcripts, 24 of 32 with no inbound link from another page (Section 4) | Video pages built as content pages | Transcript, at least 300 words, full `VideoObject`, visible date; every video linked from its case study and service page |
| 8 | **Hidden testimonials page.** The dedicated page is `noindex` with no canonical; homepage reviews are indexable but undated, truncated and without schema (Section 5) | Indexable reviews page fed by Google reviews | Indexable; 100% of testimonials dated, attributed and sourced; review count and average shown and updated at least weekly |
| 9 | **Link rot.** 46 old `/post/` links in 22 posts redirect to the homepage; the blog index is not in the sitemap; 0 links between posts, case studies and service pages (Section 2.6) | A clean internal-link graph | 0 redirecting or broken internal links at every deploy (automated check); every article has at least 3 contextual internal links (PLAN 5.4) |
| 10 | **Stale advice indexed.** "Planning Your 2021 Digital Marketing Budget" and a 2024 AI post that cites a 2021 cutoff are still live; 40 posts share one bulk `date_modified` (Section 2.1) | A content-freshness policy | Every article reviewed at least every 12 months: updated, merged, or retired with a 301 redirect to the closest live page, never to the homepage |
| 11 | **AI claims without evidence.** D3's 2025–26 posts promote AEO, but no post shows measured AI visibility (Sections 2.4, 3.3) | A quarterly "Who do AI assistants recommend on Delmarva?" study from our monthly 20-prompt test (PLAN 6.6) | Published quarterly with the method, the prompts and dated screenshots |
| 12 | **No cost content.** No post or case study gives a price or budget figure; the only budget post is dated 2020 (Section 2.4) | Cost guides ("What a website costs on the Eastern Shore in 2027") tied to our published prices | At least 4 cost guides in year one, each linked to the pricing page (PLAN 5.2 "Pricing") |
| 13 | **No headings structure.** 0 H1 on all 52 posts, 28 case studies, 32 video pages and the testimonials page (`pages.csv`) | Correct page structure | Exactly 1 H1 on every page, checked in QA (PLAN 5.5) |

Where D3 stays ahead, and how we answer:
- **Long relationships.** D3 has decades with Boardwalk Hotel Group, Jolly Roger and the White Marlin Open. We cannot copy that history. We answer with speed, with numbers, and with the owner's own voice.
- **Video library.** D3 has 32 videos plus 17 embedded in case studies. Matching that volume is a long-term job. The short-term win is to make each of our videos more useful as a page.

---

## 8. Open questions

1. **Testimonials behind "LOAD MORE".** How many exist, and are any dated? Not in corpus: only the first 6 were captured. The recon lists other names (Section 5).
2. **Video data.** Not in corpus: the size of D3's YouTube channel, view counts and video lengths. These would show whether the video investment reaches audiences outside the website.
3. **Off-site content.** Not in corpus: the "AI Series" referred to in `pages/blog-smarter-marketing-for-ai-strategies-that-work.txt` links out to LinkedIn. D3 may publish more on LinkedIn, in a newsletter or at events than on its blog. Worth checking manually.
4. **Newsletter.** Every page has a "Subscribe" form (`forms`). Not in corpus: how often D3 sends, and to how many people.
5. **Which content earns traffic or AI citations?** We have no analytics for D3. A third-party traffic estimate and our planned AI-mention test (PLAN 6.6) would show whether the case studies or the old 2020 posts get any visibility.
6. **Are the 2020-04-06 and 2025-07-28 dates migration dates?** That is our reading (inferred). If so, the true age of those posts and case studies is unknown.
7. **External links to the lost posts.** `INDEX.md` lists old addresses redirecting to the homepage, which may waste any links other sites gave them. Not in corpus: whether any outside site still links to them. A backlink tool would answer this.
8. **Was the testimonials `noindex` intentional?** It may be fixed at any time. Re-crawl monthly (the D3 change watch in the monthly sprint).
9. **Client permissions.** Before we pitch any D3 client named here, we need to confirm the relationship is current. A case study's date of publication does not show that the client is still with D3.

---

## Verification (2026-11-11)

A skeptic checked 25 claims against the corpus. Result: 20 supported, 0 wrong, 5 overstated, 0 unsupported. 8 missing facts were also flagged. Corrections made:

- Body word counts (2.3, 2.7): ranges marked approximate (about 340 to 640; newest 7 about 505 to 637); 2.7 now compares the 28 case studies with the 8 posts in the same Jul 2025 to Sep 2026 window (our date recount gives 8, not the skeptic's 11).
- Old links (Summary 9, 2.6, Gap 9): now 23 posts and 48 links, of which 46 links in 22 posts redirect to the homepage and 2 redirect correctly.
- Video reachability (Summary 7, 4.1, Gap 7): 24 of 32 have no inbound link from another page; their single inlink is a self-link.
- Testimonial names (Section 5): names mapped to companies using `pages/home.txt`.
- "Invisible in Google" (Summary 8, Section 5, Gap 8): narrowed to the dedicated page; homepage carousel of 14 testimonials (11 fully named) added.
- Added: blog index `/ID3AS/` not in sitemap, depth 5, canonical case mismatch (2.6).
- Added: 2 case studies unreachable from home; 32 site-wide (3.1).
- Added: most homepage-bound redirects have live `/blog/` equivalents, so the loss is recoverable (2.6).
- Added: Maryland State Preferred Provider Program = Maryland Works video (4.1).
- Added: testimonials page has no canonical (Section 5).
- Added: site-wide apigateway.co chat widget (2.2).
- Added: all 80 `Person` nodes are "D3 Support"; no named staff in schema (2.2).
