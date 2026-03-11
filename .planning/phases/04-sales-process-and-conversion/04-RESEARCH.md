# Phase 4: Sales Process and Conversion - Research

**Researched:** 2026-03-11
**Domain:** High-ticket B2B consulting sales infrastructure (discovery calls, proposals, follow-up, CRM)
**Confidence:** HIGH

## Summary

Phase 4 builds the complete sales conversion infrastructure for Saksham's AI consulting practice -- everything that happens from the moment a prospect books a discovery call through to closed deal or graceful follow-up on stalled deals. This phase also includes mining the 16 existing case study clients for expansion revenue.

The research domain here is sales process design, not software engineering. All deliverables are markdown documents (frameworks, templates, scripts, questionnaires) plus one HubSpot CRM configuration. The existing Phase 1 deliverables -- particularly the pricing framework with its COI calculator, objection handling scripts, and team narrative -- provide substantial foundation that Phase 4 should extend rather than duplicate.

**Primary recommendation:** Build the discovery call framework around the existing COI (Cost of Inaction) 5-question framework from the pricing playbook, structure proposals as 7-section documents that mirror the executive summary format already established, and design all follow-up sequences around value-add (case study sharing, insight delivery) rather than "just checking in" nudges.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SALES-01 | Discovery call framework with diagnostic questions, BANT qualification, 70% listening structure | COI framework from pricing playbook provides the diagnostic engine; BANT maps to existing ICP qualification criteria; 70% listening aligns with industry best practice of 43:57 talk-to-listen ratio |
| SALES-02 | 7-section proposal template (exec summary, problem analysis, solution, deliverables, timeline, investment, team) | Executive summaries from Phase 1 provide the format model; proposal extends these with full detail sections |
| SALES-03 | Pre-call diagnostic questionnaire (5-7 questions) sent before discovery calls | Filters already exist on /solutions pre-qualification form; questionnaire deepens this with operational questions that prime the COI conversation |
| SALES-04 | Past client outreach plan -- audit all 16 case study clients for expansion, draft re-engagement messages | 16 case studies exist with documented metrics; re-engagement uses DM playbook engagement-first patterns adapted for warm relationships |
| SALES-05 | 5-email follow-up sequence for stalled deals (21 days) | Value-add approach using case studies and industry insights; each email references specific COI numbers from the discovery call |
| SALES-06 | Objection handling scripts for pricing, competition, delay, committee approval | Pricing playbook already has 4 objection scripts; Phase 4 expands these into a comprehensive reference covering all common high-ticket objections |
| SALES-07 | CRM pipeline setup in HubSpot with stages: Lead, Qualified, Discovery Call, Proposal, Negotiation, Closed Won/Lost | 6-stage pipeline with entry criteria and required properties for each stage |
</phase_requirements>

## Standard Stack

### Core Frameworks

| Framework | Purpose | Why Standard |
|-----------|---------|--------------|
| BANT (Budget, Authority, Need, Timeline) | Lead qualification during discovery calls | Industry standard developed by IBM; maps directly to Saksham's ICP criteria; simple enough to use live on calls |
| COI (Cost of Inaction) Framework | Value anchoring before pricing discussion | Already built in Phase 1 pricing playbook; the 5-question discovery framework produces dollar figures that anchor all pricing |
| SCR (Situation-Complication-Resolution) | Proposal narrative structure | Already used in executive summaries; consistent structure across all client-facing documents |

### Supporting Frameworks

| Framework | Purpose | When to Use |
|-----------|---------|-------------|
| MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion) | Complex enterprise deals with multiple stakeholders | Use for Transformation Program ($250K+) deals where BANT alone is insufficient |
| 3x3 Research Method | Pre-call preparation | Research 3 things about the company and 3 things about the person before every call |

### Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| HubSpot CRM (Free tier) | Pipeline management, deal tracking, email logging | Free tier supports custom pipelines, deal stages, contact properties |
| Calendly | Discovery call booking | Already integrated on /solutions page |
| Google Docs | Proposal delivery | Shareable, trackable (view analytics), professional presentation |

## Architecture Patterns

### Document Structure for Phase 4 Deliverables

```
.planning/phases/04-sales-process-and-conversion/
  deliverables/
    discovery/
      discovery-call-framework.md       # SALES-01: Full call structure
      pre-call-questionnaire.md         # SALES-03: 5-7 question form
    proposals/
      proposal-template.md              # SALES-02: 7-section template
    conversion/
      follow-up-sequence.md             # SALES-05: 5-email sequence
      objection-handling-scripts.md      # SALES-06: Comprehensive scripts
    pipeline/
      hubspot-pipeline-setup.md         # SALES-07: CRM configuration guide
      past-client-outreach-plan.md      # SALES-04: 16 client audit + messages
```

### Pattern 1: Discovery Call as Diagnostic Session

**What:** Structure the discovery call as a medical diagnostic, not a sales pitch. Saksham asks questions, listens, calculates COI live, then prescribes the appropriate tier.

**When to use:** Every discovery call, regardless of prospect source (inbound, outbound, referral).

**Structure:**

```
Discovery Call Framework (45 minutes)

1. OPENING (5 min) — rapport, agenda setting, confirm they completed pre-call questionnaire
   - "I've reviewed your questionnaire responses. Let me share what caught my attention."
   - Set expectation: "I'll ask diagnostic questions for most of this call. If there's a fit, I'll explain what working together looks like."

2. DIAGNOSTIC (25 min) — 70% listening, COI framework questions
   Phase A: Situation (5 min)
   - Company context, team size, current tools, growth trajectory

   Phase B: Pain Quantification (10 min)
   - COI 5-question framework from pricing playbook
   - Calculate labor cost + revenue loss LIVE on the call

   Phase C: BANT Qualification (10 min)
   - Budget: "What have you allocated for this initiative?"
   - Authority: "Who else needs to approve this?"
   - Need: "What happens if you don't solve this in the next 6 months?"
   - Timeline: "When do you need this operational?"

3. PRESCRIPTION (10 min) — recommend tier, present COI vs investment
   - Present the COI number calculated together
   - Recommend specific tier (Audit, Sprint, or Transformation)
   - Frame price as fraction of COI: "The investment is $X against the $Y annual cost we just calculated"

4. NEXT STEPS (5 min) — proposal timeline, stakeholders, decision process
   - "I'll send a proposal within 48 hours"
   - Identify additional stakeholders who need to review
   - Set next meeting date before hanging up
```

### Pattern 2: Proposal as Decision Document

**What:** The proposal is not a capabilities brochure. It is a decision document that makes saying "yes" easy and saying "no" feel expensive.

**Structure:**

```
7-Section Proposal Template

1. EXECUTIVE SUMMARY (1 page)
   - The problem in their words (from discovery call notes)
   - The cost of inaction (COI number from the call)
   - The recommended solution (tier name)
   - The projected outcome

2. PROBLEM ANALYSIS (1-2 pages)
   - Current state documented (from diagnostic)
   - Quantified costs (labor + revenue loss)
   - Compounding factor (how it gets worse over 12-24 months)

3. PROPOSED SOLUTION (1-2 pages)
   - What gets built/deployed
   - How it integrates with their existing stack
   - Target metrics (defined, measurable)

4. DELIVERABLES & MILESTONES (1 page)
   - Numbered list of specific deliverables
   - Week-by-week milestone timeline
   - What they see at each checkpoint

5. TIMELINE (visual)
   - Gantt-style or phased timeline
   - Key decision points and dependencies

6. INVESTMENT (1 page)
   - Total investment (use "investment," never "cost" or "price")
   - Payment terms (from pricing framework)
   - ROI projection: payback period, 3-year net value
   - Cost of waiting: "Every month of delay costs $X"

7. TEAM & NEXT STEPS (1 page)
   - Team narrative (from Phase 1)
   - Relevant case study proof point (1-2 sentences + metric)
   - Clear next step: "Sign and return by [date]. Kickoff within 5 business days."
```

### Pattern 3: Value-Add Follow-Up Sequence

**What:** Every follow-up email delivers value rather than asking for a response. Each email references specific numbers from the prospect's discovery call.

**When to use:** When a prospect goes silent after receiving a proposal.

```
5-Email Follow-Up Sequence (21 days)

Email 1 (Day 3): Case study sharing
- Subject: "[Relevant industry] case study -- similar to what we discussed"
- Body: Share a case study from a company with a similar challenge
- CTA: "Happy to walk through how this would apply to [their company]"

Email 2 (Day 7): New insight or data point
- Subject: "Thought of [Company] when I saw this"
- Body: Share a relevant industry stat, article, or trend
- Connect it to their specific COI: "This aligns with the $X we calculated"
- CTA: "Want to revisit the timeline?"

Email 3 (Day 10): Address likely objection proactively
- Subject: "The question most [role]s ask at this stage"
- Body: Preemptively address the most common objection for their ICP
- CTA: "If this resonates, let's get 15 minutes on the calendar"

Email 4 (Day 14): CEO/stakeholder-ready summary
- Subject: "One-page summary for your team"
- Body: Attach the executive summary (from Phase 1 templates)
- Frame as helping them build internal consensus
- CTA: "Want me to join a brief call with your [CFO/CTO/board]?"

Email 5 (Day 21): Graceful close with open door
- Subject: "Closing the loop on [project name]"
- Body: Acknowledge timing may not be right
- Restate the monthly COI: "The current process continues to cost $X/month"
- CTA: "When timing is right, I'm here. In the meantime, I'll keep sharing relevant insights."
```

### Anti-Patterns to Avoid

- **Pitching on the discovery call instead of diagnosing.** Never present the solution before calculating COI. The call is a diagnostic, not a demo.
- **Sending proposals without a follow-up meeting scheduled.** Always book the proposal review meeting BEFORE sending the proposal document.
- **"Just checking in" follow-ups.** Every follow-up must carry standalone value. If the email would be useful even if they never buy, it is a good follow-up.
- **Quoting price before establishing value.** The COI number MUST be calculated before any pricing is discussed. No exceptions.
- **Sending identical proposals to different ICPs.** PE firms need EBITDA language. Startups need burn-rate language. Enterprise needs compliance language. Proposals must be ICP-adapted.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CRM pipeline tracking | Spreadsheet or Notion database | HubSpot CRM (Free) | Deal stage automation, email tracking, reporting, scales with the business |
| Proposal formatting | Plain text or basic Google Doc | Google Docs with consistent template + PDF export | Professional presentation, view tracking, easy to share with stakeholders |
| Call scheduling | Email back-and-forth | Calendly (already integrated) | Eliminates 3-4 emails per booking, shows professionalism |
| Objection handling | Improvisation on calls | Written scripts reviewed before every call | Consistency, confidence, tested language that converts |
| Follow-up cadence tracking | Mental tracking | HubSpot tasks + sequences | Prevents missed follow-ups, which kill deals |

**Key insight:** The sales process is a system. Each component (questionnaire -> call -> proposal -> follow-up) feeds the next. Building any component in isolation produces friction at handoff points.

## Common Pitfalls

### Pitfall 1: Treating Discovery Calls as Product Demos
**What goes wrong:** Saksham talks about what he can build instead of diagnosing the prospect's problem. The prospect leaves with information but no urgency.
**Why it happens:** Technical founders default to showing capability instead of identifying pain.
**How to avoid:** Use the 70/30 rule rigidly. Set a physical timer if needed. The COI framework forces diagnostic behavior because it requires the prospect's data, not Saksham's pitch.
**Warning signs:** Saksham is talking more than 40% of the call. No COI number is calculated. The prospect says "interesting" instead of "how soon can we start?"

### Pitfall 2: Proposals That Sit Unread
**What goes wrong:** The proposal is sent, no review meeting is booked, the deal stalls.
**Why it happens:** Proposals sent via email without a scheduled review meeting have a 30-50% open rate. Even when opened, the prospect reads alone without Saksham to contextualize the investment.
**How to avoid:** NEVER send a proposal without booking a 30-minute proposal review meeting first. Say on the discovery call: "I'll send the proposal Tuesday. Let's book 30 minutes Thursday to walk through it together."
**Warning signs:** Proposals are being sent without a next meeting on the calendar.

### Pitfall 3: Not Adapting Language to ICP
**What goes wrong:** Using startup language ("burn rate," "runway") with PE firms, or PE language ("EBITDA," "exit multiples") with startup founders.
**Why it happens:** Having one proposal template used for all prospects.
**How to avoid:** The proposal template must include ICP-specific language variants. The DM playbook already separates PE and startup messaging -- the same separation applies to proposals and follow-ups.
**Warning signs:** All proposals read the same regardless of who they're sent to.

### Pitfall 4: Letting Past Clients Go Cold
**What goes wrong:** The 16 case study clients are treated as finished engagements rather than expansion opportunities.
**Why it happens:** Focus on new pipeline over existing relationships. No systematic check-in cadence.
**How to avoid:** Audit every past client for the specific "next problem" you can solve. Re-engagement messages should reference the SPECIFIC results delivered, not generic "great working with you" language.
**Warning signs:** No past client has been contacted in 90+ days.

### Pitfall 5: Price Objection Panic
**What goes wrong:** Saksham reduces price immediately when a prospect pushes back. This signals low confidence and trains prospects to negotiate.
**Why it happens:** Discomfort with high-ticket pricing, especially in the first few deals.
**How to avoid:** Review the pricing playbook objection scripts before EVERY discovery call. The response to "too expensive" is always to redirect to COI, not to lower price. If scope must be reduced, frame it as the client's choice: "We can reduce scope, but that leaves $X in savings on the table."
**Warning signs:** Deals close at lower-than-quoted prices without scope reduction.

## Code Examples

This phase produces documents, not code. Examples below show the exact content patterns to follow.

### Pre-Call Diagnostic Questionnaire (SALES-03)

```markdown
# Pre-Call Diagnostic Questionnaire
Send via email or form 24-48 hours before the discovery call.

1. What is the specific operational challenge you're looking to solve?
   (One paragraph -- the more specific, the better our conversation will be.)

2. How many people on your team are currently involved in this process?
   (Approximate number and their roles.)

3. Roughly how many hours per week does your team spend on this process?
   (Your best estimate is fine.)

4. What tools or systems do you currently use for this workflow?
   (CRM, helpdesk, spreadsheets, custom software -- list everything involved.)

5. Have you attempted to solve this problem before? What happened?
   (Previous vendors, internal attempts, tools tried.)

6. Who else will be involved in the decision to move forward?
   (Names and titles of key stakeholders.)

7. What is your ideal timeline for having a solution in place?
   (When do you need this operational?)
```

### Past Client Re-Engagement Message Pattern (SALES-04)

```markdown
# Re-Engagement Message Template (adapt per client)

Subject: Quick update on [specific system we deployed]

Hi [Name],

It's been [X months] since we deployed [specific system name] at [Company].
Last time we measured, [specific metric: "the system was deflecting 68% of
support tickets" / "fuel costs were down 23%"].

Curious how those numbers are tracking now.

Also -- based on what we saw during the engagement, [specific adjacent
opportunity: "your onboarding workflow had similar manual bottlenecks that
could benefit from the same approach" / "the CRM integration we discussed
in Phase 2 is something we've since deployed for three other companies"].

Worth a 20-minute call to see if there's a quick win?

-- Saksham
```

### HubSpot Pipeline Configuration (SALES-07)

```markdown
# HubSpot Pipeline: AI Consulting Deals

## Stages (in order)

1. LEAD
   - Entry: Contact created from /solutions form, LinkedIn DM, or referral
   - Required: Contact name, company, source, ICP segment (PE/Startup/Enterprise)
   - Exit criteria: Pre-call questionnaire sent

2. QUALIFIED
   - Entry: Pre-call questionnaire received, ICP confirmed
   - Required: Questionnaire responses logged, budget range estimated
   - Exit criteria: Discovery call scheduled

3. DISCOVERY CALL
   - Entry: Call scheduled on Calendly
   - Required: Call date, pre-call research completed (3x3 method)
   - Exit criteria: Call completed, BANT qualified, COI calculated

4. PROPOSAL SENT
   - Entry: Proposal document delivered
   - Required: Proposal PDF attached, tier selected, price quoted, review meeting booked
   - Exit criteria: Proposal reviewed together on call

5. NEGOTIATION
   - Entry: Prospect engaged with proposal (questions, stakeholder involvement)
   - Required: Decision timeline confirmed, stakeholders identified
   - Exit criteria: Verbal yes or formal decline

6. CLOSED WON / CLOSED LOST
   - Won: Contract signed, first payment received
   - Lost: Reason logged (lost to competitor, no budget, no decision, timing)
   - Required for Lost: Loss reason, follow-up date set (if "timing")

## Deal Properties (Custom)
- ICP Segment: PE Firm / Funded Startup / Enterprise
- Offer Tier: Audit / Sprint / Transformation
- COI Amount: Dollar value calculated on discovery call
- Decision Maker: Name + title of economic buyer
- Champion: Name + title of internal advocate (if different from decision maker)
- Stall Reason: (dropdown) Budget / Authority / Timing / Competition / No Decision
```

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| BANT alone for qualification | BANT + MEDDIC for complex deals | BANT handles Audit/Sprint. Add MEDDIC for Transformation deals with 5+ stakeholders |
| Text-only follow-up emails | Video email (Loom/Sendspark) for stalled deals | 2:1 meeting-to-reply ratio vs text email. Consider for Email 2 or 3 in sequence |
| Single decision maker assumption | 7-stakeholder average in B2B deals | Proposal section 7 must include stakeholder-ready materials (exec summary for forwarding) |
| Annual check-ins with past clients | Quarterly business reviews (QBRs) | Firms running QBRs report 33% higher expansion revenue |

**Not yet validated (LOW confidence):**
- Video email for high-ticket consulting (works for SaaS sales but unverified for $40K+ consulting engagements where formality matters)

## Validation Architecture

### Test Framework

This phase produces business documents (markdown), not application code. Validation is manual review against completeness criteria.

| Property | Value |
|----------|-------|
| Framework | Manual review (document phase) |
| Config file | none |
| Quick run command | `ls -la .planning/phases/04-sales-process-and-conversion/deliverables/` |
| Full suite command | Manual: verify each deliverable exists and contains required sections |

### Phase Requirements to Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SALES-01 | Discovery call framework with BANT, COI, 70% listening | manual-only | `cat deliverables/discovery/discovery-call-framework.md \| head -5` | Wave 0 |
| SALES-02 | 7-section proposal template | manual-only | `cat deliverables/proposals/proposal-template.md \| head -5` | Wave 0 |
| SALES-03 | Pre-call questionnaire (5-7 questions) | manual-only | `cat deliverables/discovery/pre-call-questionnaire.md \| head -5` | Wave 0 |
| SALES-04 | 16 client audit + re-engagement messages | manual-only | `cat deliverables/pipeline/past-client-outreach-plan.md \| head -5` | Wave 0 |
| SALES-05 | 5-email follow-up sequence (21 days) | manual-only | `cat deliverables/conversion/follow-up-sequence.md \| head -5` | Wave 0 |
| SALES-06 | Objection handling scripts | manual-only | `cat deliverables/conversion/objection-handling-scripts.md \| head -5` | Wave 0 |
| SALES-07 | HubSpot pipeline configuration | manual-only | `cat deliverables/pipeline/hubspot-pipeline-setup.md \| head -5` | Wave 0 |

**Justification for manual-only:** All deliverables are prose documents (sales frameworks, templates, scripts). There is no application code to unit test. Validation means confirming each document exists, contains the required sections, and uses correct ICP-specific language.

### Sampling Rate
- **Per task commit:** Verify deliverable file exists and has expected section headers
- **Per wave merge:** Read through all deliverables, cross-reference with requirements
- **Phase gate:** All 7 deliverable files exist with complete content

### Wave 0 Gaps
None -- no test infrastructure needed. This is a document-creation phase.

## Open Questions

1. **Exact past client count: 14 or 16?**
   - What we know: Requirements say "14 case study clients." The content/case-studies/ directory has 16 MDX files.
   - What's unclear: Whether some case studies are from the same client or whether 2 are hypothetical/composite.
   - Recommendation: Audit all 16 case study files. Deduplicate if any represent the same client. The re-engagement plan covers all unique past clients.

2. **HubSpot tier and capabilities**
   - What we know: HubSpot Free CRM supports custom pipelines, deal stages, and basic properties.
   - What's unclear: Whether Saksham already has a HubSpot account, what tier, and whether email sequences require Sales Hub Starter ($20/month).
   - Recommendation: Build the pipeline on Free tier. Manual email sending for follow-up sequences initially. Upgrade to Starter only if deal volume justifies automation.

3. **Video email for follow-ups**
   - What we know: Video email produces 2:1 meeting-to-reply ratio in B2B sales.
   - What's unclear: Whether this applies to $40K+ consulting where prospects expect formal communication.
   - Recommendation: Keep follow-up sequence as text email for now. Test video email as an experiment on Email 2 after the first 5 prospects go through the sequence.

## Sources

### Primary (HIGH confidence)
- Phase 1 pricing framework (04-pricing-framework.md) -- COI framework, objection handling, payment terms
- Phase 1 executive summaries (08/09/10-executive-summary-*.md) -- SCR format, proof points
- Phase 1 team narrative (11-team-narrative.md) -- all team-related talking points
- Phase 3 DM playbook (dm-playbook.md) -- engagement-first outbound patterns, ICP-specific language
- 16 case study MDX files -- metrics and client context for re-engagement

### Secondary (MEDIUM confidence)
- [HubSpot pipeline setup docs](https://knowledge.hubspot.com/object-settings/set-up-and-customize-your-deal-pipelines-and-deal-stages) -- pipeline configuration
- [HubSpot BANT framework guide](https://blog.hubspot.com/sales/bant) -- qualification methodology
- [Consulting Success proposal template](https://www.consultingsuccess.com/consulting-proposal-template) -- proposal structure patterns
- [Belkins follow-up statistics](https://belkins.io/blog/sales-follow-up-statistics) -- B2B follow-up benchmarks

### Tertiary (LOW confidence)
- Video email 2:1 meeting-to-reply ratio (single source: Sendspark blog) -- needs validation
- 7-stakeholder average for B2B deals (multiple sources but varies by deal size)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- frameworks (BANT, COI, SCR) are well-established and already partially built in Phase 1
- Architecture: HIGH -- document structure follows patterns established in Phases 1 and 3
- Pitfalls: HIGH -- drawn from established B2B sales best practices with multiple corroborating sources
- Past client outreach: MEDIUM -- 16 vs 14 client count discrepancy needs resolution during planning

**Research date:** 2026-03-11
**Valid until:** 2026-04-11 (stable domain -- sales process frameworks change slowly)
