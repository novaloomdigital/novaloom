// JavaScript for Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const words = ["Monetize Your Traffic, Maximize Your Revenue", "Customised, Stunning, High Performance Website Development to Drive Results", "From On-Page SEO Tweaks to Advanced Technical SEO to Get Higher Rankings", "Data Driven Strategies that Captivate, Convert & Grow Audience", "Build Buzz, Boost Engagement, & Turn Followers into Loyal Customers", "Join Us Today & Watch your Earnings Soar!"];
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

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter both username and password.';
        return false; // Prevent form submission
    }

    // Simulate authentication (replace this with actual logic)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        if (rememberMe) {
            alert('Remember Me is checked.');
        }
        errorMessage.style.display = 'none';
        return true; // Allow form submission or redirect
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password.';
        return false; // Prevent form submission
    }
}

function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}
