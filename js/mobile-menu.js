(() => {
  const mobileMenu = document.querySelector('.menu-box');
  const openMenuBtn = document.querySelector('.menu-open');
  const closeMenuBtn = document.querySelector('.menu-close');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  const openMenu = () => {
    mobileMenu.classList.remove("is-closed");
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.add("is-closed");
    setTimeout(() => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
    }, 300);  
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    closeMenu();
  });
})();