// 1. Hide header on scroll
(() => {
  const header = document.querySelector('.site-header');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    header.classList.toggle('hide', y > lastY);
    lastY = Math.max(0, y);
  });
})();

// 2. Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const closeBtn  = document.querySelector('.menu-close');
  const nav       = document.querySelector('.site-nav');

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  // click outside to close
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (e.target.closest('.site-nav') || e.target.closest('.menu-toggle')) return;
    nav.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  // link clicks also close
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    })
  );
});


// 3. Animate skill bars
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const fill = bar.querySelector('.skill-bar-fill');
    fill.style.width = bar.dataset.percent;
  });
});
