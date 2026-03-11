# Discovery Call Framework

**Format:** 45-minute diagnostic session
**Listening ratio:** 70% prospect, 30% Saksham
**Purpose:** Diagnose the problem, quantify the cost, qualify the prospect, prescribe the right tier

This is a diagnostic, not a pitch. You ask questions and listen. The prospect's own data justifies the investment. If you are talking more than 30% of the call, you are pitching -- stop and ask another question.

---

## Pre-Call Preparation (10 minutes before)

1. Review the completed pre-call questionnaire (see: `pre-call-questionnaire.md`)
2. Annotate responses with notes -- flag anything that needs deeper probing
3. Complete 3x3 research: 3 facts about the company (recent news, funding, headcount), 3 facts about the person (role tenure, LinkedIn activity, mutual connections)
4. Open the COI calculator -- you will use it live on the call
5. Decide which ICP segment they fit (PE, Startup, Enterprise) based on questionnaire responses

---

## Phase 1: OPENING (5 minutes)

**Goal:** Build rapport, set expectations, confirm preparation.

### Script

> "Thanks for taking the time, [Name]. I reviewed your questionnaire responses -- [reference one specific answer that caught your attention]. Before we dig in, let me set the agenda."

> "I'll ask diagnostic questions for most of this call. My goal is to understand your current situation and quantify the business impact of the problem you described. If there's a fit between what you need and what I do, I'll explain what working together looks like. If not, I'll tell you that too. Sound good?"

### If They Did Not Complete the Questionnaire

> "No worries -- let me walk you through a few questions to get us on the same page. This will take about 10 minutes, then we'll move into the deeper diagnostic."

Use the first 10 minutes to walk through the questionnaire verbally. Never cancel or reschedule because of an incomplete questionnaire.

### Opening Checklist

- [ ] Reference a specific questionnaire response (shows preparation)
- [ ] Set the diagnostic frame ("I'll ask questions, you talk")
- [ ] Confirm time: "We have 45 minutes -- I'll keep us on track"
- [ ] Get verbal agreement on the agenda

---

## Phase 2: DIAGNOSTIC (25 minutes) -- 70% Listening

This is the core of the call. Three sub-phases, each building on the last.

### Phase 2A: Situation (5 minutes)

**Goal:** Map the company context and current state. Use questionnaire responses as the starting point -- go deeper, not wider.

**Questions:**

1. "Walk me through how [the process they described] works today, step by step."
   - Listen for: manual handoffs, tool-switching, bottlenecks, error-prone steps

2. "How many people touch this process daily?"
   - Listen for: team size, roles involved, management overhead

3. "What tools are involved?" (Cross-reference their questionnaire answer)
   - Listen for: disconnected systems, spreadsheet workarounds, data silos

4. "Where is the company headed in the next 12-18 months?"
   - Listen for: growth trajectory, hiring plans, scaling challenges -- this feeds the compounding factor in COI Question 5

**Transition:** "That gives me a clear picture. Now I want to understand the cost of running things this way."

### Phase 2B: Pain Quantification -- Cost of Inaction (10 minutes)

**Goal:** Calculate the annual cost of the current problem, live on the call, using the prospect's own numbers.

Use the **exact COI 5-Question Discovery Framework** from the pricing playbook (`01-offer-architecture-and-positioning/deliverables/04-pricing-framework.md`, Section 3). The five questions are:

**Question 1:** "How many hours does your team spend on [manual process] per week?"
- Use the conservative end if they hedge ("probably 30-40 hours" = use 30)

**Question 2:** "What's the fully-loaded cost of those hours?"
- If they don't know: "What's the average salary of the people doing this work?" Then multiply by 1.4 and divide by 2,080 for the hourly loaded cost.

**Question 3:** "How many leads, customers, or opportunities do you lose because of this?"
- Slow response times cause churn. Manual errors lose deals. Bottlenecks delay revenue.
- If they can't quantify: "What percentage of your tickets, leads, or orders are affected by delays?"

**Question 4:** "What's the revenue impact of that loss?"
- Multiply the volume from Q3 by their average customer value or deal size.

**Question 5:** "How much worse does this get in 12 months without action?"
- Growth multiplier. If they are growing 20% YoY, the problem grows 20% too.

**Calculate live:**

```
Total Annual COI = (Labor Cost + Revenue Loss) x Growth Multiplier

Where:
  Labor Cost    = Hours/week x 52 x Loaded hourly cost
  Revenue Loss  = Lost customers/leads x Average value
  Growth Mult   = 1 + Annual growth rate
```

Share your screen or send the numbers in chat as you calculate. The prospect must see the COI number built from their own data -- not presented as a finished figure.

**Transition:** "So we're looking at roughly $[COI] per year in cost from this process, and that grows to $[Year 2 COI] next year. Let me ask a few more questions to make sure I understand the full picture."

### Phase 2C: BANT Qualification (10 minutes)

**Goal:** Determine if this prospect can actually buy and when.

#### Budget

**Primary:** "What have you allocated for solving this problem?"

**If they deflect or say "we haven't set a budget":**
> "That's common at this stage. Based on what we've just calculated -- $[COI] per year in cost -- most companies in your situation invest between $[range based on likely tier]. Does that range feel realistic for your organization?"

**If they push for your number first:**
> "Let me understand the full picture first, then I'll give you a specific recommendation with the numbers behind it."

#### Authority

**Primary:** "Who else needs to approve this type of investment?"

**Follow-ups:**
- "What does the approval process look like at [Company]?"
- "Has your team made a purchase in this range before? How did that decision get made?"
- "Would it make sense to bring [decision maker] into our next conversation?"

**Map the decision chain:** Write down every name and title. You will need this for the proposal.

#### Need

**Primary:** "What happens if you don't solve this in the next 6 months?"

This connects directly back to COI. Listen for:
- Competitive pressure ("Our competitors are already doing this")
- Internal pressure ("The board is asking about it")
- Operational breaking point ("We can't scale past [number] without fixing this")
- Revenue at risk ("We'll lose [customer/contract] if we don't improve")

**If the need is soft or vague, probe harder:**
> "What would it mean for your team specifically if nothing changes?"
> "Is this a 'nice to have' or a 'must solve' for the next quarter?"

#### Timeline

**Primary:** "When do you need this operational?"

**Follow-ups:**
- "Is there an external deadline driving this? (Board meeting, contract renewal, product launch)"
- "What's the cost of delaying the start by 3 months?" (Redirect to COI: "That's another $[quarterly COI] in operational cost.")

---

## Phase 3: PRESCRIPTION (10 minutes)

**Goal:** Recommend the right tier, frame the investment against COI, adapt language to ICP.

### Tier Recommendation Decision Matrix

| Signal | Recommended Tier | Typical ICP |
|--------|-----------------|-------------|
| Early-stage exploration, needs internal buy-in, wants to quantify before committing | **AI Opportunity Audit** ($15K-$40K) | Enterprise |
| Specific problem identified, budget confirmed, ready to execute within 60 days | **AI Operations Sprint** ($75K-$200K) | Startup, Mid-Market |
| Multiple pain points across departments, PE mandate, portfolio-wide opportunity | **AI Transformation Program** ($250K-$1M+) | PE-Backed, Large Enterprise |

### Additional Tier Signals

**Audit signals:**
- They say "we need to build a business case" or "we need to present this to the board"
- Multiple stakeholders need convincing before a larger commitment
- They are not sure where the biggest opportunity is
- Enterprise ICP with procurement processes

**Sprint signals:**
- They completed the questionnaire thoroughly -- they know their problem
- COI calculation produced a clear, specific number
- One decision maker present on the call
- Budget authority confirmed in the $75K-$200K range
- Startup or mid-market ICP with faster decision cycles

**Transformation signals:**
- COI number exceeds $500K annually
- Multiple departments mentioned during diagnostic
- PE operating partner or C-suite sponsor on the call
- They mention "modernization," "operational overhaul," or "portfolio-wide"
- Board or investment committee involvement

### Presenting the Recommendation

**Standard framing (all ICPs):**

> "Based on what we've discussed, you're looking at $[COI] per year in operational cost from this process. I'd recommend [Tier Name] -- here's why."

> "The investment is $[price range] against the $[COI] annual cost we just calculated. At conservative estimates, that means [payback period / ROI statement]."

### ICP-Specific Language Variants

**PE Firms / Portfolio Companies:**
- Use: EBITDA impact, margin improvement, exit multiples, portfolio-level ROI, operational efficiency at scale
- Frame: "This directly impacts EBITDA by $[amount]. Across [N] portfolio companies, we're talking about $[portfolio-wide impact] in margin improvement."
- Reference: operating partner as champion, portfolio CEO as buyer
- Urgency: "Every quarter of delay is $[quarterly COI] off the EBITDA line."

**Funded Startups:**
- Use: burn rate, runway extension, shipping speed, competitive advantage, capital efficiency
- Frame: "Right now this process burns $[COI/12] per month. The Sprint pays for itself in [months] and extends your effective runway by reducing operational overhead."
- Reference: CTO or CEO as decision maker, board as influencer
- Urgency: "Your next funding round will go better with $[savings] in documented operational efficiency."
- Entry point is Sprint, not Audit. Startups want features shipped, not diagnostics.

**Enterprise:**
- Use: compliance, change management, risk mitigation, cross-departmental alignment, procurement process
- Frame: "The Audit gives your team the internal business case document needed to move forward with confidence. It quantifies the opportunity so procurement and leadership can evaluate it against other initiatives."
- Reference: multiple stakeholders, procurement cycles, internal champions
- Urgency: "The approval process takes [X weeks]. Starting the Audit now means deployed systems by [date], not [later date]."
- Entry point is Audit. Multi-stakeholder approval requires a formal business case.

---

## Phase 4: NEXT STEPS (5 minutes)

**Goal:** Book the proposal review meeting, identify stakeholders, set timeline.

### Critical Rule: Never Send a Proposal Into a Void

Book the proposal review meeting BEFORE sending the proposal. Always. No exceptions.

> "I'll put together a detailed proposal and send it over within 48 hours. Let's book 30 minutes [day] to walk through it together -- that way I can answer questions in real time and make sure it addresses everything we discussed."

### Stakeholder Mapping

> "You mentioned [names from Authority discussion] would need to review this. Should we include them on the proposal review call, or would you prefer to review it first and then bring them in?"

### Timeline Confirmation

> "Based on what you've told me, you want this operational by [date from Timeline discussion]. Working backward, that means we'd need to kick off by [date]. Does that work?"

### For Complex Deals (Transformation Program) -- Add MEDDIC Elements

When the deal involves 3+ stakeholders or $250K+, go deeper:

- **Identify the Champion:** "Who on your team is most invested in making this happen? I want to make sure they have everything they need to advocate for this internally."
- **Map the Decision Process:** "Walk me through how a decision like this typically gets approved. What are the steps, and who signs off at each stage?"
- **Confirm Metrics:** "When this is deployed, what does success look like to your board/leadership? What metric do they care about most?"
- **Economic Buyer:** "Who ultimately controls the budget for this? Is that you, or someone else we should loop in?"

### Closing the Call

> "Great. So here's what happens next: I'll send the proposal by [day]. We'll review it together on [day/time]. If it looks right, we can have the agreement ready to sign that same week and kick off [timeline]. Sound good?"

---

## Phase 5: POST-CALL CHECKLIST (Immediately After)

Complete within 2 hours of hanging up:

- [ ] **Log call notes in HubSpot** -- Move deal to "Discovery Call" stage
- [ ] **Record BANT qualification results:**
  - Budget: [amount/range confirmed or TBD]
  - Authority: [decision maker name(s) and title(s)]
  - Need: [urgency level -- critical / important / exploratory]
  - Timeline: [target date for operational deployment]
- [ ] **Calculate final COI number** -- Clean up the live calculation, document assumptions
- [ ] **Select proposal tier** -- Audit, Sprint, or Transformation
- [ ] **Set deal amount in HubSpot** -- Use the midpoint of the tier range unless a specific number was discussed
- [ ] **Send recap email** within 2 hours:

### Recap Email Template

> Subject: Next steps from our conversation -- [Company Name]
>
> Hi [Name],
>
> Thanks for a productive conversation today. Here's a quick summary of what we covered:
>
> **Current situation:** [1-2 sentences about their process and challenge]
>
> **Cost of the current approach:** $[COI]/year (growing to $[Year 2 COI] by next year)
>
> **Recommended next step:** [Tier Name] -- I'll include the full details in the proposal
>
> **Timeline:** Proposal sent by [date]. Review call booked for [date/time].
>
> If anything comes up before then, reply to this email.
>
> -- Saksham

- [ ] **Begin proposal drafting** -- Use the proposal template, reference call notes for personalization
- [ ] **Book proposal review meeting** on calendar (if not already confirmed on the call)

---

## Red Flags / Disqualification Signals

These indicate the prospect is unlikely to buy. Do not invest further time in proposal creation if two or more are present.

| Red Flag | What It Looks Like | What to Do |
|----------|-------------------|------------|
| No budget authority | "I'd need to check with..." with no clear path to the decision maker | Ask to include the decision maker on a second call. If they resist, deprioritize. |
| Timeline > 12 months | "We're thinking about this for next year" | Offer to stay in touch. Add to nurture list. Do not send a proposal. |
| "Just exploring" with no pain | Cannot articulate a specific problem or quantify any cost | End the call early and politely. "It sounds like timing might not be right yet. When the problem becomes more pressing, reach out." |
| Requesting hourly rates | "What's your hourly rate?" or "Can we do T&M?" | Redirect: "We price based on business impact, not time. The COI we calculated gives us the right framework for pricing." If they insist, they are not the right client. |
| Shopping for the cheapest option | Comparing you to Fiverr, Upwork, or low-cost agencies | "My work is structured around measurable business outcomes, not hourly output. If budget is the primary criterion, I may not be the right fit." |
| No clear problem | Vague answers to every question, cannot describe the process they want fixed | "I want to make sure I can actually help before we go further. Can you give me a specific example of where this process breaks down?" If still vague, disengage gracefully. |
| Committee without a champion | "We'll need to run this by the team" but no individual is advocating | Ask directly: "Who on your team is most invested in solving this?" If no one, the deal will stall. |

---

## Call Timing Notes

| Phase | Duration | Cumulative | Saksham Talking |
|-------|----------|------------|-----------------|
| Opening | 5 min | 0-5 min | 80% (setting agenda) |
| Diagnostic: Situation | 5 min | 5-10 min | 20% (asking questions) |
| Diagnostic: COI | 10 min | 10-20 min | 30% (guiding calculation) |
| Diagnostic: BANT | 10 min | 20-30 min | 30% (asking questions) |
| Prescription | 10 min | 30-40 min | 70% (presenting recommendation) |
| Next Steps | 5 min | 40-45 min | 60% (confirming actions) |
| **Weighted Average** | **45 min** | -- | **~37% talk time** |

The 70% listening target applies to the Diagnostic phase specifically. Overall call talk time should land around 35-40% Saksham, 60-65% prospect.

---

*Review this framework before every discovery call. The structure prevents the most common mistake: pitching instead of diagnosing. If you calculate the COI correctly, the pricing conversation handles itself.*
