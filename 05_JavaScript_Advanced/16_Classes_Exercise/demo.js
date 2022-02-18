
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


