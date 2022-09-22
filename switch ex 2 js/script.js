let fruit    = 'banane';
let quantite = 10000;


const TARIF = {
    pomme: 0.5,
    banane: 1,
    mangue: 1.5,
};

switch(fruit) {
    case 'pomme' :
        let tarifPomme = TARIF.pomme * quantite;
        document.getElementById('box').innerHTML = `
        Montant a payer : ${tarifPomme} &euro;`;
        break;

    case 'banane' :
        let tarifbanane = TARIF.banane * quantite;
        document.getElementById('box').innerHTML = `
        Montant a payer : ${tarifbanane} &euro;`;
        break;

    case 'banane' :
         let tarifmangue = TARIF.mangue * quantite;
         document.getElementById('box').innerHTML = `
         Montant a payer : ${tarifmangue} &euro;`;
         break;


}