const navbarToggle = document.querySelector('.navbar-toggle');

const navLinks = document.querySelector('.nav-links');

const toggleIcon = document.querySelector('.toggle-icon');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle between hamburger and cross icon
    if (toggleIcon.classList.contains('fa-bars')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
});