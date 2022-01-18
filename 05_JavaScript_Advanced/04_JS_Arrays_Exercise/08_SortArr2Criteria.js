function demo(array){

    let arrSort = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
   
    console.log(arrSort.join('\n'));
}
demo(['test','Deny','omen','Default']);