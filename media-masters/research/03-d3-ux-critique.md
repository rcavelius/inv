# D3 Corp: UX, design and accessibility critique

Prepared for Media Masters Group LLC, 2026-11-11. Source: the d3corp.com crawl of 2026-10-14 stored in `media-masters/research/raw/d3/` (all paths below are relative to that folder unless they start with `media-masters/`). No web searches were used and d3corp.com was not fetched.

**How to read this.** "Measured" means a number taken from a corpus file or from pixels in a corpus screenshot. "Observed" means seen in a named screenshot. "Inferred" means my judgement from what is visible. Anything the corpus does not contain is marked "not in corpus".

**Coverage note.** I viewed all 30 `*-desktop-fold.jpg` and all 30 `*-mobile-fold.jpg` files, plus the full-page `home-desktop.jpg`, `home-mobile.jpg`, `services-desktop.jpg`, `websites-mobile.jpg` and `search-engine-optimization-mobile.jpg`. Two files in the brief are not in the corpus:
- `contact-us-mobile.jpg` does not exist. Screenshots cover only the 30 pages that axe tested (`derived/screenshots-index.md`). For the contact flow I used `pages/contact-us.json` and `pages/request-a-quote.json`.
- No case-study page has a screenshot. For the home page's case-study and testimonial sections I used crops of `home-mobile.jpg`, and for the case-study index I used `pages/case-studies.json`.

I read the three axe files `axe/home.json`, `axe/services.json` and `axe/blog-a-guide-to-website-seo.json` in full. The axe files store a node count and up to three sample nodes per rule, not every node.

---

## 1. Summary (for the owner)

1. **On a phone, D3's first screen is mostly furniture.** On every page tested, the yellow quote bar and logo header take 18% of the screen. A cookie banner takes another 36%, with the chat pop-up and accessibility button sitting on top of it. That leaves about 46% for the page itself (measured from `home-mobile-fold.jpg`, the same on all 30 mobile folds).
2. **"Request a Quote" is always visible. The phone number never is.** No mobile first screen shows the phone number. On the home page the first tappable number is about 61% of the way down the page (`home-mobile.jpg`).
3. **There is no price anywhere a buyer would look.** The menu has no Pricing item (`pages/home.json` nav), and no page states a dollar figure in the crawl. The copy only hints at terms: "No long-term commitments or contracts" on digital-advertising and "competitive prices" on print (`derived/services-and-company-pages.csv` pricing_signals). The only way to learn a price is a quote form with 13 questions (`pages/request-a-quote.json`).
4. **The blog looks old at first glance.** 15 of the 21 posts in this sample show a 2020 date right under the title, and 31 of all 52 posts carry a 2020 date_published (`derived/blog-posts.csv`). Every sampled post is credited to "D3 Support". The missing H1 is not just a blog problem: 145 of 157 pages have none (`derived/site-issues.md`).
5. **Accessibility is the clearest weakness.** Automated testing found 910 failing elements across 30 pages: 34 critical and 641 serious. Contrast failures alone number 458 (`derived/axe-rules-sitewide.md`, `axe/*.json`). That sits beside an accessiBe overlay on every page (`derived/tech.json`) and a dedicated Accessibility page that promises an accessible site (`pages/accessibility.txt`).
6. **The pages are slow to show their main content.** On mobile, the largest element took 15 to 30 seconds to appear on 5 of the 6 pages Lighthouse tested, and the home page took 3.6 s. Performance scores ran from 0.38 to 0.54 (`derived/lighthouse-summary.csv`).
7. **The look is bold but generic.** Service pages repeat one pattern: a retro illustration banner, then a large heading (grey on some pages, blue on others), with the chat pop-up on top. The banners (robot, astronaut, dinosaur in sunglasses, synthwave car) look AI-generated (inferred) and show no Delmarva places or people.
8. **Their best asset is real local work, and it is buried.** Named client sites appear in a slider on the second screen of the home page (Farmers Bank of Willards, Old Pro Golf, Seacrets and more, per `pages/home.json` image alts). The Meet Us page has no team photos in its image list (`pages/meet-us.json`).
9. **Several small signs suggest no one checks the site.** Two pairs of blog posts reuse the same hero photo. The rapid-design mockup shows what looks like lorem-ipsum placeholder text. A "Contact D3" link in the blog goes to the blog index instead of the contact page (`pages/blog-a-guide-to-website-seo.json` ctas).
10. **What this means for us:** if Media Masters Group's site shows clean phone screens, a price on every service, a tap-to-call button, real local photos, and zero serious accessibility errors (no overlay), each of those can be measured and checked against D3's. Section 9 lists the bars.

---

## 2. Five-second test, all 30 pages

Method: I looked at each first screen as a prospect would and asked four questions. What do they do? For whom? Where? What should I do next? Score 5 means all four are answered at a glance, and 1 means none are. Desktop is scored on `<slug>-desktop-fold.jpg` and mobile on `<slug>-mobile-fold.jpg`. "Where" is answered on no first screen: no first screen shows a town or state (observed in all 60 folds). Ocean City and Salisbury do appear lower down: in titles and footers (`pages/*.json` title, footer), in case-study and testimonial copy (the home text names Ocean City 4 times and Salisbury 6 times, `pages/home.txt`), and in the Meet Us body, which places the team "across Ocean City and Salisbury, MD" (`pages/meet-us.txt`). They are never above the fold.

The scores below are inferred: one reviewer's subjective judgement, not a measurement.

| # | Page (slug) | What they do | For whom | Where | Next step shown | Desktop | Mobile | Reason |
|---|---|---|---|---|---|---|---|---|
| 1 | home | Yes: "Full-Service Digital Marketing Agency" plus a list of 6 services | No | No | Request a Quote, View All Services (button half-hidden by the chat panel) | 3 | 2 | Clear category, no audience or place. On mobile the service list and button fall below the cookie banner |
| 2 | services | Yes: H1 "End-to-End Digital Marketing Services" plus service list | No | No | Request a Quote only | 3 | 2 | Desktop is clear. Mobile shows only "Services" over a TV illustration and half of the H1 |
| 3 | websites | Yes: "Build a Website That Grows Your Business" (an H2; the page has no H1 per `pages/websites.json`) | No | No | Request a Quote | 3 | 2 | Mobile shows only the "Websites" banner and the top of a laptop mockup |
| 4 | rapid-design-websites | Yes: "Launch Sites Quickly with D3's Rapid Web Design Service" | Implied: businesses "just starting out" (body copy) | No | Request a Quote | 3 | 2 | The dinosaur banner fills the mobile screen. The mockup shows placeholder text (observed in the desktop fold) |
| 5 | search-engine-optimization | Yes: "Expert SEO Services", with AEO/GEO named in the intro | No | No | Request a Quote | 3 | 2 | The desktop intro answers "what". Mobile is cut at the H1 |
| 6 | digital-advertising | Yes: "Digital Ad Services" | No | No | Request a Quote | 3 | 2 | Same template |
| 7 | email-marketing | Yes: "Email Marketing Services" | No | No | Request a Quote | 3 | 2 | Same template |
| 8 | graphic-design | Yes: "Creative Graphic Design Services" | No | No | Request a Quote | 3 | 2 | Blue banner text on a pastel shape background is weak (observed) |
| 9 | social-media-marketing | Yes: "Social Media Marketing & Management Services" | Implied: businesses unhappy with a current agency | No | Request a Quote | 3 | 1 | Mobile shows only the banner and the top of a collage. The H1 is off-screen |
| 10 | blog-a-guide-to-website-seo | Article title only | No | No | Request a Quote, Subscribe | 2 | 1 | Banner says "ID3AS Blog". Nothing says D3 is an agency. Mobile title is cut off |
| 11 | blog-are-you-breaking-up-the-brand-again | Article title only | No | No | Request a Quote | 2 | 1 | Same blog template |
| 12 | blog-choosing-a-color-scheme-for-your-brand | Article title only (dated April 6, 2020) | No | No | Request a Quote | 2 | 1 | The 2020 date is prominent |
| 13 | blog-connected-tv-advertising | Article title only (January 1, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 14 | blog-digital-advertising-for-modern-marketing | Article title only (August 11, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 15 | blog-email-marketing-enhance-your-message | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Hero photo is the same as #24 |
| 16 | blog-have-you-defined-your-social-voice | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 17 | blog-how-an-ai-assistant-can-turn-website-visitors-into-leads | Article title only (May 20, 2026) | Implied: website owners | No | Request a Quote | 2 | 1 | Most current topic. The chat bubble on the same screen is the product being described |
| 18 | blog-how-to-develop-an-effective-social-media-content-strategy | Article title only (June 16, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 19 | blog-important-seo-trends-to-watch | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | A 2020 "trends" post is shown as current |
| 20 | blog-optimizing-your-social-media-profiles | Article title only (June 23, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 21 | blog-search-engine-optimization | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Hero photo is the same as #22 |
| 22 | blog-search-engine-ranking-101 | Article title only (April 19, 2021) | No | No | Request a Quote | 2 | 1 | Same |
| 23 | blog-seo-social-when-worlds-collide | Article title only (July 28, 2025) | No | No | Request a Quote | 2 | 1 | Same |
| 24 | blog-taking-email-marketing-to-the-next-level | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 25 | blog-tips-for-avoiding-common-seo-mistakes | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | The hero image is narrower than the column (observed) |
| 26 | blog-using-original-content-to-drive-traffic-to-your-website | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 27 | blog-when-its-time-to-redesign-your-website | Article title only (February 25, 2026) | Implied: site owners | No | Request a Quote | 2 | 1 | Same |
| 28 | blog-why-do-people-unsubscribe-from-your-emails | Article title only (December 14, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 29 | blog-why-your-business-needs-email-marketing | Article title only (April 6, 2020) | No | No | Request a Quote | 2 | 1 | Same |
| 30 | blog-social-media-metrics-and-why-they-matter | Article title only (June 9, 2020) | No | No | Request a Quote | 2 | 1 | Same |

Averages (arithmetic on the inferred scores above): desktop 2.3 (69/30), mobile 1.3 (38/30). The 9 commercial pages average 3.0 on desktop and 1.9 on mobile. The 21 blog pages average 2.0 on desktop and 1.0 on mobile.

Caveat on the rubric: score 1 means "none of the four answered", but every blog mobile fold shows the "Request a Quote" bar (a next step) and part of the title (partly "what"). Applied consistently, the blog mobile scores should be at least 2, which would raise the mobile average to about 2.0. The conclusion (no page answers "for whom" and "where" on a phone) is unchanged.

**Our standard:** every Media Masters Group page scores 4 or 5 on a phone. The first 390x664 CSS-pixel screen names the service, the audience ("for Ocean City and Sussex County businesses") and the town, and shows one primary action plus tap-to-call. We verify with a five-second test on 5 people per money page before launch.

---

## 3. Above the fold on a phone

Method: each mobile fold is 1170x1992 px, which is a 390x664 CSS-pixel viewport at 3x. I measured the band boundaries from pixel colour changes in `home-mobile-fold.jpg`:
- Yellow quote bar: rows 0 to 144 (7.2%).
- Blue logo and menu header: rows 144 to 366 (11.1%).
- Cookie banner: rows 1281 to 1992 (35.7%).
- The chat teaser card (rows about 1656 to 1980), the round chat launcher and the accessiBe button all sit on top of the cookie banner.

All 30 mobile folds show the same header and overlay geometry (observed). Only the hero height differs.

| Page group (pages) | Primary CTA visible | Phone number visible / tappable | Header (sticky bars) | Hero image / banner | Cookie + chat + accessiBe overlays | Page content left | H1 fully visible |
|---|---|---|---|---|---|---|---|
| home | Yes: "REQUEST A QUOTE" bar; "View All Services" hidden under the banner | No / no (first tel link is about 61% down `home-mobile.jpg`, in the form intro) | 18.4% | 46% (H1 sits on the image) | 35.7% | 0% outside the hero | Yes |
| services | Yes: quote bar | No / no | 18.4% | 32% | 35.7% | 14% (half of the H1) | No |
| websites | Yes: quote bar | No / no | 18.4% | 32% | 35.7% | 14% (top of a laptop mockup) | No (there is no H1; the H2 is not visible) |
| rapid-design-websites | Yes: quote bar | No / no | 18.4% | 33% | 35.7% | 13% (top of the H1) | No |
| search-engine-optimization | Yes: quote bar | No / no | 18.4% | 33% | 35.7% | 13% (the H1 "Expert SEO Services") | Yes, just |
| digital-advertising | Yes: quote bar | No / no | 18.4% | 32% | 35.7% | 14% | Yes, just |
| email-marketing | Yes: quote bar | No / no | 18.4% | 32% | 35.7% | 14% | No |
| graphic-design | Yes: quote bar | No / no | 18.4% | 32% | 35.7% | 14% | No |
| social-media-marketing | Yes: quote bar | No / no | 18.4% | 33% | 35.7% | 13% (top of the collage image) | No |
| All 21 blog posts | Yes: quote bar | No / no | 18.4% | 32% ("ID3AS Blog" banner) | 35.7% | 14% (first line of the post title) | No (there is no H1; the title is an H2) |

What the screenshots show:
- **The phone number is tappable, just not here.** Every page has a `tel:+1-4102132400` link (`pages/*.json` telLinks), and the number is the same on all 157 pages (`derived/tech.json` phones_seen). It sits in the footer and, on home and service pages, in the "Let's Talk ID3AS" form intro. The mobile menu has no phone item (`pages/home.json` nav).
- **The page leaves less than half the screen for content.** Taking the sticky bars and overlays together, a first-time phone visitor sees 46% of the screen given to the page. Of that, 32 to 46 points are a decorative banner.
- **The chat teaser is wider than the cookie buttons it covers.** It is 906 of 1170 px wide (77%). It covers the left side of the cookie banner's Preferences / Reject / Accept buttons, which peek out at the right edge of every mobile fold (observed, e.g. `services-mobile-fold.jpg`). A visitor has to close the chat to reach "Reject".
- **Desktop has the same problem at a smaller scale.** In `home-desktop-fold.jpg`:
  - The header is 108 of 900 px (12%).
  - The cookie bar is 50 px (5.6%).
  - The open chat panel is about 400x245 px (7.6% of the viewport). It is open on load and covers the right side of the hero, including half of the "VIEW ALL SERVICES" button.
  - On service pages the panel cuts off body copy mid-sentence (`services-desktop-fold.jpg`, `email-marketing-desktop-fold.jpg`).

**Our standard:** on a 390x664 viewport, at least 65% of the first screen is page content. Sticky header is at most 64 CSS px (under 10%). The consent notice is at most 15% of the screen and never covers a CTA. No chat pop-up opens on its own. The header carries a 44x44 px tap-to-call button and one primary CTA. We verify with a mobile screenshot of every template at launch.

---

## 4. Design critique

### 4.1 Visual hierarchy
- **Home page.** The H1 competes with a busy 3D yellow car illustration. The six-item service list is set as large as sub-headings, so the eye gets seven equal-weight lines and no clear next step (`home-desktop-fold.jpg`). On mobile the service list and button are pushed below the banner and cookie notice (`home-mobile.jpg`, crop from row 1900).
- **Service pages: two headings in a row.**
  - A banner title in white or blue ("Search Engine Optimization") sits over an illustration.
  - Then a second, larger heading follows on white: a grey H1 on search-engine-optimization ("Expert SEO Services") and services, but a blue H1 on rapid-design-websites and social-media-marketing (observed in the desktop folds). websites and ai-assistant have no H1 at all (`derived/pages.csv` h1_count 0); the websites heading "Build a Website..." is a grey H2.
  - Then a near-equal H2 ("D3's Proven SEO/AEO Results").

  Three headings of nearly the same weight in one screen flatten the hierarchy (`search-engine-optimization-desktop-fold.jpg`, `services-desktop-fold.jpg`, `digital-advertising-desktop-fold.jpg`).
- **Blog posts: the hierarchy is inverted.** The site-wide banner "ID3AS Blog" is bold white. The article's own title is set in a thin light weight, so the generic label reads louder than the article (all `blog-*-desktop-fold.jpg`). Structurally, the title is an H2 and there is no H1 (`derived/pages.csv` h1_count 0 for all 21 posts).
- **The missing H1 is site-wide.** 145 of 157 pages have no H1 (`derived/site-issues.md`), including websites, ai-assistant, contact-us, request-a-quote, meet-us, case-studies and all 28 case studies, as well as the blog.
- **The CTA carries little weight.** "Request a Quote" is the only coloured button in the header. The desktop service-page first screen has no in-body CTA (observed on all 8 service desktop folds).

### 4.2 Typography
- **Two font services load on every page.** Adobe Typekit (`use.typekit.net`, `p.typekit.net`) and Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) load on all 157 pages (`derived/tech.json` fonts, third_party_hosts_pages). That is two font services for one design: extra requests and a risk of font swap.
- **Headings and body.** Headings use a tight geometric sans in heavy and thin weights. Body copy uses a light-weight sans at what looks like about 17 to 18 px on desktop (inferred from `services-desktop-fold.jpg`).
- **The navigation uses a third face** with wide letter-spacing (observed in all desktop folds).
- **The chat widget and cookie buttons use different system-looking faces** (observed: "Hi, how can we help you today?" and "Preferences / Reject / Accept All" in `home-desktop-fold.jpg`). At least three families are visible on one screen (inferred from the glyph shapes).
- **Light weights are used for long text.** Thin grey blog titles and light body text lower legibility on phones (observed in `blog-*-mobile-fold.jpg`). See the contrast measurements in section 7.

### 4.3 Imagery
- **Banners: stylised retro illustrations.**
  - A yellow car with a surfboard (home).
  - Stacked TVs reading "Designed. Developed. Delivered." (services).
  - A spaceship console (websites).
  - Halftone hands and a search bar (SEO).
  - A synthwave sports car (digital advertising).
  - Social logos on old TVs (social).
  - A dinosaur in sunglasses (rapid design).
  - Saturn, an astronaut and a brass robot (blog).

  Their style is consistent with AI image generation (inferred, not confirmed). None shows Delmarva, a D3 office or D3 staff (observed). The brass robot recurs as the chat avatar.
- **Blog post photos: generic stock (inferred), with repeats.**
  - `blog-search-engine-optimization` and `blog-search-engine-ranking-101` use the same "SEO" letters photo.
  - `blog-email-marketing-enhance-your-message` and `blog-taking-email-marketing-to-the-next-level` use the same blurred desk photo.

  These are observed in the respective desktop folds.
- **Real work is the best visual on the site.** The home slider shows monitor mockups of named client sites. Image alts include Farmers Bank of Willards, Jolly Roger Park, Partnership for the Delaware Estuary, Babe Ruth Birthplace & Museum, WMO, Boardwalk Hotel Group, Primo Family Restaurant, IDEC Elevator Products, Somerset County Tourism, Crabs to Go, Old Pro Golf, Chesapeake Country Byway, Seacrets, The Land Group, Castle in the Sand, Delaware Elevator, Remember Me Glass, Burley Oak and Chesapeake Health Care (`pages/home.json` images). The websites page shows the White Marlin Open site on a laptop (`websites-desktop-fold.jpg`).
- **Placeholder copy in a sales image.** The rapid-design mockup shows a "Welcome Message" block in what reads as lorem-ipsum placeholder text (`rapid-design-websites-desktop-fold.jpg`, inferred from the visible Latin-style words).
- **Team photos: not in corpus.** `pages/meet-us.json` lists 24 images: the logo, the robot, the chamber logo and platform partner logos. None is a person. The page's H2 promises "Meet the Team Behind D3", yet the only person named is founder John Gehrig, with no staff names or photos (`pages/meet-us.json`, `pages/meet-us.txt`).
- **Missing alt text.** 506 of 4,155 images (12%) have no alt text (`derived/site-issues.md`), including the Visiting Angels slide on home and unlabelled images on Meet Us.

### 4.4 Consistency and template feel
- **Every service page follows one recipe**, in this order (observed across the 8 service folds and `services-desktop.jpg`):
  1. Banner title
  2. Large heading (a grey or blue H1; an H2 on websites, which has no H1)
  3. Intro paragraphs
  4. Bullet list
  5. Case-study slider titled "…That Deliver"
  6. "Let's Talk ID3AS" form
  7. Subscribe
  8. Footer
  9. Partner logos
- **The slider heading appears twice per page in the markup.** Each service page's H2 list contains the slider heading twice, e.g. "Digital Marketing Services That Deliver" (`pages/home.json` h2, `pages/digital-advertising.json` h2). This suggests a template duplicated for responsive layouts (inferred).
- **CTA labels vary for the same action.** "Contact Us", "Contact D3", "Work with D3", "Contact us" (which goes to the quote page on `social-media-marketing`), "SUBMIT REQUEST" and "SUBMIT" (`pages/*.json` ctas).

### 4.5 Dated elements
- **Prominent 2020 dates on most posts.** 15 of the 21 blog posts here show a 2020 publish date beside a calendar icon. The other dates are one 2021, one 2022, two 2025 and two 2026 (`derived/blog-posts.csv` date_published, confirmed in the desktop folds). Across all 52 posts, 31 carry a 2020 date_published, while 40 show date_modified 2025-09-10. That suggests a bulk update that left the visible dates old (inferred). 2 posts have no date or author (`derived/blog-posts.csv`).
- **No author names.** All 21 posts are credited to "D3 Support" (`derived/blog-posts.csv` author).
- **Recycled anniversary branding.** The "30 years" logo lockup is the newest branding element (`pages/home.json` image `cropped-D3-Logo-30years-website`). A "25 Years of D3" blog post also exists (`INDEX.md`).
- **Carousels hide content.** The home page and service pages use carousels, and the home case-study slider has about 20 dots (observed in `home-desktop.jpg`). Each slide after the first is hidden by default.

### 4.6 The accessiBe widget and the AI assistant on mobile
- **accessiBe** (`acsbapp.com`, `cdn.acsbapp.com`) loads on all 157 pages (`derived/tech.json` accessibe_overlay true, script_hosts). It shows a round blue button bottom-left: 90x90 px in a 3x screenshot, about 30x30 CSS px (observed in every mobile fold).
- **The AI assistant** (`cdn.apigateway.co`, `lexicon-prod.apigateway.co`, `conversation-prod.apigateway.co`) shows an open teaser card, "Hi, how can we help you today? We respond immediately", plus a 55 CSS px round launcher bottom-right (observed). On desktop it opens as a full chat panel with a text field (`home-desktop-fold.jpg`).
- **Together with the cookie banner, the widgets cover the bottom 36% of every phone first screen.** The chat card overlaps the cookie buttons, and the two widget buttons overlap the cookie banner's own buttons (observed in all 30 `*-mobile-fold.jpg`). The cookie banner itself fails axe `aria-dialog-name` on all 30 pages: it is a dialog with no name (`axe/home.json` sample `#wpconsent-banner-holder`).

**Our standard:**
- One type family, self-hosted, at most two weights, body text at least 18 px on mobile at weight 400 or heavier.
- No stock or AI hero images. Every hero is a real photo of our team, a client or a Delmarva location.
- Every post shows a named author with a photo and a "last reviewed" date.
- No carousels for proof: proof is laid out statically.
- No overlay widget. Chat, if used, loads only after the visitor taps a 48 px launcher and never auto-opens.
- Cookie notice under 15% of the viewport, with Reject reachable without dismissing anything else.

---

## 5. Navigation and information scent

**Menu as crawled** (`pages/home.json` nav, desktop as seen in every `*-desktop-fold.jpg`):

| Top level | Children | Notes |
|---|---|---|
| Meet Us | Testimonials | |
| Services | AI Assistant, Answer Engine Optimization, Digital Advertising, Email Marketing, Graphic Design, Multimedia, Print, Search Engine Optimization, Social Media Marketing, Strategy, Custom Websites, Rapid Design Websites (12) | Alphabetical except that the two website services are appended at the end, out of order ("Custom Websites" would sort third) |
| Our Work | Case Studies, Videos | The "Our Work" item has no href (axe sample `<a class="nav-link dropdown-toggle">Our Work</a>` in `axe/home.json`) |
| Blog | | Labelled "ID3AS Blog" in the footer, "Blog" in the menu |
| Careers | Join Our Team | |
| Contact Us | | |
| REQUEST A QUOTE | | Yellow button, top right on desktop, full-width top bar on mobile |

Missing from the menu: Pricing, a page per industry, a page per location, About as its own label, and the phone number.

**Path to a price or a quote (mobile):**

| Goal | Taps | What happens | Evidence |
|---|---|---|---|
| See a price | Not possible | No pricing page in the nav or footer. The quote form is the only route. Pricing-adjacent copy exists only as terms: "No long-term commitments or contracts" (digital-advertising), "competitive prices" (print), and price terms in `/terms/` | `pages/home.json` nav and footer; `derived/services-and-company-pages.csv` pricing_signals |
| Request a quote | 1 tap, then a 13-question form | `/request-a-quote/` asks company, contact person, position, city, state, phone, email, preferred contact method, current website, timeframe, how you found D3, comments and service. That is 21 user-facing inputs counting each radio button (22 entries including the hidden `submit_to_system` field) | `pages/request-a-quote.json` forms (frmD3Forms748) |
| Service-page lead form | Scroll to "Let's Talk ID3AS" | rapid-design-websites and social-media-marketing carry a second, longer lead form with 5 unlabelled selects each (e.g. `preferred_method_of_contact`, `type_of_website`, `what_is_your_timeframe_for_a_new_site`) | `axe/rapid-design-websites.json` select-name, 5 nodes; `derived/axe-summary.csv` |
| Contact form | 2 taps (menu, Contact Us) | 5 fields: first name, last name, email, service, comments | `pages/contact-us.json` forms |
| Call | Scroll to the footer, or about 61% of the way down home, then 1 tap | Not in the header or menu | `home-mobile.jpg`, `pages/home.json` telLinks |
| Chat | 0 taps (auto-opened) | AI assistant | all mobile folds |

**Scent problems found:**
- **A "Contact D3" link that goes to the blog.** The blog CTA "Contact D3" points to `https://d3corp.com/ID3AS`, the blog index, not the contact page (`pages/blog-a-guide-to-website-seo.json` ctas, `axe/blog-a-guide-to-website-seo.json` link-in-text-block sample).
- **"Contact us" goes to the quote page** on `social-media-marketing` (`pages/social-media-marketing.json` ctas).
- **Stars on optional fields.** Form placeholders carry asterisks ("First Name*"), yet no field is marked `required` in the HTML (`pages/home.json` forms, required False on every field). Users are told fields are required that the browser does not enforce, and screen-reader users get no required state (inferred consequence). The text inputs do have programmatic labels ("First Name", "Last Name", "Company Name", "Phone", "Email"), possibly visually hidden (not in corpus). The `how_did_you_hear_about_d3` select and the services textarea have no label, and axe flags the select as critical (`pages/home.json` forms label; `axe/home.json` select-name).
- **Unfamiliar "ID3AS" branding.** "ID3AS Blog" and "Let's Talk ID3AS" are wordplay that a first-time visitor must decode (observed in the blog banners and `home-desktop.jpg`).

**Our standard:**
- Pricing is a top-level menu item, 1 tap from any page.
- Every service page shows a starting-at price above the fold or in the first section.
- The quote form has at most 5 fields (name, email or phone, service, budget range, message), with true `required` attributes.
- Tap-to-call sits in the sticky header.
- Every CTA label maps to exactly one destination.
- Zero links whose text names a different destination (checked by link audit before launch).

---

## 6. Trust signals and where they sit

| Signal | Where it appears | Position relative to CTAs | Evidence |
|---|---|---|---|
| Case study (named client, short story, "View Case Study") | Home: second screen. Services and service pages: near the bottom, just above the form | Above the main form CTA, so this is good placement. But it is a carousel and only one slide shows | `home-desktop.jpg`, `services-desktop.jpg` (Our Harvest), `search-engine-optimization-mobile.jpg` (Visiting Angels) |
| Testimonials ("Client Reviews" block: Old Pro Golf on the first slide, 5 stars, named person, truncated "…Read More"; further reviews in the markup, e.g. Madelyne Rowan, Salisbury Area Chamber of Commerce) | Home only, third block | Above the form. Only one review shows at a time. Arrows have no accessible name (axe button-name) | `home-mobile.jpg` crop from row 6900, `pages/home.json` text, `axe/home.json` |
| Testimonials page | Footer and Meet Us dropdown | Separate page with no H1 or H2, and set to "follow, noindex", so D3's review page is hidden from search | `pages/testimonials.json`, `derived/pages.csv` robots_meta and h1_count |
| Client logos | Not used as a logo strip. Clients appear only as monitor mockups in the slider | | `pages/home.json` images |
| Partner or platform logos (YouTube, Shopify, AWS, Adobe, WooCommerce, WordPress, Bing, Facebook, Google) | Bottom of every page, below the footer | After every CTA. These are vendor marks, not client proof | `home-desktop.jpg`, `pages/meet-us.json` images |
| Chamber and association logos (Ocean City Chamber, Salisbury Area Chamber, The Quiet Resorts) | Footer | After every CTA. Two of the links have no accessible name (axe link-name, 60 nodes site-wide) | `axe/home.json` link-name samples |
| Team photos | Not in corpus. Meet Us has no person images | | `pages/meet-us.json` images |
| Agency badges (Semrush, WP Engine noted in `media-masters/research/00-d3-recon-2026-10-13.md`) | Not seen in any screenshot or in `pages/home.json` images | | |
| Review count or rating widget | Not seen | | all folds |
| "30 years" | Logo, on every page | Top of every screen | all folds |

Assessment: D3's proof is real and local, but it is passive. It hides in carousels, below the fold, behind "Read More" truncation, and on a noindexed testimonials page with no headings. No first screen carries a rating, a review count, a named client or a face.

**Our standard:**
- Every money page shows within the first two screens on mobile: one named local client result with a number, one review with full name and source, the live Google rating and count, and the owner's photo and name.
- Proof is static (no carousel), and every review links to its source.

---

## 7. Accessibility

### 7.1 Totals (axe 4.10, 30 pages)
Measured by summing `axe/*.json`. The rule totals match `derived/axe-rules-sitewide.md`.

| Rule | Impact | Failing nodes | Pages affected (of 30) |
|---|---|---|---|
| color-contrast | serious | 458 | 30 |
| link-in-text-block | serious | 93 | 26 |
| region | moderate | 92 | 30 |
| aria-allowed-role | minor | 61 | 30 |
| heading-order | moderate | 61 | 30 |
| link-name | serious | 60 | 30 |
| aria-dialog-name | serious | 30 | 30 |
| landmark-complementary-is-top-level | moderate | 21 | 21 |
| button-name | critical | 18 | 9 |
| select-name | critical | 16 | 8 |
| **Total** | | **910** | |

By impact: critical 34, serious 641, moderate 174, minor 61. Every page has at least 7 failing rules, and the 8 service pages plus home have critical failures (`derived/axe-summary.csv`). Lighthouse accessibility scores were 0.77 to 0.84 on the 6 pages it tested (`derived/lighthouse-summary.csv`).

### 7.2 The critical and serious failures in plain language

| Rule | What it means for a visitor | Sample node (axe file) |
|---|---|---|
| button-name (critical, 18) | Slider arrows are icon-only buttons with no text, so a screen reader announces only "button". Blind visitors cannot tell what they do | `<button class="slider-arrow prev fa fa-chevron-left"></button>` (`axe/home.json`, `axe/services.json`) |
| select-name (critical, 16) | Drop-downs in the lead forms have no label, so a screen-reader user hears a list of options with no question. This is on the forms D3 uses to win business | `<select name="how_did_you_hear_about_d3">` (`axe/home.json`). Also `preferred_method_of_contact`, `type_of_website`, `what_is_your_timeframe_for_a_new_site` (`axe/rapid-design-websites.json`) |
| color-contrast (serious, 458) | Text is too faint against its background for people with low vision, older eyes, or anyone in sunlight. Failing nodes start with the main menu itself | `<a href="https://d3corp.com/meet-us/" class="nav-link dropdown-toggle">Meet Us</a>` and the Services and Our Work items (all three files) |
| link-in-text-block (serious, 93) | Links inside paragraphs differ from body text only by colour, so colour-blind readers cannot find them | `<a href="https://d3corp.com/ID3AS" …>Contact D3</a>` (`axe/blog-a-guide-to-website-seo.json`). `<a href="https://d3corp.com/contact-us/">Work with D3</a>` (`axe/digital-advertising.json`) |
| link-name (serious, 60) | Image links with no text: the chamber and resort logos in the footer are announced as bare links | `<a href="https://salisburyarea.com/" target="_blank" class="chamber">` (all three files) |
| aria-dialog-name (serious, 30) | The cookie banner is a dialog with no name, so screen-reader users land in an unlabelled box | `<div class="wpconsent-banner-holder …" role="dialog">` (all three files) |

Moderate issues worth knowing:
- **heading-order (61).** H6 is used for slide titles and "Our Partners", and H4 for service names (`axe/services.json`).
- **region (92).** Content sits outside landmarks, including accessiBe's own injected link `<a href="https://accessibe.com/blog/knowledgebase/screen-reader-guide" … data-acsb="sr-trigger">` (`axe/home.json`). The overlay adds its own failure.
- **landmark-complementary-is-top-level (21 blog pages).** The blog sidebar `<aside>` is nested inside another landmark.

Beyond the 30 axe pages: 506 of 4,155 images site-wide (12%) have no alt text (`derived/site-issues.md`), and 145 of 157 pages have no H1, which leaves screen-reader users without a page heading to jump to.

### 7.3 The overlay irony
- **An overlay on every page.** The accessiBe script loads on all 157 pages (`derived/tech.json` accessibe_overlay true). Its injected prompt, "Press Alt+1 for screen-reader mode", starts 155 of the 157 captured page texts; it is absent from `pages/case-study-georges-beverage-company.txt` and `pages/video-donate-to-bism-today.txt`.
- **A page promising accessibility.** It has its own Accessibility page in the footer. One sentence from it: "We are actively working to increase the accessibility and usability of our website for everyone." (`pages/accessibility.txt`). The statement names no WCAG version or level and no audit date, and it contains a stray raw URL, "https://d3corp.com/social-marketing" (`pages/accessibility.txt`).
- **Yet the same 30 pages fail 910 automated checks**, 458 of them contrast. Automated tools catch only part of WCAG, so the true count of barriers is likely higher (inferred).
- **What this means for prospects.** A prospect who sells to the public and worries about ADA demand letters is buying from an agency whose own site would not pass a basic audit. D3 also publishes "What Does ADA Compliance Mean for You" on its blog (`INDEX.md`). We can make accessibility a visible, verifiable differentiator without naming D3.

### 7.4 What the screenshots show about contrast and text size
Contrast ratios were estimated from screenshot pixels with the WCAG formula. JPEG compression shifts colours slightly, so treat these as estimates.

| Element | Colours (sampled) | Ratio | WCAG AA (4.5:1 normal text) | Screenshot |
|---|---|---|---|---|
| White nav text on header blue | #FFFFFF on rgb(4,130,204) | about 4.1:1 | Fails for the ~19 px regular-weight nav (consistent with axe) | `home-desktop-fold.jpg` |
| Blog post date | rgb(143,143,143) on white | about 3.2:1 | Fails | `blog-a-guide-to-website-seo-desktop-fold.jpg` |
| Subscribe field placeholders (white on grey input) | white on rgb(143,143,143) | about 3.2:1 | Fails | `blog-a-guide-to-website-seo-desktop-fold.jpg` sidebar |
| Blog title (thin weight) | darkest stroke rgb(54,54,54) on white | about 12:1 at the darkest pixel | Passes on colour, but the hairline weight makes it read lighter (inferred) | same |
| Graphic Design banner title | blue text on teal and peach shapes | not measurable (patterned background) | Visibly weak | `graphic-design-desktop-fold.jpg` |
| Form placeholders on the dark "Let's Talk" photo | light text on a dark photo | not measurable | The text inputs have programmatic labels that are not visible here (possibly visually hidden), so the placeholders are the only visible labels and vanish on typing (inferred). The select and the textarea have no label at all (`pages/home.json` forms) | `home-mobile.jpg` crop from row 11900 |

Text size: body copy reads at roughly 17 to 18 px on desktop in a light weight (inferred from `services-desktop-fold.jpg`). The cookie banner text on mobile is large, about 16 to 17 CSS px, which is partly why it takes 36% of the screen (measured band height, `home-mobile-fold.jpg`).

**Our standard:**
- Zero axe critical or serious violations on every page, checked in CI on every build.
- Lighthouse accessibility at least 0.95 on every template.
- Every text and UI pair at or above 4.5:1 (3:1 for 24 px and up).
- In-text links underlined.
- Every form control has a visible `<label>`.
- No accessibility overlay script.
- A manual keyboard and screen-reader pass (VoiceOver iOS, NVDA) on the 6 money pages before launch.
- An accessibility statement that names the WCAG 2.2 AA target, the date of the last audit and its results.

---

## 8. Perceived performance

Measured from `derived/lighthouse-summary.csv` and `lighthouse/*-mobile.json` (simulated mobile).

| Page | Performance | FCP | LCP | Time to Interactive | Speed Index | Total Blocking Time | Page weight | Third-party main-thread time |
|---|---|---|---|---|---|---|---|---|
| home | 0.54 | 2.7 s | 3.6 s | 26.9 s | 5.1 s | 2,050 ms | 8,166 KiB | 1,730 ms |
| services | 0.42 | 2.6 s | 15.1 s | 23.9 s | 5.7 s | 1,320 ms | 4,215 KiB | 1,500 ms |
| websites | 0.38 | 2.6 s | 30.3 s | 30.5 s | 8.4 s | 1,480 ms | 5,464 KiB | 1,520 ms |
| rapid-design-websites | 0.45 | 2.6 s | 18.8 s | 25.0 s | 5.4 s | 1,000 ms | 5,182 KiB | 1,520 ms |
| blog-a-guide-to-website-seo | 0.44 | 2.5 s | 26.9 s | 26.9 s | 5.4 s | 1,150 ms | 4,491 KiB | 1,290 ms |
| blog-when-its-time-to-redesign-your-website | 0.40 | 2.5 s | 25.4 s | 25.4 s | 6.7 s | 1,360 ms | 4,985 KiB | 1,460 ms |

What this feels like, tied to the screenshots (inferred):
- **The visitor sees chrome first, then waits.** The first paint at about 2.5 s is likely the header, the banner title and the cookie bar. The largest element arrives 15 to 30 s later on 5 of 6 pages, which on these templates is likely the full-width banner illustration or a below-banner image (the LCP element is not recorded in the corpus).
- **The page looks ready long before it works.** Time to Interactive of 24 to 31 s, with 1.0 to 2.1 s of blocking time, means taps on "Request a Quote" or the menu may lag while the chat, overlay, tag manager and reCAPTCHA scripts run.
- **Every page carries the same third-party stack.** About 1.47 MB of unused JavaScript per page is reported on all 6 pages. 17 third-party hosts load on every page (`derived/tech.json` third_party_hosts_pages): Google Tag Manager, Analytics, reCAPTCHA, accessiBe, the apigateway chat, Typekit, Google Fonts and jsDelivr.
- **Layout shift is low.** CLS was 0.031 to 0.049, so pages do not jump. Their one measured strength.
- **Server response is fast.** 60 to 100 ms for the root document, so the slowness is front-end weight, not hosting.

**Our standard (per `media-masters/PLAN.md` §5.2, §5.3, §5.5):**
- Lighthouse mobile performance at least 95 on money pages (at least 90 on all four scores as a launch gate).
- LCP under 2.5 s, INP under 200 ms, CLS under 0.1 (Core Web Vitals green).
- Under 100 KB of CSS and JS per page.
- No third-party scripts above the fold.
- Self-hosted fonts.
- Total page weight under 1 MB on mobile.

---

## 9. Our standard: weakness-to-bar map

| # | D3 weakness (evidence) | Media Masters Group standard (measurable) | How we verify |
|---|---|---|---|
| 1 | Only 46% of the phone first screen is page content (`home-mobile-fold.jpg`) | 65% or more of the 390x664 first screen is content. Sticky header 64 CSS px or less | Template screenshots at launch |
| 2 | Cookie banner takes 35.7% of the first screen and is covered by the chat card | Consent UI 15% or less of the viewport. Reject reachable in 1 tap with nothing on top | Mobile screenshot plus manual tap test |
| 3 | Chat auto-opens over content on desktop (7.6% of viewport) and mobile | No auto-opening widgets. Chat (if any) only after a tap on a launcher of at least 48 px | Screenshot review |
| 4 | No phone number on any mobile first screen; first tel link about 61% down home | Tap-to-call of at least 44x44 px in the sticky header on every page | Template check |
| 5 | Five-second test: average 1.3 of 5 on mobile | Every money page scores 4 or more on mobile with 5 testers | Five-second test log |
| 6 | No pricing page; quote form has 13 questions (`pages/request-a-quote.json`) | Pricing in the top nav (1 tap). Starting-at price on every service page. Quote form 5 fields or fewer | Nav audit, form audit |
| 7 | Required stars with no `required` attribute (`pages/home.json` forms) | Every required field has a `required` attribute and a visible label | axe plus manual check |
| 8 | Mislabelled links ("Contact D3" goes to the blog) | Zero links whose label names a different destination; one label per destination | Link audit script |
| 9 | 21 of 21 blog posts have no H1; titles set in thin type (`derived/pages.csv`) | Exactly one H1 per page; article titles at weight 600 or heavier | Crawl check |
| 10 | 15 of 21 posts show a 2020 date; all authored "D3 Support" | Named author with photo on every post; "last reviewed" date within 12 months | Content audit, quarterly |
| 11 | Stock and AI-style imagery; duplicated hero photos; placeholder text in a mockup | Real photos only, no image reused as a hero on two pages, no placeholder text anywhere | Image inventory, `lorem` grep before deploy |
| 12 | No team photos on Meet Us (`pages/meet-us.json`) | Owner and every team member pictured with name and role | Page review |
| 13 | Proof hidden in carousels and below the fold | One named client result with a number plus one sourced review within the first two mobile screens of every money page; no carousels | Screenshot review |
| 14 | 910 axe violations (34 critical, 641 serious) across 30 pages | 0 critical and 0 serious axe violations on every page | axe in CI on every build |
| 15 | 458 contrast failures, including the main nav (about 4.1:1) | Every text pair at 4.5:1 or better (3:1 at 24 px and up) | axe plus design-token contrast check |
| 16 | Unlabelled selects and icon buttons in lead forms and sliders | Every control has an accessible name; visible labels, not placeholders | axe plus screen-reader pass |
| 17 | accessiBe overlay plus an Accessibility page promising progress | No overlay. Statement names WCAG 2.2 AA, the audit date and the results | Statement page review |
| 18 | Lighthouse mobile performance 0.38 to 0.54; LCP up to 30.3 s | Performance 95 or more on money pages; LCP under 2.5 s; INP under 200 ms; CLS under 0.1 | Lighthouse CI on each deploy |
| 19 | 4.2 to 8.2 MB pages; 1.47 MB unused JS; 17 third-party hosts | Pages under 1 MB; CSS+JS under 100 KB; no third-party script above the fold | Lighthouse budget |
| 20 | Two font services (Typekit plus Google Fonts) and 3 or more visible families | One self-hosted family, 2 weights at most, `font-display: swap` | Network panel check |
| 21 | Inconsistent CTA labels and "ID3AS" jargon | One CTA vocabulary (for example "Get a price", "Call now") used site-wide | Copy style sheet |

---

## 10. Screenshot and file index (cited)

Screenshots (all in `media-masters/research/raw/d3/screenshots/`):

| File | Used for |
|---|---|
| home-desktop-fold.jpg | Hero hierarchy, chat panel coverage, cookie bar, nav contrast sample |
| home-mobile-fold.jpg | Band measurements (18.4% header, 35.7% cookie, 46% content), widgets |
| home-desktop.jpg | Full page order: slider, testimonial, form, partner logos |
| home-mobile.jpg (crops from rows 1900, 6900, 11900) | Case study and testimonial placement, first phone number, form placeholders |
| services-desktop-fold.jpg, services-mobile-fold.jpg | Five-second test, double heading |
| services-desktop.jpg | Service template order, case-study slider (Our Harvest) |
| websites-desktop-fold.jpg, websites-mobile-fold.jpg | White Marlin Open mockup, five-second test |
| websites-mobile.jpg | Full mobile template order |
| rapid-design-websites-desktop-fold.jpg, rapid-design-websites-mobile-fold.jpg | Dinosaur banner, placeholder text in mockup |
| search-engine-optimization-desktop-fold.jpg, search-engine-optimization-mobile-fold.jpg | Triple heading, five-second test |
| search-engine-optimization-mobile.jpg | Visiting Angels case study above the form |
| digital-advertising-desktop-fold.jpg, digital-advertising-mobile-fold.jpg | Synthwave banner, template |
| email-marketing-desktop-fold.jpg, email-marketing-mobile-fold.jpg | Chat panel cutting off copy |
| graphic-design-desktop-fold.jpg, graphic-design-mobile-fold.jpg | Weak banner title contrast |
| social-media-marketing-desktop-fold.jpg, social-media-marketing-mobile-fold.jpg | Mobile H1 off-screen |
| blog-a-guide-to-website-seo-desktop-fold.jpg, -mobile-fold.jpg | Blog template, date and input contrast samples |
| blog-are-you-breaking-up-the-brand-again-desktop-fold.jpg, -mobile-fold.jpg | Blog template |
| blog-choosing-a-color-scheme-for-your-brand-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-connected-tv-advertising-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-digital-advertising-for-modern-marketing-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-email-marketing-enhance-your-message-desktop-fold.jpg, -mobile-fold.jpg | Duplicate hero photo |
| blog-have-you-defined-your-social-voice-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-how-an-ai-assistant-can-turn-website-visitors-into-leads-desktop-fold.jpg, -mobile-fold.jpg | 2026 post, chat widget beside the article about it |
| blog-how-to-develop-an-effective-social-media-content-strategy-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-important-seo-trends-to-watch-desktop-fold.jpg, -mobile-fold.jpg | 2020 "trends" |
| blog-optimizing-your-social-media-profiles-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-search-engine-optimization-desktop-fold.jpg, -mobile-fold.jpg | Duplicate hero photo |
| blog-search-engine-ranking-101-desktop-fold.jpg, -mobile-fold.jpg | Duplicate hero photo |
| blog-seo-social-when-worlds-collide-desktop-fold.jpg, -mobile-fold.jpg | 2025 date |
| blog-social-media-metrics-and-why-they-matter-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-taking-email-marketing-to-the-next-level-desktop-fold.jpg, -mobile-fold.jpg | Duplicate hero photo |
| blog-tips-for-avoiding-common-seo-mistakes-desktop-fold.jpg, -mobile-fold.jpg | Undersized hero image |
| blog-using-original-content-to-drive-traffic-to-your-website-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-when-its-time-to-redesign-your-website-desktop-fold.jpg, -mobile-fold.jpg | 2026 date |
| blog-why-do-people-unsubscribe-from-your-emails-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |
| blog-why-your-business-needs-email-marketing-desktop-fold.jpg, -mobile-fold.jpg | 2020 date |

Not in corpus: `contact-us-mobile.jpg` and any case-study screenshot.

Data files cited: `derived/screenshots-index.md`, `derived/axe-summary.csv`, `derived/axe-rules-sitewide.md`, `axe/home.json`, `axe/services.json`, `axe/blog-a-guide-to-website-seo.json` (read in full), `axe/rapid-design-websites.json` and `axe/digital-advertising.json` (samples), `derived/lighthouse-summary.csv`, `lighthouse/*-mobile.json`, `derived/tech.json`, `derived/pages.csv`, `derived/blog-posts.csv`, `pages/home.json`, `pages/meet-us.json`, `pages/contact-us.json`, `pages/request-a-quote.json`, `pages/testimonials.json`, `pages/case-studies.json`, `pages/accessibility.txt`, `pages/websites.json`, `pages/social-media-marketing.json`, `pages/blog-a-guide-to-website-seo.json`, `INDEX.md`, `media-masters/PLAN.md`, `media-masters/research/00-d3-recon-2026-10-13.md`.
