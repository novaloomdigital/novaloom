// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// JavaScript for Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const words = [
    "Monetize Your Traffic, Maximize Your Revenue",
    "Customised, Stunning, High Performance Website Development to Drive Results",
    "From On-Page SEO Tweaks to Advanced Technical SEO to Get Higher Rankings",
    "Data Driven Strategies that Captivate, Convert & Grow Audience",
    "Build Buzz, Boost Engagement, & Turn Followers into Loyal Customers",
    "Join Us Today & Watch Your Earnings Soar!"
];
let index = 0;
let isDeleting = false;
let wordIndex = 0;

function typeWord() {
    const currentWord = words[index];

    // Type or delete the word
    if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, wordIndex - 1);
        wordIndex--;
    } else {
        typewriter.textContent = currentWord.substring(0, wordIndex + 1);
        wordIndex++;
    }

    // Adjust speed
    const typeSpeed = isDeleting ? 100 : 200;

    // Check if the word is complete or needs to be deleted
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