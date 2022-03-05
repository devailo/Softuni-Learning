async function solve() {
    const url = `http://localhost:3030/jsonstore/collections/students`;

    const table = document.querySelector('#results tbody');

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(s => {
        const firstName = s.firstName;
        const lastName = s.lastName;
        const facultyNumber = s.facultyNumber;
        const grade = s.grade;

        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = lastName;

        const facNumCell = tr.insertCell(2);
        facNumCell.innerText = facultyNumber;

        const gradeCell = tr.insertCell(3);
        gradeCell.innerText = grade;

        table.appendChild(tr);
    });

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const firstNameInput = document.getElementsByName('firstName')[0];
        const lastNameInput = document.getElementsByName('lastName')[0];
        const facNumInput = document.getElementsByName('facultyNumber')[0];
        const gradeInput = document.getElementsByName('grade')[0];

        if (isNaN(gradeInput.value)) {
            return alert('grade must be number')
        }
        if (firstNameInput.value || lastNameInput.value || facNumInput.value || gradeInput.value) {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNumber: facNumInput.value,
                    grade: gradeInput.value,
                })
    
            });
    
            const tr = document.createElement('tr');
    
            const firstNameCell = tr.insertCell(0);
            firstNameCell.innerText = firstNameInput.value;
    
            const lastNameCell = tr.insertCell(1);
            lastNameCell.innerText = lastNameInput.value;
    
            const facNumCell = tr.insertCell(2);
            facNumCell.innerText = facNumInput.value;
    
            const gradeCell = tr.insertCell(3);
            gradeCell.innerText = gradeInput.value;
    
            table.appendChild(tr);
        }
        

        firstNameInput.value = '';
        lastNameInput.value = '';
        facNumInput.value = '';
        gradeInput.value = '';
    })

}
solve();