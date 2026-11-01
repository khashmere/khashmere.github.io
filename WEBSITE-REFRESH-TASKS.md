# Website refresh — tasks from the Oct 29 call with Jen

Deadline: GTIA article publishes **Wed Nov 5, 2026**. Work one task at a time, top to bottom.
Source: Granola notes "Khasmere <> Jen" (Oct 29). Current state checked against `docs/` on Oct 30.

## Phase 1 — copy fixes on pages that already exist (no new pages, ~half a day)

### 1. Hero copy (index.html) — mostly done, needs commit
- [x] "Who is Khashmere" line now reads "…in your client's environment to help meet their demands and grow your revenue" (uncommitted in working tree). Fix: "client's" → "clients'" and add the missing full stop.
- [ ] Hero sub still ends with "open a new, higher-margin revenue line." Jen: replace with the idea "help you identify and execute on revenue-generating AI opportunities" — Khashmere helps MSPs figure out *what* to do with AI, not just do it.
- [ ] Commit.

### 2. "Our Approach" step 3 (index.html)
- [ ] Step 03 "Design — Bold but pragmatic. Repeated until right." is too vague. Rewrite so it answers what actually happens (e.g. prototype the workflow with the client, iterate on real data until it is right). Re-read all five steps: each must leave no question unanswered.

### 3. "The Foundation" / tools section (index.html)
- [ ] Heading "We're not introducing something unproven." is hedging. Rewrite in the affirmative ("We build on proven, best-in-class platforms.").
- [ ] Reframe from "we use Fabric and Claude" to "We lead with Microsoft Fabric and Claude by Anthropic, and work with Bullhorn, Momentus, ConnectWise and more." Logos for Bullhorn, ConnectWise and Momentus already exist in `docs/assets/`. Good for SEO and avoids locking out MSPs with an existing stack.

### 4. Hedging sweep (all three live pages)
- [ ] Search for "not", "we're not", "unproven", "just" and rewrite in the affirmative. Speak to revenue opportunity and client expectations, not "adding AI to the line card".

## Phase 2 — calculator (the thing Jen spent the most time on)

Note: `/Users/linhphan/Downloads/khashmere-partner-calculator.html` is the OLDER version (the one Jen saw on screen: "ROI of an AI workflow practice", 50% margin, $110K). The repo copy at `docs/overview/khashmere-partner-calculator.html` is newer (mark-up model, Khashmere vs. staff hours split). Build on the repo copy, not the download.

### 5. Calculator content changes
- [ ] Subhead → "Use this calculator to see the potential revenue of developing an AI & data workflow practice with Khashmere."
- [ ] Add Khashmere's cost so it shows **net ROI**: investment (subscription + setup for the matching tier) vs. revenue. Mark's example: ~$15–16K/yr Khashmere cost vs. $110K year-1 revenue per customer.
- [ ] As the workflows slider moves, the matching pricing tier (Basic / Plus / Enterprise) and its fee should flip automatically. **Open question:** tiers are priced per MSP by total workflows (Basic 2, Plus 4), but the slider is workflows *per customer* — decide whether the tier keys off total workflows (customers × workflows) or per customer.

### 6. Calculator placement — DECIDED (Nov 1)
Previewed 3 looks embedded below the homepage hero. **Decision: Option C — dark blend** (calculator re-themed to the navy so it reads as native to the page), embedded in a `<section id="calculator">` just below the hero, with a **"Calculator" nav link that scrolls to it** (beside Pricing). Embed via `<iframe>` to keep one source-of-truth file. Nav link on index (`#calculator`) + pricing/contact (`index.html#calculator`).
- [ ] Implement the dark-blend embed + nav link (after task 6b).

### 6b. Simplify + rebrand the calculator for the web (NEW — separate task)
The current calculator is dense and off-brand (Archivo + IBM Plex fonts; the brand is **DM Sans only**). Before embedding it needs its own pass:
- [ ] Switch fonts to **DM Sans**; align to brand palette (warm-cream / deep-navy / warm-gold) and dark-blend theme per the Option C decision.
- [ ] **Simplify** — it's too heavy for a homepage embed. Trim inputs/notes to the essentials a visitor needs; the full detailed version can stay as the standalone `docs/overview/` tool.
- [ ] Keep warm, human, teach-first tone (per `khashmere-brand`); avoid the spec-sheet feel.

## Phase 3 — pricing page

### 7. Simplify pricing (pricing.html)
- [ ] Keep 3 tiers, keep prices visible (MSPs resent "book a demo for pricing"). Each tier = subscription + hours included; one line "Contact us for overages."
- [ ] Trim the feature lists. "Starting at" wording is fine where exact pricing isn't settled.
- [ ] Make tier names/limits match what the calculator uses in task 5.

## Phase 4 — new pages (need content from Linh/Mark first)

### 8. Case study — Jen's #1 priority
- [ ] New `docs/case-study.html` (singular until there is a second). Layout from Jen's slide: metrics strip at top (400K+ phone calls, 70K+ voice messages captured, 0 defects on launch), then Challenge → Solution → Impact.
- [ ] Homepage card: short blurb + "Learn more" (EY style).
- [ ] Add **CASE STUDY** to top nav on all pages.
- **Needs from you:** the challenge / solution / impact story text, client name or anonymised descriptor.

### 9. Resources page
- [ ] New `docs/resources.html` ("Resources", "Insights" or "Learnings"), add to nav. Embed the 2 articles and ~4 YouTube videos that are ready; add the GTIA article on Nov 5.
- **Needs from you:** the 2 article links and the YouTube video links.

### 10. "For AI agents" page
- [ ] New text-heavy `docs/for-ai-agents.html`, explicitly labelled for AI agents, NOT linked from nav (crawlers still index it). List all platforms, integrations, services, pricing and technical specifics. This is where the long-form text goes so the main site can get lighter.

## Phase 5 — reduce text density (after the above, since the AI-agents page absorbs the detail)

### 11. Homepage trim
- [ ] index.html is ~1,670 words. Target roughly half. Cut long paragraphs in pain points and Foundation to one or two lines each, move detail to the AI-agents page. Keep the floating orb in Approach (Jen liked it).

## Not website, but from the same call (for completeness)
- Linh: short, warm apology email to Chris re: AI Council one-slot rule.
- Mark: GTIA Data Council application (done per notes; decision in a few weeks).
- Both: on Nov 5, personal "thought you'd find this valuable" note to contacts with the GTIA article, no ask.
- Short video + post: "forward deployed engineers = humans in the loop."
