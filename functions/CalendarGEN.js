
export function addHours (date,h) {
    let x=new Date(date)
    x.setTime(x.getTime() + (h*60*60*1000));
    return x;
  }

export const addDays= (date2,days)=> {
    var date = new Date(date2);
    date.setDate(date.getDate() + days);
    console.log(date);
    return date
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
