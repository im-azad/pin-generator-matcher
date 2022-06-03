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
function verifyPin() {
	const pin = document.getElementById('display-pin').value;
	const typedNumbers = document.getElementById('typed-numbers').value;
	const successMessage = document.getElementById('notify-success');
	const failError = document.getElementById('notify-fail');

	if (pin == typedNumbers) {
		successMessage.style.display = 'block';
		failError.style.display = 'none';
	} else {
		successMessage.style.display = 'none';
		failError.style.display = 'block';
	}
}
