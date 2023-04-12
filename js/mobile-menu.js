(() => {
  const mobileMenu = document.querySelector('.menu-box');
  const openMenuBtn = document.querySelector('.menu-open');
  const closeMenuBtn = document.querySelector('.menu-close');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  }
  
  const openMenu = () => {
    refs.mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    refs.mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    
  });
})();
