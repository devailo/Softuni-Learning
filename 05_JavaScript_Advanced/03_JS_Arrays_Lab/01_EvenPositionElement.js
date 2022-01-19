function demo(input) {
    let result = '';
    for (let index = 0; index < input.length; index++) {
        if (index % 2 == 0) {
            result += input[index] + ' ';
        }

    }
    console.log(result);
}

demo(['20', '30', '40', '50', '60']);