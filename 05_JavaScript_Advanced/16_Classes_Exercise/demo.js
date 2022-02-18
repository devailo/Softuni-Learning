
//creating 3 object constructors and assigning values to it
var name = 'paspartu';
var salary = 20;
var position = 'pogrom';
var obj3 = {name, salary, position};

//creating a target object and copying values and properties to it using object.assign() method
var new_obj = Object.assign({}, name, salary, position);
var new_obj2 = Object.assign({}, {name, salary, position});

// Displaying the target object
console.log(new_obj);
console.log(new_obj2);
console.log(obj3);

let arr = [1,2,3,4];

for (const iterator of Object.entries(obj3)) {
    console.log(iterator);
}

for (const key in obj3) {
   console.log(obj3[key]);
}

for (const iterator of arr) {
    console.log(iterator);
}