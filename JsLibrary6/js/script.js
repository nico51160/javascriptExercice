$(document).ready(function(){
    $('#form').submit(function(event) {
        event.preventDefault();


        let civilite = $('#civilite').val();
        let nom      = $('#nom').val();
        let prenom   = $('#prenom').val();
        if(civilite == 0 || nom == '' || prenom == '') {
            alert('veuillez entrer votre nom, prenom et civilité')

        } else {
            $('#form').off('submit').submit();
        }

    });


});