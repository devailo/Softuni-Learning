function demo(arr, target1, target2) {

    let newArr = [];
    let index1 = arr.indexOf(target1);
    let index2 = arr.indexOf(target2) + 1;

    newArr = arr.slice(index1, index2);
    
    console.log(newArr);
    return newArr;
}

demo(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
demo(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);