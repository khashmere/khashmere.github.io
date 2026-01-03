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

**Don't:** Buzzwords, jargon, over-explaining, cold/robotic tone.

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

/* CTA Button */
.cta: 12px, padding 12px 28px, border 1px solid rgba(240,236,232,0.25), letter-spacing 1px
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

## Application

- **Proposals/Docs:** Light background okay, navy headers, gold accent lines, generous margins
- **Presentations:** Dark slides for impact, light for detail, one idea per slide, avoid bullets

## Quick Check

- Does this feel warm and approachable?
- Would someone overwhelmed by AI feel calm looking at this?
- Is this simple enough?
- Does every visual choice connect back to the feeling we want?
