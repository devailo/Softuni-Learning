function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputEl = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRest = document.querySelector('#bestRestaurant p').textContent;
      let bestWorkers = document.querySelector('#workers p').textContent;

      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (const line of inputEl) {
         
         let [restoName, workersInfo ] = line.split(' - ');
         let workers = workersInfo.split(', ');
         
         for (const worker of workers) {
            let [workerName, workerSalary] = worker.split(' ');

            if (!output.hasOwnProperty(restoName)) {
               output[restoName] = {};
            }if(output.hasOwnProperty(restoName)){
               output[restoName][workerName] = Number(workerSalary);
            }
            
         }
      }
      let entries = Object.entries(output);

      for (const entry of entries) {
         let key= entry[0];
         let values = Object.values(entry[1]);

         for (let salary of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);

      let print ='';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
      
      
   }
}