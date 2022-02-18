function solve(arr) {
    let result = [];

        for (const iterator of arr) {
            let [name,level,items] = iterator.split(' / ');
            level = Number(level);
            items = items ? items.split(', ') : [];

            result.push({name, level, items});
        }
        console.log(JSON.stringify(result));
}

solve(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
);