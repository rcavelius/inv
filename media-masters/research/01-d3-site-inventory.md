# D3 Corp: site structure, services and lead capture inventory

**Prepared for:** Media Masters Group LLC · **Written:** 2026-11-11 · **Evidence:** crawl of d3corp.com taken 2026-10-14, stored at `media-masters/research/raw/d3/` (paths below are relative to that folder unless stated).
**Supersedes:** where it differs, this document replaces `research/00-d3-recon-2026-10-13.md`, which was built from search snippets only.

How to read the evidence tags:
- **Measured** means the figure was read directly from a corpus file (for example `pages/home.json` field `forms`, or `derived/pages.csv` column `load_ms`).
- **Inferred** means our reading of measured facts. Each one is labelled as inferred.
- **Not in corpus** means the crawl does not show it. We do not guess.

Quotes from D3's site are kept to one sentence or less.

---

## 1. Summary for the owner

1. **D3's site is large but mostly archive.** It has 157 crawled pages. Of these, 52 are blog posts, 33 are video pages, 29 are case-study pages and only 13 sell services. Measured from the URL patterns in `derived/pages.csv`. Of the 52 posts, 31 are dated 2020 and 3 are dated 2026 (`derived/blog-posts.csv`, `date_published`).
2. **They sell 12 services, each with its own page.** The list is Custom Websites, Rapid Design Websites, SEO, Answer Engine Optimization (AEO), Digital Advertising, Social Media, Email, Graphic Design, Multimedia, Print, Strategy and AI Assistant (Services menu in `pages/home.json` `nav`). AEO, AI Assistant, Rapid Design, Print and Strategy were missing from our October recon or only mentioned in passing there.
3. **Public Relations still has no page.** The homepage hero promises "Content Creation, Strategy & PR" (`pages/home.txt`). "Public Relations" and "Media Relations" also appear as options in the Contact form dropdown (`pages/contact-us.txt`). The recon's opening on PR is confirmed.
4. **They publish no prices.** The only price on any non-blog page is the custom-programming rate in their Terms: "Custom programming is available starting at $195/hr" (`pages/terms.txt`, Exclusions item 12). Other dollar figures, such as the White Marlin Open prize money (`pages/case-study-white-marlin-open.txt`) and figures in blog-index pages (`pages/id3as.txt`, `pages/id3as-page-5.txt`), are not prices. Every service page ends in a quote or contact form.
5. **Their contract terms are heavy.** The Terms set a three-year initial term with automatic one-year renewals. Cancellation needs certified mail 60 to 180 days before the term ends. A client who cancels pays fees for the full term, and late invoices carry 1.5% interest per month, compounded (`pages/terms.txt`, sections 5 and 6). Service Fees are fixed only for the initial term (6e), and Exclusions 15 lets D3 change hourly rates, flat rates and monthly fees "at any time." The Digital Advertising page, by contrast, says "No long-term commitments or contracts necessary" (`pages/digital-advertising.txt`). Clients also lose the use of D3-owned "Systems", such as reservation, email and CMS tools, when they leave (Terms section 7). **This is our biggest positioning opening.**
6. **They have many forms but no consistent way to capture a lead.** We counted 15 distinct forms, including blog search. Seven of them are sales-inquiry forms (plus a newsletter form), and their fields and options disagree with each other. No field on any of the 157 pages carries the HTML `required` attribute (`pages/*.json` `forms`). The main "Request a Quote" form has no service option for advertising, AEO, AI Assistant or multimedia (`pages/request-a-quote.txt`).
7. **The only promise about response time comes from a chatbot.** An AI chat widget sits on every page. Its bubble says "We respond immediately" (screenshots `home-desktop-fold.jpg` and `websites-desktop-fold.jpg`; host `apigateway.co` on 157 pages in `derived/tech.json`). None of the forms, the Contact page or Request a Quote states when a person will reply.
8. **The site is slow on phones.** Lighthouse mobile performance scores run from 38 to 54 out of 100, and page weight from 4.2 to 8.2 MB (`derived/lighthouse-summary.csv`). Every page loads 17 non-apex hosts, of which about 15 are true third parties (two, `d3forms.d3corp.com` and `website-media.com`, are D3's own), including two font services, an accessibility overlay and the chat widget (`derived/tech.json` `third_party_hosts_pages`).
9. **Their proof shows names but few numbers.** Service pages carry 2 to 8 case-study cards each. The only outcome figure on any service page is the Visiting Angels claim that D3's work "doubled the number of caregivers and clients" (`pages/search-engine-optimization.txt`). Some case studies do publish figures: at least 2 of 28 (Primo, Visiting Angels) give percentage or before-and-after numbers (`derived/case-studies.csv` `result_figures`). Their Testimonials page is set to `noindex` (`derived/pages.csv` `robots_meta`), so search engines will not show it.
10. **Company facts check out.** D3 was founded in 1995 by John Gehrig, has "over 40" staff, and has offices at 12319 Ocean Gateway, Suite 202, Ocean City MD 21842 and at 212 West Main Street, Salisbury MD 21801. The phone is 410-213-2400 (`pages/meet-us.txt`; `pages/home.json` `footer`). The Semrush and WP Engine badges from the recon do not appear anywhere on the site (0 matches across `pages/*.txt`). The only memberships shown are logos and links for the Ocean City, Salisbury Area and (inferred from the link target thequietresorts.com) Bethany-Fenwick chambers (`pages/home.json` `externalLinks`).

---

## 2. Site map by page type, navigation and footer

### 2.1 Page counts (157 crawled HTML pages, all returned status 200)

We grouped pages by URL pattern. The `type` column in `derived/pages.csv` misfiles some pages: it calls `/video/meet-us-at-the-border-bar/` and the blog pagination pages "company", and leaves `/strategy/` as "other".

| Group | Count | URLs / notes | Evidence |
|---|---|---|---|
| Home | 1 | `/` | pages.csv |
| Services hub + service pages | 13 | `/services/` plus 12 detail pages (section 3) | pages.csv; home `nav` |
| Service intake (orphan) | 1 | `/ai-assistant-questionnaire/`: 1 inlink, not reachable from home | pages.csv `inlinks`=1, `depth` blank |
| Case studies | 29 | `/case-studies/` hub + 28 `/case-study/*` | derived/case-studies.csv |
| Blog | 62 | 52 `/blog/*` posts; `/ID3AS/` index; `/id3as/page/2–9/` (8 pages, `noindex`); `/blog-search/` | pages.csv; site-issues.md |
| Video | 33 | `/videos/` hub + 32 `/video/*` pages of 139–185 words each | pages.csv `word_count` |
| Company and conversion | 9 | `/meet-us/`, `/testimonials/` (noindex), `/contact-us/`, `/request-a-quote/`, `/careers/`, `/join-our-team/`, `/internships/`, 2 `/career/*` job posts | pages.csv |
| Legal and utility | 9 | `/privacy-policy/`, `/terms/`, `/cookie-policy/`, `/accessibility/`, `/site-map/`, `/webmail/`, `/site-down/`, `/two-factor-authentication-2fa-mobile-number-registration/`, `/su/` | pages.csv |
| **Total** | **157** | | |

Structural facts (measured, from `derived/site-issues.md` and `pages.csv`):
- **Sitemap and index.** `sitemap-urls.json` holds 150 URLs; INDEX.md notes says 151. Nine crawled pages are not in the sitemap: `/ID3AS/` and the 8 blog pagination pages.
- **Unreachable pages.** 32 pages cannot be reached from the home page through crawled links. These are 24 of the 32 video pages, 2 case studies (Delaware Crawl Space, YES Drop-In Center), the cookie policy, internships, site-down, `/su/`, the 2FA page and the AI Assistant questionnaire.
- **Missing H1.** 145 of 157 pages have no H1. The 12 pages that have one are home, the `/services/` hub, `/strategy/` and 9 of the other 11 service pages. `/websites/` and `/ai-assistant/` do not. The `/websites/` banner shows a large "Websites" title (`websites-desktop-fold.jpg`), but the page's H1 field is empty (`pages/websites.json`).
- **Duplicate blog index.** `/id3as/` and `/ID3AS/` both returned 200, and the crawl stored them under one slug (`pages/id3as.json`). Older `/ID3AS/post/...` URLs redirect to the home page rather than to the matching post (INDEX.md, "Redirects"). Example: `/ID3AS/post/Google-Ads` goes to `/`, even though `/blog/google-ads/` exists. Other legacy URLs do the same: `/social-marketing` goes to `/`, and `/post/2024/06/18/ai-lessons-learned/` goes to `/` even though `/blog/ai-lessons-learned/` exists. `/sitemap/` also redirects to the home page, and `locations.kml` is listed in the sitemap (INDEX.md, "Redirects and non-HTML"; `sitemap-urls.json`).
- **Testimonials page signals conflict.** `/testimonials/` is `noindex` yet listed in the sitemap (`derived/pages.csv` `in_sitemap` True) and has no canonical (`canonical_ok` False; `pages/testimonials.json` `canonical` null). One testimonial names a team member, "Jessica" (`pages/testimonials.txt`; inferred to be D3 staff).
- **Site hygiene figures** (`derived/site-issues.md`): 506 of 4,155 images missing alt text (12%); 80 titles over 60 characters (34 over 70); 6 pages missing a meta description, and 1 description shared by 9 pages; 61 pages at depth 3 or more; median word count 633.
- **Undated posts.** 2 of 52 blog posts have no `date_published`: "Google Ads or Meta?" and "Retargeting 101" (`derived/blog-posts.csv`).
- **Recon correction: there is no "Our Work" page.** The recon listed `/our-work`. In the corpus, "Our Work" is a menu label whose links point to `""` and `/` (`pages/home.json` `nav`), and no page links to `/our-work` (0 internal links).
- **Internal pages are public.** The 2FA staff registration page, `/site-down/` (a "requested site is temporarily down" form for hosting clients) and `/webmail/` (Rackspace login help) are all in the sitemap.

### 2.2 Primary navigation (from `pages/home.json` `nav`, the same on all pages)

| Top-level item | Link | Children |
|---|---|---|
| Meet Us | `/meet-us/` | Testimonials |
| Services | `/services/` | AI Assistant · Answer Engine Optimization · Digital Advertising · Email Marketing · Graphic Design · Multimedia · Print · Search Engine Optimization · Social Media Marketing · Strategy · Custom Websites · Rapid Design Websites (12 items, alphabetical except the two website items at the end) |
| Our Work | `""` / `/` (no page of its own) | Case Studies · Videos |
| Blog | `/id3as/` | none |
| Careers | `/careers/` | Join Our Team |
| Contact Us | `/contact-us/` | none |
| REQUEST A QUOTE (button) | `/request-a-quote` (redirects to the trailing-slash URL; INDEX.md) | none. On mobile it is a full-width bar above the logo (`home-mobile-fold.jpg`) |

There is no phone number in the header (screenshots `home-desktop-fold.jpg` and `home-mobile-fold.jpg`). The page also sets `format-detection: telephone=no,email=no,url=no` (`pages/home.json` `metas`), so phones will not turn numbers, email addresses or URLs into tappable links on their own.

### 2.3 Footer (from `pages/home.json` `footer` and `externalLinks`)

| Block | Contents |
|---|---|
| Newsletter | "Subscribe: Get the latest marketing news and advice." First name, last name, email (form `frmD3Forms5112`, on all 157 pages) |
| Locations | 12319 Ocean Gateway, Suite 202, Ocean City MD 21842 (goo.gl map link) · 212 West Main Street, Salisbury MD 21801 (goo.gl map link) · 410-213-2400 (`tel:+1-4102132400`) |
| Links (13) | Meet Us · Testimonials · Services · Case Studies · Videos · ID3AS Blog · Careers · Contact Us · Privacy Policy · Terms & Conditions · Webmail · Accessibility · Site Map |
| Social (icon-only links, no text) | facebook.com/D3DoesIt · linkedin.com/company/d3corp · youtube.com/c/D3CorpOceanCity · instagram.com/d3corp |
| Chambers (logo links) | oceancity.org · salisburyarea.com · thequietresorts.com. Only the first has alt text ("Ocean City chamber logo"). The other two logo images have empty alt (`images`) |
| "Our Partners" carousel | Google, YouTube, Shopify, Amazon (the image alt text says "AWS logo"), Adobe, WooCommerce, WordPress, Bing, Facebook. Each links to the vendor's home page, for example `https://www.facebook.com/` |
| Credit | "Copyright © 2026 D3." · "Website Design by D3, Ocean City MD" · link to visitoceancity.com |

---

## 3. Services table

Word counts come from `derived/pages.csv` and are whole-page counts, which include repeated case-study cards and form labels. "Proof" lists the case-study cards on each page (`pages/<slug>.txt`). None of the service pages has an FAQ section, a pricing block or a team member's name.

| Service page | H1 | Words | The promise, in one sentence | Process described? | Deliverables named | Proof shown | Pricing signals | Primary CTA (text → destination) |
|---|---|---|---|---|---|---|---|---|
| `/services/` (hub) | End-to-End Digital Marketing Services | 567 | D3 builds a tailored marketing plan "across both digital and traditional channels." | No | Lists 9 services. AEO, AI Assistant and Rapid Design are missing from the list | 2 cards: Our Harvest, Salisbury Area Chamber. The Our Harvest card describes Liquid Assets | None | No lead form, only the newsletter (forms=1). Nav "REQUEST A QUOTE" → `/request-a-quote` |
| `/websites/` | none (h1_count 0) | 1,072 | Websites that are "visually engaging but also easy to navigate, strategically structured, and optimized for your goals." | No | WordPress sites; custom design and build; e-commerce with product search, promotions, discount tools, email integration and cart recovery | 6 cards: Old Pro Golf, Seacrets, Chesapeake Country Byway, High Stakes, Chesapeake Health Care, Jolly Roger. No metrics | None on page. Terms: "$195/hr" custom programming; content creation "not included but may be provided for an additional fee" | "SUBMIT" on form 5650 ("Turn Your Website Into a Growth Engine With D3") |
| `/rapid-design-websites/` | Launch Sites Quickly with D3's Rapid Web Design Service | 765 | "We're talking days, not months." | No. Five benefits, no steps | Template-based site built "from proven best practices and frameworks"; easy admin updates; SEO included | 2 cards: Primo Family Restaurant, Zen Spa & Studio Z | "without the price tag of a full custom build" (no figure) | "SUBMIT REQUEST" on form 5656. The form's timeframe choices are "ASAP / 3-6 months / 6-12 months / Not Sure", which contradicts "days" |
| `/search-engine-optimization/` | Expert SEO Services | 839 | "long-term growth with measurable results and a hands-on approach" | No | Keyword research and rankings; content; on- and off-page optimization; "Comprehensive audits for transparency"; "Ongoing reporting and optimization"; AEO and GEO | 5 cards: Visiting Angels ("doubled the number of caregivers and clients"), Boardwalk Hotel Group, Castle in the Sand, Seacrets, Jolly Roger | None on page. Terms: "D3 offers professional SEO and PPC services at an additional charge to Client, if requested." | "SUBMIT" on form 5650 |
| `/answer-engine-optimization/` | Expert AEO Services with D3 | 940 | AI tools will see the business "as real, relevant, and trusted," so it is cited in ChatGPT, Gemini, Perplexity "and more." | Partly. Defines SEO, AEO and GEO; no steps | Content and "digital presence" tuning; three benefit bullets | 5 cards: Boardwalk, Somerset County Tourism, Jolly Roger, Old Pro Golf, Castle in the Sand. None describes AEO work or AI citations | None. Terms item 9: "No one, including D3, can guarantee you placement on Google, Bing, Copilot, Gemini, ChatGPT or any other search/answer engine." | "Contact D3" → `/contact-us/`; "or chat with our AI Assistant"; form 5680 "SUBMIT" |
| `/digital-advertising/` | Digital Ad Services | 977 | Ads that "maximize ROI and deliver measurable results." | No. Ongoing monitoring is described | Google Ads (search, display, shopping, video, Performance Max); Meta; geofencing; programmatic | 5 cards: Castle in the Sand, Old Pro Golf, Primo, Boardwalk, Delaware Elevator. No spend or return figures | None on page. Page says "No long-term commitments or contracts necessary" and "full ownership of ad accounts and content." Terms: PPC is "at an additional charge" | "Work with D3" → `/contact-us/`; form 5650 |
| `/social-media-marketing/` | Social Media Marketing & Management Services | 1,424 | "scroll-stopping content that connects, engages, and converts" | No | Custom content; community engagement; account setup and security; "regular updates and insights" | 7 cards: Crabs To Go, Old Pro Golf, Castle in the Sand, Zen Spa, Jolly Roger, Boardwalk, Primo | None. Terms: social marketing is "for an additional charge" | "Contact us" → `/request-a-quote/`; "SUBMIT REQUEST" on form 5657, which reuses website-form fields ("Type of Website", "Timeframe for a New Site") |
| `/email-marketing/` | Email Marketing Services | 838 | Campaigns "that increase open rates, drive clicks, and encourage customer action." | No | Newsletters, drip, A/B testing, promotional blasts; "Full service email hosting, email blast creation, sending, automations, and reporting"; CRM | 6 cards: Primo, Boardwalk, Castle in the Sand, Jolly Roger, Salisbury Chamber, Dolle's Candyland. "Proven Email Results" is a list of outcomes with no numbers | None | "Contact D3" → `/contact-us/`; form 5650 |
| `/graphic-design/` | Creative Graphic Design Services | 938 | Turns "ideas into impactful visuals across all marketing channels." | One line: "we start every project with a solid design system and clear brand standards" | Logo; brand identity and style guide; print; ad creative; email templates; landing-page design; social content | 6 cards: George's Beverage, Old Pro Golf, Seacrets, Burley Oak, Babe Ruth Museum, Jolly Roger | None | Form 5650 "SUBMIT" only. No in-body CTA link (`pages/graphic-design.json` `ctas`) |
| `/multimedia/` | Multimedia Services & Local Production Experts | 1,145 | Custom production that helps you "tell your story, showcase your team, and make your message clear." | No | Video production and editing; photography; drone (licensed); animation and motion graphics; audio and voiceover; custom graphics; "Full media ownership" | 8 cards: Crabs To Go, Zen Spa, Old Pro Golf, Castle in the Sand, Jolly Roger, The Land Group, Boardwalk, Primo. Also the 32-page `/video/` library | None on page. Terms: photos and videos are "available at an additional charge if requested by Client"; D3 "does not provide video hosting" | Form 5650 "SUBMIT" |
| `/print/` | Print Marketing Services | 657 | Print that complements digital efforts at "competitive prices." | No | Business cards, brochures and flyers, rack cards, stationery, labels, magazines and booklets, direct mail, banners and yard signs, trade-show materials | 3 cards: Old Pro Golf, Jolly Roger, Dolle's | "competitive pricing"; "Fast turnaround and reliable delivery" (no figures). Terms: printing is "at an additional cost to Client" | "Contact D3" → `/contact-us/`; form 5650 |
| `/strategy/` | Digital Strategy Experts | 951 | A plan that defines "objectives, audiences, and goals that can be measured for success." | Partly. Five components, not in sequence | Market research; brand positioning; channel planning; content strategy; analytics and optimization | 7 cards: White Marlin Open, Boardwalk, Jolly Roger, Castle in the Sand, Visiting Angels, Old Pro Golf, Zen Spa | None | Form 5650 "SUBMIT" |
| `/ai-assistant/` | none (h1_count 0) | 641 | "Engage visitors 24/7, answer questions instantly, and boost conversions with your AI Assistant" (H2) | **Yes, 3 steps** under "Simple, Smart, Ready in Minutes": install, customize with brand and FAQs, "watch as it learns" | Website chat assistant that answers from site content; insight into what visitors ask | 2 cards: Boardwalk, The Land Group. Neither card mentions an AI assistant | None | Form 5681 "SUBMIT" (12 fields); form 5650 |

**Patterns across all 13 pages (measured):**
- **Same closing block.** Every detail page except `/services/` ends with the same 7-visible-field form, 5650, under a page-specific heading that follows the pattern "...With D3's ... Services".
- **No owners named.** No page names the person who would run the work. **No timelines,** apart from "days, not months" on Rapid Design. **No deliverable counts,** such as posts per month or report frequency.
- **No outcome numbers on service pages,** apart from the Visiting Angels claim (the only other figure is a "40% of websites worldwide" WordPress statistic on `/websites/`). Case studies are different: at least 2 of 28 publish figures (Primo, about 40% of visitors captured as leads; Visiting Angels, caregivers and clients "from 100 to 200" and a 70% increase in website users; `derived/case-studies.csv` `result_figures`). **No FAQ blocks.**
- **Schema.** The `Service` type appears in JSON-LD on 8 pages: websites, social, SEO, print, multimedia, email, digital advertising and graphic design (INDEX.md, JSON-LD column). It is absent on AEO, AI Assistant, Rapid Design, Strategy and the hub.
- **Hidden catalog in the Contact form.** The `service` dropdown on `/contact-us/` lists 40 services. At least 12, and up to about 20, have no dedicated page. These 12 clearly have none: Booking Engines, Reservations, Group Housing, Live Web Cams, Wifi Marketing, Citation Management, CRM, Hosting and Maintenance, Mobile App, Public Relations, Reputation Management and Destination Marketing. Others with no dedicated page and no obvious parent page include Media Relations, Community Relations, Customer Support, Email Hosting, Lead Management, Metrics and Tracking, Onsite, Content Writing and Copy Writing (`pages/contact-us.txt`). Inferred: D3 sells more, especially hospitality systems and hosting, than its menu shows. `/webmail/` (Rackspace email support) and `/site-down/` (hosting-client outage form) fit that reading.

### 3.1 Pricing and contract signals from `/terms/` (5,182 words, read in full)

| Clause | Short quote or paraphrase | What it means for a buyer |
|---|---|---|
| 5a Term | "three (3) years commencing on the Activation Date." Auto-renews for 1-year terms unless certified-mail notice is sent 60–180 days before the end | Long lock-in with a narrow exit window |
| 5c Early cancellation | "normal rates will apply from inception of the project." The client repays any discounts; "No refunds will be provided." D3 keeps deposits and bills for work done | Discounts are clawed back if you leave |
| 5d Termination | The client must "pay to D3 the full amount of the fees for the entirety of the Service Term." | Leaving early costs the whole contract |
| 6a Setup Fee | The Setup Fee "will be due in full on the Effective Date" unless otherwise agreed | Full setup cost paid before work starts |
| 6b Billing | Service fees are "due in advance"; usage fees are billed monthly in arrears; payment is by ACH or card with standing authorization | Card or bank on file |
| 6c Disputes and late fees | An invoice not disputed within 30 days is deemed accepted; late interest is "one and one half percent (1.5%) per month, compounded monthly" | Strict terms that favor the vendor |
| 6e Increases | Service Fees "will remain constant for the duration of the initial contract period" but "are subject to increase upon each contract renewal"; "All fees are non-refundable." | Service Fees fixed only for the initial term; see Exclusions 15 |
| Exclusions 15 Hourly Rates / Monthly Fees | Ongoing hourly rates, flat rates and monthly fees "are subject to review and change at D3's discretion, at any time." | Weaker price protection than 6e suggests, even within years 1–3 |
| 7 Ownership | The client owns the website and content, but "Systems", which include CMS, reservation and email systems, "remain the exclusive property of D3" | Inferred: switching cost for clients on D3 systems |
| 13 Non-solicit | The client may not hire D3 staff during the term "and for a period of one (1) year thereafter" | Standard but restrictive |
| Exclusions 1, 2, 4, 6, 7, 8, 10, 12, 13 | Content writing, photo and video, printing, social, PPC, domain, e-commerce, custom programming ("starting at $195/hr") and plug-ins are all extra | The base website quote is narrow; extras are quoted later |
| Exclusions 14 and Compliance disclaimer | D3 "is not responsible for maintaining ANY compliance-related items," and the list includes ADA and WCAG; overlays are provided "as is" | D3 sells accessibility via an overlay but disclaims the outcome |
| 19 SMS | The SMS terms cover only staff 2FA codes | Not relevant to clients |

---

## 4. New or notable offerings compared with the October recon

| Offering | Recon (2026-10-13) said | Corpus (2026-10-14) shows | What it actually promises | Evidence |
|---|---|---|---|---|
| Answer Engine Optimization | AI and GEO were mentioned inside the SEO page | A dedicated page in the Services menu with an H1, an 11-visible-field form and title "Expert AEO (AI Search) Agency Services" | Being "cited as an answer" in ChatGPT, Gemini and Perplexity, through structured content, consistent business information, reviews and quality content. No method steps, no measurement (such as tracked prompts or citation counts), no AEO case study, no price. Their own Terms say no placement can be guaranteed | `pages/answer-engine-optimization.txt`; `pages/terms.txt` Exclusions 9 |
| AI Assistant | Not seen | A Services menu page, a client onboarding questionnaire (orphan), and a live chat widget on all 157 pages | A website chatbot that answers "directly from your website," captures leads and reports what visitors ask, set up in "minutes." The questionnaire asks for an assistant name, FAQs, lead email, booking tools and file uploads ("Max upload size: 100 MB"), and calls the product an "AI Receptionist." No price and no case study about the assistant | `pages/ai-assistant.txt`; `pages/ai-assistant-questionnaire.txt`; `derived/tech.json` `chat_or_ai_widget_hosts`; `home-desktop-fold.jpg` |
| Rapid Design Websites | Not seen | A Services menu page with its own 14-field intake form | A cheaper, faster, template-based site with SEO included and easy updates, "days, not months." No price, page count or launch-time figure, and the form's own timeframe options run to "6-12 months" | `pages/rapid-design-websites.txt`, `pages/rapid-design-websites.json` `forms` |
| Multimedia | Video, photo and drone | Confirmed, and extended to animation and motion graphics, audio and voiceover, and "Full media ownership." A 32-page video portfolio supports it | Licensed drone pilots and on-site shoots. The Terms exclude video hosting and require YouTube | `pages/multimedia.txt`; 32 `/video/*` pages; Terms Exclusions 5 |
| Print | Only listed on the services hub | Has its own page now, `/print/` | Nine product types at "competitive prices" through partner printers, with in-house design. No price list | `pages/print.txt` |
| Strategy (also new) | Not seen | A Services menu page | A five-part strategy service; no deliverable such as a written plan or workshop is named | `pages/strategy.txt` |
| Public Relations | Mentioned on the homepage, no page | Still no page. Mentioned in the home hero and in the Contact dropdown; blog posts on PR and crisis communication exist | Not offered as a defined service | `pages/home.txt`; `pages/contact-us.txt` |

---

## 5. Lead capture

### 5.1 Every form (from `pages/*.json` `forms`; no field anywhere has `required: true`)

| Form ID | Where it appears | Fields (in order) | Shown as required (asterisk in placeholder) | Submit and action |
|---|---|---|---|---|
| `frmD3Forms5112` newsletter | All 157 pages | first_name, last_name, email | None | "SUBSCRIBE"; POST to a script-bound action (`action: "ref: <Node>"`). Inferred: handled by the custom `d3forms` plugin, with reCAPTCHA loaded from `d3forms.d3corp.com/d3fst/recaptcha.js` |
| `frmD3Forms5650` short service lead | Home + 12 service and strategy pages (13) | first_name, last_name, company_name, phone, email, how_did_you_hear_about_d3 (select: Google Search, Social Media, Word of Mouth, Referral, Event or Trade Show, Walk-In / Drove By, Print Advertisement, Email Newsletter, From Another Business, Existing Client), i_m_interested_in_the_following_services (free text) | First, last, company, phone, email and services (asterisks in placeholders) | "SUBMIT"; same script-bound POST |
| `frmD3Forms5375` contact | `/contact-us/` | first_name, last_name, email, service (select, 40 options), comments | None marked | "SUBMIT". No phone field |
| `frmD3Forms748` quote | `/request-a-quote/` | company_name, contact_person, position_title, city, state, phone, email, preferred_method_contact (By Email / By Phone), current_website, timeframe (0-3 / 4-8 / 8+ Months / Not Certain), how_discover (5 radios, including "Radio / TV / Website Ad"), comments, service (Mobile, SEO, E-Commerce, Email Marketing, Print Design, Design & Development, Social Marketing) | None marked | "SUBMIT". 13 questions. No option for Digital Advertising, AEO, AI Assistant, Multimedia or Strategy |
| `frmD3Forms5656` rapid site | `/rapid-design-websites/` | company_name, contact_person, position_title, city, state, phone, email, preferred_method_of_contact, current_website_url, type_of_website (Corporate / Portfolio / Landing Page / E-commerce), what_is_your_timeframe_for_a_new_site, how_did_you_discover_d3, comments | None marked | "SUBMIT REQUEST" |
| `frmD3Forms5657` social | `/social-media-marketing/` | Same 13 fields as 5656, including website type and "Timeframe for a New Site" | None marked | "SUBMIT REQUEST" |
| `frmD3Forms5680` AEO | `/answer-engine-optimization/` | company_name, contact_person, position_title, city, state, phone, email, preferred_method_of_contact, current_website_url, how_did_you_discover_d3, comments | None marked | "SUBMIT" |
| `frmD3Forms5681` AI Assistant | `/ai-assistant/` | Same 11 as 5680 (uses `company` instead of `company_name`) | None marked | "SUBMIT" |
| (no id) AI questionnaire | `/ai-assistant-questionnaire/` | 11 unnamed inputs: business name, website, lead email, assistant name, icon file, FAQs, third-party URLs, lead and booking tools, instructions, extra info, knowledge file | 5 marked "*" in visible text | GET to the same page. Field `name` attributes are empty. Inferred: it is submitted by script, or it may not submit at all; we cannot test this (not in corpus) |
| `frmD3Forms5652` SU intake | `/su/` (orphan) | 236 fields: a brand-audit checklist covering website, social and listings | n/a | Inferred: an intake for Salisbury University entrepreneurs ("SU Entrepreneur Intake Form") |
| `frmD3Forms5337` job application | `/join-our-team/` | name, phone, email, about, department (Design, Development, IT, Marketing, Programming, Project Management, Reservations), resume upload | n/a | Recruiting |
| `frmD3Forms5673` internship | `/internships/` | 12 fields + resume upload | n/a | Recruiting |
| `frmD3Forms3338` site down | `/site-down/` | firstname, lastname, email, site, comments | n/a | Support for hosting clients |
| (no id) 2FA | `/two-factor-authentication-.../` | 9 unnamed fields | n/a | Staff page that is publicly indexed |

What these forms add up to:
- **There is no single "start here" path.** A visitor can meet any of 7 different inquiry forms (plus the newsletter form), and they do not agree on the questions they ask. Timeframe options alone come in three versions: "ASAP / 3-6 / 6-12", "0-3 / 4-8 / 8+" and none at all. Service lists come in three versions: 40 options, 7 options and free text.
- **Required fields are not enforced in HTML.** Placeholders show "*" but no field carries `required` (all 241 script-bound form instances). Inferred: validation, if any, is done in JavaScript.
- **Accessibility errors on lead forms.** axe reports `select-name` (critical) on every audited page that carries the 5650 lead form (home and 7 service pages): 1 node on most pages and 5 on rapid-design and social. The `/services/` hub, which has no 5650 form, has no `select-name` error. `button-name` (critical, 2 nodes) appears on the audited service pages, the `/services/` hub and the home page (`derived/axe-summary.csv`). Screen-reader users get an unlabeled dropdown in the lead form.
- **Every form uses invisible reCAPTCHA v3** (the `recaptcha/api.js?render=` script and iframe in `pages/home.json`). Visitors see no challenge.

### 5.2 Phone, tel links and email

| Item | Value | Where | Notes |
|---|---|---|---|
| Phone | 410-213-2400 | All 157 pages (`derived/tech.json` `phones_seen`) | The only phone number on the site. No separate Salisbury number, no SMS number |
| tel link | `tel:+1-4102132400` | 157 pages, footer | Valid |
| tel link | `tel: +14102132400` | 13 pages (in the form-5650 intro line) | Has a space after `tel:`. Inferred: some dialers may reject it |
| tel link | `tel:+1-410‑213‑2400` | `/meet-us/` | Uses non-breaking hyphens (U+2011). Inferred: may not dial on some devices |
| tel link | `tel:+1-410-213-2400` | `/accessibility/` (`pages/accessibility.json`) | A fourth format. Valid |
| Email | emergency@d3corp.com | `/contact-us/` | "For urgent support after hours." This is for existing clients |
| Email | support@d3corp.com | `/terms/`, `/privacy-policy/` | Legal and SMS contact |
| Email | clientservices@d3corp.com | `/accessibility/`, `/webmail/` | Email-hosting support |
| Email | marketing@ (3 posts), solutions@ (2 posts), **solultions@d3corp.com** (typo, `blog/why-your-business-needs-email-marketing`) | Blog | The typo address is likely dead (inferred) |
| Email | edits@siteupdates.com | `blog/understanding-your-web-site-stats`, `id3as/page/8` | An address on another domain. Purpose not in corpus |

No email address for new business appears on the Contact or Request a Quote pages.

### 5.3 Chat and AI assistant widget

- **Where it loads.** The script is `https://cdn.apigateway.co/webchat-client..prod/sdk.js` (`pages/home.json` `scripts`). It also calls `lexicon-prod.apigateway.co` and `conversation-prod.apigateway.co`. All three hosts load on all 157 pages, with 2,606 + 318 + 159 requests across the crawl (INDEX.md, third-party hosts).
- **What visitors see.** A robot avatar bubble saying "Hi, how can we help you today?" and "We respond immediately," with a "Type here..." box. It opens over the content at desktop width and covers part of the "VIEW ALL SERVICES" button (`home-desktop-fold.jpg`). On mobile it covers the lower part of the first screen, together with the cookie banner (`home-mobile-fold.jpg`).
- **Vendor (inferred, not in corpus).** We believe `apigateway.co` belongs to a white-label agency platform that sells an "AI Receptionist" product, a term D3's questionnaire also uses. Inferred: D3 resells that platform's chatbot, not one it built. Verify before saying so in public.

### 5.4 Quote request flow (measured from nav, CTAs and forms)

1. A visitor clicks "REQUEST A QUOTE" (nav button on every page) and is sent to `/request-a-quote`, which redirects to `/request-a-quote/` (INDEX.md).
2. The page shows the heading "Ready to start your project?" and a 13-question form (`frmD3Forms748`) with dated options ("Mobile", "Radio / TV / Website Ad").
3. The visitor clicks SUBMIT. What happens next is not in corpus: no thank-you page, confirmation text or next-step promise was crawled.

There is no calendar booking, no price estimator and no "what happens next" text. Other paths lead to different forms: service-page CTAs go to `/contact-us/` (5-field form), and "Contact us" on the social page goes to `/request-a-quote/`.

### 5.5 Response-time promises

| Source | Promise |
|---|---|
| Chat widget | "We respond immediately" (screenshot) |
| `/ai-assistant/` | Answers visitor questions "24/7" (for clients' sites) |
| `/print/` | "Fast turnaround and reliable delivery" (no figure) |
| Contact, Request a Quote and form 5650 | None. Contact says only that D3 will "connect you with the right D3 expert" |
| Testimonials | Clients describe them as "very responsive" (home testimonials; client wording, not a promise) |

---

## 6. Company facts as stated on the site

| Fact | As stated | Source |
|---|---|---|
| Founded | 1995 by John Gehrig in Ocean City, MD, "from a two‑person startup" | `pages/meet-us.txt` |
| Team | "a team of over 40 dedicated professionals across Ocean City and Salisbury, MD" | `pages/meet-us.txt` |
| Years | "30 years serving businesses" (meet-us); "30+ years of experience" (rapid-design); logo file `cropped-D3-Logo-30years-website` | `pages/meet-us.txt`, `pages/rapid-design-websites.txt`, `pages/home.json` `images` |
| Offices | 12319 Ocean Gateway, Suite 202, Ocean City, MD 21842 · 212 West Main Street, Salisbury, MD 21801 | Footer on all pages |
| Hiring | "We only hire team members in person at our Ocean City, Maryland office." Two openings: Digital Marketing Specialist, Client Success Manager | `pages/careers.txt` |
| Values | "kindness, collaboration, and personal service" | `pages/meet-us.txt` |
| Team page | No names except the founder's, no photos, no bios. 24 images, all logos or decoration. No H1 | `pages/meet-us.json` `images`, `h1` |
| Awards | No named award. "award-winning" appears only in a job post's "About Us" and in the PDE case study ("after seeing our award-winning work") | `pages/career-client-success-manager.txt`, `pages/case-study-partnership-for-the-delaware-estuary.txt` |
| Partner badges | No certified-partner badge. The "Our Partners" carousel shows platform logos (Google, YouTube, Shopify, Amazon/AWS, Adobe, WooCommerce, WordPress, Bing, Facebook) that link to the vendors' home pages. The image alt text says "Google partner logo" and "Facebook Partner Logo." **Semrush and WP Engine: 0 mentions on the site** (the recon found these on third-party directories only) | `pages/home.json` `images`, `externalLinks`; grep across `pages/*.txt` |
| Memberships | Logo links to the Ocean City chamber (oceancity.org), Salisbury Area Chamber (salisburyarea.com) and Bethany-Fenwick "Quiet Resorts" (thequietresorts.com). Inferred from link targets: chamber memberships | `pages/home.json` `externalLinks` |
| Home proof | 20 case-study slides and 16 named client testimonials in a carousel (16 unique `h3` names before the loop repeats) | `pages/home.json` `h3`; `pages/home.txt` |
| Social | Facebook /D3DoesIt, LinkedIn /company/d3corp, YouTube /c/D3CorpOceanCity, Instagram /d3corp | `pages/home.json` `externalLinks` |
| Organization schema | Only name, URL and logo. No address, telephone, `sameAs` or founding date | `pages/home.json` `jsonld` |

---

## 7. Technology stack

| Component | Evidence (measured) | What it implies for speed and maintenance |
|---|---|---|
| WordPress 7.1.2 | `derived/tech.json` `generator`; meta `generator` on home; paths `/wp/wp-includes/` and `/app/plugins/`, `/app/themes/d3-corp-template/` | Inferred: a Bedrock-style WordPress layout with a custom theme. Core, theme and plugins all need regular patching. The version number is publicly visible |
| nginx | `server: nginx` header | Hosting provider is not identified in the corpus. The recon's "WP Engine" guess is **not confirmed** |
| Page caching | HTML response has `etag` and `last-modified` (Tue, 13 Oct 2026 23:32 GMT); root document in 60–100 ms (`derived/lighthouse-summary.csv` `server_response`) | Inferred: full-page cache. The server is fast and the slowness happens in the browser |
| Security headers | Home headers include only `referrer-policy`. No HSTS, CSP or X-Frame-Options (`pages/home.json` `headers`) | Basic hardening is missing |
| Google Tag Manager `GTM-NGGH6CL` + GA4 `G-WY4W4ZLGEG` | `derived/tech.json` `gtm_ids`, `ga_ids`; `gtag/js` and `gtm.js` on every page; GTM4WP plugin 2.0.5 loads YouTube, Vimeo and SoundCloud trackers on every page | Standard analytics. The media trackers add script on pages with no media |
| Google Ads tags | `googleads.g.doubleclick.net` and `static.doubleclick.net` on 51 pages | Matches the 51 pages with YouTube embeds (`video_embeds_pages`: 51). Inferred: these come from YouTube embeds, not a D3 ad pixel |
| accessiBe overlay | `acsbapp.com/apps/app/dist/js/app.js` and `cdn.acsbapp.com` on 157 pages; `accessibe_overlay: true` | Adds a third-party script to every page. The overlay has not cleared the audits: axe still finds 458 color-contrast nodes, 18 `button-name` and 16 `select-name` critical nodes across 30 pages (`derived/axe-rules-sitewide.md`). Their Terms disclaim WCAG and ADA compliance |
| Fonts: Adobe Typekit + Google Fonts | `use.typekit.net`, `p.typekit.net`, `fonts.googleapis.com`, `fonts.gstatic.com` on 157 pages; Typekit 1,162 requests | Two font services mean extra connections and render-blocking CSS. Font families are not in corpus |
| YouTube embeds | `www.youtube.com` on 62 pages, `i.ytimg.com` and `jnn-pa.googleapis.com` on 51 | Full YouTube iframes rather than click-to-load previews. 16 pages show a runner load time of about 46 s (`derived/pages.csv` `load_ms` 45,821–46,504). Inferred: embeds kept the network busy until the crawler timed out. This is a runner metric, not a field measure |
| Forms subdomain `d3forms.d3corp.com` | `recaptcha.js?ver=7.1.2` on 157 pages; plugin `d3forms` with jQuery file upload and iframe transport | A custom, in-house forms system. Inferred: maintenance falls on D3 alone, and it is likely why form designs drifted apart (section 5.1) |
| jsDelivr | `cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.bundle.min.js` and the theme's own `bootstrap.bundle.min.js?ver=4.3.1` | **Bootstrap 4.3.1 JS loads twice.** Bootstrap 4.3.1 dates from 2019 (inferred from the version number) |
| jQuery stack | jQuery 3.7.1 + migrate 3.4.1, jQuery UI core and datepicker 1.14.2, slick 1.8.1, fancybox 3.5.2, lazyload 12.4.0, matchHeight 0.7.2 | Heavy legacy JavaScript. Lighthouse flags about 1,470 KiB of unused JS on every audited page |
| Cookie consent | `wpconsent-premium` plugin; banner with Preferences, Reject and Accept All (`home-desktop-fold.jpg`) | Banner appears on first load and covers part of the mobile first screen |
| Media host | `website-media.com` on 157 pages, 3,054 requests; image paths `/d3corp/d3-website-2025/...` | Inferred: offloaded media storage or CDN. The "d3-website-2025" path suggests the current design launched in 2025; the home page `datePublished` is 2025-07-22 |
| Chat | `cdn.apigateway.co`, `lexicon-prod.apigateway.co`, `conversation-prod.apigateway.co` on 157 pages | The third-party widget adds 3 hosts to every page |
| Google user content | `lh3.googleusercontent.com` on 157 pages | Purpose not in corpus. Inferred: avatar or review images |
| Email hosting | `/webmail/` gives Rackspace login help | D3 resells Rackspace email to clients |

Net speed (measured, mobile Lighthouse, 6 pages): performance 0.38–0.54; LCP 3.6 s on home and 15.1–30.3 s elsewhere; Total Blocking Time 1,000–2,050 ms; page weight 4,215–8,166 KiB; third-party code blocked the main thread for 1,290–1,730 ms (`derived/lighthouse-summary.csv`). Crawl averages were 110 requests per page and 6,447 ms load (`derived/site-issues.md`). The other Lighthouse scores on the same 6 pages: accessibility 0.77–0.84 despite the accessiBe overlay, best practices 0.75–0.79, SEO 0.92 on all 6 (`derived/lighthouse-summary.csv`).

---

## 8. Gaps and weaknesses (each with Our standard)

| # | Weakness | Evidence | Our standard |
|---|---|---|---|
| 1 | No published prices. The only price is $195/hr, buried in Terms, and Exclusions 15 lets D3 change rates at any time | `pages/terms.txt` Exclusions 12; no `$` on any service page | **Our standard:** every service page shows a "starting at" price and three packages, and a `/pricing/` page lists them all. The page is linked from the main nav and from every service page |
| 2 | Three-year auto-renewing contract, full-term payout on exit, 1.5%/month compounded late interest. The ads page claims no long-term contracts | `pages/terms.txt` §5–6; `pages/digital-advertising.txt` | **Our standard:** month-to-month service agreements with 30-day cancellation by email; project work billed by milestone; no early-termination fee. The terms are published in plain English and are under 1,500 words |
| 3 | Clients lose D3-owned "Systems" (CMS, reservations, email tools) when they leave | `pages/terms.txt` §7 | **Our standard:** the client owns the domain, site code, content, ad accounts, analytics and social accounts from day one, stated on every service page. We provide a full export within 5 business days of any request |
| 4 | Seven different inquiry forms (plus a newsletter form) with conflicting questions; no field is required in HTML; the quote form leaves out 5 of their own services | `pages/*.json` `forms`; `pages/request-a-quote.txt` | **Our standard:** one lead form component used site-wide, with at most 5 fields (name, email or phone, service, message, preferred contact). Required fields use the HTML `required` attribute, and the service list comes from the same source as the nav |
| 5 | No human response-time promise; only a bot says "We respond immediately" | Screenshots `home-desktop-fold.jpg`; `pages/contact-us.txt` | **Our standard:** "A person replies the same business day," printed next to every form and on the confirmation screen, and measured monthly. Target: 95% of inquiries answered in under 4 business hours |
| 6 | No booking path or "what happens next" after a quote request | Section 5.4; no thank-you page in corpus | **Our standard:** a live calendar booking link (15-minute call) on Contact and every service page. The confirmation page lists the next 3 steps with times |
| 7 | Lead-form accessibility errors (`select-name` and `button-name` critical) despite an accessibility overlay | `derived/axe-summary.csv`; `derived/axe-rules-sitewide.md` | **Our standard:** zero axe critical or serious violations on every page before launch, with WCAG 2.2 AA tested by keyboard and screen reader. No overlay script, and an accessibility statement with a contact |
| 8 | Slow mobile pages: performance 38–54, LCP up to 30.3 s, 4.2–8.2 MB pages, about 15 third-party hosts on every page; accessibility 0.77–0.84 | `derived/lighthouse-summary.csv`; `derived/tech.json` | **Our standard:** Lighthouse mobile at least 95 for performance and at least 90 on the other three scores for every page; LCP under 2.0 s; under 1 MB per page; under 100 KB of CSS+JS; self-hosted fonts from one family; YouTube loaded only on click |
| 9 | Few numbers in proof: only one outcome claim on any service page, and only some case studies (at least Primo and Visiting Angels of 28) publish figures; no AEO or AI case study on those pages | Section 3 "Proof" column; `derived/case-studies.csv` `result_figures` | **Our standard:** every case study has at least 2 before-and-after numbers with a date range and a named client quote. Each service page shows at least 1 result relevant to that service |
| 10 | No H1 on 145 of 157 pages, including `/websites/`, `/ai-assistant/` and `/meet-us/` | `derived/site-issues.md` | **Our standard:** exactly one H1 on every page, with the service or town in it, checked automatically at build |
| 11 | Testimonials page set to `noindex`, yet listed in the sitemap with no canonical | `derived/pages.csv` `robots_meta`, `in_sitemap`, `canonical_ok` for `/testimonials/` | **Our standard:** reviews page indexable; reviews shown with the reviewer's name, date and source link; review schema only where Google allows it |
| 12 | Team page names no one but the founder; no photos or bios | `pages/meet-us.json` | **Our standard:** named owner and account leads with photo, role, bio and LinkedIn on About and on each service page ("who you'll work with") |
| 13 | PR and 11 others named in section 3 (and up to about 20 of the 40 Contact dropdown options) have no dedicated page | `pages/contact-us.txt`; `pages/home.txt` | **Our standard:** a page for every service we sell, including Public Relations, Reputation Management and Hosting & Care Plans, each at least 800 words of original copy with an FAQ of 4–6 questions |
| 14 | AEO page promises AI citations but shows no method, measurement or result | `pages/answer-engine-optimization.txt` | **Our standard:** the AEO page publishes our method in steps, a monthly 20-prompt tracking sheet with an example, and our own citation results once we have them |
| 15 | Two different "Rapid" promises: "days, not months" on the page, "6-12 months" on its form | `pages/rapid-design-websites.txt` and `.json` | **Our standard:** a starter-site package with a stated page count, a fixed price and a written launch window, such as 10 business days, repeated identically on the page, form and contract |
| 16 | Weak entity data: Organization schema has no address, phone or `sameAs`; there is no `LocalBusiness` | `pages/home.json` `jsonld` | **Our standard:** `ProfessionalService` and `LocalBusiness` schema with name, address, phone, hours, geo, `sameAs` (all profiles) and `areaServed`, valid in validator.schema.org |
| 17 | Messy public site: staff 2FA page, site-down form, 2 orphan intake forms, a duplicate `/ID3AS/` index, old `/ID3AS/post/*`, `/social-marketing`, `/post/2024/...` and `/sitemap/` URLs redirecting to home, 506 images without alt, 2 undated posts, and a typo email in a post | Sections 2.1 and 5.2; INDEX.md redirects; `derived/site-issues.md` | **Our standard:** a sitemap with only public, indexable pages; zero 404s and zero redirects to the home page in a monthly crawl; each old URL redirects to its matching page |
| 18 | No phone number in the header, and `format-detection: telephone=no` | Screenshots; `pages/home.json` `metas` | **Our standard:** a click-to-call phone number in the header at every width, plus SMS, with a valid `tel:` link in E.164 format |
| 19 | Old WordPress JS stack with Bootstrap loaded twice, plus a custom forms plugin | `pages/home.json` `scripts` | **Our standard:** a static, pre-rendered site (PLAN.md §5.3) with no runtime CMS to patch. Forms are handled by one serverless endpoint with spam protection that runs no third-party script until the visitor starts typing |
| 20 | No security headers | `pages/home.json` `headers` | **Our standard:** HSTS, CSP, X-Content-Type-Options, Referrer-Policy and Permissions-Policy on every response, with an A grade on a public header scan |

---

## 9. Open questions

1. **Thank-you step.** What happens after a form is submitted: is there a thank-you page, an autoresponder, or a stated reply time? Not in corpus. It needs a manual test submission or a mystery-shopper inquiry.
2. **Chat vendor.** Who supplies the chat and AI Assistant, and what does D3 charge for it? We infer a white-label platform from `apigateway.co`. Pricing is not in corpus.
3. **Recurring revenue.** What do D3's hosting, email (Rackspace) and "Systems" lines earn, and how many clients are on three-year terms? That decides how hard it is for their clients to switch. Not in corpus.
4. **Hosting provider.** Which host serves the site? The headers show only nginx; the recon's WP Engine guess is unconfirmed.
5. **Questionnaire forms.** Do the AI questionnaire and 2FA forms actually submit, given their unnamed fields and GET method? Not testable from the corpus.
6. **Third-party directory badges.** Are the Semrush Agency Partner and WP Engine listings from the recon still live? They are not on D3's own site.
7. **Salisbury office.** Is it staffed with regular hours? The site gives only an address. Careers says hiring happens "in person at our Ocean City, Maryland office."
8. **Hidden services.** Are the 12 Contact-dropdown services without pages, such as Booking Engines, Reservations and Live Web Cams, still sold? They point to a hospitality systems line we have not mapped.
9. **Search-engine view of noindex and orphan pages.** How do Google and Bing currently index the noindexed Testimonials page and the 32 unreachable pages? That belongs in the SEO audit (`02-d3-seo-audit.md`).
10. **Field speed data.** The 46-second runner loads are a crawler measure. Real-user Core Web Vitals (CrUX) are not in corpus, because the PageSpeed API returned HTTP 429 for 6 URLs (INDEX.md "Errors").

---

## Verification (2026-11-11)

A skeptic re-checked 26 claims against the corpus.

| Result | Count |
|---|---|
| Claims checked | 26 |
| Supported | 18 |
| Wrong | 2 |
| Overstated | 5 |
| Unsupported | 1 |

Corrections made:
- Prices (Summary 4, weakness 1): "only dollar figure" changed to "only price"; other dollar figures (White Marlin Open prize money, blog-index pages) noted as not prices.
- Terms 6e: added that Service Fees stay constant for the initial term, plus the omitted Exclusions 15 (rates can change "at any time"); Summary 5 and weakness 1 updated.
- Forms count: "eight lead forms" changed to seven inquiry forms plus a newsletter form (Summary 6, section 5.1 notes, weakness 4).
- Form field counts (wrong): 5650 has 7 visible fields, not 8; the AEO form has 11 visible fields, not 12.
- Contact dropdown (wrong): at least 12 and up to about 20 of 40 options lack a dedicated page; weakness 13 now reads "PR and 11 others named in section 3".
- Third-party hosts: 17 non-apex hosts on every page, about 15 true third parties (two are D3's own).
- axe: `select-name` is on every audited page with the 5650 form; the `/services/` hub has none.
- Proof: service pages carry one outcome figure, but at least 2 of 28 case studies (Primo, Visiting Angels) publish figures; weakness 9 reworded.
- Added: Terms 6a Setup Fee and 5c deposits; Exclusions 15; case-study figures; Testimonials noindex-in-sitemap with no canonical and a named team member; Lighthouse accessibility, best-practices and SEO scores; site-hygiene figures from `derived/site-issues.md`; further legacy redirects to home, `/sitemap/` redirect and `locations.kml` in the sitemap; a fourth tel format (found on `/accessibility/`, not `/meet-us/` as the skeptic said) and `email=no,url=no` in format-detection; 2 undated blog posts.
