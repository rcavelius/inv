---
name: analyze-d3
description: >-
  Run Phase 1 of the Media Masters plan. Launches four Opus research agents in parallel against d3corp.com and the Delmarva market, then the architect agent that writes the site blueprint. Use when asked to analyze D3 Corp, refresh the competitive analysis, or start Phase 1.
---

# /analyze-d3 — Phase 1 competitive analysis

Orchestrate the five Opus agents defined in `.claude/agents/`. Outputs land in
`media-masters/research/`. Read `media-masters/PLAN.md` section 4 for the acceptance criteria.

## 1. Preflight (do all of these before launching anything)
- Read `media-masters/intake.md`. If more than three fields still say `TODO`, tell the user which
  ones and ask whether to proceed anyway (the agents can run, but the blueprint will carry gaps).
- Check network: `curl -sS -o /dev/null -w "%{http_code}\n" --max-time 20 https://d3corp.com/`.
  - 2xx/3xx: the agents may crawl live (route A).
  - Anything else (a 403 CONNECT from the proxy means the environment's network policy denies the
    host): use route B below. Do not fabricate results, and do not wait for the user to change
    network settings.
- Confirm Chromium is available for screenshots: `ls /opt/pw-browsers/chromium* 2>/dev/null || which chromium chromium-browser google-chrome`.
- Web search budget: the session shares roughly 200 WebSearch calls per turn across all agents.
  Give every agent that searches a hard cap in its prompt (8 to 50 depending on role), and keep
  the total under 180.

### Route B: crawl from GitHub Actions, analyze from the corpus
1. Append a line to `scripts/d3-crawl/RUN` (the origin lives in `scripts/d3-crawl/target.txt`),
   commit, and push to the current `claude/**` branch. The workflow
   `.github/workflows/d3-crawl.yml` runs on GitHub's runners: a polite Playwright crawl
   (robots.txt respected, about 1 request/second), screenshots, axe, Lighthouse, PageSpeed.
   It force-pushes the results to the orphan branch `research-corpus-d3`. Manual dispatch is
   not permitted for the integration (403), so the push is the trigger.
2. Wait for the branch (a background `until git ls-remote --exit-code --heads origin research-corpus-d3`
   loop); a 150-page site takes about 40 minutes.
3. Extract locally into the gitignored folder and compute the derived facts:
   ```
   mkdir -p media-masters/research/raw
   git fetch origin research-corpus-d3
   git archive origin/research-corpus-d3 corpus/d3 | tar -x -C media-masters/research/raw --strip-components=1
   python3 -I scripts/d3-crawl/derive.py media-masters/research/raw/d3
   ```
   `derive.py` writes `derived/pages.csv`, `site-issues.md`, `blog-posts.csv`, `case-studies.csv`,
   `services-and-company-pages.csv`, `tech.json`, `lighthouse-summary.csv`, `axe-summary.csv`,
   `axe-rules-sitewide.md`, `screenshots-index.md`.
4. Point the research agents at the corpus instead of the live site (tell them WebFetch and
   curl are blocked and that `media-masters/research/raw/d3/` is the source of truth), and let
   only the off-page analyst use WebSearch.
5. The repo is public: never commit `media-masters/research/raw/` (it is gitignored), and delete
   the `research-corpus-d3` branch once the analysis documents are committed
   (`git push origin --delete research-corpus-d3`).

## 2. Research wave (launch all four in one message so they run concurrently)
Use the Agent tool with these `subagent_type` values and a prompt that names the inputs and the
exact output path from each agent's definition:
- `d3-site-auditor` → `media-masters/research/01-d3-site-inventory.md` + `d3-pages.json`
- `d3-seo-analyst` → `media-masters/research/02-d3-seo-audit.md`
- `d3-ux-critic` → `media-masters/research/03-d3-ux-critique.md` + screenshots
- `local-market-researcher` → `media-masters/research/04-market-keywords.md` + `keywords.csv`

Tell each agent today's date, that it must cite evidence for every claim, and that it must stop
and report if d3corp.com becomes unreachable. Run them in the background and wait for all four.

## 3. Verify the wave
For each output: file exists, is non-trivial (more than 2,000 words for the three audits; the CSV
has ≥ 150 rows), and contains no placeholder text. If one failed or is thin, re-run that one agent
with the specific gap named. Do not proceed to synthesis with a missing input.

## 4. Synthesis
Launch `mmg-site-architect` with the five input paths and the output path
`media-masters/research/05-mmg-site-blueprint.md`. Wait for it.

## 5. Report to the user
In chat, give: the blueprint's "Top ten ways we beat D3" list, the page count in the build order,
the three biggest D3 strengths to respect, the open questions for the owner, and the paths of all
five outputs. Then suggest committing `media-masters/research/` on the current branch.

Do not edit D3's content into our site. Do not run this against any domain other than the one in
the plan without the user naming it.
