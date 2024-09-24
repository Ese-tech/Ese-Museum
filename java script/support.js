document.addEventListener("DOMContentLoaded", function () {
    // Get all the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.product-card button');

    // Loop through each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get product name from the sibling element
            const productName = this.previousElementSibling.previousElementSibling.textContent;

            // Show alert with product name added to cart
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Dynamic year in footer
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});