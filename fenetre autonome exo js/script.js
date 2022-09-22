const BOX = document.querySelector('#box');
let openFenetre = () => {
    open('fenetre.html', 'toto', 'width=600, height=300')
};

BOX.addEventListener('click', function() {
    openFenetre()
});