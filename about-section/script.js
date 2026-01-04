document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Counter speed (beshi hole slow hobe)

    const startCounter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
                observer.unobserve(counter); // Ekbar animation hole stop hoye jabe
            }
        });
    };

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(startCounter, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});