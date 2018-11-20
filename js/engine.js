/* Variables we need for the game */

var choices = ["Rock", "Paper", "Scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;



/* Listen for the button clicks */
$("#rock").click(function(event) {
  var play_you = 'Rock';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

$("#paper").click(function(event) {
  var play_you = 'Paper';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

$("#scissors").click(function(event) {
  var play_you = 'Scissors';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  console.log('move: ' + play_machine);


  return play_machine;
}

/* Math.floor makes it an interger. "3" signifies the maximum number that the function can choose (the maximum value is not included and hte minimum value is included) and "0" is the minimum value the function can choose*/

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

  if ( verdict == 'win') {
    won++;
    $("#game_won").text(won);
  }

  if ( verdict == 'lose') {
    lost++;
    $("#game_lost").text(lost);
  }

  if ( verdict == 'draw') {
    draw++;
    $("#game_draw").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#games_played").text(played);

}
