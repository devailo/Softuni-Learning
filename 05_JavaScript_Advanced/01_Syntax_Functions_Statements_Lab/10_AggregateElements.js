function demo(arr) {

    let sum = 0;
    let sum1 = 0;
    let concat = arr.join('');

    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
       sum1+= 1/arr[i];
    }

    console.log(sum);
    console.log(sum1);
    console.log(concat);

}
demo([1, 2, 3]);
demo([2, 4, 8, 16]);
