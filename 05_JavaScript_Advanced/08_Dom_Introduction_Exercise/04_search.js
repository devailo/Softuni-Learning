function search() {

   let searchEl = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let resultEl = document.getElementById('result');

   let counter = 0;

   for (const town of towns) {
      if (town.textContent.includes(searchEl)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   resultEl.textContent = `${counter} matches found`
}
