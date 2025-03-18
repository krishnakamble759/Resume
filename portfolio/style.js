// Select the input toggle switch
const themeToggle = document.querySelector('.switch .input');

// Listen for toggle change
themeToggle.addEventListener('change', () => {
    // Toggle the dark-theme class on the body
    document.body.classList.toggle('dark-theme');
});


// Display an alert message when the page is loaded
window.onload = function() {
    alert("Welcome to Krishna Pandit Kamble's Portfolio!");
};
// https://freecodez.com