document.addEventListener("DOMContentLoaded", function () {
    // Get the ticket form
    const ticketForm = document.getElementById("ticketForm");

    // Listen for form submission
    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const ticketType = document.getElementById("ticketType").value;

        // Validation check
        if (name && email && ticketType) {
            // Hide the form
            ticketForm.style.display = "none";

            // Show confirmation message
            const confirmationMessage = document.getElementById("confirmationMessage");
            confirmationMessage.style.display = "block";
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Dynamic year in footer
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});