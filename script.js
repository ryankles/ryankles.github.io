// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get modal element
    const modal = document.getElementById("contactModal");
    const contactButton = document.getElementById("contactButton");
    const closeButton = document.querySelector(".close-button");

    // Check if button is working
    console.log("Script loaded");

    // Show the modal when the contact button is clicked
    contactButton.onclick = function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        console.log("Contact button clicked"); // Debugging log
        modal.style.display = "flex"; // Show modal with flexbox
        console.log("Modal display set to flex"); // Debugging log
    }

    // Close the modal when the close button is clicked
    closeButton.onclick = function () {
        modal.style.display = "none"; // Hide modal
    }

    // Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    }
});

