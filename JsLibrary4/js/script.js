$(document).ready(function(){

    $('#prenom').focus(function() {
        $('label[for="prenom"]').css({
            'background-color': '#d35400',
            'color': '#f1c40f',
            'border-color': '#d35400'
        })
    });
    $('#prenom').blur(function() {
        $('label[for="prenom"]').css({
            'background-color': '#bdc3c7',
            'color': '#ecf0f1',
            'border-color': '#bdc3c7'
        })
    });




    $('#nom').focus(function() {
        $('label[for="nom"]').css({
            'background-color': '#d35400',
            'color': '#f1c40f',
            'border-color': '#d35400'
        })
    });
    $('#nom').blur(function() {
        $('label[for="nom"]').css({
            'background-color': '#bdc3c7',
            'color': '#ecf0f1',
            'border-color': '#bdc3c7'
        })
    });


  


});