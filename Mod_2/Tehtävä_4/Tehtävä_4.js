const numbers = [];

while (true) {

    const input = +prompt("Anna luku (0 lopettaa):");

    // Tarkista, onko syöte nolla, jolloin ohjelma lopetetaan
    if (input === 0) {
        break;
    }

    // Lisää annettu luku numbers-taulukkoon
    if (!isNaN(input)) {
        numbers.push(input);
    } else {
        console.log("Annettu arvo ei ollut kelvollinen numero.");
    }
}

// Järjestä taulukko suurimmasta pienimpään
numbers.sort((a, b) => b - a);

// Tulosta järjestetyt luvut konsoliin
console.log("Annetut luvut suurimmasta pienimpään:");
numbers.forEach(number => console.log(number));