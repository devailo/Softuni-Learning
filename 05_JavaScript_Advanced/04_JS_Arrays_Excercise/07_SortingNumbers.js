function demo(arr){

    let resultArr =[];
    let sortedArr = arr.sort((a,b) => a-b);

    while(sortedArr.length !== 0) {
        resultArr.push(sortedArr.shift());
       resultArr.push(sortedArr.pop());
    }
    return resultArr;
}
demo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);