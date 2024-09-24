// Set dynamic footer year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Form Validation
document.querySelector(".inquiry-form").addEventListener("submit", function (e) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    if (nameInput.value === "" || emailInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
        alert("Please fill out all fields.");
        e.preventDefault(); // Prevent form submission if fields are empty
    } else {
        alert("Your inquiry has been submitted. We'll get back to you shortly.");
    }
});
