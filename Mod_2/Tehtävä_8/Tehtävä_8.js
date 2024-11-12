function concat(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}


const names = ["Johnny", "DeeDee", "Joey", "Marky"];


const concatenatedString = concat(names);

document.getElementById("result").textContent = `Result: ${concatenatedString}`;