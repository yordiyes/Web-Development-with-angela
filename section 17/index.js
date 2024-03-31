let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomImage1 = "images/dice"+randomNumber1+".png";
let leftImage = document.querySelector(".img1");
leftImage.setAttribute("src", randomImage1);

let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomImage2 = "images/dice"+randomNumber2+".png";
let rightImage = document.querySelector(".img2");
rightImage.setAttribute("src", randomImage2);

let h1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    h1.innerHTML = "🚩 Player 1 Wins"
}else if(randomNumber1 < randomNumber2){
    h1.innerHTML = "Player 2 Wins 🚩"
}else{
    h1.innerHTML = "Draw!";
}

