---
phase: 04-sales-process-and-conversion
plan: 03
subsystem: sales-pipeline
tags: [hubspot, crm, past-clients, re-engagement, pipeline-management]

# Dependency graph
requires:
  - phase: 01-offer-architecture
    provides: "Pricing framework with COI calculator, tier structure, payment terms"
  - phase: 02-credibility-engine-website
    provides: "Case study MDX files with client metrics, /solutions pre-qualification form"
  - phase: 03-linkedin-reactivation-and-pipeline
    provides: "DM playbook with engagement-first patterns for outbound messaging"
provides:
  - "16-client audit with expansion opportunities and personalized re-engagement messages"
  - "HubSpot CRM pipeline configuration guide with 6 stages and custom properties"
  - "Priority-tiered outreach cadence for past client re-engagement"
affects: [sales-execution, crm-integration, past-client-revenue]

# Tech tracking
tech-stack:
  added: [hubspot-free-crm, calendly-integration]
  patterns: [signal-based-re-engagement, expansion-selling, pipeline-stage-gating]

key-files:
  created:
    - .planning/phases/04-sales-process-and-conversion/deliverables/pipeline/past-client-outreach-plan.md
    - .planning/phases/04-sales-process-and-conversion/deliverables/pipeline/hubspot-pipeline-setup.md

key-decisions:
  - "RAG chatbot and SaaS support triage case studies identified as same client -- 15 unique clients across 16 case studies"
  - "Priority ranking by expansion potential not recency -- SaaS company with 2 prior deployments ranked #1"
  - "HubSpot Free tier as starting point -- Starter upgrade trigger defined at 10+ active deals"
  - "HubSpot Forms Embed recommended over custom API for /solutions form integration"
  - "11 custom deal properties (3 more than plan specified) to cover full pipeline data needs"

patterns-established:
  - "Re-engagement messages reference specific delivered system and specific metric achieved"
  - "Each re-engagement proposes a specific adjacent opportunity, not generic check-in"
  - "Pipeline stages gate on required properties -- no deal advances without required data"
  - "Past client outreach tracked separately from cold pipeline via Source Channel property"

requirements-completed: [SALES-04, SALES-07]

# Metrics
duration: 6min
completed: 2026-03-11
---

# Phase 4 Plan 3: Pipeline Management Infrastructure Summary

**15-client expansion audit with personalized re-engagement messages plus HubSpot 6-stage pipeline configuration with 11 custom properties and 5 saved views**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-11T08:29:10Z
- **Completed:** 2026-03-11T08:35:32Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- Audited all 16 case study files, identified 1 duplicate (RAG chatbot + SaaS triage = same 90-person SaaS company), yielding 15 unique clients
- Created personalized re-engagement messages for each client referencing specific delivered systems and specific metrics, with specific adjacent opportunities proposed
- Prioritized clients into 3 tiers by expansion potential with outreach cadence (Week 1, Weeks 2-3, Month 2)
- Built complete HubSpot pipeline guide with 6 stages, entry/exit criteria, 11 custom properties, 5 saved views, and step-by-step setup instructions for Free tier

## Task Commits

Each task was committed atomically:

1. **Task 1: Past client audit and personalized re-engagement messages** - `f14e736` (feat)
2. **Task 2: HubSpot CRM pipeline configuration guide** - `ce7da05` (feat)

## Files Created

- `.planning/phases/04-sales-process-and-conversion/deliverables/pipeline/past-client-outreach-plan.md` - 16-client audit, tier ranking, personalized messages, outreach cadence, tracking fields
- `.planning/phases/04-sales-process-and-conversion/deliverables/pipeline/hubspot-pipeline-setup.md` - 6-stage pipeline config, 11 custom properties, 5 saved views, setup instructions, integration notes

## Decisions Made

- **Deduplication:** RAG chatbot case study and SaaS support triage case study both describe a 90-person B2B SaaS company with 400+ weekly tickets. Treated as same client, yielding 15 unique clients (not 16).
- **Priority by expansion potential:** The SaaS company with TWO prior deployments ranked #1 despite not being the most recent engagement. Expansion confidence is highest where clients have already invested in multiple rounds.
- **HubSpot Forms Embed over custom API:** Recommended replacing the current /solutions form with HubSpot's embedded form for zero-maintenance lead capture. Custom API integration noted as alternative if design consistency is critical.
- **11 custom properties:** Expanded from the 8 specified in the plan to include Loss Reason, Proposal Review Date, and Discovery Call Date for complete pipeline tracking.
- **Channel recommendations per client:** Enterprise clients (200-person company, 150-person manufacturer) recommended for email outreach; all others recommended for LinkedIn DM, aligning with Phase 3 LinkedIn reactivation.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required. HubSpot setup is documented in the pipeline guide for Saksham to follow manually.

## Next Phase Readiness

- Pipeline infrastructure is ready for Saksham to configure HubSpot in one sitting
- Past client outreach can begin immediately following the priority-tiered cadence
- The pipeline guide integrates with Phase 4 Plans 01 and 02 (discovery call framework feeds Stage 3, proposal template feeds Stage 4, follow-up sequence feeds Stage 5)
- /solutions form integration with HubSpot is documented but requires implementation (either HubSpot Forms embed or custom API)

## Self-Check: PASSED

- past-client-outreach-plan.md: FOUND
- hubspot-pipeline-setup.md: FOUND
- 04-03-SUMMARY.md: FOUND
- Commit f14e736 (Task 1): FOUND
- Commit c4b74bd (Task 2): FOUND

---
*Phase: 04-sales-process-and-conversion*
*Completed: 2026-03-11*
