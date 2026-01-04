// Get current year and set target to year end
const currentYear = new Date().getFullYear();
const targetDate = new Date(`December 31, ${currentYear} 23:59:59`).getTime();

// DOM elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.querySelector(".countdown-container h1");
const countdownEl = document.querySelector(".countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    titleEl.innerText = "Happy New Year 2027";
    countdownEl.style.display = "none";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysEl.innerText = days;
  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

// Initial call
updateCountdown();

// Update every second
const timer = setInterval(updateCountdown, 1000);
