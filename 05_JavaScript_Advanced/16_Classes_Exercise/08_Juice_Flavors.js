function solve(input) {
    let juices = {};
    let juicesCounter = {};

    for (const item of input) {
        let [name, qty] = item.split(' => ');
        qty = Number(qty);
        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }
        juices[name] += qty;

        while (juices[name] > 999) {

            if (!juicesCounter.hasOwnProperty(name)) {
                juicesCounter[name] = 0;
            }
            juicesCounter[name]++;
            juices[name] -= 1000;
        }
    }
    for (const item in juicesCounter) {
        console.log(`${item} => ${juicesCounter[item]}`);
    }

}





solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)