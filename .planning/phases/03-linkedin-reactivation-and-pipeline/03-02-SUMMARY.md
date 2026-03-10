---
phase: 03-linkedin-reactivation-and-pipeline
plan: 02
subsystem: content-strategy
tags: [linkedin, content, posting-cadence, templates, post-drafts, trending-ai]

# Dependency graph
requires:
  - phase: 01-offer-architecture-and-positioning
    provides: "Case study metrics, offer tier names, ICP messaging language"
provides:
  - "7-day posting cadence with 70/30 trending/authority split"
  - "5 reusable post templates (builder log, explainer, tool comparison, case study, contrarian)"
  - "30 ready-to-publish LinkedIn post drafts covering 4+ weeks"
affects: [03-01 (warmup leads into daily cadence), 04-sales-process-and-conversion (pipeline from content engagement)]

# Tech tracking
tech-stack:
  added: []
  patterns: [70/30 content mix, DM-based CTAs, no hashtags, operator voice, weekly Sunday batch production]

key-files:
  created:
    - .planning/phases/03-linkedin-reactivation-and-pipeline/deliverables/content/posting-cadence.md
    - .planning/phases/03-linkedin-reactivation-and-pipeline/deliverables/content/post-templates.md
    - .planning/phases/03-linkedin-reactivation-and-pipeline/deliverables/content/30-post-drafts.md
  modified: []

key-decisions:
  - "1x/day posting, 7 days/week — research confirmed 2x/day causes 40% reach drop"
  - "70% trending AI topics (Claude Code, agents, MCP) for reach, 30% authority (case studies, contrarian) for conversion"
  - "Text-only for trending posts, carousels for case studies and frameworks"
  - "DM-based CTAs only — no 'comment [keyword]' per LinkedIn 2026 algorithm data"
  - "Weekly batch production on Sundays, responsive to trending topics"

patterns-established:
  - "Builder log format: hook → what I built → surprising finding → lesson → optional CTA"
  - "Contrarian format: bold claim → why everyone's wrong → what works → proof"
  - "Case study format: problem (dollar cost) → what we built → result (dollar impact) → lesson"

requirements-completed: [LI-03, LI-04]

# Metrics
duration: ~8min
completed: 2026-03-10
---

# Plan 03-02: Content Cadence and Post Drafts Summary

**30 LinkedIn post drafts with 7-day cadence, 5 content templates, and 70/30 trending/authority split — full month ready to publish**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-03-10T04:10:00Z
- **Completed:** 2026-03-10T04:18:00Z
- **Tasks:** 2
- **Files created:** 3

## Accomplishments
- Defined 7-day posting cadence with pillar rotation, format assignments, CTA strategy, and engagement protocol
- Created 5 reusable post templates (builder log, explainer, tool comparison, case study, contrarian) with structure, hooks, and voice rules
- Wrote 30 complete LinkedIn post drafts (1306 lines) covering Claude Code, AI agents, MCP, case study breakdowns, contrarian takes, and tool comparisons

## Task Commits

Each task was committed atomically:

1. **Task 1: Posting cadence and content templates** - `8d917c4` (feat)
2. **Task 2: 30 LinkedIn post drafts** - `1659265` (feat)

## Files Created/Modified
- `deliverables/content/posting-cadence.md` - 7-day rotation with pillar assignments, format rules, CTA strategy, engagement protocol
- `deliverables/content/post-templates.md` - 5 reusable templates with structure, example hooks, and voice rules
- `deliverables/content/30-post-drafts.md` - 30 full post drafts (150-250 words each), ready to publish

## Decisions Made
- Locked 1x/day based on research (2x/day cannibalization confirmed)
- No hashtags per user decision
- DM-based CTAs aligned with LinkedIn 2026 algorithm research
- Weekly Sunday batch production for flexibility with trending topics

## Deviations from Plan
None - plan executed as specified.

## Issues Encountered
- Agent hit rate limit before creating SUMMARY.md — summary created during session resumption. All task files were complete.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Full month of content ready for Day 8+ (after warmup)
- Templates enable ongoing weekly batch production
- Content pipeline feeds into outbound DM strategy (Plan 03-03)

---
*Phase: 03-linkedin-reactivation-and-pipeline*
*Completed: 2026-03-10*
