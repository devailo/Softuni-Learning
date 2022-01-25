function solve() {

	let input = document.getElementById('text').value;
	let currentCase = document.getElementById('naming-convention').value;

	input = input.toLowerCase().split(' ');

	let result = '';
	if (currentCase === 'Camel Case') {
		result += input[0];
		for (let i = 1; i < input.length; i++) {
			input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
			result += input[i];
		}
		
	} else if (currentCase === 'Pascal Case') {
		
		for (let i = 0; i < input.length; i++) {
			input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
			result += input[i];
		}
	} else {
		result = 'Error!';
	}

	let resultEl = document.getElementById('result');
	resultEl.textContent = result;
	
}