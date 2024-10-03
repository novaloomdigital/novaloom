// JavaScript for Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const words = ["Tangible Results for Growth", "Creativity", "Innovation", "Strategy"];
let index = 0;
let isDeleting = false;
let wordIndex = 0;

function typeWord() {
    const currentWord = words[index];
    
    if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, wordIndex - 1);
        wordIndex--;
    } else {
        typewriter.textContent = currentWord.substring(0, wordIndex + 1);
        wordIndex++;
    }

    // Adjust speed
    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && wordIndex === currentWord.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000); // Pause before starting to delete the word
    } else if (isDeleting && wordIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeWord, typeSpeed);
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
