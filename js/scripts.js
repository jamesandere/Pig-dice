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
    alert("You rolled a 1");
  }
  else{
    this.yourScoreInThisRound += this.diceRoll;
  }
}

Roller.prototype.hold = function(){
  this.overallScore += this.yourScoreInThisRound;
  this.yourScoreInThisRound = 0;
  alert("Next player");
}

Roller.prototype.winner = function(){
if(this.overallScore >= 10)  {
  alert("You won");
}
freshGame();
}

Roller.prototype.freshGame = function(){
  this.diceRoll=0;
  this.yourScoreInThisRound=0;
  this.overallScore=0;
}




//UI logic
$(document).ready(function(){
$("#freshGame").click(function() {
  $("#game").empty();
  $("#round").empty();
  $("#ov").empty();
})
playerOne = new Roller();
playerTwo = new Roller();
$("#one").click(function(){
  playerOne.diceRoll = rollingDice();
  $("#game").text(playerOne.diceRoll);
  playerOne.roll();
  $("#round").text(playerOne.yourScoreInThisRound);
})

$("#two").click(function(){
  playerTwo.diceRoll = rollingDice();
  $("#gam").text(playerTwo.diceRoll);
  playerTwo.roll();
  $("#round2").text(playerTwo.yourScoreInThisRound);
})

$("#hold1").click(function(){
  playerOne.hold();
  $("#ov").text(playerOne.overallScore);
  $("#game").empty();
  $("#round").empty();
})

$("#hold2").click(function(){
  playerTwo.hold();
  $("#ov2").text(playerTwo.overallScore);
  $("#gam").empty();
  $("#round2").empty();
})



















})

































































// $(document).ready(function(){
//   $("#start").click(function(){
//     $(".head").slideUp();
//     $(".rules").show();
//   });
//
//   $("#rule").click(function(){
//     $(".rules").hide();
//     $(".dets").show();
//   });
//
//   $("#next").click(function(){
//     $(".dets").hide();
//     $(".wel").show();
//
//     var name = $("#name").val();
//     var email = $ ("#email").val();
//     playerOne = new Player(name,email);
//     $(".name").text(playerOne.name);
//     $(".em").text(playerOne.email);
//
//     var name2 = $("#name2").val();
//     var email2 = $ ("#email2").val();
//     playerTwo = new Player(name2,email2);
//     $(".name2").text(playerTwo.name);
//     $(".em2").text(playerTwo.email);
//   });
//
//   $("#proc").click(function(){
//     $(".wel").hide();
//     $(".play").show();
//   });
//
//   $("#new").click(function(){
//     $(".play").hide();
//     $(".head").show();
//   })
//
//   $("#hold1").click(function(){
//     playerOne.hold();
//   })
// });
