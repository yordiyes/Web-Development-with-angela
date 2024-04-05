var buttonColours = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence(){
    level ++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random()*4);
    var  randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
};

function playSound(name){
    var curAudio = new Audio("sounds/"+name + ".mp3");
    curAudio.play();
}

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed")
    setTimeout(function() {
    $("#"+ currentColour).removeClass('pressed');
    }, 100);
}

function  checkAnswer(currentLevel){
    
}