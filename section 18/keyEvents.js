document.addEventListener("keydown", function(event){// i can make the event keyPress or keyUp. but it is not recommended to use keyPress event whish is similsr to keu down .
    if(event.key === "a"){
        console.log("Small a")
    }else if(event.key === "A"){
        console.log("Capital a");
    }else{
        console.log("You pressed "+event.key + " key!") 
    }
})

const input = document.getElementById("inputField");
input.addEventListener("input", ()=>{
    console.log("input")
})
const submit = document.querySelector(".submit")
submit.addEventListener("click", function(event){
    document.body.style.backgroundColor = "LightGray";
    

}, { once: true })