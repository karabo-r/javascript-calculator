const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const calculateButton = document.getElementById("calculateButton");
const numberCollection = document.getElementById("numberCollection").childNodes;

let numberStore = [];

function setOperatorEventListener(...buttons) {
	buttons.forEach((button) => {
		button.addEventListener("click", pushOperator);
	});
}

function setNumberEventListener(numbers) {
	numbers.forEach((number) => {
		number.addEventListener("click", (e) => {
			e.preventDefault();
			pushNumber(e);
		});
	});
}

calculateButton.addEventListener("click", calculate);
setNumberEventListener(numberCollection);
setOperatorEventListener(
	addButton,
	subtractButton,
	multiplyButton,
	divideButton,
);


// push operator found in the button's value
function pushOperator(operatorButton) {
	if (numberStore[0]) {
		numberStore.push(operatorButton.target.value);
		console.log(numberStore);
	}
}

function pushNumber(number) {
	numberStore.push(number.target.value);
	console.log(numberStore);
}

function calculate() {
	const numberString = numberStore.join(" ");
	const finalAnswers = eval(numberString);
	numberStore = [];
	console.log(finalAnswers);
}
