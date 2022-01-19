function demo(input) {

    let newArr = [];
    let halfPoint = Math.ceil(input.length / 2);
    input.sort((a,b) => a - b);
    newArr = input.slice(-halfPoint);

   return newArr;
}

demo([4, 7, 2, 5]);
demo([3, 19, 14, 7, 2, 19, 6]);