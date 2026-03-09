# Phase 2: Credibility Engine (Website) - Research

**Researched:** 2026-03-10
**Domain:** Next.js 14 website transformation -- surgical content/page updates for premium AI consulting positioning
**Confidence:** HIGH

## Summary

This phase is a **content and page restructuring** of an existing, well-built Next.js 14 site -- not a technical rebuild. The codebase is mature: Tailwind CSS with a complete design system (dark mode, Electric Mint accent, Satoshi font, 8px grid), reusable UI components (Button, Badge, Section, Container, SectionLabel, MetricsBar, LogoMarquee), MDX-based content pipeline for 16 case studies, and Framer Motion animations. The site currently positions Saksham as a generalist dev shop with 5 service categories (AI Solutions, AI for Marketing, Custom Software, Product & Startups, Marketing), a `/services` page, a `/consulting` page with old pricing ($2K audits, $15K MVPs), and generic "I build AI systems that work" hero copy.

Phase 2 transforms this into a premium AI systems partner site. The work falls into 5 distinct areas: (1) rewrite homepage hero and clean anti-features across all pages, (2) create `/solutions` page with the 3-tier offer ladder from Phase 1 deliverables, (3) reframe 3-5 case studies around dollar ROI, (4) add social proof metrics bar and enhanced logo bar, (5) replace the contact form with a pre-qualification form. All Phase 1 deliverables (offer scopes, pricing framework, team narrative) are complete and available at `.planning/phases/01-offer-architecture-and-positioning/deliverables/`.

**Primary recommendation:** Execute as surgical content updates using existing components and design system. No new dependencies needed. The `/consulting` page becomes `/solutions` (or content is replaced). Case study MDX frontmatter needs dollar-ROI metrics added. A new PreQualificationForm component is the only significant new component.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| WEB-01 | Homepage hero rewritten with outcome-focused headline, premium positioning, zero small-ticket signals | Hero is in `components/ui/hero-scroll.tsx`. Current copy ("I build AI systems that work") and subhead need full rewrite. CTA buttons need relabeling. Meta description in `app/page.tsx` references "11-200 employees" -- must update. |
| WEB-02 | New /solutions page with offer ladder, "Book a Strategy Call" CTA, "How We Work" section, no pricing | Current `/consulting/page.tsx` has 4 old service categories with explicit pricing in FAQ ($2K, $15K, $3K/mo). Replace content with 3-tier offer ladder from Phase 1 deliverables. Reuse existing page structure (hero, service sections, process steps, FAQ, CTA). Either create new `/solutions` route or repurpose `/consulting`. |
| WEB-03 | 3-5 case studies reframed around dollar ROI and business outcomes | 16 MDX case studies exist at `content/case-studies/`. Current metrics use percentages (84% reduction, 68% deflection). Need to add/replace with dollar amounts ($X annual savings, $X revenue generated). Top candidates identified below. |
| WEB-04 | Anti-feature cleanup -- remove hourly pricing, "affordable" language, generic service lists, stock AI imagery | Consulting FAQ explicitly shows old pricing. Services page has 5 broad categories. Homepage services section lists generic capabilities. Multiple pages reference "B2B companies with 11-200 employees". |
| WEB-05 | Client logo bar with social proof metrics (systems deployed, industries served, hours saved) | Two LogoMarquee components exist (one in `components/ui/`, one in `components/consulting/`). Both show text-only logos. Need to add aggregate metrics bar. Current stats on consulting page (50+ systems, 500+ projects, $2M+ ROI) can be enhanced and standardized. |
| WEB-06 | "How We Work" process section on /solutions -- Diagnose > Architect > Build > Deploy > Optimize | Both `/consulting` and `/services` already have process sections (3-step and 4-step). Need to update to 5-step premium process matching Phase 1 offer methodology. |
| WEB-07 | Pre-qualification form replacing generic contact form | No contact form currently exists -- CTAs link to external Calendly. Need to create an intake/qualification form that filters prospects before they book a call. This is the only net-new component. |
</phase_requirements>

## Standard Stack

### Core (Already Installed -- No Changes)
| Library | Version | Purpose | Status |
|---------|---------|---------|--------|
| Next.js | 14.2.x | App Router, SSG, SSR | Installed |
| React | 18.3.x | UI framework | Installed |
| Tailwind CSS | 3.4.x | Styling via design system | Installed |
| Framer Motion | 12.35.x | Animations | Installed |
| Lucide React | 0.577.x | Icons | Installed |
| next-mdx-remote | 6.0.x | MDX rendering | Installed |
| gray-matter | 4.0.x | Frontmatter parsing | Installed |

### No New Dependencies Required

This phase is purely content/copy/component work. Everything needed is already in the stack. The pre-qualification form (WEB-07) can be built with native HTML form elements + a Next.js Server Action or API route, or simply redirect to a Calendly booking page with query params after form validation.

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Custom pre-qual form | Typeform/Tally embed | Faster to set up but loses design consistency, adds external dependency, breaks dark mode aesthetic |
| Custom pre-qual form | Calendly routing form | Calendly has built-in screening questions but limited customization |
| MDX case study edits | CMS migration | Massive scope creep -- MDX works fine for 16 case studies |

## Architecture Patterns

### Current Project Structure (Relevant Files)
```
app/
  page.tsx                    # Homepage -- WEB-01, WEB-04, WEB-05
  consulting/page.tsx         # Current consulting -- becomes /solutions (WEB-02, WEB-06)
  services/page.tsx           # Generic services page -- WEB-04 cleanup
  case-studies/
    page.tsx                  # Case studies listing -- WEB-03, WEB-05
    [slug]/page.tsx           # Individual case study -- WEB-03
components/
  ui/
    hero-scroll.tsx           # Hero component -- WEB-01
    LogoMarquee.tsx           # Homepage logo bar -- WEB-05
    Button.tsx                # CTA buttons -- all requirements
  consulting/
    LogoMarquee.tsx           # Consulting page logo bar -- WEB-05
    FAQAccordion.tsx          # FAQ component -- WEB-02
  case-studies/
    CaseStudyCard.tsx         # Case study card -- WEB-03
    MetricsBar.tsx            # Metrics display -- WEB-03, WEB-05
content/
  case-studies/*.mdx          # 16 case study files -- WEB-03
lib/
  constants.ts                # Site config, nav links -- WEB-02 nav update
  seo.ts                      # SEO helpers -- all pages
  mdx.ts                      # MDX utilities -- WEB-03
```

### Pattern 1: Surgical Content Update (Primary Pattern)
**What:** Modify existing component content and copy without changing component architecture
**When to use:** WEB-01, WEB-04, WEB-05, WEB-06
**Example:**
```typescript
// hero-scroll.tsx -- update copy, keep component structure
<h1 className="text-3xl sm:text-4xl md:text-hero font-black text-text-primary tracking-tight">
  AI systems that deliver<br />
  <span className="text-accent">measurable ROI.</span>
</h1>
<p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
  We design, build, and deploy AI infrastructure that reduces costs
  and accelerates operations. 50+ production systems. $2M+ in documented results.
</p>
```

### Pattern 2: Page Route Change (for /solutions)
**What:** Either rename `/consulting` to `/solutions` or create new `/solutions` route
**When to use:** WEB-02
**Approach:** Create `app/solutions/page.tsx` with content from Phase 1 deliverables. Keep `/consulting` as a redirect or remove it. Update `navLinks` in `lib/constants.ts` and `navItems` in `TubelightNav.tsx`.

### Pattern 3: MDX Frontmatter Enhancement
**What:** Add dollar-ROI metrics to case study frontmatter
**When to use:** WEB-03
**Example:**
```yaml
# Before
metrics:
  - label: "Check-in time reduction"
    value: "84%"
  - label: "Front desk hours saved/week"
    value: "32 hrs"

# After -- add dollar ROI as primary metric
metrics:
  - label: "Annual labor cost savings"
    value: "$312K"
  - label: "Check-in time reduction"
    value: "84%"
  - label: "Front desk hours saved/week"
    value: "32 hrs"
  - label: "Compliance audit cost savings"
    value: "$45K/yr"
```

### Pattern 4: New Server-Side Form Component
**What:** Pre-qualification form with client-side validation and server action
**When to use:** WEB-07
**Approach:** Build a `PreQualificationForm` component using existing design system (dark cards, mint accents, Satoshi font). Use Next.js Server Action to handle submission. Send data to email or store, then redirect to Calendly with pre-filled info.

### Anti-Patterns to Avoid
- **Do NOT create a /pricing page.** Pricing is revealed on calls only -- this is a locked decision from Phase 1.
- **Do NOT rebuild components that work.** The Button, Section, Container, Badge, MetricsBar components are solid. Modify content, not architecture.
- **Do NOT add new npm dependencies for the form.** React Hook Form, Zod, etc. are overkill for a 5-7 field qualification form. Native form handling + Server Action is sufficient.
- **Do NOT change the design system.** Dark mode, Electric Mint, Satoshi font, 8px grid -- all stay exactly as they are.
- **Do NOT display pricing on any page.** Remove the consulting FAQ answers that mention $2K, $15K, $3K/mo.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form submission backend | Custom API + database | Next.js Server Action + email notification (or simple webhook to HubSpot/email) | No need for persistent storage at this stage; CRM setup is Phase 4 |
| URL redirects (consulting -> solutions) | Manual nginx config | Next.js `redirects` in `next.config.mjs` | Built-in, no deployment complexity |
| Social proof metrics | Custom analytics pipeline | Hardcoded metrics from real case study data | The numbers exist in the case studies; just aggregate them |
| Dollar ROI calculations | ROI calculator on site | Manual dollar amounts in MDX frontmatter derived from case study details | V2 feature (WEB-V2-01), not in scope |

## Common Pitfalls

### Pitfall 1: Inconsistent Messaging Across Pages
**What goes wrong:** Homepage says "premium AI partner" but the /services page still lists "E-Commerce Development" and "Social Media Management"
**Why it happens:** Updating one page but forgetting to clean related pages
**How to avoid:** Audit EVERY page for small-ticket signals before marking WEB-04 complete. Check: homepage, /services, /consulting, /about, /case-studies, footer, nav labels, meta descriptions, SEO schema markup
**Warning signs:** Any page still mentions hourly rates, "affordable", generic service categories, or "11-200 employees"

### Pitfall 2: Breaking SEO by Removing Pages Without Redirects
**What goes wrong:** Removing /consulting without a redirect causes 404s, loses existing Google rankings
**Why it happens:** Renaming routes without adding redirects
**How to avoid:** Add `redirects()` in `next.config.mjs`: `/consulting` -> `/solutions` (301 permanent redirect). Also update internal links in all pages, blog posts, and case studies.
**Warning signs:** `next build` will not catch dead internal links -- must grep for `/consulting` across all files

### Pitfall 3: Case Study Dollar ROI That Looks Made Up
**What goes wrong:** Adding "$2.4M annual savings" to a case study where the math doesn't hold up
**Why it happens:** Inflating numbers without backing them up from the case study content
**How to avoid:** Derive dollar amounts from the actual metrics in each case study. Example: "32 hrs/week saved x $25/hr x 52 weeks = $41,600/year in labor savings." Show the math or keep it conservative. If a dollar amount can't be credibly derived, keep the percentage metric.
**Warning signs:** Dollar amounts that don't trace back to any data in the case study body

### Pitfall 4: Pre-Qualification Form That Blocks All Leads
**What goes wrong:** Form is so aggressive (revenue requirements, budget ranges, etc.) that qualified prospects bounce
**Why it happens:** Over-optimizing for filtering vs. conversion
**How to avoid:** Keep the form to 5-7 fields max. Ask qualifying questions but don't make them feel like a test. Use dropdown selectors, not open text. Include a "not sure" option for budget. The goal is to filter obvious tire-kickers, not scare away real buyers.
**Warning signs:** Form has more than 7 fields, requires exact budget input, or has a judgmental tone

### Pitfall 5: Navigation Confusion After Route Changes
**What goes wrong:** TubelightNav mega menu still points to old consulting anchors, footer still links to /services
**Why it happens:** Nav config is spread across multiple files (constants.ts, TubelightNav.tsx, Footer.tsx)
**How to avoid:** Update ALL navigation touchpoints: `navLinks` in `lib/constants.ts`, `navItems` and `mobileNavLinks` in `TubelightNav.tsx`, Footer component, and any hardcoded links in page files
**Warning signs:** Clicking a nav link goes to a 404 or shows old content

## Code Examples

### Homepage Hero Rewrite (WEB-01)
The hero component at `components/ui/hero-scroll.tsx` needs copy changes only. Current structure (Spline 3D scene, Spotlight effect, InteractiveHoverButton) stays intact.

Key changes needed:
```typescript
// Current caption
<p className="text-caption uppercase tracking-[0.15em] text-accent font-medium mb-4">
  AI Automation Systems Architect
</p>

// Updated caption -- premium positioning
<p className="text-caption uppercase tracking-[0.15em] text-accent font-medium mb-4">
  AI Systems Partner
</p>

// Current headline: "I build AI systems that work."
// Current subhead: "Not demos. Not slide decks. Deployed infrastructure..."
// Current CTAs: "Join AI Builders Club" + "Book a Call"
// Current proof: "50+ AI systems deployed" + "$2M+ in client ROI"

// All of these need rewriting to match premium positioning.
// CTA should become "Book a Strategy Call" (primary) + "View Results" (secondary)
```

### /solutions Page Structure (WEB-02)
Reuse the existing consulting page layout pattern but with Phase 1 content:
```typescript
// Three offer tier cards using existing card pattern
const offerTiers = [
  {
    label: 'ENTRY POINT',
    title: 'AI Opportunity Audit',
    tagline: 'Find the $500K you\'re leaving on the table.',
    description: 'A live workshop with your leadership team...',
    deliverables: ['AI Opportunity Report', 'Executive Summary', 'Implementation Roadmap'],
    cta: 'Book Your Audit',
    // NO PRICING -- pricing is internal-only per Phase 1 decision
  },
  {
    label: 'CORE OFFER',
    title: 'AI Operations Sprint',
    tagline: 'Deployed systems, measurable results, 60 days.',
    // ...
  },
  {
    label: 'ENTERPRISE',
    title: 'AI Transformation Program',
    tagline: 'Full-stack operational overhaul with P&L impact.',
    // ...
  },
]
```

### Case Study ROI Reframing (WEB-03)
Top 5 candidates for dollar-ROI reframing (derivable from existing case study content):

| Case Study | Current Lead Metric | Derivable Dollar ROI |
|------------|-------------------|---------------------|
| Enterprise Workflow Automation | 120 hrs/week eliminated | ~$312K/year labor savings (120hrs x $50/hr x 52wks) |
| AI Voice Agent Real Estate | 40% conversion increase, 18 hrs/day saved | ~$650K+ annual revenue impact (additional appointments x avg deal size) |
| AI Visitor Management | 84% check-in reduction, 32 hrs/week saved | ~$83K/year labor savings + compliance cost reduction |
| CRM Pipeline Automation B2B | 3x qualified meetings | Revenue impact from 3x pipeline volume |
| RAG Chatbot SaaS Support | 68% ticket deflection, 54 hrs/week saved | ~$140K/year support cost savings |

### Pre-Qualification Form Fields (WEB-07)
```typescript
const qualificationFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Work Email', type: 'email', required: true },
  { name: 'company', label: 'Company Name', type: 'text', required: true },
  { name: 'role', label: 'Your Role', type: 'select', options: [
    'CEO / Founder', 'COO / Operations', 'CTO / VP Engineering',
    'VP / Director', 'Operating Partner (PE)', 'Other'
  ]},
  { name: 'challenge', label: 'Primary Challenge', type: 'select', options: [
    'Manual processes costing us money',
    'Need AI strategy / roadmap',
    'Ready to deploy specific AI systems',
    'Full operational modernization',
    'Not sure yet -- need guidance'
  ]},
  { name: 'timeline', label: 'Timeline', type: 'select', options: [
    'Immediate (next 30 days)',
    'This quarter',
    'Next quarter',
    'Exploring for later'
  ]},
  { name: 'context', label: 'Brief context (optional)', type: 'textarea', required: false },
]
```

### Social Proof Metrics Bar (WEB-05)
```typescript
// Aggregate from real case study data
const socialProofMetrics = [
  { value: '50+', label: 'AI Systems Deployed' },
  { value: '16+', label: 'Industries Served' },
  { value: '10,000+', label: 'Hours of Manual Work Eliminated' },
  { value: '$2M+', label: 'Documented Client ROI' },
]
```

### Navigation Update (WEB-02 supporting)
```typescript
// lib/constants.ts -- update navLinks
export const navLinks = [
  { href: '/solutions', label: 'Solutions' },    // was /services
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/ai-builders-club', label: 'AI Builders Club' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  // Remove separate "Consulting" link -- /solutions replaces both
]
```

## State of the Art

| Old Approach (Current Site) | New Approach (Phase 2) | Impact |
|----------------------------|----------------------|--------|
| "I build AI systems that work" hero | Outcome-focused, ROI-driven headline | Positions as partner, not service provider |
| 5 generic service categories | 3-tier offer ladder (Audit, Sprint, Transformation) | Clear buyer journey, premium positioning |
| Percentage-based case study metrics | Dollar ROI + business outcomes | Executive-level credibility |
| Generic "Book a Call" CTA everywhere | "Book a Strategy Call" + pre-qual form | Filters tire-kickers, signals premium |
| "How much does it cost? Audits start at $2,000" FAQ | No pricing on site; pricing on calls only | Prevents anchoring low |
| Text-only logo marquee | Logo bar + aggregate metrics | Stronger social proof |

## Inventory of Anti-Features to Remove (WEB-04)

Files that contain small-ticket signals needing cleanup:

| File | Issue | What to Fix |
|------|-------|------------|
| `app/consulting/page.tsx` | FAQ shows "$2,000", "$15,000", "$3,000/month" pricing | Remove/replace FAQ or rewrite without prices |
| `app/consulting/page.tsx` | "By the hour" in CTO section title | Remove entire old service framing |
| `app/consulting/page.tsx` | 4 old service categories (AI Solutions, Moonship, CTO, Custom Dev) | Replace with 3-tier offer ladder |
| `app/page.tsx` | Meta description says "11-200 employees" | Broaden positioning |
| `app/page.tsx` | Services section has 5 generic cards (AI, Marketing, Software, Startups, Marketing) | Replace with premium offer preview |
| `app/page.tsx` | Consulting section has 4 generic cards | Replace with /solutions preview |
| `app/services/page.tsx` | Entire page is generalist dev shop positioning | Either remove, redirect to /solutions, or significantly rewrite |
| `components/ui/hero-scroll.tsx` | "AI Automation Consultant for B2B Companies" and generic copy | Rewrite for premium positioning |
| `lib/constants.ts` | Site title "AI Automation Systems Architect" | Update to premium positioning |
| `lib/constants.ts` | Author role "AI Automation Systems Architect" | Update |
| `components/layout/Footer.tsx` | Tagline "Building production-grade AI infrastructure for B2B companies" | Update |
| Schema markup in consulting page | Lists old service names | Update to match new offer tiers |

## Open Questions

1. **What happens to /services page?**
   - What we know: /solutions replaces /consulting as the primary offer page. /services currently has 5 broad categories.
   - What's unclear: Does /services get removed entirely, redirected to /solutions, or kept as a secondary page?
   - Recommendation: Redirect /services to /solutions. The premium positioning doesn't need a generalist services catalog. If needed later, it can be restored.

2. **Form submission backend for pre-qualification**
   - What we know: No existing contact form or form handling infrastructure exists. CTAs all go to external Calendly.
   - What's unclear: Where should form data go? Email notification? HubSpot (Phase 4)? Simple webhook?
   - Recommendation: Use Next.js Server Action to send an email notification (via a service like Resend, or just log to console for now). After submission, redirect to Calendly booking. Keep it simple -- CRM integration is Phase 4 (SALES-07).

3. **Which 3-5 case studies get priority reframing?**
   - What we know: 16 case studies exist. Some have stronger dollar-ROI derivation potential than others.
   - Recommendation: Prioritize the 5 listed in the Code Examples section above. These have concrete numbers from which dollar amounts can be credibly calculated.

4. **Consulting mega menu in TubelightNav**
   - What we know: TubelightNav has a mega menu for both Services and Consulting with sub-items
   - What's unclear: Does the /solutions page need a mega menu, or a simple nav link?
   - Recommendation: Simple nav link for /solutions. The mega menu pattern was for the generalist 5-category services model. The 3-tier offer ladder is simple enough for a single page.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Next.js build validation (no test framework currently configured) |
| Config file | none |
| Quick run command | `npm run build` |
| Full suite command | `npm run build && npm run lint` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| WEB-01 | Homepage hero has new premium copy, no small-ticket signals | manual | Visual inspection of deployed page | N/A |
| WEB-02 | /solutions page renders with 3-tier offer ladder | smoke | `npm run build` (catches build errors) | Wave 0: create page |
| WEB-03 | Case studies show dollar ROI metrics | manual | Visual inspection of case study pages | N/A |
| WEB-04 | No pricing, hourly rates, or "affordable" anywhere on site | automated | `grep -r "affordable\|\\$2,000\|\\$15,000\|\\$3,000/month\|hourly" app/ components/ lib/ content/` | N/A |
| WEB-05 | Social proof metrics visible on homepage and key pages | manual | Visual inspection | N/A |
| WEB-06 | "How We Work" 5-step process on /solutions | smoke | `npm run build` | Wave 0: create section |
| WEB-07 | Pre-qualification form renders and submits | manual + smoke | `npm run build` | Wave 0: create component |

### Sampling Rate
- **Per task commit:** `npm run build`
- **Per wave merge:** `npm run build && npm run lint`
- **Phase gate:** Full build green + visual inspection of all modified pages + grep for anti-features

### Wave 0 Gaps
- [ ] `app/solutions/page.tsx` -- new page for WEB-02
- [ ] Pre-qualification form component -- new component for WEB-07
- [ ] `next.config.mjs` redirect rules -- /consulting -> /solutions, /services -> /solutions
- No test framework gaps -- this phase is primarily content/copy work verified by build success and visual/grep inspection

## Sources

### Primary (HIGH confidence)
- **Existing codebase** -- Full read of all relevant files (page.tsx, consulting/page.tsx, services/page.tsx, hero-scroll.tsx, all 16 case study MDX files, all components, tailwind.config.ts, globals.css, constants.ts, mdx.ts, layout.tsx, nav components, footer)
- **Phase 1 deliverables** -- All 11 deliverable files read (offer scopes, pricing framework, ICP messaging, executive summaries, team narrative)
- **CLAUDE.md** -- Full project instructions and design system specification
- **REQUIREMENTS.md** -- All WEB-* requirements read and mapped

### Secondary (MEDIUM confidence)
- **Dollar ROI calculations for case studies** -- Derived from case study metrics using reasonable hourly rate assumptions ($25-50/hr). Actual numbers should be validated by Saksham based on real client data.

### Tertiary (LOW confidence)
- None -- all findings come from direct codebase inspection and Phase 1 deliverables

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new dependencies, existing stack fully understood from package.json and codebase
- Architecture: HIGH -- existing patterns documented from actual code, all file paths verified
- Pitfalls: HIGH -- derived from actual code issues found during research (pricing in FAQ, nav spread across files, meta descriptions with old positioning)
- Dollar ROI calculations: MEDIUM -- math is sound but actual client billing rates may differ

**Research date:** 2026-03-10
**Valid until:** 2026-04-10 (stable -- this is content work on an existing, non-changing stack)
