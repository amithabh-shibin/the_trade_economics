const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('#site-nav');
const desktop = window.matchMedia('(min-width: 991px)');

function setMenuOpen(open) {
  navigation.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') === 'false');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', () => setMenuOpen(false));
}

const overview = document.querySelector('#academy-overview');
const overviewTrigger = document.querySelector('[data-open-overview]');

if (overview && overviewTrigger) {
  overviewTrigger.addEventListener('click', () => overview.showModal());

  overview.addEventListener('click', (event) => {
    if (event.target === overview) overview.close();
  });

  overview.addEventListener('close', () => overviewTrigger.focus());
}
