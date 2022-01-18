function demo(arr, num){

    let resultArr = [];
    for (let index = 0; index < arr.length; index+=num) {
        resultArr.push(arr[index]);
    }
    return resultArr;
}
demo(['5','20','31','4','20'] , 2);