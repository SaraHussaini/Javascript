'use strict';

let numParticipants = +prompt("Enter the number of participants:");


let participants =[]

for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participants ${i + 1}:`);
           participants.push(name);

    }

participants.sort()
let greeting = "";
for (let i=0; i < numParticipants; i++) {
    console.log("test");
    greeting += `<li> ${participants[i]} </li>`;
}


document.getElementById('target').innerHTML= `${greeting}`;



