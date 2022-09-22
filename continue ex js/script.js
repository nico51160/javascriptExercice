let pizzas = ['calzone', 'reine', 'royale'];

for(let i of pizzas) {
    if(i == 'reine') {
    console.log('la reine n\'estv plus disponible');
    continue;
    }
    console.log(i);
}

