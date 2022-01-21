function solve(arr) {
    let towns = {};

    for (const info of arr) {
        let [town, populationText] = info.split(' <-> ');
        let population = Number(populationText);
        
        if (!towns[town]) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);

    }
}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);