// bussiness logic
var playerOne = {};
var playerTwo = {};


var rollingDice=function() {
  return Math.floor(6*Math.random()) + 1;
}

function Roller() {
  this.diceRoll = 0;
  this.yourScoreInThisRound = 0;
  this.overallScore = 0;
}


Roller.prototype.roll = function(){
  if(this.diceRoll === 1){
    this.yourScoreInThisRound = 0;
    alert("Oops! You rolled a 1. Allow the next player to roll.");
  }
  else{
    this.yourScoreInThisRound += this.diceRoll;
  }

}

Roller.prototype.hold = function(){
  this.overallScore += this.yourScoreInThisRound;
  this.yourScoreInThisRound = 0;
  document.getElementById("nex").innerHTML="Your turn is over, next player.";
  if(this.overallScore >99) {
    document.getElementById("win").innerHTML="You won";
  }
 }


Roller.prototype.freshGame = function(){
  this.diceRoll=0;
  this.yourScoreInThisRound=0;
  this.overallScore=0;
}

 //UI logic
 $(document).ready(function(){
 playerOne = new Roller();
 playerTwo = new Roller();





 $("#one").click(function(){
  playerOne.diceRoll = rollingDice();
  $("#game").text(playerOne.diceRoll);
  playerOne.roll();
  $("#round").text(playerOne.yourScoreInThisRound);
  if(playerOne.diceRoll === 1){
    $(".pl1").hide();
    $(".pl2").show();
  }
})

$("#two").click(function(){
  playerTwo.diceRoll = rollingDice();
  $("#gam").text(playerTwo.diceRoll);
  playerTwo.roll();
  $("#round2").text(playerTwo.yourScoreInThisRound);
  if(playerTwo.diceRoll === 1){
    $(".pl1").show();
    $(".pl2").hide();
  }
})

$("#hold1").click(function(){
  playerOne.hold();
  $("#ov").text(playerOne.overallScore);
  $("#game").empty();
  $("#round").empty();
  $(".pl1").hide();
  $(".pl2").show();
})

$("#hold2").click(function(){
  playerTwo.hold();
  $("#ov2").text(playerTwo.overallScore);
  $("#gam").empty();
  $("#round2").empty();
  $(".pl2").hide();
  $(".pl1").show();
  $("#nex").hide();
 })
 })

$(document).ready(function(){
  $("#start").click(function(){
    $(".head").slideUp();
    $(".rules").show();
  });

  $("#rule").click(function(){
    $(".rules").hide();
    $(".dets").show();
  });

  $("#next").click(function(){
    $(".dets").hide();
    $(".wel").show();
    $("#freshGame").show();

    var name = $("#name").val();
    var email = $("#email").val();
    $(".name").text(name);
    $(".em").text(email);

    var name2 = $("#name2").val();
    var email2 = $("#email2").val();
    $(".name2").text(name2);
    $(".em2").text(email2);
  });

  $("#proc").click(function(){
    $(".wel").hide();
    $(".play").show();
  });

  $("#freshGame").click(function(){
    location.reload();
  })

});
