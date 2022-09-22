let ligne = document.querySelectorAll('.ligne');


for (tr of ligne) {
    tr.addEventListener('mouseover', function() {
        this.classList.add('ligneOrange');
    });

    tr.addEventListener('mouseout', function() {
        this.classList.remove('ligneOrange');
    });
}

let p = document.getElementsByTagName('p');
let table = document.getElementsByTagName('table');

p[0].addEventListener('click', function() {
    table[0].hidden = true;
     
});
