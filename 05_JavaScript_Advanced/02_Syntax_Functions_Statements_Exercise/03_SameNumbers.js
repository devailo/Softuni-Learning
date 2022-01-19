function demo(num1) {

    let inputNumber = num1.toString();
    let isSame = true;
    let sumOfDigits = 0;
    let firstDigit = inputNumber[0];
    const inputLength = inputNumber.length;

    for (let index = 0; index < inputLength; index++) {
        sumOfDigits +=Number(inputNumber[index])
        
        if (firstDigit !== inputNumber[index]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits);
}