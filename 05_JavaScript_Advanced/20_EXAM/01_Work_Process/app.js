function solve() {
    const fnameElement = document.getElementById('fname');
    const lnameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');

    let sumElement = document.getElementById('sum');

    hireBtnElement = document.getElementById('add-worker');

    hireBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (!fnameElement.value || !lnameElement.value || !emailElement
            || !birthElement.value || !positionElement.value || !salaryElement.value) {
            return;
        }
        let salary = Number(salaryElement.value);

        const tbodyElement = document.getElementById('tbody');

        let trElement = document.createElement('tr');

        let tdFnameElement = document.createElement('td');
        tdFnameElement.textContent = fnameElement.value;
        fnameElement.value = '';

        let tdLnameElement = document.createElement('td');
        tdLnameElement.textContent = lnameElement.value;
        lnameElement.value = '';

        let tdEmailElement = document.createElement('td');
        tdEmailElement.textContent = emailElement.value;
        emailElement.value = '';

        let tdBirthElement = document.createElement('td');
        tdBirthElement.textContent = birthElement.value;
        birthElement.value = '';

        let tdPositionElement = document.createElement('td');
        tdPositionElement.textContent = positionElement.value;
        positionElement.value = '';

        let tdSalaryElement = document.createElement('td');
        tdSalaryElement.textContent = salaryElement.value;
        salaryElement.value = '';

        let tdBtnElements = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = "Fired";
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = "Edit";

        editBtn.addEventListener('click', (e) => {
            let valueElements = Array.from(e.currentTarget.parentNode.parentNode.childNodes);
            fnameElement.value = valueElements[0].textContent;
            lnameElement.value = valueElements[1].textContent;
            emailElement.value = valueElements[2].textContent;
            birthElement.value = valueElements[3].textContent;
            positionElement.value = valueElements[4].textContent;
            salaryElement.value = valueElements[5].textContent;

            salary = Number(tdSalaryElement.textContent);
            let currentTotalPrice = Number(sumElement.textContent);
            let totalPrice = currentTotalPrice - salary;
            sumElement.textContent = totalPrice.toFixed(2);

            e.currentTarget.parentNode.parentNode.remove();
        })
        firedBtn.addEventListener('click', (e) => {
            salary = Number(tdSalaryElement.textContent);
            let currentTotalPrice = Number(sumElement.textContent);
            let totalPrice = currentTotalPrice - salary;
            sumElement.textContent = totalPrice.toFixed(2);

            e.currentTarget.parentNode.parentNode.remove();
        })
        
        tdBtnElements.appendChild(firedBtn);
        tdBtnElements.appendChild(editBtn);

        trElement.appendChild(tdFnameElement);
        trElement.appendChild(tdLnameElement);
        trElement.appendChild(tdEmailElement);
        trElement.appendChild(tdBirthElement);
        trElement.appendChild(tdPositionElement);
        trElement.appendChild(tdSalaryElement);
        trElement.appendChild(tdBtnElements);

        tbodyElement.appendChild(trElement);

        let currentTotalPrice = Number(sumElement.textContent);
        let totalPrice = currentTotalPrice + salary;
        sumElement.textContent = totalPrice.toFixed(2);
    })
}
solve()