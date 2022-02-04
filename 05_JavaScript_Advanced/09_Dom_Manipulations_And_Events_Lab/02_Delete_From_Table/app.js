function deleteByEmail() {
    let emailInput = document.querySelector('input[name="email"]');
    let emailList = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailList);
    let targetElement = emailElements.find(x => x.textContent == emailInput.value);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    }else{
        resultElement.textContent = 'Not found.'
    }

}