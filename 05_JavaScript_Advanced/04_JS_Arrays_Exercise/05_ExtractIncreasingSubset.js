function demo(input){

    let max = input[0];
    let result = input.reduce((acc,curr) => {
        if (curr >= max) {
            max = curr;
            acc.push(curr);
        }
        return acc;
    },[]);
    
    return result;
}
demo([1, 3, 8, 4, 10, 12, 3, 2, 24]);