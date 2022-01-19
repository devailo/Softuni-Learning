function demo(month, year){
    
  let date = new Date(year, month,0).getDate();

  return date;
}
demo(1, 2012);
demo(2, 2021);
