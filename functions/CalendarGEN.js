const addDays = function(date2,days) {
    var date = new Date(date2);
    date.setDate(date.getDate() + days);
    return date;
}

export function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate).toISOString().slice(0, 10));
        currentDate = addDays(currentDate,1);
    }
    return dateArray;
}
//const d= getDates(start,end)
//obj ={}
//for(let i=0;i<d.length;i++){
  //  obj={...obj,[d[i]]:{color: 'green'}}
//}

//console.log(obj)
