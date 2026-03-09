# Phase 1: Offer Architecture and Positioning - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Define 3 tiered offers (Audit, Sprint, Transformation) with value-based pricing, ICP-specific messaging for PE firms, funded startups, and enterprise teams, one-page executive summaries, and the Viithiisys team narrative. This replaces the current generalist 4-service model (AI Solutions, Moonship, CTO-as-a-Service, Enterprise Dev) with a premium 3-tier ladder designed for $40K-$1M+ engagements.

</domain>

<decisions>
## Implementation Decisions

### Offer tier structure — Merge & Rename from existing 4 services

**Tier 1: Audit**
- Maps from: CTO-as-a-Service (one-time diagnostic)
- Format: Live workshop (half-day or full-day, virtual or on-site) with the buyer's team, followed by a polished written report
- Deliverable: AI Opportunity Report — current state audit, top 3-5 automation opportunities ranked by ROI, rough implementation roadmap, tech stack recommendations
- Purpose: Entry point relationship builder, leads naturally to Sprint

**Tier 2: Sprint**
- Maps from: AI Solutions + Moonship MVP (build in 30-60 days)
- Scope: Bundle of AI systems + integrations into existing tools — NOT a single system
- This is broader than "one chatbot" — it's a multi-system deployment that delivers a measurable operational outcome
- Includes: integration with buyer's existing CRM, helpdesk, communication tools, etc.
- Differentiator: Selling an outcome (e.g., "reduce support costs 60%"), not a deliverable (e.g., "one RAG chatbot")
- Timeline: 45-60 days

**Tier 3: Transformation**
- Maps from: Enterprise Software Development
- Scope: Full-stack AI overhaul — audit everything, rebuild from ground up, multiple systems, custom dashboards, team training, change management
- Timeline: 3-6 month engagement
- Target: PE portfolio companies and enterprises ready for comprehensive modernization
- Differentiator: This is the "we're redoing everything" tier

### ICP messaging — Pain-point-first approach for all 3 ICPs

**Primary ICP: PE firms**
- Two buyer personas, different entry points:
  - Operating partner: referral source who sells Saksham into portfolio companies. Language: EBITDA, margin expansion, operational leverage, portfolio-wide deployment, value creation plan
  - Portfolio company CEO: the actual buyer who signs the deal. Under board pressure to "implement AI," needs someone who executes, not another strategy deck
- CRITICAL DECISION: Deep research needed into exact PE firm pain points before messaging docs are created. The offer must feel designed FOR PE firms, targeting their specific problems. Saksham can build anything — the messaging must lead with THEIR pain, not his capabilities
- Case study mapping: researcher must identify which of the 14 case studies translate to PE portfolio company operational problems

**Secondary ICP: Funded startups (Series A-C)**
- Same depth of pain point research as PE firms
- Different problems: need to ship AI features fast, prove traction to investors, can't afford to hire a full AI team
- Researcher must identify startup-specific pain points and map relevant case studies

**Tertiary ICP: Enterprise teams**
- Same depth of pain point research as PE firms
- Different problems: modernization pressure, legacy system integration, change management, multi-stakeholder approval
- Researcher must identify enterprise-specific pain points and map relevant case studies

### Executive one-pagers — McKinsey-style briefs
- Format: Clean, minimal, data-driven. Problem > Solution > Results > "Book a Call"
- Light/white background for print compatibility (NOT dark mode brand aesthetic)
- No pricing displayed — pricing revealed on calls only
- One per tier, shareable as PDFs
- Tone: corporate-credible, not creative/flashy. PE partners and enterprise execs expect this format.

### Claude's Discretion
- Exact naming for the 3 tiers (Audit/Sprint/Transformation are working names — researcher and planner can refine)
- ROI calculator methodology and projected impact formulas
- How to structure the pricing framework document (10-25% of projected business impact)
- Specific layout and sections of the one-page executive summaries
- How to frame the Viithiisys team narrative (user selected Offer Tiers and ICP Messaging for discussion — team narrative was not discussed, so Claude has flexibility here within the constraints: Viithiisys stays hidden, honest framing of "I lead strategy and architecture, execution by my dedicated engineering team")

</decisions>

<specifics>
## Specific Ideas

- "I want to make a bundle of systems which can actually help the company" — Sprint tier is NOT a single deliverable, it's a multi-system deployment
- "You have to figure out the exact pain points for PE companies — what are the problems they're facing, what are the things they are lacking" — messaging must be pain-point-first, not capability-first
- "Why not create an offer which is targeting their pain points so that we can do high conversion" — offers should feel custom-designed for each ICP
- "We can do the development instantly; it's fine for us" — speed of delivery is a competitive advantage to emphasize
- Current consulting page FAQ shows old pricing ($2K audits, $15K MVPs, $3K/mo retainers) — all of this gets replaced
- Case study #4 (CRM Pipeline, NO AI, $150/mo, best ROI) is Saksham's real insight: boring systems beat fancy AI demos. This should feature prominently in PE messaging.

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- 14 MDX case studies live at `/content/case-studies/` with real metrics — these are the proof backbone for all ICP messaging
- `/app/consulting/page.tsx` — existing consulting page with 4 service categories, FAQ component, logo marquee. Will need significant content overhaul but component structure is reusable
- `FAQAccordion`, `LogoMarquee` components already exist in `/components/consulting/`
- `MetricsBar` component exists for displaying key numbers
- Client logo list already curated (Paytm, IKEA, Nestle, Sequoia, etc.)

### Established Patterns
- MDX content system for case studies — same pattern could be used for offer detail pages
- SEO helper functions in `/lib/seo.ts`
- Component structure: Section > Container > content follows consistent pattern
- Dark mode + Electric Mint accent system throughout

### Integration Points
- `/app/consulting/page.tsx` will become `/app/solutions/page.tsx` (per roadmap: WEB-02)
- Case studies need to be re-tagged/grouped by ICP and tier for messaging docs
- Executive one-pagers are external PDFs, not website pages — generated separately
- Pricing framework is an internal document, not displayed on site

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-offer-architecture-and-positioning*
*Context gathered: 2026-03-09*
