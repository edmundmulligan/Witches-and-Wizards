// This script loads the header and footer HTML files into the main HTML file.

document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('/resources/html/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    // Load footer
    fetch('/resources/html/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});
