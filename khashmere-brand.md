---
name: khashmere-brand
description: Brand guidelines for Khashmere. Apply to proposals, presentations, and documents. Focuses on brand values, voice, and visual identity.
---

Brand guidelines for Khashmere materials (proposals, presentations, documents). Ensures consistency across all brand touchpoints with warm, trustworthy, simple feel.

## Brand Thinking

Before designing, understand the emotional goal:

**What should someone feel in 10 seconds?**
"I can start here. They handle the hard parts."

**What problem do we solve?**
AI and data feel overwhelming. People don't know where to start.

**What should they believe?**
This is simple. These are real people I can trust.

**Tagline:** Human-first data platform. Comfortable expertise.

## Values & Voice

**Values:**
- Human-first — technology serves people, not the reverse
- Trustworthy — smart, nice, good communicators
- Simple — don't overwhelm people already overwhelmed

**Voice:**
Sound like an expert who solves the right problem, not just the obvious one. Plain language, direct, confident. Lead with strategy, follow with execution. Acknowledge complexity then simplify it.

**Positioning:** *Teach first, pitch never.* Most vendors sell before they explain. Khashmere leads with education — what AI is worth your time, what isn't, where to begin — then builds. Never open with a feature list.

**Don't:** Buzzwords, jargon, over-explaining, cold/robotic tone. Never sound like a vendor spec sheet.

## Visual Identity

### Colors

```css
/* Primary palette */
--soft-navy: #3d4f61;   /* Primary background */
--deep-navy: #1f2d3a;   /* Gradients, depth */
--slate: #2a3a4a;       /* Gradient mid-point */
--warm-cream: #f0ece8;  /* Text on dark */
--warm-gold: #d4af82;   /* Accents, highlights */

/* Background gradient */
background: linear-gradient(160deg, #3d4f61 0%, #2a3a4a 50%, #1f2d3a 100%);
```

### Typography

**Font:** DM Sans (400, 500)

```css
/* Logo */
.logo: 16px, weight 500, letter-spacing 3px

/* Navigation */
.nav-links: 13px, letter-spacing 2px, uppercase, opacity 0.5

/* Tagline */
.tagline: 13px, letter-spacing 2px, uppercase, opacity 0.4

/* Headline */
.headline: 28px, weight 400, line-height 1.5
.headline em: italic, var(--warm-gold)

/* Hero eyebrow */
.hero-eyebrow: 11px, letter-spacing 3px, uppercase, opacity 0.5

/* Hero sub paragraph */
.hero-sub: 16px, weight 400, line-height 1.7, opacity 0.75
.hero-sub em: italic, var(--warm-gold)

/* CTA Buttons — two variants */
/* Primary (hero): gold-filled background, deep navy text */
.hero-cta: background var(--warm-gold), color var(--deep-navy), 12px, padding 14px 32px, letter-spacing 1px, uppercase
/* Secondary: transparent with warm cream border */
.cta: 12px, padding 12px 28px, border 1px solid rgba(240,236,232,0.25), letter-spacing 1px

/* Section Headlines */
.section-headline: 42px, weight 400, line-height 1.5
.section-headline em: italic, var(--warm-gold)
/* Responsive (under 900px): 32px, text-align center */
```

Use *italics* for emphasis. Use warm gold for key words. Avoid bold.

### Animations

Slow, calming animations (5-8s cycles):

```css
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.08); opacity: 1; }
}
```

Stagger node delays for organic feel.

### Logo

**KHASHMERE** (all caps, letter-spacing: 2-3px)

- On dark: `#f0ece8` (warm cream)
- On light: `#1f2d3a` (deep navy)

## Target Audience

**Primary: MSPs (Managed Service Providers)**
- Exec/IT decision-makers at mid-market MSPs
- Pain: AI paralysis (don't know where to start), operating blind (no unified reporting), bad data at source, tools bought but not used
- They are already in the Microsoft ecosystem (Teams, SharePoint, Azure) — don't position Fabric as new, position it as what they already have, finally unified
- Validated by Mark Clancy's MSP research; Jenn (marketer) confirmed education-first as the moat

**Secondary: Convention centers** *(in progress — rows TBD with Mark's input)*

**What resonates:**
- "We teach first" — they're burned by vendors who pitch before understanding the problem
- "No rip-and-replace" — they can't afford downtime or migrations
- "Foundation we've made trustworthy" — trust is the purchase, not the software
- Real people, subscription model, with you every step

**What to avoid:**
- Enterprise language (Fortune 500, Accenture-style positioning feels distant to SMB MSPs)
- Feature lists before context
- Anything that sounds like another SaaS vendor

## Page Structure (current)

Sections in order: Hero → Foundation (Phase 2) → Pain Points table (Phase 3, in progress) → Pricing → Client logos → Team → Footer

**Removed:** "What We Do" capability tabs section — replaced by Phase 3 pain points table.

## Section Design Principles

- Prefer **editorial layouts** over card grids. Gold left-border blocks feel warm and conversational; boxed cards feel like vendor spec sheets.
- Sections flow from education → proof → action. Don't lead with features or pricing.
- Use eyebrow labels (`font-size: 11px, letter-spacing: 3px, uppercase, warm-gold`) to orient the reader before each section.

## Application

- **Proposals/Docs:** Light background okay, navy headers, gold accent lines, generous margins
- **Presentations:** Dark slides for impact, light for detail, one idea per slide, avoid bullets

## Quick Check

- Does this feel warm and approachable?
- Would someone overwhelmed by AI feel calm looking at this?
- Is this simple enough?
- Does every visual choice connect back to the feeling we want?
