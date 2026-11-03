// Nav scroll effect
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

if (navToggle && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
  };

  navToggle.addEventListener('click', openMenu);
  mobileMenuClose?.addEventListener('click', closeMenu);
  mobileMenuLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// What We Do - Capability Accordion
const capabilityItems = document.querySelectorAll('.capability-item');
const capabilityDetails = document.querySelectorAll('.capability-detail');

if (capabilityItems.length > 0) {
  capabilityItems.forEach(item => {
    item.addEventListener('click', () => {
      const capability = item.getAttribute('data-capability');

      // Update button states
      capabilityItems.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-expanded', 'true');

      // Update detail panels
      capabilityDetails.forEach(detail => {
        if (detail.getAttribute('data-capability') === capability) {
          detail.classList.add('active');
        } else {
          detail.classList.remove('active');
        }
      });
    });

    // Keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

// Inline copy buttons (e.g. contact card email)
const inlineCopyButtons = document.querySelectorAll('[data-copy-email]');
inlineCopyButtons.forEach(btn => {
  const defaultLabel = btn.getAttribute('aria-label') || 'Copy to clipboard';
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = btn.getAttribute('data-copy-email');
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('is-copied');
      btn.setAttribute('aria-label', 'Copied');
      setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.setAttribute('aria-label', defaultLabel);
      }, 1800);
    } catch (err) {
      console.warn('Copy failed', err);
    }
  });
});

// Working with Khashmere — partnership calculator (homepage only)
// Khashmere cost per customer = flat subscription (setup + 12 months) +
// a one-time build of each workflow (~80 hours at the plan's hourly rate).
// The MSP resells it all to its customer at a target margin.
(function () {
  const customersEl = document.getElementById('customers');
  const workflowsEl = document.getElementById('workflows');
  if (!customersEl || !workflowsEl) return; // section not on this page

  const MARGIN = 0.50; // MSP's gross margin on the resold plan
  const HOURS_PER_WORKFLOW = 80; // average build effort per workflow

  // Pricing tiers (docs/pricing.html). The subscription is flat — it no longer
  // scales with workflows; workflows are billed separately as build hours.
  // Plan is picked by workflow count: Plus kicks in at 4 workflows.
  const tierFor = (workflows) =>
    workflows < 4
      ? { name: 'Basic plan', mo: 1499, setup: 1499, rate: 250 }
      : { name: 'Plus plan', mo: 2999, setup: 2999, rate: 200 };

  const money = (n) => '$' + Math.round(n).toLocaleString('en-CA');
  const el = (id) => document.getElementById(id);

  const calc = () => {
    const customers = +customersEl.value;
    const workflows = +workflowsEl.value;

    // What the MSP pays Khashmere: flat subscription + one-time workflow build
    const tier = tierFor(workflows);
    const buildHours = workflows * HOURS_PER_WORKFLOW;
    const buildFee = buildHours * tier.rate;
    const subPerCust = tier.setup + tier.mo * 12;
    const khPerCust = subPerCust + buildFee;
    const khTotal = khPerCust * customers;

    // What the MSP bills its customer
    const invoicedPerCust = khPerCust / (1 - MARGIN);
    const revenue = invoicedPerCust * customers;

    const profit = revenue - khTotal;
    const margin = revenue ? Math.round((profit / revenue) * 100) : 0;

    el('customersOut').textContent = customers;
    el('workflowsOut').textContent = workflows;
    el('revenue').textContent = money(revenue);
    el('profit').textContent = money(profit);
    el('margin').textContent = margin + '% margin';
    el('planChip').textContent = tier.name;
    el('planSub').textContent = customers + (customers === 1 ? ' customer · ' : ' customers · ') +
      workflows + (workflows === 1 ? ' workflow each' : ' workflows each');
    el('subOut').textContent = money(subPerCust * customers);
    el('buildSub').textContent = 'Build · ' + HOURS_PER_WORKFLOW + ' hrs/workflow · $' + tier.rate + '/hr';
    el('buildOut').textContent = money(buildFee * customers);
    el('custSpend').textContent = money(revenue);
    el('custSpendLabel').textContent = 'Year-1 spend across ' + customers +
      (customers === 1 ? ' customer' : ' customers') + ' · ' + money(invoicedPerCust) + ' each';
    el('bdTotal').textContent = money(khTotal);
  };

  customersEl.addEventListener('input', calc);
  workflowsEl.addEventListener('input', calc);
  calc();
})();

