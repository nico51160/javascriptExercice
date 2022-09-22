let questions = document.querySelectorAll('.question');
let reponse  = document.querySelector('.reponse');


for(question of questions) {
    question.addEventListener('click', function() {

        //recuperer le numero de la question
        let numero = this.getAttribute('data-numero');
        //mise en relation la bonne reponse 
        document.querySelector('#rep' + numero).classList.toggle('afficheReponse')
        //la question est activé ou non
        this.classList.toggle('active');
        /*reponse.classList.toggle('afficheReponse');*/
    });


};


