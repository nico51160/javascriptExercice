let arrive = false;
let d = new Date();

const P = new Promise( (resolve, reject) => {
    setTimeout( function(){
        if(arrive) {
            resolve('chauffeur arrivé à '+d.getHours()+'h'+d.getMinutes()+'min');
        }else {
            reject('chauffeur non disponible');
        }
    }, 2000);
});
