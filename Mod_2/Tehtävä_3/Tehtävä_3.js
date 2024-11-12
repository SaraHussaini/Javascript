'use strict';

let dogNames = [];

for (let i = 1; i <= 6; i++) {
    let name = prompt(`Anna koiran nimi ${i}:`);
    dogNames.push(name);
}
dogNames.sort().reverse();

let dogNamesList = document.getElementById("dogNamesList");
dogNames.forEach(dogName => {
   let listItem = document.createElement("ul");
    listItem.textContent = dogName;
    dogNamesList.appendChild(listItem);
});