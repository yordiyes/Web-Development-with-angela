var h2 = document.querySelector("h2");
var button = document.getElementById("myBtn");
var thirdList = document.getElementsByClassName("list");
var body = document.querySelector("body");
var listAnchor = document.querySelector("li a");

button.style.backgroundColor = "yellow";

button.addEventListener("click", function(){
    h2.innerText = "Ma Men You Have clicked the button";
    thirdList[2].innerText = "You have changed me by the button";
    body.style.backgroundColor = "lightblue";
    listAnchor.style.color = "red";

});

var check = document.querySelector("input");
check.addEventListener("change", function(){
    if(this.checked){
        var p = document.createElement("p");
        p.innerText = "You have agreed to the terms and conditions of the company";
        document.body.appendChild(p);
    }
})

// var h1 = document.querySelector("h1");
// h1.classList.add("huge");
var anchorFirst = document.querySelector("a");
anchorFirst.setAttribute("href","https://www.bing.com");