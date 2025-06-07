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
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.site-nav');
  const expanded = nav.classList.toggle('open');
  document.querySelector('.menu-toggle')
          .setAttribute('aria-expanded', expanded);
});

// 3. Animate skill bars
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const fill = bar.querySelector('.skill-bar-fill');
    fill.style.width = bar.dataset.percent;
  });
});
