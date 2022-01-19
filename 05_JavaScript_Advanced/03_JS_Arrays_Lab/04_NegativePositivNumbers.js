function demo(input) {

    let newArr = [];

    while (input.length > 0) {
        if (input[0] < 0) {
            newArr.unshift(input.shift());
        } else {
            newArr.push(input.shift());
        }

    }
    console.log(newArr.join('\n'));
}

demo([7, -2, 8, 9]);
demo([3, -2, 0, -1]);
