
const givenNumbers = new Set();


function addNumber() {
    const inputElement = document.getElementById("numberInput");
    const messageElement = document.getElementById("message");
    const numberListElement = document.getElementById("numberList");

    const number = Number(inputElement.value);


    if (isNaN(number) || inputElement.value.trim() === "") {
        messageElement.textContent = " Program stopped.";
        return;
    }

    if (givenNumbers.has(number)) {
        messageElement.textContent = `The number ${number} was already entered. Program stopped.`;
        inputElement.disabled = true;
        displayNumbers();
        return;
    }


    givenNumbers.add(number);


    messageElement.textContent = `Number ${number} added.`;
    inputElement.value = "";


    displayNumbers();
}


function displayNumbers() {
    const numberListElement = document.getElementById("numberList");


    numberListElement.innerHTML = "";


    const sortedNumbers = Array.from(givenNumbers).sort((a, b) => a - b);


    for (const num of sortedNumbers) {
        const listItem = document.createElement("li");
        listItem.textContent = num;
        numberListElement.appendChild(listItem);
    }
}
