# D3 Corp: off-page and local presence audit

Prepared 2026-11-11 for Media Masters Group LLC. Assignment: offpage.

**How to read this document.** Two kinds of evidence are used and are always labelled:

- **Corpus (measured):** the 2026-10-14 crawl of d3corp.com at `media-masters/research/raw/d3/`. File and field are cited.
- **Search (observed):** WebSearch results run on 2026-11-11. WebSearch approximates Google but is not Google, and it returns titles, URLs and short snippets, not the live listing pages. Each search figure gives its query number from the Queries log (section 9), for example `[Q9]`. Every search figure in this document means "observed on 2026-11-11 via WebSearch (approximates Google)".
- **Recon (carried forward, not re-confirmed):** figures from `research/00-d3-recon-2026-10-13.md` that this run could not see again. They are labelled `[recon 10-13]`.

**Important limit on this run.** The shared web-search budget for this session ran out after 30 search calls (27 ran, 1 was rejected by the search tool (Q22), and 2 were refused because the session budget was used up (Q29, Q30)). So the **Google Business Profile check, the Bing Places and Apple Maps check, the YouTube channel check, the remaining news-outlet checks, and all five AI-answer prompts were not run**. Those cells say "not run" below. Section 10 lists them as the first follow-up tasks. Nothing has been filled in by guesswork.

---

## 1. Summary (for the owner)

1. **D3 is well rooted in both local chambers.** The Ocean City chamber has a member listing (`chamber.oceancity.org/list/member/d3-618`) and held a ribbon-cutting for D3's 30th anniversary [Q5, Q11, Q20]. Search snippets also suggested D3 built the Ocean City chamber's website [Q7, Q26]; this is **search-only and unverified**, and the matching footer wording also appears on d3corp.com itself (see section 5). In Salisbury the evidence is first-party (corpus, measured): D3's own case study says it runs the chamber's weekly Friday and Wednesday member emails, the SBYBIZ Facebook page and the Business Profile videos, that COO Jay Bosley sits on the SACC 2023 Voting Council, that Jenni Pastusak chairs the Marketing & Media Committee, and that D3 schedules bi-monthly member presentations (`pages/case-study-salisbury-area-chamber-of-commerce.txt`). A 2025 board seat for Bosley is **search-only** [Q8]. This is D3's strongest off-page asset, and we cannot copy it quickly.
2. **Search suggests they won two state awards in November 2025 (search-only, not verified against the source article).** Snippets say that at the 44th Maryland Travel & Tourism Summit they took Small Business of the Year and Best Website, for the Chesapeake Country All-American Road site [Q23, Q25]. The "44th" and the award-to-site attribution must be confirmed on sbybiz.org/?p=51234 before anyone cites them. The corpus does confirm D3 built the CCAAR site (`pages/case-study-chesapeake-country-byway.txt`; `pages/home.json` → `images` alt "Monitor showing Chesapeake Country Byway home page"). Their own site does not mention either award: a grep of all 157 crawled pages finds no "Small Business of the Year" or "Tourism Summit". They have earned proof and are not using it.
3. **Their review position is unknown until Google is checked.** No star rating was confirmed this run, and the Google Business Profile was not checked (Q29 refused). The recon (2026-10-13) saw 5.0 from 35 reviews on chamberofcommerce.com and 46 reviews on BestProsInTown [recon 10-13]. Clutch says "Not yet reviewed" [Q13], and no Yelp page [Q5] or BBB profile [Q12] surfaced. Clutch is a clear gap; whether reviews overall are thin cannot be said until GBP is captured.
4. **Their listing name appears in 5 variants (search-observed):** D3, D3Corp, D3 Corporation, d3 group and d3 (section 2). Social handles and customer usage ("D3 Corp.") vary further but are counted separately. One directory still shows an old address, 9927 Stephen Decatur Highway #G16, and warns that the business "may have ceased operations or relocated" [Q5, Q20].
5. **Their directory listings contradict each other on price.** WP Engine lists a typical budget "under $10,000" [Q16], while Clutch lists a minimum project of "$10,000+" [Q13]. Staff counts range from 10–49 to 51–200 across directories [Q13, Q15, Q16].
6. **Their site gives search engines and AI tools no local-business data.** Not one of the 157 pages has `LocalBusiness` schema or `sameAs` links. The home page Organization schema holds only the name "D3", a URL and a logo, with no address or phone (`pages/home.json` → `jsonld`; `derived/pages.csv` → `jsonld_types`). Fixing this on our own site costs almost nothing, and it is the one area where we can be cleaner than D3 from day one.
7. **They are listed on the partner directories we were told about:** Semrush Agency Partners (many Ocean City category pages), WP Engine ("d3 group"), Flywheel's agency directory, TechBehemoths (one of only two Ocean City web-design firms listed), Clutch and BestProsInTown [Q13, Q15, Q16, Q17]. None of these badges is displayed on d3corp.com.
8. **We found no event sponsorships in search** [Q24], and we found no news coverage outside the chamber's own business journal (sbybiz.org) and the award stories [Q23]. Their earned-media footprint is narrow, so a steady run of guest columns would stand out.
9. **Their social accounts are linked from the footer** (Facebook /D3DoesIt, LinkedIn /company/d3corp, YouTube /c/D3CorpOceanCity, Instagram /d3corp), but no search result showed a follower count for any of them [Q6, Q18, Q19].
10. **Where we can win:** reviews, citation hygiene, schema, directory profiles that carry reviews, and AI-answer visibility. All of these are cheap and fast. We should **not** expect to out-chamber D3 in year one. Join both chambers and show up, but compete on reviews and clarity (section 8).

---

## 2. NAP consistency (name, address, phone, website)

Reference NAP, taken from D3's own footer (`pages/home.json` → `footer`):
**D3** · 12319 Ocean Gateway, Suite 202, Ocean City, Maryland 21842 · 212 West Main Street, Salisbury, Maryland 21801 · 410-213-2400 · https://d3corp.com/

| # | Listing | Name variant | Address shown | Phone shown | Website shown | Source | Flag |
|---|---|---|---|---|---|---|---|
| 1 | d3corp.com footer, all 157 pages | D3 | 12319 Ocean Gateway, Suite 202, Ocean City MD 21842; 212 West Main Street, Salisbury MD 21801 (no suite) | 410-213-2400 (`derived/tech.json` → `phones_seen`: 157 pages) | d3corp.com | Corpus | Reference. The Salisbury address has no suite number; see row 12 |
| 2 | d3corp.com schema (Organization) | D3 | none | none | https://d3corp.com | `pages/home.json` → `jsonld` | **No address, phone or sameAs in schema** |
| 3 | d3corp.com page titles | D3 / "D3 Corp." in a client testimonial | n/a | n/a | n/a | `pages/home.json` → `title`; `pages/testimonials.txt` | Brand on site is "D3"; customers write "D3 Corp." |
| 4 | Ocean City Chamber member listing (chamber.oceancity.org/list/member/d3-618) | D3 | 12319 Ocean Gtwy unit 202, Ocean City MD 21842 (ribbon-cutting event listing) | not seen in snippet | not seen | [Q5, Q11, Q20] | Hours shown: Mon–Fri 8am–5:30pm, "24 hr. emergency service" [Q20]. "Unit 202" vs "Suite 202" is a minor variant |
| 5 | BestProsInTown (bestprosintown.com/md/ocean-city/d3corp-/) | D3Corp | 12319 Ocean Gateway #202, Ocean City | not seen | not seen | [Q1, Q9] | "#202" vs "Suite 202"; name variant |
| 6 | Clutch (clutch.co/profile/d3corp) | D3Corp | 12319 Ocean Gateway, Suite 202 | not seen | not seen | [Q13] | Name variant. Min project "$10,000+", employees "10 - 49" |
| 7 | WP Engine Agency Directory (wpengine.com/agency-directory/d3-group) | **d3 group** | Ocean City, Maryland | not seen | not seen | [Q16] | **Name variant is unique to this listing**. Budget "under $10,000" **conflicts with Clutch** |
| 8 | Flywheel agency partners (getflywheel.com/agency-partners-directory/d3) | d3 | not seen | not seen | not seen | [Q4] | Snippet title shows "26-50 employees" (getflywheel.com/?p=34540), a third staff band |
| 9 | Semrush Agency Partners (agencies.semrush.com/list/…/ocean-city) | D3 | Ocean City | not seen | not seen | [Q4, Q17] | Listed under many category pages. One search summary mentioned a 3.3 rating on a localized page, which we could not tie to a specific URL: **unverified** |
| 10 | TechBehemoths (techbehemoths.com/companies/web-design/ocean-city) | D3Corp | Ocean City | not seen | not seen | [Q15] | Name variant |
| 11 | Regional Directory (regionaldirectory.us/md/1410071.htm) | **D3 Corporation** | **9927 Stephen Decatur Highway # G16, Ocean City MD 21842** | 1-410-213-2400 | **www.d3corp.com** | [Q5, Q20] | **Stale address**; the listing says the business "may have ceased operations or relocated"; www variant |
| 12 | Salisbury office, 212 W Main St | (another firm) | 212 W Main Street, **Suite 205**, Salisbury MD 21801 is listed for "SU Design Agency" on insidea.com | n/a | n/a | [Q3] | **Unverified.** The building is shared, and D3's own footer gives no suite number. One search summary said it could not tie this address to D3. Check whether D3 has a Salisbury GBP and which suite it uses |
| 13 | Facebook | D3DoesIt (handle) | not in corpus | not in corpus | n/a | Corpus: `pages/home.json` → `externalLinks`; search did not surface the page [Q6] | Handle differs from the brand name |
| 14 | LinkedIn | d3corp (handle) | not seen | not seen | d3corp.com (via LeadIQ) | Corpus footer; [Q6, Q18] | LeadIQ shows conflicting staff counts (51–200 and "approximately 62") [Q16] |
| 15 | ZoomInfo (zoominfo.com/c/d3corp/33984422) | D3Corp | not seen | not seen | not seen | [Q15] | "11-50 employees". A second ZoomInfo "D3" record appears to be an unrelated vacation-rental company [Q18] |
| 16 | Google Business Profile | not run | not run | not run | not run | Budget exhausted (Q29) | **Open question** |
| 17 | Bing Places / Apple Maps | not run | not run | not run | not run | Budget exhausted (Q30) | **Open question** |
| 18 | Yelp | none found | none found | none found | none found | [Q5] | Recon saw Yelp at 4.0 from 3 reviews through Yahoo Local [recon 10-13]; not re-seen |
| 19 | BBB | none found | n/a | n/a | n/a | [Q12] | The only "D3" BBB profile returned is D3 Technologies, Springfield MO (a different company) |
| 20 | Alignable, chamberofcommerce.com, MapQuest, mdtourism.org | none surfaced | n/a | n/a | n/a | [Q10, Q11, Q20, Q21] | Recon listed all four with direct URLs [recon 10-13]; see section 10, item 5 for the checklist. This run's search did not surface them, which means "not confirmed", not "absent" |

**Inconsistencies flagged**

- Name: **5 listing-name variants (search-observed): D3, D3Corp, D3 Corporation, d3 group, d3.** Not counted: the social handles (section 6) and customer usage "D3 Corp." in a testimonial (`pages/testimonials.txt`).
- Address: one stale address (9927 Stephen Decatur Hwy #G16). The suite is written three ways: "Suite 202", "#202" and "unit 202". The Salisbury office has no suite number on D3's own site.
- Website: `www.d3corp.com` on the Regional Directory and on one sbybiz link [Q3], versus the site's own `https://d3corp.com`. The crawl recorded the www host as returning status 200 (`derived/tech.json` → `www_variant_status`). The corpus does not show whether that 200 came after a redirect.
- Phone: consistent wherever a phone was seen (410-213-2400).
- Hours: the only hours seen are on the chamber listing (Mon–Fri 8–5:30, 24-hour emergency) [Q20]. The `/contact-us/` page lists no hours, only an after-hours email, emergency@d3corp.com (`pages/contact-us.json` → `emails`). Note that `derived/tech.json` → `emails_seen` omits emergency@d3corp.com, so tech.json is incomplete for emails.
- Firmographics: price band (under $10k vs $10k+) and staff count (10–49, 11–50, 26–50, 51–200, "over 40" on `/meet-us/`) conflict across listings.
- Tenure on their own site: the careers page says "over 27 years of established expertise" (`pages/career-digital-marketing-specialist.txt`) while the brand claims 30 years (30th anniversary; logo file `cropped-D3-Logo-30years-website.png` in `pages/home.json` → `jsonld`). Measured inconsistency on d3corp.com itself.
- Entity schema: besides the bare Organization node, the home page carries an `Article` node whose author is "D3 Support" (`pages/home.json` → `jsonld`). An Article on a home page with a generic support author is a weak entity signal.

**Our standard:** one legal-and-brand name ("Media Masters Group"), one address format and one phone number, identical on 100% of listings. We log every listing in a citation sheet with its URL and the date we checked it, re-audit every quarter, and keep zero stale or duplicate listings. Price band and staff size will match the pricing page wherever a directory asks for them.

---

## 3. Reviews

| Platform | Count | Rating | Newest date seen | Response pattern | Source query and date |
|---|---|---|---|---|---|
| Google Business Profile | not run | not run | not run | not run | Q29 refused (budget). Q4 (2026-11-11) returned no Google rating |
| Clutch | 0 ("Not yet reviewed") | n/a | n/a | n/a | Q13, 2026-11-11 |
| BestProsInTown | not visible in snippet | not visible | Oct 2025 (snippet: review section "with its most recent entry dated October 2025") | not visible | Q5, Q10, 2026-11-11. Recon saw 46 reviews and a Sept 2025 review [recon 10-13] |
| Semrush Agency Partners | not visible; mystrika.com says there are "no public client reviews on the Semrush profile" | "n/a" on listings; one unverified "3.3" | n/a | n/a | Q17, 2026-11-11 |
| Yelp | no listing surfaced | n/a | n/a | n/a | Q5, 2026-11-11. Recon: 4.0, 3 reviews [recon 10-13] |
| chamberofcommerce.com | not surfaced | n/a | n/a | n/a | Q10, 2026-11-11. Recon: 5.0, 35 reviews [recon 10-13] |
| BBB | no profile surfaced | n/a | n/a | n/a | Q12, 2026-11-11 |
| Facebook | not surfaced | not surfaced | n/a | n/a | Q6, 2026-11-11 |
| Glassdoor / Indeed (employer) | not searched this run | n/a | n/a | n/a | Recon: Glassdoor 3.4 (7), Indeed 3.0 (3) [recon 10-13] |
| On-site testimonials (self-published) | Pagination not shown in corpus (`pages/testimonials.json` → `internalLinks` has no /page/ links; `wordCount` 594). Search-only [Q9] hinted at /page/ URLs; unverified | not a rating | not in corpus | n/a | Corpus `pages/testimonials.txt`, `pages/testimonials.json`; [Q9] |

**What this means.** No star rating was confirmed this run, and the Google Business Profile was not checked. The recon (2026-10-13) saw 5.0 from 35 reviews on chamberofcommerce.com (at least one labelled "on Google") and 46 reviews on BestProsInTown [recon 10-13]; the Semrush "3.3" is unverified [Q17]. We therefore do **not** present thin reviews as a finding while GBP is unknown. The confirmed gap is Clutch (0 reviews) [Q13]. Their proof lives on their own testimonials pages. Search engines and AI tools treat self-published testimonials as weaker than third-party reviews.

**Our standard:** a live Google rating of 4.8 or higher, with 25+ Google reviews by day 90, 60+ by day 180 and 120+ by day 365 (PLAN.md scoreboard), and two new reviews a week (PLAN.md §6.2). Every review gets an owner reply within 24 hours. We aim for five or more Clutch reviews in the first year, so that we are reviewed on the one agency directory where D3 has zero. No review incentives, ever.

---

## 4. Directory and badge presence

| Directory / badge | D3 present? | Evidence | Badge shown on d3corp.com? |
|---|---|---|---|
| Google Business Profile | not run | Q29 refused | n/a |
| Bing Places | not run | Q30 refused | n/a |
| Apple Maps (Business Connect) | not run | Q30 refused | n/a |
| Yelp | not surfaced | Q5 | No |
| Facebook page | Yes (linked from site) | Corpus `pages/home.json` → `externalLinks` | Footer icon |
| LinkedIn company | Yes (linked from site) | Corpus; [Q6] LeadIQ | Footer icon |
| Instagram | Yes (linked from site) | Corpus; Q19 did not surface the profile | Footer icon |
| YouTube | Yes (linked from site) | Corpus: `youtube.com/c/D3CorpOceanCity`; video embeds on 51 pages (`derived/tech.json` → `video_embeds_pages`) | Footer icon |
| Alignable | not surfaced | Q11 (recon listed it) | No |
| chamberofcommerce.com | not surfaced | Q10 (recon: 5.0/35) | No |
| BestProsInTown | Yes | Q1, Q9 | No |
| MapQuest | not surfaced | Q20 | No |
| mdtourism.org / VisitMaryland industry directory | not surfaced | Q21 (recon listed it) | No |
| Ocean City Chamber (oceancity.org) | **Yes, member** | Q5, Q7, Q20 | Yes: "Ocean City chamber logo" image on the home page (`pages/home.json` → `images`) and a footer link to oceancity.org |
| Salisbury Area Chamber (salisburyarea.com) | **Yes: marketing vendor, 2023 Voting Council seat, committee chair** | Corpus `pages/case-study-salisbury-area-chamber-of-commerce.txt` (measured); 2025 board seat search-only [Q8] | Yes (logo, empty alt): round chamber seal in the footer (home-desktop.jpg); link to salisburyarea.com on 157 of 157 pages. The seal image (`Layer-82.webp`/`Layer-83.webp` in `pages/home.json` → `images`) has empty alt, an accessibility gap, not missing proof |
| Worcester County Tourism ("thequietresorts.com") | Logo and link | Footer shows The Quiet Resorts logo (home-desktop.jpg); link to thequietresorts.com with empty text (`pages/home.json` → `externalLinks`); logo alt empty (`Layer-82.webp`/`Layer-83.webp`) | Yes (logo, empty alt); membership type not stated |
| Bethany-Fenwick Chamber | Took part in the 30th-anniversary ribbon-cutting | Q8 | No |
| Semrush Agency Partners | Yes | Q4, Q16, Q17 | **No** (grep of corpus text: no "Semrush") |
| WP Engine Agency Directory | Yes ("d3 group") | Q4, Q16 | **No** |
| Flywheel Agency Partners | Yes ("d3") | Q4 | **No** |
| TechBehemoths | Yes (one of 2 Ocean City web-design firms) | Q15 | **No** |
| Clutch | Yes, unreviewed | Q13 | **No** |
| DesignRush, UpCity, GoodFirms, Expertise.com | not surfaced | Q14 (only same-name firms elsewhere) | No |
| BBB | not surfaced | Q12 | No |
| "Partners" logo strip on d3corp.com | Google, YouTube, Shopify, AWS, Adobe, WooCommerce, WordPress, Bing, Facebook | `pages/home.json` → `images` (alts "Google partner logo", "Facebook Partner Logo", and others) | These are platform logos. The alt text reads "partner", but the corpus holds no verifiable certification ID or link to a partner directory. The strip shows an "aws partner network" mark, yet its link goes to https://www.amazon.com/ with the text "Amazon" (`pages/home.json` → `externalLinks`): it implies partner status with no way to verify it |
| Awards: 2025 MD Tourism Summit, Small Business of the Year and Best Website | Search-only, not verified against the source article | Q23, Q25 (sbybiz.org/?p=51234; confirm "44th" and the award-to-site attribution there) | **No** (corpus grep: zero matches) |

**Our standard:** a profile on every directory D3 is on, plus DesignRush, UpCity, GoodFirms, Expertise.com, BBB, Bing Places and Apple Business Connect, with 100% of listings matching the citation sheet. Every badge we earn appears on our site with a link to the verifiable listing. Any "partner" logo is backed by a certification link (for example, the Google Partners directory) or we leave it off.

---

## 5. Backlink footprint, classified

All URLs below were returned by WebSearch on 2026-11-11. Whether a page actually links to d3corp.com, and whether that link is followed, is **inferred from the snippet, not measured**. We have no link-index tool in this environment.

| Class | Linking page (URL) | What it is | Evidence |
|---|---|---|---|
| Client footer credit (unverified) | https://oceancity.org/ (and chamber.oceancity.org) | Observed in search only. No oceancity.org case study is among the 28 in `derived/case-studies.csv`, and no corpus text credits D3 for the chamber site. The identical wording "Website Design by D3, Ocean City MD" is D3's own footer credit on d3corp.com (home-desktop.jpg; `pages/home.json` → `footer`), so the snippet may reflect D3's own footer unless the result URL was oceancity.org | Q7, Q26 |
| Client footer credit | Other client sites in `derived/case-studies.csv` (28 case studies: White Marlin Open, Old Pro Golf, Seacrets, Jolly Roger, Farmers Bank of Willards, Somerset County Tourism, Salisbury Area Chamber, and others) | Footer credit **not confirmed**: search does not index footer text reliably | Q27, Q28 returned only d3corp.com case-study pages |
| Chamber | https://chamber.oceancity.org/list/member/d3-618 | Member directory listing | Q5, Q12, Q20 |
| Chamber | https://chamber.oceancity.org/events/details/ribbon-cutting-d3-43948 and https://dev.oceancity.org/events/details/ribbon-cutting-d3-30th-anniversary-celebration-43948 | 30th-anniversary ribbon-cutting. Date conflict: one summary says Oct 30 2025 [Q11], another says Oct 15 2025 [Q24] | Q11, Q20, Q24 |
| Chamber | https://dev.oceancity.org/news?q=D3+Corp | Chamber news search showing D3 items, including "Ocean City Council / D3" for John Gehrig in a 2023 board item | Q7 |
| Chamber (Salisbury) / press | https://sbybiz.org/?p=50531 "Born in Ocean City, Built for the Future: D3 Celebrates 30 Years…" | Chamber business-journal feature | Q1, Q5, Q24 |
| Chamber (Salisbury) / press | https://sbybiz.org/?p=50825 "From Yellow Pages to Web Pages: D3 Celebrates 30 Years of Innovation" | Feature | Q3, Q8 |
| Chamber (Salisbury) / press | https://sbybiz.org/?p=51234 "D3 Takes Home Top Honors at Maryland's Premier Tourism Summit" | Award story | Q23, Q25 |
| Chamber (Salisbury) | https://sbybiz.org/?p=45052 (2025 board installation; Jay Bosley of D3 Corp) | Board listing, search-only. Corpus states a 2023 Voting Council seat instead (`pages/case-study-salisbury-area-chamber-of-commerce.txt`) | Q8 |
| Chamber (Salisbury) | https://sbybiz.org/?p=33148 "Business Profile Videos", made "in partnership with D3" | Recurring video credit | Q8 |
| Press (award coverage) | coasttv.com, finedayradio.com, worcestermd.gov, visitmaryland.org award pages | Returned for the award query. **Whether each one names D3 is not confirmed** | Q25 |
| Sponsors | none found | 2025 sponsor lists checked (OC Chamber Cup, OC Museum Beach Bash, OC Film Festival) did not name D3 | Q24 |
| Directories | clutch.co/profile/d3corp · wpengine.com/agency-directory/d3-group · getflywheel.com/agency-partners-directory/d3 · agencies.semrush.com/list/ocean-city (and category pages) · techbehemoths.com/companies/web-design/ocean-city · bestprosintown.com/md/ocean-city/d3corp-/ · regionaldirectory.us/md/1410071.htm · mystrika.com/directory/agencies/d3 | Directory listings | Q1, Q4, Q13, Q15, Q16, Q17 |
| Data brokers | leadiq.com/c/d3/5a1daa9c2300005e009f4386 · zoominfo.com/c/d3corp/33984422 | Firmographic profiles (conflicting staff counts) | Q6, Q15, Q16 |
| Outbound from D3 (corpus) | Footer links to visitoceancity.com, oceancity.org, salisburyarea.com, thequietresorts.com | Reciprocal local signals | `pages/home.json` → `externalLinks` |

**Reading.** D3's off-site authority is concentrated in **local institutions**: two chambers, the chambers' business journal, and the tourism award circuit. A large part of it is **work they do for those institutions**. Measured in the corpus: D3 runs the Salisbury chamber's weekly Friday and Wednesday emails, the SBYBIZ Facebook page and the Business Profile videos (`pages/case-study-salisbury-area-chamber-of-commerce.txt`), and it built the Chesapeake Country Byway site for the tourism circuit (`pages/case-study-chesapeake-country-byway.txt`). The home page portfolio shows Somerset County Tourism and the Chesapeake Country Byway (`pages/home.json` → `images` alts), and its testimonials include Worcester County Tourism and the Maryland Tourism Coalition (`pages/home.txt`), so the tourism-circuit tie is corpus-backed, not search-only. The Ocean City chamber website build is search-only [Q7, Q26]. That is a moat built on relationships. We found no paid sponsorships and no independent press beyond the award story.

**Our standard:** at least 10 new real referring domains a month (PLAN.md §6.4). Every one is logged with its URL, its class (chamber, press, directory, client credit, sponsor) and whether the link is followed. "Site by Media Masters Group" credits go only on client sites where the client agrees in writing. Guest columns run monthly, rotating across Coast Dispatch, Ocean City Today, Bayside Gazette and Salisbury Independent.

---

## 6. Social presence

| Platform | URL (from site footer) | Followers | Source |
|---|---|---|---|
| Facebook | https://www.facebook.com/D3DoesIt | not seen in search results | Corpus `pages/home.json` → `externalLinks`; Q6 did not surface the page |
| LinkedIn | https://www.linkedin.com/company/d3corp | not seen | Corpus; Q18 |
| YouTube | https://www.youtube.com/c/D3CorpOceanCity | not seen (not searched; budget) | Corpus. The site embeds YouTube on 51 pages (`derived/tech.json` → `video_embeds_pages`) |
| Instagram | https://www.instagram.com/d3corp/ | not seen | Corpus; Q19 returned only client-account work |
| X/Twitter, TikTok, Nextdoor, Pinterest | not linked from the site | n/a | Corpus footer |

Observations, all measured from the corpus:
- The social links in the home-page footer are icon-only. Their `text` field is empty in `pages/home.json` → `externalLinks`, which is also an accessibility gap.
- No social profile appears in schema `sameAs` (zero pages; see section 2, row 2).
- There are three distinct handles across four platforms: D3DoesIt (Facebook), d3corp (LinkedIn and Instagram, which match) and D3CorpOceanCity (YouTube).
- Every page loads a chat widget from cdn.apigateway.co (webchat-client SDK; `derived/tech.json` → `chat_or_ai_widget_hosts`, `script_hosts` cdn.apigateway.co: 157 pages) and an accessiBe overlay (`derived/tech.json` → `accessibe_overlay`: true). Both shape how the brand presents to visitors arriving from off-site profiles; what the chat widget answers is not in corpus.

**Our standard:** one handle, `mediamastersgroup` or the closest available, identical on every platform. Every profile is listed in `sameAs` on every page. Footer icons carry accessible names. We post at least weekly on Facebook, LinkedIn and Instagram, and on Google Business Profile, which counts as a social channel for local search.

---

## 7. AI-answer visibility

**Not run.** The shared search budget ran out before these five prompts could be checked. WebSearch is in any case only a proxy for what ChatGPT, Perplexity or Google AI Overviews would answer.

| # | Prompt (planned) | D3 named? | Others named | Source |
|---|---|---|---|---|
| 1 | best digital marketing agency Ocean City MD | not run | not run | not run |
| 2 | best web design company Ocean City Maryland | not run | not run | not run |
| 3 | top marketing agency Salisbury MD | not run | not run | not run |
| 4 | SEO company Eastern Shore Maryland / Delmarva | not run | not run | not run |
| 5 | who should I hire to build a website for my Ocean City restaurant | not run | not run | not run |

**What the evidence suggests, inferred and not tested.** AI tools assemble answers from directories, reviews, chambers and clear entity facts (PLAN.md §6.6). D3's entity signals are mixed:
- strong chamber and award mentions;
- inconsistent names across listings;
- no `LocalBusiness` or `sameAs` schema;
- no star rating confirmed this run (GBP not checked; recon saw 5.0/35 on chamberofcommerce.com and 46 reviews on BestProsInTown).

Run these five prompts in the first `/mmg-seo-sprint` and record the answers.

**Our standard:** each month, test 20 prompts in ChatGPT, Perplexity, Google AI Mode and Copilot, and log whether Media Masters Group and D3 are named. The target is for Media Masters Group to be named in at least 5 of 20 answers by month 6.

---

## 8. Where they are beatable off-page

| # | Weakness (evidence) | Effort for us | Our standard |
|---|---|---|---|
| 1 | Clutch 0 reviews (Q13); no Yelp or BBB surfaced (Q5, Q12). GBP not checked, so overall review strength is unknown | Low effort, ongoing: a review-request routine | Google 4.8+ with 25+ reviews by day 90, 60+ by day 180, 120+ by day 365 (PLAN.md scoreboard); 5+ Clutch reviews in year one; 100% owner replies within 24h |
| 2 | Five listing-name variants (search-observed) and one stale address (section 2) | Low effort, one-time: build a clean citation set from day one | One name, one NAP, 100% match across all listings; re-audited quarterly |
| 3 | No `LocalBusiness`/`ProfessionalService` schema and no `sameAs` on any of 157 pages (`derived/pages.csv` → `jsonld_types`) | Low effort: a template change | Every page carries `ProfessionalService` with address, phone, geo, hours, areaServed and `sameAs` to every profile; validator.schema.org shows 0 errors |
| 4 | Directory badges and the (search-only) awards not shown on their own site (corpus grep); "aws partner network" mark links to amazon.com, not a verifiable listing (`pages/home.json` → `externalLinks`) | Low effort: a proof strip with links | Every badge and award we earn is on the home page with a verifiable link, added within 7 days of earning it |
| 5 | Conflicting price and size figures across directories (Q13, Q16) | Low effort | Directory price bands match the published pricing page exactly |
| 6 | Their hours appear only on the chamber listing; the site has none (`pages/contact-us.json`) | Low effort | Hours stated identically on site, GBP, Bing and Apple, plus a same-business-day reply commitment |
| 7 | Narrow press footprint: chamber journal and award only; no sponsorships found (Q23, Q24) | Medium effort, ongoing | One guest column a month in a Delmarva outlet; 2 local sponsorships in year one with a public sponsor-page link |
| 8 | Not surfaced on DesignRush, UpCity, GoodFirms, Expertise.com (Q14) | Low effort | Complete profiles on all four in month one, each with at least 1 portfolio item |
| 9 | Their chamber moat (Salisbury chamber vendor, 2023 Voting Council seat and committee chair, per `pages/case-study-salisbury-area-chamber-of-commerce.txt`) | **High effort, slow.** Do not try to beat it head-on in year one | Join the OC, Salisbury, Ocean Pines and Bethany-Fenwick chambers in quarter one; attend 1 event a month; offer one free workshop a quarter |
| 10 | Social handles inconsistent; follower counts not visible | Low effort | Same handle on every platform, weekly posts, every profile in `sameAs` |

---

## 9. Queries log (WebSearch, 2026-11-11)

Cap for this task: 50. **Calls made: 30. Executed: 27. Rejected by tool: 1. Refused for session budget: 2.** These are all the WebSearch calls this agent made, in order.

| # | Query | Filters | Outcome |
|---|---|---|---|
| Q1 | D3 Corp Ocean City MD reviews | none | Ran |
| Q2 | "D3" "12319 Ocean Gateway" Ocean City | none | Ran (no D3 match) |
| Q3 | D3 digital marketing agency Salisbury MD 212 West Main Street | none | Ran |
| Q4 | D3 Corp Google reviews rating West Ocean City marketing agency | none | Ran (no Google rating) |
| Q5 | D3Corp Yelp Ocean City MD | none | Ran |
| Q6 | D3 Corp Facebook D3DoesIt | none | Ran |
| Q7 | "d3" chamber.oceancity.org member | none | Ran |
| Q8 | Salisbury Area Chamber of Commerce member D3 sbybiz | none | Ran |
| Q9 | bestprosintown D3Corp Ocean City reviews | none | Ran |
| Q10 | D3Corp chamberofcommerce.com Ocean City reviews | none | Ran |
| Q11 | D3 Corp Ocean City Alignable | none | Ran |
| Q12 | D3 Corp Ocean City MD BBB | none | Ran |
| Q13 | D3 Ocean City Maryland agency Clutch reviews | allowed: clutch.co | Ran |
| Q14 | D3 Ocean City MD digital agency | allowed: designrush.com, upcity.com, goodfirms.co, expertise.com | Ran (no D3 match) |
| Q15 | techbehemoths D3 Ocean City web design | none | Ran |
| Q16 | "d3 group" wpengine agency directory Ocean City | none | Ran |
| Q17 | agencies.semrush.com D3 Ocean City agency profile reviews | none | Ran |
| Q18 | D3 Corp LinkedIn d3corp followers Ocean City | none | Ran |
| Q19 | instagram d3corp Ocean City marketing | none | Ran |
| Q20 | D3 Corp Ocean City MapQuest | none | Ran |
| Q21 | visitmaryland mdtourism services directory D3 marketing Ocean City | none | Ran |
| Q22 | D3 Ocean City 30th anniversary John Gehrig | allowed: mdcoastdispatch.com, oceancitytoday.com, baysideoc.com, newsbreak.com, delmarvanow.com, wboc.com, salisburyindependent.net | **Rejected** (400: one filter domain not accessible) |
| Q23 | "D3" marketing Ocean City news Coast Dispatch 2026 | none | Ran |
| Q24 | "D3Corp" OR "D3 Corp" sponsor Ocean City event 2025 | none | Ran |
| Q25 | D3 Maryland Travel Tourism Summit award 2025 Ocean City agency | none | Ran |
| Q26 | "Website Design by D3" Ocean City | none | Ran |
| Q27 | "Site by D3" OR "Designed by D3Corp" OR "Website by D3" | none | Ran (no exact footer hits) |
| Q28 | "D3" web design credit footer whitemarlinopen.com OR oldprogolf.com OR somersettourism.com | none | Ran (no footer hits) |
| Q29 | D3 marketing agency Ocean City MD hours Google Maps "Internet marketing service" | none | **Refused: session search budget used up** |
| Q30 | D3 West Ocean City Bing Places Apple Maps listing 410-213-2400 | none | **Refused: session search budget used up** |

Planned but not run because of the budget: the Google Business Profile follow-up (categories, posts); the YouTube channel; Ocean City Today, Bayside Gazette, Salisbury Independent, Daily Times and WBOC individually; Glassdoor and Indeed; and AI prompts 1–5.

---

## 10. Open questions

1. **Google Business Profile(s):** the exact name, primary and secondary categories, rating, review count, hours, recent posts, and whether the Salisbury office has its own profile. Not run. Check by hand in Google Maps; this is the most important missing fact.
2. **Bing Places and Apple Maps:** do the listings exist, and do they match the NAP? Not run.
3. **The five AI-answer prompts** in section 7. Not run.
4. **Salisbury suite number:** D3's footer gives 212 West Main Street with no suite, and a third party lists Suite 205 at that address for a different firm [Q3]. Which suite is D3's, and is the Salisbury office staffed? (PLAN.md §6.2 assumes it earns a map pack.)
5. **Recon figures not re-seen:** chamberofcommerce.com 5.0/35, BestProsInTown 46 reviews, Yelp 4.0/3, pr.business 0 reviews (stale listing), Glassdoor 3.4/7, Indeed 3.0/3 [recon 10-13]. Re-verify by visiting the listings directly. The recon already gives the URLs (`00-d3-recon-2026-10-13.md`, review table and Sources list); use them as the follow-up checklist rather than treating these as "not surfaced":
   - https://www.yelp.com/biz/d3corp-ocean-city
   - https://www.chamberofcommerce.com/united-states/maryland/ocean-city/internet-marketing-service/2007341235-d3corp
   - https://www.alignable.com/ocean-city-md/d3corp-17
   - https://www.mapquest.com/us/maryland/d3corp-354393993
   - https://web.mdtourism.org/Services/D3-Corp-38
   - https://pr.business/d-3-corporation-ocean-city-maryland
6. **The unverified Semrush "3.3" rating** [Q17]: which listing does it belong to?
7. **Ribbon-cutting date:** Oct 15 or Oct 30, 2025 [Q11, Q24]. A small point, but it matters if we cite it.
8. **Client footer credits:** which of the 28 case-study clients (`derived/case-studies.csv`) link back to d3corp.com, and are those links followed? This needs a backlink tool (Ahrefs, Semrush or Moz) or a manual footer check of each client site. Neither is possible from this environment.
9. **Social follower counts** on all four platforms: not visible in search.
10. **Glassdoor and Indeed employer ratings:** not re-searched this run.
11. **`locations.kml`** is in their sitemap (`sitemap-urls.json`). It is an old local-SEO tactic. Whether it is linked from GBP is not in the corpus.
12. **Award details:** confirm the "44th" Summit, both award names and that the awards were for the CCAAR site on sbybiz.org/?p=51234 [Q23, Q25].
13. **Ocean City chamber website credit:** visit oceancity.org and check whether its footer credits D3 [Q7, Q26].

---

*Sources: the corpus files cited inline under `media-masters/research/raw/d3/`; WebSearch Q1–Q28 run on 2026-11-11; `media-masters/research/00-d3-recon-2026-10-13.md`; `media-masters/PLAN.md` §2, §5, §6.*

---

## Verification (2026-11-11)

- Claims checked: 26.
- Supported: 16.
- Wrong: 2 (search-call count in the opening note; the Google-review bar attributed to PLAN.md).
- Overstated: 5 (Salisbury chamber role; Salisbury badge "no logo"; social handles; name-variant count; "no independent star rating").
- Unsupported: 3 (Tourism Summit awards; Ocean City chamber website credit; /testimonials/ pagination).
- Correction: opening note now reads 27 ran, 1 rejected (Q22), 2 refused (Q29, Q30), 30 in total.
- Correction: Tourism Summit awards relabelled "search-only, not verified against the source article"; "44th" and site attribution to be confirmed on sbybiz.org/?p=51234; CCAAR build cited from the corpus (summary 2, section 4, section 10 item 12).
- Correction: Salisbury chamber now cited from `pages/case-study-salisbury-area-chamber-of-commerce.txt` (weekly Friday and Wednesday emails, SBYBIZ Facebook, Business Profile videos, Bosley on the 2023 Voting Council, Pastusak chairing Marketing & Media, bi-monthly presentations); 2025 board seat marked search-only (summary 1, sections 4, 5, 8).
- Correction: Ocean City chamber website credit marked search-only, with the note that D3's own footer carries the same wording (summary 1, section 5, section 10 item 13).
- Correction: Salisbury chamber badge cell now "Yes (logo, empty alt)"; Quiet Resorts logo added; empty alt on Layer-82.webp/Layer-83.webp noted (section 4).
- Correction: social handles now "three distinct handles across four platforms; LinkedIn and Instagram match" (section 6).
- Correction: /testimonials/ pagination claim hedged as search-only; corpus shows no /page/ links and wordCount 594 (section 3).
- Correction: name variants now "5 listing-name variants (search-observed)", handles and customer usage excluded (summary 4, section 2, section 8).
- Correction: "no independent star rating" replaced by "no star rating confirmed this run; GBP not checked; recon saw 5.0/35 and 46 reviews" (summary 3, sections 3, 7, 8).
- Correction: review bar now 25+ by day 90, 60+ by day 180, 120+ by day 365 per the PLAN.md scoreboard (sections 3, 8).
- Added: AWS partner mark linking to amazon.com (sections 4, 8); home-page Article schema with author "D3 Support" (section 2); careers page "over 27 years" vs 30-year brand (section 2); cdn.apigateway.co chat widget on 157 pages and accessiBe overlay (section 6); tourism-circuit corpus evidence: Somerset County Tourism, CCAAR, Worcester County Tourism, Maryland Tourism Coalition (section 5); tech.json `emails_seen` omits emergency@d3corp.com (section 2); recon URLs and pr.business 0-review listing as the follow-up checklist (section 2 row 20, section 10 item 5).
