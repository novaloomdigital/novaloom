// Change header style on scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Continuous Typewriter Effect
const text = "Tangible Results for Growth"; // Text to display
let i = 0; // Initial character index
let isDeleting = false; // Flag for deleting characters
const speed = 75; // Speed in milliseconds
const pauseTime = 250; // Time to pause before starting to delete

function typeWriter() {
    const typewriterElement = document.querySelector('.typewriter');

    if (isDeleting) {
        // Remove a character
        typewriterElement.innerHTML = text.substring(0, i);
        i--;

        if (i < 0) {
            // When all characters are deleted, start typing again after a pause
            isDeleting = false;
            setTimeout(typeWriter, pauseTime);
        } else {
            setTimeout(typeWriter, speed); // Continue deleting
        }
    } else {
        // Add a character
        typewriterElement.innerHTML = text.substring(0, i);
        i++;

        if (i > text.length) {
            // Start deleting when the entire text is displayed
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        } else {
            setTimeout(typeWriter, speed); // Continue adding
        }
    }
}

// Start the typewriter effect
typeWriter();

// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".mobnav");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle active class to show/hide links
});
