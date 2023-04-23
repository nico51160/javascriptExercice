$(document).ready(function(){
    $('nav').hide();
    $('#detail').hide();

    $('#navigation div').click(function() {
        $('nav').slideToggle('slow');
    });

    $('#linkDetail').click(function() {
        $('#produit').hide();
        $('#detail').fadeIn('slow');
    });

    $('#linkProduit').click(function() {
        $('#detail').hide();
        $('#produit').fadeIn('slow');
    });

});