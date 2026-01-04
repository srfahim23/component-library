/* ===============================
   Navbar Scroll Effect
=============================== */

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.modern-nav');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
