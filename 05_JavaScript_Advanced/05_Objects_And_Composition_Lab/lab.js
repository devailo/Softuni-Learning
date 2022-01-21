let phoneBook = {
    'Ivan Petrov': 21321432,
    'Mumiar Petkov': 3123123,
    'Georg kabakov': 87687686,
}

console.log(phoneBook["Ivan Petrov"]);
phoneBook["Ivan Petrov"] = 1001;
console.log(phoneBook["Ivan Petrov"]);

for (key in phoneBook) {
    console.log(`${key} - ${phoneBook[key]}`);
}

let names = Object.keys(phoneBook);
let phones = Object.values(phoneBook);
console.log(names);
console.log(phones);

Object.keys(phoneBook).forEach(x=> {
    console.log(`${x} - ${phoneBook[x]}`);
})

let entries = Object.entries(phoneBook);
console.log(entries);
for (const kvp of entries) {
    console.log(kvp);
}

