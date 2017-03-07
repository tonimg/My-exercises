// Star the game into a function
function bingoGame() {
	// Message welcome
	var name = prompt("For the star the game please. \nWhat is your name? please.");
	var welcomeMessage = ("Welcome " + name + " to the new Bingo Game!!!\n");
	console.log(welcomeMessage + "\nNow we show you card and number of the ball: \n");
	// Empty array where should be the numbers

	bingoCard = [];
	// Star function for genered the cards
	var points = 0;

	function newCard() {
		var numbersCard = [];
		for (var i = 0; i < 24; i++) {
			var randomNumber = Math.floor(Math.random() * 24) + 1;
			var randomBallNumber = Math.floor(Math.random() * 24) + 1;

			function randoms(newCard) {
				randomNumber = Math.floor(Math.random() * 75) - numbersCard.slice(0, 1);
				randomBallNumber = Math.floor(Math.random() * 75) - numbersCard.slice(0, 1);
			}
			if (randomNumber == randomNumber || randomBallNumber == randomBallNumber) {
				randoms(newCard);
			} else {
				false
			};
			if (randomNumber == randomBallNumber) {
				points += 1;
			} else {}
			bingoCard.push({
				number: randomNumber,
				matched: randomBallNumber
			});
			console.log("Your number is: " + bingoCard[i].number, " and the ball number: " +
				bingoCard[i].matched);
		}
		console.log("\nTotal of points: " + points)
	}
	newCard();
}
bingoGame();