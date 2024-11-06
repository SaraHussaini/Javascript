
const shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {

    const number = parseFloat(prompt("Enter a number:"));


    if (number < 0) {

        document.getElementById("result").innerText = "The square root of a negative number is not defined.";
    } else {

        const squareRoot = Math.sqrt(number);
        document.getElementById("result").innerText = `The square root of ${number} is ${squareRoot}.`;
    }
} else {

    document.getElementById("result").innerText = "The square root is not calculated.";
}
