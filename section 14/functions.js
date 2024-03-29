// this is an introduction about javascript functions
var list = ["Hey", "Welcome","to","my program"];
function specialSymbols(){
    for(var i of list){
        console.log(i);
    }
}
specialSymbols();

// functions with parameters
function square(i){
    console.log(i*i);
}
square(2);