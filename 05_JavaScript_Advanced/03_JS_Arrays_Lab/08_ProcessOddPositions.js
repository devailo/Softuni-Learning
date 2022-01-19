function demo(input) {

    let newArr = input.filter((a, i) => i % 2 !== 0).map(x => x * 2).reverse().join(' ');

    console.log(newArr);
}

demo([10, 15, 20, 25]);
demo([3, 0, 10, 4, 7, 3]);