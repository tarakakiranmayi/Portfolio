document.getElementById('toggle-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const body = document.body; // Reference to the body element

    navLinks.classList.toggle('active'); // Toggle the nav-links visibility
    body.classList.toggle('nav-active'); // Toggle the blur effect on body
});