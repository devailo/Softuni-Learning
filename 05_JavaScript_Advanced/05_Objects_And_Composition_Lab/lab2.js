let car = {
    model: 'bmw',
    year: 2010,
    facelift: true,
    honk: function () {
        console.log('beep beep!!!');
    },
    honk2: () => {
        console.log('Beep Beep 2!!!');
    },
    honk3(){
        console.log('Beep Beep 3!!!');
    }
}

console.log(car);
console.log(car.honk());
car.honk();
car.honk2();
car.honk3();