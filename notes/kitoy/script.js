document.title = "omg website";

document.body.style.backgroundColor = "#ff6347";

const username = "Abao";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest": username;


function myFunction() {
    document.body.style.backgroundColor = "#313131";    
}

console.dir(document)