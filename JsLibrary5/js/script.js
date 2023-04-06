$(document).ready(function(){
    $('#cat').hide();
    $('#catID').hide();

    $('#catType').change(function() {
        if(this.value == 1) {
            $('#catID').show();
            $('#cat').hide();
        } else if(this.value == 2) {
            $('#cat').show();
            $('#catID').hide();

        } else {
            $('#cat').hide();
            $('#catID').hide();
        }
    });


});