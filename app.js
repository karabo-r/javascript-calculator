const display = document.getElementById("display");
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
		const numberString = numberStore.join(" ");
		updateDisplay(numberString);
	}
}

function pushNumber(number) {
	numberStore.push(Number(number.target.value));
	console.log(numberStore);
	checkPreviousNumberAndReplace();
}

function calculate() {
	if (numberStore) {
		const numberString = numberStore.join(" ");
		const finalAnswers = eval(numberString);
		numberStore = [finalAnswers];
		updateDisplay(finalAnswers);
	}
}

function checkPreviousNumberAndReplace() {
	const lastNumberIndex = numberStore.length - 1;
	const previousNumberIndex = numberStore.length - 2;
	if (
		typeof numberStore[lastNumberIndex] === "number" &&
		typeof numberStore[previousNumberIndex] === "number"
	) {
		const newNumber = Number(
			numberStore[previousNumberIndex].toString() +
				numberStore[lastNumberIndex].toString(),
		);
		numberStore.splice(previousNumberIndex, 2, newNumber);
	}
	const numberString = numberStore.join(" ");
	updateDisplay(numberString);
}

function updateDisplay(data) {
	display.value = data;
}
