# Khashmere Website

Minimal, warm, approachable website for AI/data platform. **Core message**: "I can start here. They handle the hard parts."

## Tech Stack

IMPORTANT: Vanilla HTML/CSS/JavaScript only. No frameworks. Production-grade, semantic HTML, CSS variables, mobile-first responsive design.

## Design Specifications

### Layout
- Off-center asymmetric: Hero content LEFT, thread-constellation visual RIGHT
- Logo: "KHASHMERE" (all caps, letter-spacing: 2-3px)
- Copy: "Data Analytics Platform" (tagline) | "Human-first data platform. Comfortable expertise." (headline) | "See Pricing" (CTA)

### Colors (exact values required)
```css
--soft-navy: #3d4f61;
--deep-navy: #1f2d3a;
--slate: #2a3a4a;
--warm-cream: #f0ece8;
--warm-gold: #d4af82;
background: linear-gradient(160deg, #3d4f61 0%, #2a3a4a 50%, #1f2d3a 100%);
```

### Typography (DM Sans only)
```css
.logo: 16px, weight 500, letter-spacing 3px
.nav-links: 13px, letter-spacing 2px, uppercase, opacity 0.5
.tagline: 13px, letter-spacing 2px, uppercase, opacity 0.4
.headline: 28px, weight 400, line-height 1.5
.headline em: italic, var(--warm-gold)
.cta: 12px, padding 12px 28px, border 1px solid rgba(240,236,232,0.25), letter-spacing 1px
```

### Thread-Constellation Visual
- SVG with 5-7 nodes (3-6px circles), curved paths, positioned right side
- Nodes: warm cream/gold, asymmetric, pulse animation (5-8s)
- Lines: opacity 8-15%, stroke rgba(240,236,232,0.1)
- Core: radial gradient with warm gold, breathing animation (5-8s)
- Position: absolute, top 50%, right 5%, 450px x 450px

### Animations (slow & calming, 5-8s cycles)
```css
@keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
@keyframes breathe { 0%,100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.08); opacity: 1; } }
```
Stagger node delays for organic feel.

### HTML Structure
```html
<nav class="hero-nav">
  <div class="logo">KHASHMERE</div>
  <div class="nav-links"><span>PRODUCT</span><span>PRICING</span><span>CONTACT</span></div>
</nav>
<main>
  <div class="hero-content">
    <p class="tagline">Data Analytics Platform</p>
    <h1 class="headline"><em>Human-first</em> data platform.<br/>Comfortable expertise.</h1>
    <a href="#pricing" class="cta">See Pricing</a>
  </div>
  <div class="constellation"><!-- SVG --></div>
</main>
```

## Requirements

IMPORTANT:
- Production-grade functional code - clean, readable, maintainable
- Semantic HTML5, CSS custom properties for all theming
- Accessibility: ARIA labels, keyboard nav, proper contrast
- Cross-browser compatible, no build tools
- Warm/approachable tone, never cold
- Use italics + warm gold for emphasis, avoid bold
- Every visual choice intentional and cohesive
