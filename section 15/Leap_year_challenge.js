function leapYear(year){
    if (year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                console.log(year + " is leap year.");
            }else{
                console.log(year + " is not leap year.");
            }
        }
        else{
            console.log(year + " is leap year.");
        }
    }else{
        console.log(year + " is not leap year.");
    }
}
leapYear(2100);