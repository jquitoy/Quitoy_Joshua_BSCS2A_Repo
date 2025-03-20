var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc ;
var location2 = location1 + 1 ;
var location3 = location2 + 1 ;

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

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";

alert(stats)

// var accuracy = (3/guesses) * 100;

// var rank;

// if (accuracy > 95) {
//     rank = "Challenger";
// } else if (accuracy > 90) {
//     rank = "Grandmaster";
// } else if (accuracy > 85) {
//     rank = "Diamond";
// } else {
//     rank = "Bronze";
// }

// var stats = "You used " + guesses + " hits. " + " Your accuracy is " + (accuracy) + "%. " + "You ranked: " + rank;

// alert(stats);