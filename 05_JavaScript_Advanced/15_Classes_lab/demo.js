class Cat{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} says: meow meow!`);
    }
}

let firstCat = new Cat('axel');

console.log(firstCat);
console.log(firstCat.name);
firstCat.makeSound();

let catNames = ['popo', 'pepe', 'pipi'];

let cats = catNames.map(x => new Cat(x));

console.log(cats[0].name);
cats[0].makeSound();