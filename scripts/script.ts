export {}

const buttons = document.querySelectorAll('.buttons__item');
const buttonClear = document.querySelectorAll('.buttons__item_clear');
const result: any = document.querySelector('.result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let btnClick: string | null = button.textContent;

    switch (btnClick) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      {
        result.textContent += btnClick;
        break;
      }
      case "Clear": {
        result.textContent = "";
        console.log("Clear");
        break;
      }
      case "=": {
        result.textContent = eval(result.textContent);
      }
    }
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