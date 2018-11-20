/* Variables we need for the game */

var choices = ["Rock", "Paper", "Scissors"];

var play_you;
var play_machine;
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

/* Listen for the button clicks */

$("button").click(function(event) {
  var play_you = this.getAttribute("value");
  $("#play_you").text(play_you);
  computer_move();
  compare(play_you, play_machine);
});

/* generate a move by the computer */

function computer_move() {
  var random_number = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[random_number];
  $("#play_machine").text(play_machine);
  console.log('move: ' + play_machine);
}

/* Math.floor makes it an interger. "3" signifies the maximum number that the function can choose (the maximum value is not included and hte minimum value is included) and "0" is the minimum value the function can choose*/

/* compare your move with the computer's move and keep score*/
function compare(you, machine){

  var verdict = 'lose';

  if ( you == machine ) {
    var verdict = 'draw';
  }

  if ((you == "Rock") && (machine == "Scissors")) {
    verdict = 'win';
  }

  if ((you == "Paper") && (machine =="Rock")) {
    verdict = 'win';
  }

  if ((you == "Scissors") && (machine =="Paper")) {
    verdict = 'win';
  }

  if ((you == "Scissors") && (machine == "Rock")) {
    verdict = 'lose';
  }

  if ((you == "Rock") && (machine =="Paper")) {
    verdict = 'lose';
  }

  if ((you == "Paper") && (machine =="Scissors")) {
    verdict = 'lose';
  }

switch (verdict) {
  case 'win':
    won++;
    $("#game_won").text(won);
    break;
  case 'lose':
    lost++;
    $("#game_lost").text(lost);
    break;
  case 'draw':
    draw++;
    $("#game_draw").text(draw);
    break;
}

$("#verdict").text(verdict);

played++;
$("#games_played").text(played);
}

$("#reset").click(function(event) {
  $(".option").empty();
  $(".outcome").empty();
});
