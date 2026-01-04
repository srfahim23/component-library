document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');

    // Section-ti load hobar somoy halka upore uthbe
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);

    // Mouse movement-er sathe blobs gulo halka move korbe
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.blob-1').style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        document.querySelector('.blob-2').style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
    });
});