const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

let number = 0

const operators = {
    "+": (x, y) => (x + y),
    "-": (x, y) => (x - y),
    "*": (x, y) => (x * y),
    "/": (x, y) => (x / y), 
}

function setEventListener(...buttons){
    buttons.forEach(button =>{
        button.addEventListener('click',calculate)
    })
}

setEventListener(addButton, subtractButton, multiplyButton, divideButton)

// set the operator found in the button's value
function calculate(operatorButton) {
    const currentOperator = operatorButton.target.value;
    console.log(operators[currentOperator](20,20));
}