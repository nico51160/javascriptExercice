let pizza = 'reine';
let quantite = 5;

let commande = function(piz, qt) {
      let PU;
      if(piz == "reine") { PU = 8; }
      else if(piz == "royal") { PU = 10; }
      else if(piz == "calzone") { PU = 12; }

      let calcul = PU * qt;

      return document.getElementsByTagName('div')[0].innerHTML = `
      total a payer : <strong>${calcul}</strong> &euro;`;

};

commande(pizza, quantite);