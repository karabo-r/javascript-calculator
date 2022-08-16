const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const calculateButton = document.getElementById("calculateButton");

let numberStore = [];

function setOperatorEventListener(...buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", addOperatorToNumber);
	});
}

setOperatorEventListener(
	addButton,
	subtractButton,
	multiplyButton,
	divideButton,
);

calculateButton.addEventListener("click", calculate);

number20.addEventListener("click", (e) => {
	numberStore.push(e.target.value);
	console.log(number);
});

// push operator found in the button's value
function addOperatorToNumber(operatorButton) {
	if (numberStore[0]) {
		numberStore.push(operatorButton.target.value);
		console.log(numberStore);
	}
}
function calculate() {
	const numberString = numberStore.join(" ");
	const finalAnswers = eval(numberString);
	console.log(finalAnswers);
}
