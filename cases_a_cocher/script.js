let formulaire = document.getElementById('formulaire');
let casas      = document.querySelectorAll('input[type="checkbox"]');
let message    = document.getElementById('message');
let info       = document.getElementById('info');
let i          = 0;

for(let casa of casas) {
    casa.addEventListener('change', function() {
        if(casa.checked) {
            i += 1;
        } else {
            i -= 1;
        }
        message.innerText= "";

        switch (i) {
            case 0:
                info.innerText = "Vous pouvez choisir jusqu'à 3 pizzas"
                break;
            case 1:
                info.innerText = "vous pouvez choisir encore 2 pizzas"
                break;
            case 2:
                info.innerText = "vous pouvez choisir encore 1 pizzas"
                break;
            case 3:
                info.innerText = "vous avez choisi le nombre maximum de pizza"
                break;
            default:
                info.innerText = "vous avez depassé le nombre maximum de pizza"
                break;
        }
    });
}

let verifCheck = () => {
    if(i == 0) {
        message.innerText = "merci de choisir au moins une pizza";
        return false;
    } else if(i > 3) {
        message.innerText = "Vous devez choisir au maximum 3 pizzas";
        return false;
    } else {
        return true;
    }
}


formulaire.addEventListener('submit', function(e){
    if(verifCheck()) {} else {
        e.preventDefault();
    }    
});