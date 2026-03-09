---
phase: 01-offer-architecture-and-positioning
plan: 02
subsystem: offer-architecture
tags: [icp-messaging, executive-summaries, team-narrative, pe-firms, startups, enterprise, mckinsey-scr]

# Dependency graph
requires:
  - phase: 01-offer-architecture-and-positioning
    provides: "3 tiered offer scope documents (Audit, Sprint, Transformation) and pricing framework from Plan 01"
provides:
  - "3 ICP-specific messaging documents (PE firms, funded startups, enterprise teams)"
  - "3 executive one-pagers in McKinsey SCR format (Audit, Sprint, Transformation)"
  - "Viithiisys team narrative for discovery calls"
affects: [02-credibility-engine (website copy references ICP messaging and case studies), 03-linkedin-pipeline (outbound uses ICP-specific language), 04-sales-process (discovery calls use team narrative and executive summaries)]

# Tech tracking
tech-stack:
  added: []
  patterns: [ICP-specific language separation, McKinsey SCR one-pager format, operator-first team positioning]

key-files:
  created:
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/05-icp-messaging-pe-firms.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/06-icp-messaging-startups.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/07-icp-messaging-enterprise.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/08-executive-summary-audit.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/09-executive-summary-sprint.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/10-executive-summary-transformation.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/11-team-narrative.md
  modified: []

key-decisions:
  - "PE messaging uses dual-persona approach (operating partner as champion, portfolio CEO as buyer) with distinct language for each"
  - "Startup entry point is Sprint (not Audit) because startups want features shipped, not diagnostics"
  - "Enterprise entry point is Audit because multi-stakeholder approval requires an internal business case document"
  - "Executive summaries use problem-framing dollar amounts (cost of inaction) but zero offer pricing"
  - "Team narrative positions geographic distribution as a speed advantage (around-the-clock delivery)"

patterns-established:
  - "ICP language isolation: PE uses EBITDA/exit language, startups use burn rate/ship fast, enterprise uses legacy/change management"
  - "SCR one-pager template: Situation (2 sentences + 2 data points) > Complication (2 sentences + 2 reasons) > Resolution (60-70% of page with deliverables) > Proof > CTA"
  - "Proof point matching: Audit gets diagnostic-style results, Sprint gets speed/deployment metrics, Transformation gets comprehensive overhaul metrics"

requirements-completed: [OFFER-03, OFFER-04, OFFER-05]

# Metrics
duration: 6min
completed: 2026-03-10
---

# Phase 1 Plan 2: ICP Messaging, Executive Summaries, and Team Narrative Summary

**ICP-specific messaging for PE/startup/enterprise buyers with McKinsey SCR executive one-pagers and Viithiisys team narrative for discovery calls**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-09T18:35:52Z
- **Completed:** 2026-03-09T18:42:00Z
- **Tasks:** 2
- **Files created:** 7

## Accomplishments
- Created 3 ICP messaging documents with completely distinct language, pain points, case study selections, objection handling, and tier entry recommendations -- PE, startup, and enterprise messaging feel like they were written for different businesses
- Created 3 executive one-pagers in McKinsey SCR format with bold-bullet structure, zero pricing, and proof points matched to each tier's positioning
- Created team narrative with one-liner, 30-second full narrative, 4 objection handling scripts, "what to never say" guide, and advantage talking points
- All 7 documents maintain zero tech jargon and zero banned words in client-facing content

## Task Commits

Each task was committed atomically:

1. **Task 1: Create ICP-specific messaging documents** - `ea2b91a` (feat)
2. **Task 2: Create executive one-pagers and team narrative** - `14db8ed` (feat)

## Files Created/Modified
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/05-icp-messaging-pe-firms.md` - PE firm messaging with EBITDA/exit/margin language, dual persona (operating partner + portfolio CEO)
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/06-icp-messaging-startups.md` - Funded startup messaging with burn rate/ship fast/runway language, Series A-C CEO/CTO persona
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/07-icp-messaging-enterprise.md` - Enterprise messaging with legacy integration/change management language, VP Ops/CTO persona
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/08-executive-summary-audit.md` - AI Opportunity Audit one-pager in SCR format
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/09-executive-summary-sprint.md` - AI Operations Sprint one-pager in SCR format
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/10-executive-summary-transformation.md` - AI Transformation Program one-pager in SCR format
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/11-team-narrative.md` - Internal team narrative with scripts for discovery calls

## Decisions Made
- **PE dual-persona approach:** Documented operating partner (champion) and portfolio CEO (buyer) as separate personas with distinct language and entry points
- **Startup entry = Sprint:** Startups want features shipped fast, not diagnostics. Audit is too slow for startup urgency.
- **Enterprise entry = Audit:** Enterprise buyers need an internal document to circulate through procurement/finance/IT before committing to larger engagements
- **Proof point matching by tier:** Audit gets diagnostic results (3x meetings, 68% deflection, 84% check-in reduction), Sprint gets speed metrics (120 hrs/week, 50K users, 91% missed calls), Transformation gets comprehensive metrics (23% fuel reduction, 94% error elimination, 34% conversion)
- **Team narrative geographic framing:** Positioned distributed team as "around-the-clock delivery" advantage rather than defending the model

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 1 (Offer Architecture and Positioning) is now complete with all deliverables (4 from Plan 01 + 7 from Plan 02 = 11 total)
- Phase 2 (Website Credibility Engine) can reference ICP messaging for /consulting page copy and case study framing
- Phase 3 (LinkedIn Pipeline) can use ICP-specific language for outbound messaging by buyer type
- Phase 4 (Sales Process) can use executive summaries as leave-behinds and team narrative for discovery call preparation

## Self-Check: PASSED

All 7 deliverable files verified on disk. Both task commits (ea2b91a, 14db8ed) verified in git log.

---
*Phase: 01-offer-architecture-and-positioning*
*Completed: 2026-03-10*
