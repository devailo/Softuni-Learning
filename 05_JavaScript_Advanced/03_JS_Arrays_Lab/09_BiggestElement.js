function demo(array) {

    let max = array[0][0];
    for (let row of array) {
        if (Math.max(...row) > max) {
            max = Math.max(...row);
        }
    }
    return max;
}
demo([[20, 50, 10],
[8, 33, 145]]
);