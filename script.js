  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const dropdowns = document.querySelectorAll('.dropdown > a');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('active');
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentLi = dropdown.parentElement;
        parentLi.classList.toggle('active');
      }
    });
  });
