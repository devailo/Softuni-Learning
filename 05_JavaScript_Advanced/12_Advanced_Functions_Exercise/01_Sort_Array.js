function solve(arr, cmd){
    if (cmd === 'asc') {
        arr.sort((a,b) => a - b);
    }else if(cmd === 'desc'){
        arr.sort((a,b) => b-a);
    }
    //console.log(arr);
    return arr;
}



solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');
