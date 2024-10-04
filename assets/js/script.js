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

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const isPasswordVisible = passwordField.type === 'text';
    passwordField.type = isPasswordVisible ? 'password' : 'text';
    eyeIcon.classList.toggle('bi-eye', isPasswordVisible);
    eyeIcon.classList.toggle('bi-eye-slash', !isPasswordVisible);
}

document.getElementById("password-reset-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");

    // Password validation
    if (newPassword.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(newPassword)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(newPassword)) {
        passwordError.textContent = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(newPassword)) {
        passwordError.textContent = "Password must contain at least one number.";
    } else if (newPassword !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
    } else {
        passwordError.textContent = "";
        alert("Password reset successful!");
        // Here you can send the data to the server
    }
});

// Step Form of Password Reset Page with OTP Verification
let currentStep = 1;
function nextStep(step) {
    const steps = document.querySelectorAll('.form-step');
    // Move to next step
    steps[step - 1].classList.remove('active');
    steps[step].classList.add('active');
}

function validatePassword() {
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("password-error").textContent = "Passwords do not match!";
        return false;
    } else if (password.length < 8) {
        document.getElementById("password-error").textContent = "Password must be at least 8 characters long!";
        return false;
    }

    document.getElementById("password-error").textContent = "";
    return true;
}

function submitForm() {
    if (validatePassword()) {
        alert("Password reset successfully!");
        document.getElementById("password-reset-form").reset();
        // You can add AJAX call or form submission logic here
    }
}

// Function to toggle both password fields' visibility
function toggleBothPasswords() {
    const newPasswordField = document.getElementById('new-password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const eyeIcon1 = document.getElementById('eyeIcon1');
    const eyeIcon2 = document.getElementById('eyeIcon2');
    const isPasswordVisible = newPasswordField.type === 'text';
    // Toggle both password fields simultaneously
    newPasswordField.type = isPasswordVisible ? 'password' : 'text';
    confirmPasswordField.type = isPasswordVisible ? 'password' : 'text';
    // Toggle the icon for both fields
    eyeIcon1.classList.toggle('bi-eye', isPasswordVisible);
    eyeIcon1.classList.toggle('bi-eye-slash', !isPasswordVisible);
    eyeIcon2.classList.toggle('bi-eye', isPasswordVisible);
    eyeIcon2.classList.toggle('bi-eye-slash', !isPasswordVisible);
}