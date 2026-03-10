# Phase 3: LinkedIn Reactivation and Pipeline - Context

**Gathered:** 2026-03-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Reactivate Saksham's dormant LinkedIn (5 months inactive, 5K-10K connections) into an active pipeline generating qualified conversations with $40K+ decision-makers. Covers: profile rewrite, warmup content, daily posting cadence with trending AI topics, outbound DM playbook, and Sales Navigator targeting. Content creation (SEO blog, website changes) and sales process (discovery calls, proposals) are separate phases.

</domain>

<decisions>
## Implementation Decisions

### Profile rewrite — Builder identity with metrics

**Headline:**
- Lead with builder identity: "I build production AI systems" angle
- Must communicate what Saksham DOES, not just a title
- Include proof signals (deployments, metrics) and AI Builders Club mention
- Example direction: "Building production AI systems | 14 deployments, real metrics | AI Builders Club"

**About section:**
- Metric-led opener: "14 production AI systems. $2.4M in client savings. Zero failed deployments." — let numbers do the talking
- Structure: proof metrics → what you do → who you help → CTA
- DM-based CTA: "DM me 'audit' for a free AI readiness assessment"

**Banner:**
- NOT "AI Systems Architect" text — avoid title-based banners
- Direction: social proof/metrics showcase or clean minimal design showing companies worked with
- Must match dark mode aesthetic (dark bg, Electric Mint accents if used)
- Claude's discretion on exact design approach — optimize for credibility at a glance

**Featured section:**
- Claude's discretion on combination — optimize for profile visitor conversion
- Options include: best case study post, AI Builders Club link, executive summary PDF, highest-performing viral post

### Content pillars — 70/30 trending AI to authority, daily posting

**Content mix:**
- 70% trending AI topics: Claude Code builder logs, AI agent breakdowns, MCP explainers, tool comparisons, vibe coding insights
- 30% authority/business: case study result posts, process insights, contrarian takes
- Trending content is the REACH ENGINE — it gets impressions. Authority content CONVERTS — it books calls.

**Trending content formats (mix of three):**
- Builder logs: "I built X with Claude Code. Here's what happened." — operator voice, real usage
- Explainer posts: Break down trending topics (MCP, AI agents) for operators, not engineers
- Tool comparisons: Data-driven tests of AI tools on real projects

**Posting cadence:**
- 7 days/week — daily posting, no breaks
- Explore 2x/day posting on some days (researcher to validate algorithm impact of multi-posting)
- Goal: become a content machine

**Post format:**
- Text-only for trending topics, tutorials, and quick insights (algorithm-friendly, fast to produce)
- Carousels (PDF) for case study breakdowns, tool comparisons, and frameworks (6.6% engagement rate)
- Medium length: 150-250 words per post

**No hashtags** — cleaner look, algorithm data is mixed on hashtag value in 2026

**CTA approach:**
- DM-based CTAs: "DM me 'audit' for a free AI readiness assessment"
- No "comment [keyword]" CTAs — LinkedIn 2026 algorithm penalizes this pattern
- Match CTA to content type (not every post needs a CTA)

**Content production:**
- Weekly batches: 7 posts drafted each Sunday
- Templates per content type provided for consistency
- Existing 100+ idea bank (content-drafts/Week2Plus_Content_Bank.md) used as source material
- Responsive to trending topics that week — not locked in advance

### Warmup sequence — Personal comeback, fast to outbound

**Approach:**
- Day 1: Personal comeback story — "5 months off LinkedIn. Here's what I built." (draft exists in content-drafts/Week1/Day1_LinkedIn_Post_FINAL.md)
- Day 2 onwards: Trending AI topics (Claude Code, AI agents, MCP) for maximum reach
- Day 6-7: First case study result post — transition to authority content
- Progression: Personal → Trending → Authority

**Duration:**
- 3 days of posting before soft outbound (connections, no pitching)
- Full DM sequences start Day 8
- Aggressive timeline — accepted trade-off: prospects may see thin profile early

**Engagement strategy:**
- Comment-first: 15-20 min/day commenting on target ICP posts and AI thought leaders BEFORE posting own content
- Algorithm rewards engagement activity — builds visibility before content drops
- Continue throughout, not just warmup

### Outbound DM playbook — Personalized, non-generic approach

**Connection request strategy:**
- RESEARCH-DEPENDENT: The researcher MUST do deep research (using Perplexity MCP for deep research) on what non-generic, personalized outbound approaches actually convert on LinkedIn in 2026
- User explicitly rejected templated/generic approaches ("everyone does outbound like this")
- Connection request note must NOT directly sell
- Must feel genuinely personalized, not mass-sent
- Different approach per ICP (PE firms vs startups)

**Post-acceptance DM sequence — Value-first, 3-step:**
- DM 1 (Day 1): Thank + ask about their AI challenges
- DM 2 (Day 3): Share relevant case study or insight (matched to their industry/role)
- DM 3 (Day 7): Offer free AI readiness assessment / audit
- Consultative progression, not pitch-first

**Daily volume:**
- 20-25 prospects/day (aggressive — requires 45-60 min/day on outbound)
- Requires Sales Navigator
- Need to monitor LinkedIn flagging risk — if acceptance rate drops, reduce volume

**ICP targeting:**
- Split targeting: 50/50 between PE firms and funded startups
- Enterprise deprioritized for outbound (they come through referrals)
- PE: operating partners and portfolio company CEOs
- Startups: Series A-C founders and CTOs who need to ship AI features fast
- Sales Navigator filters to be defined (company size, industry, titles, funding stage)

**Existing network reactivation:**
- Active DM campaign to dormant connections matching ICP criteria
- Warm DM sequence: "Haven't connected in a while. I've been building AI systems — here's what I shipped."
- Audit connections first to find ICP matches (PE partners, startup founders, enterprise leaders)
- Run reactivation parallel to cold outbound

### Claude's Discretion
- Exact headline wording (within builder identity direction)
- Banner design specifics (metrics showcase vs minimal — optimize for credibility)
- Featured section combination (optimize for visitor conversion)
- Exact 7-day warmup content sequence (Day 1 is locked as comeback, rest flexible)
- Whether to recommend 2x/day posting or stick with 1x (after research)
- Carousel design templates and formatting
- Sales Navigator filter criteria specifics
- Existing network audit methodology

</decisions>

<specifics>
## Specific Ideas

- "I want to become a content machine" — volume matters, daily posting with potential 2x/day
- "Those are very generic; everyone does outbound like this. I want to be a little personalised" — outbound must be genuinely different, not templated
- "I also know the fact that if we post things regarding result process contrarian industry insight, I won't be able to get much reach" — pure business content won't get reach. Must ride trending AI topics (Claude Code, AI agents, MCP, vibe coding) as the reach engine
- "With Claude Code I have to provide the resources" — Claude Code content is a key differentiator (5 months real usage, built entire website with it)
- "You have to do deep research. Twitter research, deep research on what works and what doesn't" — researcher must use Perplexity MCP for deep research on LinkedIn outbound best practices, not rely on generic playbooks
- "Some days we can also post two posts" — open to multi-posting days for maximum content output
- Day 1 comeback post draft already exists and should be used as starting point

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `LinkedIn_Twitter_Strategy_Complete_Context.md` — 2026 LinkedIn algorithm research, trending topics, full situation analysis
- `BRAND_ARCHITECTURE.md` — Full LinkedIn CTA system, AI Builders Club keyword rotation, content framework
- `CONTENT_ENGINE.md` — 7-day post schedule, daily LinkedIn system, auto-DM workflow design (n8n-based)
- `content-drafts/Week1/Day1_LinkedIn_Post_FINAL.md` — Ready-to-post Day 1 comeback post
- `content-drafts/Week2Plus_Content_Bank.md` — 100+ validated post ideas organized by topic (Claude Code, AI agents, MCP, vibe coding, case studies, failure content)
- 14 MDX case studies at `/content/case-studies/` with real metrics — source material for authority content and carousels

### Established Patterns
- Brand voice: operator-first, anti-hype, dollar-focused, production-ready
- Banned words list: leverage, synergy, game-changer, revolutionary, cutting-edge, disruptive, robust, seamlessly, transformative
- 3-tier offer language (AI Opportunity Audit / AI Operations Sprint / AI Transformation Program) from Phase 1
- ICP-specific language documented: PE firms (EBITDA, margin expansion), startups (burn rate, runway), enterprise (modernization, compliance)

### Integration Points
- Content links back to sakshamsolanki.com (credibility engine from Phase 2)
- DM CTAs offer "free AI readiness assessment" which feeds into Phase 4 sales process (discovery calls)
- AI Builders Club community/newsletter as mid-funnel conversion point
- Phase 4 (Sales Process) depends on pipeline generated here — outbound workflow feeds discovery calls

</code_context>

<deferred>
## Deferred Ideas

- LinkedIn automation tools (Expandi, etc.) — manual outbound first, automate after messaging is validated (per PROJECT.md constraints)
- Auto-DM workflow via n8n (documented in CONTENT_ENGINE.md) — implement after manual DM sequence is proven
- LinkedIn Ads — out of scope for this project (organic + outbound focus)
- Twitter/X strategy — LinkedIn is the primary channel

</deferred>

---

*Phase: 03-linkedin-reactivation-and-pipeline*
*Context gathered: 2026-03-10*
