'use strict';

'use strict';

const names = ['John', 'Paul', 'Jones'];

// Hae elementti, johon sisältö lisätään
const target = document.getElementById('target');

// Luo HTML-koodi käyttämällä for-silmukkaa
let listItems = '';
for (const name of names) {
    listItems += `<li>${name}</li>`;
}

// Lisää HTML sisällöksi elementtiin
target.innerHTML = listItems;
