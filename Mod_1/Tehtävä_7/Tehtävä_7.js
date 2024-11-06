
const numberOfRolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
    document.getElementById("result").innerText = "Please enter a valid positive integer for the number of rolls.";
} else {
    let sum = 0;


    for (let i = 0; i < numberOfRolls; i++) {

        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    document.getElementById("result").innerText = `The sum of the dice rolls is: ${sum}`;
}
