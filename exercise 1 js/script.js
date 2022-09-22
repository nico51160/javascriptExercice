let pizza = 'reine';
let quantite = 100;
let PU;
let remise;
let ecrirepizza;
let ecrireRemise;

if(pizza == 'calzone') {
    PU = 8;
} else if(pizza == 'reine') {
    PU = 10;
} else if(pizza == 'royale') {
    PU = 12;
}

if((quantite >= 5) && (quantite < 10) ) {
    remise = 2;
} else if(quantite >= 10) {
    remise = 5;
} else {
    remise = 0;
}

if(remise == 0) {
    ecrireRemise = '';
} else {
    ecrireRemise = `Remise <strong>${remise}</strong> &euro; <br />`;
}

if(quantite <= 1) {
  ecrirepizza = 'pizza';
} else {
  ecrirepizza = 'pizzas';
}

let total = PU * quantite - remise;
console.log(total);

document.getElementsByTagName('div')[0].innerHTML = `
vous avez commandé <strong>${quantite}</strong> ${ecrirepizza} <br />
type de pizza commandée : ${pizza} <br />
valeur unitaire : <strong>${PU}</strong> &euro; <br />
${ecrireRemise}
Total à payer <strong>${total}</strong> &euro;
`;

let newTotal = total - PU;

quantite >= 10 ?
   document.getElementsByTagName('div')[1].innerHTML =
`vous avez le droit à une pizza gratuite <br />
nouveau total a payer: ${total} - ${PU} = <strong>${newTotal}</strong> &euro
Merci pour votre commande.`
: document.getElementsByTagName('div')[1].innerHTML =
`Merci pour votre commande.`;
