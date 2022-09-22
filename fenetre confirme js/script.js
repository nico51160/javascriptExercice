const CLOSE = document.querySelector('.close');
const BOX   = document.querySelector('#box');

CLOSE.addEventListener('click', function() {
    let test = confirm('vous allez supprimer la boite');
    if(test === true) {
        BOX.style.display = 'none';
    }
    
});
