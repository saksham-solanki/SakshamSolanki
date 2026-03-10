---
phase: 3
slug: linkedin-reactivation-and-pipeline
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-03-10
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual validation (strategy/content phase, not code) |
| **Config file** | N/A |
| **Quick run command** | Review deliverable against checklist |
| **Full suite command** | Cross-reference all deliverables against LI-01 through LI-07 |
| **Estimated runtime** | ~5 minutes per deliverable review |

---

## Sampling Rate

- **After every task commit:** Review deliverable against requirement checklist
- **After every plan wave:** Cross-reference all deliverables, check for consistency in voice/positioning
- **Before `/gsd:verify-work`:** All 7 requirements have deliverables, profile copy is premium-positioned, outbound approach is signal-based (not templated)
- **Max feedback latency:** 5 minutes

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | LI-01 | manual-only | Visual review of profile copy against premium positioning checklist | N/A | ⬜ pending |
| 03-01-02 | 01 | 1 | LI-02 | manual-only | Check each day's content against warmup criteria (personal, trending, non-sales) | N/A | ⬜ pending |
| 03-02-01 | 02 | 1 | LI-03 | manual-only | Verify 7-day rotation covers all pillars, 1x/day frequency, format assignments | N/A | ⬜ pending |
| 03-02-02 | 02 | 1 | LI-04 | manual-only | Count drafts, verify each is 150-250 words, check format assignment, verify no banned words | N/A | ⬜ pending |
| 03-03-01 | 03 | 2 | LI-05 | manual-only | Verify connection request templates per ICP, 3-step DM sequence, trigger event checklist | N/A | ⬜ pending |
| 03-03-02 | 03 | 2 | LI-06 | manual-only | Verify filter criteria for PE and startup ICPs, Boolean searches, saved search specs | N/A | ⬜ pending |
| 03-03-03 | 03 | 2 | LI-07 | manual-only | Verify step-by-step daily routine, time allocations, warm-up ramp schedule, tracking system | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing infrastructure covers all phase requirements. This phase produces strategy documents and content, not code requiring test infrastructure.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Profile reads as premium AI partner | LI-01 | Copy review, not code | Check headline formula, about section hook, banner direction, featured section against CONTEXT.md decisions |
| Warmup series is personal/non-promotional | LI-02 | Content quality judgment | Verify Day 1 comeback narrative, Days 2-5 trending AI, Days 6-7 authority transition |
| Daily cadence covers all pillars | LI-03 | Strategy document review | Verify 7-day rotation, 70/30 trending/authority split, format assignments (carousel vs text) |
| 30 post drafts ready to publish | LI-04 | Content volume + quality | Count drafts, check word count (150-250), verify no banned words, confirm format assignment |
| DM playbook with signal-based approach | LI-05 | Strategy review | Verify trigger event categories, personalized templates per ICP, 3-step value-first sequence |
| Sales Navigator targeting criteria | LI-06 | Filter specification review | Verify PE and startup filter criteria, company size, titles, funding stage, Boolean searches |
| Daily outbound workflow documented | LI-07 | Process document review | Verify graduated ramp schedule, time allocations, engagement-first pipeline, tracking system |

---

## Validation Sign-Off

- [x] All tasks have manual verify or Wave 0 dependencies
- [x] Sampling continuity: manual review after each deliverable
- [x] Wave 0 covers all MISSING references (none needed)
- [x] No watch-mode flags
- [x] Feedback latency < 5 minutes
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
