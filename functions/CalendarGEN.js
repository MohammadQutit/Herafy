
export function addHours (date,h) {
    let x=new Date(date)
    x.setTime(x.getTime() + (h*60*60*1000));
    return x;
  }

export function addDays (date2,days) {
    let date = new Date(date2);
    date.setDate(date.getDate() + days);
    return date.toISOString();
}

export function getDates(startDate, stopDate) {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate).toISOString().slice(0, 10));
        currentDate = addDays(currentDate,1);
    }
    return dateArray;
}
