function demo(n, k) {

    let arr = [1];
    let sum = 0;
    for (let i = 1; i < n; i++) {

        let temp = arr.slice(-k);
        let sum = 0;
        for (let num of temp) {
            sum += num;
        }
        arr.push(sum);
    }

    return arr;
}

demo(6, 3);
demo(8, 2);