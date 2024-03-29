var name = "Yordanos";
console.log(name.length);

// 140 or 280
var input = prompt("write some tweet.");
var inputLength = input.length;
var charLeft = 140 - inputLength;

alert(input.slice(0,140));
alert("You have written "+inputLength+" characters, you have "+ charLeft+" characters left.")

// var name2 = "Yordanos";
// console.log(name2.slice());