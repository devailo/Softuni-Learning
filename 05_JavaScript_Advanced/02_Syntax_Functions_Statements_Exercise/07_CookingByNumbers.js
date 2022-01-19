function demo(num, op1, op2, op3, op4, op5) {

    let inputNum = Number(num);
    let arrOfCommands = [op1, op2, op3, op4, op5];

    let chop = function () {
        return inputNum / 2;
    }
    let dice = function () {
        return Math.sqrt(inputNum);
    }
    let spice = function () {
        return inputNum + 1;
    }
    let bake = function () {
        return inputNum * 3;
    }
    let fillet = function () {
        return inputNum *= 0.8;
    }

    for (let index = 0; index < arrOfCommands.length; index++) {
        let currentCommand = arrOfCommands[index];
        switch (currentCommand) {
            case 'chop': inputNum = chop(inputNum);
            break;
            case 'dice': inputNum = dice(inputNum);
            break;
            case 'spice': inputNum = spice(inputNum);
            break;
            case 'bake': inputNum = bake(inputNum);
            break;
            case 'fillet': inputNum = fillet(inputNum);
            break;
        }
        console.log(inputNum);
    }
}