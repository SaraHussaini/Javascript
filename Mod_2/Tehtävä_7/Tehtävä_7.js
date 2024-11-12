
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}


function main() {
    const sidesInput = document.getElementById("sides"); // Get the sides input element
    const sides = parseInt(sidesInput.value); // Get the number of sides from user input

    if (isNaN(sides) || sides < 2) {
        alert("Please enter a valid number of sides (minimum 2).");
        return;
    }

    const diceRollsElement = document.getElementById("diceRolls"); // Get the <ul> element
    diceRollsElement.innerHTML = "";

    let roll = 0; //
    do {
        roll = rollDice(sides); // Roll the dice
        const listItem = document.createElement("li");
        listItem.textContent = `You rolled: ${roll}`;
        diceRollsElement.appendChild(listItem);
    } while (roll !== sides);
}
