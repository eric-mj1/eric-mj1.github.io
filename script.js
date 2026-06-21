const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const copyEmailBtn = document.getElementById('copyEmail');
const emailText = document.getElementById('emailText');

if (copyEmailBtn && emailText) {
  const originalEmail = copyEmailBtn.dataset.email;

  copyEmailBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(originalEmail);
      emailText.textContent = 'Copied!';
      setTimeout(() => { emailText.textContent = originalEmail; }, 1800);
    } catch (err) {
      window.location.href = `mailto:${originalEmail}`;
    }
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}