let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Invalid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let guessCount = 0;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guessCount++;
  if (guess > targetNum) {
    guess = prompt("too high guess again");
  } else {
    guess = prompt("too low guess again");
  }
}
if (guess === "q") {
  console.log("OK YOU QUIT");
} else {
  console.log("YOU GOT IT");
  console.log(
    `The number was ${targetNum} and you guessed ${guessCount} times`
  );
}
