let person = {
    name: 'pesho',
    age: 22,
    height: 190
};

let personProto = Object.getPrototypeOf(person);
console.log(personProto);