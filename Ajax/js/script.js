$(document).ready(function(){
    $('#s1').click(function() {
        $('section:nth-child(1)').load('section-1.txt', function() {});
    });

    $('#s2').click(function() {
        $('section:nth-child(2)').load('section-2.html', function() {
            alert('Modification de la section');
        });

    });

    $('#s3').click(function() {
        $('section:nth-child(3)').load('section-3.html', function() {});
    });


});