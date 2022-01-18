function demo(array){

    let arrSort = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
   
    console.log(arrSort.join('\n'));
}
demo([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );