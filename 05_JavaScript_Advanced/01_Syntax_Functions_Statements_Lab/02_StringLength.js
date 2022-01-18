function demo(a,b,c){
    let first = a.length;
    let second = b.length;
    let third = c.length;
    let sumLength = first + second + third;
    let sumAvg = Math.floor(sumLength /3);

    console.log(sumLength);
    console.log(sumAvg);
}