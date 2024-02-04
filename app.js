let maximum = parseInt(prompt("Enter a random number, less than 100! Type 'X' to quit");
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * 100);

let guess = prompt("Enter your first guess, less than 100!" (Type 'X' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'X') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'X' to quit");
    }
}

if (guess === 'X') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}