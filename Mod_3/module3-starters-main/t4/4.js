'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// Hae <select>-elementti
const target = document.getElementById('target');

// Käy läpi students-taulukko ja lisää <option>-elementit
for (const student of students) {
  // Luo uusi <option>-elementti
  const option = document.createElement('option');

  // Aseta optionin arvot
  option.value = student.id;       // Aseta value-attribuutti
  option.textContent = student.name; // Aseta näkyvä nimi

  // Lisää <option> <select>-elementtiin
  target.appendChild(option);
}