//creation de la promesse

const P = new Promise((resolve, reject) => {
    if(clients !='') {
        resolve(clients);
    } else {
        reject('liste des clients indisponible');
    }
    
});

P.then( (cl) => {
    let afficher = document.getElementById('afficher');
    let nbClient = cl.length;
   // afficher.innerText = cl[0];
    

    for(let i =0; i<nbClient; i++){
        afficher.innerHTML += cl[i] + '<br>';
    }

    return nbClient;

}).then((nb) => {
    let nombre = document.getElementById('nombre');
    nombre.innerText = `il y a actuellement ${nb} client`;
}).catch((e) => {
    afficher.innerHTML = e;
})