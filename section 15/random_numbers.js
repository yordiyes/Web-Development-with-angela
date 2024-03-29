// JS Math.random method can be used to generate random numbers
// with 16 digit precision
// Math.random gives us a random number between 0 and 1(not including 1)
var number= Math.random();
console.log(number);

number = number * 6;//this allow us to get a number between 0 and 6(not inclusive of 6)
number = Math.floor(number);//to make it whole number
console.log(number)