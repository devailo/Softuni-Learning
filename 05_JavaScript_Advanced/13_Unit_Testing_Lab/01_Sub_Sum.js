function demo(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length) {
        end = arr.length = 1;
    }
    let numbers = arr.slice(start, end - 1)
    let sum = numbers.reduce((a, x) => a + Number(x), 0);
    console.log(sum);
    return sum;
}

demo([10, 20, 30, 40, 50, 60], 3, 300);
demo([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
demo([10, 'twenty', 30, 40], 0, 2);