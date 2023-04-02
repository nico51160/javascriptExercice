$(document).ready(function(){
    $('section').hide();
    $('header button').click(function(){
        $('section').show();
    });
    $('.fa-circle-xmark').click(function(){
        $('section').hide();
    });
});