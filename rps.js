let counter = 0;
let computerCounter = 0;

function rockPS() {
let humanChoice = prompt("Choose your rock paper or scissors");

const rps = ["rock", "paper", "scissors"];

var randomIndex = Math.floor(Math.random() * rps.length);
var randomElement =  rps[randomIndex];

console.log(humanChoice + " vs " + randomElement);

if (randomElement === humanChoice) {
	counter++; console.log("You win!")} else {computerCounter++; console.log("Computer wins :(")};

console.log("Your current score is: " + counter);
console.log("The computers score is: " + computerCounter);
}
