(function () {
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
        case "-":
        {
          if (result.textContent === "0") {
            result.textContent = "";
          }
          result.textContent += btnClick;
          break;
        }
        case ",": {
          if (result.textContent === "0") {
            result.textContent = "";
          }
          result.textContent += ".";
          break;
        }
        case "Clear": {
          result.textContent = "0";
          break;
        }
        case "=": {
          result.textContent = eval(result.textContent);
          break;
        }
      }
      if (button.classList.contains("buttons__item_divide")) {
        result.textContent += "/";
      }
      if (button.classList.contains("buttons__item_multiply")) {
        result.textContent += "*";
      }
      if (button.classList.contains("buttons__item_root")) {
        let num = eval(result.textContent);
        num = Math.sqrt(num);
        result.textContent = "" + num;
      }
      if (button.classList.contains("buttons__item_square")) {
        let num = eval(result.textContent);
        num = Math.pow(num, 2);
        result.textContent = "" + num;
      }
      if (button.classList.contains("buttons__item_reciprocal")) {
        let num = eval(result.textContent);
        num = 1 / num;
        result.textContent = "" + num;
      }
      if (button.classList.contains("buttons__item_plus-minus")) {
        if (result.textContent[0] === "-") {
          result.textContent = result.textContent.slice(1);
        } else {
          result.textContent = "-" + result.textContent;
        }
      }
    });
  });

  document.addEventListener('keypress', (event) => {
    switch (event.key) {
      case "0" :
      case "1" :
      case "2" :
      case "3" :
      case "4" :
      case "5" :
      case "6" :
      case "7" :
      case "8" :
      case "9" :
      case "+" :
      case "-" :
      case "/" :
      case "*" :
      case "." :
      {
        if (result.textContent === "0") {
          result.textContent = "";
        }
        result.textContent += event.key;
        break;
      }
      case "Enter": {
        result.textContent = eval(result.textContent);
        break;
      }
    }
  });

})();