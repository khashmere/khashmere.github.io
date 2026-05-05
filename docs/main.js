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
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta');

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

// Footer copy to clipboard
const copyButtons = document.querySelectorAll('.footer-contact-item[data-copy]');
const feedbackEl = document.querySelector('.footer-copy-feedback');

if (copyButtons.length > 0 && feedbackEl) {
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(textToCopy);
        feedbackEl.textContent = `Copied "${textToCopy}" to clipboard`;
        feedbackEl.classList.add('show');
        setTimeout(() => {
          feedbackEl.classList.remove('show');
        }, 2000);
      } catch (err) {
        feedbackEl.textContent = 'Failed to copy';
        feedbackEl.classList.add('show');
        setTimeout(() => {
          feedbackEl.classList.remove('show');
        }, 2000);
      }
    });
  });
}
