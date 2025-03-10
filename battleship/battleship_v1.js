// declaring variables
var location1 = 3 ;
var location2 = 4 ;
var location3 = 5 ;

var guess;
var hits = 0 ;
var guesses = 0 ;

var isSunk = false ;

// game logic
while (isSunk == false) {
    guess = prompt("Which area from 0-6 should we hit?");

    if (guess < 0 || guess > 6) {
        alert("Enter a valid number!")
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("Hit!")

            if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship! Slay madam!")
            }   
        } else {
            alert("Miss!")
        }
    } 
}

var accuracy = (3/guesses) * 100;

var rank;

if (accuracy > 95) {
    rank = "Challenger";
} else if (accuracy > 90) {
    rank = "Grandmaster";
} else if (accuracy > 85) {
    rank = "Diamond";
} else {
    rank = "Bronze";
}

var stats = "You used " + guesses + " hits. " + " Your accuracy is " + (accuracy) + "%. " + "You ranked: " + rank;

alert(stats);