function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket.");
    } else if (temp < 70) {
        console.log("Wear a sweater.");
    } else {
        console.log("Wear a t-shirt.");
    }
}

whatShallIWear(50)
whatShallIWear(80)
whatShallIWear(60)

// function bark (dogName, dogWeight) {
//     if (dogWeight > 20) {
//         console.log(dogName + " says WOOF WOOF");
//     } else {
//         console.log(dogName + " says woof woof");
//     }
// }