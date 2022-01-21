function demo(name, age){

    let person = {name,
        age,
        move:function(){
            return this.age;
        }
    };
    console.log(person);
    console.log(typeof person);
    console.log(person.move());

}
demo('pesho',45)