# Brand Kit — Saksham Solanki

> "I build AI systems that work. Not demos. Not slide decks. Deployed infrastructure that generates results."

---

## 1. Brand Foundation

### Brand Essence

Saksham Solanki is an AI automation consultant who helps B2B companies (11-200 employees) implement production-grade AI systems. He is the public face and strategist. Technical execution is powered by Viithiisys (never shown publicly).

### Brand Attributes

| Attribute | What It Means | What It Is NOT |
|-----------|--------------|---------------|
| **Operator-first** | Everything shared comes from building, not theorizing. | Academic, theoretical, conceptual |
| **No-fluff** | Direct. Concise. Every word earns its place. | Verbose, salesy, corporate-speak |
| **Systems-thinking** | See the whole architecture, not just individual tools. | Tool-obsessed, feature-focused |
| **Trustworthy** | Consultant energy, not vendor energy. Advise first, sell never. | Pushy, aggressive, always-be-closing |
| **Technical but accessible** | Explain complex systems simply without dumbing them down. | Jargon-heavy, gatekeeping, oversimplified |

### Taglines & One-Liners

- **Primary:** "Talk to Saksham before implementing AI in your business."
- **Secondary:** "AI systems that work. Not demos."
- **LinkedIn headline:** "I help B2B companies implement AI automation systems that actually work | AI Strategy → Deployed Infrastructure | Founder of AI Builders Club"
- **Twitter bio:** "Building AI automation systems for B2B. I share what works. Founder of AI Builders Club."

### Brand Architecture

| Brand | Type | Role |
|-------|------|------|
| Saksham Solanki | Personal brand (master) | sakshamsolanki.com — all content, SEO, consulting, case studies |
| AI Builders Club | Community + Newsletter brand | Skool community + Beehiiv newsletter. CTA keyword on LinkedIn. |
| Viithiisys | Execution partner (background) | Never public-facing. Powers delivery behind the scenes. |

---

## 2. Color System

### Design Direction

Dark base (premium, technical, stands out in LinkedIn feeds which are mostly white) + electric mint accent (AI-native, futuristic, high-contrast, impossible to ignore in a scroll). This palette intentionally avoids corporate blue (Pascal Bornet) and YouTube-creator bright (Liam Ottley).

### Primary Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Void Black** | #0A0A0B | Primary background (dark mode). LinkedIn carousel backgrounds. Website hero sections. |
| **Charcoal** | #1C1C1F | Secondary background. Card backgrounds. Code block backgrounds. |
| **Electric Mint** | #00E5A0 | **PRIMARY ACCENT.** CTAs, highlights, links, headings on dark bg, data viz, badges. Signature color. |
| **Off White** | #E5E5E7 | Body text on dark backgrounds. Secondary text on light backgrounds. |
| **Snow** | #FAFAFA | Primary background (light mode). Body text background. Clean sections. |

### Secondary Accent Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Warm Orange** | #FF6B35 | Warning states, urgency CTAs, "hot" content badges, contrarian posts accent |
| **Signal Blue** | #3B82F6 | Links in light mode, data visualizations, informational badges |
| **Neutral Gray** | #71717A | Metadata, timestamps, captions, secondary UI elements |

### Extended Palette (CSS Variables for Website)

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
  --color-text-tertiary: #71717A;      /* Neutral Gray — captions, metadata */

  /* Accent */
  --color-accent: #00E5A0;             /* Electric Mint — CTAs, links, highlights */
  --color-accent-hover: #33FFBE;       /* Lighter mint for hover states */
  --color-accent-dark: #00B37D;        /* Darker mint for pressed states */

  /* Secondary accents */
  --color-warning: #FF6B35;            /* Warm Orange */
  --color-info: #3B82F6;               /* Signal Blue */

  /* Borders */
  --color-border: #2A2A2E;             /* Subtle dark border */
  --color-border-accent: #00E5A0;      /* Mint border for highlights */
}
```

### Color Usage Rules

- **90/10 rule:** 90% of any design is black/white/charcoal. 10% is Electric Mint. Maximum impact.
- **Never use mint as a background color.** It is an accent only: headlines, CTAs, underlines, borders, badges.
- **Dark mode is default.** Dark-first differentiates from all competitors.
- **LinkedIn carousels:** Black background + white text + mint accents. Stops the scroll (95% of carousels are white/light).
- **Never use gradients.** Flat, solid colors only. Gradients = generic AI branding.

---

## 3. Typography

### Font Selection

| Role | Font | Weight | Where to Use |
|------|------|--------|-------------|
| Display / Headlines | Satoshi (fallback: DM Sans) | Bold (700) / Black (900) | Website hero, carousel titles, presentation headers, newsletter headers |
| Body Text | Satoshi (fallback: DM Sans) | Regular (400) / Medium (500) | Blog posts, LinkedIn text posts, newsletter body, website body |
| Code / Technical | JetBrains Mono | Regular (400) | Code snippets, system architecture labels, workflow diagrams, terminal-style |
| Accent / Labels | Satoshi | Medium (500) ALL CAPS | Tags, badges, section labels ("CASE STUDY", "AI AGENTS", "FRAMEWORK") |

### Typography Scale

| Element | Size (Web) | Size (Social) | Style |
|---------|-----------|--------------|-------|
| Hero headline | 64-80px | 48-60px | Satoshi Black, tight tracking (-0.02em) |
| Section heading (H1) | 40-48px | 36-40px | Satoshi Bold |
| Subheading (H2) | 28-32px | 24-28px | Satoshi Bold |
| Body text | 16-18px | 14-16px | Satoshi Regular, 1.6 line height |
| Small / Caption | 13-14px | 12px | Satoshi Medium, ALL CAPS, wide tracking (+0.05em) |
| Code blocks | 14-15px | 12-14px | JetBrains Mono Regular |

### Typography Rules

- **Headlines are always tight.** Reduce letter-spacing on display text (-0.02 to -0.04em). Premium, compressed feel.
- **Body text breathes.** Line height 1.6-1.7 for readability.
- **ALL CAPS sparingly.** Only for labels, badges, section markers. Never for full sentences.
- **Monospace for credibility.** System architecture, workflow steps, technical specs → JetBrains Mono. Signals "this person actually builds things."

---

## 4. Voice & Tone

### Brand Voice Principles

| Principle | Do This | Never Do This |
|-----------|---------|--------------|
| **Direct** | "This system books 12 meetings/week on autopilot." | "Leveraging cutting-edge AI to revolutionize your pipeline!" |
| **Specific** | "We replaced 60 hrs/week of manual work with n8n + Claude." | "AI can help your team be more productive." |
| **Confident, not arrogant** | "I have built this. Here is exactly how." | "I am the best AI consultant in the world." |
| **Teacher energy** | "Here is the mistake I see every B2B company make:" | "You NEED to do this or you will fail." |
| **Anti-hype** | "Most AI tools will not help you. Here is why." | "AI is going to change EVERYTHING!!" |
| **Operator language** | "Deploy, ship, build, audit, architect, implement" | "Leverage, synergize, ideate, disrupt, revolutionize" |

### Banned Words & Phrases

These are banned from ALL content:

- "Game-changer" / "Revolutionary" / "Groundbreaking"
- "Leverage" / "Synergy" / "Ideate" / "Disrupt"
- "In today's fast-paced world..." / "As we all know..."
- "Unlock" / "Empower" / "Transform" (unless backed by specific numbers)
- "AI-powered" as a standalone value prop
- "10x" / "100x" without proof

### Power Phrases (Use Often)

- "Here is the exact system."
- "I built this. Here is how."
- "Talk to me before you buy AI tools."
- "This took 11 days to deploy. Here are the results after 30."
- "Most companies get this wrong. Here is what actually works."
- "The system runs while you sleep."

---

## 5. Social Media Visual Identity

### LinkedIn

| Element | Specification |
|---------|--------------|
| Profile photo | Professional headshot. Dark background preferred. Slight smile. No filters. |
| Banner | Dark bg (#0A0A0B). Left: "AI Systems Architect" in Satoshi Bold white. Below: "Talk to me before implementing AI." in Electric Mint. Right: subtle system/workflow diagram. 1584x396px. |
| Headline | "I help B2B companies implement AI automation systems that actually work \| AI Strategy → Deployed Infrastructure \| Founder of AI Builders Club" |
| Carousel style | Black bg. White body text. Mint for headlines, numbers, highlights. Satoshi Bold titles. 1080x1080px. Slide 1 = bold hook. Last slide = CTA. |
| Text post format | Short paragraphs (1-2 lines). Heavy line breaks. Start with hook (first line visible in feed). End with CTA or question. |

### Twitter/X

| Element | Specification |
|---------|--------------|
| Profile photo | Same as LinkedIn. Consistency. |
| Banner | Black bg. Name in large Satoshi Black. "AI Systems" in mint. sakshamsolanki.com in small gray. 1500x500px. |
| Thread images | Black bg, white/mint text, JetBrains Mono for code/architecture screenshots. |
| Tone | Slightly more raw and unfiltered than LinkedIn. Shorter sentences. More opinions. More personality. |

### Website (sakshamsolanki.com)

| Element | Specification |
|---------|--------------|
| Theme | Dark-mode default. Optional light-mode toggle. Dark gray (#141416) base. |
| Hero section | Full-width dark bg. Satoshi Black 64-80px white headline. Off White subhead. Mint CTA button. Subtle mesh/grid background. |
| Navigation | Minimal. Blog, Case Studies, AI Builders Club, Consulting, About. Mint hover state. |
| Blog cards | Dark cards on slightly lighter bg. White Bold title. Gray meta. Mint category badge. |
| CTA buttons | Mint bg (#00E5A0) + black text. 8px border radius. Hover: lighter mint. |
| Footer | Black bg. Minimal. Social links. Newsletter embed. Copyright. |

### Newsletter (AI Builders Club)

| Element | Specification |
|---------|--------------|
| Header | Black strip with "AI BUILDERS CLUB" in Satoshi Bold white + mint underline. Name below in gray. |
| Body | Light background (#FAFAFA) for email readability. Dark text. Mint for links and section headers. |
| Section dividers | Thin mint line. Section labels in ALL CAPS gray. |
| CTA buttons | Mint background, black text. Same as website. |

---

## 6. Content Design Templates

### LinkedIn Carousel Template

| Slide | Content | Design |
|-------|---------|--------|
| Slide 1 (Hook) | Bold claim or question. 5-10 words max. | Black bg. Satoshi Black white text (40-48px). Mint accent on 1-2 key words. |
| Slides 2-8 (Body) | One idea per slide. Short text + optional diagram/icon. | Black bg. White body text (20-24px). Mint for numbers, highlights, arrows. |
| Last slide (CTA) | "Comment 'AI Builders Club' to get the full guide." | Black bg. Mint text for CTA keyword. Name + photo small in corner. |

### Blog Post Template

- Title: Satoshi Bold, 36-40px on dark hero section
- Meta: "By Saksham Solanki • March 2026 • 8 min read" in gray
- Body: Light background, dark text, 18px, 1.6 line height
- H2 headings: Satoshi Bold, mint underline or left border
- Code blocks: JetBrains Mono on charcoal (#1C1C1F) background
- Inline CTAs: Mint banner mid-article ("Join AI Builders Club")
- End CTA: Full-width dark section with newsletter signup

### Case Study Template

- Header: Dark bg, client industry tag in mint ALL CAPS badge, title in white
- Metrics bar: 3-4 key numbers in large Satoshi Black mint text ("73% cost reduction")
- Architecture diagram: Dark bg, mint lines/connectors, white labels, JetBrains Mono for tech names
- Quote/testimonial: Mint left border, italic text

---

## 7. Design System Specs

### Spacing Scale (8px base grid)

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight gaps, icon padding |
| sm | 8px | Inline element spacing |
| md | 16px | Default component padding |
| lg | 24px | Section internal padding |
| xl | 48px | Between major sections |
| 2xl | 80px | Hero padding, major section gaps |
| 3xl | 120px | Page section separators |

### Border Radius

- Buttons: 8px
- Cards: 12px
- Badges/tags: 6px
- Avatars: Full circle
- No rounded corners on hero sections or full-width elements

### Shadow & Elevation

- **Dark mode:** No drop shadows. Use border (1px solid #2A2A2E) for card separation.
- **Light mode:** Subtle shadow (0 1px 3px rgba(0,0,0,0.1)) on cards only.
- Never use heavy box shadows. The brand is flat and clean.

### Iconography

- **Style:** Outline icons (not filled). 1.5-2px stroke weight. Lucide or Phosphor icon sets.
- **Color:** White on dark bg, charcoal on light bg, mint for interactive/highlighted states.
- **Size:** 20-24px inline, 32-40px feature sections, 48px hero icons.

---

## 8. Competitor Visual Differentiation

| Competitor | Their Identity | Your Differentiation |
|-----------|---------------|---------------------|
| **Liam Ottley / Morningside AI** | Dark green on black/white. Clean, corporate. Webflow. | More personal (face-forward, operator stories). Mint is brighter. Dark-mode social-first vs website-first. |
| **Pascal Bornet** | Light/white backgrounds. Blue accents. Corporate/keynote speaker. | Dark-mode, technical, builder-focused. Speaks to operators vs CIOs. Polished technical vs polished corporate. |
| **Nick Abraham / Leadbird** | Casual, YouTube/Twitter-native. No strong brand system. | Deliberate, consistent visual system across every channel. |
| **Zain Kahn / Superhuman AI** | Clean white newsletter. Minimalist. Newsletter-first. | Dark-first, system-architecture-forward. Built-from-trenches case studies vs curated news. |
| **Generic AI influencers** | Purple gradients, Inter font, ChatGPT-aesthetic. | Zero overlap. Dark + mint + Satoshi = instantly recognizable as NOT generic AI. |

> When someone sees a black background with electric mint accents in their LinkedIn feed, they should immediately think "that is Saksham Solanki" before they even read the text.

---

## 9. Quick Reference Card

| Element | Value |
|---------|-------|
| Primary color (accent) | #00E5A0 (Electric Mint) |
| Background (dark) | #0A0A0B (Void Black) |
| Background (light) | #FAFAFA (Snow) |
| Secondary accent | #FF6B35 (Warm Orange) |
| Display font | Satoshi Bold / Black |
| Body font | Satoshi Regular / Medium |
| Code font | JetBrains Mono Regular |
| Button style | Mint bg + black text, 8px radius |
| Default mode | Dark |
| Carousel size | 1080 x 1080px |
| LinkedIn banner | 1584 x 396px |
| Twitter banner | 1500 x 500px |
| Voice | Direct, specific, operator-first, anti-hype |
| LinkedIn CTA keyword | AI Builders Club |
| Website | sakshamsolanki.com |

> The core — dark mode, electric mint, Satoshi type, operator voice — stays locked for at least 12 months to build recognition. Consistency compounds.
