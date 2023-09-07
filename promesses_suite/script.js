let reponse = document.getElementById('reponse');

P
.then( (result) => {
    reponse.innerText = result;
} )
.catch( (e) =>{
    reponse.innerText = e;
} );