let names = ["Angela","Ben","abebe","michael","Rout"];
let len = names.length;

function whosPaying(names){
    let index =Math.floor(Math.random() * len);
    return(names[index] + " is going to pay lunch today!")
}
console.log(whosPaying(names));
console.log(whosPaying(names));
console.log(whosPaying(names));


