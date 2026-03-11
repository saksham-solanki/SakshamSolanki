# HubSpot CRM Pipeline Configuration Guide

**AI Consulting Deals Pipeline | 6 Stages | Custom Properties | Step-by-Step Setup**

---

## Overview

This guide walks through configuring HubSpot CRM (Free tier) to manage Saksham's AI consulting pipeline. Follow the steps in order -- the pipeline, properties, and views build on each other.

**Time to complete:** 60-90 minutes for full setup.

**HubSpot tier:** Free CRM. Features requiring Sales Hub Starter ($20/month) are marked with [STARTER] and listed as optional upgrades at the end.

---

## 1. Pipeline: AI Consulting Deals

### Stage Configuration

Configure these 6 stages in order. Each stage has entry criteria (what must be true before a deal enters), required properties (what must be filled in), and exit criteria (what must happen before the deal moves forward).

---

#### Stage 1: LEAD

**Win probability:** 10%

**Entry criteria:**
- Contact created from one of: /solutions website form, LinkedIn DM, LinkedIn outbound, referral, or past client re-engagement
- Basic contact information is captured

**Required properties at this stage:**
- Contact name
- Company name
- Source Channel (Website Form / LinkedIn Inbound / LinkedIn Outbound / Referral / Past Client)
- ICP Segment (PE Firm / Funded Startup / Enterprise)

**Exit criteria:**
- Pre-call questionnaire has been sent to the contact
- Pre-Call Questionnaire Status updated to "Sent"

**Actions when deal enters this stage:**
- Create a task: "Send pre-call questionnaire to [Contact Name]" (due: same day)
- [STARTER] Automation: auto-create the task when deal stage changes to Lead

---

#### Stage 2: QUALIFIED

**Win probability:** 25%

**Entry criteria:**
- Pre-call questionnaire responses received
- ICP segment confirmed (contact matches PE Firm, Funded Startup, or Enterprise criteria)
- Pre-Call Questionnaire Status updated to "Completed"

**Required properties at this stage:**
- Questionnaire responses logged in deal notes
- Budget range estimated (from questionnaire or initial conversation)
- ICP Segment confirmed

**Exit criteria:**
- Discovery call scheduled on Calendly
- Call date logged in deal properties

**Actions when deal enters this stage:**
- Review questionnaire responses and confirm ICP fit
- If ICP does not match (too small, wrong industry, no budget), move to Closed Lost with reason "No Fit"
- If ICP matches, send Calendly link to schedule discovery call

---

#### Stage 3: DISCOVERY CALL

**Win probability:** 40%

**Entry criteria:**
- Discovery call scheduled
- Call date is confirmed

**Required properties at this stage:**
- Call date (date property)
- Pre-call research completed: 3x3 method notes in deal (3 things about the company, 3 things about the person)

**Exit criteria:**
- Call completed
- BANT qualification documented (Budget, Authority, Need, Timeline)
- COI (Cost of Inaction) amount calculated and logged
- Offer Tier selected (Audit / Sprint / Transformation)

**Post-call actions:**
- Log COI Amount in custom property
- Update Offer Tier based on diagnostic findings
- Log Decision Maker name and title
- Log Champion name and title (if different from decision maker)
- Create task: "Draft proposal for [Company] within 48 hours"
- **CRITICAL:** Book the proposal review meeting BEFORE the discovery call ends. Do not send a proposal without a review meeting on the calendar.

---

#### Stage 4: PROPOSAL SENT

**Win probability:** 60%

**Entry criteria:**
- Proposal document delivered to the contact
- Proposal review meeting is scheduled (non-negotiable -- do NOT enter this stage without a review meeting booked)

**Required properties at this stage:**
- Proposal PDF attached to deal (use HubSpot's file attachment on the deal record)
- Offer Tier confirmed (Audit / Sprint / Transformation)
- Deal amount set (quoted price)
- Review meeting date logged

**Exit criteria:**
- Proposal review meeting completed
- Prospect has reviewed the proposal and engaged (questions, stakeholder involvement, or decline)

**Actions when deal enters this stage:**
- Set a reminder for 24 hours before the review meeting
- Prepare ICP-specific talking points for the review (PE = EBITDA language, Startup = burn rate language, Enterprise = compliance language)

---

#### Stage 5: NEGOTIATION

**Win probability:** 75%

**Entry criteria:**
- Prospect has engaged with the proposal (asked questions, involved stakeholders, requested modifications)

**Required properties at this stage:**
- Decision timeline confirmed (specific date, not "soon")
- All stakeholders identified (names and titles)
- Stall Reason (if applicable): Budget / Authority / Timing / Competition / No Decision

**Exit criteria:**
- Verbal yes (proceed to Closed Won)
- Formal decline (proceed to Closed Lost)
- Deal stalls for 14+ days without progress (trigger follow-up sequence)

**Actions during this stage:**
- If deal stalls: begin the 5-email follow-up sequence (from Phase 4 follow-up-sequence.md)
- If stakeholders need materials: send the executive summary (from Phase 1 templates) for internal circulation
- Log all stakeholder interactions in deal notes
- **Never reduce price without reducing scope.** If prospect pushes back on pricing, redirect to COI number. Review pricing playbook objection scripts before every negotiation call.

---

#### Stage 6: CLOSED WON / CLOSED LOST

**Win probability:** 100% (Won) / 0% (Lost)

**Closed Won required properties:**
- Contract signed (note date in deal)
- First payment received (note date and amount)
- Kickoff date set
- Deal amount finalized

**Closed Won actions:**
- Create task: "Send onboarding materials to [Company]"
- Create task: "Schedule kickoff call within 5 business days"
- Update Source Channel to track which acquisition channel produced the win

**Closed Lost required properties:**
- Loss Reason (dropdown): Lost to Competitor / No Budget / No Decision / Timing / Internal Solution / No Fit
- Follow-up date set (mandatory if loss reason is "Timing")
- Loss notes: brief explanation of what happened

**Closed Lost actions:**
- If loss reason is "Timing": add to 90-day re-engagement list. Create a task for follow-up at the date specified.
- If loss reason is "No Budget": add to 6-month check-in list.
- If loss reason is "Lost to Competitor": log which competitor and why. This is competitive intelligence.
- All other reasons: log and close. Do not pursue further unless the contact re-engages.

---

## 2. Custom Deal Properties

Create these custom properties in HubSpot. They supplement the default deal properties (deal name, amount, close date, stage) with consulting-specific fields.

| Property Name | Field Type | Options / Description | Required? |
|---------------|-----------|----------------------|-----------|
| ICP Segment | Dropdown | PE Firm / Funded Startup / Enterprise | Yes -- set at Lead stage |
| Offer Tier | Dropdown | Audit / Sprint / Transformation | Yes -- set at Discovery Call stage |
| COI Amount | Currency (USD) | Dollar value of the Cost of Inaction calculated during discovery call | Yes -- set at Discovery Call stage |
| Decision Maker | Single-line text | Name + title of the economic buyer (e.g., "Sarah Chen, CFO") | Yes -- set at Discovery Call stage |
| Champion | Single-line text | Name + title of the internal advocate, if different from decision maker (e.g., "Mike Park, VP Operations") | Optional -- set when identified |
| Stall Reason | Dropdown | Budget / Authority / Timing / Competition / No Decision | Set when deal stalls in Negotiation |
| Source Channel | Dropdown | Website Form / LinkedIn Inbound / LinkedIn Outbound / Referral / Past Client | Yes -- set at Lead stage |
| Pre-Call Questionnaire Status | Dropdown | Not Sent / Sent / Completed | Yes -- updated as questionnaire progresses |
| Loss Reason | Dropdown | Lost to Competitor / No Budget / No Decision / Timing / Internal Solution / No Fit | Yes -- set at Closed Lost |
| Proposal Review Date | Date | Date of the scheduled proposal review meeting | Set at Proposal Sent stage |
| Discovery Call Date | Date | Date of the scheduled discovery call | Set at Discovery Call stage |

---

## 3. Views and Filters

Create these saved views in the Deals section for daily pipeline management.

### View 1: Active Pipeline

**Purpose:** See all deals currently in progress.

**Filter:** Deal stage is NOT "Closed Won" AND deal stage is NOT "Closed Lost"

**Columns to display:** Deal name, Company, Stage, Amount, ICP Segment, Offer Tier, Owner, Last activity date

**Sort by:** Stage (ascending), then Last activity date (oldest first -- so stale deals surface)

---

### View 2: Stalled Deals

**Purpose:** Identify deals that need attention before they die.

**Filter:** Deal stage is "Proposal Sent" OR "Negotiation" AND last activity date is more than 7 days ago

**Columns to display:** Deal name, Company, Stage, Amount, Stall Reason, Last activity date, Owner

**Sort by:** Last activity date (oldest first)

**Action:** Review this view every Monday morning. Any deal here for 14+ days without progress needs either a follow-up action or a move to Closed Lost.

---

### View 3: Past Client Expansion

**Purpose:** Track re-engagement with existing clients separately from cold pipeline.

**Filter:** Source Channel is "Past Client"

**Columns to display:** Deal name, Company, Stage, Amount, ICP Segment, Offer Tier, Last activity date

**Sort by:** Stage (ascending)

---

### View 4: This Week's Calls

**Purpose:** Prepare for upcoming discovery calls.

**Filter:** Deal stage is "Discovery Call" AND Discovery Call Date is this week

**Columns to display:** Deal name, Company, Discovery Call Date, ICP Segment, Pre-Call Questionnaire Status

**Sort by:** Discovery Call Date (ascending)

**Action:** Review this view every Sunday evening. For each call, complete the 3x3 pre-call research and review the COI framework questions.

---

### View 5: Won Deals (Performance Tracking)

**Purpose:** Track closed deals for reporting and pattern analysis.

**Filter:** Deal stage is "Closed Won"

**Columns to display:** Deal name, Company, Amount, ICP Segment, Offer Tier, Source Channel, Close date

**Sort by:** Close date (most recent first)

---

## 4. Setup Instructions

### Step 1: Create a HubSpot Account (if needed)

1. Go to [hubspot.com](https://www.hubspot.com/) and click "Get started free"
2. Sign up with your business email
3. Select "I want to organize my sales process" during onboarding
4. Skip any trial upgrade prompts -- the Free CRM is sufficient to start

### Step 2: Create the Pipeline

1. Click the **Settings gear icon** (top right)
2. In the left sidebar, go to **Objects > Deals**
3. Click the **Pipelines** tab
4. If a default "Sales Pipeline" exists, click on it to edit. Otherwise click **Create pipeline**
5. Name the pipeline: **AI Consulting Deals**
6. Delete any default stages that do not match the 6 stages above
7. Add stages in order:
   - Click **+ Add stage**
   - Enter the stage name (LEAD, QUALIFIED, DISCOVERY CALL, PROPOSAL SENT, NEGOTIATION, CLOSED WON, CLOSED LOST)
   - Set the win probability for each stage (10%, 25%, 40%, 60%, 75%, 100%, 0%)
   - Note: "Closed Won" and "Closed Lost" are typically separate stages in HubSpot, not combined. Create both.
8. Click **Save**

### Step 3: Create Custom Deal Properties

1. Click the **Settings gear icon**
2. In the left sidebar, go to **Properties**
3. Select the **Deal properties** tab (dropdown at top may say "Contact properties" -- change it to "Deal properties")
4. For each property in the table above:
   a. Click **Create property**
   b. **Group:** Deal information
   c. **Label:** [Property name from table]
   d. **Field type:** [Type from table -- Single dropdown, Single-line text, Currency, or Date]
   e. For dropdown properties: click **Add option** and enter each option value
   f. Click **Create**
5. Repeat for all 11 custom properties

### Step 4: Configure Required Properties Per Stage (Optional -- Improves Data Quality)

1. Go to **Settings > Objects > Deals > Pipelines**
2. Click on the **AI Consulting Deals** pipeline
3. Click on a stage name
4. Under "Properties shown during this stage," click **Edit properties**
5. Add the required properties for that stage (refer to Stage Configuration section above)
6. Check "Required" for properties that must be filled before the deal can move to the next stage
7. Repeat for each stage

Note: On the Free tier, "required" properties show a warning but do not hard-block stage changes. They serve as reminders. [STARTER] Sales Hub Starter adds hard enforcement.

### Step 5: Create Saved Views

1. Go to **CRM > Deals** in the main navigation
2. Click **All deals** (or whatever the default view is called)
3. Click **Add filter**
4. Set the filters as described in each view above
5. Arrange columns: click **Edit columns** (top right of the table) and add/remove columns as specified
6. Click **Save view** and name it (e.g., "Active Pipeline", "Stalled Deals", etc.)
7. Repeat for all 5 views

### Step 6: Connect Calendly (Optional but Recommended)

HubSpot integrates with Calendly to automatically create or update deals when calls are booked.

1. In HubSpot, go to **Settings > Integrations > Connected apps**
2. Search for "Calendly" and click **Connect app**
3. Follow the authorization flow to connect your Calendly account
4. Configure the integration: when a Calendly meeting is booked, automatically create a deal in the "Discovery Call" stage (or update an existing deal)

**Note:** The HubSpot-Calendly integration works on HubSpot Free + Calendly Pro ($10/month). If you are on Calendly Free, you will need to manually update deals when calls are booked.

### Step 7: Set Up Email Logging (Free)

1. In HubSpot, go to **Settings > General > Email**
2. Find your HubSpot **BCC email address** (it looks like: [unique-id]@bcc.hubspot.com)
3. Add this address as a BCC on every email you send to prospects
4. HubSpot will automatically log the email to the associated contact's timeline

**Alternative:** Install the HubSpot Sales extension for Gmail or Outlook. This adds a "Log to HubSpot" button directly in your email client.

---

## 5. Integration Notes

### /solutions Pre-Qualification Form (WEB-07)

The current /solutions page has a pre-qualification form that logs submissions to the console (Phase 2 implementation). To connect this to HubSpot:

**Recommended approach: HubSpot Forms Embed**

1. In HubSpot, go to **Marketing > Forms**
2. Create a new form with fields matching the current /solutions form:
   - Company name
   - Contact name
   - Email
   - Company size (11-50, 51-200, 200+)
   - Primary challenge
   - Timeline
   - How did you hear about us
3. In the form settings, set the form to automatically create a deal in the "LEAD" stage when submitted
4. Replace the current Next.js form on /solutions with HubSpot's embedded form code
5. This automatically captures leads into HubSpot with zero custom code

**Alternative approach: Custom API Integration**

If you want to keep the current custom form (for design consistency):
1. Keep the existing Next.js form
2. On form submission, POST the data to HubSpot's Contacts API + Deals API
3. This requires a HubSpot API key (free) and custom backend code
4. More work to build but preserves the current form's design and UX

**Recommendation:** Start with HubSpot Forms Embed (faster, zero maintenance). Switch to custom API integration later if the embedded form's design doesn't match the site.

### Calendly Integration

- HubSpot-Calendly integration auto-creates contacts and can update deal stages when calls are booked
- Available on: HubSpot Free + Calendly Pro ($10/month)
- Configuration: map Calendly event types to HubSpot deal stages

### Email Logging

- BCC method (free): add HubSpot's BCC address to every prospect email
- HubSpot Sales Extension (free): browser extension for Gmail/Outlook that adds logging buttons
- [STARTER] Email sequences: automated email sequences that send follow-ups on a schedule

### LinkedIn

- HubSpot does not natively integrate with LinkedIn DMs
- Manual process: after sending a LinkedIn DM, log it as a note on the HubSpot deal record
- Note format: "LinkedIn DM sent [date]: [brief summary of message]"

---

## 6. Optional Upgrades (Sales Hub Starter -- $20/month)

These features are not available on the Free tier but add significant value as deal volume increases:

| Feature | What It Does | When to Upgrade |
|---------|-------------|-----------------|
| Email Sequences | Automated multi-step email sequences with tracking | When you have 5+ stalled deals and manual follow-up becomes unsustainable |
| Required Properties (enforced) | Hard-block stage changes until required fields are filled | When data quality becomes an issue (deals moving stages with missing information) |
| Meeting Scheduling | Built-in Calendly alternative within HubSpot | If you want to consolidate tools (eliminates need for separate Calendly subscription) |
| Calling | Make calls directly from HubSpot with automatic recording and logging | When call volume exceeds 10/week and manual logging becomes a bottleneck |
| Simple Automation | Create tasks automatically when deals change stages | When you want stage-change triggers to create tasks without manual effort |

**Upgrade trigger:** When you consistently have 10+ active deals in the pipeline and manual tracking is taking more than 30 minutes per day, upgrade to Starter. Do not upgrade preemptively.

---

## 7. Daily Pipeline Management Routine

### Morning (5 minutes)

1. Open the **Active Pipeline** view. Scan for any deals that need action today.
2. Check the **This Week's Calls** view. Confirm all discovery calls are prepared (3x3 research done, COI questions reviewed).
3. Check the **Stalled Deals** view. If any deal has been stalled for 7+ days, take action (send follow-up or move to Closed Lost).

### After Every Discovery Call (10 minutes)

1. Update the deal with: COI Amount, Offer Tier, Decision Maker, Champion, BANT notes
2. Create task: "Draft proposal within 48 hours"
3. Confirm the proposal review meeting is booked and logged

### Friday (10 minutes)

1. Review **Past Client Expansion** view. Update any past client deals.
2. Review **Won Deals** view. Check for patterns (which ICP segment, which source channel, which tier is winning most).
3. Review **Stalled Deals** view. Decide: follow up or close.
4. Update deal amounts if any negotiations have changed pricing.

---

## Summary

- **6-stage pipeline:** Lead > Qualified > Discovery Call > Proposal Sent > Negotiation > Closed Won/Lost
- **11 custom deal properties** covering ICP segment, offer tier, COI amount, decision makers, stall reasons, and source channels
- **5 saved views** for daily pipeline management
- **Free tier configuration** with optional Starter upgrades flagged
- **Step-by-step setup instructions** for every element
- **Integration notes** for /solutions form, Calendly, email logging, and LinkedIn
