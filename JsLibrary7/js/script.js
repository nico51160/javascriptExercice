$(document).ready(function(){
    $('header div').hide();
    $('#tel').hide();

    $('section').on({
        mouseenter: function() {
            $('header div').show();
            $('header').css('justify-content', 'space-between')
            $('.fa-circle-user').css('color' , '#c0392b');
        },
        mouseleave: function() {
            $('header div').hide();
            $('header').css('justify-content', 'center')
            $('.fa-circle-user').css('color' , '#2c3e50');

        },
        click: function() {
            $('#tel').show();
            $('#tel').click(function(){
                $(this).hide();
            });
        }

    });
});