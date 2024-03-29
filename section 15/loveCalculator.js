var name = "Nathnael";
var loverName = "Betelhem";

var score = Math.floor(Math.random()*100);
;
if(score > 70 || score === 100){
    console.log(`Your love score is ${score}% You love each other like kanye loves kanye`);
}else if(score > 30 && score <= 70){
    console.log(`Your love score is ${score}%`)
}else{
    console.log(`Your love score is ${score}% you go together like water and oil.`)
}