
const year = parseInt(prompt("Enter a year:"), 10);

let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

const resultMessage = isLeapYear
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;


document.getElementById("result").innerText = resultMessage;
