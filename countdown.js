
const launchDate = new Date("December 31, 2025 00:00:00").getTime();

// Function to Update the Countdown
const updateCountdown = () => {
    // Get current time
    const now = new Date().getTime();

    // Find the distance (time remaining) between now and the launch date
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get the HTML elements for the numbers
    const dayElement = document.querySelector('.time-block:nth-child(1) .number');
    const hourElement = document.querySelector('.time-block:nth-child(2) .number');
    const minuteElement = document.querySelector('.time-block:nth-child(3) .number');
    const secondElement = document.querySelector('.time-block:nth-child(4) .number');

    // Helper function to add leading zero if the number is less than 10
    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    // Update the HTML content
    if (distance > 0) {
        dayElement.textContent = formatNumber(days);
        hourElement.textContent = formatNumber(hours);
        minuteElement.textContent = formatNumber(minutes);
        secondElement.textContent = formatNumber(seconds);
    } else {
        // When the countdown is over
        clearInterval(timerInterval);
        dayElement.textContent = '00';
        hourElement.textContent = '00';
        minuteElement.textContent = '00';
        secondElement.textContent = '00';
        document.querySelector('h1').textContent = 'WE ARE LIVE!';
        // You could add a link or redirect here
    }
}

// Run the function immediately and then every 1 second
updateCountdown(); // Run once immediately to prevent a 1-second delay
const timerInterval = setInterval(updateCountdown, 1000);