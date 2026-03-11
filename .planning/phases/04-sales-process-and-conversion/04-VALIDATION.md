---
phase: 04
slug: sales-process-and-conversion
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-11
---

# Phase 04 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual review (document phase — no application code) |
| **Config file** | none |
| **Quick run command** | `ls -la .planning/phases/04-sales-process-and-conversion/deliverables/` |
| **Full suite command** | Manual: verify each deliverable exists and contains required sections |
| **Estimated runtime** | ~5 seconds (file existence check) |

---

## Sampling Rate

- **After every task commit:** Verify deliverable file exists and has expected section headers
- **After every plan wave:** Read through all deliverables, cross-reference with requirements
- **Before `/gsd:verify-work`:** All 7 deliverable files exist with complete content
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | SALES-01 | manual-only | `head -5 deliverables/discovery/discovery-call-framework.md` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | SALES-03 | manual-only | `head -5 deliverables/discovery/pre-call-questionnaire.md` | ❌ W0 | ⬜ pending |
| 04-02-01 | 02 | 1 | SALES-02 | manual-only | `head -5 deliverables/proposals/proposal-template.md` | ❌ W0 | ⬜ pending |
| 04-02-02 | 02 | 1 | SALES-05 | manual-only | `head -5 deliverables/conversion/follow-up-sequence.md` | ❌ W0 | ⬜ pending |
| 04-02-03 | 02 | 1 | SALES-06 | manual-only | `head -5 deliverables/conversion/objection-handling-scripts.md` | ❌ W0 | ⬜ pending |
| 04-03-01 | 03 | 2 | SALES-04 | manual-only | `head -5 deliverables/pipeline/past-client-outreach-plan.md` | ❌ W0 | ⬜ pending |
| 04-03-02 | 03 | 2 | SALES-07 | manual-only | `head -5 deliverables/pipeline/hubspot-pipeline-setup.md` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements. No framework installation needed — all deliverables are prose documents.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Discovery call framework has BANT qualification + 70% listening structure | SALES-01 | Prose document quality | Read framework, verify BANT criteria present, verify listening ratio guidance |
| Proposal template has all 7 sections | SALES-02 | Document structure review | Count sections: exec summary, problem, solution, deliverables, timeline, investment, team |
| Pre-call questionnaire has 5-7 diagnostic questions | SALES-03 | Question quality review | Count questions, verify they diagnose COI |
| All 16 past clients audited with personalized messages | SALES-04 | Personalization quality | Read each message, verify client-specific metric reference |
| Follow-up sequence has 5 standalone-value emails | SALES-05 | Email quality review | Read each email, verify no "just checking in" patterns |
| Objection scripts cover price, timing, competition, internal | SALES-06 | Script quality review | Verify 4+ objection categories with responses |
| HubSpot pipeline has 6 stages + custom properties | SALES-07 | Configuration completeness | Verify stages and property definitions |

---

## Validation Sign-Off

- [x] All tasks have manual verify instructions
- [x] Sampling continuity: manual check after each deliverable
- [x] Wave 0 covers all MISSING references (N/A — document phase)
- [x] No watch-mode flags
- [x] Feedback latency < 5s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
