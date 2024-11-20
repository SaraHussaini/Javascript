'use strict';


const imgElem = document.querySelector('#target');
const pElem = document.querySelector('#trigger');

function hiiriPaale(evt){
    imgElem.src = 'img/picB.jpg';
}
pElem.addEventListener('mouseover', hiiriPaale);

