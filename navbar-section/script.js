document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Alert message for testing)
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', () => {
        alert("Mobile menu clicked! You can toggle a sidebar here.");
    });
});