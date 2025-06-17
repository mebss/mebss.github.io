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


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusDiv.textContent = 'Sending…';
    statusDiv.className = ''; // clear any prior state

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusDiv.textContent = 'Thanks for your message! I’ll get back to you soon.';
        statusDiv.classList.add('success');
        form.reset();
      } else {
        const errorData = await response.json();
        statusDiv.textContent = errorData.error || 'Oops—there was a problem sending your message.';
        statusDiv.classList.add('error');
      }
    } catch (err) {
      statusDiv.textContent = 'Network error. Please try again later.';
      statusDiv.classList.add('error');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // ——— Video Modal ———
  const viewBtn  = document.getElementById('view-demo-btn');
  const modal    = document.getElementById('video-modal');
  const closeBtn = modal.querySelector('.close');

  if (viewBtn && modal && closeBtn) {
    // open modal
    viewBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
    // close when “×” clicked
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    // close when clicking outside video
    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});
