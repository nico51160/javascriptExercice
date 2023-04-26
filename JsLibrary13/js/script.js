$(document).ready(function() {
    $('li').each(function() {

        let lien = $(this).attr('data-lien');

        $(this).mouseenter(function() {           
            $(this).animate({
                width: '200px',
               fontSize: '1.2rem' 
            }, 1000);
            $(this).text(lien);
        });

        $(this).mouseleave(function() {
            $(this).animate({
                width: '35px',
                fontSize: '1.5rem' 
            }, 1000);
            $(this).text(lien.charAt());
        });
    });

});