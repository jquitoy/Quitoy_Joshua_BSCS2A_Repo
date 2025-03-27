function Named(firstName, lastName) {
    var fullNamed = "My full name is " + firstName + " " + lastName;

    if (lastName == "Quitoy") {
        fullNamed = "Hi, Mr.Quitoy! Welcome back!";
    } else if (lastName == "Buensalido") {
        fullNamed = "Hello, Mr. Buensalido. You have previousuly been banned from the server, goodbye!";
    }
    return fullNamed;
}

var firstName = 'Joshua';
var lastName = 'Quitoy';

var fullName = Named(firstName, lastName);

console.log(fullName);
console.log(Named("Ian", "Dumangon"));
console.log(Named("Bryan", "Narte"));
console.log(Named("Michael", "Buensalido"));
