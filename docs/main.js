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
