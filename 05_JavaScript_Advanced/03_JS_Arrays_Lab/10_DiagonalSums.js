function demo(array) {
    let mainDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < array.length; row++) {
        mainDiagonal += array[row][row];
    }

    for (let row = 0; row < array.length; row++) {

        secondDiagonal += array[row][array.length - 1 - row];

    }
    console.log(mainDiagonal + ' ' + secondDiagonal);
}
demo([[20, 40],
[10, 60]]);
demo([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);