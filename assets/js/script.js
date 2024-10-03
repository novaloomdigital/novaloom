// JavaScript for Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const words = ["Creativity", "Innovation", "Strategy"];
let index = 0;

function typeWord() {
    typewriter.textContent = words[index].substring(0, typewriter.textContent.length + 1);
    if (typewriter.textContent.length === words[index].length) {
        setTimeout(() => {
            index = (index + 1) % words.length;
            setTimeout(() => {
                typewriter.textContent = "";
                typeWord();
            }, 2000); // Wait for 2 seconds before deleting
        }, 1000); // Wait for 1 second before moving to the next word
    } else {
        setTimeout(typeWord, 200); // Adjust typing speed
    }
}

// Start the typewriter effect
typeWord();

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle mobile navigation
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.mobnav');
    navLinks.classList.toggle('active');
});
