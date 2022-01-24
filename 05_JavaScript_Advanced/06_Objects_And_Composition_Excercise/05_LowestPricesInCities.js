function demo(object) {
    let products = [];
    for (const entry of object) {

        let [town, productName, price] = entry.split(' | ');

        if(!products.some(x => x.productName === productName)){
            products.push(Object.assign({}, {town, productName, price: Number(price)}));
        }
        let objToCompare = products.find(x => x.productName === productName);
        if(price < objToCompare.price){
            objToCompare['town'] = town;
            objToCompare['price'] = price;
        }   
    }
    for (const product of products) {
        console.log(`${product.productName} -> ${product.price} (${product.town})`);
    }

}

demo(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);