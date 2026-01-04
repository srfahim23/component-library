document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('itlab-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form data collection
        const name = document.getElementById('name').value;
        
        // UI Feedback
        formStatus.style.color = "#38bdf8";
        formStatus.innerText = "Sending your message...";

        // Simulation (Server response time)
        setTimeout(() => {
            formStatus.style.color = "#4ade80"; // Success Green
            formStatus.innerText = `Thank you, ${name}! Your message has been sent successfully.`;
            
            // Clear Form
            contactForm.reset();
        }, 2000);
    });
});