function demo(obj) {

    let resultCar = {};
    let engine = {};
    let carriage = {};

    resultCar.model = obj.model;

    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (obj.power <= 200) {
        engine.power = 200;
        engine.volume = 3500
    }

    resultCar.engine = engine;

    carriage.type = obj.carriage;
    carriage.color = obj.color;

    resultCar.carriage = carriage;

    let wheelsize = obj.wheelsize;

    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    resultCar.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return resultCar;
}

demo({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

demo({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});