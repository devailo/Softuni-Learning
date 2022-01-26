function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of rows) {
         row.className = '';
      }

      for (const row of rows) {
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}