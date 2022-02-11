function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName} my name is ${this.name}`);
}

// introduce('kurnik', 'kurov');

// let obj ={
//     name: 'pesho',
//     introduce
// }


// let person = { 
//     name: 'sasho'
// }

// introduce.call(person, 'pumiar', 'mumiar');
// introduce.apply(person, ['koko', 'loko']);

let superHuman = {
    name: 'superman'
}

let superIntroduction = introduce.bind(superHuman, 'lex', 'kurov');
superIntroduction();