// Polite crawler for competitive analysis of a public website.
// - Respects robots.txt (User-agent: * disallows) and crawls at ~1 request/second.
// - Same-host pages only. Saves per-page metadata + text, screenshots for priority pages,
//   axe accessibility results, PageSpeed Insights and Lighthouse summaries.
// Usage: TARGET_ORIGIN=https://example.com OUT_DIR=out node crawl.mjs
import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ORIGIN = (process.env.TARGET_ORIGIN || 'https://d3corp.com').replace(/\/$/, '');
const HOST = new URL(ORIGIN).host.replace(/^www\./, '');
const OUT = process.env.OUT_DIR || 'media-masters/research/raw/d3';
const MAX_PAGES = +(process.env.MAX_PAGES || 400);
const DELAY_MS = +(process.env.DELAY_MS || 1100);
const SHOT_LIMIT = +(process.env.SHOT_LIMIT || 30);
const LH_LIMIT = +(process.env.LH_LIMIT || 6);
const PSI_LIMIT = +(process.env.PSI_LIMIT || 6);
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 (research-crawl; respects robots.txt; 1 req/s)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(new Date().toISOString(), ...a);

function normalize(u, base) {
  try {
    const url = new URL(u, base);
    if (!/^https?:$/.test(url.protocol)) return null;
    if (url.host.replace(/^www\./, '') !== HOST) return null;
    url.hash = '';
    for (const k of [...url.searchParams.keys()]) if (/^utm_|^fbclid|^gclid/.test(k)) url.searchParams.delete(k);
    // Skip binary assets
    if (/\.(pdf|jpe?g|png|gif|webp|svg|ico|css|js|zip|mp4|mp3|woff2?|ttf|xml|txt)$/i.test(url.pathname)) return null;
    // WordPress feed/attachment/query noise
    if (/\/feed\/?$|\/wp-json|\/wp-admin|\/wp-login|\/xmlrpc|\?replytocom=|\/attachment\//.test(url.href)) return null;
    return url.href;
  } catch { return null; }
}
function slugFor(u) {
  const url = new URL(u);
  let s = (url.pathname + (url.search ? '_' + url.search : '')).replace(/^\/|\/$/g, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
  return s || 'home';
}

async function fetchText(u) {
  try {
    const r = await fetch(u, { headers: { 'user-agent': UA }, redirect: 'follow' });
    return { status: r.status, text: r.ok ? await r.text() : '', headers: Object.fromEntries(r.headers) };
  } catch (e) { return { status: 0, text: '', error: String(e) }; }
}

function parseRobots(txt) {
  const groups = []; let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, '').trim(); if (!line) continue;
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i); if (!m) continue;
    const k = m[1].toLowerCase(), v = m[2].trim();
    if (k === 'user-agent') { if (!cur || cur.closed) { cur = { agents: [], disallow: [], allow: [], closed: false }; groups.push(cur); } cur.agents.push(v.toLowerCase()); }
    else if (cur && k === 'disallow') { cur.closed = true; if (v) cur.disallow.push(v); }
    else if (cur && k === 'allow') { cur.closed = true; if (v) cur.allow.push(v); }
  }
  const sitemaps = [...txt.matchAll(/^\s*sitemap\s*:\s*(\S+)/gim)].map((m) => m[1]);
  const star = groups.find((g) => g.agents.includes('*')) || { disallow: [], allow: [] };
  return { sitemaps, disallow: star.disallow, allow: star.allow };
}
function robotsAllows(robots, u) {
  const p = new URL(u).pathname + new URL(u).search;
  const match = (rule) => { const re = new RegExp('^' + rule.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\\\$$/, '$')); return re.test(p); };
  const dis = robots.disallow.filter(match).sort((a, b) => b.length - a.length)[0];
  const al = robots.allow.filter(match).sort((a, b) => b.length - a.length)[0];
  if (!dis) return true; if (al && al.length >= dis.length) return true; return false;
}
async function sitemapUrls(u, seen = new Set(), depth = 0) {
  if (depth > 3 || seen.has(u)) return []; seen.add(u);
  const { text } = await fetchText(u); if (!text) return [];
  const locs = [...text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1]);
  if (/<sitemapindex/i.test(text)) { const out = []; for (const l of locs) out.push(...(await sitemapUrls(l, seen, depth + 1))); return out; }
  return locs;
}

const PRIORITY = [/^\/$/, /services/, /website/, /seo|search-engine/, /advertis|ppc|paid/, /social/, /email/, /graphic|design|brand/, /multimedia|video/, /print/, /our-work|portfolio/, /case-stud/, /testimonial/, /meet|about|team/, /contact/, /blog/, /career/, /pricing|plans/, /site-map|sitemap/, /terms|privacy/];
function priorityRank(u) { const p = new URL(u).pathname; const i = PRIORITY.findIndex((re) => re.test(p)); return i < 0 ? 99 : i; }

async function main() {
  await fs.mkdir(path.join(OUT, 'pages'), { recursive: true });
  await fs.mkdir(path.join(OUT, 'screenshots'), { recursive: true });
  await fs.mkdir(path.join(OUT, 'axe'), { recursive: true });
  await fs.mkdir(path.join(OUT, 'psi'), { recursive: true });
  await fs.mkdir(path.join(OUT, 'lighthouse'), { recursive: true });
  const started = new Date().toISOString();
  const meta = { origin: ORIGIN, started, maxPages: MAX_PAGES, delayMs: DELAY_MS, errors: [], notes: [] };

  // robots + sitemaps
  const robotsRes = await fetchText(ORIGIN + '/robots.txt');
  await fs.writeFile(path.join(OUT, 'robots.txt'), robotsRes.text || `# fetch failed: status ${robotsRes.status}\n`);
  const robots = parseRobots(robotsRes.text || '');
  meta.robots = robots;
  const sitemapCandidates = [...new Set([...robots.sitemaps, ORIGIN + '/sitemap.xml', ORIGIN + '/sitemap_index.xml', ORIGIN + '/wp-sitemap.xml'])];
  let fromSitemap = [];
  for (const s of sitemapCandidates) { const urls = await sitemapUrls(s); if (urls.length) { fromSitemap.push(...urls); meta.notes.push(`sitemap ${s}: ${urls.length} urls`); } }
  fromSitemap = [...new Set(fromSitemap.map((u) => normalize(u, ORIGIN)).filter(Boolean))];
  await fs.writeFile(path.join(OUT, 'sitemap-urls.json'), JSON.stringify(fromSitemap, null, 2));
  log('sitemap urls', fromSitemap.length);

  // Home headers (server fingerprint)
  const home = await fetchText(ORIGIN + '/');
  meta.homeHeaders = home.headers || {};
  const alt = await fetchText(ORIGIN.replace('https://', 'https://www.') + '/').catch(() => null);
  meta.wwwVariantStatus = alt?.status;

  const browser = await chromium.launch({ args: ['--no-sandbox'], executablePath: process.env.CHROMIUM_PATH || undefined });
  const ctx = await browser.newContext({ userAgent: UA, viewport: { width: 1440, height: 900 }, locale: 'en-US' });
  const page = await ctx.newPage();
  const queue = [ORIGIN + '/', ...fromSitemap, ORIGIN + '/site-map/', ORIGIN + '/sitemap/'];
  const seen = new Set(); const done = new Map(); const index = [];
  const thirdParty = {};

  while (queue.length && done.size < MAX_PAGES) {
    const u = queue.shift(); if (!u || seen.has(u)) continue; seen.add(u);
    if (!robotsAllows(robots, u)) { meta.notes.push(`robots disallow: ${u}`); continue; }
    const t0 = Date.now(); const reqs = []; const onResp = (r) => { try { const h = new URL(r.url()).host; reqs.push({ host: h, status: r.status(), type: r.request().resourceType() }); } catch {} };
    page.on('response', onResp);
    let resp = null, err = null;
    try { resp = await page.goto(u, { waitUntil: 'networkidle', timeout: 45000 }); }
    catch (e) { err = String(e).split('\n')[0]; try { resp = await page.goto(u, { waitUntil: 'load', timeout: 45000 }); err = null; } catch (e2) { err = String(e2).split('\n')[0]; } }
    page.off('response', onResp);
    const finalUrl = page.url();
    const status = resp ? resp.status() : 0;
    if (err || !resp) { meta.errors.push({ url: u, error: err }); index.push({ url: u, status, error: err }); await sleep(DELAY_MS); continue; }
    if (done.has(finalUrl)) { index.push({ url: u, status, redirectedTo: finalUrl }); await sleep(DELAY_MS); continue; }
    const ct = resp.headers()['content-type'] || '';
    if (!/html/.test(ct)) { index.push({ url: u, status, contentType: ct }); await sleep(DELAY_MS); continue; }

    const data = await page.evaluate(() => {
      const q = (s) => [...document.querySelectorAll(s)];
      const txt = (el) => (el?.innerText || el?.textContent || '').replace(/\s+/g, ' ').trim();
      const metas = {}; q('meta').forEach((m) => { const k = m.getAttribute('name') || m.getAttribute('property'); if (k) metas[k.toLowerCase()] = m.getAttribute('content'); });
      const bodyText = txt(document.body);
      const ctaRe = /contact|quote|call|get started|start|learn more|free|schedule|consult|talk|request|book|let's|lets|hire|work with/i;
      return {
        lang: document.documentElement.lang || null,
        title: document.title,
        metas,
        canonical: document.querySelector('link[rel=canonical]')?.href || null,
        hreflang: q('link[rel=alternate][hreflang]').map((l) => ({ lang: l.hreflang, href: l.href })),
        generator: metas['generator'] || null,
        h1: q('h1').map(txt), h2: q('h2').map(txt), h3: q('h3').map(txt),
        wordCount: bodyText.split(/\s+/).filter(Boolean).length,
        text: bodyText,
        links: q('a[href]').map((a) => ({ href: a.href, text: txt(a).slice(0, 120), rel: a.rel || null, target: a.target || null })).filter((l) => /^https?:/.test(l.href)),
        images: q('img').map((i) => ({ src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight, loading: i.loading || null })),
        jsonld: q('script[type="application/ld+json"]').map((s) => { try { return JSON.parse(s.textContent); } catch { return { _raw: s.textContent.slice(0, 2000) }; } }),
        forms: q('form').map((f) => ({ action: f.action, method: f.method, id: f.id || null, fields: [...f.querySelectorAll('input,select,textarea')].filter((i) => i.type !== 'hidden').map((i) => ({ name: i.name, type: i.type, required: i.required, placeholder: i.placeholder || null, label: (i.labels && i.labels[0] ? txt(i.labels[0]) : null) })) })),
        scripts: q('script[src]').map((s) => s.src),
        iframes: q('iframe[src]').map((f) => f.src),
        ctas: q('a,button').filter((e) => ctaRe.test(txt(e)) && txt(e).length < 60).map((e) => ({ text: txt(e), href: e.href || null, tag: e.tagName.toLowerCase() })).slice(0, 40),
        phones: [...new Set(bodyText.match(/\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/g) || [])],
        emails: [...new Set((bodyText.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) || []).map((e) => e.replace(/\.+$/, '')))],
        telLinks: q('a[href^="tel:"]').map((a) => a.getAttribute('href')),
        viewport: metas['viewport'] || null,
        nav: q('nav a, header a').map((a) => ({ text: txt(a).slice(0, 80), href: a.href })).filter((l) => l.text).slice(0, 120),
        footer: q('footer a').map((a) => ({ text: txt(a).slice(0, 80), href: a.href })).filter((l) => l.text).slice(0, 120),
      };
    });
    const loadMs = Date.now() - t0;
    const slug = slugFor(finalUrl);
    const internal = []; for (const l of data.links) { const n = normalize(l.href, finalUrl); if (n) { internal.push(n); if (!seen.has(n) && !queue.includes(n)) queue.push(n); } }
    const external = data.links.filter((l) => !normalize(l.href, finalUrl));
    for (const r of reqs) { if (r.host.replace(/^www\./, '') !== HOST) thirdParty[r.host] = (thirdParty[r.host] || 0) + 1; }
    const rec = { url: finalUrl, requestedUrl: u, status, headers: resp.headers(), loadMs, requestCount: reqs.length, thirdPartyHosts: [...new Set(reqs.map((r) => r.host).filter((h) => h.replace(/^www\./, '') !== HOST))], internalLinks: [...new Set(internal)], externalLinks: external.slice(0, 200), ...data };
    delete rec.links;
    await fs.writeFile(path.join(OUT, 'pages', slug + '.json'), JSON.stringify(rec, null, 1));
    await fs.writeFile(path.join(OUT, 'pages', slug + '.txt'), `# ${rec.title}\n# ${finalUrl}\n\n${rec.text}\n`);
    done.set(finalUrl, slug);
    index.push({ url: finalUrl, requestedUrl: u, status, slug, title: rec.title, h1: rec.h1[0] || null, wordCount: rec.wordCount, description: rec.metas.description || null, canonical: rec.canonical, jsonldTypes: rec.jsonld.map((j) => j['@type'] || (j['@graph'] ? j['@graph'].map((g) => g['@type']).join('+') : '?')), forms: rec.forms.length, loadMs });
    log(`[${done.size}] ${status} ${finalUrl} (${rec.wordCount} words, ${loadMs}ms)`);
    await sleep(DELAY_MS);
  }
  if (queue.length) meta.notes.push(`stopped at MAX_PAGES=${MAX_PAGES}; ${queue.length} urls left in queue`);

  // Screenshots + axe on priority pages
  const prioritized = [...done.keys()].sort((a, b) => priorityRank(a) - priorityRank(b) || a.length - b.length).slice(0, SHOT_LIMIT);
  const axeSource = await fs.readFile(require.resolve('axe-core/axe.min.js'), 'utf8');
  const shots = [];
  for (const u of prioritized) {
    const slug = done.get(u);
    try {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(u, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.goto(u, { waitUntil: 'load', timeout: 45000 }));
      await page.evaluate(async () => { for (let y = 0; y < Math.min(document.body.scrollHeight, 8000); y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
      await page.screenshot({ path: path.join(OUT, 'screenshots', slug + '-desktop.jpg'), fullPage: true, type: 'jpeg', quality: 60 });
      await page.screenshot({ path: path.join(OUT, 'screenshots', slug + '-desktop-fold.jpg'), fullPage: false, type: 'jpeg', quality: 70 });
      await page.addScriptTag({ content: axeSource });
      const axe = await page.evaluate(async () => { const r = await window.axe.run(document, { resultTypes: ['violations', 'incomplete'] }); return { url: r.url, violations: r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl, nodes: v.nodes.length, sample: v.nodes.slice(0, 3).map((n) => n.html.slice(0, 200)) })), incomplete: r.incomplete.length }; });
      await fs.writeFile(path.join(OUT, 'axe', slug + '.json'), JSON.stringify(axe, null, 1));
      const mctx = await browser.newContext({ ...devices['iPhone 13'], userAgent: UA });
      const mp = await mctx.newPage();
      await mp.goto(u, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => mp.goto(u, { waitUntil: 'load', timeout: 45000 }));
      await mp.screenshot({ path: path.join(OUT, 'screenshots', slug + '-mobile.jpg'), fullPage: true, type: 'jpeg', quality: 60 });
      await mp.screenshot({ path: path.join(OUT, 'screenshots', slug + '-mobile-fold.jpg'), fullPage: false, type: 'jpeg', quality: 70 });
      await mctx.close();
      shots.push({ url: u, slug, axeViolations: axe.violations.length });
      log('shot', slug);
    } catch (e) { meta.errors.push({ url: u, stage: 'screenshot', error: String(e).split('\n')[0] }); }
    await sleep(DELAY_MS);
  }
  await browser.close();

  // PageSpeed Insights (no key; small quota) then local Lighthouse as the reliable fallback
  const psiTargets = prioritized.slice(0, PSI_LIMIT);
  for (const u of psiTargets) for (const strategy of ['mobile', 'desktop']) {
    try {
      const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(u)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;
      let r = await fetch(api); if (r.status === 429) { await sleep(15000); r = await fetch(api); }
      if (!r.ok) { meta.errors.push({ url: u, stage: 'psi-' + strategy, error: 'HTTP ' + r.status }); continue; }
      const j = await r.json(); const lr = j.lighthouseResult || {}; const a = lr.audits || {};
      const summary = { url: u, strategy, fetchTime: lr.fetchTime, scores: Object.fromEntries(Object.entries(lr.categories || {}).map(([k, v]) => [k, v.score])), lab: { fcp: a['first-contentful-paint']?.displayValue, lcp: a['largest-contentful-paint']?.displayValue, tbt: a['total-blocking-time']?.displayValue, cls: a['cumulative-layout-shift']?.displayValue, si: a['speed-index']?.displayValue, tti: a['interactive']?.displayValue, bytes: a['total-byte-weight']?.displayValue }, field: j.loadingExperience?.metrics ? Object.fromEntries(Object.entries(j.loadingExperience.metrics).map(([k, v]) => [k, { p75: v.percentile, category: v.category }])) : null, fieldOverall: j.loadingExperience?.overall_category || null, opportunities: Object.values(a).filter((x) => x.details?.type === 'opportunity' && x.score !== null && x.score < 0.9).map((x) => ({ id: x.id, title: x.title, savings: x.displayValue })).slice(0, 15) };
      await fs.writeFile(path.join(OUT, 'psi', `${done.get(u)}-${strategy}.json`), JSON.stringify(summary, null, 1));
      log('psi', strategy, u, summary.scores);
    } catch (e) { meta.errors.push({ url: u, stage: 'psi-' + strategy, error: String(e).split('\n')[0] }); }
    await sleep(5000);
  }
  try {
    const lighthouse = (await import('lighthouse')).default; const chromeLauncher = await import('chrome-launcher');
    const chrome = await chromeLauncher.launch({ chromePath: process.env.CHROMIUM_PATH || chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
    for (const u of prioritized.slice(0, LH_LIMIT)) {
      try {
        const r = await lighthouse(u, { port: chrome.port, output: 'json', logLevel: 'error' });
        const lhr = r.lhr; const a = lhr.audits;
        const pick = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index', 'interactive', 'total-byte-weight', 'render-blocking-resources', 'unused-javascript', 'unused-css-rules', 'uses-responsive-images', 'modern-image-formats', 'server-response-time', 'dom-size', 'font-display', 'image-alt', 'document-title', 'meta-description', 'link-text', 'crawlable-anchors', 'is-crawlable', 'robots-txt', 'hreflang', 'canonical', 'structured-data', 'viewport', 'color-contrast', 'heading-order', 'tap-targets', 'is-on-https', 'errors-in-console', 'third-party-summary'];
        const summary = { url: u, formFactor: lhr.configSettings.formFactor, scores: Object.fromEntries(Object.entries(lhr.categories).map(([k, v]) => [k, v.score])), audits: Object.fromEntries(pick.filter((k) => a[k]).map((k) => [k, { score: a[k].score, value: a[k].displayValue || null, numeric: a[k].numericValue ?? null }])) };
        await fs.writeFile(path.join(OUT, 'lighthouse', `${done.get(u)}-mobile.json`), JSON.stringify(summary, null, 1));
        log('lighthouse', u, summary.scores);
      } catch (e) { meta.errors.push({ url: u, stage: 'lighthouse', error: String(e).split('\n')[0] }); }
    }
    await chrome.kill();
  } catch (e) { meta.errors.push({ stage: 'lighthouse-setup', error: String(e).split('\n')[0] }); }

  meta.finished = new Date().toISOString(); meta.pagesCrawled = done.size; meta.screenshots = shots; meta.thirdPartyHosts = thirdParty;
  await fs.writeFile(path.join(OUT, 'index.json'), JSON.stringify({ meta, pages: index }, null, 1));
  const md = ['# Crawl index: ' + ORIGIN, '', `Crawled ${done.size} pages, ${meta.errors.length} errors. Started ${started}, finished ${meta.finished}.`, '', '| Status | URL | Title | H1 | Words | Forms | JSON-LD |', '|---|---|---|---|---|---|---|', ...index.filter((p) => p.slug).map((p) => `| ${p.status} | ${p.url} | ${(p.title || '').replace(/\|/g, '/')} | ${(p.h1 || '').replace(/\|/g, '/')} | ${p.wordCount} | ${p.forms} | ${p.jsonldTypes.join(', ')} |`), '', '## Redirects and non-HTML', ...index.filter((p) => !p.slug).map((p) => `- ${p.status} ${p.url} ${p.redirectedTo ? '→ ' + p.redirectedTo : ''} ${p.error || p.contentType || ''}`), '', '## Third-party hosts (request counts)', ...Object.entries(thirdParty).sort((a, b) => b[1] - a[1]).map(([h, n]) => `- ${h}: ${n}`), '', '## Notes', ...meta.notes.map((n) => '- ' + n), '', '## Errors', ...meta.errors.map((e) => '- ' + JSON.stringify(e))];
  await fs.writeFile(path.join(OUT, 'INDEX.md'), md.join('\n') + '\n');
  log('done', done.size, 'pages');
}
main().catch((e) => { console.error(e); process.exit(1); });
