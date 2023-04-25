$(document).ready(function() {
    $('section p').hide();

    $('section input[type="submit"]').click(function(event) {
        event.preventDefault();
        $('#modale').animate({ top: '40%'}, 2000);
        $('section').fadeTo('slow', 0.2);
    });

    $('#modale i').click(function() {
        $('#modale').animate({top: '-400px'},2000);
        $('section form').fadeOut(2000);
        $('section p').fadeIn(2000);
        $('section').fadeTo('slow', 1);

    });

});