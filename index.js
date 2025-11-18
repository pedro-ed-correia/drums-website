var buttonsList = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", function () {
        playdrum(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

document.addEventListener("keydown", function (event) {
    playdrum(event.key);
    buttonAnimation(event.key);
});

function playdrum(key) { 
    switch (key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Unknown key:", key);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
