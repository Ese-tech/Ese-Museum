// Toggle menu for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    // Menu toggle function for mobile devices
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

// Dynamic year in the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('#year');
    yearSpan.innerHTML = new Date().getFullYear();
});

// Simple form validation for ticket purchase
document.querySelector('.ticket-form').addEventListener('submit', function(e) {
    const emailInput = document.querySelector('#email');
    const nameInput = document.querySelector('#name');
    
    // Validate form fields
    if (emailInput.value === '' || nameInput.value === '') {
        alert('Please fill all the required fields.');
        e.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});