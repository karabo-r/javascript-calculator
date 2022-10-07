const display = document.getElementById("display");
const operatorCollection =document.getElementById("operatorCollection").childNodes;
const numberCollection = document.getElementById("numberCollection").childNodes;
const resetButton = document.getElementById("resetButton");

let numberStore = [0];
updateDisplay(numberStore);

function setOperatorEventListener(buttons) {
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

resetButton.addEventListener("click", reset);
calculateButton.addEventListener("click", calculate);
setNumberEventListener(numberCollection);
setOperatorEventListener(operatorCollection);

// push operator found in the button's value
function pushOperator(operatorButton) {
	if (numberStore[0]) {
		if (operatorButton.target.value !== "") {
			numberStore.push(operatorButton.target.value);
			const numberString = numberStore.join(" ");
			updateDisplay(numberString);
		}
	}
}

function pushNumber(number) {
	numberStore.push(Number(number.target.value));
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

function reset() {
	numberStore = [0];
	updateDisplay(numberStore);
}

// replace if previous number is also a number, example [1, 2]
// the numbers are then combined as strings 1 + 2 = 12
// then replace index 0 and 1 with new value ([1, 2] => [12])
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
