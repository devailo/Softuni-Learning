function solve(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let [Town, Latitude, Longitude] = arr[i].split("|").filter((x) => x);
        Latitude = Number(Latitude);
        Longitude = Number(Longitude);
        result.push(Object.assign({},
            {
                Town: Town.trim(),
                Latitude: Number(Latitude.toFixed(2)),
                Longitude: Number(Longitude.toFixed(2)),
            }
        )
        );
    }
    console.log(JSON.stringify(result));
}

solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']

);