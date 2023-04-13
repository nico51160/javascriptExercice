$(document).ready(function(){
    $('input[name="produit"]').change(function() {
        let produit = ($(this).attr('id'));
        if(produit == 'boulangerie') {
            $('.tarif').filter('.boulangerie').css('filter', 'blur(0)');
            $('.tarif').filter('.patisserie').css('filter', 'blur(3px)');
        } else {
            $('.tarif').filter('.patisserie').css('filter', 'blur(0)');
            $('.tarif').filter('.boulangerie').css('filter', 'blur(3px)');
        }
    });
});