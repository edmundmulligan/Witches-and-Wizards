function message(msg)
{
    alert(msg);
}
document.getElementById("exercise-07-button").addEventListener(
    "click", function () {
        message("Ouch! You clicked my button");
    }
);
document.getElementById("exercise-07-button-2").addEventListener(
    "click", function () {
        if (document.getElementById("exercise-07-output").innerHTML == "") {
            document.getElementById("exercise-07-output").innerHTML = "You clicked my button too!";
        } else {
            document.getElementById("exercise-07-output").innerHTML = "";
        }
    }
);
