var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0 ;
let guesses = 0 ;

let isSunk = false ;

// game logic
while (!isSunk) {
    guess = prompt("Din aton bombahan halin 0 to 6?");

    if (guess == null) {
        alert("Thanks for playing!!");
        break;
    }

	guess = parseInt(guess, 10);

	if (isNaN(guess) || guess < 0 || guess > 6) {
		alert("Enter a valid number between 0 and 6!");
		continue;
		//skip the code
	}

	guesses++;

	const hitIndex = shipLocations.indexOf(guess);

	if (hitIndex !== -1) {
		alert("Hit!")
		shipLocations.splice(hitIndex, 1);
		hits++;
		if (shipLocations.length === 0) {
			isSunk = true;
		}
	} else {
		alert("Miss!")
	}
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";

alert(stats)
