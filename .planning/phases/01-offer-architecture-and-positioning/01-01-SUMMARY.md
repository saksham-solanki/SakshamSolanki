---
phase: 01-offer-architecture-and-positioning
plan: 01
subsystem: offer-architecture
tags: [pricing, value-based, tiered-offers, roi-calculator, scope-documents]

# Dependency graph
requires:
  - phase: none
    provides: "First phase - no dependencies"
provides:
  - "3 tiered offer scope documents (Audit, Sprint, Transformation)"
  - "Value-based pricing framework with ROI calculator"
  - "Cost of Inaction discovery framework"
  - "Pricing conversation playbook"
affects: [01-02-PLAN (ICP messaging references tiers), 02-credibility-engine (website content references offers), 04-sales-process (discovery calls use pricing framework)]

# Tech tracking
tech-stack:
  added: []
  patterns: [7-section scope document template, value-ladder cross-referencing]

key-files:
  created:
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/01-audit-scope.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/02-sprint-scope.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/03-transformation-scope.md
    - .planning/phases/01-offer-architecture-and-positioning/deliverables/04-pricing-framework.md
  modified: []

key-decisions:
  - "Kept working tier names (Audit/Sprint/Transformation) as branded names with taglines"
  - "Pricing framework is internal-only -- zero pricing in any client-facing scope document"
  - "Starting price recommendations set at lower end of ranges for first 2-3 deals"
  - "Payment terms: Audit 100% upfront, Sprint 50/50, Transformation milestone-based 30/30/30/10"

patterns-established:
  - "7-section scope template: Problem > Deliverables > Process > Timeline > Differentiators > Qualification > Next Step"
  - "Value ladder: each scope doc references adjacent tiers to create natural upsell path"
  - "Operator-first voice: no banned words, no tech jargon, every sentence passes 'so what' test"

requirements-completed: [OFFER-01, OFFER-02]

# Metrics
duration: 5min
completed: 2026-03-10
---

# Phase 1 Plan 1: Offer Tier Scopes and Pricing Framework Summary

**Three tiered offer scope documents (Audit $15K-$40K, Sprint $75K-$200K, Transformation $250K-$1M+) with value-based pricing framework, 5-question COI discovery framework, and ROI calculator with worked example**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-09T18:28:12Z
- **Completed:** 2026-03-10T00:33:10Z
- **Tasks:** 2
- **Files created:** 4

## Accomplishments
- Created 3 tiered offer scope documents with 7-section structure, value ladder cross-references, zero pricing displayed, and zero tech jargon
- Created comprehensive internal pricing framework with value-based philosophy (10-25% of projected Year 1 impact), recommended ranges per tier, and starting recommendations
- Built 5-question Cost of Inaction discovery framework designed to run live on calls
- Built ROI calculator with inputs, outputs, and a fully worked support triage example showing Sprint break-even in Year 1
- Created pricing conversation playbook with objection handling scripts

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 3 tiered offer scope documents** - `65fd295` (feat)
2. **Task 2: Create value-based pricing framework with ROI calculator** - `355bd48` (feat)

## Files Created/Modified
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/01-audit-scope.md` - AI Opportunity Audit scope: workshop + report, 2-3 weeks, 50+ employees/$5M+ revenue
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/02-sprint-scope.md` - AI Operations Sprint scope: multi-system deployment, 45-60 days, outcome-based
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/03-transformation-scope.md` - AI Transformation Program scope: full-stack overhaul, 3-6 months, PE/enterprise
- `.planning/phases/01-offer-architecture-and-positioning/deliverables/04-pricing-framework.md` - Internal pricing framework: ranges, COI framework, ROI calculator, playbook

## Decisions Made
- **Tier names finalized as branded versions:** AI Opportunity Audit, AI Operations Sprint, AI Transformation Program -- with taglines
- **Zero pricing in scope documents:** All dollar amounts in scope docs are problem-framing (e.g., "$200K operational drain") or qualification criteria (e.g., "$5M+ revenue"), never offer pricing
- **Starting prices at lower end:** First 2-3 deals at $15K-$20K (Audit), $75K-$100K (Sprint), $250K-$350K (Transformation) per STATE.md blocker about needing real-conversation validation
- **Payment terms defined:** Audit 100% upfront, Sprint 50/50, Transformation 30/30/30/10 milestone-based
- **Conservative bias in ROI projections:** Always use 40% (conservative) scenario in proposals; if reality exceeds projection, client sees under-promise/over-deliver

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Scope documents and pricing framework ready for Plan 01-02 (ICP messaging, executive one-pagers, Viithiisys narrative)
- ICP messaging documents in 01-02 will reference these tier names, scope, and qualification criteria
- Executive one-pagers in 01-02 will use the pricing framework for internal reference during creation
- Phase 2 (website) will use scope documents as source material for /solutions page content

---
*Phase: 01-offer-architecture-and-positioning*
*Completed: 2026-03-10*
