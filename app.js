var left = document.getElementById("first")
left.style.height = 150 + "px"

var right = document.getElementById("second")
right.style.height = 150 + "px"

var count = 10;
var count2 = 10;
window.onkeydown = function () {
    console.log(event.keyCode);
    var character = document.getElementById("first_char")
    if (event.keyCode === 68) {
        left.src = "images/run.gif"
        count = count + 50;
        character.style.left = count + "px";
        setTimeout(function () {
            left.src = "images/stance.gif";
        }, 500);
    }
    console.log(event.keyCode);
    var character2 = document.getElementById("second_char")
    if (event.keyCode === 37) {
        right.src = "images2/run.gif"
        count2 = count2 + 50;
        character2.style.right = count2 + "px";
        setTimeout(function () {
            right.src = "images2/stand.gif";
        }, 500);
    }
}


