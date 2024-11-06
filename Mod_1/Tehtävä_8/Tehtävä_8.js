i
const startYear = parseInt(prompt("Enter the start year:"), 10);
const endYear = parseInt(prompt("Enter the end year:"), 10);


if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    document.getElementById("leapYearList").innerHTML = "<li>Please enter valid start and end years, with the start year less than or equal to the end year.</li>";
} else {

    for (let year = startYear; year <= endYear; year++) {

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

            const listItem = document.createElement("li");
            listItem.textContent = year;
            document.getElementById("leapYearList").appendChild(listItem);
        }
    }
}
