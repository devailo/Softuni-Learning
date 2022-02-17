class Cat {
    isHungry = true;

    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} says: meow meow!`);
    }

    static vetCheck(cat){
        if (cat.isHungry) {
            console.log(`${cat.name} should be fed!`);
        }else{
            console.log('cat is fine');
        }
    }
}

let cat = new Cat('axel');
cat.makeSound();
Cat.vetCheck(cat);

