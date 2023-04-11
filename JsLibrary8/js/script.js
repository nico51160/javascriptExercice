$(document).ready(function(){
    $('#boxPass').hide();

    $('#user').change(function() {
        if($(this).val() != '') {
            $('#boxPass').show('slow');
            $(this).attr('class', 'on');
        } else {
            $(this).attr('class', '');

        }
    });

    $('#pass').keyup(function() {
        if($(this).val().length == 6) {
            $('input[type="submit"]').prop('disabled', false);
            $(this).attr('class', 'on');
            $('label').attr('class', 'vert');
            $('section').attr('class', 'active');
        } else {
            $('input[type="submit"]').prop('disabled', true);
            $(this).attr('class', '');
            $('label').attr('class', '');
            $('section').attr('class', '');
        }
    });
});