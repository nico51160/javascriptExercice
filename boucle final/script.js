/**** variables */

let pizzas = ['calzone', 'reine', 'royale'];
const BOX  = document.getElementById('box');
let liste  = 'liste des pizzas commandées ';

/*** boucle for */

for(let i = 0; i < pizzas.length; i+=1) {
    if(i == pizzas.length-1) {
      liste += pizzas[i] +'.';
      break;
    }
    liste += pizzas[i] +', ';
    
}

/*** affichage sur la page web */

BOX.innerText = liste;
