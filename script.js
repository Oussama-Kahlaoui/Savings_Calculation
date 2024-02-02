document.getElementById('calculate').addEventListener('click', function() {
	let age = parseInt(document.getElementById('age').value);
	let salary = parseFloat(document.getElementById('salary').value);
	let savingsPercentage = parseInt(document.getElementById('savingsPercentage').value);
	let raisePercentage = parseInt(document.getElementById('raisePercentage').value);
	let years = parseInt(document.getElementById('years').value);

	let yearlySavings = salary * (savingsPercentage / 100);
	let totalSavings = 0;

	for (let i = 0; i < years; i++) {
		totalSavings += yearlySavings;
		salary += salary * (raisePercentage / 100);
	}

	document.getElementById('result').innerText = 'Total Savings: MAD' + totalSavings.toFixed(1);
});