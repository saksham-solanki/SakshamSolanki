# CLAUDE.md — sakshamsolanki.com

## Project Overview

This is the personal brand website for **Saksham Solanki**, an AI automation systems architect and B2B growth strategist based in India. The website serves as the central hub for all content, SEO, consulting, and lead generation. All roads lead here.

**Domain:** sakshamsolanki.com
**Stack:** Next.js 14 (App Router) + Tailwind CSS + MDX for blog + Beehiiv embed for newsletter
**Hosting:** Vercel
**CMS for blog:** MDX files locally OR headless CMS (Sanity/Contentful) — decide based on scale needs

---

## Brand Identity

### Who is Saksham Solanki?

- AI automation consultant who helps B2B companies (11–200 employees) implement production-grade AI systems
- Positioning: "Talk to Saksham before implementing AI in your business."
- He is the public face / strategist. Technical execution is powered by his partner company Viithiisys (never shown on website)
- He runs **AI Builders Club** — a unified brand for both his Skool community and Beehiiv newsletter
- Voice: direct, specific, operator-first, anti-hype. No corporate fluff. No "leverage" or "synergy" or "game-changer"
- Speaks like an operator who builds things, not a marketer who sells things

### Brand Attributes

- **Operator-first**: everything shared comes from building, not theorizing
- **No-fluff**: direct, concise, every word earns its place
- **Systems-thinking**: sees whole architecture, not just individual tools
- **Trustworthy**: consultant energy, not vendor energy
- **Technical but accessible**: explains complex systems simply

---

## Visual Design System

### CRITICAL: This is NOT a generic AI website. No purple gradients. No Inter font. No white backgrounds with blue accents. This site must look distinctly different from every AI consultant on the internet.

### Theme

- **Dark mode is DEFAULT**. The entire site uses dark backgrounds. This is non-negotiable.
- Optional light mode toggle (nice-to-have, not required for V1)
- Aesthetic direction: **refined technical minimalism** — clean, precise, premium, dark. Think Vercel meets Bloomberg Terminal meets a high-end architecture firm.

### Color Palette (use CSS variables)

```css
:root {
  /* Core */
  --color-bg-primary: #0A0A0B;        /* Void Black — main background */
  --color-bg-secondary: #141416;       /* Deep gray — card backgrounds, sections */
  --color-bg-tertiary: #1C1C1F;        /* Charcoal — code blocks, elevated surfaces */
  --color-bg-hover: #2A2A2E;           /* Hover states for cards/buttons */

  /* Text */
  --color-text-primary: #FAFAFA;       /* Snow — headlines, primary text */
  --color-text-secondary: #E5E5E7;     /* Off White — body text */
  --color-text-tertiary: #71717A;      /* Neutral Gray — captions, metadata, timestamps */

  /* Accent — THIS IS THE SIGNATURE COLOR */
  --color-accent: #00E5A0;             /* Electric Mint — CTAs, links, highlights, badges */
  --color-accent-hover: #33FFBE;       /* Lighter mint for hover states */
  --color-accent-dark: #00B37D;        /* Darker mint for pressed states */

  /* Secondary accents (use sparingly) */
  --color-warning: #FF6B35;            /* Warm Orange — urgency, contrarian content badges */
  --color-info: #3B82F6;               /* Signal Blue — informational badges */

  /* Borders */
  --color-border: #2A2A2E;             /* Subtle dark border for card separation */
  --color-border-accent: #00E5A0;      /* Mint border for highlighted elements */
}
```

### Color Rules

- **90/10 rule**: 90% of any page is black/charcoal/white. 10% is Electric Mint. Maximum impact.
- Mint is ONLY used for: CTAs, links, highlighted headings, badges, borders on featured elements, hover states
- NEVER use mint as a background fill for large sections
- NEVER use gradients anywhere. Flat, solid colors only.
- Card separation uses 1px border (--color-border), not shadows in dark mode

### Typography

```css
/* Import from Google Fonts or self-host */
/* Primary: Satoshi (from fontshare.com — free) */
/* Fallback: DM Sans (Google Fonts) */
/* Code: JetBrains Mono (Google Fonts) */

--font-display: 'Satoshi', 'DM Sans', system-ui, sans-serif;
--font-body: 'Satoshi', 'DM Sans', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Typography scale:**

| Element | Size | Weight | Tracking | Font |
|---------|------|--------|----------|------|
| Hero headline | 64–80px (clamp) | 900 (Black) | -0.03em (tight) | Satoshi |
| H1 | 40–48px | 700 (Bold) | -0.02em | Satoshi |
| H2 | 28–32px | 700 (Bold) | -0.01em | Satoshi |
| H3 | 22–24px | 600 (Semibold) | normal | Satoshi |
| Body | 16–18px | 400 (Regular) | normal | Satoshi |
| Small / Caption | 13–14px | 500 (Medium) | 0.05em, ALL CAPS | Satoshi |
| Code | 14–15px | 400 | normal | JetBrains Mono |

**Typography rules:**
- Headlines use tight letter-spacing (negative tracking). This creates a premium, compressed feel.
- Body text has generous line-height: 1.6–1.7
- ALL CAPS only for labels, badges, and section markers. Never for sentences.
- Code/monospace used for: technical specs, system architecture labels, workflow descriptions

### Spacing

Use 8px base grid:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 48px
- `2xl`: 80px
- `3xl`: 120px

### Border Radius

- Buttons: 8px
- Cards: 12px
- Badges/tags: 6px
- No rounded corners on hero sections or full-width elements

### Shadows & Elevation

- NO drop shadows in dark mode. Use border (1px solid var(--color-border)) for separation.
- Subtle glow on mint CTAs on hover: `box-shadow: 0 0 20px rgba(0, 229, 160, 0.15)`

### Icons

- Lucide React icons (outline style, 1.5–2px stroke)
- Color: white on dark bg, mint for interactive states
- Sizes: 20–24px inline, 32–40px feature sections

### Motion & Animations

- Page load: staggered fade-up reveals (200ms delay between elements)
- Scroll: subtle fade-in on scroll for sections (use Intersection Observer or Framer Motion)
- Hover: cards lift slightly (translateY -2px) + border color changes to mint
- Buttons: scale(1.02) on hover + mint glow
- Keep all animations under 300ms. Snappy, not floaty.
- NO parallax. NO heavy scroll animations. This is a content site, not a portfolio.

---

## Site Architecture

### Pages to Build

```
/                          → Homepage
/blog                      → Blog listing (paginated, filterable by category)
/blog/[slug]               → Individual blog post (MDX)
/ai-builders-club          → AI Builders Club landing page (community + newsletter)
/case-studies               → Case studies listing
/case-studies/[slug]        → Individual case study
/consulting                 → Consulting offer page
/resources                  → Lead magnets hub
/resources/[slug]           → Individual resource (email-gated download)
/newsletter                 → Newsletter archive listing
/newsletter/[slug]          → Individual newsletter issue (published as blog post)
/about                      → About Saksham
```

### Navigation

```
Logo (left)                                     [Book a Call] (mint button, right)
Blog | Case Studies | AI Builders Club | Consulting | About
```

- Sticky nav, transparent on hero, solid dark on scroll
- Mobile: hamburger menu
- Active link: mint underline
- "Book a Call" is always visible as a mint CTA button in nav

---

## Page Specifications

### Homepage (/)

**Hero Section:**
- Full viewport height, dark bg (#0A0A0B)
- Headline: "I build AI systems that work." — Satoshi Black, 64–80px, white
- Subhead: "Not demos. Not slide decks. Deployed infrastructure that generates results." — Satoshi Regular, 20–22px, off-white
- Two CTAs side by side:
  - [Join AI Builders Club] — mint bg, black text, links to /ai-builders-club
  - [Book a Call] — outlined (mint border, mint text), links to /consulting
- Subtle background: faint grid/dot pattern or very subtle noise texture. NOT a gradient. NOT an illustration.

**AI Builders Club Section:**
- Section title: "AI BUILDERS CLUB" — ALL CAPS, small, mint, tracked wide
- Headline: "Join 500+ AI operators building together"
- Two cards side by side:
  - Card 1: Community — "A private group of B2B operators implementing AI systems." → [Join Free on Skool] button
  - Card 2: Newsletter — "Weekly AI automation intelligence. No fluff." → [Subscribe] with Beehiiv embed or link
- Dark card bg (#141416) with 1px mint border on hover

**Featured Case Studies Section:**
- Section label: "CASE STUDIES" — ALL CAPS, mint
- 3 case study cards in a grid
- Each card: dark bg, category badge (mint, ALL CAPS, small), title, one-line result metric ("73% cost reduction"), [Read More] link
- Link to /case-studies at bottom

**Latest Blog Posts Section:**
- Section label: "FROM THE BLOG" — ALL CAPS, mint
- 4 blog post cards in grid
- Each card: dark bg, category badge, title, date, reading time
- Link to /blog at bottom

**Footer:**
- Black bg (#0A0A0B)
- Left: "Saksham Solanki" + tagline
- Center: nav links
- Right: social icons (LinkedIn, Twitter/X, YouTube) in white, mint on hover
- Bottom: "© 2026 Saksham Solanki. All rights reserved." in gray

### Blog Listing (/blog)

- Page title: "Blog" — H1
- Filter bar: category pills (All, AI Automation, AI Agents, Workflow, Tools, Case Studies, Strategy). Active = mint bg. Inactive = dark bg with border.
- Blog cards in 2-column grid (3-col on wide screens)
- Each card: dark bg (#141416), category badge (mint), title (white, bold), excerpt (gray), date, reading time
- Pagination at bottom
- Sidebar (optional): newsletter signup CTA + popular posts

### Blog Post (/blog/[slug])

- Hero: dark bg full-width. Title (Satoshi Bold, 36–40px, white). Meta: "By Saksham Solanki • March 2026 • 8 min read" in gray.
- Body: slightly lighter bg (#141416) for readability. Text in off-white (#E5E5E7), 18px, 1.65 line-height.
- H2: Satoshi Bold, white, with mint left border (4px)
- H3: Satoshi Semibold, white
- Links: mint color, underline on hover
- Code blocks: charcoal bg (#1C1C1F), JetBrains Mono, with syntax highlighting (use a dark theme like One Dark or Tokyo Night)
- Blockquotes: mint left border, italic, slightly indented
- Images: full-width with 12px border-radius
- **Inline CTA (mid-article):** mint-accented banner/card: "Join AI Builders Club — weekly AI automation intel for operators." [Subscribe] button. This appears after ~40% of the article.
- **End CTA:** full-width dark section with Beehiiv newsletter embed. "Get the AI Builders Club newsletter. One actionable insight per week."
- Related posts: 3-card grid below the article
- Table of contents: sticky sidebar on desktop (optional for V1)

### AI Builders Club (/ai-builders-club)

This is the MOST IMPORTANT page after homepage. It must convert visitors into community members or newsletter subscribers.

- Hero: "AI Builders Club" — large headline. "The community and newsletter for B2B operators implementing AI systems." — subhead.
- Two-column layout:
  - Left: Community section. What members get. Social proof (member count, screenshots). [Join Free on Skool] CTA.
  - Right: Newsletter section. What subscribers get. Issue frequency ("Every Thursday"). Sample topics. Beehiiv signup form embed.
- Testimonials section (if available, placeholder for now)
- FAQ section with schema markup
- SEO: title tag = "AI Builders Club — Community & Newsletter for AI Operators | Saksham Solanki"
- This page MUST have "AI Builders Club" in: H1, title tag, meta description, URL slug, at least 3 times in body copy

### Case Studies (/case-studies)

- Grid of case study cards
- Each card: industry badge (mint), title, one-line challenge, one key metric result, [Read Case Study] link
- Filter by industry (optional for V1)

### Case Study Page (/case-studies/[slug])

- Hero: dark bg. Industry badge (mint ALL CAPS). Title (white, large).
- Metrics bar: 3–4 key numbers in large Satoshi Bold mint text ("73% cost reduction", "11 days to deploy", "2x meetings")
- Sections: Client Context → Problem → Approach → Architecture (with diagram placeholder) → Build → Results → Takeaway
- Architecture diagrams: placeholder image area with charcoal bg and dashed mint border
- End CTA: "Want results like these? [Book a Call]"

### Consulting (/consulting)

- Hero: "Work with Saksham" or "AI Consulting"
- What I do: 3 service cards (AI Audit, AI Implementation Sprint, Ongoing AI Ops)
- How it works: 3-step process (Diagnose → Architect → Deploy)
- Who this is for: ICP description
- CTA: "Book a Call" — Calendly embed or link
- Social proof section

### Resources (/resources)

- Grid of lead magnet cards
- Each card: title, format badge (PDF, Spreadsheet, Template), one-line description, [Download Free] button
- Clicking download goes to /resources/[slug] which has email gate

### Resource Page (/resources/[slug])

- Description of the resource
- Preview/screenshot
- Email capture form (Beehiiv or ConvertKit embed): "Enter your email to download [resource name]"
- After submit: auto-deliver via email + redirect to thank-you with download link

### About (/about)

- Your story. First person. Direct.
- Photo (professional headshot)
- The Saksham + Viithiisys model explained (without naming Viithiisys prominently — just "my technical team")
- Credentials, clients served, systems deployed
- CTA: [Join AI Builders Club] + [Book a Call]

---

## SEO Requirements

### Critical for Every Page

- Proper semantic HTML (h1, h2, h3 hierarchy — one H1 per page)
- Meta title + description on every page (customizable per page)
- Open Graph tags + Twitter card tags
- Canonical URLs
- Sitemap.xml (auto-generated)
- robots.txt
- Schema markup: Organization (on homepage), Person (on about), Article (on blog posts), FAQPage (on /ai-builders-club)
- Fast: target < 2s LCP. Use Next.js Image optimization. Lazy load below-fold images.

### Blog SEO

- URL structure: /blog/[slug] (short, keyword-rich slugs)
- Each post needs: title tag, meta description, OG image, structured data (Article schema)
- Internal linking: every post links to /ai-builders-club at least once
- Related posts component at bottom (same cluster)
- Breadcrumbs: Home > Blog > [Category] > [Post Title]

### Technical SEO

- Next.js generates static pages where possible (SSG for blog posts)
- Dynamic sitemap that updates when new posts are added
- IndexNow integration (submit new URLs to Google automatically)
- Clean URL structure, no trailing slashes (or consistent trailing slashes)
- 404 page with search + popular posts
- Redirect handling for future URL changes

---

## Components to Build

### Global Components

- `<Navbar />` — sticky, transparent → solid on scroll, mobile hamburger
- `<Footer />` — links, social, newsletter mini-signup
- `<CTAButton />` — two variants: filled (mint bg, black text) and outlined (mint border, mint text)
- `<SectionLabel />` — ALL CAPS, mint, tracked wide (e.g., "CASE STUDIES", "FROM THE BLOG")
- `<Badge />` — small pill for categories/tags. Mint bg with black text, or dark bg with mint text.

### Content Components

- `<BlogCard />` — dark card, badge, title, excerpt, date, reading time
- `<CaseStudyCard />` — dark card, industry badge, title, key metric, CTA
- `<ResourceCard />` — dark card, format badge, title, description, download CTA
- `<MetricsBar />` — horizontal row of 3–4 large mint numbers with labels
- `<InlineCTA />` — mid-article mint banner for AI Builders Club
- `<NewsletterSignup />` — Beehiiv embed component (full-width dark section)
- `<CodeBlock />` — syntax-highlighted code with copy button, charcoal bg, JetBrains Mono
- `<Blockquote />` — mint left border, italic
- `<TableOfContents />` — sticky sidebar for blog posts (optional V1)

### Layout Components

- `<Section />` — standardized section wrapper with consistent padding (80–120px vertical)
- `<Container />` — max-width 1200px, centered, responsive padding
- `<Grid />` — responsive grid (1-col mobile, 2-col tablet, 3-col desktop)

---

## Third-Party Integrations

- **Beehiiv**: Newsletter signup embeds on /ai-builders-club, blog posts, footer. Use their embed code or API.
- **Skool**: Link to external Skool community. No embed needed — just CTA buttons linking out.
- **Calendly**: Embed on /consulting page for booking calls.
- **Google Analytics 4**: Track all page views, events, conversions.
- **Google Search Console**: Verify site ownership. Auto-submit sitemap.
- **Plausible or Umami** (optional): Privacy-friendly analytics alternative.

---

## Content Structure (MDX Blog Posts)

```mdx
---
title: "How We Replaced 60 Hours of Manual Work with an AI Agent System"
slug: "ai-agent-system-case-study"
date: "2026-03-15"
category: "AI Agents"
description: "A step-by-step breakdown of how we built an AI agent that handles lead qualification for a 40-person SaaS company."
readingTime: "8 min"
featured: false
---

Content here in MDX...
```

Categories for blog:
- AI Automation
- AI Agents
- Workflow Automation
- AI Tools
- Case Studies
- AI Strategy
- Industry Guides

---

## Performance Targets

- Lighthouse score: 95+ on all metrics
- LCP: < 2 seconds
- CLS: < 0.1
- FID: < 100ms
- Bundle size: minimize JS. Use Next.js dynamic imports for heavy components.
- Images: WebP/AVIF, responsive sizes, lazy loading

---

## What NOT to Do

- NO purple gradients. NO blue-purple AI aesthetics. This is the biggest cliché in AI websites.
- NO Inter, Roboto, or Arial fonts. Use Satoshi.
- NO white/light default theme. Dark mode is default.
- NO stock photos of robots or circuit boards. Use abstract subtle patterns or no images.
- NO heavy animations that slow page load. Keep it snappy.
- NO "powered by AI" badges or generic AI imagery.
- NO Lorem Ipsum. Use real placeholder copy that matches the brand voice.
- NO sidebar on blog listing (keep it clean). Sidebar only on individual blog posts if needed.
- NO cookie banner unless legally required (keep the site clean).

---

## Build Priority (V1 Launch)

**Phase 1 (Must ship):**
1. Homepage
2. Blog listing + individual blog post template
3. AI Builders Club page
4. Consulting page
5. Navbar + Footer
6. Newsletter signup integration (Beehiiv)
7. SEO fundamentals (meta tags, sitemap, schema)

**Phase 2 (Week 2):**
8. Case studies listing + template
9. Resources listing + individual resource page (email-gated)
10. About page
11. Newsletter archive page
12. 404 page

**Phase 3 (Ongoing):**
13. Blog search
14. Category filtering
15. Table of contents sidebar
16. Light mode toggle
17. Performance optimization
18. IndexNow auto-submission

---

## File Structure

```
sakshamsolanki.com/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Homepage
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Blog post
│   ├── ai-builders-club/
│   │   └── page.tsx            # AI Builders Club landing
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual case study
│   ├── consulting/
│   │   └── page.tsx            # Consulting page
│   ├── resources/
│   │   ├── page.tsx            # Resources hub
│   │   └── [slug]/
│   │       └── page.tsx        # Individual resource
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── newsletter/
│   │   ├── page.tsx            # Newsletter archive
│   │   └── [slug]/
│   │       └── page.tsx        # Individual issue
│   └── not-found.tsx           # 404 page
├── components/
│   ├── ui/                     # Base UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionLabel.tsx
│   │   └── Container.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── InlineCTA.tsx
│   │   └── NewsletterSignup.tsx
│   ├── case-studies/
│   │   ├── CaseStudyCard.tsx
│   │   └── MetricsBar.tsx
│   └── resources/
│       └── ResourceCard.tsx
├── content/
│   ├── blog/                   # MDX blog posts
│   ├── case-studies/           # MDX case studies
│   └── resources/              # Resource metadata
├── lib/
│   ├── mdx.ts                  # MDX utilities
│   ├── seo.ts                  # SEO helpers
│   └── constants.ts            # Site-wide constants
├── public/
│   ├── fonts/                  # Self-hosted Satoshi + JetBrains Mono
│   ├── images/
│   └── og/                     # OG images
├── styles/
│   └── globals.css             # CSS variables + Tailwind config
├── CLAUDE.md                   # This file
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Key Reminders

1. **Dark mode is default.** Every component, every page, dark first.
2. **Electric Mint (#00E5A0) is the signature.** Use it only for accents — CTAs, links, highlights, badges. Never as background fill.
3. **Satoshi font everywhere.** Self-host from fontshare.com. JetBrains Mono for code only.
4. **Every blog post links to /ai-builders-club.** This is the SEO strategy — 300+ internal links per month pointing to that page.
5. **No AI clichés.** No purple, no robot imagery, no "powered by AI" badges, no generic stock.
6. **Performance matters.** This site will have 300+ pages within a month. SSG, lazy loading, optimized images.
7. **The brand voice is operator-first.** All placeholder copy should sound like someone who builds things, not someone who sells things.
