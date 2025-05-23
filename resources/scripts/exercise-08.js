// Function to display a message in an alert box
function message(msg)
{
    const now = new Date();
    alert(msg);
}

document.getElementById("exercise-08-button-1").addEventListener(
    "click", function () {
        message("Ouch! You clicked my button");
    }
);

document.getElementById("exercise-08-button-2").addEventListener(
    "click", function () {
        if (document.getElementById("exercise-08-output").innerHTML == "") {
            document.getElementById("exercise-08-output").innerHTML = "You clicked my button too!";
        } else {
            document.getElementById("exercise-08-output").innerHTML = "";
        }
    }
);
