var h2 = document.querySelector("h2");
var button = document.getElementById("myBtn");
var thirdList = document.getElementsByClassName("list");
var body = document.querySelector("body");

button.addEventListener("click", function(){
    h2.innerText = "Ma Men You Have clicked the button";
    thirdList[2].innerText = "Yordanos Yeshitla";
    body.style.backgroundColor = "lightblue";
});

var check = document.querySelector("input");
check.addEventListener("change", function(){
    if(this.checked){
        var p = document.createElement("p");
        p.innerText = "You havae agreed to the terms and conditions of the company";
        document.body.appendChild(p);
    }
})