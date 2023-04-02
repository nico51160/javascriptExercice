$(document).ready(function(){
    $('#login').keydown(function(){
        $('label[for="login"]').css('color','#27ae60');
    });
    $('#pass').keydown(function(){
        $('label[for="pass"]').css('color','#27ae60');
    });

    $('#login').keyup(function(){
        $('label[for="login"]').css('color','#000');
    });
    $('#pass').keyup(function(){
        $('label[for="pass"]').css('color','#000');
    });
});