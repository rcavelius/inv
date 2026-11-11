import json, os, re, csv, sys, collections
from urllib.parse import urlparse
ROOT = sys.argv[1]; OUT = os.path.join(ROOT, 'derived'); os.makedirs(OUT, exist_ok=True)
pages = {}
for f in sorted(os.listdir(os.path.join(ROOT, 'pages'))):
    if f.endswith('.json'):
        d = json.load(open(os.path.join(ROOT, 'pages', f))); d['slug'] = f[:-5]; pages[d['url']] = d
def ptype(u):
    p = urlparse(u).path
    if p in ('/', ''): return 'home'
    if p.startswith('/blog/'): return 'blog-post'
    if p.startswith('/case-study/'): return 'case-study'
    if p.startswith('/video-') or p.startswith('/videos'): return 'video'
    if p.startswith('/testimonials'): return 'testimonials'
    if re.search(r'/(services|websites|rapid-design-websites|search-engine-optimization|answer-engine-optimization|digital-advertising|social-media-marketing|email-marketing|graphic-design|multimedia|print|ai-assistant|hosting|branding|photography|video-production|public-relations|web-design|seo)', p): return 'service'
    if re.search(r'/(meet-us|about|team|careers|contact|our-work|portfolio|id3as|site-map|terms|privacy|accessibility)', p): return 'company'
    return 'other'
def types_of(j):
    out = []
    def walk(x):
        if isinstance(x, dict):
            t = x.get('@type')
            if t: out.extend(t if isinstance(t, list) else [t])
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(j); return out
def find(j, typ):
    res = []
    def walk(x):
        if isinstance(x, dict):
            t = x.get('@type'); t = t if isinstance(t, list) else [t]
            if typ in t: res.append(x)
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(j); return res
inlinks = collections.Counter(); anchors = collections.defaultdict(collections.Counter)
norm = lambda u: u.split('#')[0].rstrip('/') + '/'
for d in pages.values():
    for l in set(d.get('internalLinks', [])): inlinks[norm(l)] += 1
# BFS depth from home
home = next((u for u in pages if urlparse(u).path in ('/', '')), None)
depth = {}
if home:
    q = [(home, 0)]; depth[norm(home)] = 0
    while q:
        u, k = q.pop(0)
        for l in pages.get(u, {}).get('internalLinks', []):
            n = norm(l)
            if n not in depth:
                depth[n] = k + 1
                tgt = next((pu for pu in pages if norm(pu) == n), None)
                if tgt: q.append((tgt, k + 1))
sitemap = set(norm(u) for u in json.load(open(os.path.join(ROOT, 'sitemap-urls.json'))))
rows = []; titles = collections.Counter(); descs = collections.Counter()
for u, d in pages.items():
    m = d.get('metas', {}); t = d.get('title', '') or ''; desc = m.get('description') or ''
    titles[t] += 1; descs[desc] += 1
    imgs = d.get('images', []); miss = [i for i in imgs if not (i.get('alt') or '').strip()]
    rows.append({'slug': d['slug'], 'url': u, 'status': d['status'], 'type': ptype(u), 'in_sitemap': norm(u) in sitemap, 'depth': depth.get(norm(u), ''), 'inlinks': inlinks.get(norm(u), 0), 'title': t, 'title_len': len(t), 'meta_description': desc, 'desc_len': len(desc), 'robots_meta': m.get('robots', ''), 'h1_count': len(d.get('h1', [])), 'h1': ' | '.join(d.get('h1', []))[:200], 'h2_count': len(d.get('h2', [])), 'canonical': d.get('canonical') or '', 'canonical_ok': (norm(d.get('canonical') or '') == norm(u)), 'word_count': d.get('wordCount', 0), 'images': len(imgs), 'images_missing_alt': len(miss), 'internal_links_out': len(set(d.get('internalLinks', []))), 'external_links_out': len(d.get('externalLinks', [])), 'jsonld_types': '+'.join(sorted(set(types_of(d.get('jsonld', []))))), 'forms': len(d.get('forms', [])), 'ctas': ' | '.join(sorted(set(c['text'] for c in d.get('ctas', []))))[:300], 'phones': ' | '.join(d.get('phones', [])), 'load_ms': d.get('loadMs'), 'requests': d.get('requestCount'), 'third_party_hosts': len(d.get('thirdPartyHosts', [])), 'generator': d.get('generator') or ''})
rows.sort(key=lambda r: (r['type'], r['url']))
with open(os.path.join(OUT, 'pages.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
# Issues report
issues = []
dup_t = {t: c for t, c in titles.items() if c > 1 and t}; dup_d = {t: c for t, c in descs.items() if c > 1 and t}
issues.append(f"Pages crawled (HTML 200/other): {len(rows)}; by type: " + ', '.join(f"{k}={v}" for k, v in collections.Counter(r['type'] for r in rows).most_common()))
issues.append(f"Status codes: " + ', '.join(f"{k}={v}" for k, v in collections.Counter(r['status'] for r in rows).most_common()))
issues.append(f"Sitemap URLs: {len(sitemap)}; crawled pages not in sitemap: {sum(1 for r in rows if not r['in_sitemap'])}; sitemap URLs not crawled as 200 pages: {len(sitemap - set(norm(u) for u,d in pages.items() if d['status']==200))}")
issues.append(f"Duplicate titles: {len(dup_t)} titles shared by {sum(dup_t.values())} pages; worst: " + '; '.join(f"'{t[:70]}' x{c}" for t, c in sorted(dup_t.items(), key=lambda x: -x[1])[:5]))
issues.append(f"Duplicate meta descriptions: {len(dup_d)} shared by {sum(dup_d.values())} pages; missing descriptions: {sum(1 for r in rows if not r['meta_description'])}")
issues.append(f"Titles over 60 chars: {sum(1 for r in rows if r['title_len']>60)}; titles over 70: {sum(1 for r in rows if r['title_len']>70)}; descriptions over 155: {sum(1 for r in rows if r['desc_len']>155)}")
issues.append(f"Pages with no H1: {sum(1 for r in rows if r['h1_count']==0)}; with multiple H1: {sum(1 for r in rows if r['h1_count']>1)}")
issues.append(f"Canonical missing: {sum(1 for r in rows if not r['canonical'])}; canonical pointing elsewhere: {sum(1 for r in rows if r['canonical'] and not r['canonical_ok'])}")
issues.append(f"Pages with noindex: {sum(1 for r in rows if 'noindex' in (r['robots_meta'] or ''))} (" + ", ".join(r['slug'] for r in rows if 'noindex' in (r['robots_meta'] or ''))[:400] + ")")
issues.append(f"Images total: {sum(r['images'] for r in rows)}; missing alt: {sum(r['images_missing_alt'] for r in rows)} ({round(100*sum(r['images_missing_alt'] for r in rows)/max(1,sum(r['images'] for r in rows)))}%)")
issues.append(f"Orphan-ish pages (0 inlinks found in crawl): {sum(1 for r in rows if r['inlinks']==0)}; pages at depth>=3: {sum(1 for r in rows if r['depth']!='' and r['depth']>=3)}; unreachable from home via crawled links: {sum(1 for r in rows if r['depth']=='')}")
wc = [r['word_count'] for r in rows if r['status']==200]
issues.append(f"Word count: median {sorted(wc)[len(wc)//2] if wc else 0}, min {min(wc) if wc else 0}, max {max(wc) if wc else 0}; service pages: " + ', '.join(f"{r['slug']}={r['word_count']}" for r in rows if r['type']=='service'))
issues.append(f"Schema types seen: " + ', '.join(f"{k}={v}" for k, v in collections.Counter(t for r in rows for t in r['jsonld_types'].split('+') if t).most_common()))
issues.append(f"Pages with forms: {sum(1 for r in rows if r['forms'])}; avg requests/page: {round(sum(r['requests'] or 0 for r in rows)/len(rows))}; avg load ms (runner, networkidle): {round(sum(r['load_ms'] or 0 for r in rows)/len(rows))}")
tp = collections.Counter()
for d in pages.values():
    for h in d.get('thirdPartyHosts', []): tp[h] += 1
issues.append("Third-party hosts by number of pages using them: " + ', '.join(f"{h}={c}" for h, c in tp.most_common(25)))
open(os.path.join(OUT, 'site-issues.md'), 'w').write('# Derived site facts (computed from the crawl corpus, 2026-10-14)\n\n' + '\n'.join('- ' + i for i in issues) + '\n\n## Duplicate titles\n' + '\n'.join(f"- x{c}: {t}" for t, c in sorted(dup_t.items(), key=lambda x: -x[1])) + '\n\n## Pages missing meta description\n' + '\n'.join(f"- {r['url']}" for r in rows if not r['meta_description']) + '\n\n## Pages with no H1\n' + '\n'.join(f"- {r['url']} (title: {r['title'][:80]})" for r in rows if r['h1_count']==0) + '\n')
# Blog posts
posts = []
for u, d in pages.items():
    if ptype(u) != 'blog-post': continue
    bp = (find(d.get('jsonld', []), 'BlogPosting') or find(d.get('jsonld', []), 'Article') or [{}])[0]
    a = bp.get('author'); a = a[0] if isinstance(a, list) and a else a; an = a.get('name') if isinstance(a, dict) else (a or '')
    txt = d.get('text', '')
    posts.append({'slug': d['slug'], 'url': u, 'title': d.get('title', '')[:120], 'date_published': (bp.get('datePublished') or '')[:10], 'date_modified': (bp.get('dateModified') or '')[:10], 'author': an, 'word_count': d.get('wordCount'), 'mentions_ai': bool(re.search(r'\bAI\b|artificial intelligence|ChatGPT|generative', txt)), 'local_mentions': len(re.findall(r'Ocean City|Salisbury|Delmarva|Eastern Shore|Maryland|Delaware', txt)), 'inlinks': inlinks.get(norm(u), 0)})
posts.sort(key=lambda p: p['date_published'] or '0000')
with open(os.path.join(OUT, 'blog-posts.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(posts[0].keys()) if posts else ['none']); w.writeheader(); w.writerows(posts)
yrs = collections.Counter((p['date_published'] or 'unknown')[:4] for p in posts)
# Case studies
cs = []
for u, d in pages.items():
    if ptype(u) != 'case-study': continue
    txt = d.get('text', '')
    nums = re.findall(r'\b\d{1,3}(?:,\d{3})*(?:\.\d+)?\s?%|\b\d+(?:\.\d+)?x\b|\$\s?\d[\d,]*(?:\.\d+)?[kKmM]?|\b(?:doubled|tripled|increase[d]?|grew|growth)\b[^.]{0,60}', txt)
    inds = [k for k in ['hotel', 'restaurant', 'bank', 'tourism', 'golf', 'amusement', 'real estate', 'medical', 'health', 'nonprofit', 'chamber', 'county', 'home services', 'insurance', 'retail', 'distillery', 'brewery', 'school', 'museum', 'HVAC', 'crawl space', 'law', 'dental', 'church', 'vodka', 'wedding'] if re.search(k, txt, re.I)]
    svc = [k for k in ['website', 'SEO', 'social media', 'email', 'video', 'drone', 'photography', 'branding', 'logo', 'print', 'PPC', 'paid', 'advertising', 'AEO', 'AI assistant'] if re.search(k, txt, re.I)]
    cs.append({'slug': d['slug'], 'url': u, 'title': d.get('title', '')[:120], 'h1': ' | '.join(d.get('h1', []))[:120], 'word_count': d.get('wordCount'), 'industries_guess': ', '.join(inds), 'services_mentioned': ', '.join(svc), 'result_figures': ' ; '.join(n.strip() for n in nums[:8]), 'has_video_iframe': any('youtube' in i for i in d.get('iframes', [])), 'inlinks': inlinks.get(norm(u), 0)})
with open(os.path.join(OUT, 'case-studies.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(cs[0].keys()) if cs else ['none']); w.writeheader(); w.writerows(cs)
# Services and pricing signals
svc_rows = []
for u, d in pages.items():
    if ptype(u) not in ('service', 'home', 'company'): continue
    txt = d.get('text', '')
    sig = re.findall(r'[^.]{0,60}(?:starting at|starts at|pricing|price|\$\d|per month|/mo|monthly|retainer|quote|estimate|additional charge|no contract|contract)[^.]{0,60}', txt, re.I)
    svc_rows.append({'slug': d['slug'], 'url': u, 'type': ptype(u), 'title': d.get('title', '')[:120], 'h1': ' | '.join(d.get('h1', []))[:120], 'word_count': d.get('wordCount'), 'h2s': ' | '.join(d.get('h2', []))[:400], 'ctas': ' | '.join(sorted(set(c['text'] for c in d.get('ctas', []))))[:300], 'forms': len(d.get('forms', [])), 'form_fields': ' | '.join(f"{fl.get('name') or fl.get('type')}{'*' if fl.get('required') else ''}" for fm in d.get('forms', []) for fl in fm.get('fields', []))[:300], 'pricing_signals': ' ; '.join(s.strip() for s in sig[:6])[:600], 'phones': ' | '.join(d.get('phones', [])), 'inlinks': inlinks.get(norm(u), 0)})
svc_rows.sort(key=lambda r: (r['type'], r['url']))
with open(os.path.join(OUT, 'services-and-company-pages.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(svc_rows[0].keys())); w.writeheader(); w.writerows(svc_rows)
# Tech stack
hd = pages.get(home, {}) if home else {}
alltext = ' '.join(' '.join(d.get('scripts', [])) + ' ' + ' '.join(d.get('iframes', [])) for d in pages.values())
tech = {'home_headers': {k: v for k, v in (hd.get('headers') or {}).items() if k.lower() in ('server', 'x-powered-by', 'x-cache', 'cf-cache-status', 'cache-control', 'content-security-policy', 'strict-transport-security', 'x-frame-options', 'x-content-type-options', 'referrer-policy', 'permissions-policy', 'link', 'via', 'x-pantheon-styx-hostname', 'x-wpe-request-id', 'x-kinsta-cache', 'cf-ray', 'x-nginx-cache', 'wpe-backend')}, 'generator': sorted(set(d.get('generator') for d in pages.values() if d.get('generator'))), 'script_hosts': dict(collections.Counter(urlparse(s).netloc for d in pages.values() for s in d.get('scripts', [])).most_common(30)), 'third_party_hosts_pages': dict(tp.most_common(40)), 'gtm_ids': sorted(set(re.findall(r'GTM-[A-Z0-9]+', alltext))), 'ga_ids': sorted(set(re.findall(r'G-[A-Z0-9]{6,}|UA-\d+-\d+', alltext))), 'wp_paths_seen': bool(re.search(r'/wp-content/|/wp-includes/', alltext)), 'accessibe_overlay': 'acsbapp.com' in alltext or 'acsbapp' in str(tp), 'chat_or_ai_widget_hosts': [h for h in tp if 'apigateway' in h or 'chat' in h or 'intercom' in h or 'tidio' in h or 'drift' in h], 'form_hosts': sorted(set(urlparse(fm.get('action') or '').netloc for d in pages.values() for fm in d.get('forms', []) if fm.get('action'))), 'fonts': [h for h in tp if 'typekit' in h or 'fonts.' in h], 'video_embeds_pages': sum(1 for d in pages.values() if any('youtube' in i or 'vimeo' in i for i in d.get('iframes', []))), 'phones_seen': dict(collections.Counter(p for d in pages.values() for p in d.get('phones', [])).most_common(5)), 'emails_seen': dict(collections.Counter(e for d in pages.values() for e in d.get('emails', [])).most_common(5)), 'www_variant_status': json.load(open(os.path.join(ROOT, 'index.json')))['meta'].get('wwwVariantStatus'), 'robots_txt': open(os.path.join(ROOT, 'robots.txt')).read()[:1500]}
json.dump(tech, open(os.path.join(OUT, 'tech.json'), 'w'), indent=1)
# Lighthouse + axe summaries
lh = []
for f in sorted(os.listdir(os.path.join(ROOT, 'lighthouse'))):
    j = json.load(open(os.path.join(ROOT, 'lighthouse', f))); a = j.get('audits', {})
    lh.append({'url': j['url'], **{k: j['scores'].get(k) for k in ('performance', 'accessibility', 'best-practices', 'seo')}, 'lcp': a.get('largest-contentful-paint', {}).get('value'), 'tbt': a.get('total-blocking-time', {}).get('value'), 'cls': a.get('cumulative-layout-shift', {}).get('value'), 'speed_index': a.get('speed-index', {}).get('value'), 'total_bytes': a.get('total-byte-weight', {}).get('value'), 'server_response': a.get('server-response-time', {}).get('value'), 'dom_size': a.get('dom-size', {}).get('value'), 'render_blocking': a.get('render-blocking-resources', {}).get('value'), 'unused_js': a.get('unused-javascript', {}).get('value'), 'third_party': a.get('third-party-summary', {}).get('value')})
with open(os.path.join(OUT, 'lighthouse-summary.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(lh[0].keys()) if lh else ['none']); w.writeheader(); w.writerows(lh)
ax = []; rule_counter = collections.Counter()
for f in sorted(os.listdir(os.path.join(ROOT, 'axe'))):
    j = json.load(open(os.path.join(ROOT, 'axe', f))); v = j.get('violations', [])
    for x in v: rule_counter[(x['id'], x['impact'])] += x['nodes']
    ax.append({'url': j.get('url'), 'violations': len(v), 'critical': sum(1 for x in v if x['impact']=='critical'), 'serious': sum(1 for x in v if x['impact']=='serious'), 'moderate': sum(1 for x in v if x['impact']=='moderate'), 'minor': sum(1 for x in v if x['impact']=='minor'), 'rules': ' | '.join(f"{x['id']}({x['impact']},{x['nodes']})" for x in v)})
with open(os.path.join(OUT, 'axe-summary.csv'), 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(ax[0].keys()) if ax else ['none']); w.writeheader(); w.writerows(ax)
open(os.path.join(OUT, 'axe-rules-sitewide.md'), 'w').write('# axe rule totals across 30 pages (rule, impact, affected nodes)\n' + '\n'.join(f"- {r} [{i}]: {n}" for (r, i), n in rule_counter.most_common()) + '\n')
# Screenshot index
shots = sorted(os.listdir(os.path.join(ROOT, 'screenshots')))
open(os.path.join(OUT, 'screenshots-index.md'), 'w').write('# Screenshots (JPEG). Suffixes: -desktop (1440 full page), -desktop-fold (1440x900 first screen), -mobile (390 full page), -mobile-fold (first screen)\n' + '\n'.join('- screenshots/' + s for s in shots) + '\n')
print('pages', len(rows), 'posts', len(posts), 'case studies', len(cs), 'service/company rows', len(svc_rows), 'lighthouse', len(lh), 'axe', len(ax), 'screens', len(shots))
print('blog by year:', dict(sorted(yrs.items())))
print('\n'.join(issues))
