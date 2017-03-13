//Message welcome
var nameUser = prompt("For the star the game please. \nWhat is your name? please.");
var welcomeMessage = ("Welcome " + nameUser + " to the new Bingo Game!!!\n");
console.log(welcomeMessage + "\nNow we show you card and number of the ball: \n");
// Star the game into a function
function bingoGame() {
// Global variables.
var points = 0;
bingoBall = [];
var randomBallNumber = [];
var numbersCard = 24;
bingoCard = [];
var randomNumber = [];
//Defined the numbers of cardboard
while (bingoCard.length < numbersCard) {
  randomNumber = Math.floor(Math.random() * 74) + 1;
  var exist = false;
  for (var i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i] == randomNumber) {
      exist = true;
      break;
    }
  }
  if (!exist) {
    bingoCard[bingoCard.length] = randomNumber;
  }
}
console.log("You game whith those numbers: " + bingoCard + "\n");
//Definined the numbers extracted of drum
while (bingoBall.length < numbersCard) {
  randomBallNumber = Math.floor(Math.random() * 74) + 1;
  var existBall = false;
  for (var j = 0; j < bingoCard.length; j++) {
    if (bingoBall[j] == randomBallNumber) {
      existBall = true;
      points +=1; 
      break;
    }
  }
  if (!existBall) {
    bingoBall[bingoBall.length] = randomBallNumber;
  }
}
console.log("These some the number extract of the drum : " + bingoBall + "\n");
//Message for total points
console.log( 'Total points ' + points + '\n');
// User want play?
var next = prompt('Do you want next card? y/n');
  if (next == 'y') {
    bingoGame();
  } else {
    console.log('bye');
  }

}
bingoGame();
//defined the total points. No completed
var points = 0;
console.log("Total points: " + points);
}
bingoGame();
