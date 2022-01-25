function demo(input){

    let calorieObjects = {};

    for (let index = 0; index < input.length; index+=2) {
        let productName = input[index];
        let calories = Number(input[index+1]);
        
        calorieObjects[productName] = calories;
    }

    console.log(calorieObjects);
}
demo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//demo(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);