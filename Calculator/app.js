document.addEventListener("DOMContentLoaded", function () {
  const inputBtns = document.querySelectorAll("button");
  const display = document.querySelector(".calculator-screen");

  let currentInput = "";
  let previousInput = "";
  let operation = null;

  inputBtns.forEach(function (inputBtn) {
    inputBtn.addEventListener("click", function () {
      const value = inputBtn.value;

      if (value === "C") {
        clear();
      } else if (value === "=") {
        evaluate();
      } else if (["+", "-", "*", "/"].includes(value)) {
        setOperation(value);
      } else {
        appendNumber(value);
      }
    });
  });

  function clear() {
    currentInput = "";
    previousInput = "";
    operation = null;
    display.value = "";
  }

  function evaluate() {
    if (operation) {
      currentInput = operate(previousInput, currentInput, operation);
      display.value = currentInput;
      previousInput = "";
      operation = null;
    }
  }

  function setOperation(operator) {
    if (currentInput !== "") {
      if (previousInput !== "") {
        previousInput = operate(previousInput, currentInput, operation);
      } else {
        previousInput = currentInput;
      }
      currentInput = "";
      operation = operator;
    }
  }

  function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
  }

  function operate(firstNum, secondNum, operator) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operator) {
      case "+":
        return (firstNum + secondNum).toString();
      case "-":
        return (firstNum - secondNum).toString();
      case "*":
        return (firstNum * secondNum).toString();
      case "/":
        return (firstNum / secondNum).toString();
      default:
        return secondNum;
    }
  }
});
