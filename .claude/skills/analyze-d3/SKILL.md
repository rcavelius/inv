---
name: analyze-d3
description: Run Phase 1 of the Media Masters plan. Launches four Opus research agents in parallel against d3corp.com and the Delmarva market, then the architect agent that writes the site blueprint. Use when asked to analyze D3 Corp, refresh the competitive analysis, or start Phase 1.
---

# /analyze-d3 — Phase 1 competitive analysis

Orchestrate the five Opus agents defined in `.claude/agents/`. Outputs land in
`media-masters/research/`. Read `media-masters/PLAN.md` section 4 for the acceptance criteria.

## 1. Preflight (do all of these before launching anything)
- Read `media-masters/intake.md`. If more than three fields still say `TODO`, tell the user which
  ones and ask whether to proceed anyway (the agents can run, but the blueprint will carry gaps).
- Check network: `curl -sS -o /dev/null -w "%{http_code}\n" --max-time 20 https://d3corp.com/`.
  Anything other than a 2xx or 3xx means the environment cannot reach D3. Stop and tell the user:
  the network policy denied `d3corp.com`; add it (plus `web.archive.org`, `www.googleapis.com`,
  `pagespeed.googleapis.com`, `validator.schema.org`) under Allowed domains, or run this skill
  from Claude Code on a laptop. Do not fabricate results.
- Confirm Chromium is available for screenshots: `ls /opt/pw-browsers/chromium* 2>/dev/null || which chromium chromium-browser google-chrome`. If none, note that the UX critic will fall back to text analysis.
- Create `media-masters/research/screenshots/d3/` if missing.

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
