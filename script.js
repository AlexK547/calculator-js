var buttons = document.querySelectorAll('.buttons__item');
var buttonClear = document.querySelectorAll('.buttons__item_clear');
var result = document.querySelector('.result');
var body = document.querySelector('body');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.textContent === "Clear") {
            result.textContent = "";
        }
        result.textContent += button.textContent;
    });
});
document.addEventListener('keypress', function (event) {
    switch (event.key) {
        case "0": {
            console.log("Press - " + event.key);
            break;
        }
        case "1": {
            console.log("Press - " + event.key);
            break;
        }
        case "2": {
            console.log("Press - " + event.key);
            break;
        }
        case "3": {
            console.log("Press - " + event.key);
            break;
        }
        case "4": {
            console.log("Press - " + event.key);
            break;
        }
        case "5": {
            console.log("Press - " + event.key);
            break;
        }
        case "6": {
            console.log("Press - " + event.key);
            break;
        }
        case "7": {
            console.log("Press - " + event.key);
            break;
        }
        case "8": {
            console.log("Press - " + event.key);
            break;
        }
        case "9": {
            console.log("Press - " + event.key);
            break;
        }
    }
});
