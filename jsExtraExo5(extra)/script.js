let login      = document.getElementById('login');
let pass       = document.getElementById('pass');
let entrer     = document.getElementById('entrer');
let voirPass   = document.getElementById('voirPass');
let info       = document.getElementById('info');
let formulaire = document.getElementById('formulaire');



// ouvrir et fermer l oeil du password

voirPass.addEventListener('click', function() {
    //this.classList.remove('fa-eye-slash');
    //this.classList.add('fa-eye');
    if(this.classList[1] == "fa-eye-slash") {
        this.classList.replace('fa-eye-slash', 'fa-eye');
        pass.type = "text"; 
    } else {
        this.classList.replace('fa-eye', 'fa-eye-slash');
        pass.type = "password"; 
    }
    

});






// Controle de validation du formulaire

// let valider = () => {
//    if (login.value && pass.value) {
        entrer.disabled = false;
//    } else {
//       entrer.disabled = true;
//        info.innerText = "Merci de remplir le formulaire";
//    }
//}

//login.addEventListener('keyup', function() {
//    valider();
//});

//login.addEventListener('keyup', function() {
//    valider();
//});
let valider = () => {
    if(login.value && pass.value) {
        return true;
    } else {
        info.innerText = "Merci de remplir le formulaire";
        return false;
    }
}

formulaire.addEventListener('submit', function(e) {
    if(valider()) {} else {
        e.preventDefault();
    }
});

login.addEventListener('keyup', function() {
    info.innerText = "";
});

pass.addEventListener('keyup', function() {
    info.innerText = "";
});