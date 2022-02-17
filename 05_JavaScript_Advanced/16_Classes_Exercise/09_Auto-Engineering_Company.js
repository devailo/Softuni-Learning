function solve(input){
    let brands = {};

    for (const item of input) {
        let [brand,model,qty] = item.split(' | ');
        qty = Number(qty);
        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {};
            
        }
        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = 0;
        }
        brands[brand][model] += qty;
    }

    let result = '';

    for (const [brand,cars] of Object.entries(brands)) {
        result += `${brand}\n`;
        for (const [models,qty] of Object.entries(cars)) {
            result += `###${models} -> ${qty}\n`;
        }
    }

    console.log(result);
}


solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);