let maximum = parseInt(prompt("Guess the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Tyoe q to quite the game)!");
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempt++;
    } else if (guess < targetNum) {
        guess = prompt("Guess too low! Enter a new guess:");
        attempt++;
    } else {
        guess = prompt("invalid guess. please enter a number or q to quit");
    }
}

if (guess === 'q') {
    console.log("Ok. you quit")
} else {
    console.log("YOU WINNNN")
    console.log(`You got it! It took you ${attempt} guesses.`)
}
