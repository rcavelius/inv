---
name: mmg-seo-sprint
description: >-
  Run the monthly Phase 3/4 sprint for Media Masters Group with the mmg-seo-ops agent: scoreboard vs. D3 Corp, D3 change watch, AI-mention test, four articles, four Google Business Profile posts, citation and link targets, and the monthly report. Use on the first business day of each month or when asked for the monthly SEO sprint.
---

# /mmg-seo-sprint — monthly sprint

1. Determine the month (`YYYY-MM`). Check `media-masters/reports/inputs/<YYYY-MM>/` for exports.
   If the folder is empty, tell the user which exports to drop in (rank tracker, Search Console
   pages and queries, Google Business Profile insights, GA4 leads by source, reviews, backlinks)
   and offer to run with whatever exists.
2. Launch `mmg-seo-ops` with the month, the inputs path, last month's report path, and the
   output paths from its definition. Wait for it.
3. Read the report. In chat, give the scoreboard table, the three biggest moves, D3's changes, and
   the decisions the owner must make. Point to the drafted articles and posts for approval.
4. Offer to commit `media-masters/reports/` and `media-masters/site-content/` on the current branch.

Quarterly (every third run), also recommend `/analyze-d3` to refresh the blueprint.
