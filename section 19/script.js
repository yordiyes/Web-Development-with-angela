//this is a practice on jquery library

// $(document).ready(function (){
//     $("h1").css("color", "blue");
// });
// $("button").css("background-color", "gray")
// $("button").on("click", function(){
//     alert("hey")
// })
console.log($("h1").css("color"));
console.log($("button").css("font-size"))
$("h1").addClass("big-title")//this will add the specified class to the h1 elemenet
// $("h1").removeClass("big-title")//and this one will remove the class from the h1 element
$("button").click(function(){
    $("h1").css("color", "blue")
});
$("input").keypress(function(event){
    console.log(event.key);
    $("a").text("GOOGLE.COM")
})
$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key)
})
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
})