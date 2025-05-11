// This script loads the README.md file into the main HTML file.

/*
 * Note: This script assumes that the README.md file is being served from a local server (e.g., using Python's http.server).
 * To run a local server, navigate to the directory containing the README file in your terminal and run:
 * python -m http.server 8000
 * Then, open http://localhost:8000 in your web browser.
 */

// Path to the readme file
const markdownFile = 'http://localhost:8000/README.md';

document.addEventListener('DOMContentLoaded', () => {
    fetch(markdownFile)
        .then(response => response.text())
        .then(markdownContent => {
            // Convert markdown to HTML
            const htmlContent = marked.parse(markdownContent);
            // Insert the HTML into the div
            document.getElementById('readme.md').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching README.md:', error);
            document.getElementById('readme.md').innerHTML = '<p>Please make sure the python local server is running</p>';
        });
});