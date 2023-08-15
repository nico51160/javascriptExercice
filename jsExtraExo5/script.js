let login  = document.getElementById('login');
let pass   = document.getElementById('pass');
let entrer = document.getElementById('entrer');
let voirPass = document.getElementById('voirPass');



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

let valider = () => {
    if (login.value && pass.value) {
        entrer.disabled = false;
    } else {
        entrer.disabled = true;
    }
}

login.addEventListener('keyup', function() {
    valider();
});

login.addEventListener('keyup', function() {
    valider();
});
