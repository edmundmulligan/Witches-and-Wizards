// This script loads the header and footer HTML files into the main HTML file.

document.addEventListener('DOMContentLoaded', () => {
    // workout if we are showing a mentor or student header
    const currentUrl = window.location.href;
    const isMentor = currentUrl.includes('/mentors') || currentUrl.includes('/mentor');
    const headerFile = isMentor ? '/resources/html/headerMentor.html' : '/resources/html/headerStudent.html';
    console.log(`Loading header from: ${headerFile}`);

    // Load header
    fetch(headerFile)
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    // Load footer
    fetch('/resources/html/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});
