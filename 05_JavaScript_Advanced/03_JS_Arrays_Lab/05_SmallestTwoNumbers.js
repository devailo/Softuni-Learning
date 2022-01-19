function demo(input) {

    let newArr = [];

    input.sort((a,b) => a - b);
    newArr = input.slice(0,2);

    console.log(newArr.join(' '));
}

demo([30, 15, 50, 5]);
demo([3, 0, 10, 4, 7, 3]);