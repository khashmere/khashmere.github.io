# Khashmere homepage calculator — cost model to nail down

_Nov 1, 2026 · from Linh (drafted with Claude) · for Mark_

## Why this doc

We're adding a simple interactive calculator to the homepage (below the hero), per Jen's
Oct 29 feedback. Two sliders — **number of customers** and **workflows per customer** — and it
shows an MSP partner the revenue potential of building an AI & data practice with Khashmere, and
what they keep after paying us. The full detailed version stays at
`docs/overview/khashmere-partner-calculator.html`.

**The revenue side is fine. The cost side doesn't match our real pricing — I need you to lock the
math.** Below is what the current calculator does, where it breaks, and the model I think is
right. Correct anything that's wrong (or just point me at the Excel sheet and I'll match it).

## 1. The revenue side (this part works — keep it)

The calculator models what the **MSP bills their own customer**. Per workflow, using our
assumptions:

- **Build:** 50 hours, one-time
- **Run:** 5 hours per month, ongoing
- **Khashmere delivers 80% of the hours; the MSP's own staff does 20%**
- The MSP resells Khashmere's hours with a markup (default **30%**): they bill **$260/hr** for an
  hour Khashmere delivers, and **$200/hr** for an hour their own staff delivers.

That gives, per workflow: **$12,400 build** (one-time) + **$1,240/month**.

| Scenario | Year-1 revenue to the MSP |
|---|---|
| 1 customer × 1 workflow | $27,280 |
| 1 customer × 4 workflows | $109,120 _(≈ the "$110K/customer" we quote)_ |

## 2. The problem (why it doesn't make sense today)

In the current calculator, the **only cost** subtracted is "Khashmere hours × $200." Our actual
pricing (`docs/pricing.html`) is productized:

| Tier | Monthly | Setup | Includes |
|---|---|---|---|
| Basic | $799/mo | $1,799 | up to 2 workflows, 3 hrs/mo consulting |
| Plus | $999/mo | $2,499 | up to 4 workflows, 5 hrs/mo consulting |
| Enterprise | custom | custom | custom |

**None of those subscription or setup numbers appear in the calculator.** So the "gross profit"
it shows isn't what an MSP actually nets with us.

## 3. Proposed cost model (confirm or fix)

What the MSP pays Khashmere = **three separate lines**:

1. **Setup fee** — one-time, per customer, always attached. _(Confirmed: separate from the
   build, not bundled into it.)_
2. **Monthly subscription** — tier-based; covers the ongoing/run work + included consulting hrs.
3. **Billable build hours** — the big one-time custom build, per workflow. Khashmere's share is
   40 hrs/workflow, billed to the MSP at our rate (assumed **$200/hr** — confirm).

Because setup + subscription are **flat per customer** and the build hours **grow per workflow**,
the MSP's margin improves the more workflows each customer buys.

## 4. Worked examples (using the proposed model)

**1 customer × 1 workflow → Basic tier**

| | | |
|---|---|---|
| Revenue (MSP bills customer) | | **$27,280** |
| You pay Khashmere: | | **$19,387** |
| &nbsp;&nbsp;— setup (one-time) | $1,799 | |
| &nbsp;&nbsp;— subscription $799 × 12 | $9,588 | |
| &nbsp;&nbsp;— build hours: 40 × $200 | $8,000 | |
| **MSP net** | | **$7,893 (29%)** |

**1 customer × 4 workflows → Plus tier**

| | | |
|---|---|---|
| Revenue (MSP bills customer) | | **$109,120** |
| You pay Khashmere: | | **$46,487** |
| &nbsp;&nbsp;— setup (one-time) | $2,499 | |
| &nbsp;&nbsp;— subscription $999 × 12 | $11,988 | |
| &nbsp;&nbsp;— build hours: 160 × $200 | $32,000 | |
| **MSP net** | | **$62,633 (57%)** |

## 5. Decisions I need from you, Mark

1. **Build-hour rate** — is our rate to the MSP for the custom build work **$200/hr**, or
   something else?
2. **Run work** — does the monthly subscription really cover *all* ongoing/run work, or are run
   hours also billable beyond the 3–5 included hrs/mo?
3. **Tier selection** — does the tier key off **workflows per customer** (each customer sits on a
   tier: Basic ≤2, Plus 3–4, Enterprise 5+), or off **total workflows** across the whole book?
4. **The 80/20 split and 50h build / 5h-mo run** — are these still the right assumptions, or have
   they changed?
5. **Is there an Excel sheet** that already has all this? If so, send it and I'll just make the
   homepage calculator match it exactly.
