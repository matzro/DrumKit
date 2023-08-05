var crash = new Audio("./sounds/crash.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");

function detectKey() {
    document.addEventListener("keydown", function (event) {
        keyPressed = event.key;
        switch (keyPressed) {
            case "w":
                crash.play();
                break;
            case "a":
                tom4.play();
                break;
            case "s":
                tom1.play();
                break;
            case "d":
                snare.play();
                break;
            case "j":
                kick.play();
                break;
            case "k":
                tom2.play();
                break;
            case "l":
                tom3.play();
                break;
        }
    });
}

detectKey();

function drum(instrument) {

    console.log(detectKey());

    switch (instrument) {
        case "crash":
            crash.play();
            break;
        case "kick":
            kick.play();
            break;
        case "snare":
            snare.play();
            break;
        case "tom1":
            tom1.play();
            break;
        case "tom2":
            tom2.play();
            break;
        case "tom3":
            tom3.play();
            break;
        case "tom4":
            tom4.play();
            break;
    }
}


