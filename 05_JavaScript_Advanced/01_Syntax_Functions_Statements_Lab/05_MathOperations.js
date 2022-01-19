function demo(num1, num2, operator){

    let result;
    switch (operator) {
        case '+': result = num1+num2; break;
        case '-': result = num1-num2; break;
        case '/': result = num1/num2; break;
        case '*': result = num1*num2; break;
        case '%': result = num1%num2; break;
        case '**': result = num1**num2; break;

        default:
            break;
    }
    console.log(result);
}
demo(5, 6, '+');
demo(3, 5.5, '*');