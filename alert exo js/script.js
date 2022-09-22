const CLOSE = document.querySelector('.close');
const BOX   = document.querySelector('#box');

CLOSE.addEventListener('click', function() {
    alert('vous allez supprimer la boite');
    BOX.style.display = 'none';
});
