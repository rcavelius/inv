# D3 Corp (d3corp.com): technical and on-page SEO audit

Prepared 2026-11-11 for Media Masters Group LLC. Source: the crawl of d3corp.com taken 2026-10-14. No web searches and no live fetches were used.

All file paths are relative to `media-masters/research/raw/d3/` unless they start with `media-masters/`. "Measured" means read or counted directly from the corpus. "Inferred" means our reading of that evidence. "Not in corpus" means we did not capture it.

---

## 1. Summary (for the owner)

1. **D3 has no page for any town except through the homepage.** No URL, title or H1 targets Berlin, Ocean Pines, Fenwick, Rehoboth, Lewes, Easton or Sussex County. None of the 12 H1s on the site names a place, and Salisbury appears in only 3 of 157 titles (measured, `derived/pages.csv` `title`, `h1`). This is our clearest opening.
2. **Their site is slow on phones.** Mobile Lighthouse performance scores run from 38 to 54. The main image (LCP) takes 15 to 30 seconds on 5 of the 6 pages tested, and pages weigh 4.1 to 8.0 MB (measured, `derived/lighthouse-summary.csv`). A static site from us can score 95+.
3. **Google is not given the basic business facts.** Their Organization schema carries only a name, URL and logo, on all 125 pages that have it. There is no address, phone, `sameAs` or service area, and no LocalBusiness markup anywhere (measured, `pages/*.json` `jsonld`). D3 does link its real Facebook, Instagram, LinkedIn and YouTube profiles on every page, but those profiles are not declared in schema (`pages/*.json` `externalLinks`).
4. **145 of 157 pages have no H1 heading.** That includes all 52 blog posts, all 28 case studies and the Custom Websites page. 77 pages have neither an H1 nor an H2 (measured, `derived/site-issues.md`, `pages/*.json` `h1`/`h2`).
5. **Their dedicated testimonials page is hidden from Google** (`noindex`) but is still listed in their sitemap. Review excerpts do appear on the indexable homepage under a "Client Reviews" H2, but no page carries Review or AggregateRating schema (measured, `derived/pages.csv` row `/testimonials/`, `sitemap-urls.json`, `pages/home.json` `h2`).
6. **Their blog is old and hard to reach.** 31 of 52 posts are dated 2020, and only 3 are from 2026. Most posts sit 7 to 9 clicks from the homepage behind blog pagination pages that are set to `noindex`. Every author is "D3 Support" or blank (measured, `derived/blog-posts.csv`, `derived/pages.csv` `depth`).
7. **The internal links leak.** 54 links on 23 pages point to old blog URLs that now redirect to the homepage (measured; computed from `pages/*.json` `internalLinks` and `index.json` redirects). Whether posts link to service pages from the article text is not in corpus, because `internalLinks` stores each URL once and every service page is already in the nav.
8. **Their service titles are long and aimed at "MD", not at towns.** The SEO page title is 125 characters and the Services hub title is 133. Google will cut both. Several pages compete with each other for the same term, for example the SEO service page and a 2020 blog post called "Search Engine Optimization" (measured, `derived/pages.csv`).
9. **They do some things right, and we must match those.** Every page shows the phone number and both office addresses in the footer. 88% of images lazy-load, 77% are WebP, the server answers in 60 to 100 ms, and 8 service pages carry Service schema (measured).
10. **Our bar:** one H1 on every page with the service or town in it, full LocalBusiness schema, an indexable reviews page with Review schema, 9 location pages, mobile Lighthouse 95+, LCP under 2.5 s, and no third-party widget on the first screen. Every item below has an "Our standard" line that sets the target.

---

## 2. Crawl and indexation

### 2.1 Counts

| Measure | Value | Evidence |
|---|---|---|
| HTML pages crawled (status 200) | 157 unique pages (158 fetches: `/id3as/` and `/ID3AS/` both returned 200 and share one slug) | `derived/site-issues.md`; `index.json` `pages` |
| Redirects recorded | 46 entries, but one is a self-entry (`/ID3AS/` to `/ID3AS/`, the sitemap URL `/id3as/` stored under slug `id3as` with final URL `/ID3AS/`), so **45 real redirects**, of which **40 land on the homepage** (9 of them from `www.` URLs) | `index.json` `pages[].redirectedTo` |
| Sitemap URLs | 150 in `sitemap-urls.json`; the crawler note says 151 | `sitemap-urls.json`; `INDEX.md` Notes |
| Sitemap URLs not crawled as pages | 2: `/id3as/` (it was fetched, but stored under the `/ID3AS/` slug) and `/locations.kml` (a KML file, not HTML) | `derived/site-issues.md`; `INDEX.md` Redirects |
| Crawled pages not in sitemap | 9: `/id3as/page/2/` to `/page/9/`, and `/ID3AS/` | `derived/pages.csv` `in_sitemap` |
| CMS | WordPress 7.1.2 on all 157 pages, served by nginx | `derived/pages.csv` `generator`; `index.json` `meta.homeHeaders` |

The sitemap is complete for the content that matters. The problem is what it also includes (2.3) and what it marks as hidden (2.2).

### 2.2 Noindex pages

| Page | robots meta | In sitemap? | Why it matters |
|---|---|---|---|
| `/testimonials/` | `follow, noindex` | **Yes** | This is the dedicated reviews page (`pages/testimonials.txt`), and it cannot rank for "D3 reviews" or "marketing agency Ocean City reviews". Review excerpts are still indexable on the homepage under a "Client Reviews" H2 (`pages/home.json` `h2`; `pages/home.txt`, for example Boardwalk Hotel Group and Old Pro Golf), but no page has Review or AggregateRating schema. Listing a noindex URL in the sitemap sends Google mixed signals. It also has no canonical (`canonical_ok` False) and no H1 or H2. |
| `/id3as/page/2/` to `/id3as/page/9/` (8 pages) | `follow, noindex` | No | These pages are how the crawler reached most older posts: 39 of 52 posts are at depth 7 to 9 (9 at depth 7, 24 at 8, 6 at 9; `derived/pages.csv` `depth`). `follow` keeps the links crawlable, but Google tends to crawl noindexed pages less over time (inferred), so older posts will be found less often. All 8 also share one meta description and have no canonical. |

Our standard: the reviews page is indexable and in the sitemap. No URL in the sitemap is `noindex`. Every post is within 3 clicks of the homepage through category or hub pages, not through deep pagination.

### 2.3 Indexable pages that should not be

These pages are `index, follow` and listed in the sitemap (measured, `derived/pages.csv`): `/site-down/` (166 words), `/webmail/` (228), `/two-factor-authentication-2fa-mobile-number-registration/` (258), `/su/` (an intake form for an SU entrepreneur program; 986 words, so not thin by our 300-word bar), `/ai-assistant-questionnaire/`, `/cookie-policy/`. Five of these six have no meta description; only `/webmail/` has one (127 characters, `derived/pages.csv` `desc_len`). The 32 `/video/` pages hold 139 to 185 words each, have no H1 or H2, and 24 of them have no link path from the homepage. Inferred: these thin pages spend crawl budget and add little to the site's topical signal.

Our standard: utility, login and form-only pages are `noindex` and left out of the sitemap. Every indexable page has at least 300 words of unique copy or real media with VideoObject schema.

### 2.4 Canonicals

| Finding | Evidence |
|---|---|
| 147 of 157 pages have a self-referencing canonical | `derived/pages.csv` `canonical_ok` |
| Missing canonical on 9 pages: the 8 pagination pages and `/testimonials/` | same |
| `/ID3AS/` (uppercase) returns 200 with a canonical to `/id3as/` (lowercase). The site serves case variants instead of redirecting them. | `index.json` entries for both URLs; `derived/site-issues.md` "canonical pointing elsewhere: 1" |
| Blog posts link to `/ID3AS` (no slash, uppercase), for example `blog/a-guide-to-website-seo` | `pages/blog-a-guide-to-website-seo.json` `internalLinks` |
| The header "REQUEST A QUOTE" button on all 157 pages links to `/request-a-quote` (no trailing slash), which redirects to `/request-a-quote/` | `pages/home.json` `nav`; `INDEX.md` Redirects |

Our standard: every URL is lowercase with a trailing slash. Case and slash variants 301 to the canonical. Internal links point straight at the final URL, with zero internal redirects in the build's link check.

### 2.5 Legacy URLs redirected to the homepage

40 old URLs, mostly the former `/ID3AS/post/...` and `/website-resources-tools/post/...` blog paths, redirect to `https://d3corp.com/` rather than to the matching new post (measured, `index.json`). Two show that a correct mapping was possible: `/post/2025/08/11/are-you-writing-for-ai...` goes to its new `/blog/` URL. But `/ID3AS/post/Google-Ads` goes to the homepage, even though `/blog/google-ads/` exists. Inferred: Google usually treats mass redirects to the homepage as soft 404s, so the link equity those old URLs earned is mostly lost. The redirect status code (301 or 302) is not in corpus.

Our standard: a redirect map in which every retired URL 301s to its closest live equivalent. A redirect to the homepage is never acceptable.

### 2.6 www variant and robots.txt

- `www.d3corp.com` returned status 200 (`index.json` `meta.wwwVariantStatus`). The crawler recorded only the final status, so we cannot tell whether a redirect happened first. The 9 legacy `www.` URLs all ended on the apex domain (`index.json` redirects), which suggests www redirects to apex (inferred).
- `robots.txt` in full: `User-agent: *`, `Disallow: /wp/wp-admin/`, `Allow: /wp/wp-admin/admin-ajax.php`, `Sitemap: https://d3corp.com/sitemap_index.xml`. It sets no rules for AI crawlers either way. Whether they have an `llms.txt` file is not in corpus.
- The homepage response headers include no `strict-transport-security`, `cache-control` or `content-security-policy` (`index.json` `meta.homeHeaders`; `derived/tech.json` `home_headers`). The `last-modified` and `etag` headers suggest a full-page static cache in front of WordPress (inferred).

Our standard: one host (apex or www) with a 301 from the other, HSTS on, long `cache-control` on static assets, a robots.txt that names the sitemap and states an explicit AI-crawler policy, and an `llms.txt` file (PLAN.md 6.1).

---

## 3. Title tags

### 3.1 Length distribution (157 pages)

| Characters | Pages |
|---|---|
| 30 or fewer | 5 |
| 31 to 50 | 27 |
| 51 to 60 | 45 |
| 61 to 70 | 46 |
| 71 to 80 | 24 |
| Over 80 | 10 |

Median 61, minimum 14 (`/site-down/`), maximum 154 (home). 80 titles are over 60 characters and 34 are over 70 (`derived/site-issues.md`). By page type, median length is: service 71, blog post 67.5, case study 65. There are no duplicate titles.

### 3.2 Pattern

Titles are pipe-separated. 99 have two pipes and 8 have three (computed from `derived/pages.csv` `title`). 146 of 157 contain "D3". The suffixes are templated by page type:

| Suffix after the first pipe | Pages |
|---|---|
| `D3 \| Digital Marketing Agency` (blog posts and misc.) | 51 |
| `D3 Multimedia` (video pages) | 32 |
| `D3 Case Study \| Digital Marketing Agency` | 28 |
| `D3` alone | 5 |
| `D3 \| Ocean City, MD Digital Marketing Agency` | 3 |
| Others, one or two pages each (service pages use custom second clauses such as "Top-Rated Graphic Design Agency in MD") | 38 |

Inferred: the blog suffix uses 29 characters and the case-study suffix 41 characters of every title for brand words, which pushes the topic past the cut-off on long post titles. "D3" on its own is also an ambiguous brand string (it shares the name with vitamin D3 and the D3.js library).

### 3.3 The 10 longest titles

| Chars | URL | Title |
|---|---|---|
| 154 | `/` | D3 Digital Marketing Agency \| Full-Service Marketing Experts in Ocean City & Salisbury, MD \| AEO, SEO, PPC, Multimedia, Website & Email Marketing Services |
| 133 | `/services/` | Full-Stack Digital Marketing Services \| Top-Rated Marketing Services for Healthcare, Home Services, Hospitality, and Government Firms |
| 125 | `/search-engine-optimization/` | SEO & AI Search Agency in MD \| Top-Rated Search Marketing Services for Home Services, Hospitality, Healthcare, and Government |
| 117 | `/social-media-marketing/` | Social Media Marketing Services \| Local Social Experts for Every Platform (TikTok, Meta, YouTube, X/Twitter and More) |
| 89 | `/blog/how-to-develop-an-effective-social-media-content-strategy/` | How to Develop an Effective Social Media Content Strategy \| D3 \| Digital Marketing Agency |
| 89 | `/digital-advertising/` | Digital Ad (PPC) Agency \| Google, Meta, Geofencing, and Programmatic Advertising Services |
| 87 | `/blog/using-original-content-to-drive-traffic-to-your-website/` | Using Original Content to Drive Traffic to Your Website \| D3 \| Digital Marketing Agency |
| 87 | `/case-study/youth-empowered-societys-yes-drop-in-center/` | Youth Empowered Society's YES Drop-In Center \| D3 Case Study \| Digital Marketing Agency |
| 84 | `/blog/are-you-writing-for-ai-or-letting-ai-write-for-you/` | Are You Writing for AI, or Letting AI Write for You? \| D3 \| Digital Marketing Agency |
| 83 | `/blog/how-an-ai-assistant-can-turn-website-visitors-into-leads/` | How an AI Assistant Can Turn Website Visitors into Leads \| Digital Marketing Agency |

Four of the top six are money pages: home, the services hub, SEO and social. Inferred: Google will rewrite or truncate them, so the "Ocean City & Salisbury" part of the home title is likely to survive only because it comes early.

### 3.4 Keyword targeting per service page

The target term is inferred from the title, H1 and URL slug. Source: `derived/pages.csv` `title`, `h1`, `word_count`, `jsonld_types`.

| URL | Title (chars) | H1 | Inferred target term | Place in title / H1 | Service schema | Words |
|---|---|---|---|---|---|---|
| `/services/` | 133 | End-to-End Digital Marketing Services | digital marketing services | none / none | No | 567 |
| `/websites/` | 60 | **none** (banner reads "Websites", `websites-mobile-fold.jpg`) | custom websites / web design | none / none | Yes | 1,072 |
| `/rapid-design-websites/` | 27 | Launch Sites Quickly with D3's Rapid Web Design Service | rapid web design | none / none | No | 765 |
| `/search-engine-optimization/` | 125 | Expert SEO Services | SEO agency, AI search | "MD" / none | Yes | 839 |
| `/answer-engine-optimization/` | 69 | Expert AEO Services with D3 | AEO, AI search agency | none / none | No | 940 |
| `/digital-advertising/` | 89 | Digital Ad Services | PPC agency, digital advertising | none / none | Yes (areaServed Ocean City, MD) | 977 |
| `/social-media-marketing/` | 117 | Social Media Marketing & Management Services | social media marketing services | none / none (the meta description names Ocean City, MD) | Yes | 1,424 |
| `/email-marketing/` | 79 | Email Marketing Services | email marketing services | "Mid-Atlantic" / none | Yes | 838 |
| `/graphic-design/` | 71 | Creative Graphic Design Services | graphic design agency | "MD" / none | Yes (areaServed Ocean City, MD) | 938 |
| `/multimedia/` | 76 | Multimedia Services & Local Production Experts | video production, multimedia | "MD" / none | Yes | 1,145 |
| `/print/` | 69 | Print Marketing Services | print marketing | "MD" / none | Yes | 657 |
| `/strategy/` | 80 | Digital Strategy Experts | digital strategy consultants | "MD's" / none | No | 951 |
| `/ai-assistant/` | 26 | **none** | AI assistant / website chatbot | none / none | No | 641 |

Inferred: every service page targets a generic national phrase, sometimes with "MD" added. None targets "+ Ocean City" or "+ Salisbury", which are the terms a local buyer types (PLAN.md 6.3).

Our standard: each service page has a title of 60 characters or fewer, in the form "{Service} in Ocean City & Salisbury, MD | Media Masters". The H1 names the service and the region. A separate town page carries each "{service} + {town}" cluster.

### 3.5 Cannibalization risks (pairs that target the same term)

| Page A | Page B | Shared term | Risk |
|---|---|---|---|
| `/search-engine-optimization/` | `/blog/search-engine-optimization/` (title "Search Engine Optimization \| D3 \| ...") | search engine optimization (identical slug word) | High |
| `/search-engine-optimization/` ("SEO & AI Search Agency") | `/answer-engine-optimization/` ("Expert AEO (AI Search) Agency Services") | AI search agency | High |
| `/websites/` ("Custom Websites") | `/rapid-design-websites/` ("Rapid Web Design Service") | web design / websites | Medium |
| `/` (H1 "A Full-Service Digital Marketing Agency...") | `/services/` ("Full-Stack Digital Marketing Services") | full-service digital marketing | Medium |
| `/digital-advertising/` | `/blog/google-ads/`, `/blog/digital-advertising-for-modern-marketing/`, `/blog/five-reasons-pay-per-click-ads-generate-business/` | Google Ads, PPC, digital advertising | Medium |
| `/email-marketing/` | `/blog/why-your-business-needs-email-marketing/`, `/blog/taking-email-marketing-to-the-next-level/` | email marketing | Medium |
| `/case-study/delaware-elevator-inc/` | `/blog/id3as-in-action-delaware-elevator-inc/` | client name | Low (brand query) |
| `/case-study/georges-beverage-company/` | `/blog/id3as-in-action-georges-mixes/` | client name | Low |
| `/case-study/burley-oak/` | `/video/the-burley-oak-story/` | client name | Low |
| `/case-study/white-marlin-open/` | `/video/catch-the-action-of-the-white-marlin-open/` | client name | Low |
| `/case-study/boardwalk-hotel-group/` | `/video/boardwalk-hotel-group-days-inn/`, `/video/boardwalk-hotel-group-howard-johnson-plaza/` | client name | Low |
| `/careers/` | `/join-our-team/` ("Ocean City, MD Digital Marketing Agency/Company") | careers / jobs Ocean City | Low |
| `/blog/search-engine-ranking-101/`, `/blog/a-guide-to-website-seo/`, `/blog/tips-for-avoiding-common-seo-mistakes/`, `/blog/important-seo-trends-to-watch/` | each other | SEO basics | Medium among themselves |

Our standard: a keyword map in which each term cluster has exactly one owning URL. Blog posts on a service topic link to the service page with descriptive anchor text and never reuse its exact head term as their title.

---

## 4. Meta descriptions

| Issue | Count | Pages / evidence |
|---|---|---|
| Missing | 6 | `/cookie-policy/`, `/internships/`, `/site-down/`, `/su/`, `/two-factor-authentication-2fa-mobile-number-registration/`, `/ai-assistant-questionnaire/` (`derived/site-issues.md`) |
| Duplicated | 1 text on 9 pages | `/ID3AS/` and `/id3as/page/2/` to `/page/9/` share one description ("Looking for digital marketing tips?...") |
| Over 155 characters | 31 | All are 156 to 159 characters. None is over 160 (computed from `derived/pages.csv` `desc_len`), so this is a minor issue. |
| **Description is just a URL** | 6 | Five "ID3AS in Action" posts use the client's homepage URL as their description, for example `https://ropewalk.com/` (21 chars). `/blog/25-years-of-d3/` uses a YouTube link. |
| Truncated sentence fragment | 2 | `/blog/ai-lessons-learned/` (50 chars), `/blog/crisis-communication/` (52 chars) |

Median length is 141. Inferred: the URL-only descriptions came from an automatic first-line excerpt during the migration, so Google will write its own snippet for those pages.

Our standard: every indexable page has a unique, hand-written description of 120 to 155 characters with the service and town in it. The build fails on a missing, duplicate or URL-only description.

---

## 5. Headings

### 5.1 The H1 finding, verified

There are 145 pages without an H1 element and none with more than one (`derived/site-issues.md`). The 12 pages that have an H1 are home, `/strategy/`, `/services/` and nine service pages. `/websites/` and `/ai-assistant/` have none.

We checked what pages use in place of an H1 (`pages/<slug>.json` `h1`, `h2`, `h3`, plus screenshots):

| Page | H1 | First H2 | What the visitor sees as the title |
|---|---|---|---|
| `/blog/a-guide-to-website-seo/` | none | "A Guide to Website SEO" | Banner "ID3AS Blog", then the post title in large type (`blog-a-guide-to-website-seo-desktop-fold.jpg`). The post title is an H2. |
| `/websites/` | none | "Build a Website That Grows Your Business" | Banner "Websites" (`websites-mobile-fold.jpg`), which is not a heading element |
| `/ai-assistant/` | none | "Engage visitors 24/7, answer questions instantly, and boost conversions with your AI Assistant" | The H2 acts as the title |
| `/contact-us/` | none | "Let's Start the Conversation" | The H2 acts as the title |
| `/case-study/boardwalk-hotel-group/` | none | **none** (the only H3 is "Subscribe") | The text "Case Study: Boardwalk Hotel Group" is present but is not a heading (`pages/case-study-boardwalk-hotel-group.txt`) |
| `/testimonials/`, `/video/the-burley-oak-story/` | none | none | No heading at all except the "Subscribe" H3 |

Across the site, 68 pages use an H2 as their top heading, and **77 pages have neither an H1 nor an H2**: all 32 videos, all 28 case studies, the 8 pagination pages, `/case-studies/`, `/videos/`, `/testimonials/`, `/site-map/`, `/accessibility/`, `/blog-search/`, `/webmail/`, `/su/` and the 2FA page (computed from `pages/*.json`). Inferred: the page banner is styled text in the theme template rather than an `<h1>`, so the fault repeats on every page built from that template.

The home H2 list repeats its own H1 text, and "Digital Marketing Services That Deliver" appears twice (`pages/home.json` `h2`). `/websites/` also repeats an H2, and the AI Assistant H2 contains a grammar error: "AI Assistant That Deliver Answers".

### 5.2 Heading order (axe, 30 pages)

axe found 61 `heading-order` nodes across the 30 audited pages (`derived/axe-rules-sitewide.md`). By page (`derived/axe-summary.csv`): 3 on `/digital-advertising/` and `/services/`; 2 on home, the other service pages and 20 of 21 blog posts; 1 on `/blog/how-an-ai-assistant-can-turn-website-visitors-into-leads/`. Lighthouse `heading-order` scores 0 on all 6 tested pages (`lighthouse/*.json`). Inferred cause: the sitewide "Subscribe" H3 in the sidebar or footer appears without a parent H2 in sequence.

Our standard: exactly one H1 per page, containing the page's target term (and its town where natural). No skipped heading levels. Both rules are checked at build, and axe reports zero `heading-order` and zero `page-has-heading-one` violations.

---

## 6. Internal linking

### 6.1 Click depth from the homepage

| Depth | Pages |
|---|---|
| 0 | 1 |
| 1 | 46 |
| 2 | 17 |
| 3 | 10 |
| 4 | 1 |
| 5 | 2 |
| 6 | 4 |
| 7 | 13 |
| 8 | 25 |
| 9 | 6 |
| Unreachable from home through links | 32 |

Source: `derived/pages.csv` `depth`. 61 pages are at depth 3 or more. **Blog posts have a median depth of 8**, because they are reached through the noindexed pagination chain. Case studies have a median depth of 1, because the case-studies hub links them.

### 6.2 The 32 unreachable pages

24 `/video/` pages, 2 case studies (`/case-study/delaware-crawl-space/`, `/case-study/youth-empowered-societys-yes-drop-in-center/`), and `/cookie-policy/`, `/internships/`, `/site-down/`, `/su/`, the 2FA page and `/ai-assistant-questionnaire/`. Each shows "1 inlink" in `pages.csv`, but we checked: that link is the page linking to itself (`pages/*.json` `internalLinks`). These pages are reachable only through the sitemap. Inferred: the two orphaned case studies are real proof that no visitor can reach by browsing.

### 6.3 Pages with the fewest inlinks (excluding the orphans above)

| Inlinks | Pages |
|---|---|
| 2 | `/case-study/georges-beverage-company/`, `/case-study/idec-elevator-products/`, `/case-study/our-harvest/`, `/case-study/remember-me-glass/`, `/blog-search/`, both `/career/` pages, the 8 reachable `/video/` pages |
| 3 | 10 case studies (for example `/case-study/burley-oak/`, `/case-study/chesapeake-health-care/`, `/case-study/white-marlin-open/`), `/blog/connected-tv-advertising/` |
| 4 | 42 of 52 blog posts |

Blog posts have 3 to 6 inlinks (median 4) and case studies 1 to 12 (median 3). Nav and footer pages get 157 each (`derived/pages.csv` `inlinks`).

### 6.4 Navigation, footer and in-body links

- **Nav: 32 links on every page** (`pages/home.json` `nav`). They cover 19 unique destinations, plus four `javascript:void(0)` "Back" links and an "Our Work" item with an empty href. Lighthouse `crawlable-anchors` scores 0 on all 6 tested pages (`lighthouse/*.json`), which matches this.
- **Footer: 22 links on every page.** These include both office addresses (linked to `goo.gl` map short links), the phone, two links to Google's own privacy and terms pages (from reCAPTCHA), a "Website Design" link that points to the homepage, and an outbound "Ocean City MD" link to visitoceancity.com.
- **Social profiles are linked on every page:** `https://www.facebook.com/D3DoesIt` (315 pages), `https://www.instagram.com/d3corp/` (316), `https://www.linkedin.com/company/d3corp` (314) and `https://www.youtube.com/c/D3CorpOceanCity` (314), as icon links with empty anchor text (`pages/*.json` `externalLinks`). A separate "Facebook" link to `https://www.facebook.com/` is a logo in the "Our Partners" carousel alongside Google, YouTube and Shopify (`pages/home.txt`), not a social link. The gap is that none of these profiles is declared in Organization `sameAs` (Section 8.2).
- **In-body links** (internal links minus nav, footer and self-link): the median is 2 per blog post, 0 per case study and 0 per video page (computed from `pages/*.json`). Whether a post links to a service page from its body is not in corpus: `internalLinks` stores unique URLs only, and every service page is already in the nav on every page. **54 internal links on 23 pages** point to legacy URLs that redirect to the homepage. For example, `/blog/google-ads/` links to `/ID3AS/post/The-Magic-of-Remarketing`.
- **Anchor text:** nav anchors are exact service names, for example "Search Engine Optimization" and "Custom Websites", which is good. Sitewide CTA anchors are generic: "Contact Us" 315 times, "REQUEST A QUOTE" 314 times (`pages/*.json` `ctas`). Anchor text for in-body links is mostly not in corpus, because `internalLinks` stores URLs only. The few captured in-text anchors are descriptive, for example "Meta Ads (Facebook & Instagram)".

Our standard: every page within 3 clicks of home. Zero orphan pages. Zero internal links to redirects. Every article links to 3 related pages in the body, including its service page, with descriptive anchors (PLAN.md 5.4). Every case study links to each service it showcases. Social icon links carry an accessible name, and the same profile URLs are declared in `sameAs`.

---

## 7. Images

| Measure | Value | Evidence |
|---|---|---|
| Images (all pages) | 4,155 | `derived/site-issues.md` |
| `alt=""` (empty) | 506 (12%) | same; `pages/*.json` `images` |
| No alt attribute at all | 0 | computed |
| Empty alt on 3 sitewide decorative images (`Robot-Small.webp` ×158, `Layer-82.webp` ×157, `Layer-83.webp` ×157) | 472 of the 506 | computed. Empty alt is correct for decorative images. |
| Empty alt on content images | about 34, for example the 14 copies of the home hero layer `Layer-49-1-1536x708.webp`, intern photos `Kierstyn.png`, `Lauren.png`, and `visiting-angels-monitor-D3-homepage.png` | computed |
| `loading="lazy"` | 3,653 (88%); 502 `auto` | `pages/*.json` `images[].loading` |
| Formats by `src` extension | WebP 3,184 (77%), PNG 530, SVG 315, JPG 106, JPEG 6, other 14 | computed |
| Image host | `website-media.com` (3,054 requests, the largest third-party host) | `INDEX.md` Third-party hosts |

Inferred: alt text is better than the raw 12% figure suggests, and Lighthouse `image-alt` passes on all 6 tested pages (`lighthouse/*.json`). The real weakness is image weight. Lighthouse still reports possible savings of 579 to 3,680 KiB from modern formats and 62 to 1,100 KiB from responsive sizing on the 6 tested pages, and the home hero is served at 1536 px (`pages/home.json` `images`).

Our standard: AVIF with a WebP fallback, served through `srcset` at the rendered size, so no page carries more than 150 KiB of image waste in Lighthouse. Every content image has descriptive alt text and decorative images have `alt=""`. The LCP image is never lazy-loaded and has `fetchpriority="high"`.

---

## 8. Structured data

### 8.1 Types by page type

The figures below come from four pages we read in full: home, `/search-engine-optimization/`, `/case-study/boardwalk-hotel-group/` and `/blog/a-guide-to-website-seo/` (`pages/*.json` `jsonld`). Sitewide counts come from `derived/site-issues.md` and `derived/pages.csv` `jsonld_types`.

| Page type | Types present | Notable gaps |
|---|---|---|
| Home | Organization, WebSite + SearchAction, WebPage, Person ("D3 Support"), Article | No LocalBusiness or ProfessionalService, no BreadcrumbList |
| Service (13) | WebPage + BreadcrumbList on all. Article + Person on 12; `/graphic-design/` has neither (`derived/pages.csv` `jsonld_types`). Service on 8: websites, social, SEO, print, multimedia, email, digital advertising, graphic design. | No Service schema on AEO, AI Assistant, Rapid Design, Strategy or the hub. No FAQPage. Pages are marked up as "Article" by "D3 Support". |
| Case study (28) | CreativeWork with `about` Place (27), VideoObject (17 nodes), BreadcrumbList | No Review, no result metrics, no link to the Service |
| Blog post (52) | BlogPosting, Person, BreadcrumbList | Author is "D3 Support" on 50 and missing on 2 (`derived/blog-posts.csv` `author`). The same 2 posts (`/blog/google-ads-or-meta-heres-what-we-tell-clients/`, `/blog/retargeting-101-how-to-remarket-your-brand/`) have no `datePublished` or `dateModified` in BlogPosting, so `date_published` is empty for them in `derived/blog-posts.csv`; their visible dates are September 26, 2025 and October 13, 2025 (`pages/<slug>.txt`). The other 50 have dates in both. |
| Video page (32) | BreadcrumbList only | **No VideoObject on the video pages themselves**, and no Organization |
| Testimonials | CollectionPage, BreadcrumbList | No Review or AggregateRating |
| Careers (2 job pages) | JobPosting, with PostalAddress holding only `addressLocality` ("Ocean City"; one also has region "MD") | No street address or postal code |
| Blog pagination (8) | CollectionPage, Organization, WebSite | No BreadcrumbList |

FAQPage: **absent on every page**. LocalBusiness, ProfessionalService, Review, AggregateRating, HowTo and Offer are also absent (computed across all `pages/*.json`).

### 8.2 Organization entity

On all 125 pages that include it, the `#organization` node has exactly five keys: `@type`, `@id`, `name` ("D3"), `url`, `logo` (computed). **It has no `address`, `telephone`, `sameAs`, `areaServed`, `foundingDate`, `email` or `legalName`.** The data exists on the site: four public emails (marketing@, clientservices@, solutions@ and support@d3corp.com; `derived/tech.json` emails) and the four social profiles in Section 6.4. The phone appears in schema only once, inside the Service `provider` on `/digital-advertising/`. `areaServed` appears only on 2 Service nodes, each with the single Place "Ocean City, MD" (`pages/digital-advertising.json`, `pages/graphic-design.json`). Service `provider` is an unlinked `{ "@type": "Organization", "name": "D3" }` rather than a reference to `#organization`.

### 8.3 Place schema (31 pages)

Place nodes describe **client** locations, not D3's own. They sit in case-study `about` fields, two Service `areaServed` fields and two job locations. By name: Ocean City, MD 10; Eastern Shore, MD 4; Fenwick Island, DE 3; United States of America 3; Berlin, MD 2; Baltimore, MD 2; Delaware, Wicomico County, Salisbury, Somerset County and Alexandria, VA 1 each; 2 unnamed (computed). Inferred: D3 has done work in Fenwick Island, Berlin and Somerset County, but has no page that targets those places.

### 8.4 Validation concerns we can see

These are visible in the corpus. We have not run them through a validator.

1. **HTML entities inside JSON-LD strings on 95 pages**, for example `"name": "... Ocean City &amp; Salisbury ..."` in `pages/home.json`. Search engines will show the literal "&amp;".
2. **VideoObject descriptions are YouTube's generic boilerplate** on 17 of 18 nodes ("Enjoy the videos and music you love..." in `pages/case-study-boardwalk-hotel-group.json`). VideoObject `name` is the page title with the brand suffix, and `isFamilyFriendly` is the string "True" rather than a boolean.
3. **Article `headline` is cut off mid-phrase** at about 110 characters on home and service pages, for example "...Ocean City & Salisbury, MD | AEO, SEO,". On blog posts, the headline includes the "| D3 | Digital Marketing Agency" suffix.
4. **Service pages are typed as Article** with an author "D3 Support". Inferred: this is a Rank Math default left in place, and it is the wrong type for a sales page.
5. **BreadcrumbList `position` values are strings** ("1"). Blog and service breadcrumbs have a single item and skip the blog index and Services hub.
6. **The JobPosting address is incomplete** (locality only). Inferred: Google for Jobs may flag the missing street address and postal code.

Our standard: one `ProfessionalService` (LocalBusiness) node sitewide with legal name, both addresses, phone, email, geo, hours, `sameAs` (GBP, Facebook, LinkedIn, Instagram, Clutch, chambers) and `areaServed` listing every county and town we target. `Service` with `provider` linked by `@id` on every service page. `FAQPage` on every service and town page. `BlogPosting` with a named `Person` author who has a bio URL. `VideoObject` with a real description and thumbnail on every video. All pages have zero errors in validator.schema.org and the Rich Results Test (PLAN.md 5.3, 5.5).

---

## 9. Performance

### 9.1 Lighthouse, mobile (6 pages)

LCP, TBT, CLS, speed index, total bytes and third-party blocking come from `derived/lighthouse-summary.csv`. Requests and runner load time come from `derived/pages.csv`. Interactive time comes from `lighthouse/*.json`.

| Page | Perf | LCP | TBT | CLS | Speed index | Total bytes | 3rd-party main-thread block | Time to interactive | Requests | Runner load (ms) |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 0.54 | 3.6 s | 2,050 ms | 0.031 | 5.1 s | 8,166 KiB | 1,730 ms | 26.9 s | 108 | 3,390 |
| `/services/` | 0.42 | 15.1 s | 1,320 ms | 0.034 | 5.7 s | 4,215 KiB | 1,500 ms | 23.9 s | 92 | 1,428 |
| `/websites/` | 0.38 | 30.3 s | 1,480 ms | 0.031 | 8.4 s | 5,464 KiB | 1,520 ms | 30.5 s | 99 | 1,383 |
| `/rapid-design-websites/` | 0.45 | 18.8 s | 1,000 ms | 0.034 | 5.4 s | 5,182 KiB | 1,520 ms | 25.0 s | 96 | 1,385 |
| `/blog/a-guide-to-website-seo/` | 0.44 | 26.9 s | 1,150 ms | 0.034 | 5.4 s | 4,491 KiB | 1,290 ms | 26.9 s | 90 | 2,075 |
| `/blog/when-its-time-to-redesign-your-website/` | 0.40 | 25.4 s | 1,360 ms | 0.049 | 6.7 s | 4,985 KiB | 1,460 ms | 25.4 s | 90 | 2,422 |

The other Lighthouse scores on the same pages: accessibility 0.77 to 0.84, best practices 0.75 to 0.79, SEO 0.92 on all six. The SEO points are lost only on `crawlable-anchors` (score 0 on all six); `canonical`, `meta-description`, `robots-txt`, `link-text` and `is-crawlable` all pass (`lighthouse/*.json`). `heading-order` also scores 0 on all six. Server response is 60 to 100 ms on all six, so the slowness is entirely front-end. CLS is good. FCP is 2.5 to 2.7 s. The LCP element is not in corpus. PageSpeed Insights returned HTTP 429 for all six URLs (`INDEX.md` Errors), so these figures come from the crawler's own Lighthouse run, and the throttling settings are not in corpus.

### 9.2 Sitewide request load (all 157 pages)

- Requests per page: mean 110, median 95, maximum 254 (`/case-study/castle-in-the-sand-hotel/`) (`derived/pages.csv` `requests`).
- Third-party hosts per page: median 17, range 17 to 23 (`pages/*.json` `thirdPartyHosts`).
- 16 pages took over 40 seconds to reach network idle in the crawler. 15 of them load YouTube and DoubleClick (computed). Pages with YouTube have a median of 111 requests, against 90 without.

### 9.3 Causes, with evidence

| Cause | Evidence | Pages |
|---|---|---|
| Page weight of 4.1 to 8.0 MB, mostly images | `total-byte-weight`; modern-format savings of 579 to 3,680 KiB; responsive-image savings up to 1,100 KiB (`lighthouse/*.json`) | 6 tested |
| About 1.47 MB of unused JavaScript, identical on every tested page, so it comes from a sitewide bundle | `unused-javascript` "Potential savings of 1,469–1,470 KiB" | 6 tested |
| Two font services: Adobe Typekit (`use.typekit.net`, `p.typekit.net`) and Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`). Lighthouse `font-display` scores 0.5. | `derived/tech.json` `fonts`; `INDEX.md` hosts (Typekit 1,162 + 174 requests) | 157 |
| Google Tag Manager `GTM-NGGH6CL` + GA4 `G-WY4W4ZLGEG`; DoubleClick on 51 pages | `derived/tech.json` `gtm_ids`, `ga_ids`, `third_party_hosts_pages` | 157 |
| accessiBe overlay (`acsbapp.com`, `cdn.acsbapp.com`). The overlay does not fix the markup: across 30 pages axe still found `color-contrast` on 458 nodes, `link-in-text-block` 93, `link-name` 60, `button-name` 18 and `select-name` 16. This matters for the accessibility and ADA comparison. | `derived/tech.json` `accessibe_overlay: true`; `derived/axe-rules-sitewide.md` | 157 (overlay); 30 (axe) |
| AI chat widget (`cdn.apigateway.co` SDK plus `lexicon-prod` and `conversation-prod` endpoints, 2,606 + 318 + 159 requests). On mobile its greeting bubble shows on the first screen. | `derived/tech.json` `chat_or_ai_widget_hosts`; `websites-mobile-fold.jpg`, where the cookie banner, the chat greeting and the accessiBe button cover about the bottom third of the first screen and the "Websites" banner stays visible | 157 |
| YouTube iframes embedded directly (no lightweight facade) | `pages/*.json` `iframes`; `derived/tech.json` `video_embeds_pages: 51` | 51 to 62 |
| reCAPTCHA v3 script on every page, plus `cdn.jsdelivr.net` and jQuery with jquery-migrate | `pages/home.json` `scripts` | 157 |
| DOM size of 1,345 elements on home (Lighthouse score 0) | `lighthouse/home-mobile.json` `dom-size` | home |

Our standard: mobile Lighthouse 95+ on all four scores for every template (PLAN.md 5.2 asks 95+ for performance and 90+ for the rest). LCP under 2.5 s, TBT under 200 ms, CLS under 0.1, page weight under 1 MB, no more than 30 requests, and under 100 KB of CSS plus JS. One self-hosted font family. No overlay. Chat loads only on click. YouTube behind a click-to-load facade. Analytics loaded after interaction or through a server-side tag.

---

## 10. Local SEO on-page

| Signal | D3 | Evidence |
|---|---|---|
| Phone on every page | Yes: 410-213-2400 on 157 of 157 pages, in the footer, as a `tel:` link. The link uses two formats: `tel: +14102132400` (with a space) and `tel:+1-4102132400`. | `derived/pages.csv` `phones`; `pages/home.json` `telLinks` |
| Address on every page | Yes: "12319 Ocean Gateway, Suite 202 Ocean City, Maryland 21842" and "212 West Main Street Salisbury, Maryland 21801" in the footer text of all 157 pages | computed from `pages/*.json` `text`; `pages/home.json` `footer` |
| Address in schema | No. Organization has no `address`. Only the job postings carry a partial PostalAddress. | Section 8.2 |
| Map links | Both addresses link to `goo.gl/maps` short links. Whether those still resolve is not in corpus. | `pages/home.json` `footer` |
| Place schema | 31 pages, all describing client or job locations, not D3's offices | Section 8.3 |
| Location in titles | "Ocean City" in 9 titles, "Salisbury" in 3 (home, `/meet-us/`, a case study), "MD" in 16 (4 service titles use "in MD" without a town) | computed from `derived/pages.csv` `title` |
| Location in H1s | **0 of 12 H1s** name any place | `derived/pages.csv` `h1` |
| Town pages | **None.** No URL, title or H1 targets Berlin, Ocean Pines, West Ocean City, Fenwick, Bethany, Rehoboth, Lewes, Millsboro, Easton, Cambridge, Pocomoke or Snow Hill. The only place-named URLs are video pages, for example `/video/do-it-like-a-local-in-ocean-city-md/` and `/video/sussex-county-from-the-sky/`. | `sitemap-urls.json`; `derived/pages.csv` |
| Geo file | `/locations.kml` is in the sitemap (served as text/xml). Its contents are not in corpus. | `INDEX.md` Redirects and non-HTML |
| Office wording | The footer gives the 21842 address as "Ocean City", while the task brief places that office in West Ocean City. Inferred: the 21842 ZIP covers both, so this does not make their NAP inconsistent on-site. | `pages/home.json` `footer` |

This confirms the recon's opening 7 (`media-masters/PLAN.md` section 2): D3 covers its two office towns only through the homepage, the footer and a few titles, and has no page for anything else.

Our standard: NAP identical on every page and in schema. One canonical `tel:+1...` format. Nine location pages (PLAN.md 5.1), each with a town-named H1, a title of 60 characters or fewer, at least 600 words of local copy, a local proof block naming real clients in that town, an embedded map, an FAQ with FAQPage schema, and `areaServed` naming the town.

---

## 11. Where they are beatable (ranked)

Ranked by likely ranking gain against our effort.

| # | Weakness | Evidence | Effort for us | Our standard |
|---|---|---|---|---|
| 1 | No town pages. No place names in H1s, and service titles aim at "MD". | Sections 3.4, 10; `derived/pages.csv` | Medium: 9 pages of real local copy | Nine location pages and town-named H1s, each owning a "{service} + {town}" cluster |
| 2 | Bare entity data: no LocalBusiness, no address, phone, email or `sameAs` in schema, although the social profiles are linked on every page | Sections 8.2, 6.4; `pages/home.json` | Low: a single JSON-LD template | ProfessionalService schema with full NAP, `sameAs`, `areaServed`, valid in the Rich Results Test |
| 3 | Mobile performance: 38 to 54, LCP 15 to 30 s on 5 of 6 pages, 4 to 8 MB per page, 17+ third-party hosts | Section 9 | Low, because our static stack gives it by default | Lighthouse 95+, LCP under 2.5 s, under 1 MB, at most 30 requests |
| 4 | No H1 on 145 pages; 77 pages with no H1 or H2 | Section 5 | Low | One keyword-bearing H1 per page, checked at build |
| 5 | Dedicated reviews page set to `noindex` but in the sitemap; no Review schema (homepage excerpts are indexable) | Section 2.2 | Low | An indexable reviews page with name, date and source for each review, plus a live Google review feed |
| 6 | Stale, deep and anonymous blog: 31 of 52 posts from 2020, median depth 8, author "D3 Support" | Sections 6.1, 6.4; `derived/blog-posts.csv` | Medium: a weekly article cadence | Weekly local articles, named author with bio, depth of 3 or less, 3 contextual links per post |
| 7 | Broken link equity: 40 legacy URLs redirect to home, and 54 internal links point at them | Sections 2.5, 6.4 | None for them to exploit directly. For us it is a hygiene rule. | Zero internal redirects, and every retired URL mapped 1:1 |
| 8 | Weak case-study SEO: no headings, median 0 body links, 2 orphans, generic YouTube text in VideoObject, no metrics in schema | Sections 5.1, 6.2, 8.4 | Medium: needs real client results | Each case study has an H1, a numeric result, links to the services delivered, and an inlink from each related service and town page |
| 9 | Overlong, cannibalizing service titles (SEO vs AEO, SEO page vs SEO post, websites vs rapid websites) | Sections 3.3, 3.5 | Low | A keyword map with one owner URL per cluster; titles of 60 characters or fewer |
| 10 | Thin indexable pages: 32 videos of about 170 words, plus site-down, webmail, 2FA and similar | Section 2.3 | Low | Thin and utility pages set to `noindex`; every indexable page has at least 300 words or real media |
| 11 | Meta descriptions that are bare URLs or missing (12 pages) | Section 4 | Low | Unique 120 to 155 character descriptions with service and town |
| 12 | No FAQPage anywhere, and AEO is sold without answer-shaped markup | Section 8.1 | Low | 4 to 6 real FAQs with FAQPage schema on every service and town page |

---

## 12. Open questions

1. **What Google actually indexes.** How many d3corp.com URLs are indexed, and are the 32 orphans and the noindexed testimonials page indexed? This needs `site:` checks or Search Console-type data. Not in corpus.
2. **Redirect status codes.** The crawler recorded only the final status. Are the 40 redirects to the homepage 301s or 302s, and does `www` 301 to the apex domain?
3. **LCP element.** Which element makes LCP 15 to 30 s on 5 pages? The Lighthouse extract does not name it. A rerun with the full LCP-element audit would settle this.
4. **Field data.** Real-user Core Web Vitals (CrUX) are not in corpus. The lab figures above may overstate or understate what users experience, and PageSpeed Insights returned HTTP 429 during the crawl.
5. **Sitemap count.** `sitemap-urls.json` holds 150 URLs and the crawler note says 151. Is one URL missing from our extract?
6. **Testimonials history.** The October recon described testimonials as paginated over at least 10 pages (`media-masters/research/00-d3-recon-2026-10-13.md`). The crawl found one page with no pagination links. The recon named Southern Shades, Avery Hall Insurance, Southern Delaware Tourism and Maryland Capital Enterprises (recon line 43); none of those names appears in `pages/testimonials.txt` (searched). So the crawled page is not simply a consolidation of the reviews the recon saw. Was the page rewritten, or did the crawler miss the pagination?
7. **`/locations.kml`.** What locations does it list? It may show which places D3 considers its service area.
8. **Off-page factors.** Backlinks, Google Business Profile completeness, review counts and their actual rankings for "{service} + Ocean City/Salisbury" are all outside this corpus. They belong in the market and local-SEO workstreams.
9. **Map short links.** Do the `goo.gl/maps` footer links still resolve? We need to check without fetching d3corp.com itself.
10. **Hosting.** The recon inferred WP Engine. The headers show only `server: nginx` and images on `website-media.com`, so the host is still unconfirmed.

---

## Verification (2026-11-11)

- Claims checked: 26.
- Supported: 17.
- Wrong: 5 (Facebook link "broken"; 31 posts at depth 7 to 9; four utility pages missing descriptions; Article + Person on all 13 service pages; 34 posts with 4 inlinks).
- Overstated: 3 (reviews hidden from Google; heading-order and image-alt limited to two pages; chat widget covering most of the mobile first screen).
- Unsupported: 1 ("2 of 52 posts link to a service page").
- Correction: the sitewide social links go to D3's real Facebook, Instagram, LinkedIn and YouTube profiles; the facebook.com link is a partner logo; the gap is `sameAs` (Summary 3, 6.4, 8.2, 11 #2).
- Correction: the dedicated testimonials page is noindex, but homepage review excerpts are indexable; no Review schema anywhere (Summary 5 and 10, 2.2, 11 #5).
- Correction: 39 of 52 posts are at depth 7 to 9 (2.2).
- Correction: "2 of 52 posts link to a service page" removed and marked not in corpus (Summary 7, 6.4, 11 #6).
- Correction: five of six utility pages lack a meta description; `/su/` has 986 words and is not thin (2.3).
- Correction: Article + Person on 12 of 13 service pages; `/graphic-design/` has neither (8.1).
- Correction: 42 of 52 blog posts have 4 inlinks (6.3).
- Correction: heading-order fails and image-alt passes on all 6 Lighthouse pages (5.2, 7, 9.1).
- Correction: on mobile the cookie banner and chat greeting cover about the bottom third of the first screen (9.3).
- Added: 45 real redirects (one of the 46 entries is an `/ID3AS/` self-entry) (2.1).
- Added: Lighthouse SEO 0.92 is lost only to `crawlable-anchors`; the other SEO audits pass (9.1).
- Added: axe sitewide counts for color-contrast, link-in-text-block, link-name, button-name and select-name next to the accessiBe overlay (9.3).
- Added: four public d3corp.com emails missing from Organization schema (8.2).
- Added: 2 posts lack `datePublished` and author in JSON-LD and so have empty `date_published` in `derived/blog-posts.csv`; the skeptic's note that all 52 are empty was checked and is incorrect (50 have dates) (8.1).
- Added: none of the four testimonial clients named in the recon appears in `pages/testimonials.txt` (12.6).
