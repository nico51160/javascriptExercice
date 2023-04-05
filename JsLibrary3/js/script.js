$(document).ready(function(){
    $('#prenom').keypress(function(event){
        $('label[for="prenom"]').css('color','#f3f3f3');
        let prenom = $(this).val();
        $('.prenom').text(prenom + event.key);

    });

    $('#nom').keypress(function(event){
        $('label[for="nom"]').css('color','#f3f3f3');
        let nom = $(this).val();
        $('.prenom').text(nom + event.key);

    });


});