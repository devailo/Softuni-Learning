function calc() {
    
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');

    let firstNumber = Number(firstNum.value);
    let secondNumber = Number(secondNum.value);

    let sum = firstNumber + secondNumber;
    let resultEl = document.getElementById('sum');
    resultEl.value = sum;
}
