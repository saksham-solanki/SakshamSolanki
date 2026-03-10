# Phase 3: LinkedIn Reactivation and Pipeline - Research

**Researched:** 2026-03-10
**Domain:** LinkedIn profile optimization, content strategy, outbound prospecting, Sales Navigator targeting
**Confidence:** HIGH

## Summary

This phase reactivates a dormant LinkedIn account (5 months inactive, 5K-10K connections) into an active pipeline generating qualified conversations with $40K+ decision-makers. The research covers six domains: (1) dormant account reactivation mechanics, (2) profile optimization for premium B2B services, (3) content posting cadence and algorithm behavior, (4) non-generic outbound DM approaches that actually convert, (5) Sales Navigator targeting for PE firms and funded startups, and (6) warm network reactivation.

Existing assets are extensive -- the project already has 2026 algorithm research (LinkedIn_Twitter_Strategy_Complete_Context.md), a full CTA system (BRAND_ARCHITECTURE.md), a content engine blueprint (CONTENT_ENGINE.md), a ready Day 1 post, and 100+ post ideas. This research does NOT duplicate those assets. It focuses on filling the gaps the user explicitly identified: what actually works for non-generic outbound in 2026, multi-posting impact, profile optimization for premium positioning, Sales Navigator targeting specifics, and dormant account reactivation strategy.

**Primary recommendation:** Use a signal-based, engagement-first outbound approach -- engage with prospect content for 5-7 days before connecting, reference specific trigger events (funding, hiring, promotions) in connection requests, and use a 3-step value-first DM sequence. Do NOT post twice daily (cannibalization kills reach). Post once daily, 7 days/week, with 18-24 hour minimum spacing.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Profile rewrite:** Builder identity with metrics. Headline leads with "I build production AI systems" angle. About section opens with metrics ("14 production AI systems. $2.4M in client savings. Zero failed deployments."). Banner uses social proof/metrics, NOT title-based text. DM-based CTA: "DM me 'audit' for a free AI readiness assessment."
- **Content mix:** 70% trending AI topics (Claude Code builder logs, AI agent breakdowns, MCP explainers, tool comparisons, vibe coding) / 30% authority content (case studies, process, contrarian). Trending = reach engine. Authority = conversion engine.
- **Posting cadence:** 7 days/week daily posting. Explore 2x/day on some days (researcher to validate -- see findings below). Text-only for trending/tutorials, carousels (PDF) for case studies/frameworks. 150-250 words per post. No hashtags.
- **CTA approach:** DM-based CTAs only ("DM me 'audit'"). No "comment [keyword]" CTAs -- algorithm penalizes this in 2026.
- **Content production:** Weekly batches (7 posts drafted each Sunday). Templates per content type. Existing 100+ idea bank as source material. Responsive to trending topics.
- **Warmup sequence:** Day 1 = personal comeback story (draft exists). Day 2+ = trending AI topics. Day 6-7 = first authority content. 3 days posting before soft outbound. Full DM sequences start Day 8.
- **Engagement strategy:** Comment-first, 15-20 min/day on target ICP posts and AI thought leaders BEFORE posting own content. Continue throughout.
- **Outbound approach:** Must be genuinely personalized, NOT templated/generic. User explicitly rejected templated approaches. Different approach per ICP (PE firms vs startups). 20-25 prospects/day. Requires Sales Navigator.
- **DM sequence:** 3-step value-first (Day 1: thank + ask about challenges, Day 3: share relevant case study, Day 7: offer free audit).
- **ICP targeting:** 50/50 PE firms and funded startups. PE: operating partners and portfolio company CEOs. Startups: Series A-C founders and CTOs. Enterprise deprioritized for outbound.
- **Existing network reactivation:** Active DM campaign to dormant connections matching ICP. Run parallel to cold outbound.

### Claude's Discretion
- Exact headline wording (within builder identity direction)
- Banner design specifics (metrics showcase vs minimal -- optimize for credibility)
- Featured section combination (optimize for visitor conversion)
- Exact 7-day warmup content sequence (Day 1 locked as comeback, rest flexible)
- Whether to recommend 2x/day posting or stick with 1x (after research)
- Carousel design templates and formatting
- Sales Navigator filter criteria specifics
- Existing network audit methodology

### Deferred Ideas (OUT OF SCOPE)
- LinkedIn automation tools (Expandi, etc.) -- manual outbound first
- Auto-DM workflow via n8n -- implement after manual DM sequence proven
- LinkedIn Ads -- out of scope
- Twitter/X strategy -- LinkedIn is primary channel
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| LI-01 | LinkedIn profile fully rewritten -- headline, banner, about, featured -- positioned as premium AI systems partner | Profile optimization findings: headline formula, about section architecture, banner strategy, featured section optimization. 3-6 second first-impression window data. |
| LI-02 | 7-day warmup content plan -- personal, non-promotional posts to reactivate algorithm | Dormant account reactivation strategy, warmup pacing, algorithm re-engagement mechanics. Existing Day 1 draft ready. |
| LI-03 | Daily posting cadence defined -- content pillars, schedule | Multi-posting research (DO NOT post 2x/day -- cannibalization), optimal frequency data, format performance benchmarks (carousel 6.6% vs text ~4%). Existing content engine and pillar system. |
| LI-04 | 30 LinkedIn post drafts written -- first month ready | Content bank (100+ ideas) exists. Templates per content type. 70/30 trending/authority mix locked. Carousel and text format specs. |
| LI-05 | Outbound DM playbook -- connection requests, engage-first sequences, warm-to-pitch progression | Signal-based selling approach, engagement-first outbound (5-7 day warm-up), trigger event personalization, 3-step DM sequence, ICP-specific messaging. |
| LI-06 | ICP targeting criteria for Sales Navigator -- company size, industry, titles, funding stage | Sales Navigator filter specifics for PE firms and funded startups, Boolean search operators, activity-based filtering, funding event tracking. |
| LI-07 | Daily outbound workflow -- 10-15 targeted prospects/day, engage-connect-DM-call funnel | Connection request limits (100-200/week), safe daily volume (20-25/day), warm-up period for dormant account, SSI score considerations, LinkedIn flagging risk management. |
</phase_requirements>

## Standard Stack

This phase is content/strategy (not code), so "stack" means tools and platforms.

### Core
| Tool | Purpose | Why Standard |
|------|---------|--------------|
| LinkedIn Sales Navigator | ICP targeting, lead lists, trigger event monitoring, InMail | Required for PE/startup targeting at scale. 40+ filters beyond standard LinkedIn. Surfaces funding events. |
| Canva Pro | Carousel/PDF creation (1080x1350px, dark+mint brand) | Fastest carousel production. Export as PDF for document posts. |
| LinkedIn native | Profile editing, posting, manual DM outreach | Manual-first approach (automation deferred). |

### Supporting
| Tool | Purpose | When to Use |
|------|---------|-------------|
| Google Sheets / Notion | Outbound tracking, prospect list management, DM status tracking | Day 1 -- track all outbound activity before CRM integration (Phase 4). |
| Shield Analytics | Deep LinkedIn engagement metrics beyond native analytics | After warmup period to track content performance by format/topic. |
| Taplio or Buffer | Post scheduling (optional) | If batch-creating 7 posts on Sunday, schedule for the week. Not required -- can post manually. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Manual outbound | Expandi/Dripify automation | Deferred -- must validate messaging manually first. Automation risks account restriction on dormant account. |
| Google Sheets tracking | HubSpot CRM | CRM setup is Phase 4 (SALES-07). Simple spreadsheet sufficient for Phase 3. |
| Canva carousels | Figma/custom design | Canva is faster for volume. Custom design unnecessary for LinkedIn carousels. |

## Architecture Patterns

### Recommended Phase Structure
```
Phase 3 deliverables/
  profile/
    headline-options.md           # 3-5 headline variations
    about-section.md              # Full about section copy
    banner-brief.md               # Banner design spec for Canva
    featured-section-plan.md      # What goes in featured
  warmup/
    7-day-sequence.md             # Day-by-day warmup plan
  content/
    posting-cadence.md            # Daily schedule, pillar rotation
    post-templates/               # Template per content type
    30-post-drafts.md             # All 30 drafts
  outbound/
    dm-playbook.md                # Full DM playbook
    connection-request-templates/ # Per-ICP templates
    sales-nav-filters.md          # Exact filter criteria
    daily-workflow.md             # Step-by-step daily outbound routine
    network-reactivation.md       # Warm network audit + DM plan
```

### Pattern 1: Signal-Based Engagement-First Outbound
**What:** Instead of connect-then-pitch, engage with prospect content for 5-7 days before sending connection request. Reference specific trigger events (funding rounds, new hires, promotions, LinkedIn posts about pain points) in the connection request.
**When to use:** All cold outbound. This is the PRIMARY outbound pattern.
**Why it works:** Connection acceptance rates jump from ~30% (cold) to 60-70% (warm). Reply rates jump from 5-9% (cold DM) to 15-25% (signal-based). Two-week engagement before outreach improved acceptance from 15% to 35% in documented case study.
**Example flow:**
1. Identify prospect via Sales Navigator (matches ICP filters)
2. Check their recent activity (posts, comments, company news)
3. Days 1-3: Like and leave thoughtful comments on 2-3 of their posts
4. Days 4-5: Note trigger event (funding, hiring, pain point post)
5. Day 6-7: Send connection request referencing shared context
6. Post-acceptance: Begin 3-step DM sequence

### Pattern 2: Content-to-Pipeline Conversion Flywheel
**What:** Content creates visibility, engagement signals identify warm prospects, personalized follow-up converts to calls.
**When to use:** Daily -- this runs in parallel with cold outbound.
**Why it works:** Inbound outreach converts at 14.6% vs 1.7% for traditional outbound (8x conversion advantage). People who engage with your content are pre-qualified and pre-warmed.
**Example flow:**
1. Post daily content (trending AI + authority mix)
2. Monitor who engages (likes, comments, shares, profile views)
3. Check if engager matches ICP criteria
4. If yes: send connection request (if not connected) or DM with related value
5. Content engagement becomes the "warm intro" for DM outreach

### Pattern 3: ICP-Specific Personalization Layers
**What:** Different outbound messaging for PE firms vs funded startups. Different pain points, different language, different entry points.
**When to use:** Every connection request and DM must be ICP-matched.
**PE firms:** Language = EBITDA, margin expansion, portfolio company efficiency, operational value creation. Entry point = AI Opportunity Audit for portfolio companies.
**Startups:** Language = burn rate, runway, ship features faster, technical debt. Entry point = AI Operations Sprint (not Audit -- startups want features shipped, not diagnostics).

### Anti-Patterns to Avoid
- **Spray and pray:** 79% of decision-makers ignore cold DMs in 2026. Volume-based outreach is dead.
- **Identical connection request notes:** LinkedIn's text pattern matching detects and blocks identical messages sent to 30+ people in one hour.
- **Pitch-first DMs:** Never pitch in connection request or first DM. The 3-step value-first sequence exists for a reason.
- **Posting 2x/day:** See research below -- this kills reach on a dormant account.
- **"Comment [keyword]" CTAs:** Algorithm penalizes engagement bait. DM-based CTAs only.
- **Hashtags:** More than 3 hashtags = 70% lower reach. Use zero.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Post scheduling | Manual calendar reminders | Taplio or Buffer | Batch Sunday, auto-publish all week. Manual posting is fine but scheduling saves daily friction. |
| Prospect tracking | Memory / scattered notes | Google Sheets with columns: Name, Company, ICP type, Trigger event, Engagement status, Connection status, DM stage, Last action date | Manual outbound at 20-25/day requires systematic tracking or prospects fall through cracks. |
| Carousel design | Figma from scratch each time | Canva templates (5 master templates: case study, framework, comparison, builder log, data insight) | Reusable templates = 15 min/carousel instead of 1 hour. |
| Content idea generation | Brainstorming from scratch | Existing 100+ idea bank (Week2Plus_Content_Bank.md) + trending topic monitoring | Bank already validated and organized by topic and virality potential. |

## Common Pitfalls

### Pitfall 1: Posting Too Much on a Dormant Account
**What goes wrong:** Posting 2x/day on a reactivated dormant account causes both posts to cannibalize each other's reach. The algorithm rarely shows two posts from the same creator to the same user within a short window.
**Why it happens:** Desire to "make up for lost time" and become a "content machine" fast.
**How to avoid:** Post ONCE per day with 18-24 hour minimum spacing. High-performing posts generate engagement for 48-72 hours. Let each post breathe. The data is clear: accounts posting twice daily see a median 40% drop in reach per post.
**Warning signs:** Second post of the day gets significantly fewer impressions than the first. Posts plateau at lower impression counts than expected.
**RESEARCH CONCLUSION (Claude's Discretion item):** Do NOT recommend 2x/day posting. Stick with 1x/day, 7 days/week. This is backed by multiple 2026 data sources.

### Pitfall 2: Going Outbound Too Early
**What goes wrong:** Sending connection requests and DMs before the profile and content signal credibility. Prospects visit your profile, see thin/dormant activity, and ignore the request.
**Why it happens:** Urgency to generate pipeline within 30-day sprint timeline.
**How to avoid:** The CONTEXT.md already addresses this: 3 days of posting before soft outbound, full DM sequences start Day 8. This is the right call. Additionally, the profile must be fully rewritten BEFORE Day 1 posting.
**Warning signs:** Low connection acceptance rate (<30%) in first week of outbound.

### Pitfall 3: Generic "Personalization" That Prospects See Through
**What goes wrong:** Using merge fields ({first_name}, {company_name}) and calling it "personalized." Prospects in 2026 detect AI-assisted personalization and ignore it.
**Why it happens:** Volume pressure (20-25 prospects/day) pushes toward templated approaches.
**How to avoid:** Use signal-based personalization. Reference a SPECIFIC trigger event, post, or company news item. Even one authentic, specific sentence ("Saw your post about [X] -- we solved something similar for [client]") outperforms three paragraphs of merge-field "personalization."
**Warning signs:** Reply rate below 10% despite "personalized" messages.

### Pitfall 4: Ignoring LinkedIn Account Health Signals
**What goes wrong:** Sending 25 connection requests/day on a dormant account that hasn't been warmed up, getting flagged or restricted.
**Why it happens:** Not understanding that LinkedIn limits are reputation-based, not subscription-based. Sales Navigator does NOT increase connection request limits.
**How to avoid:** Warm-up sequence for the dormant account: Days 1-3 manual only (5-10 likes, 2-3 comments), Days 4-7 add 10 connection requests/day, Days 8-14 gradually increase to 20-25/day. Keep pending requests under 500. Monitor acceptance rate -- if it drops below 40%, reduce volume.
**Warning signs:** "Your account has been restricted" notification. Acceptance rate dropping below 30%.

### Pitfall 5: Content Without Engagement Strategy
**What goes wrong:** Posting great content but not doing the 15-20 min/day engagement on others' posts. Algorithm rewards engagement activity -- your own posts get more distribution when you're actively engaging elsewhere.
**Why it happens:** Content creation feels productive; commenting on others' posts feels like a distraction.
**How to avoid:** Engage on 15-20 posts BEFORE posting your own content each day. Reply to every comment on your posts within 15 minutes (90% algorithmic boost). This is non-negotiable.

## Code Examples

Not applicable -- this phase produces strategy documents and content, not code. See Architecture Patterns section for workflow examples.

## State of the Art

| Old Approach (2024) | Current Approach (2026) | Impact |
|---------------------|-------------------------|--------|
| Volume-based cold outreach (100+ connection requests/day) | Signal-based, engagement-first outbound (20-25/day, warmed) | Cold DM reply rates dropped to 5-9%. Signal-based achieves 15-25%. |
| "Comment [keyword] to get..." CTAs | DM-based CTAs ("DM me 'audit'") | LinkedIn NLP now flags comment-keyword as engagement bait. Immediate reach suppression. |
| Hashtag-heavy posts (5-10 hashtags) | Zero hashtags | 3+ hashtags = 70% lower reach in 2026. |
| Single images in posts | PDF carousel documents | Carousels: 6.6% engagement. Single images: 3.4%. Reversed from 2024. |
| Daily posting frequency wars | Quality over quantity (3-5/week optimal, 1/day max) | Algorithm shifted from breadth to depth. Dwell time > posting frequency. |
| Generic profile headlines ("AI Consultant") | Outcome-focused headlines with proof signals | "Who you help + Outcome you create + Credibility signal" formula. 40% more profile views. |
| Engagement pods | Genuine first-60-minute engagement | LinkedIn detects and penalizes pod behavior. Organic engagement velocity is the #1 distribution signal. |
| Link in post body | Link in first comment (also declining) or no links at all | Links in post body: -60% reach penalty. First comment links: -15-20% penalty. |

## Key Research Findings

### Finding 1: Multi-Posting Verdict (CRITICAL -- Answers User's Question)
**Confidence:** HIGH (multiple 2026 sources agree)
**Finding:** Do NOT post 2x/day. Accounts posting twice daily see a median 40% drop in reach per post. The algorithm rarely shows two posts from the same creator to the same user within a short window. Leave at least 18-24 hours between posts. High-performing posts generate engagement for 48-72 hours.
**Recommendation for planner:** Lock cadence at 1 post/day, 7 days/week. This IS being a "content machine" -- most LinkedIn creators post 3-5x/week. Daily posting is already aggressive.
**Sources:** Buffer (2M+ posts analyzed), LinkBoost 2026 guide, multiple LinkedIn algorithm analyses.

### Finding 2: Carousel vs Text Performance Data
**Confidence:** HIGH (consistent across sources)
**Finding:** PDF carousel/document posts achieve 6.6% engagement rate -- 303% higher than single images, 596% higher than text-only. At Dataslayer, document posts hit 40.5% engagement vs 10.7% for other formats. Optimal carousel length: 3-10 slides.
**Recommendation for planner:** Use carousels strategically (2-3x/week) for case study breakdowns, frameworks, tool comparisons. Text-only for trending topic posts and quick insights. This aligns with CONTEXT.md decisions.

### Finding 3: Non-Generic Outbound That Actually Converts
**Confidence:** HIGH (verified across multiple sources)
**Finding:** Signal-based outbound using trigger events (funding, hiring, promotions, pain point posts) achieves 15-25% reply rates vs 5-9% for basic personalization and 1-5% for generic cold. The key differentiator is referencing a SPECIFIC, RECENT event -- not just personalizing name/company.
**Top trigger events for Saksham's ICPs:**
- **PE firms:** New portfolio company acquisition, operating partner hire, portfolio company posting about "digital transformation" or "operational efficiency"
- **Startups:** Series A-C funding announcement (within 30-60 days), CTO/VP Eng hire, job postings for AI/ML roles, founder posting about scaling challenges
**Recommendation for planner:** Build DM playbook around trigger events, not templates. Create a "trigger event checklist" for each ICP that outbound reps (Saksham) monitor daily.

### Finding 4: The Engagement-First Connection Request Strategy
**Confidence:** HIGH (documented case study: acceptance rates 15% to 35%)
**Finding:** Engaging with prospect content for 1-2 weeks before sending a connection request more than doubles acceptance rates. The sequence: like 2-3 posts, leave 1-2 thoughtful comments, THEN connect. The prospect recognizes your name when the request arrives.
**Specific tactic -- "The 7-Day Warm":**
- Day 1: Like their most recent post
- Day 3: Leave a thoughtful comment on their next post (add genuine value, not "great post")
- Day 5: Like and comment again, or engage in a thread they're active in
- Day 7: Send connection request with note referencing your shared context
**Recommendation for planner:** This reduces Saksham's daily outbound from 20-25 cold requests to a pipeline approach: 10 new prospects enter "warm-up" daily, 10 prospects from last week get connection requests, 5 newly-connected prospects get Day 1 DM. Total daily touches: 25, but staged.

### Finding 5: Profile Optimization for Premium Positioning
**Confidence:** HIGH (multiple 2026 profile optimization guides)
**Finding:**
- **Headline formula:** Who you help + Outcome you create + Credibility signal. 220 characters max. Avoid generic titles.
- **About section architecture:** (1) Opening hook with specific numbers, (2) Your journey, (3) Lessons learned, (4) Current work, (5) Proof points with metrics, (6) Soft CTA. Conversational, not corporate.
- **Banner:** 67% of users leave it blank -- using it signals professionalism. 1584x396px. Should communicate value proposition at a glance.
- **Featured section:** Pin best-performing content, case study with results, and CTA link (sakshamsolanki.com or audit booking).
- **First-impression window:** Decision formed in 3-6 seconds. Profile must communicate premium positioning instantly.

### Finding 6: LinkedIn Connection Request Limits (Safety)
**Confidence:** HIGH (multiple 2026 limit guides)
**Finding:**
- Weekly limit: 100-200 connection requests (reputation-based, NOT subscription-based)
- Safe daily: 20-25 requests/day (spread evenly)
- Sales Navigator does NOT increase limits
- Dormant account warm-up: Days 1-3 (5-10 likes, 2-3 comments only), Days 4-7 (10 requests/day), Days 8-14 (gradually increase to 20-25/day)
- Keep pending requests under 500
- Identical messages to 30+ people in 1 hour = detected and blocked
**Recommendation for planner:** Saksham's 20-25 prospects/day target is achievable but requires warm-up. Build a 2-week ramp-up into the daily workflow plan. Start at 10/day, reach 20-25/day by Day 14 of outbound.

### Finding 7: Warm Network Reactivation Approach
**Confidence:** MEDIUM (based on general warm outreach best practices applied to dormant connections)
**Finding:** Warm DM to existing connections who match ICP should feel like genuine reconnection, not pitch. The sequence should be:
1. Audit existing connections (filter by title, company, industry in LinkedIn search)
2. Segment into PE / startup / enterprise buckets
3. Send reactivation DM: casual, reference shared history, mention what you've been building, ask about their current challenges
4. Follow up 3-5 days later with relevant case study if they respond
5. Offer audit if conversation is warm
**Key insight:** Existing connections who respond have dramatically higher conversion rates than cold outbound because trust already exists. This should run from Day 1 (even before cold outbound starts).

### Finding 8: Sales Navigator Filter Specifications
**Confidence:** HIGH (Sales Navigator 2026 documentation)
**Finding -- PE Firm Targeting:**
- **Job titles:** Operating Partner, Portfolio Operations, VP Operations, Managing Director, Partner
- **Company type:** Private Equity, Venture Capital (filter by industry)
- **Company headcount:** 11-200 (for portfolio companies); PE firms themselves are small
- **Activity filter:** "Posted on LinkedIn in last 30 days" (ensures they're active)
- **Geography:** US, UK, India (adjust to Saksham's target markets)
- **Boolean search:** "operating partner" OR "portfolio operations" OR "value creation"

**Finding -- Funded Startup Targeting:**
- **Job titles:** CEO, CTO, VP Engineering, Co-founder, Head of Product
- **Company headcount:** 11-200 employees
- **Funding stage:** Series A, Series B, Series C (use Crunchbase cross-reference or Sales Navigator funding filter)
- **Company headcount growth:** >10% (signals active growth/hiring)
- **Technologies used:** Filter for companies using AI/ML tools if available
- **Activity filter:** "Posted on LinkedIn in last 30 days"
- **Boolean search:** "Series A" OR "Series B" AND ("AI" OR "machine learning" OR "automation")

**Recommendation for planner:** Create saved searches in Sales Navigator for each ICP. Set up alerts for funding events and job changes within saved accounts.

## Open Questions

1. **Saksham's current SSI score**
   - What we know: SSI updates daily based on 30-day rolling activity. Dormant accounts likely have low SSI. High SSI (>70) correlates with 78% more profile views.
   - What's unclear: Saksham's current score and how fast it recovers with daily activity.
   - Recommendation: Check SSI at linkedin.com/sales/ssi on Day 1. Track weekly. Target SSI >65 within 30 days.

2. **Sales Navigator subscription status**
   - What we know: Sales Navigator is required for the ICP targeting strategy. Cost is ~$100/month.
   - What's unclear: Whether Saksham currently has Sales Navigator active.
   - Recommendation: If not active, activate before Day 4 (when outbound warm-up begins).

3. **Exact connection count and composition**
   - What we know: 5K-10K connections. Previously had traction with n8n/automation audience.
   - What's unclear: How many current connections match the new ICP (PE, startups, enterprise). This affects the warm reactivation campaign size.
   - Recommendation: Audit in first 2 days. Export connections list, filter by title/company manually.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual validation (strategy/content phase, not code) |
| Config file | N/A |
| Quick run command | Review deliverable against checklist |
| Full suite command | Cross-reference all deliverables against LI-01 through LI-07 |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| LI-01 | Profile reads as premium AI systems partner | manual-only | Visual review of profile copy against premium positioning checklist | N/A |
| LI-02 | 7-day warmup plan is complete and non-promotional | manual-only | Check each day's content against warmup criteria (personal, trending, non-sales) | N/A |
| LI-03 | Daily posting cadence defined with content pillars | manual-only | Verify 7-day rotation covers all pillars, 1x/day frequency, format assignments | N/A |
| LI-04 | 30 post drafts are written and ready | manual-only | Count drafts, verify each is 150-250 words, check format assignment, verify no banned words | N/A |
| LI-05 | DM playbook exists with templates and sequences | manual-only | Verify connection request templates per ICP, 3-step DM sequence, trigger event checklist | N/A |
| LI-06 | Sales Navigator targeting criteria defined | manual-only | Verify filter criteria for PE and startup ICPs, Boolean searches, saved search specs | N/A |
| LI-07 | Daily outbound workflow documented | manual-only | Verify step-by-step daily routine, time allocations, warm-up ramp schedule, tracking system | N/A |

### Sampling Rate
- **Per task:** Review deliverable against requirement checklist
- **Per wave:** Cross-reference all deliverables, check for consistency in voice/positioning
- **Phase gate:** All 7 requirements have deliverables, profile copy is premium-positioned, outbound approach is signal-based (not templated)

### Wave 0 Gaps
None -- this phase produces strategy documents and content, not code requiring test infrastructure.

## Sources

### Primary (HIGH confidence)
- Buffer 2026 LinkedIn Posting Frequency Study (2M+ posts analyzed) -- posting frequency, cannibalization data
- LinkBoost 2026 LinkedIn Posting Frequency Guide -- multi-posting impact, algorithm behavior
- LinkBoost 2026 ICP Targeting Strategies Guide -- Sales Navigator targeting
- Growleads 2026 LinkedIn Profile Optimization Playbook -- headline formulas, about section architecture
- SalesBread 2026 LinkedIn Outreach Stats -- connection acceptance rates, reply rates
- Letterdrop 2026 LinkedIn Outreach Strategy -- engagement-first approach, 7-day warm sequence, voice notes
- LinkBoost 2026 Lead Generation Success Stories -- documented case studies with conversion data

### Secondary (MEDIUM confidence)
- ConnectSafely 2026 Hyper-Personalized Outreach -- personalized vs generic conversion rate comparison (9.36% vs 5.44%)
- Autobound Signal-Based Selling Guide -- trigger event tiers, signal-based reply rates (15-25%)
- Dataslayer 2026 LinkedIn Algorithm Report -- document post engagement (40.5% vs 10.7%)
- LinkedIn official SSI documentation -- SSI score impact and correlation data
- Martal 2026 LinkedIn Statistics -- warm DM sequence best practices

### Tertiary (LOW confidence)
- LinkedIn warmup guidance for dormant accounts -- extrapolated from automation warm-up guides (originally designed for new/automated accounts, applied to dormant reactivation context)

## Metadata

**Confidence breakdown:**
- Profile optimization: HIGH -- multiple 2026 sources with consistent data
- Content cadence/algorithm: HIGH -- Buffer 2M+ post study + multiple corroborating sources
- Outbound strategy: HIGH -- signal-based selling well-documented with conversion benchmarks
- Sales Navigator filters: HIGH -- platform documentation verified
- Dormant account reactivation: MEDIUM -- warm-up guidance extrapolated from automation guides; no specific "5-month dormant account" study found
- Multi-posting impact: HIGH -- unanimous across sources: do not post 2x/day

**Research date:** 2026-03-10
**Valid until:** 2026-04-10 (30 days -- LinkedIn algorithm changes are incremental, not revolutionary)
