$(document).ready(function(){
    $("h1").addClass("big-title");
    $("button").addClass("like-list")
    $(".submit").click(function(){
        $("h1").css("color", "purple");
        $("button").slideToggle();
        $("a").css("font-size",  34).css("color", "red").css("font-style", "normal");
    })
    $("button").click(function(){
        $("body").css("background-color", "gray");
    })
    $(document).keydown(function(event){
        $("h1").text(event.key)
    })
});