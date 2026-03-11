---
phase: 04-sales-process-and-conversion
plan: 02
subsystem: sales
tags: [proposal-template, follow-up-sequence, objection-handling, COI-framework, ICP-messaging]

# Dependency graph
requires:
  - phase: 01-offer-architecture-and-positioning
    provides: "pricing framework with COI calculator, executive summaries (SCR format), ICP messaging guides, team narrative"
provides:
  - "7-section proposal template with ICP-specific language variants (PE, startup, enterprise)"
  - "5-email follow-up sequence for stalled deals over 21 days"
  - "14-objection handling scripts across 5 categories with wrong/right response pairs"
affects: [04-sales-process-and-conversion, sales-execution]

# Tech tracking
tech-stack:
  added: []
  patterns: [SCR-to-proposal extension, COI-anchored objection handling, value-add follow-up cadence]

key-files:
  created:
    - .planning/phases/04-sales-process-and-conversion/deliverables/proposals/proposal-template.md
    - .planning/phases/04-sales-process-and-conversion/deliverables/conversion/follow-up-sequence.md
    - .planning/phases/04-sales-process-and-conversion/deliverables/conversion/objection-handling-scripts.md
  modified: []

key-decisions:
  - "Proposal usage instructions mandate review meeting before sending -- single most important anti-pattern to prevent"
  - "Objection scripts use wrong/right response pairs with psychological principles for training value"
  - "Follow-up Email 3 uses ICP-specific objection variants rather than generic language"
  - "Case study selection guide organized by prospect industry for fast reference"

patterns-established:
  - "Value-add follow-up: every email delivers standalone value, zero filler language"
  - "Never reduce price without reducing scope -- redirect to Audit tier as structured entry point"
  - "ICP language adaptation in proposals: PE uses EBITDA/portfolio, startup uses burn rate/runway, enterprise uses stakeholder alignment/procurement"

requirements-completed: [SALES-02, SALES-05, SALES-06]

# Metrics
duration: 6min
completed: 2026-03-11
---

# Phase 4 Plan 02: Proposal Template, Follow-Up Sequence, and Objection Scripts Summary

**7-section proposal template with PE/startup/enterprise ICP variants, 5-email value-add follow-up sequence over 21 days, and 14 objection handling scripts across 5 categories -- all anchored to COI framework from Phase 1 pricing playbook**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-11T08:28:56Z
- **Completed:** 2026-03-11T08:35:00Z
- **Tasks:** 2
- **Files created:** 3

## Accomplishments
- 7-section proposal template with personalization placeholders, ICP-specific language variants in Sections 1 and 6, case study selection guide by industry, and usage instructions emphasizing never sending without a review meeting booked
- 5-email follow-up sequence (Day 3, 7, 10, 14, 21) where every email delivers standalone value -- zero "just checking in" language -- with ICP-specific objection variants in Email 3 and stakeholder enablement materials in Email 4
- 14 objection handling scripts across 5 categories (pricing, timing, authority, competition, scope) with wrong/right response pairs, psychological principles, and a quick reference card for proposal review meetings

## Task Commits

Each task was committed atomically:

1. **Task 1: 7-section proposal template with ICP-specific language variants** - `732b585` (feat)
2. **Task 2: Follow-up sequence and objection handling scripts** - `ce7da05` (feat)

## Files Created/Modified
- `deliverables/proposals/proposal-template.md` - 7-section proposal template with ICP variants, placeholder markers, usage instructions, case study selection guide
- `deliverables/conversion/follow-up-sequence.md` - 5-email follow-up sequence with ICP-specific Email 3 variants, case study mapping table, usage instructions
- `deliverables/conversion/objection-handling-scripts.md` - 14 objection scripts across 5 categories with wrong/right pairs, psychological principles, quick reference card, master rules

## Decisions Made
- Proposal usage instructions mandate booking a review meeting before sending the proposal -- this is the single most important anti-pattern to prevent (proposals sent without review meetings have 30-50% open rates and almost always stall)
- Objection scripts structured as wrong/right response pairs with named psychological principles -- designed for training and pre-call review, not just reference
- Follow-up Email 3 uses three distinct ICP variants (PE gets portfolio scaling angle, startup gets build vs. buy angle, enterprise gets stakeholder alignment angle) rather than generic objection language
- Case study selection guide organized by prospect industry for fast reference during proposal creation and follow-up drafting
- Quick reference card added to objection scripts for printing and keeping visible during proposal review meetings

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None -- no external service configuration required.

## Next Phase Readiness
- All post-discovery-call conversion assets are complete
- Proposal template references Phase 1 scope documents and pricing framework without duplicating them
- Follow-up sequence and objection scripts reference the COI framework from the pricing playbook
- Ready for remaining Phase 4 plans (discovery call framework, CRM pipeline setup, past client outreach)

---
*Phase: 04-sales-process-and-conversion*
*Completed: 2026-03-11*
