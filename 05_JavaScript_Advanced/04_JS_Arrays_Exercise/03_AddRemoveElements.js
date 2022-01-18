function demo(commands){

    let resultArr = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        if (currentCommand === 'add') {
            resultArr.push(i+1);
        }else if (currentCommand === 'remove') {
            resultArr.pop();
        }
    }
    if (resultArr.length === 0) {
        console.log('Empty');
    }else{
        console.log(resultArr.join('\n'));
    }
}
demo(['add', 'add', 'add', 'add']);