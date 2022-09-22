let = pizzas = ['calzone', 'reine', 'royal'];

for(let i of pizzas)  {
    if(i == 'reine') {
        console.log(i);
        break;
    }
    console.log(i);
}

console.log('ci dessus la liste des pizzas')