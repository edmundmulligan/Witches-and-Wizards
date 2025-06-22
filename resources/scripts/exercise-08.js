// define a function to display a message in a pop-up window
function message(msg) {
    alert(msg + "\n" + "message timed at " + new Date().toLocaleTimeString());
}

// add an event listener to the first button
// when the button is clicked, call the message function
document.getElementById("exercise-08-button-1").addEventListener("click", function() {
    message("Ouch! You clicked my button");
});

// add an event listener to the second button
// when the button is clicked, toggle the message in the output div
document.getElementById("exercise-08-button-2").addEventListener("click", function() {
    // use const to define variables that won't change in this function
    const outputDiv = document.getElementById("exercise-08-output");
    const timestamp = new Date().toLocaleTimeString();

    // check if the output div already contains the message
    // if it does, clear the output div
    if (outputDiv.innerHTML.includes ("You clicked my button too!")) {
        outputDiv.innerHTML = "";
    } else {
        outputDiv.innerHTML = "You clicked my button too!<br>Message timed at " + timestamp;
    }
});

// there is no event listener for the third button, so it does nothing when you click it
/*
 * Note: The third button is intentionally left without an event listener.
 * This is to demonstrate that without an event listener, the button does not respond to clicks.
 * You can click it as many times as you like, but it will not do anything.
 * 
 * We could have left these comments out but it is good practice to explain why something is done in code.
 * This shows someone that the code was deliberately left out rather than just being missed out by mistake.
 */

// add an event listener to the fourth button
// when the button is clicked, change the image in the button and update the output div
document.getElementById("exercise-08-button-4").addEventListener("click", function() {
    // use const to define variables that won't change in this function
    const img = this.querySelector("img");
    const outputDiv = document.getElementById("exercise-08-output");

    if (img.src.includes("witch")) {
        this.innerHTML = '<img src="/resources/images/young-wizard.jpg" title="Click on me to turn me into a witch" style="width:50px;height:auto">';
        outputDiv.innerHTML = "Now I am a Wizard!";
    } else {
        this.innerHTML = '<img src="/resources/images/young-witch.jpg" title="Click on me to turn me into a wizard" style="width:50px;height:auto">';
        outputDiv.innerHTML = "Now I am a Witch!";
     }
});
