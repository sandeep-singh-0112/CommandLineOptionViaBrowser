function addition(firstNumber, secondNumber) {
	let add = 0;
	return (firstNumber+secondNumber);
}
function subtraction(firstNumber, secondNumber) {
	return (firstNumber-secondNumber);
}
function multiplication(firstNumber, secondNumber) {
	return (firstNumber*secondNumber);
}
function division(firstNumber, secondNumber) {
	let div = (firstNumber/secondNumber);
	if (isNaN(div)) {
		console.log('division result is not integer number');
		process.exit(1);
	}
	return (firstNumber/secondNumber);
	
}

module.exports = {
	addition,
	subtraction,
	multiplication,
	division
};