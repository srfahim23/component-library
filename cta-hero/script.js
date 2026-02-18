document.getElementById('estimateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // সিম্পল সাকসেস মেসেজ বা অ্যানিমেশন
    const btn = document.querySelector('.submit-btn');
    btn.innerText = "SENDING...";
    
    setTimeout(() => {
        alert("Thank you! We will contact you shortly.");
        btn.innerText = "GET STARTED";
        this.reset();
    }, 2000);
});