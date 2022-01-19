function demo(fruit, weight, price) {

    let fruitType = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightInKilos = fruitWeight / 1000;
    let moneyNeeded = weightInKilos * pricePerKilo;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);

}