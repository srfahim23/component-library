document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.modern-footer');
    footer.style.opacity = '0';
    footer.style.transition = 'opacity 1.5s ease-in-out';

    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            footer.style.opacity = '1';
        }
    }, { threshold: 0.1 });

    observer.observe(footer);
});