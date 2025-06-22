// This script adds line numbers to code snippets in a webpage.
// It takes the ID of the code snippet and the ID of the line numbers container.
// It counts the number of lines in the code snippet and generates a list of line numbers.
// The line numbers are displayed in a separate container next to the code snippet.

function numberLines(codeSnippetId, lineNumsId) {
    const section = document.getElementById(codeSnippetId);
    const lineNums = document.getElementById(lineNumsId);

    const numLines = section ? section.innerText.split('\n').length : 0;
    let numList = "<br>";
    for (let i = 1; i < numLines -1 ; i++) {
        numList +=  i + "<br>";
    }

    if (numLines > 0) {
        lineNums.innerHTML = numList;
    }
}

// now call the function for each code snippet
document.addEventListener('DOMContentLoaded', function() {
    numberLines("html-code-id", "html-numbers-id");
    numberLines("css-code-id", "css-numbers-id");
    numberLines("js-code-id", "js-numbers-id");
});