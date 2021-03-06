function getFormattedDate(dateObject) {
    let formattedDate = "";

    if (dateObject.getDate() < 10) {
        formattedDate =+ "0";
    };
    formattedDate = dateObject.getDate() + '.';

    if (dateObject.getMonth() < 9) {
        formattedDate += '0';
    };
    formattedDate += dateObject.getMonth() + 1 +'.';

    formattedDate += dateObject.getFullYear() + ' ';
    
    if (dateObject.getHours() < 10) {
        formattedDate += '0';
    };
    formattedDate += dateObject.getHours() + ':';
    
    if (dateObject.getMinutes() < 10) {
        formattedDate += '0';
    };
    formattedDate += dateObject.getMinutes() + ' ';

    let weekDay = dateObject.getDay();
    if (weekDay == 1) {
        formattedDate += 'Monday';
    } else if (weekDay == 2) {
        formattedDate += 'Tuesday';
    } else if (weekDay == 3) {
        formattedDate += 'Wednesday';
    } else if (weekDay == 4) {
        formattedDate += 'Thursday';
    } else if (weekDay == 5) {
        formattedDate += 'Friday';
    } else if (weekDay == 6) {
        formattedDate += 'Saturday';
    } else {
        formattedDate += 'Sunday';
    }
    return formattedDate;
};

let myBD = new Date(1998, 7, 9);
console.log(getFormattedDate(myBD));