---
phase: 04-sales-process-and-conversion
plan: 01
subsystem: sales
tags: [discovery-call, BANT, COI, qualification, questionnaire, diagnostic]

# Dependency graph
requires:
  - phase: 01-offer-architecture-and-positioning
    provides: COI 5-question framework, pricing tiers, ICP messaging, objection handling scripts
provides:
  - 45-minute discovery call framework with diagnostic structure
  - Pre-call questionnaire with COI and BANT priming
  - Tier recommendation decision matrix
  - ICP-specific language variants for PE, Startup, Enterprise
  - Red flags / disqualification signals reference
affects: [04-02 proposal template, 04-03 follow-up sequence, 04-04 objection scripts, 04-05 CRM pipeline]

# Tech tracking
tech-stack:
  added: []
  patterns: [diagnostic-first sales methodology, COI-anchored pricing conversation]

key-files:
  created:
    - .planning/phases/04-sales-process-and-conversion/deliverables/discovery/discovery-call-framework.md
    - .planning/phases/04-sales-process-and-conversion/deliverables/discovery/pre-call-questionnaire.md
  modified: []

key-decisions:
  - "COI framework referenced from Phase 1 pricing playbook rather than duplicated -- maintains single source of truth"
  - "Replaced banned word 'leverage' with 'efficiency at scale' in PE language variant to comply with brand voice guidelines"

patterns-established:
  - "Diagnostic-first call structure: calculate COI before recommending tier or discussing price"
  - "Questionnaire-to-call mapping: every pre-call question feeds a specific discovery call phase"
  - "ICP language variants: PE (EBITDA/margin), Startup (burn rate/runway), Enterprise (compliance/change management)"

requirements-completed: [SALES-01, SALES-03]

# Metrics
duration: 4min
completed: 2026-03-11
---

# Phase 4 Plan 01: Discovery Call Infrastructure Summary

**45-minute diagnostic call framework with COI-anchored qualification, BANT embedded, ICP-specific language variants, and 7-question pre-call questionnaire that primes the pricing conversation**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-11T08:28:45Z
- **Completed:** 2026-03-11T08:32:50Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- Discovery call framework structures a complete 45-minute diagnostic session with Opening, Diagnostic (Situation + COI + BANT), Prescription, and Next Steps phases
- COI 5-question framework from Phase 1 pricing playbook integrated by reference (not duplicated) into the Diagnostic phase
- Pre-call questionnaire with 7 questions designed to prime COI calculation (team size, hours/week) and BANT qualification (authority, timeline) before the call
- Tier recommendation decision matrix maps qualification signals to Audit, Sprint, or Transformation

## Task Commits

Each task was committed atomically:

1. **Task 1: Discovery call framework with COI diagnostic and BANT qualification** - `308ab74` (feat)
2. **Task 2: Pre-call diagnostic questionnaire with COI-priming questions** - `a221528` (feat)

Auto-fix commit:
3. **Banned word replacement** - `d812c18` (fix) - replaced "operational leverage" with "efficiency at scale"

## Files Created/Modified

- `deliverables/discovery/discovery-call-framework.md` - Complete 45-minute call structure with all 5 phases, BANT questions, COI integration, tier decision matrix, ICP language variants, red flags, post-call checklist
- `deliverables/discovery/pre-call-questionnaire.md` - 7-question diagnostic sent before calls, with question-to-call-phase mapping, usage instructions, and differentiation from website pre-qual form

## Decisions Made

- **COI by reference, not duplication:** The framework explicitly references the Phase 1 pricing playbook COI section rather than rewriting the 5 questions. This ensures any updates to the COI methodology propagate automatically.
- **Banned word compliance:** Replaced "operational leverage" (a legitimate PE finance term) with "efficiency at scale" to strictly follow brand voice guidelines that prohibit "leverage" in any context.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Banned word "leverage" found in PE language variants**
- **Found during:** Task 1 verification
- **Issue:** "operational leverage" appeared in the ICP-specific language section for PE firms
- **Fix:** Replaced with "efficiency at scale" to comply with brand voice rules
- **Files modified:** discovery-call-framework.md
- **Verification:** grep confirmed no banned words remain
- **Committed in:** d812c18

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Minor wording fix. No scope creep.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Discovery call infrastructure complete -- Saksham can run structured diagnostic calls immediately
- Proposal template (Plan 02) can reference the tier recommendation matrix and COI numbers produced by the call
- Follow-up sequence (Plan 03) can reference specific COI numbers discussed during discovery calls
- CRM pipeline (Plan 04) stages align with the call flow (Lead -> Qualified -> Discovery Call)

---
*Phase: 04-sales-process-and-conversion*
*Completed: 2026-03-11*
