function calc(num) {
    num--;
    if (num === 0) {
        return;
    }
   
    console.log(num);
    return calc();
    
}

calc(10);