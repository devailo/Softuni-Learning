import { render, html } from 'https://unpkg.com/lit-html?module'

async function getData() {
   const result = await fetch('http://localhost:3030/jsonstore/advanced/table')
   const data = await result.json()

   return Object.values(data)
}

const students = await getData();

const studentTemplate = (student, select) => html`
<tr class=${select ? 'select' : ''}>
   <td>${student.firstName} ${student.lastName}</td>
   <td>${student.email}</td>
   <td>${student.course}</td>
</tr>`;

update();

function update(match = '') {
   const result = students.map(s => studentTemplate(s, compare(s, match)));
   render(result, document.querySelector('tbody'));
}

document.getElementById('searchBtn').addEventListener('click', search);

function search() {
   const match = document.getElementById('searchField').value;
   update(match);
   document.getElementById('searchField').value = '';
}

function compare(student, match) {
   return Object.values(student).some(s => s.toLowerCase().includes(match.toLowerCase()) && match);
}



