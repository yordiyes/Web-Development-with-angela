//This is to prevent any jQuery code from running before the document is finished loading (is ready).
$(document).ready(function (){
    //this is a practice on jquery library

    // $(document).ready(function (){
    //     $("h1").css("color", "blue");
    // });
    // $("button").css("background-color", "gray")
    // $("button").on("click", function(){
    //     alert("hey")
    // })

    console.log($("h1").css("color"));
    console.log($("button").css("font-size"));
    $("h1").addClass("big-title margin-50")//this will add the specified class to the h1 elemenet
    // $("h1").removeClass("big-title")//and this one will remove the class from the h1 element
    $("button").click(function(){
        // $("h1").css("color", "blue");
        $("h1").slideToggle();
    });
    $("input").keypress(function(event){
        // console.log(event.key);
        $("a").text("GOOGLE");
        $("a").css("color", "black")
        $("body").css("background-color", "gray");
    })  
    $(document).keypress(function(event){
        // console.log(event.key);
        $("h1").text(event.key + " pressed");
    })
    $("h1").on("mouseover", function(){
        $("h1").css("color", "purple");
    })
    // in oreder to add elements without touching our html, we can use the append, prepend, before and after methods in jquery
    // these are some of the examples to iillustrate this:-
    // $("h1").before("<button>Before button</button>")//this will add the "before button" before the h1.
    // $("h1").after("<button>AFter button</button>")// this will add the "after button" after the h1 element.
    // $("h1").append("<button>Appended button</button>") // this will add the "append button" inside the h1 tag but after the h1's text.
    // $("h1").prepend("<button>Prepended Button </buttton>") // this wll add the prepended buttono in side the h1 tag but befor the h1's text.
    // $("button").remove() // add this will wipe out all the buttons from the page

});
