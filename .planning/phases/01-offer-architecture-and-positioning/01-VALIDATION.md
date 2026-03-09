---
phase: 1
slug: offer-architecture-and-positioning
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-09
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for offer architecture deliverables.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual review + checklist verification (document phase, no code) |
| **Config file** | N/A |
| **Quick run command** | `cat .planning/phases/01-offer-architecture-and-positioning/01-*.md` |
| **Full suite command** | `ls -la .planning/phases/01-offer-architecture-and-positioning/` |
| **Estimated runtime** | ~2 seconds |

---

## Sampling Rate

- **After every task commit:** Verify deliverable exists and meets structure requirements
- **After every plan wave:** Cross-check all deliverables against requirements
- **Before `/gsd:verify-work`:** All 5 requirements (OFFER-01 through OFFER-05) verified
- **Max feedback latency:** Immediate (file existence + content checks)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | OFFER-01 | manual | `grep -l "Tier 1\|Tier 2\|Tier 3" deliverables/` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | OFFER-02 | manual | `grep -l "pricing\|ROI\|value-based" deliverables/` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 1 | OFFER-03 | manual | `grep -l "PE\|startup\|enterprise" deliverables/` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 1 | OFFER-04 | manual | `ls deliverables/*executive-summary*` | ❌ W0 | ⬜ pending |
| 01-02-03 | 02 | 1 | OFFER-05 | manual | `grep -l "Viithiisys\|team narrative" deliverables/` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `deliverables/` directory created in phase folder for output documents
- [ ] Document templates identified for each deliverable type

*If none: "Existing infrastructure covers all phase requirements."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Offer tiers have distinct scope, deliverables, timelines | OFFER-01 | Content quality requires human review | Read each tier doc — verify no overlap, clear differentiation |
| Pricing shows 10-25% of business impact, no hourly rates | OFFER-02 | Value framing is subjective | Confirm ROI calculator logic, verify zero hourly rate references |
| ICP messaging uses distinct pain language per audience | OFFER-03 | Language/tone requires human judgment | Compare PE vs startup vs enterprise docs — must feel different |
| Executive summaries are clean, no pricing displayed | OFFER-04 | Design/format review | Verify McKinsey-style layout, no pricing anywhere |
| Team narrative is honest and ready for live use | OFFER-05 | Authenticity check | Read aloud — would Saksham say this on a call? |

---

## Validation Sign-Off

- [ ] All 5 requirements (OFFER-01 through OFFER-05) have deliverables
- [ ] Each deliverable reviewed against success criteria from ROADMAP.md
- [ ] No hourly rates anywhere in any document
- [ ] PE, startup, and enterprise messaging are distinctly different
- [ ] Executive summaries are print-ready (light background, McKinsey-style)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
