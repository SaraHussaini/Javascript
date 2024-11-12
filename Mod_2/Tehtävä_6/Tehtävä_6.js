
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;{
    }
}



function main() {
    const diceRollsElement = document.getElementById("diceRolls"); // Get the <ul> element

    let roll = 0; // Variable to store each dice roll
    do {
        roll = rollDice(); // Roll the dice
        const listItem = document.createElement("li"); // Create a new <li> element
        listItem.textContent = `You rolled: ${roll}`; // Set the text of the <li> element
        diceRollsElement.appendChild(listItem); // Append the <li> element to the <ul>
    } while (roll !== 6); // Continue until the roll is 6
}


main();
