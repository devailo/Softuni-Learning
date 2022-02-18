function Person(name,age,height){
    this.name = name;
    this.age = age;
    this. height = height;
}

Person.prototype.greet = function() {
    console.log(`hi, my name is what? my name is who? my name is fiki fiki ${this.name}`);
}
let person = new Person('gogo', 22, 190);

console.log(person);
person.greet();