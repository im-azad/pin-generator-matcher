function getPin() {
	const pin = Math.round(Math.random() * 10000);
	const pinString = pin + '';
	if (pinString.length == 4) {
		// console.log(pin);
		return pin;
	} else {
		// console.log('Got 3 digit Pin and calling agin', pin);
		return getPin();
	}
}

function generatePin() {
	const displayPin = document.getElementById('display-pin');
	displayPin.value = getPin();
}
document.getElementById('key-pad').addEventListener('click', function (event) {
	const number = event.target.innerText;
	// console.log(number);
	const calcInput = document.getElementById('typed-numbers');
	if (isNaN(number)) {
		if (number == 'C') {
			calcInput.value = '';
		}
	} else {
		const previousNumber = calcInput.value;
		const newNumber = previousNumber + number;
		calcInput.value = newNumber;
	}
});
