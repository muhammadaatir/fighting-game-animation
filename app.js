var left = document.getElementById("first")
left.style.height = 150 + "px"

var right = document.getElementById("second")
right.style.height = 150 + "px"

var count = 20;
var count2 = 20;
var count3 = 10;
window.onkeydown = function () {
    console.log(event.keyCode);
    var character = document.getElementById("first_char")

    if (event.keyCode === 68) {
        left.src = "images/run.gif"
        count = count + 50;
        character.style.left = count + "px";
        setTimeout(function () {
            left.src = "images/stance.gif";
        }, 300);
    }
    else if (event.keyCode === 65) {
        left.src = "images/walkb.gif"
        count = count - 50;
        character.style.left = count + "px";
        setTimeout(function () {
            left.src = "images/stance.gif";
        }, 300);
    }
    else if (event.keyCode === 87) {
        left.src = "images/jump.gif"
        left.style.height = 300 + "px"
        setTimeout(function () {
            left.src = "images/stance.gif";
            left.style.height = 150 + "px"
        }, 1200);
    }
    else if (event.keyCode === 70) {
        left.src = "images/fireball.gif"
        left.style.height = 170 + "px"
        setTimeout(function () {
            left.src = "images/stance.gif";
            left.style.height = 150 + "px"
        }, 1000);
    }

    console.log(event.keyCode);
    var character2 = document.getElementById("second_char")
    if (event.keyCode === 37) {
        right.src = "images2/run.gif"
        count2 = count2 + 50;
        character2.style.right = count2 + "px";
        setTimeout(function () {
            right.src = "images2/stand.gif";
        }, 300);
    }
    else if (event.keyCode === 39) {
        right.src = "images2/backwalk.gif"
        count2 = count2 - 50;
        character2.style.right = count2 + "px";
        setTimeout(function () {
            right.src = "images2/stand.gif";
        }, 300);
    }
    else if (event.keyCode === 38) {
        right.src = "images2/jump2.gif"
        right.style.height = 300 + "px"
        setTimeout(function () {
            right.src = "images2/stand.gif";
            right.style.height = 150 + "px"
        }, 1000);
    }
    else if (event.keyCode === 32) {
        if (count2 > 100) {
            right.src = "images2/fire.gif"
            right.style.height = 170 + "px"
            setTimeout(function () {
                right.src = "images2/stand.gif";
                right.style.height = 150 + "px"
            }, 1400);
        }
    }
}


