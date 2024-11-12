'use strict';

let luvut = []


 for (let i = 0; i < 5; i++)  {
     let arvo = +prompt("Anna kokonaisluku: ")
     luvut.push(arvo)
}

 for (let i = 5; i >= 0; i--){
     console.log(luvut[i])
 }
