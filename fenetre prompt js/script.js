const BOX   = document.querySelector('#box');
let prenom  = prompt('quel est ton prénom ?');
prenom      = prenom.toLowerCase();  

if(prenom == "carl") {
    BOX.innerHTML = "tu t'appelles comme moi"
} else if(prenom == ('')) {
    BOX.innerHTML = "merci d'entrer ton prenom"
} else {
    BOX.innerHTML = "ton prenom est different du mien"
}