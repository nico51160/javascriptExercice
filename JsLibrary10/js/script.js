$(document).ready(function(){
    $('aside').before($('div'));
    $('section').hide();
    $('#s1').show();

   // $('#bt1').click(function() {
     //   let section = $('#s2').show('slow');
      //  $('#s1').before(section);
    //});

    let j;
    
    let = compter = $('section').length;
    console.log(compter);


    for(let i = 0; i < $('section').length; i+=1) {
        $('#bt'+i).click(function() {
            j = i+1;
            $('#s'+i).before($('#s'+j).show('slow'));
        });

    }
});