// this is a challenge that tells the user how many days, 
// weeks and months have left if the person lives till 90 years.
function lifeInWeeks(age){
    var days,weeks,months,yearsRemainng;
    yearsRemainng = 90 - age;
    days = yearsRemainng * 365;
    weeks = yearsRemainng * 52;
    months = yearsRemainng * 12;
    console.log("You Have "+days+" days "+ weeks+" weeks and "+months+" months left.")
}
lifeInWeeks(12);