function demo(arr){

    let result = arr.sort((a,b) => a.localeCompare(b));

    let element = [];
    let char = '';
    for (let i = 0; i < result.length; i++) {
        element = result[i].split(' : ');
        if (result[i][0] !== char) {
            char = result[i][0];
            console.log(char);
            
        }
        console.log(`  ${element[0]}: ${element[1]}`);
    }
}

demo(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

// demo(['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']);