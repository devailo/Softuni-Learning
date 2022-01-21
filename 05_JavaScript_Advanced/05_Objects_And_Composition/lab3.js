let car = {
    model: 'bmw',
    year: 2010,
    facelift: true,
    honk: function () {
        console.log(`${this.model}: beep beep!!!`);
    },
    packet: {basic: 'nothing', cosmo: 'navi', ultra: 'Panoramic roof'}
} 

console.log(`${car.model} from ${car.year} year has ${this.packet} : ${car.packet.cosmo}`);


