const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
        clearResult();
    } else if (buttonValue === "=") {
        calculateResult();
    } else if (buttonValue === "del") {
        deleteInput();
    } else {
        appendValue(buttonValue);
    }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
  // eval is used to evaluate the input value on the calculator screen. It is a built in JS function that does the calculations
}

function deleteInput() {
    const inputValue = inputFieldEl.value;
    inputFieldEl.value = inputValue.substring(0, inputValue.length - 1);
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
  //    inputFieldEl.value = inputFieldEl.value + buttonValue;
}