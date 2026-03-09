---
phase: 2
slug: credibility-engine-website
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-10
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Next.js build validation (no test framework configured) |
| **Config file** | next.config.mjs |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run lint` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run lint`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | WEB-01 | manual + smoke | `npm run build` | N/A | ⬜ pending |
| 02-01-02 | 01 | 1 | WEB-04 | automated | `grep -r "affordable\|\\$2,000\|\\$15,000\|\\$3,000/month\|hourly" app/ components/ lib/ content/` | N/A | ⬜ pending |
| 02-02-01 | 02 | 1 | WEB-02 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 02-02-02 | 02 | 1 | WEB-06 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 02-03-01 | 03 | 2 | WEB-03 | manual + smoke | `npm run build` | N/A | ⬜ pending |
| 02-03-02 | 03 | 2 | WEB-05 | manual + smoke | `npm run build` | N/A | ⬜ pending |
| 02-04-01 | 04 | 2 | WEB-07 | manual + smoke | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `app/solutions/page.tsx` — new page stub for WEB-02
- [ ] Pre-qualification form component — new component for WEB-07
- [ ] `next.config.mjs` redirect rules — /consulting -> /solutions

*Existing infrastructure covers build validation. No test framework gaps — this phase is primarily content/copy work verified by build success and visual/grep inspection.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Homepage hero has premium copy, no small-ticket signals | WEB-01 | Copy quality requires human judgment | Review hero section for outcome-focused headline, no hourly/affordable language |
| Case studies show dollar ROI metrics | WEB-03 | Dollar figures need business validation | Review each case study for $/year savings framing |
| Social proof metrics visible on key pages | WEB-05 | Visual placement check | Verify logo bar + metrics appear on homepage and solutions page |
| Pre-qualification form UX | WEB-07 | Form flow requires human testing | Submit test form, verify field validation and submission behavior |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
