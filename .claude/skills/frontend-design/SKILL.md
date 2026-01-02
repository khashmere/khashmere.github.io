---
name: frontend-design
description: Frontend design skill for Khashmere website. Creates production-grade web interfaces following Khashmere brand aesthetic with thread-constellation visual concept.
---

Build distinctive, production-grade frontend interfaces for Khashmere website. Implement real working code with exceptional attention to aesthetic details following the thread-constellation visual concept.

## Design Thinking

Before coding, commit to the Khashmere aesthetic:

- **Purpose**: Make AI/data accessible. Help people who feel overwhelmed.
- **Tone**: Warm, minimal, premium, confident, approachable
- **Feel**: "I can start here. They handle the hard parts."
- **Differentiation**: Thread-constellation visual — subtle nodes with curved connecting lines, warm central glow

**CRITICAL**: Execute with precision. The key is intentionality and cohesiveness.

## Visual System

### Colors

```css
/* Primary palette */
--soft-navy: #3d4f61; /* Primary background */
--deep-navy: #1f2d3a; /* Gradients, depth */
--warm-cream: #f0ece8; /* Text on dark */
--warm-gold: #d4af82; /* Accents, highlights */

/* Background gradient */
background: linear-gradient(160deg, #3d4f61 0%, #2a3a4a 50%, #1f2d3a 100%);
```

### Typography

**Font:** DM Sans (400, 500)

```css
/* Typography scale */
--font-logo: 16px / 500 / letter-spacing: 2px;
--font-h1: 28-32px / 400;
--font-body: 15-16px / 400;
--font-small: 12-13px / 400;
```

Use _italics_ for emphasis. Use warm gold for key words. Avoid bold.

### Visual Concept: Thread-Constellation

Subtle nodes with curved connecting lines, warm central glow.

**Implementation Rules:**

- Asymmetric placement (not geometric)
- Very low opacity lines (8-15%)
- Curves, not straight lines
- Animation: slow, breathing, 5-8 second cycles
- Should feel like it's emerging from the background

**Overall feel:** Warm, minimal, premium, confident, approachable — **NOT** cold, busy, flashy, loud, intimidating.

### Logo

**KHASHMERE** (all caps, letter-spacing: 2-3px)

```css
/* Logo colors */
.logo-on-dark {
  color: #f0ece8;
}
.logo-on-light {
  color: #1f2d3a;
}
```

## Frontend Implementation

### Layout

- Dark background with gradient
- Cream text, gold accents
- Thread-constellation hero/background
- Generous white space
- Asymmetric, unexpected layouts

### Components

- Clean, minimal UI elements
- Soft shadows, subtle depth
- Smooth animations (slow, breathing)
- Focus on readability and accessibility

### Code Quality

- Production-grade, functional code
- Semantic HTML
- CSS variables for theming
- Responsive design
- Cross-browser compatible

## Quick Check

Before finalizing:

- Does this feel warm and approachable?
- Would someone overwhelmed by AI feel calm looking at this?
- Is this simple enough?
- Does the thread-constellation concept feel organic?
- Is every visual choice intentional and cohesive?
