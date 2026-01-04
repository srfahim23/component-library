document.addEventListener('DOMContentLoaded', () => {
    // Shob button ebong card gulo ke select kora
    const buttons = document.querySelectorAll('.btn');
    const cards = document.querySelectorAll('.tech-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // ১. Age theke active thaka button-er style remove kora
            buttons.forEach(btn => btn.classList.remove('active'));
            // ২. Bortoman click kora button-e active style add kora
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                // ৩. Filter logic: 'all' hole shob dekhabe, othoba category milte hobe
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Smooth appearance-er jonno chotto ekta delay
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Filter na mille card hide kore deya
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                }
            });
        });
    });
});