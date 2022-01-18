function demo(arr, rotations){
    let numToMove = '';

    for (let i = 0; i < rotations; i++) {
        numToMove = arr.pop();
        arr.unshift(numToMove);
        
    }
    console.log(arr.join(' '));
}
demo([1,2,3,4], 2);