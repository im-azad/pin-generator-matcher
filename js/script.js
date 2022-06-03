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
