const display = document.querySelector(".calculator_display");
const clear = document.querySelector(".C");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const comma = document.querySelector(".comma");
const equal = document.querySelector(".equal");

let lastNumber = 0;
let currentNumber = 0;

let currentString = "";
let operator = "";

function showNumbersOnDisplay() {
  const numbers = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    comma,
  ];

  numbers.forEach((number) => {
    number.addEventListener("click", handleNumberClick);
  });

  function handleNumberClick({ target }) {
    if (target.innerText === "," && !currentString.includes(".")) {
      currentString = currentString + ".";
    } else if (target.innerText !== ",") {
      currentString = currentString + target.innerText;
    }
    display.value = currentString;
  }
}

function operationSwitch() {
  let operations = [divide, multiply, subtract, add];

  operations.forEach((operation) => {
    operation.addEventListener("click", handleOperationClick);
  });

  function resetStringAndStore() {
    lastNumber = +currentString;
    currentString = "";
    display.value = lastNumber;
  }

  function handleOperationClick(event) {
    if (event.target.innerText === "/") {
      operator = "dividir";
      resetStringAndStore();
    } else if (event.target.innerText === "*") {
      operator = "multiplicar";
      resetStringAndStore();
    } else if (event.target.innerText === "-") {
      operator = "diminuir";
      resetStringAndStore();
    } else if (event.target.innerText === "+") {
      operator = "somar";
      resetStringAndStore();
    }
  }
}

function activeEqual() {
  equal.addEventListener("click", () => {
    let result = 0;
    currentNumber = +currentString;

    if (operator === "dividir") {
      result = lastNumber / currentNumber;
      displayResult(result);
    } else if (operator === "multiplicar") {
      result = lastNumber * currentNumber;
      displayResult(result);
    } else if (operator === "diminuir") {
      result = lastNumber - currentNumber;
      displayResult(result);
    } else if (operator === "somar") {
      result = lastNumber + currentNumber;
      displayResult(result);
    }

    function displayResult(result) {
      currentString = result;
      display.value = currentString;
    }
  });
}

function clearDisplay() {
  clear.addEventListener("click", () => {
    currentString = "";
    currentNumber = 0;
    lastNumber = 0;
    display.value = 0;
  });
}

showNumbersOnDisplay();
operationSwitch();
activeEqual();
clearDisplay();
