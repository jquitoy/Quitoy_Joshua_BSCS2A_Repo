function weatherAdvice(temperature, isRaining) {
    var message = '';
    if ( temperature < 10) {
        message = "Wear a heavy jacket.";
    } else if ( temperature > 10 && temperature < 20 &&  isRaining ) {
        message = "Bring an umbrella.";
    }
    else {
        message = "Enjoy the weather!"
    }
    return message;
}

console.log(weatherAdvice(8, false))
console.log(weatherAdvice(15, true))
console.log(weatherAdvice(30, false))

/* 
1 start program 
2 create function named weatherAdvice
    3 declare a variable named message
    4 if temperature is less than 10 
        4.1 set the value of message to "Wear a heavy jacket."
    5 else if the temperature is between 10°C and 20°C as well as isRaining is equal to True
        5.1 set the value of message to "Bring an umbrella."
    6 otherwise
        6.1 set the value of message to "Enjoy the weather!"
    7 return message
8 end program
*/


