# D3 Corp: conversion path and messaging critique

Prepared for Media Masters Group LLC, 2026-11-11. Evidence base: the 2026-10-14 crawl of d3corp.com at `media-masters/research/raw/d3/`. All paths below are relative to that folder unless they start with `media-masters/`. No web searches were used. "Measured" means read directly from a corpus file. "Inferred" means our reading of that evidence. "Not in corpus" means the crawl does not show it.

Pages read in full (`pages/<slug>.txt`): home, services, websites, rapid-design-websites, search-engine-optimization, answer-engine-optimization, digital-advertising, social-media-marketing, email-marketing, graphic-design, multimedia, print, ai-assistant, ai-assistant-questionnaire, meet-us, contact-us, plus terms, request-a-quote, strategy and testimonials for context. CTAs and forms come from the `ctas` and `forms` fields of `pages/<slug>.json`.

---

## 1. Summary (for the owner)

1. **D3 sells "full-service" and "30 years", not outcomes or prices.** The home H1 is a generic agency promise, the logo itself reads "D3 30 years" (`screenshots/home-desktop-fold.jpg`), and not one of the 16 pages states a price, package or timeline, except "days, not months" for rapid-design sites (`pages/rapid-design-websites.txt`).
2. **Their sales copy contradicts their contract.** The ads page promises "No long-term commitments or contracts necessary" (`pages/digital-advertising.txt`). Their published terms say the agreement runs "three (3) years" and renews automatically unless you cancel by certified mail 60 to 180 days before the end (`pages/terms.txt`, section 5a). This is our sharpest talking point.
3. **The terms are heavily one-sided.** Fees are "non-refundable". Early cancellation forfeits discounts retroactively ("normal rates will apply from inception of the project", 5c) and can require paying "the full amount of the fees for the entirety of the Service Term" (5d). D3 may keep charging the client's card or bank account for the Service Term and any renewal term (6b). Late invoices carry 1.5% a month interest. The client owns its website and the content it supplies, but D3 keeps every "System" it builds or licenses (including "custom content" and its CMS, reservation, email and reporting systems), and the client "loses all rights to use" them on exit (`pages/terms.txt`, sections 5c, 5d, 6b, 6c, 6e, 7). Whether D3-made ad or video content counts as a "System" is not settled in the corpus, so their "full ownership" claims are ambiguous rather than contradicted (section 2.4).
4. **One button rules the whole site: "REQUEST A QUOTE".** It sits in the header of every page and leads to a 13-question form (`pages/request-a-quote.txt`). There is no booking link, no pricing page, no SMS and no "talk to a person today" path.
5. **Seven different lead forms, none consistent.** Forms range from 3 to 13 questions. The quote form's service list still offers "Mobile" and "Print Design" but not digital advertising, AEO, multimedia or the AI Assistant (`pages/request-a-quote.txt`). The social-media form asks "What Social Do You Currently Have?" but the only answers are Corporate, Portfolio, Landing Page or E-commerce Website, and its hidden labels and field names still read "Type of Website" and "Timeframe for a New Site" (`screenshots/social-media-marketing-desktop.jpg`; `pages/social-media-marketing.txt`), a copy-paste error from the website form.
6. **A chat widget on every page says "We respond immediately",** but it has a robot avatar and is most likely an AI bot (inferred), and together with the cookie banner it covers roughly the bottom 35-40% of the 390px first screen, below the H1, so no body copy or secondary action is visible (`screenshots/home-mobile-fold.jpg`, `screenshots/digital-advertising-mobile-fold.jpg`). That claim is the only response-time promise on the site (`derived/tech.json` `chat_or_ai_widget_hosts`).
7. **Proof is broad but rarely in numbers.** The home page names 20 case-study clients and loops 16 testimonials, but only two of 28 case studies give a measured figure from D3's work, and only Visiting Angels states a business-growth outcome ("from 100 to 200" caregivers and clients); Primo reports capturing about 40% of website visitors (`derived/case-studies.csv` `result_figures`). Testimonials appear on the home page only, and the testimonials page is `noindex` (`derived/pages.csv`).
8. **"Local" is claimed but rarely shown.** Outside page titles and case-study blurbs, the copy on the 12 service pages never names a town (our count of the body copy before "Case Studies"). Ocean City and Salisbury appear only on home, meet-us and contact-us.
9. **Owner and team are nearly invisible.** The founder, John Gehrig, is named once, on meet-us. No team photos, names, roles or account-lead model appear anywhere in the 16 marketing pages. Clients name staff in testimonials, but D3 does not (`pages/testimonials.txt`). The careers corpus shows D3 does run client-success account managers (`pages/career-client-success-manager.txt`); it just does not name them to prospects. Headcount is also inconsistent: "over 40" on meet-us versus "35+ full-time employees" on the careers page.
10. **Our opening:** published starting-at prices, month-to-month terms with plain-English ownership, a 4-field form with a booking link, a named human who replies the same business day, a process timeline per service, and town names in every page. Section 9 turns each of these into a commitment we can measure.

---

## 2. Positioning

### 2.1 Headline promises (one sentence each, verbatim)

| Page | Promise (H1 or lead sentence) | Evidence |
|---|---|---|
| Home | "A Full-Service Digital Marketing Agency That Drives Real Growth" | `pages/home.json` `h1`; `screenshots/home-desktop-fold.jpg` |
| Services | "At D3, we don't just offer marketing services—we build strategic solutions that drive real results." | `pages/services.txt` |
| Websites | "Build a Website That Grows Your Business" (H1 missing; this is the first H2, shown big in the screenshot) | `derived/pages.csv` `h1_count`=0; `screenshots/websites-desktop-fold.jpg` |
| Rapid Design | "Launch Sites Quickly with D3's Rapid Web Design Service" | `pages/rapid-design-websites.json` `h1` |
| SEO | "Strong search engine optimization (SEO) is the foundation of your digital marketing success." | `pages/search-engine-optimization.txt` |
| AEO | "AEO doesn't replace SEO— it builds on the essential foundations that make your business discoverable." | `pages/answer-engine-optimization.txt` |
| Digital Advertising | "D3's digital advertising services put your brand in front of the right people, in the right places, at the right time." | `pages/digital-advertising.txt` |
| Social Media | "Let's be real— your social media presence is way too important to be managed by the interns!" | `pages/social-media-marketing.txt` |
| Email | "Email remains one of the most effective digital marketing tools—when done right." | `pages/email-marketing.txt` |
| Graphic Design | "Strategic graphic design is one of the best ways to set your brand apart." | `pages/graphic-design.txt` |
| Multimedia | "Multimedia Services & Local Production Experts" | `pages/multimedia.json` `h1` |
| Print | "At D3, we know better than to let anyone say "print is dead"." | `pages/print.txt` |
| AI Assistant | "Engage visitors 24/7, answer questions instantly, and boost conversions with your AI Assistant" (H2; no H1) | `pages/ai-assistant.json` `h2[0]` |
| Meet Us | "Meet the Team Behind D3: Your Local Marketing Partners" (H2; no H1) | `pages/meet-us.json` `h2` |
| Contact | "Let's Start the Conversation" (H2; no H1) | `pages/contact-us.json` `h2` |

Measured: 5 of the 16 assigned pages have no H1 (websites, ai-assistant, ai-assistant-questionnaire, meet-us, contact-us; request-a-quote and testimonials outside the set also have none; `derived/pages.csv` `h1_count`). Inferred: none of these promises names a buyer, a town, a number or a time frame. Every one would fit any agency in the country.

**Our standard:** Every Media Masters Group H1 names a service and a place or a buyer ("Websites for Ocean City restaurants"), and the sentence under it states one measurable promise (a price, a timeline or a response time). Every page has exactly one H1.

### 2.2 Who they say they serve

| Signal | Where | Evidence |
|---|---|---|
| "Healthcare, Home Services, Hospitality, and Government Firms" | Services and SEO `<title>` only, not in body copy | `pages/services.json` `title`; `pages/search-engine-optimization.json` `title` |
| "for all industries" | Meet Us body | `pages/meet-us.txt` |
| "No matter your company's size or industry" | Strategy body | `pages/strategy.txt` |
| "if you're just starting out" | Rapid Design body | `pages/rapid-design-websites.txt` |
| "If you are a REALTOR" | Terms only (real estate feed exclusion) | `pages/terms.txt` Exclusions 11 |

Inferred from the case studies they choose to show: hospitality and tourism dominate (Seacrets, Jolly Roger, Boardwalk Hotel Group, Castle in the Sand, Old Pro Golf, Somerset County Tourism, Chesapeake Country Byway; `pages/home.txt`). No service page has an industry page behind it (not in corpus).

**Our standard:** A named buyer on every service page (for example "for restaurants, rentals and contractors from Lewes to Pocomoke"), and one vertical page each for hospitality, restaurants, real estate, medical and home services (PLAN 5.1).

### 2.3 Local signals

| Signal | Where it appears | Evidence |
|---|---|---|
| "30 years" / "30+ years" | Logo on every page ("D3 30 years"); Meet Us ("30 years serving businesses from Ocean City, MD, the East Coast, and beyond"); Strategy; Rapid Design ("30+ years of experience") | `screenshots/home-desktop-fold.jpg`; `pages/meet-us.txt`; `pages/strategy.txt`; `pages/rapid-design-websites.txt` |
| "Founded in 1995 by John Gehrig in Ocean City, Maryland" | Meet Us only | `pages/meet-us.txt` |
| "over 40 dedicated professionals across Ocean City and Salisbury, MD" | Meet Us only; the careers page says "35+ full-time employees", so the headcount conflicts | `pages/meet-us.txt`; `pages/career-client-success-manager.txt` |
| Two street addresses (12319 Ocean Gateway, Suite 202, Ocean City; 212 West Main Street, Salisbury) and 410-213-2400 | Footer of every page | `pages/home.json` `footer` |
| "Ocean City chamber logo" | Footer image on every page | `pages/meet-us.json` `images` alt |
| Salisbury Area Chamber and Delaware Quiet Resorts badges | Footer links on every page to salisburyarea.com and thequietresorts.com (images have empty alts, so they are invisible to screen readers and search) | `pages/home.json` `externalLinks` |
| Own social profiles | Footer icon links on every page to D3's Facebook (D3DoesIt), LinkedIn, YouTube and Instagram; the icons have no link text | `pages/home.json` `externalLinks` |
| "Unmatched, local customer service" | SEO | `pages/search-engine-optimization.txt` |
| "A local team dedicated to customer service" | Email | `pages/email-marketing.txt` |
| "Local Production Experts" | Multimedia H1 | `pages/multimedia.json` `h1` |
| "MD" in titles | SEO, Graphic Design, Multimedia, Print, Contact titles | `pages/*.json` `title` |
| "Serving the Mid-Atlantic" | Email title | `pages/email-marketing.json` `title` |

Measured: town names in the body copy of the 12 service pages (text before the "Case Studies" block, excluding nav, footer and title) total **zero** for Ocean City, Salisbury, Berlin, Ocean Pines, Fenwick, Rehoboth, Lewes, Sussex, Delmarva, Eastern Shore, Worcester and Wicomico (our count with `grep` over `pages/<slug>.txt`). The towns appear only inside case-study blurbs, which repeat across pages. "Delmarva" is not used in D3's own body copy on any of the 16 pages.

**Our standard:** Every service page names at least three Delmarva towns in its own body copy and links to at least two location pages. "Delmarva" appears on the home page above the fold.

### 2.4 Differentiation claims

| Claim | Page | Evidence | Measured or inferred |
|---|---|---|---|
| "No long-term commitments or contracts necessary" | Digital Advertising | `pages/digital-advertising.txt` | Measured claim; **contradicted by terms section 5a** (3-year term, auto-renewal) |
| "You will have full ownership of ad accounts and content" | Digital Advertising | same | Measured claim; terms section 7 keeps "Systems" and "custom content" as D3 property, so "content" ownership is unclear |
| "Full media ownership" | Multimedia | `pages/multimedia.txt` | Measured claim; same tension with terms section 7 |
| "No matter what, you'll always retain control over your accounts." | Social Media | `pages/social-media-marketing.txt` | Measured claim |
| "Dedicated ads strategy team" | Digital Advertising | `pages/digital-advertising.txt` | No names or roles given |
| "NO cookie-cutter campaigns." / "No cookie-cutter templates." | Digital Advertising, Social Media | same pages | Generic |
| "Comprehensive audits for transparency." | SEO | `pages/search-engine-optimization.txt` | No sample audit shown (not in corpus) |
| "We're talking days, not months." | Rapid Design | `pages/rapid-design-websites.txt` | The only delivery time on the site |
| "Fast turnaround and reliable delivery" | Print | `pages/print.txt` | No time stated |
| "Ready in Minutes" (H-level copy) | AI Assistant | `pages/ai-assistant.txt` | Contrasts with an 11-question onboarding questionnaire (section 5) |
| "we promise to filter the hype from opportunity and guide you where it counts" | Meet Us | `pages/meet-us.txt` | Generic |
| "face-to-face meetings, virtual chats, and phone calls (yes, we still love talking!)" | Meet Us | `pages/meet-us.txt` | No booking path for any of these |

### 2.5 Jargon a small-business owner would trip on

Measured terms used without a plain-English definition on the page: "AEO", "GEO", "LLM" (AEO title), "Programmatic Ads", "performance max", "quality scores", "return on ad spend", "Geofencing", "drip campaigns", "A/B testing", "segmentation", "CRM capabilities", "B-roll", "CMS", "design systems", "full-stack" (services and email titles), "End-to-End", "ID3AS" (their brand pun for the blog, used in the services body: "smart ID3AS"). Evidence: the respective `pages/<slug>.txt`. The AEO page does define SEO, AEO and GEO in one line each, the only glossary-style help found.

**Our standard:** Every page passes a grade-8 reading level (PLAN 5.5 reading-level check). Each technical term is defined in one sentence the first time it appears, and every service page has a 4 to 6 question FAQ.

---

## 3. Offer architecture

### 3.1 How services are packaged (measured)

| Layer | What the site shows | Evidence |
|---|---|---|
| Main menu | 12 service links: AI Assistant, AEO, Digital Advertising, Email Marketing, Graphic Design, Multimedia, Print, SEO, Social Media Marketing, Strategy, Custom Websites, Rapid Design Websites | `pages/home.json` `nav` |
| Services hub | 9 services listed (no AEO, AI Assistant or Rapid Design) | `pages/services.txt` |
| Home hero list | Branding, Website Design, Marketing, Search Engine Optimization, Multimedia, "Content Creation, Strategy & PR" | `pages/home.txt`; `screenshots/home-desktop-fold.jpg` |
| Contact form "Service" dropdown | 40 options, including services with no page: Booking Engines, Reservations, Group Housing, Live Web Cams, Wifi Marketing, Reputation Management, Public Relations, Media Relations, Citation Management, Mobile App, Hosting and Maintenance, Email Hosting, Lead Management, Community Relations. It lists neither AEO nor AI Assistant. | `pages/contact-us.txt` |
| Quote form "Service Interest In" | 7 options: Mobile, SEO, E-Commerce, Email Marketing, Print Design, Design & Development, Social Marketing | `pages/request-a-quote.txt` |
| Website tiers | WordPress, Custom, E-Commerce (websites page); Rapid Design as a cheaper, faster tier ("without the price tag of a full custom build") | `pages/websites.txt`; `pages/rapid-design-websites.txt` |
| Bundling message | "Each of our services can stand alone, but they are even more successful when combined into a full-scale marketing plan." | `pages/services.txt` |
| Packages, tiers or prices | **None on any page.** The only dollar figure about D3's own fees is in the terms: "Custom programming is available starting at $195/hr". | `pages/terms.txt` Exclusions 12; site-wide `$` search |

Inferred: there are three different service menus (nav, hub, contact dropdown) plus a fourth on the quote form, and they disagree. A prospect cannot tell what D3 actually sells as a product, and the contact dropdown hints at a hospitality-tech back catalogue (booking engines, reservations, web cams, Wi-Fi marketing) that the marketing pages never explain.

**Our standard:** One service list, used identically in the nav, the hub, the footer and every form. Every service has a page, three named packages and a starting-at price on a public pricing page (PLAN 5.1).

### 3.2 What the terms page says (read in full: `pages/terms.txt`, 5,182 words per `derived/pages.csv`)

Exact short phrases, with section numbers from the page:

| Topic | Exact phrase(s) | Section |
|---|---|---|
| Contract length | "a period of three (3) years commencing on the Activation Date" | 5a |
| Auto-renewal | "shall renew automatically and remain in effect for further terms of one (1) year each" | 5a |
| Cancellation notice | "sent via certified mail no more than one hundred eighty (180) days and no less than sixty (60) days prior" | 5a |
| Early cancellation | "will result in forfeiture of any and all waived fees and discounted rates provided"; discounts are clawed back retroactively: "normal rates will apply from inception of the project" and the client pays the difference | 5c |
| Refunds | "No refunds will be provided." | 5c |
| Pay-out on exit | "pay to D3 the full amount of the fees for the entirety of the Service Term" | 5d(iii) |
| Cancellation clock | "Cancellation and all other policies apply upon the Effective Date." | 4 |
| Setup fee | "the Setup Fee will be due in full on the Effective Date" | 6a |
| Payment method | "Service Fees and Usage Fees must be paid by ACH or credit card" | 6b |
| Billing timing | "due in advance of services being performed for that service period" | 6b |
| Standing charge authority | "D3 may submit charges for Service Fees and Usage Fees for the Service Term and any further term" until terminated, i.e. auto-renewal comes with continued card or bank charges | 6b |
| Invoice disputes | 30 days to object in writing, after which the client is "deemed to have waived its right to dispute" | 6c |
| Late interest | "one and one half percent (1.5%) per month, compounded monthly" | 6c |
| Suspension | D3 may "disable any service D3 operates for Client" after a 5-business-day cure period | 6d |
| Price changes | "subject to increase upon each contract renewal"; "All fees are non-refundable." | 6e |
| Rate changes anytime | "subject to review and change at D3's discretion, at any time" | Exclusions 15 |
| Ownership (client) | "Client shall have ownership of its website or other Services provided to Client by D3, unless specifically stated" | 7 |
| Ownership (D3 keeps) | "any and all Systems developed or licensed by D3 shall at all times remain the exclusive property of D3" (Systems include "custom content", "reservation systems, email marketing systems, metrics and reporting systems", "proprietary content management systems") | 7 |
| On exit | "Client has no ownership rights to the Systems and loses all rights to use any of the Systems" | 7 |
| SEO/PPC charges | "D3 offers professional SEO and PPC services at an additional charge to Client, if requested." | Exclusions 7 |
| PPC excluded | "This proposal does not include hours or service for PPC campaigns (Google Ads or otherwise)." | Exclusions 7 |
| SEO limits | "Client will provide basic keywords and key phrases"; "No one, including D3, can guarantee you placement on Google, Bing, Copilot, Gemini, ChatGPT or any other search/answer engine." | Exclusions 9 |
| Printing | "This proposal does not include the printing of any materials." / "at an additional cost to Client" | Exclusions 4 |
| Hosting (video) | "D3 does not provide video hosting." | Exclusions 5 |
| Hosting (website) | **No website-hosting clause in corpus.** Hosting is sold (contact dropdown "Hosting and Maintenance"; email page "Full service email hosting"; Primo case study "website hosting"), but the terms give no uptime, backup or migration commitment. The closest support path is an indexable `/site-down/` form titled "THE REQUESTED SITE IS TEMPORARILY DOWN" (frmD3Forms3338: first name, last name, email, Site, comments; `robots_meta` "follow, index", in the sitemap), with no stated response time. | `pages/contact-us.txt`; `pages/email-marketing.txt`; `pages/site-down.json`; `derived/pages.csv` row `site-down` |
| Content | "The creation of primary content (text, content writing, images, etc.) is not included but may be provided for an additional fee." | Exclusions 1 |
| Photo and video | "not included in this proposal, but are available at an additional charge" | Exclusions 2 |
| Social | "This proposal does not include social marketing services" | Exclusions 6 |
| Domain | "Acquisition of a domain name is not included in this proposal" | Exclusions 8 |
| E-commerce | "D3 will enter the first 5 products" | Exclusions 10 |
| Custom functionality | Excludes "online reservations, events scheduling, patient portal, appointment scheduling"; "starting at $195/hr" | Exclusions 12 |
| Compliance | "D3 is not responsible for maintaining ANY compliance-related items" (lists ADA, WCAG, HIPAA, PCI and others) | Exclusions 14 |
| Testing burden | "It is the responsibility of Client to test, proof, and correct any errors or omissions" | 9 |
| Sole remedy | "the sole recourse of Client is termination of this Agreement" | 9 |
| Warranty | "provided "as is" without warranty of any kind" | 10 |
| Non-solicit | Client may not hire D3 staff during the term "and for a period of one (1) year thereafter" | 13 |
| Publicity | D3 may "use the name and logo of Client" in promotional materials | 14 |
| Scope creep | Terms "apply to all past, present, and future Services ... whether or not such Services are contracted for in writing" | 15 |
| Terms can change | "subject to change at any time at the discretion of D3" | Notice |
| Support included | "Personal, ongoing support via phone, email, or video is included with service." | Exclusions 3 |
| Venue | Worcester County, Maryland courts; jury trial waived | 8 |

Inferred, and worth stating carefully in sales conversations: the published terms are boilerplate "subject to change" and individual signed agreements may differ (not in corpus). We should compare our terms with theirs as published, never characterize any client's actual contract.

Marketing copy against the terms. Only the first row is a directly measured contradiction; the others are an ambiguity or inferred tensions.

| Marketing page says | Terms say | Status |
|---|---|---|
| "No long-term commitments or contracts necessary" (`pages/digital-advertising.txt`) | 3-year term, auto-renewing yearly (5a); pay the full term on early exit (5d); D3 may keep charging the card or bank account through any renewal term (6b) | **Measured contradiction** |
| "You will have full ownership of ad accounts and content" (`pages/digital-advertising.txt`); "Full media ownership" (`pages/multimedia.txt`) | Client owns "its website or other Services provided to Client by D3" and "the content, data, and materials provided to D3", but D3 keeps "Systems", which include "custom content", and the client loses use of them on exit (7) | **Ambiguity**: whether D3-made ad or video content is a "System" is not settled in the corpus |
| "Comprehensive audits for transparency" (`pages/search-engine-optimization.txt`) | Client must "test, proof, and correct any errors" in the website (9); the clause does not mention audits | Inferred tension |
| AI Assistant "Ready in Minutes" (`pages/ai-assistant.txt`) | Custom website programming (portals, reservations, scheduling) is excluded and billed hourly (Exclusions 12); the clause does not mention the AI Assistant | Inferred tension |

**Our standard:** Month-to-month on every retainer, cancel with 30 days' notice by email, no early-termination fee. Website builds are a fixed price with a written scope. The client owns the domain, site files, content, ad accounts, analytics and social accounts from day one, in a one-page plain-English "What you own" page linked from the footer. Terms changes take effect only at renewal and with 30 days' written notice.

---

## 4. Calls to action

### 4.1 CTA inventory (16 assigned pages)

Source: `pages/<slug>.json` `ctas` (text, href, tag), plus button-like text found only in `pages/<slug>.txt` (the crawler's `ctas` field did not capture those, so their targets are "not in corpus").

| CTA text | Where it appears | Leads to | Source |
|---|---|---|---|
| REQUEST A QUOTE | Header, every page (desktop top right; mobile full-width bar above the logo) | `/request-a-quote` (no trailing slash; the canonical is `/request-a-quote/`) | `ctas`; `screenshots/home-desktop-fold.jpg`, `home-mobile-fold.jpg` |
| Contact Us | Main nav, every page | `/contact-us/` | `ctas` |
| Facebook | Footer "Our Partners" logo carousel, every page (one slide beside Google, YouTube, Shopify, Amazon, Adobe, WooCommerce, WordPress and Bing, each linking to the vendor home page) | `https://www.facebook.com/` (a partner logo, not a social link) | `ctas`; `pages/home.json` `externalLinks` |
| Social icons (no link text) | Footer, every page | D3's own profiles: facebook.com/D3DoesIt, linkedin.com/company/d3corp, youtube.com/c/D3CorpOceanCity, instagram.com/d3corp/ | `pages/home.json` `externalLinks` |
| SUBMIT | Footer lead form (12 pages), AEO form, AI Assistant form, Contact form, Quote form | Form post (target URL not captured: `forms[].action` reads "ref: <Node>") | `forms` |
| SUBMIT REQUEST | Rapid Design and Social Media long forms | Form post | `ctas` (tag `button`) |
| SUBSCRIBE | Newsletter form in footer, every page | Form post | `pages/*.txt` |
| Contact D3 | AEO, Email, Print body | `/contact-us/` | `ctas` |
| Work with D3 | Digital Advertising body | `/contact-us/` | `ctas` |
| Contact us | Social Media body | `/request-a-quote/` (the same words go to a different page than the nav "Contact Us") | `ctas` |
| contact form | Meet Us body, in "submit a quote request via our contact form" | `/contact-us/` (the sentence says quote request; the link goes to Contact) | `ctas`; `pages/meet-us.txt` |
| VIEW ALL SERVICES | Home hero | Not in corpus (href not captured) | `pages/home.txt`; `screenshots/home-desktop-fold.jpg` |
| VIEW CASE STUDY | Case-study carousels on 13 of the 16 pages | Case-study pages (inferred) | `pages/*.txt` |
| VIEW ALL TESTIMONIALS, Read More | Home testimonial carousel | Testimonials page (inferred) | `pages/home.txt` |
| "chat with our AI Assistant" | AEO body text (not a link in `ctas`) | Chat widget (inferred) | `pages/answer-engine-optimization.txt` |
| Chat bubble, "Hi, how can we help you today? We respond immediately" | Every page, bottom right, opens over content | AI chat (vendor host `apigateway.co`) | `derived/tech.json` `chat_or_ai_widget_hosts`; `screenshots/home-desktop-fold.jpg` |
| Phone 410-213-2400 (tel: link) | Footer, every page; "give us a call" line above the footer form | Phone call | `pages/*.json` `telLinks`; `derived/tech.json` `phones_seen` = 157 pages |
| emergency@d3corp.com | Contact Us only | Email | `pages/contact-us.json` `emails` (not listed in `derived/tech.json` `emails_seen`, which is incomplete) |
| clientservices@d3corp.com, support@d3corp.com | Accessibility and webmail pages; terms and privacy policy (not on the 16 marketing pages) | Email | `pages/accessibility.txt`, `pages/webmail.txt`, `pages/terms.txt`, `pages/privacy-policy.txt`; a Rackspace webmail support page also exists (`pages/webmail.txt`) |

### 4.2 The dominant CTA

"REQUEST A QUOTE" is the only colored button in the header (yellow on blue, `screenshots/home-desktop-fold.jpg`) and `/request-a-quote/` has 160 inlinks, the most of any page we checked (`derived/pages.csv` `inlinks`; contact-us has 159). Inferred: it is the only next step the site pushes. It asks for commitment ("quote") before the prospect has seen a price range, a process or a person.

Every service page ends with the same "Submit the form below, or give us a call at 410-213-2400" block under a page-specific heading (for example "Leverage D3's Top Performing Digital Ad Services", `pages/digital-advertising.txt`). Services hub and Meet Us have no lead form at all, only the newsletter (`pages/services.json`, `pages/meet-us.json` `forms`).

### 4.3 Missing paths (measured)

| Path | Present? | Evidence |
|---|---|---|
| Online booking (Calendly, Cal.com or similar) | **No.** No booking host in `derived/tech.json` `script_hosts` or `third_party_hosts_pages`. | `derived/tech.json` |
| Live human chat | **Not shown.** A chat widget exists on all 157 pages; its robot avatar and the AI Assistant product suggest a bot (inferred). | `derived/tech.json`; `screenshots/home-desktop-fold.jpg` |
| SMS / text us | **No** for prospects. The only SMS text is in terms section 19, for employee two-factor login. | `pages/terms.txt` |
| Pricing page or price ranges | **No.** | Site-wide `$` search; `derived/services-and-company-pages.csv` `pricing_signals` |
| Free audit or lead magnet | **None promoted.** The marketing pages offer only a newsletter. But an indexable audit intake form exists at `/su/`, "SU Entrepreneur Intake Form \| Online Brand Performance Audit Checklist" (frmD3Forms5652, 55 Yes/No/Unsure items on website, SEO, social, Google Business Profile and reviews; `robots_meta` "follow, index"; in sitemap; 1 inlink). It appears to serve a Salisbury University entrepreneur programme (inferred). Its criteria show what D3 audits on, for example "Business has ownership of Google Business Profile", Google comments "responded to within 3 business days" and "Website loads in 2-3 seconds". | `forms` on all pages; `pages/su.json`, `pages/su.txt`; `derived/pages.csv` row `su` |
| Click-to-call on the first screen | **No.** The phone number is in the footer and above the bottom form only. | `screenshots/*-fold.jpg` |

**Our standard:** Every page carries one primary CTA ("Book a 15-minute call", live calendar) and one secondary ("See prices"), both on the first screen at 390px and 1440px. Click-to-call and text-us are in the mobile header. CTA wording and destination are identical across pages, and a CTA named "Contact" always goes to the same page. Our free audit is promoted, not buried, and our own site beats the bars D3's `/su/` checklist sets for others: mobile load under 2 seconds (not 2-3) and every Google review answered within 1 business day (not 3).

---

## 5. Forms

Friction score (our method, stated so others can recompute): +1 per visible question, +1 per field marked required, +2 per file upload, +1 if a free-text answer is required. Lower is better. "Required" uses the visible asterisk, because every field's HTML `required` attribute is false (`forms[].fields[].required`), which means validation, if any, is done by script (inferred). The asterisks are drawn by CSS and mostly missing from the `.txt` files (the footer form shows one asterisk in `pages/home.txt` but seven in `screenshots/websites-desktop.jpg`), so required marking is confirmed only where a screenshot exists: the footer form (7 of 7) and the Social project form (0, `screenshots/social-media-marketing-desktop.jpg`). The Rapid Design form's count is read from the `.txt` only. No screenshot exists for request-a-quote, contact-us, answer-engine-optimization or ai-assistant (`derived/screenshots-index.md`), so their required counts are not in corpus and their friction scores are **lower bounds**.

| Form (id) | Where | Questions | Marked required | Friction | Notes | Evidence |
|---|---|---|---|---|---|---|
| Footer lead form (frmD3Forms5650) | 12 of 16 pages: home, websites, rapid-design, SEO, AEO, digital-ads, social, email, graphic-design, multimedia, print, ai-assistant (also strategy) | 7: first, last, company, phone, email, "How Did You Hear About D3?", "I'm Interested in the following Services" (free text) | 7 (all asterisked) | **15** | Phone and company required for a first touch; the service question is a blank text box, not choices | `pages/home.json` `forms`; `pages/home.txt` |
| Request a Quote (frmD3Forms748) | `/request-a-quote/` (header button) | 13: company, contact person, title, city, state, phone, email, preferred contact (email/phone), current website, timeframe (0-3, 4-8, 8+ months, not certain), how discovered (5 options), comments, service (7 options) | Not in corpus | **13+** (lower bound) | Service list out of date (no ads, AEO, multimedia, AI); timeframe is "for a New Site" even if you want SEO | `pages/request-a-quote.json`; `.txt` |
| Website project (frmD3Forms5656) | Rapid Design, mid-page | 13 (same as quote form, with type of website and timeframe ASAP / 3-6 / 6-12 months) | 0 in `.txt` (unconfirmed) | **13+** (lower bound) | Shown in addition to the footer form: two lead forms on one page | `pages/rapid-design-websites.json` |
| Social project (frmD3Forms5657) | Social Media, mid-page | 13 | 0 (confirmed in screenshot) | **13** | Copy-paste error from the website form: the visible question is "What Social Do You Currently Have?" but the answers are Corporate, Portfolio, Landing Page or E-commerce Website; hidden labels and field names (`type_of_website`, `what_is_your_timeframe_for_a_new_site`) still say "Type of Website" and "Timeframe for a New Site", while the visible placeholder reads "What is Your Timeframe?" | `pages/social-media-marketing.json`; `.txt`; `screenshots/social-media-marketing-desktop.jpg` |
| AEO inquiry (frmD3Forms5680) | AEO, mid-page | 11 | Not in corpus | **11+** (lower bound) | Plus the footer form | `pages/answer-engine-optimization.json` |
| AI Assistant inquiry (frmD3Forms5681) | AI Assistant, mid-page | 11 | Not in corpus | **11+** (lower bound) | Email field is `type: text`, so mobile keyboards will not switch to email layout | `pages/ai-assistant.json` |
| Contact (frmD3Forms5375) | `/contact-us/` | 5: first, last, email, service (40-option dropdown), comments | Not in corpus | **5+** (lower bound) | Lowest friction; the page says "We will connect you with the right D3 expert on our team." but not when | `pages/contact-us.json`; `.txt` |
| Newsletter (frmD3Forms5112) | Footer, every page | 3: first, last, email | 0 | 3 | "Get the latest marketing news and advice." | `pages/home.json` |
| AI Assistant Questionnaire (no id) | `/ai-assistant-questionnaire/` | 11: business name, website, email to receive leads, assistant name, icon upload, FAQs, third-party URLs, lead/booking tools, instructions, extra info, knowledge upload | 5 (business name, website, lead email, assistant name, tools) | **21** (11 + 5 + 4 for two uploads + 1 because the required tools question is a free-text textarea) | 2 uploads of "Max upload size: 100 MB Any file type accepted" | `pages/ai-assistant-questionnaire.txt`, `.json` |

Measured: 4 of the 16 pages show two different lead forms plus the newsletter (rapid-design, AEO, social, ai-assistant; `derived/pages.csv` `forms` = 3). The "How did you hear" question is asked in three different wordings with three different option sets (footer: 10 options; quote: 5; long forms: 10).

**What happens after submit:** not in corpus. The crawler did not submit forms, no thank-you or confirmation page is in the sitemap (the only "thank" URL is a video, `sitemap-urls.json`), and no form text says when D3 will reply. The contact page says who will reply ("We will connect you with the right D3 expert on our team.", `pages/contact-us.txt`) and the social form says "we'll be in touch with recommendations from our D3 social experts" with no time frame (`pages/social-media-marketing.txt`). Every form carries the reCAPTCHA notice (`pages/*.txt`).

**The AI Assistant questionnaire as a lead form:** it is not one. Inferred from its fields ("Email Address to Receive Leads", "AI Assistant Name", uploads), it is post-sale onboarding for clients who have already bought the AI Assistant. It has one inlink, no meta description and no H1 (`derived/pages.csv` row `ai-assistant-questionnaire`: `inlinks`=1, `desc_len` empty, `h1_count`=0), yet it is indexable and in the sitemap (`robots_meta` "follow, index"; `in_sitemap` True). A prospect who lands on it from search meets a 21-point form with no explanation, price or contact path beyond the header button. It also accepts "Any file type" up to 100 MB on a public URL (measured copy; the security exposure is inferred). It is not the only internal page exposed to search: `/two-factor-authentication-2fa-mobile-number-registration/`, an employee SMS-consent form, is also indexable ("index, follow") and in the sitemap (`derived/pages.csv` row of that slug), and so are `/site-down/` and `/su/` (section 4.3).

**Our standard:** One lead form site-wide, at most 4 fields (name, email or phone, what you need as checkboxes from the single service list, optional message), friction score 5 or less, correct input types (`email`, `tel`), and real `required` attributes with accessible error text. After submit, a confirmation page names who will reply and by when, and offers the booking calendar. Client onboarding forms sit behind a link sent to clients, are `noindex`, and accept only listed file types with a size limit.

---

## 6. Proof

### 6.1 Numbers on the pages (quoted)

| Number | Where | Evidence | Attributable to D3's work? |
|---|---|---|---|
| "they doubled their caregivers and clients from 100 to 200 of each!" | Visiting Angels case study; summary repeated on home, SEO, strategy ("doubled the number of caregivers and clients") | `pages/case-study-visiting-angels-eastern-shore-md.txt`; `pages/home.txt` | Yes (claimed) |
| "A 70% increase in total website users translated directly into operational expansion." | Visiting Angels case study | same | Yes (claimed) |
| "approximately 40% of website visitors" captured by lead tools | Primo case study | `pages/case-study-primo-family-restaurant.txt` | Yes (claimed): a measured lead-capture result, though not a sales or revenue outcome |
| "since 2016, with nearly a decade of ongoing collaboration" | White Marlin Open blurb, home and strategy | `pages/home.txt` | Retention, not result |
| "a trusted D3 client for over a decade" | High Stakes blurb, websites page | `pages/websites.txt` | Retention |
| "Over 40% of websites worldwide are using this tried and true platform." | Websites (about WordPress) | `pages/websites.txt` | Industry stat |
| "over 600 team members, treating more than 65,000 patients yearly" | Chesapeake Health Care blurb | `pages/home.txt` | Client size, not result |
| "30 years", "over 40 dedicated professionals", "Founded in 1995" | Meet Us | `pages/meet-us.txt` | Company facts |
| "immediately increased online orders" | Crabs To Go blurb (no figure) | `pages/home.txt` | Claimed, unquantified |

Across all 28 case studies, `derived/case-studies.csv` `result_figures` and the sibling report `media-masters/research/01b-d3-content-inventory.md` (section 3) show that 2 of 28 give a measured figure from D3's work: Visiting Angels (growth outcome) and Primo (about 40% visitor capture). Only Visiting Angels states a business-growth outcome. White Marlin Open's "$113 million" is tournament prize money, not a result. No service page states a client metric in its own copy.

### 6.2 Named clients on service pages (case-study carousels, first slides as crawled)

| Page | Clients named in the carousel | Evidence |
|---|---|---|
| Home | 20 slides: Farmers Bank of Willards, Jolly Roger, Partnership for the Delaware Estuary, Visiting Angels, Babe Ruth Birthplace, White Marlin Open, Boardwalk Hotel Group, Primo, IDEC, Somerset County Tourism, Crabs To Go, Old Pro Golf, Chesapeake Country Byway, Seacrets, The Land Group, Castle in the Sand, Delaware Elevator, Remember Me Glass, Burley Oak, Chesapeake Health Care | `pages/home.txt` |
| Websites | Old Pro Golf, Seacrets, Chesapeake Country Byway, High Stakes, Chesapeake Health Care, Jolly Roger | `pages/websites.txt` |
| SEO | Visiting Angels, Boardwalk Hotel Group, Castle in the Sand, Seacrets, Jolly Roger | `pages/search-engine-optimization.txt` |
| AEO | Boardwalk Hotel Group, Somerset County Tourism, Jolly Roger, Old Pro Golf, Castle in the Sand | `pages/answer-engine-optimization.txt` |
| Digital Advertising | Castle in the Sand, Primo, Delaware Elevator (+2 more slides) | `pages/digital-advertising.txt` |
| Social, Email, Graphic, Multimedia, Print, Rapid, AI Assistant, Services | Mostly the same pool (Crabs To Go, Castle in the Sand, Jolly Roger, Primo, Salisbury Area Chamber, George's, Babe Ruth, Old Pro Golf, Dolle's, Zen Spa, Our Harvest, Boardwalk) | respective `pages/*.txt` |

Inferred: the same 6 to 8 hospitality names rotate through every service. The AEO carousel uses website-redesign stories with no AEO result, and the AI Assistant carousel ("AI Assistant That Deliver Answers") shows Boardwalk Hotel Group and The Land Group with no AI Assistant outcome in the blurb.

### 6.3 Testimonials and badges

| Item | Finding | Evidence |
|---|---|---|
| Testimonial placement | Home only (carousel, 16 named quotes looped twice). No service page carries a testimonial. | `grep "Client Reviews"` matches only `pages/home.txt` |
| Testimonials page | 6 quotes then "LOAD MORE"; `noindex`; no H1; no dates or stars | `pages/testimonials.txt`; `derived/pages.csv` `robots_meta`="follow, noindex" |
| Recon difference | The 2026-10-13 recon said testimonials were "paginated, at least 10 pages"; the crawl shows a single load-more page. The corpus supersedes it. | `media-masters/research/00-d3-recon-2026-10-13.md` line 43 |
| Review platform feed or star rating | None on the 16 pages | `pages/*.txt`; `derived/tech.json` |
| Badges | Footer "Our Partners" carousel of platform logos (Google, YouTube, Shopify, AWS/Amazon, Adobe, WooCommerce, WordPress, Bing, Facebook) and an "Ocean City chamber logo". These are platform logos, not certifications. The Semrush Agency Partner and WP Engine badges noted in PLAN section 2 are **not in corpus**. | `pages/meet-us.json` `images` alt; `grep -i semrush` no match |
| Accessibility overlay | The accessiBe overlay (acsbapp.com) loads on all 157 pages (`derived/tech.json` `accessibe_overlay` true), yet all 30 pages axe-tested still have serious violations, including `color-contrast` and `link-name` on every one (`derived/axe-summary.csv`). D3's own terms disclaim overlays: they are provided "as is" and the "No Guarantee of Compliance" clause applies (`pages/terms.txt`, Regulatory and Legal Compliance Disclaimer). Inferred: an agency selling accessibility help with an overlay and failing pages is a credibility gap. | `derived/tech.json`; `derived/axe-summary.csv`; `pages/terms.txt` |
| "Top-Rated" | Used in titles and headings (graphic design, AEO, home form heading "D3's Top-Rated Digital Marketing Services") with no rating source shown | `pages/graphic-design.json` `title`; `pages/home.txt` |

**Our standard:** Every service page carries at least one case study with two before-and-after metrics, the measurement window and the data source, plus one dated, named testimonial relevant to that service. The testimonials page is indexable, with each quote dated and linked to its Google review where one exists. Any "top-rated" claim cites its source and rating on the same screen. No accessibility overlay; zero critical or serious axe violations on every page at launch, with every icon link and badge image given an accessible name.

---

## 7. Response and service promises

| Promise | Exact words | Where | Evidence |
|---|---|---|---|
| Chat response | "We respond immediately" | Chat widget, every page | `screenshots/home-desktop-fold.jpg`, `home-mobile-fold.jpg`, `websites-desktop-fold.jpg` |
| AI Assistant (product for clients) | "Engage visitors 24/7, answer questions instantly" | AI Assistant page | `pages/ai-assistant.txt` |
| After-hours | "For urgent support after hours, contact: emergency@d3corp.com" | Contact Us only | `pages/contact-us.txt` |
| Site-down form | "THE REQUESTED SITE IS TEMPORARILY DOWN" form (name, email, Site, comments), indexable and in the sitemap; no response time stated | `/site-down/` | `pages/site-down.json` (frmD3Forms3338); `derived/pages.csv` |
| Client support email | clientservices@d3corp.com and support@d3corp.com | Accessibility, webmail, terms, privacy pages | `pages/accessibility.txt`, `pages/webmail.txt`, `pages/terms.txt`, `pages/privacy-policy.txt` |
| Support included | "Personal, ongoing support via phone, email, or video is included with service." | Terms | `pages/terms.txt` Exclusions 3 |
| Error correction | "D3 agrees to promptly correct any mistakes of its own accord upon notification" | Terms | `pages/terms.txt` 9 |
| Security incident | notify "within a commercially reasonable time" | Terms | `pages/terms.txt` 2c |
| Social reporting | "providing regular updates and insights so you will never be left in the dark" | Social Media | `pages/social-media-marketing.txt` |
| SEO reporting | "Ongoing reporting and optimization." | SEO | `pages/search-engine-optimization.txt` |
| Delivery speed | "We're talking days, not months." | Rapid Design | `pages/rapid-design-websites.txt` |
| Guarantees | None. The terms say the opposite: "No one, including D3, can guarantee you placement" and services are "as is". | Terms | `pages/terms.txt` Exclusions 9, section 10 |

Not in corpus: business hours, a reply time for forms or email, a support SLA, an uptime commitment for hosting, a reporting cadence, a named contact, or what "urgent" means for the emergency address or how fast the `/site-down/` form is answered (the form itself is the closest thing D3 has to a hosting-support path). Testimonials repeatedly praise responsiveness ("great turn around times", "very responsive"; `pages/home.txt`), so D3 relies on clients to make the promise D3 does not put in writing (inferred).

**Our standard:** Published office hours on every page footer. Form and email replies from a named human within the same business day (inquiries after 3 pm get a reply by 10 am the next business day). Hosting clients get a written 99.9% uptime target and a 1-hour first response for site-down issues, 7 days a week. Monthly report on a fixed date, with a sample published. Any chat bot is labelled as a bot and offers "text a person" and "book a call" within the first reply.

---

## 8. Messaging gaps a prospect would feel

| Gap | What the prospect experiences | Evidence | Our standard |
|---|---|---|---|
| No pricing | Cannot tell whether D3 is a $2,000 or $20,000 decision without filling a 13-question form | No price on any page except "$195/hr" in terms Exclusions 12 | Public pricing page; starting-at price on every service page |
| No process or timeline | Does not know the steps, how long a website or SEO engagement takes, or when results show. Only "days, not months" (rapid sites) and "can take weeks after launch" (terms, about Google crawling). | `pages/rapid-design-websites.txt`; `pages/terms.txt` Exclusions 9 | A numbered process with week counts on every service page |
| No owner or team visibility | Cannot see who they would work with; "over 40" staff claimed (or "35+" on the careers page), zero shown. D3 does employ client-success account managers (careers page) but does not name them to prospects | `pages/meet-us.txt` (founder named once; no team list); `pages/meet-us.json` `images` (no staff photos by alt); `pages/career-client-success-manager.txt` | Owner photo and name on every page; named account lead per client |
| No comparison guidance | Cannot tell Custom vs WordPress vs Rapid Design apart on cost, time or fit; cannot tell SEO vs AEO vs GEO in practical terms | `pages/websites.txt`; `pages/rapid-design-websites.txt`; `pages/answer-engine-optimization.txt` | A "which one is right for me" table on Websites and SEO pages |
| Contract surprise | Ads page says no contracts; terms say 3 years auto-renewing | Section 3.2 above | Month-to-month, stated on every service page and the pricing page |
| What is included | Content, photos, printing, social, PPC, domain, plug-ins and compliance are all excluded by default in terms | `pages/terms.txt` Exclusions 1-14 | Each package lists inclusions and exclusions in plain language |
| No FAQ | No service page has an FAQ section | `pages/*.json` `h2`/`h3` (no FAQ heading on the 16 pages) | 4 to 6 real questions per page with `FAQPage` schema (PLAN 5.4) |
| Wrong form for the job | Social prospects are asked about a "New Site"; SEO prospects pick from a quote form that has no ads or AEO option | Section 5 | One form, one service list |
| First screen on mobile | The cookie banner and chat panel cover roughly the bottom 35-40% of the 390px first screen, below the H1. The quote bar and headline stay visible, but no body copy or secondary action is | `screenshots/home-mobile-fold.jpg`, `digital-advertising-mobile-fold.jpg` | Nothing covers the H1 or primary CTA on a 390x844 first screen |
| Unlabelled social and badge links | D3's own Facebook, LinkedIn, YouTube and Instagram icon links have no link text, and the chamber badges have empty alts, so screen-reader users hear nothing useful | `pages/home.json` `externalLinks`; `derived/axe-summary.csv` (`link-name` on all 30 pages) | Every icon link and badge has an accessible name; zero `link-name` violations |
| PR promised, not offered | Home hero lists "Content Creation, Strategy & PR"; there is no PR page in the nav | `pages/home.txt`; `pages/home.json` `nav` | A PR page if we sell it, otherwise we do not mention it |

---

## 9. Our standard: positioning and conversion commitments for Media Masters Group

Each line is a commitment the build team can test before launch.

| # | Commitment | How we measure it |
|---|---|---|
| 1 | **Same-business-day human reply** to every form, email and text received before 3 pm ET on a business day; next morning by 10 am otherwise | Timestamp log in the CRM; monthly median and 95th percentile published on the site |
| 2 | **Published starting-at prices** for every service, with three packages each, on `/pricing/` and repeated on each service page | Pricing present on 100% of service pages (QA checklist) |
| 3 | **Booking link** (live calendar, 15-minute call) as the primary CTA on every page, first screen at 390px and 1440px | Screenshot QA at both widths |
| 4 | **Named account lead**: the owner's name, photo and direct line on every page; every client gets one named lead in writing | Present in footer and About; named in every proposal |
| 5 | **Process timeline per service**: numbered steps with week counts (for example "Website: 6 steps, 4 to 8 weeks") | Present on 100% of service pages |
| 6 | **FAQ per page**: 4 to 6 real questions with `FAQPage` schema | Schema validator pass on every page |
| 7 | **Month-to-month terms, plain-English ownership** | One-page "What you own" and "How to cancel" linked from the footer and pricing page |
| 8 | **One 4-field lead form** (friction score 5 or less), one service list everywhere, confirmation page naming who replies and when | Form audit; friction score recomputed with the method in section 5 |
| 9 | **Text-us and click-to-call** in the mobile header | Screenshot QA |
| 10 | **Local by name**: at least three Delmarva towns in the body copy of every service page; nine location pages (PLAN 5.1) | Text count per page |
| 11 | **Proof in numbers**: one case study with two before-and-after metrics and one dated, named testimonial per service page | Content QA |
| 12 | **No hidden chat bot**: if we run chat, it is labelled, offers a human hand-off within one reply, and never covers the H1 or CTA on mobile | Screenshot QA at 390px |
| 13 | **Promises match the contract**: every claim on a marketing page ("no contracts", "you own it") is checked against our terms before publishing | Pre-launch legal and copy read-through |

---

## 10. Open questions

1. What does D3's form actually do after submit (thank-you page, auto-reply, reply time)? Not in corpus. A mystery-shop inquiry would answer it, but that is outside this desk review and needs the owner's decision on ethics (PLAN Appendix B).
2. Is the chat widget fully automated, and does it hand off to a human during business hours? Inferred bot from the robot avatar and vendor host; behaviour not in corpus.
3. Do D3's signed agreements actually use the published 3-year term for ad-only clients, given the "no long-term commitments" claim? Not in corpus; we must not assert it about any client.
4. What are D3's office hours? Not in corpus on the 16 pages.
5. Are the Semrush and WP Engine badges cited in PLAN section 2 still displayed anywhere? Not in this crawl.
6. What is the hospitality-tech line (booking engines, reservations, group housing, live web cams, Wi-Fi marketing) listed only in the contact dropdown? Revenue size and client list not in corpus. If it is significant, it is a moat we should not attack head-on.
7. Will we match D3 on AI chat for our own site, or position "a human answers" as the difference? Owner decision.
8. Which three packages and starting prices will we publish first (websites, SEO, social)? Owner decision, needed before the pricing page in build week 2 (PLAN 5.5).
9. Who is the named account lead on day one if the owner is the only staff member, and what reply-time promise can we keep during the summer season? Owner decision.

---

## Verification (2026-11-11)

A skeptic re-checked 27 claims against the corpus: **17 supported, 2 wrong, 7 overstated, 1 unsupported.** Corrections made:

- Wrong: AI Assistant Questionnaire friction is 21, not 20 (the required tools question is free text; section 5).
- Wrong: the footer "Facebook" link is a partner logo; D3 links its own Facebook, LinkedIn, YouTube and Instagram from icon links on every page. "Broken social link" gap replaced by "unlabelled social and badge links" (sections 4.1, 8).
- Overstated: "full ownership" versus terms section 7 is now an ambiguity, not a contradiction (summary 3, section 3.2).
- Overstated: social form wording now quotes the visible question and notes the hidden website labels (summary 5, section 5).
- Overstated: mobile cover reduced to roughly the bottom 35-40% of the first screen; H1 and quote bar stay visible (summary 6, section 8).
- Overstated: "no audit offer" now notes the indexable `/su/` audit checklist (section 4.3).
- Overstated: 2 of 28 case studies give a measured figure (Visiting Angels, Primo); only Visiting Angels states growth (summary 7, section 6.1).
- Overstated: team invisibility scoped to marketing pages; careers page shows client-success account managers (summary 9, section 8).
- Overstated: contact page says who replies but not when (section 5).
- Overstated: audits and "Ready in Minutes" rows now marked inferred tensions; only the contract-length contradiction is measured (section 3.2).
- Unsupported: required-field counts confirmed only for the footer (7) and Social (0) forms; other scores marked lower bounds (section 5).
- Added: `/site-down/` support form (3.2, 7); `/su/` benchmarks (4.3); headcount conflict 40 vs 35+ (summary 9, 2.3); clientservices@ and support@ emails and the `emails_seen` gap (4.1, 7); Salisbury chamber and Quiet Resorts badges (2.3); `/two-factor-authentication-.../` exposed to search (5); accessiBe overlay versus axe results and terms disclaimer (6.3); 5c retroactive discount repayment and 6b standing charge authority (summary 3, 3.2).
