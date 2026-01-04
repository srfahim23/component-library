let slideIndex = 0;
const slides = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

// Function to show a specific slide
function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Remove active class from all
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active class to current
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

// Function for Manual Dot Clicking
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Automatic Slider (Every 5 seconds)
let autoSlide = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);

// Pause auto-sliding when user clicks a dot
document.querySelector(".controls").addEventListener("click", () => {
    clearInterval(autoSlide);
});