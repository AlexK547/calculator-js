const buttons = document.querySelectorAll('.buttons__item');
const buttonClear: any = document.querySelectorAll('.buttons__item_clear');
const result: any = document.querySelector('.result');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (button.textContent === "Clear") {
      result.textContent = "";
    }

    result.textContent += button.textContent;
  });
});

document.addEventListener('keypress', (event) => {
  switch (event.key) {
    case "0" : {
      console.log("Press - " + event.key);
      break;
    }
    case "1" : {
      console.log("Press - " + event.key);
      break;
    }
    case "2" : {
      console.log("Press - " + event.key);
      break;
    }
    case "3" : {
      console.log("Press - " + event.key);
      break;
    }
    case "4" : {
      console.log("Press - " + event.key);
      break;
    }
    case "5" : {
      console.log("Press - " + event.key);
      break;
    }
    case "6" : {
      console.log("Press - " + event.key);
      break;
    }
    case "7" : {
      console.log("Press - " + event.key);
      break;
    }
    case "8" : {
      console.log("Press - " + event.key);
      break;
    }
    case "9" : {
      console.log("Press - " + event.key);
      break;
    }

  }
});