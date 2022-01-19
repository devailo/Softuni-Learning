function demo(num) {

    let square = '';

    for (let i = 0; i < num; i++) {
        square += '* ';
    }
    for (let i = 0; i < num; i++) {
        console.log(square);  
    }
}
demo(1);
demo(2);
demo(5);

