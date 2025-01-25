const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Open the navigation menu when the hamburger menu is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
// Close the navigation menu when the close button is clicked
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

