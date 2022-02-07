function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');

    option.text = itemText;
    option.value = itemValue;

    let menu = document.getElementById('menu');
    if (itemText !== '' && itemValue !== '') {
        menu.appendChild(option);
    }
 

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}